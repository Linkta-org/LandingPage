'use client'

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, Dispatch, SetStateAction, useMemo } from 'react';
import { FlowState } from '../../early-access/page'
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signUpWithGitHub,
  signUpWithGoogle,
  createUserDoc,
} from '@/app/config/firebase';
import { doc } from 'firebase/firestore';
import { db } from '@/app/config/firebase';
import { generateInitialValues, generateValidationRules } from '@/app/utils/formInitialization';
import textInputConfig from '../../config/signupForm';
import { FormValues } from '@/app/types/signupForm';
import { parseAndCleanInput } from '@/app/utils/formInputProcessing';
import { checkDocumentExists, createUserDocument } from '@/app/services/firestore';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const initialValues = useMemo(() => generateInitialValues(textInputConfig), []);
  const validationRules = useMemo(() => generateValidationRules(textInputConfig), []);

  const form = useForm<FormValues>({
    initialValues,
    validate: validationRules
  });

  useEffect(() => {
    async function checkRedirectResult() {
      const res = await getRedirectResult(auth);  // Needed to access user data after redirect during OAuth sign in

      if (res) {
        setFlowState('processing');
        await createUserDoc(res.user);
        setFlowState('confirmed')
      }
    }
    checkRedirectResult();
  }, [setFlowState]);

  //TODO: update database setup to give default timeStamp to createdAt and 'Not provided' to source, & [] for interests and features
  const handleSubmit = async( { email, name, interests, source, features }: FormValues ) => {
    setFlowState('processing');
    // creates user document reference using email as document id
    const userDocRef = doc(db, 'users', email);

    const userData = {
      name,
      email,
      ...(interests && { interests: parseAndCleanInput(interests) }),
      ...(source && { source }),
      ...(features && { features: parseAndCleanInput(features) }),
    };

    if (!await checkDocumentExists(userDocRef)) {
      try {
        await createUserDocument(userDocRef, userData);
      } catch (error) {
        console.error('An error occurred during account creation.');
      }
    }

    setFlowState('confirmed');
    form.reset();
  };

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>

          <h1>Shape Our Future with Your Vision</h1>

          <h2>Get exclusive early access to try our product</h2>

          <section aria-label="Sign Up with Google or Github">
            <h3>sign up with google or github</h3>
            <Button onClick={signUpWithGoogle}>Continue with Google</Button><br/>
            <Button onClick={signUpWithGitHub}>Continue with Github</Button>
          </section>

          <section aria-label="Sign Up with Email">
            <h3>or sign up with email</h3>
            {textInputConfig.map((input, index) => (
              <TextInput
                key={`${input.field}-${index}`}
                label={input.label}
                placeholder={input.placeholder}
                required={input.required}
                {...form.getInputProps(input.field)}
              />
            ))}
            <Button type="submit">Join Waiting List</Button>
            <p>Privacy statement placeholder</p>
          </section>
        </form>
      </Box>
    </>
  )
}

export default PrelaunchSignUpForm;

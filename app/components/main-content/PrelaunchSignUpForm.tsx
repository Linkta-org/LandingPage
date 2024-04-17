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
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/config/firebase';
import { generateInitialValues, generateValidationRules } from '@/app/utils/formInitialization';
import textInputConfig from '../../config/signupForm';

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}

interface FormValues {
  name: string;
  email: string;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const initialValues = useMemo(() => generateInitialValues(textInputConfig), [textInputConfig]);
  const validationRules = useMemo(() => generateValidationRules(textInputConfig), [textInputConfig]);

  const form = useForm({
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

  async function handleSubmit(values: Record<string, string>) {
    const { email, name } = values;

    setFlowState('processing')

    // creates user document reference using email as document id
    const userDocRef = doc(db, 'users', email);
    // checks if document exists in db
    const userSnapShot = await getDoc(userDocRef);

    // creates a new document if none exists already
    if (!userSnapShot.exists()) {
      try {
        await setDoc(userDocRef, {
          name,
          email,
          createdAt: serverTimestamp()
        })
      } catch (error) {
        console.error('An error occurred during account creation.');
      }
    }

    setFlowState('confirmed')
  }

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

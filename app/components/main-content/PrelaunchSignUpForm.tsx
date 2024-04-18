'use client'

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { FlowState } from '../../early-access/page'
import { doc, serverTimestamp } from 'firebase/firestore';
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
  const form = useForm<FormValues>({
    initialValues: useMemo(() => generateInitialValues(textInputConfig), []),
    validate: useMemo(() => generateValidationRules(textInputConfig), [])
  });

  const handleSubmit = async( { email, name, interests, source, features }: FormValues ) => {
    setFlowState('processing');
    // creates user document reference using email as document id
    const userDocRef = doc(db, 'users', email);

    const userData = {
      name,
      email,
      interests: parseAndCleanInput(interests),
      source: source ?? 'not provided',
      features: parseAndCleanInput(features),
      createdAt: serverTimestamp(),
    };

  try {
    const documentExists = await checkDocumentExists(userDocRef);
    if (!documentExists) {
      await createUserDocument(userDocRef, userData);
    }
  } catch (error) {
    console.error('An error occurred during the user data process:');
  }

    setFlowState('confirmed')
    form.reset();
  };

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <h1>Shape Our Future with Your Vision</h1>
          <h2>Get exclusive early access to try our product</h2>
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

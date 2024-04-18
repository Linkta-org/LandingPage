'use client'

import { TextInput, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, Dispatch, SetStateAction } from 'react';
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

interface PrelaunchSignUpFormProps {
  setFlowState: Dispatch<SetStateAction<FlowState>>;
}
// TODO: to remove below interface once merged with PR #33
interface FormValues {
  name: string;
  email: string;
  interests?: string;
  source?: string;
  features?: string;
}

const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({ setFlowState }) => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',

    },

    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Please enter a valid email address')
    },
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

  async function handleSubmit( values: FormValues ) {
    const { email, name, interests, source, features } = values;

    setFlowState('processing')

    // creates user document reference using email as document id
    const userDocRef = doc(db, 'users', email);
    // checks if document exists in db
    const userSnapShot = await getDoc(userDocRef);

    const parseCommaSeparatedInput = (input: string | null | undefined): string[] => {
      if(!input) return [];
      return input.split(',').map(item => item.trim());
    };

    const cleanArray = (array: string[]): string[] => {
      return array.filter(item => item.length > 0);
    }

    const userData = {
      name,
      email,
      ...(interests && { interests: cleanArray(parseCommaSeparatedInput(interests)) }),
      ...(source && { source }),
      ...(features && { features: cleanArray(parseCommaSeparatedInput(features)) }),
    };

    //TODO: update database setup to give default timeStamp to createdAt and 'Not provided' to source, & [] for interests and features
    // creates a new document if none exists already
    if (!userSnapShot.exists()) {
      try {
        await setDoc(userDocRef, userData)
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
            <TextInput
              required
              label="Name"
              {...form.getInputProps('name')}
            />

            <TextInput
              required
              label="Email"
              {...form.getInputProps('email')}
            />

            <Button type="submit">Join Waiting List</Button>
            <p>Privacy statement placeholder</p>
          </section>
        </form>
      </Box>
    </>
  )
}

export default PrelaunchSignUpForm;

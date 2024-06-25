'use client';

import { TextInput, Box, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, {
  type UserDataValidation,
} from '@/app/schemas/userDataValidationSchema';
import UserConsent from './UserConsent';
import UniversalButton from '../common/UniversalButton';
import classes from './PrelaunchSignUpForm.module.css'
import { sendEmailLink } from '@/app/services/emailAuth';

export interface PrelaunchSignUpFormProps {
  handleSuccessfulSubmit: () => void;
}

const defaultFormValues = {
  name: '',
  email: '',
  interests: '',
  source: '',
};


const PrelaunchSignUpForm: React.FC<PrelaunchSignUpFormProps> = ({
  handleSuccessfulSubmit,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    validateInputOnBlur: ['name', 'email'],
    initialValues: defaultFormValues,
    validate: zodResolver(userDataValidationSchema),
  });

  async function handleSignupSubmit(rawUserData: UserDataValidation) {
    setIsLoading(true);

    const { email, name, interests, source } = rawUserData;

    window.localStorage.setItem('userName', name);
    if (interests) {
      window.localStorage.setItem('userInterest', interests);
    }
    if (source) {
      window.localStorage.setItem('userSource', source);
    }

    try {
      sendEmailLink(email.trim());
    } catch (error) {
      console.error('Error sending email link.');
    }

    handleSuccessfulSubmit();
    form.reset();
    setIsLoading(false);
  }

  return (
    <>
      <Box className="my-10 sm:px-10 max-w-lg">
        <form onSubmit={form.onSubmit(handleSignupSubmit)}>
          <h4 className="font-semibold text-base text-lg mb-8 tracking-tight text-light-border text-center">
            Get exclusive early access to Linkta
          </h4>
          <section
            aria-label="Sign Up with Email"
            className="mx-auto flex-col justify-center"
          >
            {textInputConfig.map((input, index) =>
              input.tooltipLabel ? (
                <Tooltip
                  multiline
                  key={`${input.field}-${index}`}
                  label={input.tooltipLabel}
                  position="bottom-start"
                  styles={{
                    tooltip: {
                      backgroundColor: '#3D5B50',
                      color: 'white',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      position: 'absolute',
                      width: '300px',
                      fontSize: '11px',
                    },
                  }}
                >
                  <TextInput
                    classNames={{
                      root: classes.root,
                      input: classes.input,
                      label: classes.label,
                      error: classes.error,

                    }}
                    label={input.label}
                    required={input.required}
                    aria-required={input.required ? 'true' : 'false'}
                    {...form.getInputProps(input.field)}
                  />
                </Tooltip>
              ) : (
                <TextInput
                  key={`${input.field}-${index}`}
                  id={`${input.field}-input`}
                  classNames={{
                    root: classes.root,
                    input: form.errors[input.field] ? `${classes.input} ${classes.inputError}` : classes.input,
                    label: classes.label,
                    error: classes.error
                  }}
                  error={form.errors[input.field]}
                  label={input.label}
                  required={input.required}
                  aria-required={input.required ? 'true' : 'false'}
                  {...form.getInputProps(input.field)}
                />
              )
            )}
            <section className='text-center mt-10'>
              <UniversalButton
                id="join-waiting-list-button"
                type="submit"
                label={isLoading ? "Adding..." : "Join Waiting List"}
                aria-label={isLoading ? "Adding you to our waiting list" : "Join Waiting List"}
                classNames={{
                  root: 'button-primary button-accent',
                }}
                disabled={isLoading}
              />

              <div className="pt-2 mb-2 text-light-text">
                <UserConsent />
              </div>
            </section>
          </section>
        </form>
      </Box>
    </>
  );
};

export default PrelaunchSignUpForm;

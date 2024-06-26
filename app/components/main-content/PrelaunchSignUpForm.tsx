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
import classes from './PrelaunchSignUpForm.module.css';
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
    <Box className="my-10 max-w-lg sm:px-10 sm:max-w-sm md:max-w-md lg:max-w-lg">
      <form onSubmit={form.onSubmit(handleSignupSubmit)}>
        <section
          aria-label="Sign Up with Email"
          className="mx-auto flex flex-col justify-center space-y-4"
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
                    backgroundColor: '#D9D9D9',
                    color: '2B3C47',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    position: 'absolute',
                    width: '100',
                    fontSize: '0.65rem',
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
                  input: form.errors[input.field]
                    ? `${classes.input} ${classes.inputError}`
                    : classes.input,
                  label: classes.label,
                  error: classes.error,
                }}
                error={form.errors[input.field]}
                label={input.label}
                required={input.required}
                aria-required={input.required ? 'true' : 'false'}
                {...form.getInputProps(input.field)}
              />
            )
          )}
          <div className="mt-10 text-center">
            <UniversalButton
              id="join-waiting-list-button"
              type="submit"
              label={isLoading ? 'Adding...' : 'Get Early Access'}
              aria-label={
                isLoading
                  ? 'Adding you to our waiting list'
                  : 'Get Early Access'
              }
              classNames={{
                root: 'button-primary button-accent',
              }}
              disabled={isLoading}
            />
            <div className="mb-2 pt-2 text-light-text">
              <UserConsent />
            </div>
          </div>
        </section>
      </form>
    </Box>
  );
};

export default PrelaunchSignUpForm;

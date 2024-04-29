'use client';

import { TextInput, Box, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, {
  type UserDataValidation,
} from '@/app/schemas/userDataValidationSchema';
import { storeUserDataIfNew } from '@/app/services/firestore';
import PrivacyAgreement from '../common/PrivacyAgreement';
import userDataSanitizationSchema from '@/app/schemas/userDataSanitizationSchema';
import UniversalButton from '../common/UniversalButton';
import classes from '../../PrelaunchSignUpForm.module.css'

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

    const sanitizedUserData = userDataSanitizationSchema.parse(rawUserData);

    try {
      const userId = sanitizedUserData.email; // use user email as user Id to ensure user uniqueness
      await storeUserDataIfNew(userId, sanitizedUserData);
    } catch (error) {
      console.error('Error checking user data existence or storing user data.');
    }

    handleSuccessfulSubmit();
    form.reset();
    setIsLoading(false);
  }

  return (
    <>
      <Box className="max-w-screen-sm my-6 sm:px-4">
        <form onSubmit={form.onSubmit(handleSignupSubmit)}>
          <h4 className="font-semibold xl:text-base mb-2 tracking-tight text-light-border">
            Get exclusive early access to try our product
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
            <section className='text-center mt-8'>
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

              <footer className="pt-2">
                <PrivacyAgreement />
              </footer>
            </section>
          </section>
        </form>
      </Box>
    </>
  );
};

export default PrelaunchSignUpForm;

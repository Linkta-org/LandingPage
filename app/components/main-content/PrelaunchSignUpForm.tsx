'use client';

import { TextInput, Box, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, {
  type UserDataValidation,
} from '@/app/schemas/userDataValidationSchema';
import { createUserDoc } from '@/app/services/firestore';
import PrivacyAgreement from '../common/PrivacyAgreement';
import userDataSanitizationSchema from '@/app/schemas/userDataSanitizationSchema';
import UniversalButton from '../common/UniversalButton';

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
      await createUserDoc(sanitizedUserData);
    } catch (error) {
      console.error('Error checking user data existence or storing user data.');
    }

    handleSuccessfulSubmit();
    form.reset();
    setIsLoading(false);
  }

  return (
    <>
      <Box className="max-w-screen-sm text-center sm:px-4">
        <form onSubmit={form.onSubmit(handleSignupSubmit)}>
          <h1 className="pb-4">Shape Our Future with Your Vision</h1>

          <h2 className="text-sm">
            Get exclusive early access to try our product
          </h2>

          <section
            aria-label="Sign Up with Email"
            className="mx-auto flex-col justify-center"
          >
            {textInputConfig.map((input, index) =>
              input.tooltipLabel ? (
                <Tooltip
                  key={`${input.field}-${index}`}
                  label={input.tooltipLabel}
                  position="bottom"
                >
                  <TextInput
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
                  label={input.label}
                  required={input.required}
                  aria-required={input.required ? 'true' : 'false'}
                  {...form.getInputProps(input.field)}
                />
              )
            )}
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
        </form>
      </Box>
    </>
  );
};

export default PrelaunchSignUpForm;

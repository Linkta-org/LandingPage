'use client';

import { TextInput, Box, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import textInputConfig from '../../config/signupForm';
import { zodResolver } from 'mantine-form-zod-resolver';
import userDataValidationSchema, {
  type UserDataValidation,
} from '@/app/schemas/userDataValidationSchema';
import UniversalButton from '../common/UniversalButton';
import classes from '../../PrelaunchSignUpForm.module.css';
import { sendEmailLink } from '@/app/services/emailAuth';
import Link from 'next/link';

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
  const [checked, setChecked] = useState(false);

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
    <Box className="mx-auto my-10 sm:px-4 ">
      <form onSubmit={form.onSubmit(handleSignupSubmit)}>
        <h4 className="mb-8 text-center text-base font-semibold tracking-tight text-light-border lg:text-lg">
          Get exclusive early access to Linkta
        </h4>
        <div className="mx-auto flex-col justify-center">
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
            <div>
              <input
                className="mr-2"
                type="checkbox"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                id="agree-checkbox"
                aria-describedby="privacy-policy-desc"
              />
              <label
                htmlFor="agree-checkbox"
                className="inline-flex cursor-pointer items-center"
              >
                I agree to the{' '}
                <Link
                  href="/privacy-policy"
                  passHref
                  className="ml-1 underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            <UniversalButton
              id="join-waiting-list-button"
              type="submit"
              label={isLoading ? 'Adding...' : 'Join Waiting List'}
              aria-label={
                isLoading
                  ? 'Adding you to our waiting list'
                  : 'Join Waiting List'
              }
              classNames={{ root: 'button-primary button-accent' }}
              disabled={!checked || isLoading}
            />
          </div>
        </div>
      </form>
    </Box>
  );
};

export default PrelaunchSignUpForm;

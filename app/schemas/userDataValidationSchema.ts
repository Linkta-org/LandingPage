import { z } from 'zod';

/**
 * Zod schema for user input validation:
 * - `name`: Trimmed string, must be ≤ 50 characters and match allowed characters.
 * - `email`: Trimmed string, must be 6-254 characters and comply with the email regex.
 * - `interests`, `source`: Optional string fields.
 */
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameRegex = /^[\p{Letter}\s\-.']+$/u;

const userDataValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .max(50, { message: 'Name can be up to 50 characters.' })
    .refine((val) => val.length > 50 || nameRegex.test(val), {
      message:
        'Please use only letters, spaces, hyphens, and periods.',
    }),
  email: z
    .string()
    .trim()
    .min(6, {
      message: 'The email is too short. Please check again.',
    })
    .max(254, { message: 'Email can be up to 254 characters.' })
    .refine((val) => val.length > 254 || val.length < 6 || emailRegex.test(val), {
      message:
        'Invalid email format. Please check again.',
    }),
  interests: z.string().optional(),
  source: z.string().optional(),
});

export type UserDataValidation = z.infer<typeof userDataValidationSchema>;

export default userDataValidationSchema;

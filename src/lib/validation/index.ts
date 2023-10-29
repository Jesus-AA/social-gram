import * as z from 'zod';

export const SignupValidationSchema = z.object({
  name: z.string().min(2, { message: 'Your name is too short!' }),
  username: z.string().min(2, { message: 'Your username is too short!' }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at leat 8 characters.' }),
});
export const SigninValidationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at leat 8 characters.' }),
});

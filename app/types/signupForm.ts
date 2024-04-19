export type ValidationFunction = (value: string) => string | null | undefined;

export interface FormValues {
  name: string;
  email: string;
  interests?: string;
  source?: string;
  features?: string;
}
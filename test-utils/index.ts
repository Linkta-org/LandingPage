import userEvent from '@testing-library/user-event';

// Allows for convenient access to standard React Testing Library utilities when importing customRender
export * from '@testing-library/react';
export { render } from './customRender';
export { userEvent };

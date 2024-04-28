import { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { MantineProvider } from "@mantine/core";

/**
 * Wraps the given children with the MantineProvider.
 * This function is intended to be used as a wrapper component for React Testing Library's render function,
 * providing the necessary Mantine context to the component tree being tested.
 * 
 * @param {{ children: React.ReactNode }} props - Object containing:
 *   @param {React.ReactNode} children - The child components to be wrapped by the MantineProvider.
 * @returns {ReactElement} The child components wrapped in MantineProvider.
 */
const MantineProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  )
};

/**
 * Custom render function that includes wrapping components in the MantineProvider.
 * This function extends React Testing Library's render function by automatically wrapping the UI element
 * in the MantineProvider, ensuring that Mantine components used in the UI have the necessary context.
 * 
 * @param {ReactElement} ui - The element to be rendered.
 * @param {Omit<RenderOptions, string>} [options] - Optional React Testing Library render options, excluding 'wrapper'.
 * @returns {RenderResult} - The result of rendering, providing utilities to interact with the rendered component. 
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: MantineProviderWrapper, ...options});

export {customRender as render};

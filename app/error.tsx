'use client';

import { useEffect } from 'react';
import ErrorAnimation from '../public/lottiefiles/error.json';
import ClientSideLottie from './components/common/ClientSideLottie';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center h-lvh text-light-text">
      <h2 className="mt-36 text-6xl font-semibold">Oops!</h2>
      <p className="mt-4 text-2xl">Something went wrong!</p>
      <div className="mt-12 mb-12" aria-label='Error page' aria-live='assertive'>
        <ClientSideLottie
          autoplay={true}
          loop={true}
          className="w-[150px] h-[150px] py-2"
          src={ErrorAnimation}
        />
      </div>
      <p className="mb-48 text-xl">
        Please click <a href="#" className="underline decoration-light-link font-semibold" onClick={() => reset()}>here</a> to refresh the page or
        contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>
    </div>
  );
}
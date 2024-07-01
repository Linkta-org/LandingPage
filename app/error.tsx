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
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-light-text px-8">
      <h2 className="text-2xl font-semibold">Oops!</h2>
      <p className="mt-4 text-lg">Something went wrong!</p>
      <div className="mt-12 mb-12" aria-label='Error page' aria-live='assertive'>
        <ClientSideLottie
          autoplay={true}
          loop={true}
          className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] py-2"
          src={ErrorAnimation}
        />
      </div>
      <p className="mb-48 text-sm">
        Please click <a href="#" className="underline decoration-light-link font-semibold" onClick={() => reset()}>here</a> to refresh the page or
        contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>
    </div>
  );
}

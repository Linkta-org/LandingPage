'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import ClientSideLottie from './components/common/ClientSideLottie';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-light-text px-8">
      <h2 className="text-2xl font-semibold">Oops!</h2>
      <p className="mt-4 text-base">We couldn&apos;t find the page you&apos;re looking for</p>
      <div className="flex justify-center items-center mt-12 mb-12" aria-label='Page not found' aria-live='assertive'>
        <ClientSideLottie
          src={NotFoundAnimation}
          autoplay={true}
          loop={false}
          className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px]"
        />
      </div>
      <p className="mb-48 text-sm">
        Please click <a href="/" className="underline decoration-light-link font-semibold">here</a> to return home or contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>
    </div>
  );
}

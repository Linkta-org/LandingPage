'use client';

import NotFoundAnimation from '../public/lottiefiles/404.json';
import ClientSideLottie from './components/common/ClientSideLottie';

export default function NotFound() {
  return (
    <div className="text-center h-lvh text-light-text">
      <h2 className="mt-36 text-3xl font-semibold">Oops!</h2>
      <p className="mt-4 text-xl">We couldn&apos;t find the page you&apos;re looking for</p>
      <div className="flex justify-center items-center mt-12 mb-12" aria-label='Page not found' aria-live='assertive'>
        <ClientSideLottie
          src={NotFoundAnimation}
          autoplay={true}
          loop={false}
          className="w-[200px] h-[200px]"
        />
      </div>
      <p className="mb-48 text-lg">
        Please click <a href="/" className="underline decoration-light-link font-semibold">here</a> to return home or contact us at <a href="mailto:info@linkta.org" className="underline decoration-light-link font-semibold">info@linkta.org</a>
      </p>
    </div>
  );
}

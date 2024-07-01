'use client';

import loader from '../public/lottiefiles/loader.json';
import ClientSideLottie from "./components/common/ClientSideLottie";

export default function Loading() {
  return (
    <div aria-label='Loading content' aria-live='assertive' className="mx-auto text-center my-auto">
      <ClientSideLottie
        autoplay
        loop
        src={loader}
        className="w-[100px] h-[100px]"
      />
    </div>
  );
}

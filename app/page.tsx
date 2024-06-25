'use client';
import { useState } from 'react';
import HeadlineProposition from './components/main-content/HeadlineProposition';
import EmailVerificationPrompt from './components/main-content/EmailVerificationPrompt';
import PrelaunchSignUpForm from './components/main-content/PrelaunchSignUpForm';
import Image from 'next/image';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSuccessfulSubmit = (): void => setIsSubmitted(true);

  return (
    <div className="contained-div flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-10">
      <div className="w-full max-w-6xl">
        {isSubmitted ? (
          <EmailVerificationPrompt />
        ) : (
          <div className="flex flex-col items-center">
            <div className="mb-8 flex w-full justify-center md:mb-12">
              <HeadlineProposition />
            </div>
            <div className="linkta-main-content align-items-center flex flex-col px-10 md:flex-row md:justify-around">
              <section className="linkta-form min-w-9 text-xl sm:text-lg md:basis-1/2">
                <PrelaunchSignUpForm
                  handleSuccessfulSubmit={handleSuccessfulSubmit}
                />
              </section>
              <div className="linkta-image mb-8 flex self-center md:mb-0 md:basis-1/2">
                <Image
                  alt="A static image of 3D LinktaFlow, which you would rotate and click to explore different functionalities."
                  src="/Linkta-Landing.png"
                  width={800}
                  height={650}
                  className="linkta-flow-image scale-70 md:scale-85 lg:scale-100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

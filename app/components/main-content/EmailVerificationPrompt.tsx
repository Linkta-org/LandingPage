'use client';

import ClientSideLottie from '../common/ClientSideLottie';
import heart from '../../../public/lottiefiles/heart.json';

export default function EmailVerificationPrompt() {
  const linktaEmail = 'info@linkta.org';

  return (
    <section
      aria-live="polite"
      className="pl-4 pr-6 pt-8 text-center text-light-text sm:pl-0"
    >
      <div className="flex items-center justify-center">
        <h4 className="text-xl font-bold text-light-border">
          Thanks for signing up!
        </h4>
        <ClientSideLottie
          autoplay={true}
          loop={true}
          className="h-[70px] w-[70px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] lg:h-[125px] lg:w-[125px]"
          src={heart}
        />
      </div>
      <p className="py-4 text-base text-light-border">
        Please check your inbox on <strong>the same device</strong> to verify your email and complete the sign-up.
      </p>
      <section className="px-8 pt-10 sm:px-2 sm:pt-4 text-sm">
        <p className="py-3">
          Look for an email from us with a <strong>verification link</strong>.
        </p>
        <p>
          If it&apos;s not in your inbox, check your spam or junk folder.
        </p>
        <p className="pb-24 pt-3">
          Need help? Contact us at{' '}
          <a
            href={`mailto:${linktaEmail}`}
            className="font-semibold underline decoration-light-link"
          >
            {linktaEmail}
          </a>.
        </p>
      </section>
    </section>
  );
}

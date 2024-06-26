'use client';

import mailAnimationData from '../../../public/lottiefiles/mail-plane.json';
import ClientSideLottie from '../common/ClientSideLottie';

const ThankYou = () => {
  const linktaEmail = 'info@linkta.org';

  return (
    <article
      aria-live="polite"
      className="flex flex-col items-center text-center px-4 py-8"
    >
      <h2 className="text-3xl font-bold py-2">
        Thank you!
      </h2>
      <p className="text-xl py-2">
        We&apos;re excited to have you with us on this journey!
      </p>
      <ClientSideLottie
        src={mailAnimationData}
        autoplay={true}
        loop={true}
        className="h-[200px] w-[300px]"
      />
      <p className="text-lg py-2">
        Stay updated with our progress by following us on{' '}
        <a
          href="https://www.linkedin.com/company/100947448/"
          className="font-semibold underline decoration-light-link"
        >
          LinkedIn
        </a>{' '}
        or reach out to us at{' '}
        <a
          href={`mailto:${linktaEmail}`}
          className="font-semibold underline decoration-light-link"
        >
          {linktaEmail}
        </a>
      </p>
    </article>
  );
};

export default ThankYou;

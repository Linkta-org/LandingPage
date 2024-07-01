'use client';

import mailAnimationData from '../../../public/lottiefiles/mail-plane.json';
import ClientSideLottie from '../common/ClientSideLottie';

const ThankYou = () => {
  const linktaEmail = 'info@linkta.org';

  return (
    <article
      aria-live="polite"
      className="flex flex-col items-center text-center px-4 py-8 text-light-text "
    >
      <h2 className="text-xl font-bold py-4">
        Thank you!
      </h2>
      <p className="text-base">
        We&apos;re excited to have you with us on this journey!
      </p>
      <ClientSideLottie
        src={mailAnimationData}
        autoplay={true}
        loop={true}
        className="h-[150px] w-[250px] sm:h-[200px] sm:w-[300px] md:h-[250px] md:w-[350px] lg:h-[300px] lg:w-[400px]"
      />
      <p className="text-sm">
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

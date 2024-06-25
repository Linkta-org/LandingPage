'use client';

import mailAnimationData from '../../../public/lottiefiles/mail-plane.json';
import ClientSideLottie from '../common/ClientSideLottie';

const ThankYou = () => {
  const linktaEmail = 'info@linkta.org';

  return (
    <article
      aria-live="polite"
      className="mb-2 ml-4 px-2 py-12"
    >
      <h2 className="flex h-[60px] pt-4 align-bottom align-text-bottom text-3xl font-bold">
        Thank you!
      </h2>
      <p className="pt-4 text-lg">
        We're excited to have you with us on this journey!
      </p>
      <ClientSideLottie
        src={mailAnimationData}
        autoplay={true}
        loop={true}
        className="h-[200px] w-[300px]"
      />
      <p className="pt-4 text-base">
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

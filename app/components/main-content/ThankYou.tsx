'use client';

import mailAnimationData from '../../../public/lottiefiles/mail-plane.json';
import ClientSideLottie from '../common/ClientSideLottie';

const ThankYou = () => {
  const linktaEmail = 'info@linkta.org';

  return (
    <article aria-live="polite" className="py-12 ml-4 mb-2 px-2">
      <h2 className="flex pt-4 h-[60px] align-bottom">
        <span className="font-serif text-3xl font-bold align-text-bottom">
          Thank you!
        </span>
      </h2>
      <section>
        <p className="pt-4 text-lg">
          We&apos;re thrilled to have you join us on this exciting journey!
        </p>
        <p className="text-lg">
          Keep an eye on your inbox for an <strong>exclusive invitation</strong> coming your way soon!
        </p>
        <p className="hidden text-xs pt-2">
          (Our demo is almost ready, and we can&apos;t wait for you to experience it firsthand.)
        </p>
      </section>
      <div>
        <ClientSideLottie
          src={mailAnimationData}
          autoplay={true}
          loop={true}
          className="w-[300px] h-[200px]"
        />
      </div>
      <section>
        <p>
          If you&apos;d like to keep updated with the project,{' '}
          <a
            href="https://www.linkedin.com/company/100947448/"
            className="underline decoration-light-link font-semibold"
          >
            follow us on LinkedIn!
          </a>{' '}
          or email us at{' '}
          <a
            href={`mailto:${linktaEmail}`}
            className="underline decoration-light-link font-semibold"
          >
            {linktaEmail}
          </a>
        </p>
      </section>
    </article>
  );
};

export default ThankYou;

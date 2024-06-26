import Link from 'next/link';

export default function UserConsent() {
  return (
    <div className="mt-2 text-sm sm:text-sx md:text-sm lg:text-base">
      By continuing you are agreeing to our{' '}
      <Link
        href="/privacy-policy"
        className="text-light-secondary underline"
        aria-label="Read our privacy policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
    </div>
  );
}

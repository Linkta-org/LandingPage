import Link from 'next/link';

export default function Footer() {
  return (
    <div className="linkta-footer fixed bottom-0 flex w-full items-center justify-between border-t-2 bg-[#F8F8F8] px-8 py-2 text-xs text-light-text">
      <span>©2024 Linkta L.L.C. All rights reserved.</span>
      <div
        className="space-x-3"
      >
        <Link
          href="/privacy"
          className="underline"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="underline"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

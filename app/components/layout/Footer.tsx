import Link from 'next/link';

export default function Footer() {
  return (
    <div className="linkta-footer fixed bottom-0 w-full border-t-2 bg-[#F8F8F8] py-2 text-light-text flex justify-between items-center px-4">
      <span>©2024 Linkta L.L.C. All rights reserved.</span>
      <Link
        href="/privacy-policy"
        className="underline"
      >
        Privacy Policy
      </Link>
    </div>
  );
}

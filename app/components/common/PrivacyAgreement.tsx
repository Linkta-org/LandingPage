import Link from "next/link";

export default function PrivacyAgreement() {
  return (
    <div className="text-xs mt-2">
      By continuing you are agreeing to our <Link href="/privacy-policy">Privacy Policy</Link>
    </div>
  );
}

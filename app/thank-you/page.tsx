'use client';

import { useEffect } from 'react';
import { isSignInWithEmailLink } from 'firebase/auth';
import { auth } from '../config/firebase';
import { authenticateAndSaveUserDataFromEmailRedirect } from '../services/emailAuth';
import { useRouter } from 'next/navigation';
import ThankYou from '../components/main-content/ThankYou';

export default function ThankYouPage() {
  const router = useRouter();
  useEffect(() => {
    if (!isSignInWithEmailLink(auth, window.location.href)) {
      router.push('/');
    } else {
      let email = window.localStorage.getItem('emailForSignIn');
      if (email) {
        authenticateAndSaveUserDataFromEmailRedirect(email);
      } else {
        router.push('/');
      }
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center text-light-text">
      <section
        id="thank-you"
        className="mx-auto my-4 flex w-full flex-col items-center justify-center p-4"
      >
        <ThankYou />
      </section>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { isSignInWithEmailLink } from 'firebase/auth';
import { auth } from '../config/firebase';
import { authenticateAndSaveUserDataFromEmailRedirect } from '../services/emailAuth';
import { useRouter } from 'next/navigation';
import Loading from '../loading';
import ThankYou from '../components/main-content/ThankYou';

export default function ThankYouPage() {
  // const [isLoading, setIsLoading] = useState(true);

  // const router = useRouter();
  // useEffect(() => {
  //   if (!isSignInWithEmailLink(auth, window.location.href)) {
  //     router.push('/');
  //   } else {
  //     let email = window.localStorage.getItem('emailForSignIn');
  //     if (email) {
  //       authenticateAndSaveUserDataFromEmailRedirect(email);
  //       setIsLoading(false);
  //     } else {
  //       router.push('/');
  //     }
  //   }
  // }, [router]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <section
        id="thank-you"
        className="mx-auto my-4 flex w-full max-w-[430px] max-w-lg flex-col items-center justify-center p-4"
      >
        <ThankYou />
      </section>
    </div>
  );
}

'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import PrelaunchSignUpForm from '../components/main-content/PrelaunchSignUpForm';
import SubmissionStatus from '../components/main-content/SubmissionStatus';

export type FlowState = 'viewingForm' | 'processing' | 'confirmed';
/**
 * Handles the flow from viewing the signup form, processing the form submission,
 * to confirming submission success, followed by redirection to the homepage after 3 seconds.
 */
export default function PreLaunchSignupFlowContainer() {
  const [flowState, setFlowState] = useState<FlowState>('viewingForm');
  const router = useRouter()

  useEffect(() => {
    if (flowState !== 'confirmed') return;
    const timeoutId = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timeoutId);
  }, [flowState, router]);

  // TODO: replace loader placeholder with component
  return (
    <main>
      {flowState === 'viewingForm' && <PrelaunchSignUpForm setFlowState={setFlowState} />}
      {flowState === 'processing' && <div>loader placeholder</div>}
      {flowState === 'confirmed' && <SubmissionStatus />}
    </main>
  );
}

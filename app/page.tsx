import { useState } from 'react';
import LinktaLogoWithText from './components/layout/LinktaLogoWithText';
import LandingPageMainHero from './components/main-content/LandingPageMainHero';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccessfulSubmit = () => {
      setIsSubmitted(true);
  };

  return (
    <div>
        <div className="sm:hidden ml-0">
          <LinktaLogoWithText />
        </div>
        <LandingPageMainHero />
    </div>
  );
}

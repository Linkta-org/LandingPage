'use client';
import { useRouter } from 'next/navigation';
import UniversalButton from '../common/UniversalButton';
import LandingPageTreeVisualizationPanel from './LandingPageTreeVisualizationPanel';

export default function LandingPageMainHero() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/early-access');
  };

  return (
    <main className="flex w-full">
      <section className="w-1/4">
        <h1>Streamline Your Learning with Linkta: Discover the Structure of Knowledge</h1>
        <h4>Linkta makes learning easier by uncovering the hidden relationships between concepts. Our tool allows you to see the big picture and reveals the connections between ideas, enabling you to focus on what matters most.</h4>
        <div className="mt-4">
          <UniversalButton
            type="button"
            onClick={handleClick}
            label="Join Our Journey"
            classNames={{
              root: 'button-primary sm:flex-o sm:align-self-end',
            }}
          />
        </div>
      </section>
      <div className='3/4'>
        <LandingPageTreeVisualizationPanel />
      </div>
    </main>
  );
}

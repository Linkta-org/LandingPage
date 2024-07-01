'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamic import of the Player component from @lottiefiles/react-lottie-player
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
});

interface ClientSideLottieProps {
  src: string | object;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

/**
 * Client-side Lottie component to display Lottie animations
 */
export default function ClientSideLottie({ src, className, autoplay, loop }: ClientSideLottieProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Effect to set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={src}
      className={className}
    />
  );
}

'use client'
import Spline from '@splinetool/react-spline';

export default function LandingPageTreeVisualizationPanel() {
  
  return (
    <div className="absolute">
      <Spline aria-label="Interactive 3D model of a tree, which you can rotate and click to explore different functionalities."
      className="relative scale-[1]" scene="https://prod.spline.design/igFoxNahg10ecXKH/scene.splinecode" />
    </div>
  );
}

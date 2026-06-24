import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-slate-950">
      
      {/* BACKGROUND VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source src="assets/hero/website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* BACKDROP BLUR & OVERLAY (Maintains the exact original premium dark cinematic depth look) */}
      <div className="absolute inset-0 bg-slate-750/45 z-10" />

    </section>
  );
};

export default Hero;
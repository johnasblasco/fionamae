import { useEffect, useRef, useState } from 'react';

const services = [
  {
    label: 'Design',
    title: 'Canva Template Editing',
    description: 'Professional template customization for your brand',
    features: ['Template editing', 'Brand styling', 'Image replace', 'Social format'],
    blobColor: '#ffd580',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=340&fit=crop&crop=center',
    imgAlt: 'Canva design tools',
  },
  {
    label: 'Social',
    title: 'Social Media Design',
    description: 'Eye-catching graphics for all platforms',
    features: ['Facebook posts', 'Instagram', 'Promo graphics', 'Ads'],
    blobColor: '#f4b8b0',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=340&fit=crop&crop=center',
    imgAlt: 'Social media graphics',
  },
  {
    label: 'Slides',
    title: 'Presentation Design',
    description: 'Professional presentations that captivate',
    features: ['Pitch decks', 'Business presentations', 'Educational slides', 'Profiles'],
    blobColor: '#a8d8ea',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=340&fit=crop&crop=center',
    imgAlt: 'Presentation slides',
  },
  {
    label: 'Admin',
    title: 'Virtual Assistance',
    description: 'Reliable administrative support you can trust',
    features: ['Data entry', 'Email management', 'Research', 'Scheduling'],
    blobColor: '#c3e6cb',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=340&fit=crop&crop=center',
    imgAlt: 'Virtual assistance',
  },
  {
    label: 'AI Tools',
    title: 'AI-Powered Support',
    description: 'Leveraging AI for enhanced productivity',
    features: ['ChatGPT', 'Gemini', 'Canva AI', 'Automation'],
    blobColor: '#d4b8f0',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&h=340&fit=crop&crop=center',
    imgAlt: 'AI powered tools',
  },
];

const SLIDE_W = 260;
const GAP = 28;
const SPEED = 60; // pixels per second

const duplicatedSlides = [...services, ...services];

export function Services() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const oneSetWidth = services.length * SLIDE_W + (services.length - 1) * GAP;
  const positionRef = useRef(0);

  useEffect(() => {
    let animationId: number;
    let lastTime: number | null = null;

    const animate = (timestamp: number) => {
      if (lastTime == null) lastTime = timestamp;
      const delta = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      if (!paused) {
        positionRef.current -= SPEED * delta;
        if (positionRef.current <= -oneSetWidth) {
          positionRef.current += oneSetWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [paused, oneSetWidth]);

  return (
    <section id="services" className="py-24 bg-accent/50 overflow-hidden">
      {/* CSS for blob, float & side shadows */}
      <style>{`
        @keyframes blobMorph {
          0%   { border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%; }
          25%  { border-radius: 40% 60% 45% 55% / 55% 45% 60% 40%; }
          50%  { border-radius: 50% 50% 40% 60% / 40% 60% 50% 50%; }
          75%  { border-radius: 45% 55% 60% 40% / 60% 40% 45% 55%; }
          100% { border-radius: 55% 45% 50% 50% / 50% 50% 55% 45%; }
        }
        @keyframes floatImg {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }
        .service-blob {
          animation: blobMorph 6s ease-in-out infinite alternate;
        }
        .service-img-float {
          animation: floatImg 3s ease-in-out infinite alternate;
        }

        /* Side shadows */
        .marquee-shadow-left,
        .marquee-shadow-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-shadow-left {
          left: 0;
          background: linear-gradient(to right, hsl(var(--accent) / 0.9), transparent);
        }
        .marquee-shadow-right {
          right: 0;
          background: linear-gradient(to left, hsl(var(--accent) / 0.9), transparent);
        }
      `}</style>

      {/* Centered header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-14">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
          Services I Offer
        </h2>
        <p className="text-lg text-muted-foreground">
          Professional support to help your business thrive
        </p>
      </div>

      {/* Full‑width marquee container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left shadow */}
        <div className="marquee-shadow-left" />
        {/* Right shadow */}
        <div className="marquee-shadow-right" />

        {/* Moving track – no padding, cards start from edge */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            willChange: 'transform',
            paddingLeft: '0px',   // first card starts at left edge
            paddingRight: '0px',
          }}
        >
          {duplicatedSlides.map((service, idx) => (
            <div
              key={`${service.title}-${idx}`}
              style={{
                flexShrink: 0,
                width: `${SLIDE_W}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                opacity: 0.9,
              }}
            >
              {/* Blob + image */}
              <div
                style={{
                  position: 'relative',
                  width: 220,
                  height: 220,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                }}
              >
                <div
                  className="service-blob"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: service.blobColor,
                    opacity: 0.85,
                    animationDelay: `${idx * -1.2}s`,
                  }}
                />
                <img
                  className="service-img-float"
                  src={service.img}
                  alt={service.imgAlt}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: 150,
                    height: 170,
                    objectFit: 'cover',
                    borderRadius: 12,
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.18))',
                    animationDelay: `${idx * -0.6}s`,
                    pointerEvents: 'none',
                  }}
                  draggable={false}
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                {service.label}
              </p>
              <h3 className="font-serif text-xl text-foreground font-bold mb-1 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1 justify-center max-w-[220px]">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2 py-1 rounded-full border border-border bg-background/60 text-muted-foreground whitespace-nowrap"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
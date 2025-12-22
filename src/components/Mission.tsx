import { useEffect, useRef, useState } from "react";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-40 bg-charcoal text-cream relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className={`font-sans text-xs tracking-luxury text-gold uppercase mb-8 block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Vision
          </span>

          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Shaping the behaviour of{" "}
            <span className="text-gold italic">one billion people</span> by 2030
          </h2>

          <div
            className={`w-24 h-px bg-gold mx-auto mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`font-sans text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Through strategic partnerships and purposeful networking, we're
            building a global movement of conscious leaders who understand that
            true success is measured not just in profit, but in the positive
            impact we create for humanity and our planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

import { useEffect, useRef, useState } from "react";

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ title, description, index }: ValueCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-8 lg:p-12 bg-card border border-border hover-lift transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <span className="font-sans text-xs tracking-luxury text-primary uppercase mb-4 block">
        0{index + 1}
      </span>
      <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
        {title}
      </h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Values = () => {
  const values = [
    {
      title: "Sustainability",
      description:
        "We champion leaders who prioritize long-term environmental and social impact over short-term gains, creating a legacy for future generations.",
    },
    {
      title: "Hospitality",
      description:
        "Our community embodies the art of genuine connection, creating spaces where every member feels valued, heard, and empowered to contribute.",
    },
    {
      title: "Humanity",
      description:
        "At our core, we believe in leadership that honors human dignity, fosters empathy, and builds bridges across cultures and communities.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <span className="font-sans text-xs tracking-luxury text-primary uppercase mb-4 block">
            Our Foundation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Built on Pillars of <span className="italic text-primary">Integrity</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

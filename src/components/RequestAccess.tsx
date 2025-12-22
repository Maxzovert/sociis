import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const RequestAccess = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="request" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-xs tracking-luxury text-primary uppercase mb-4 block">
            Join Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-6">
            Request <span className="italic text-primary">Exclusive</span> Access
          </h2>
          <p className="font-sans text-muted-foreground mb-12 max-w-xl mx-auto">
            Membership is by invitation only. Submit your request and our team
            will review your application within 48 hours.
          </p>

          {isSubmitted ? (
            <div className="p-8 border border-primary bg-primary/5">
              <p className="font-serif text-xl text-foreground mb-2">
                Thank you for your interest
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                We will be in touch shortly to discuss your membership.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-transparent border border-border text-foreground placeholder:text-muted-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-elegant uppercase hover:bg-accent transition-colors group"
                >
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                  Apply
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestAccess;

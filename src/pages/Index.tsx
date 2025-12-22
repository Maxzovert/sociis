import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Mission from "@/components/Mission";
import Partners from "@/components/Partners";
import RequestAccess from "@/components/RequestAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Values />
      <Mission />
      <Partners />
      <RequestAccess />
      <Footer />
    </main>
  );
};

export default Index;

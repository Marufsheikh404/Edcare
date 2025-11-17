import AboutPage from "@/components/Home/About";
import HeroSection from "@/components/Home/Hero";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
          <HeroSection></HeroSection>
          <AboutPage></AboutPage>
    </div>
  );
}

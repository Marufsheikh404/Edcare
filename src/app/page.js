import AboutPage from "@/components/Home/About";
import CoursesPage from "@/components/Home/Courses";
import HeroSection from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import NewsPage from "@/components/News";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
          <HeroSection></HeroSection>
          <AboutPage></AboutPage>
          <CoursesPage></CoursesPage>
          <WhyChooseUs></WhyChooseUs>
          <NewsPage></NewsPage>
    </div>
  );
}

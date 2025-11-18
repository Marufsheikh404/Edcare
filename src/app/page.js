import AboutPage from "@/components/Home/About";
import CoursesPage from "@/components/Home/Courses";
import HeroSection from "@/components/Home/Hero";
import InstructorPage from "@/components/Home/Instructor";
import QuestionPage from "@/components/Home/Question";
import Subcribepage from "@/components/Home/Subcribe";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import JourneyPage from "@/components/Journey";
import NewsPage from "@/components/News";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
          <HeroSection></HeroSection>
          <AboutPage></AboutPage>
          <CoursesPage></CoursesPage>
          <WhyChooseUs></WhyChooseUs>
          <QuestionPage></QuestionPage>
          <InstructorPage></InstructorPage>
          <JourneyPage></JourneyPage>
          <Subcribepage></Subcribepage>
          <NewsPage></NewsPage>
    </div>
  );
}

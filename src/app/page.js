import AboutPage from "@/components/Home/About";
import CategoryPage from "@/components/Home/Category";
import CoursesPage from "@/components/Home/Courses";
import HeroSection from "@/components/Home/Hero";
import InstructorPage from "@/components/Home/Instructor";
import QuestionPage from "@/components/Home/Question";
import SkillDev from "@/components/Home/SkillDev";
import Subcribepage from "@/components/Home/Subcribe";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import JourneyPage from "@/components/Home/Journey";
import NewsPage from "@/components/Home/News";
import LatestCoursePage from "@/components/Home/LatestCourse";



export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
          <HeroSection></HeroSection>
          <AboutPage></AboutPage>
          <CoursesPage></CoursesPage>
          <WhyChooseUs></WhyChooseUs>
          <LatestCoursePage></LatestCoursePage>
          <CategoryPage></CategoryPage>
          <SkillDev></SkillDev>
          <QuestionPage></QuestionPage>
          <InstructorPage></InstructorPage>
          <JourneyPage></JourneyPage>
          <Subcribepage></Subcribepage>
          <NewsPage></NewsPage>
    </div>
  );
}

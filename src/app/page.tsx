import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Categories from "@/components/sections/Categories";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Modules from "@/components/sections/Modules";
import Technologies from "@/components/sections/Technologies";
import Capabilities from "@/components/sections/Capabilities";
import Faq from "@/components/sections/Faq";
import Blog from "@/components/sections/Blog";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Categories />
      <FeaturedCourses />
      <WhyUs />
      <Testimonials />
      <Modules />
      <Technologies />
      <Capabilities />
      <Faq />
      <Blog />
      <FinalCta />
    </>
  );
}

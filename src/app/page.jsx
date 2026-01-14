import Image from "next/image";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import FruitsCards from "./Components/FruitsCards/FruitsCards";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Services from "./Components/Services/Services";
import BlogSection from "./Components/BlogSection/BlogSection";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <HeroSlider></HeroSlider>
      </div>
      <FruitsCards></FruitsCards>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      <BlogSection></BlogSection>
      
    </>
  );
}

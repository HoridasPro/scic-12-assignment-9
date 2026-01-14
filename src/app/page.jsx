import Image from "next/image";
import HeroSlider from "./Components/HeroSlider/HeroSlider";
import FruitsCards from "./Components/FruitsCards/FruitsCards";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Services from "./Components/Services/Services";
import BlogSection from "./Components/BlogSection/BlogSection";
import Categories from "./Components/Categories/Categories";

export default function Home() {
  return (
    <>
      <div className="flex   items-center justify-center   font-sans">
        <HeroSlider></HeroSlider>
      </div>
      <FruitsCards></FruitsCards>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      <BlogSection></BlogSection>
      
    </>
  );
}

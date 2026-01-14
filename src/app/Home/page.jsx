// import BlogSection from "../Components/BlogSection/BlogSection";
import Categories from "../Components/Categories/Categories";
import FruitsCards from "../Components/FruitsCards/FruitsCards";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import Services from "../Components/Services/Services";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <FruitsCards></FruitsCards>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      {/* <BlogSection></BlogSection> */}
    </>
  );
}

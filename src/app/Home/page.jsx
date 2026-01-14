import BlogSection from "../Components/BlogSection/BlogSection";
import Footer from "../Components/Footer/Footer";
import FruitsCards from "../Components/FruitsCards/FruitsCards";
// import FruitsCategories from "../Components/FruitsCategories/FruitsCategories";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import Services from "../Components/Services/Services";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <FruitsCards></FruitsCards>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      <BlogSection></BlogSection>

      <Footer />
    </>
  );
}

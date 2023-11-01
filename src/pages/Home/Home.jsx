import { useLoaderData } from "react-router";
import Banner from "./components/Banner/Banner";
import BrandCards from "./components/BrandCards/BrandCards";
import Features from "./components/Features/Features";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const Home = () => {
  const brands = useLoaderData();

  return (
    <>
      <Banner />
      <BrandCards brands={brands} />
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

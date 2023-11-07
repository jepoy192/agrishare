import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import HotDeals from "../Components/HotDeals";
import TopDonator from "../Components/TopDonator";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <HotDeals />
      <TopDonator />
    </main>
  );
};

export default Homepage;

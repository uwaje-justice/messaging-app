import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Header from "./components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default Home;

import Features from "./components/Features.tsx";
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Cta from "./components/Cta.tsx";
import Header from "./components/Header.tsx";

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

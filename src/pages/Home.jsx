import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Businesscard from "../components/Home/Businesscard";
import Services from "../components/Home/Services";
import Mission from "../components/Home/Mission";
import Features from "../components/Home/Features";
import Contact from "../components/Home/Contact";
import Promotion from "../components/Home/Promotion";
import Statistics from "../components/Home/Statistics";
import LatestNews from "../components/Home/LatestNews";
import ScrollToHash from "../components/Common/ScrollToHash";

function Home() {
  return (
    <Layout>
        <ScrollToHash />
        <Hero />
        <About />
        <Businesscard />
        <Services />
        <Mission />
        <Features />
        <Contact />
        <Promotion />
        <Statistics />
        <LatestNews />
    </Layout>
  );
}

export default Home;
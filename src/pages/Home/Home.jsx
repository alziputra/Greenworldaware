import NewsCarousel from '../../components/NewsCarousel';
import CTAHomepage from './CTAHomepage';
import Companies from './Companies';
import Description from './Description';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Companies />
      <Description />
      <NewsCarousel />
      <CTAHomepage />
    </>
  );
};

export default Home;

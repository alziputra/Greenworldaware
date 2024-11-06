import { useEffect, useState } from 'react';
import { HeroShapeDesktop, HeroShapeMobile } from '../../components/ui/Shapes';
import Button from '../../layout/Button';
const HeroSection = () => {
  const [screen, setScreen] = useState('');

  useEffect(() => {
    const updateScreenType = () => {
      if (window.innerWidth >= 980) {
        setScreen('desktop');
      } else {
        setScreen('mobile');
      }
    };

    updateScreenType();

    const handleResize = () => {
      updateScreenType();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div className="max-w-6xl grid w-full mx-auto md:bg-center grid-cols-2 max-[980px]:grid-cols-1 pt-20 items-center px-5 lg:px-[72px]">
        {screen == 'desktop' ? <HeroShapeDesktop /> : <HeroShapeMobile />}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-black">
            CIPTAKAN <span className="bg-[#11BB60] text-white">LINGKUNGAN</span> BERSIH UNTUK LINGKUNGAN <span className="bg-[#11BB60] text-white">SEHAT</span> BERKELANJUTAN.
          </h1>

          <p className="py-2 text-lg ">GreenWorldAware adalah website untuk anda yang sadar lingkungan, memberikan informasi, tips, dan wadah untuk membantu anda membuat kontribusi kebersihan demi bumi yang lebih bersih.</p>
          <div>
            <Button type="daftar" title="Daftar" />
          </div>
        </div>
        <div className="flex justify-center max-[980px]:order-first">
          <img src="https://raw.githubusercontent.com/Skilvul-FS13/Mobile-Responsive-Website/master/img/hero-picture.png" alt="hero-image" width={500} />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

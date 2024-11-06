import { Link } from 'react-router-dom';
import Button from '../../layout/Button';

const CTAHomepage = () => {
  return (
    <div className="relative h-96 overflow-hidden top-8">
      <div className="absolute flex flex-col gap-10 w-full justify-center text-center top-5 font-bold px-10">
        <div className="m-auto">
          <h1 className="font-extrabold mb-2 lg:text-4xl md:text-3xl sm:text-2xl text-2xl">Dukung Perubahan Bersama Kami</h1>
          <p className="font-thin max-w-xl m-auto lg:text-xl md:text-xl sm:text-md max-[500px]:text-md">Bergabunglah dengan Ribuan Individu yang Peduli dengan Lingkungan.</p>
        </div>
        <div className="max-w-lg m-auto">
          <Link to="/register">
            <Button type="daftar" title="Daftar" />
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 object-cover">
        <img className="object-cover h-screen" src="https://imgur.com/zH7okQk.png" alt="background" />
      </div>
    </div>
  );
};

export default CTAHomepage;

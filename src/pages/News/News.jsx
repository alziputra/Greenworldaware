import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { Spinner } from 'flowbite-react';
import { formatDate } from '../../utils/Utils';
import PropTypes from 'prop-types';

const News = () => {
  const { news, loading } = useContext(NewsContext);
  console.log('🚀 ~ file: News.jsx:10 ~ News ~ news:', news);
  return (
    <div className="w-full bg-white py-[50px] mt-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <h1 className="text-center text-2xl font-bold leading-loose">Berita</h1>
        <p className="text-center text-xl leading-loose md:px-20">
          Temukan berita terbaru, wawasan mendalam, dan cerita inspiratif yang menggugah untuk memahami, menghargai, dan bertindak dalam upaya melindungi dan melestarikan lingkungan kita bersama-sama
        </p>

        <SearchBar />

        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center pt-10 px-4 md:px-10">
          <img src="https://ik.imagekit.io/irfantonov111/News%20Card.png?updatedAt=1701282294774" className="w-[650px] mx-auto" />

          <div>
            <p className="py-2 text-lg text-gray-600">Kamis, 27 September 2023</p>
            <h1 className="py-2  text-3xl font-semibold">
              <Link to="/berita/36">
                <p>Kepedulian dalam Membuang dan Mengelola Sampah: Tanggung Jawab Bersama Masyarakat dan Pemerintah</p>
              </Link>
            </h1>
            <p className="py-2 text-lg text-gray-600 text-justify">
              Sampah merupakan salah satu masalah lingkungan yang dihadapi oleh masyarakat modern saat ini. Pertumbuhan populasi, urbanisasi, dan konsumsi yang meningkat telah menyebabkan volume sampah yang dihasilkan semakin melonjak.{' '}
            </p>
          </div>
        </div>

        <section className="bg-gray-2 pb-2 pt-10 px-4 md:px-20 dark:bg-dark lg:pb-5 lg:pt-[120px]">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {loading ? (
                <Spinner />
              ) : (
                news.map((item) => <SingleCard date={formatDate(item.updatedAt)} image={item.image} CardTitle={item.title} titleHref={`/berita/${item.id}`} CardDescription={item.description} alt="News Image" key={item.id} />)
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;

const SingleCard = ({ alt, image, date, CardDescription, CardTitle, titleHref }) => {
  return (
    <>
      {/*  */}
      <div className="overflow-hidden bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt={alt} className="w-full rounded object-cover h-52" />
        <div className="p-3">
          <p className="mb-2 text-base leading-relaxed text-body-color dark:text-dark-6">{date}</p>
          <h3>
            <Link to={titleHref} className="mb-2 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {CardTitle}
            </Link>
          </h3>
          <p className="mb-2 text-base leading-relaxed text-body-color dark:text-dark-6 line-clamp-3">{CardDescription}</p>
        </div>
      </div>
      {/*  */}
    </>
  );
};

SingleCard.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.any,
  CardDescription: PropTypes.string,
  CardTitle: PropTypes.string,
  titleHref: PropTypes.string,
};

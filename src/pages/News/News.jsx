import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import { Spinner } from "flowbite-react";
import { formatDate } from "../../utils/Utils";
import PropTypes from "prop-types";

const News = () => {
  const { news, loading } = useContext(NewsContext);

  // Get the main news item (first item) and other news items
  const mainNews = news.length > 0 ? news[0] : null;
  const otherNews = news.slice(1);

  return (
    <div className="w-full bg-white py-[50px] mt-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <h1 className="text-center text-2xl font-bold leading-loose">Berita</h1>
        <p className="text-center text-xl leading-loose md:px-20">
          Temukan berita terbaru, wawasan mendalam, dan cerita inspiratif yang menggugah untuk memahami, menghargai, dan bertindak dalam upaya melindungi dan melestarikan lingkungan kita bersama-sama
        </p>

        <SearchBar />

        {/* Main News Card */}
        {mainNews && (
          <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center pt-10 px-4 md:px-10">
            <img
              src={mainNews.image || "https://via.placeholder.com/650x400"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/650x400";
              }}
              className="w-[650px] mx-auto"
              alt="Main News"
            />

            <div>
              <p className="py-2 text-lg text-gray-600">{formatDate(mainNews.updatedAt)}</p>
              <h1 className="py-2 text-3xl font-semibold">
                <Link to={`/berita/${mainNews.id}`}>
                  <p>{mainNews.title}</p>
                </Link>
              </h1>
              <p className="py-2 text-lg text-gray-600 text-justify">{mainNews.description.slice(0, 150) + "..."}</p>
            </div>
          </div>
        )}

        {/* Other News Cards */}
        <section className="bg-gray-2 pb-2 pt-10 px-4 md:px-20 dark:bg-dark lg:pb-5 lg:pt-[120px]">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {loading ? (
                <Spinner />
              ) : (
                otherNews.map((item) => (
                  <SingleCard
                    key={item.id}
                    date={formatDate(item.updatedAt)}
                    image={item.image || "https://via.placeholder.com/300x200"}
                    CardTitle={item.title}
                    titleHref={`/berita/${item.id}`}
                    CardDescription={item.description.slice(0, 100) + "..."}
                    alt="News Image"
                  />
                ))
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
    <div className="overflow-hidden bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img
        src={image}
        alt={alt}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/300x200";
        }}
        className="w-full rounded object-cover h-52"
      />
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

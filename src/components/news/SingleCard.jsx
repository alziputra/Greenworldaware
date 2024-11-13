import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

export default SingleCard;

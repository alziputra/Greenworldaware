import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/Utils";

const MainNewsCard = ({ mainNews }) => {
  return (
    <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center pt-10 px-4 md:px-10">
      <img
        src={mainNews.image || "https://via.placeholder.com/400x250"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x250";
        }}
        className="w-[300px] mx-auto" // Adjusted to 400px width
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
  );
};

MainNewsCard.propTypes = {
  mainNews: PropTypes.object.isRequired,
};

export default MainNewsCard;

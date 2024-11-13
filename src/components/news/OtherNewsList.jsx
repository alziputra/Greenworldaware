import PropTypes from "prop-types";
import SingleCard from "./SingleCard";
import { Spinner } from "flowbite-react";
import { formatDate } from "../../utils/Utils";

const OtherNewsList = ({ otherNews, loading }) => {
  return (
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
  );
};

OtherNewsList.propTypes = {
  otherNews: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default OtherNewsList;

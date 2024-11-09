import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../../context/NewsContext";
import { Spinner } from "flowbite-react";
import { formatDate } from "../../utils/Utils";

const NewsDetail = () => {
  const { newsDetail, loadingDetail, getNewsByID } = useContext(NewsContext);
  const { id } = useParams();

  useEffect(() => {
    getNewsByID(id); // Fetch news details only when `NewsDetail` is opened
  }, [id, getNewsByID]);

  if (loadingDetail) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full mb-10">
        <img className="relative object-cover w-full opacity-70 h-[500px]" src={newsDetail?.image || "https://via.placeholder.com/500"} alt="News" />
        <p className="absolute top-52 left-10 text-white font-bold text-2xl w-96">{newsDetail?.title}</p>
      </div>
      <div className="max-w-7xl m-auto mb-10 px-2">
        <p className="font-normal text-neutral-500">
          Author: {newsDetail?.User?.firstName} {newsDetail?.User?.lastName} • {formatDate(newsDetail?.updatedAt)}
        </p>
        <article>
          <p>{newsDetail?.description}</p>
        </article>
      </div>
    </div>
  );
};

export default NewsDetail;

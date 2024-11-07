import { Card, Spinner } from "flowbite-react";
import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import { formatDate } from "../../utils/Utils";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const { news, newsDetail, loadingDetail } = useContext(NewsContext);

  // Periksa apakah data newsDetail tersedia
  if (loadingDetail) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (!newsDetail) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl font-semibold text-gray-700">Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full mb-10 relative">
        <img className="object-cover w-full opacity-70 h-[500px]" src={newsDetail.image || "https://via.placeholder.com/1200x500"} alt="News Header" />
        <p className="absolute top-52 left-10 text-white font-bold text-2xl w-96 max-[980px]:left-2 max-[450px]:text-lg max-[450px]:w-72">{newsDetail.title}</p>
      </div>
      <div className="grid grid-cols-3 max-[980px]:grid-cols-1 lg:gap-3 max-w-7xl m-auto mb-10 px-2">
        <div className="col-span-2">
          <h5 className="font-normal text-neutral-500">
            Author: {newsDetail.User?.firstName} {newsDetail.User?.lastName} • {formatDate(newsDetail.updatedAt)}
          </h5>
          <article>
            <p>{newsDetail.description}</p>
          </article>
        </div>
        <div>
          <h1 className="font-bold text-2xl mb-2">Berita Terkini</h1>
          <div className="flex flex-col gap-4">
            {news.slice(0, 5).map((item) => (
              <Card imgAlt={item.title} imgSrc={item.image || "https://via.placeholder.com/150"} horizontal key={item.id}>
                <Link to={`/berita/${item.id}`}>
                  <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">{item.title}</h5>
                </Link>
                <p className="font-normal text-xs text-gray-700 dark:text-gray-400">{formatDate(item.updatedAt)}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;

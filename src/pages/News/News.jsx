import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import SearchBar from "../../components/news/SearchBar";
import MainNewsCard from "../../components/news/MainNewsCard";
import OtherNewsList from "../../components/news/OtherNewsList";

const News = () => {
  const { news, loading } = useContext(NewsContext);

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

        {mainNews && <MainNewsCard mainNews={mainNews} />}
        <OtherNewsList otherNews={otherNews} loading={loading} />
      </div>
    </div>
  );
};

export default News;

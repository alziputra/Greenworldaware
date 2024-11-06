import { createContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const NewsContext = createContext(null);
export const NewsContextDispatch = createContext(null);

const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [news, dispatch] = useReducer(NewsReducer, []);
  const [newsDetail, setNewsDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/news`);
        dispatch({ type: "SET_NEWS", payload: response.data.data });
      } catch (error) {
        toast.error(error.message || "Failed to fetch news data");
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    const getNewsByID = async () => {
      if (!id) {
        console.warn("News ID is undefined");
        return;
      }
      setLoadingDetail(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/news/${id}`);
        setNewsDetail(response.data.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch news details");
      } finally {
        setLoadingDetail(false);
      }
    };
    getNewsByID();
  }, [id]);

  return (
    <NewsContext.Provider value={{ news, newsDetail, loading, loadingDetail }}>
      <NewsContextDispatch.Provider value={dispatch}>{children}</NewsContextDispatch.Provider>
    </NewsContext.Provider>
  );
};

export default NewsProvider;

const NewsReducer = (news, action) => {
  switch (action.type) {
    case "SET_NEWS":
      return action.payload;
    case "REMOVE_NEWS":
      return news.filter((item) => item.id !== action.payload); // Filter news yang dihapus
    default:
      return news;
  }
};

NewsProvider.propTypes = {
  children: PropTypes.node,
};

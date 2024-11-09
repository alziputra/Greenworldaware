import { createContext, useEffect, useReducer, useState, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

export const NewsContext = createContext(null);
export const NewsContextDispatch = createContext(null);

const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [newsDetail, setNewsDetail] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL;

  const initialState = [];
  const NewsReducer = (news, action) => {
    switch (action.type) {
      case "SET_NEWS":
        return action.payload;
      case "REMOVE_NEWS":
        return news.filter((item) => item.id !== action.payload);
      default:
        return news;
    }
  };

  const [news, dispatch] = useReducer(NewsReducer, initialState);

  // Function to fetch all news
  const getNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/news`);
      dispatch({ type: "SET_NEWS", payload: response.data.data });
    } catch (error) {
      toast.error(error.message || "Failed to fetch news data");
    } finally {
      setLoading(false);
    }
  }, [baseURL]);

  // Function to fetch news by ID
  const getNewsByID = useCallback(
    async (id) => {
      if (!id) {
        console.warn("News ID is undefined");
        return;
      }
      setLoadingDetail(true);
      try {
        const response = await axios.get(`${baseURL}/news/${id}`);
        setNewsDetail(response.data.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch news details");
      } finally {
        setLoadingDetail(false);
      }
    },
    [baseURL]
  );

  // Fetch all news data on mount
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <NewsContext.Provider value={{ news, newsDetail, loading, loadingDetail, getNewsByID }}>
      <NewsContextDispatch.Provider value={dispatch}>{children}</NewsContextDispatch.Provider>
    </NewsContext.Provider>
  );
};

NewsProvider.propTypes = {
  children: PropTypes.node,
};

export default NewsProvider;

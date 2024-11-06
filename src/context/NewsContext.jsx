import { createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const NewsContext = createContext(null);

export const NewsContextDispatch = createContext(null);

const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [news, dispatch] = useReducer(NewsReducer, []);
  const [newsDetail, setNewsDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/news`)
        .then((response) => {
          dispatch({ type: 'SET_NEWS', payload: response.data.data });
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error);
        });
    };
    getNews();
  }, []);

  useEffect(() => {
    const getNewsByID = async () => {
      setLoadingDetail(true);
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/news/${id}`)
        .then((response) => {
          setNewsDetail(response.data.data);
          setLoadingDetail(false);
        })
        .catch((error) => {
          console.error(error);
        });
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
    case 'SET_NEWS':
      return action.payload;
    case 'REMOVE_NEWS':
      return action.payload;
    default:
      return news;
  }
};

NewsProvider.propTypes = {
  children: PropTypes.node,
};

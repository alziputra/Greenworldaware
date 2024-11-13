import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ACCOUNT_KEY, TOKEN } from "../constants/Key";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const PostContext = createContext({
  handlePost: async () => {},
  handleLike: async () => {},
  handleDislike: async () => {},
  posts: [],
  postsById: [],
  commentsByPost: [],
  loading: true,
  loadingDetailed: true,
  loadingPostById: true,
  loadingComments: true,
  button: true,
  buttonPost: true,
  buttonComment: true,
  setPostId: () => {},
  detailedPost: async () => {},
  handleComment: async () => {},
  handleDeletePost: async () => {},
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [detailedPost, setDetailedPost] = useState([]);
  const [commentsByPost, setCommentsByPost] = useState([]);
  const [postId, setPostId] = useState(1);
  const [postsById, setPostsById] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingDetailed, setLoadingDetailed] = useState(true);
  const [loadingPostById, setLoadingPostById] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  const [button, setButton] = useState(false);
  const [buttonPost, setButtonPost] = useState(false);
  const [buttonComment, setButtonComment] = useState(false);

  const token = localStorage.getItem(TOKEN);
  const parsedUserData = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
  const id = parsedUserData?.id;
  const { userId } = useParams();
  const baseURL = import.meta.env.VITE_BASE_URL;

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/posts`);
      setPosts(response.data.data);
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoading(false);
    }
  }, [baseURL]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    const getDetailedPostById = async () => {
      setLoadingDetailed(true);
      try {
        const response = await axios.get(`${baseURL}/posts/${postId}`);
        setDetailedPost(response.data.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoadingDetailed(false);
      }
    };
    getDetailedPostById();
  }, [baseURL, postId]);

  const getPostsByUserId = useCallback(async () => {
    setLoadingPostById(true);
    try {
      const response = await axios.get(`${baseURL}/users/${userId}/posts`);
      setPostsById(response.data.data);
    } catch (error) {
      console.error("Internal server error", error.message);
    } finally {
      setLoadingPostById(false);
    }
  }, [baseURL, userId]);

  useEffect(() => {
    if (userId) getPostsByUserId();
  }, [getPostsByUserId, userId]);

  useEffect(() => {
    setLoadingComments(true);
    const getCommentsByPostId = async () => {
      try {
        const response = await axios.get(`${baseURL}/comments/${postId}/posts`);
        setCommentsByPost(response.data.data);
      } catch (error) {
        console.error("Internal server error", error.message);
      } finally {
        setLoadingComments(false);
      }
    };
    getCommentsByPostId();
  }, [baseURL, postId]);

  const handlePost = async (formData) => {
    setButtonPost(true);
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, formData, { headers: { Authorization: `Bearer ${token}` } });
      await getPosts();
    } catch (error) {
      toast.error(error.response?.status === 403 ? "Kamu belum login" : error.message);
    } finally {
      setButtonPost(false);
    }
  };

  const handleDeletePost = async (postId) => {
    setLoading(true);
    try {
      await axios.delete(`${baseURL}/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getPosts();
    } catch (error) {
      toast.error(error.response?.status === 403 ? "Kamu belum login" : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId, userId) => {
    setButton(true);
    try {
      await axios.post(`${baseURL}/likes`, { postId, userId }, { headers: { Authorization: `Bearer ${token}` } });
      await getPosts();
      await getPostsByUserId();
    } catch (error) {
      toast.error(error.response?.status === 403 ? "Kamu belum login" : error.message);
    } finally {
      setButton(false);
    }
  };

  const handleDislike = async (likeId) => {
    setButton(true);
    try {
      await axios.delete(`${baseURL}/likes/${likeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await getPosts();
      await getPostsByUserId();
    } catch (error) {
      console.error(error.message);
    } finally {
      setButton(false);
    }
  };

  const handleComment = async (comment) => {
    setButtonComment(true);
    try {
      const { data } = await axios.post(`${baseURL}/comments`, { postId, userId: id, comment }, { headers: { Authorization: `Bearer ${token}` } });
      setCommentsByPost((prev) => [...prev, data.data]);
      await getPosts();
    } catch (error) {
      toast.error(error.response?.status === 403 ? "Kamu belum login" : error.message);
    } finally {
      setButtonComment(false);
    }
  };

  return (
    <PostContext.Provider
      value={{
        handlePost,
        handleLike,
        handleDislike,
        posts,
        postsById,
        commentsByPost,
        loading,
        loadingDetailed,
        loadingPostById,
        loadingComments,
        button,
        buttonPost,
        buttonComment,
        setPostId,
        detailedPost,
        handleComment,
        handleDeletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node,
};

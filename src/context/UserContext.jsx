import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { ACCOUNT_KEY, TOKEN } from '../constants/Key';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext({
  handleLogin: async () => {},
  handleRegister: async () => {},
  handleLogout: () => {},
  userData: null,
  token: null,
  users: [],
  loading: false,
  userById: [],
  loadingUser: false,
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [users, setUsers] = useState([]);
  const [userById, setUserById] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const navigate = useNavigate();

  const { userId } = useParams();

  // get token user
  useEffect(() => {
    const loginToken = JSON.stringify(localStorage.getItem(TOKEN));
    const user = JSON.parse(localStorage.getItem(ACCOUNT_KEY));
    if (loginToken) {
      setUserData(user);
      setToken(loginToken);
    } else {
      setUserData(undefined);
      setToken(undefined);
    }
  }, []);

  // get all users data (user posts, comments, likes, etc.)
  useEffect(() => {
    const getUsers = async () => {
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/users`)
        .then((response) => {
          setUsers(response.data.data);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
    };
    getUsers();
  }, []);

  useEffect(() => {
    setLoadingUser(true);
    const getUserById = async () => {
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/${userId ? userId : 1}`)
        .then((response) => {
          setUserById(response.data.data);
          setLoadingUser(false);
        })
        .catch((error) => {
          console.error('Internal server error', error.message);
        });
    };
    getUserById();
  }, [userId]);

  const handleLogin = async (email, password) => {
    setLoading(true);
    if (password.trim() == '' || email.trim() == '') {
      toast.error('Form wajib terisi semua');
      setLoading(false);
    } else {
      await axios
        .post(
          `${import.meta.env.VITE_BASE_URL}/users/login`,
          {
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(TOKEN, response.data.data);
            const token = JSON.stringify(localStorage.getItem(TOKEN));
            const decoded = jwtDecode(token);
            localStorage.setItem(ACCOUNT_KEY, JSON.stringify(decoded));
            navigate('/');
          } else if (response.status === 404) {
            toast.error('email or password is wrong');
            navigate('/');
          } else {
            toast.error('Internal server error');
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.error('email or password is wrong');
          } else {
            toast.error('Internal server error');
          }
        });

      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ACCOUNT_KEY);
    setUserData(undefined);
    setToken(undefined);
  };

  const handleRegister = async (firstName, lastName, email, password, gender) => {
    setLoading(true);
    if (password.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || email.trim() == '') {
      toast.error('Form wajib terisi semua');
      setLoading(false);
    } else {
      await axios
        .post(
          `${import.meta.env.VITE_BASE_URL}/users`,
          {
            firstName,
            lastName,
            email,
            password,
            gender,
            role: 'user',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 406) {
            toast.error('Email sudah digunakan');
          } else if (response.status === 201) {
            toast.success('Berhasil registrasi');
            navigate('/login');
          } else {
            toast.error('Internal error');
          }
        })
        .catch((error) => {
          if (error.response.status === 406) {
            toast.error('Email sudah digunakan');
          } else {
            toast.error(error.message);
          }
        });

      setLoading(false);
    }
  };

  return <UserContext.Provider value={{ loading, loadingUser, users, userData, token, handleLogin, handleRegister, handleLogout, userById }}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

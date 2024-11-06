import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Dampak from './pages/Information/Dampak.jsx';
import Solusi from './pages/Information/Solusi.jsx';
import Community from './pages/Community/Community.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Petition from './pages/Petition/Petition.jsx';
import DetailPetition from './pages/Petition/DetailPetition.jsx';
import AboutUs from './pages/AboutUs/Aboutus.jsx';
import News from './pages/News/News.jsx';
import NewsDetail from './pages/News/NewsDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dampak',
        element: <Dampak />,
      },
      {
        path: '/solusi',
        element: <Solusi />,
      },
      {
        path: '/tentang-kami',
        element: <AboutUs />,
      },
      {
        path: '/berita',
        element: <News />,
      },
      {
        path: '/berita/:id',
        element: <NewsDetail />,
      },
      {
        path: '/petisi',
        element: <Petition />,
      },
      {
        path: '/petisi/:id',
        element: <DetailPetition />,
      },
      {
        path: '/komunitas',
        element: <Community />,
      },
      {
        path: '/user/:userId',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

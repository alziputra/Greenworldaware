import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import { UserContextProvider } from './context/UserContext';
import Footer from './layout/Footer';
import { PostContextProvider } from './context/PostContext';
import { PetitionContextProvider } from './context/PetitionContext';
import { Toaster } from 'react-hot-toast';
import NewsProvider from './context/NewsContext';

const App = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <UserContextProvider>
          <PostContextProvider>
            <PetitionContextProvider>
              <NewsProvider>
                <Navbar />
                <Outlet />
                <Footer />
                <Toaster />
              </NewsProvider>
            </PetitionContextProvider>
          </PostContextProvider>
        </UserContextProvider>
      </div>
    </div>
  );
};

export default App;

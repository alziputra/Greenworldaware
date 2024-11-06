import Button from './Button';
import { Link, NavLink } from 'react-router-dom';
import { IconSidebar } from '../components/ui/Icons';
import Sidebar from './Sidebar';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const { userData } = useContext(UserContext);
  const previousCurrentScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsPageTop(currentScrollPosition == 0);

      if (previousCurrentScrollPosition.current < currentScrollPosition && !isNavbarVisible) {
        setIsNavbarVisible(true);
      } else if (previousCurrentScrollPosition.current > currentScrollPosition && isNavbarVisible) {
        setIsNavbarVisible(false);
      } else {
        previousCurrentScrollPosition.current = currentScrollPosition;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavbarVisible]);

  const handleSidebar = (e) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className={`flex flex-row  transition-all duration-300 ease-in-out justify-between px-5 bg-white w-full fixed z-10 ${isNavbarVisible ? '' : 'translate-y-0'} ${isPageTop ? 'p-7 translate-y-0 ' : 'p-5 -translate-y-full shadow'} `}>
        <div className="logo">
          <img src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" className="max-[980px]:hidden" alt="gwa logo" />
          <img src="https://raw.githubusercontent.com/Skilvul-FS13/Mobile-Responsive-Website/master/img/logo3.png" className="hidden max-[980px]:block" width={50} alt="logo" />
        </div>
        <nav className="flex flex-row items-center text-slate-800 font-bold  gap-6 max-[980px]:hidden">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-[#11BB60] cursor-pointer text-white p-2  rounded' : 'p-2 ')}>
            Beranda
          </NavLink>
          <NavLink to="/tentang-kami" className={({ isActive }) => (isActive ? 'bg-[#11BB60] cursor-pointer text-white p-2  rounded' : 'p-2 ')}>
            Tentang Kami
          </NavLink>
          <NavLink to="/berita" className={({ isActive }) => (isActive ? 'bg-[#11BB60] cursor-pointer text-white p-2  rounded' : 'p-2 ')}>
            Berita
          </NavLink>
          <NavLink to="/petisi" className={({ isActive }) => (isActive ? 'bg-[#11BB60] cursor-pointer text-white p-2  rounded' : 'p-2 ')}>
            Petisi
          </NavLink>
          <NavLink to="/komunitas" className={({ isActive }) => (isActive ? 'bg-[#11BB60] cursor-pointer text-white p-2  rounded' : 'p-2 ')}>
            Komunitas
          </NavLink>
        </nav>
        <div className="flex items-center gap-3 max-[980px]:hidden">
          {!userData ? (
            <>
              <Link to="/login">
                <Button type="masuk" title="Masuk" />
              </Link>
              <Link to="/register">
                <Button type="daftar" title="Daftar" />
              </Link>
            </>
          ) : (
            <Link to={`/user/${userData.id}`}>
              <img
                className="rounded-full w-10 max-[980px]:hidden"
                src={`${userData.image ? userData.image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}`}
                alt="profile-img"
              />
            </Link>
          )}
        </div>
        <button className="flex items-center gap-3 min-[980px]:hidden transition-all hover:bg-neutral-100 active:bg-neutral-200 rounded" onClick={handleSidebar}>
          <IconSidebar />
        </button>
      </div>
      <div className={`fixed z-10 top-0 h-screen w-full lg:hidden ${!isOpen ? 'translate-x-full duration-300 transition-all ease-in' : 'translate-x-0 duration-300 transition-all ease-in'}`}>
        <button className="fixed bg-black opacity-30 h-screen w-full -z-0" onClick={handleSidebar}></button>
        <Sidebar handleSidebar={handleSidebar} />
      </div>
    </>
  );
};

export default Navbar;

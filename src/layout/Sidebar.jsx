import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import PropTypes from 'prop-types';

function Sidebar(props) {
  const { userData } = useContext(UserContext);
  const { handleSidebar } = props;

  return (
    <div className="p-4 fixed z-50 right-0 h-screen w-96 max-[400px]:w-72 max-[300px]:w-52 bg-white ">
      <nav className="flex flex-col text-slate-800 font-bold gap-8" onClick={handleSidebar}>
        <NavLink to="/" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Beranda
        </NavLink>
        <NavLink to="/tentang-kami" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Tentang Kami
        </NavLink>
        <NavLink to="/berita" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Berita
        </NavLink>
        <NavLink to="/petisi" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Petisi
        </NavLink>
        <NavLink to="/komunitas" className="flex px-2 items-center h-8 rounded transition-all hover:bg-[#11BB60] hover:text-white active:bg-[#328056] cursor-pointer">
          Komunitas
        </NavLink>
        {!userData ? (
          <div className="flex gap-4">
            <Link to="/login">
              <Button type="masuk" title="Masuk" />
            </Link>
            <Link to="/register">
              <Button type="daftar" title="Daftar" />
            </Link>
          </div>
        ) : (
          <Link to={`/user/${userData.id}`}>
            <img
              className="rounded-full w-20 "
              src={`${userData.image ? userData.image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}`}
              alt="profile-img"
            />
          </Link>
        )}
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  handleSidebar: PropTypes.func,
};

export default Sidebar;

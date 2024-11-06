import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { FaChevronRight } from 'react-icons/fa';
import ProfileSidebarMobile from './ProfileSidebarMobile';
import ProfileStats from './ProfileStats';
import { Spinner } from 'flowbite-react';
import Button from '../../layout/Button';
import { useParams } from 'react-router-dom';

const ProfileSidebar = () => {
  const { userData, userById, handleLogout, loadingUser } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const { userId } = useParams();

  const handleSidebar = (e) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="max-[980px]:fixed top-0 flex items-center h-screen sticky max-[980px]:z-10 gap-28">
      <div className="h-full lg:bg-neutral-100 w-72 max-[980px]:w-10 ">
        <div className="flex flex-col gap-4 items-center mt-28">
          <button className="flex justify-center items-center h-full w-full py-52 gap-3 min-[980px]:hidden transition-all hover:bg-neutral-100 active:bg-neutral-200 rounded" onClick={handleSidebar}>
            <FaChevronRight />
          </button>

          <div className={`fixed z-50 top-0 right-0 h-screen w-full  ${!isOpen ? '-translate-x-full duration-300 transition-all ease-in' : 'translate-x-0 duration-300 transition-all ease-in'}`}>
            <button className="fixed bg-black opacity-30 h-screen w-full -z-10" onClick={handleSidebar}>
              <FaChevronRight />
            </button>
            <ProfileSidebarMobile />
          </div>

          {loadingUser ? (
            <Spinner />
          ) : (
            <>
              <img
                className="rounded-full w-28 max-[980px]:hidden"
                src={`${userById.image ? userById.image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}`}
                alt="profile-img"
              />
              <p className="font-bold text-xl max-[980px]:hidden">
                {userById.firstName} {userById.lastName}
              </p>
              <ProfileStats userById={userById} desktop="desktop" />
            </>
          )}
          {userId == userData?.id && (
            <div className="max-[980px]:hidden">
              <Button type="daftar" title="Log out" onClick={handleLogout} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

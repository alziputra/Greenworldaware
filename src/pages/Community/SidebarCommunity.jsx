import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { UserBadge } from '../Profile/UserBadge';

const SidebarCommunity = () => {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData && (
        <div className="sticky w-fit h-screen top-0 p-4 shadow">
          <Link to={`/user/${userData.id}`}>
            <div className="flex items-center gap-2 p-2 w-full max-[980px]:w-10 mt-28 border border-neutral-300 rounded-lg">
              <img
                className="rounded-full w-10 max-[980px]:w-full"
                src={`${userData.image ? userData.Image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} `}
                alt="profile-img"
              />
              <h1 className="max-[980px]:hidden">
                {userData.firstName} {userData.lastName}
              </h1>
              <div className="w-5 max-[980px]:hidden">
                <UserBadge userById={userData} />
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SidebarCommunity;

import ProfilePost from './ProfilePost';
import ProfileSidebar from './ProfileSidebar';

const Profile = () => {
  return (
    <div className="flex gap-4">
      <ProfileSidebar />
      <ProfilePost />
    </div>
  );
};

export default Profile;

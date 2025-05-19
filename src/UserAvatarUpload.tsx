import avatar from "./assets/user-avatar-profile-svgrepo-com.svg";

export default function UserAvatarUpload() {
  return (
    <div>
      <img src={avatar} alt="logo" className="bg-gray-200 w-32 h-32" />
    </div>
  );
}

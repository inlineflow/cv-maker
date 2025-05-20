import avatar from "./assets/user-avatar-profile-svgrepo-com.svg";

export default function UserAvatarUpload() {
  return (
    <div className="flex justify-center bg-gray-200 w-64 h-48 p-5">
      <img src={avatar} alt="user avatar" className="" />
    </div>
  );
}

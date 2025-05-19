import UserAvatarUpload from "./UserAvatarUpload";

export default function UserProfile() {
  return (
    <div className="flex">
      <UserAvatarUpload />
      <div className="bg-purple-700 w-full"></div>
    </div>
  );
}

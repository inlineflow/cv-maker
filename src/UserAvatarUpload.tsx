import avatar from "./assets/user-avatar-profile-svgrepo-com.svg";
type Props = {
  gridPos: string;
};

export default function UserAvatarUpload({ gridPos }: Props) {
  return (
    <div className={"flex justify-center bg-gray-200 w-64 h-48 p-5 " + gridPos}>
      <img src={avatar} alt="user avatar" className="" />
    </div>
  );
}

import Inputbox from "./Inputbox";

export default function UserProfile() {
  return (
    <div id="user-profile" className="">
      <div className="container flex justify-end">
        <div className="bg-sky-950 rounded-full w-16 h-16 self-end"></div>
      </div>
      <Inputbox label="Name" className="h-1" />
    </div>
  );
}

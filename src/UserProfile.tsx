import Inputbox from "./Inputbox";

export default function UserProfile() {
  return (
    <div id="user-profile" className="">
      <div className="container flex justify-end">
        <div className="bg-sky-950 rounded-full w-16 h-16 self-end"></div>
      </div>
      <div className="flex ">
        <Inputbox
          label="First Name"
          className="h-6 mb-12 border-2"
          labelClass=" text-base"
        />
        <Inputbox
          label="Last Name"
          className="h-6 mb-12 border-2"
          labelClass=" text-base"
        />
      </div>
      <div className="flex ">
        <Inputbox
          label="Address"
          className="h-1 mb-12"
          labelClass=" text-base"
        />
      </div>
      <div className="flex">
        <Inputbox
          label="Phone Number"
          className="h-1 mb-12"
          labelClass=" text-base"
        />
        <Inputbox
          label="Phone Number"
          className="h-1 mb-12"
          labelClass=" text-base"
        />
      </div>
    </div>
  );
}

import { Input } from "./InputBox";
import UserAvatarUpload from "./UserAvatarUpload";

export default function UserProfile() {
  return (
    <>
      <UserAvatarUpload gridPos="col-span-1" />
      <div className="bg-purple-700 w-full row-span-1">
        <section id="personal-details" className="p-6">
          <div id="name-and-position" className="flex flex-col">
            <Input
              placeholderText="Name"
              label={{ for: "abc", text: "Applicant's name" }}
            />
            <Input
              placeholderText="Job position"
              label={{ for: "desired-position", text: "Desired position" }}
            />
          </div>
          <div className="flex mt-5 text-sm">
            <Input
              placeholderText="Address"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "address", text: "Applicant's address" }}
            />
          </div>
          <div className="flex mt-1.5 gap-2 text-sm">
            <Input
              placeholderText="Phone number"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "phone-number", text: "Applicant's phone number" }}
            />
            <Input
              placeholderText="Email"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "email", text: "Applicant's email" }}
            />
          </div>
        </section>
      </div>
    </>
  );
}

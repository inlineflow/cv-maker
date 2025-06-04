import { useState } from "react";
import { InputBox } from "./InputBox";
import UserAvatarUpload from "./UserAvatarUpload";

export default function UserProfile() {
  const [nameText, setNameText] = useState("");
  const [positionText, setPositionText] = useState("");
  const [addressText, setAddressText] = useState("");
  const [phoneNumberText, setPhoneNumberText] = useState("");
  const [emailText, setEmailText] = useState("");

  return (
    <>
      <UserAvatarUpload gridPos="col-span-1" />
      <div className="bg-purple-700 w-full row-span-1">
        <section id="personal-details" className="p-6">
          <div id="name-and-position" className="flex flex-col">
            <InputBox
              placeholderText="Name"
              label={{ for: "abc", text: "Applicant's name" }}
              text={nameText}
              setText={setNameText}
            />
            <InputBox
              placeholderText="Job position"
              label={{ for: "desired-position", text: "Desired position" }}
              text={positionText}
              setText={setPositionText}
            />
          </div>
          <div className="flex mt-5 text-sm">
            <InputBox
              placeholderText="Address"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "address", text: "Applicant's address" }}
              text={addressText}
              setText={setAddressText}
            />
          </div>
          <div className="flex mt-1.5 gap-2 text-sm">
            <InputBox
              placeholderText="Phone number"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "phone-number", text: "Applicant's phone number" }}
              text={phoneNumberText}
              setText={setPhoneNumberText}
            />
            <InputBox
              placeholderText="Email"
              fontSizeStyle="text-[length:inherit]"
              label={{ for: "email", text: "Applicant's email" }}
              text={emailText}
              setText={setEmailText}
            />
          </div>
        </section>
      </div>
    </>
  );
}

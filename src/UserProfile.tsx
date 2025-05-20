import UserAvatarUpload from "./UserAvatarUpload";

export default function UserProfile() {
  const input = (
    placeholderText: string,
    fontSizeStyle?: string,
    label?: string
  ) => {
    return (
      <>
        <label
          htmlFor={placeholderText.toLowerCase().replace(" ", "-")}
          className={label ? "" : "hidden"}
        >
          Funny text
        </label>
        <input
          id={placeholderText.toLowerCase().replace(" ", "-")}
          type="text"
          placeholder={placeholderText}
          className={
            `text-white text-2xl
             placeholder-white
              placeholder:opacity-75
              border-none
              appearance-none
              w-full
              outline-hidden ` + (fontSizeStyle ?? "")
          }
        />
      </>
    );
  };

  return (
    <div className="">
      <UserAvatarUpload />
      <div className="bg-purple-700 w-full">
        <section id="personal-details" className="p-8">
          <div id="name-and-position" className="flex flex-col">
            {input("Name")}
            {input("Job position")}
          </div>
          <div className="flex mt-5 text-sm">
            {input("Address", "text-[length:inherit]")}
          </div>
          <div className="flex mt-1.5 gap-2 text-sm">
            {input("Phone number", "text-[length:inherit]")}
            {input("Email", "text-[length:inherit]")}
          </div>
        </section>
      </div>
    </div>
  );
}

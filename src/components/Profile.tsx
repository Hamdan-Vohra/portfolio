import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="profile-image flex-1 flex items-center justify-center p-6 hidden md:flex">
      <Image
        alt="Main-profile"
        src={"/profile_1.jpg"}
        height={400}
        width={400}
        objectFit="cover"
        className="h-full w-full rounded-full opacity-[0.7] border-4 border-gray-300 hover:scale-110 transition-transform duration-300 "
      ></Image>
    </div>
  );
};

export default Profile;
{
  /* <div className="flex-1 flex items-center justify-center p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
          />
        </div> */
}

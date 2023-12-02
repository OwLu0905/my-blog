import Image from "next/image";
import React from "react";

const MemberCard = () => {
  return (
    <Image
      className="mx-auto flex w-full items-center object-cover"
      src="https://fakeimg.pl/250x200/"
      width={200}
      height={250}
      alt="member"
    />
  );
};

export default MemberCard;

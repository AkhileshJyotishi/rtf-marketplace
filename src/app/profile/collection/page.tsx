import ProductCard from "@/components/ui/nft-card";
import { StaticImageData } from "next/image";
import trailPhoto from "@/assets/trail.png";
import React from "react";

interface Profile {
  imgsrc: StaticImageData;
  profileName: string;
  role: string;
}

const Profile: React.FC = () => {
  const profiles: Profile[] = [
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
    {
      imgsrc: trailPhoto,
      profileName: "Bonnie",
      role: "visual designer",
    },
  ];

  return (
    <div className="p-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[3rem]">
      {profiles.map((profile, idx) => (
        <ProductCard
          key={idx}
          imageUrl={profile.imgsrc}
          title={profile.profileName}
          rating={3} // Placeholder rating, replace with actual rating from data
          price={599} // Placeholder price, replace with actual price from data
          seller={""}
          tokenId={1}
        />
      ))}
    </div>
  );
}

export default Profile;

import ProductCard from "@/components/ui/nft-card";
import React from "react";
import trailPhoto from "@/assets/trail.png";

export default function Profile() {
  const Profiles = [
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
    <div className="p-[4rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {Profiles.map((profile, idx) => (
            <ProductCard
            imageUrl={trailPhoto}
            title="CryptoCity"
            rating={3}
            price={599}
        />
          ))}
        </div>
  );
}

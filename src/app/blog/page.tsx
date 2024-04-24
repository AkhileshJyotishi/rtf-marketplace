import { HeroHighlight } from "@/components/ui/nft-page-background";
import Boxing from "@/assets/lander.jpg";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const date = "12=1-2022";
  const title = "The Orbitians";
  const creator = "creator";
const description=<>
The Orbitians
is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
</>
  return (
    <div className="min-h-screen w-full dark:bg-black   bg-dot-white/[0.2]  relative flex ">
      <div className=" mt-24 text-white max-w-6xl mx-auto ">
        <div className="absolute pointer-events-none inset-0  bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image
          src={Boxing}
          alt="BLog Imagw"
          className="h-[70%] w-3/4 mx-auto"
        />
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-8 flex flex-col gap-4">
            <div>
              <h2 className="text-4xl font-bold">{title}</h2>
              <h3 className="text-xl font-extralight text-gray-500 ">
                Minted On {date}
              </h3>
            </div>
            <div>
              <h3>Created By </h3>
              <p>{creator}</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">Description</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

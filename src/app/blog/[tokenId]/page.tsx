"use client"
import { HeroHighlight } from "@/components/ui/nft-page-background";
import Boxing from "@/assets/lander.jpg";
import Image from "next/image";
import React from "react";
import CountDown from "@/components/ui/countdown";
import TextInput from "@/components/ui/text-input";
import BidComp from "@/components/bid";
import { useParams } from "next/navigation";

const Blog = () => {
  const {tokenId}=useParams()
  const date = "12=1-2022";
  const title = "The Orbitians";
  const creator = "creator";
  const highestBid="123 RTF"
  const highestBidder="addr"
  const description = (
    <>
      The Orbitians <br />
      is a collection of 10,000 unique NFTs on the Ethereum blockchain,
      <br />
      <br />
      There are all sorts of beings in the NFT Universe. The most advanced and
      friendly of the bunch are Orbitians. <br /> They live in a metal space
      machines, high up in the sky and only have one foot on Earth. <br />
      These Orbitians are a peaceful race, but they have been at war with a
      group of invaders for many generations. <br />
      <br /> The invaders are called Upside-Downs, because of their inverted
      bodies that live on the ground, yet do not know any other way to be.
      <br />
      <br /> Upside-Downs believe that they will be able to win this war if they
      could only get an eye into Orbitian territory, so they've taken to make
      human beings their target.
    </>
  );
  return (
    <div className="min-h-screen w-full bg-black   bg-dot-white/[0.2]  relative  ">
      <div className=" mt-24 text-white max-w-6xl mx-auto w-11/12 ">
        <div className="absolute pointer-events-none inset-0  bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image
          src={Boxing}
          alt="BLog Imagw"
          className="h-[70%] w-3/4 mx-auto"
        />
        <div className="grid grid-cols-12 mt-12 z-40 gap-4">
          <div className="col-span-12 order-2 md:order-1 md:col-span-8 flex flex-col gap-4">
            <div>
              <h2 className="text-4xl font-bold">{title}</h2>
              <h3 className="text-sm font-bold text-gray-500 italic">
                Minted On {date}
              </h3>
            </div>
            <div>
              <h3>Created By </h3>
              <p className="text-sm font-bold text-gray-500 italic ">
                {creator}
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Description</h3>
              <p className="text-sm font-bold text-white mt-4 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="col-span-12 order-1 md:order-2 md:col-span-4 flex justify-center flex-col gap-4">
            <CountDown />
            <BidComp highestBid={100} highestBidder="0x123"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

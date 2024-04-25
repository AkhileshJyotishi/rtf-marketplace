"use client"
import { HeroHighlight } from "@/components/ui/nft-page-background";
import Boxing from "@/assets/lander.jpg";
import Image from "next/image";
import React from "react";
import CountDown from "@/components/ui/countdown";
import TextInput from "@/components/ui/text-input";
import BidComp from "@/components/bid";
import { useParams, useSearchParams } from "next/navigation";

const Blog = () => {
  const {tokenId}=useParams()
  const searchparams=useSearchParams()
  const title=  searchparams.get("name")
  const description=searchparams.get("description")
 const imgSrc= searchparams.get("imgSrc")
 const time_left= searchparams.get("time_left")
//  const highest_bid=searchparams.get("highest_bid")
 const highestBidder=searchparams.get("highestBidder")
const auctionIndex=searchparams.get("highestBidder")

// console.log("highbid ",highest_bid)

  const date = "12=1-2022";
  // const title = "The Orbitians";
  const creator = "creator";
  const highest_bid="1500000"
  //   <
  return (
    <div className="min-h-screen w-full bg-black   bg-dot-white/[0.2]  relative  ">
      <div className=" mt-24 text-white max-w-6xl mx-auto w-11/12 ">
        <div className="absolproute pointer-events-none inset-0  bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Image
          src={imgSrc ?? ""}
          height={400}
          width={400}
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
            <BidComp highestBid={highest_bid?? "0"
            } highestBidder={highestBidder?? ""} auctionIndex={auctionIndex}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

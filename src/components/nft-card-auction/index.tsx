"use client"
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuctionCardProps {
  tokenURI: string;
  nft_url: string;
  highest_bid: number;
  time_left: number;
  avatar: string;
  creater: string;
  tokenId:number;
  highestBidder:string;
  auctionIndex:number
}
function convertUnixTimeToReadable(unixTimestamp:any) {
  // Create a JavaScript Date object from the Unix timestamp
  const date = new Date(unixTimestamp * 1000);

  // Get individual time components
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Format the time string (YYYY-MM-DD HH:MM:SS)
  const formattedTime = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${hours}:${minutes}:${seconds}`;
  return formattedTime;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  tokenURI,
  nft_url,
  highest_bid,
  time_left,
  highestBidder,
  avatar,
  creater,
  tokenId,
  auctionIndex
}) => {
  console.log("less ",highest_bid)
  const [additionalData,setAdditionalData]=useState<{
    name:string;
    description:string;
    imgSrc:string;
    avatar:string
  }>({name:" ",description:" ",imgSrc:"https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",avatar:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668"})
  const router=useRouter()
  const fetchdata=async()=>{
    const data=await axios.get(`https://gateway.pinata.cloud/ipfs/${tokenURI}`)
console.log("fetchdata ",data)
setAdditionalData((prev)=>({...prev,name:data.data.name,description:data.data.description,imgSrc:data.data.imgSrc}))
  }
  useEffect(()=>{
fetchdata()
  },[])
  return (
    <div className="overflow-hidden px-1 text-sm flex flex-col rounded-2xl p-6 shadow-2xl border-2 border-gray-600 bg-gradient-to-br from-gray-400 via-gray-500 to-black hover:cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-500 items-center">
      <div className="relative">
        <img
          className="top-0 w-[19rem] rounded-2xl"
          src={additionalData.imgSrc}
          
          alt="nft"
        />
      </div>
      <div className="text-white mb-4">
        <h1 className="text-2xl font-bold my-6 hover:text-cyan hover:cursor-pointer">
          {additionalData.name}
        </h1>
        <div className="flex flex-row justify-between h-6 my-6 text-center gap-[2.5rem] mt-[2rem] px-4">
          <div className="flex flex-row">
            <img
              className="mr-2 max-h-5 self-center"
              src={"https://raw.githubusercontent.com/0xCCY/FrontendMentor-nft-preview-card-component/bd6dcdc40385910ec860669d93f317a882b111f9/src/assets/images/icon-ethereum.svg"}
              alt="eth"
            />
            <p className="text-cyan font-semibold self-center">
              {highest_bid} ETH
            </p>
          </div>
          <div className="flex flex-row">
            <img
              className="mr-1 max-h-5 self-center"
              src={"https://raw.githubusercontent.com/0xCCY/FrontendMentor-nft-preview-card-component/bd6dcdc40385910ec860669d93f317a882b111f9/src/assets/images/icon-clock.svg"}
              alt="eth"
            />
            <p className="text-softblue self-center">{convertUnixTimeToReadable(time_left)} left</p>
          </div>
        </div>
        <Button title="Place Bid" onClick={()=>router.push(`/blog/${tokenId}?name=${additionalData.name}&description=${additionalData.description}&imgSrc=${additionalData.imgSrc}&time_left=${convertUnixTimeToReadable(time_left)}?highest_bid=${highest_bid}?highestBidder=${highestBidder}?auctionIndex=${auctionIndex}`)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"/>
        <hr className="border-dark-blue-line mt-[1rem]" />
      </div>
      <div>
        <div className="flex flex-col">
          
          <p className="text-white font-extralight self-center justify-center">Creation of &nbsp;</p>
          <p className="text-gray-300 font-bold self-center hover:text-cyan hover:cursor-pointer">
            {creater.slice(0,9) + "....."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;

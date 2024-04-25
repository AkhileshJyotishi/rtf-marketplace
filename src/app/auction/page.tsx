"use client"
import React, { useEffect, useState } from "react";
import AuctionCard from "@/components/nft-card-auction";
import { useMetaMaskContext } from "@/providers/metamask-context";
import { ethers } from "ethers";
import { abi, address } from "@/contract_abi_address/NftMarketPlace";


interface Profile {
  name: string;
  nft_url: string;
  highest_bid: number;
  time_left: string;
  creator_name: string;
  creater_avatar: string;
}

const Page: React.FC = () => {
  const Profiles: Profile[] = [
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    {
      name: "Digital Art",
      nft_url:
        "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2F43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=8e85a0c6e3f0e66ad9a91137a77d7982c87f704298ef312dd7a9b34cd68ab288&width=960&quality=80",
      highest_bid: 2.5,
      time_left: "1 day 5 hours",
      creator_name: "ArtisanCreations",
      creater_avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668",
    },
    // Add other profiles here
  ];
  type AuctionsType={
auctionIndex:number;
bidCount:number;
creator:string;
endAuction:number;
highestBidPrice:number;
highestBidder:string;
nftClaimed:boolean;
priceClaimed:boolean;
tokenId:number;
tokenURI:string
  }
  const [auctions,setAuctions]=useState<AuctionsType[]>([])
  const {provider,walletAddress}=useMetaMaskContext()
  const initData=async()=>{
    const signer=await provider.getSigner()
    const contract =new ethers.Contract(address,abi,signer)
    let datas=await contract.getAllAuction() as AuctionsType[]
    console.log("acutoins ",datas)
    const auct=datas.map((data,idx)=>{

return {
  auctionIndex:Number(data.auctionIndex),
  bidCount:Number(data.bidCount),
  creator:data.creator,
  endAuction:Number(data.endAuction),
  highestBidPrice:Number(ethers.utils.formatEther(data.highestBidPrice)),
  highestBidder:data.highestBidder,
  nftClaimed:data.nftClaimed,
  tokenId:data.tokenId,
  tokenURI:data.tokenURI,
  priceClaimed:data.priceClaimed
}
    })
    setAuctions(auct)
  }
useEffect(()=>{
  if(provider)
initData()
},[provider])

  return (
    <div className="flex flex-col">
      <div className="w-full overflow-hidden z-1">
        <div className="z-30 absolute mt-[6.5rem] ml-[6rem]">
        <div className="mt-[6rem] text-white text-[4rem] font-extrabold">
          NFT Auctions
        </div>
        <div className="w-[22rem] ml-[1rem] text-white text-lg">
        "Explore a vibrant marketplace where digital art comes alive through auctions, offering a unique opportunity to own exclusive NFTs from talented creators worldwide."
        </div>
        </div>
        <img
          className="w-full h-[37rem] object-cover"
          src="https://vagazine.com/vaga_v3/wp-content/uploads/2021/09/NFT-ART-Consensual-Hallucinations-Serwah-Attafuah.jpeg"
          alt=""
        />
      </div>
      <span className="text-white text-xl font-extrabold my-[2rem] ml-[6rem]">
        All Auctions
      </span>
      <div className="px-[5.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[2.5rem]">
        {auctions.map((auction, idx) => (
          <AuctionCard
            tokenURI={auction.tokenURI}
            nft_url={"profile.nft_url"}
            highest_bid={auction.highestBidPrice}
            time_left={auction.endAuction}
            avatar={"#"}
            creater={auction.creator}
            tokenId={auction.tokenId}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

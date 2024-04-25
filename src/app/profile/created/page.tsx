"use client"
import ProductCard from "@/components/ui/nft-card";
import { StaticImageData } from "next/image";
import trailPhoto from "@/assets/trail.png";
import React, { useEffect, useState } from "react";
import { useMetaMaskContext } from "@/providers/metamask-context";
import { ethers } from "ethers";
import { abi, address } from "@/contract_abi_address/NftMarketPlace";
import axios from "axios";

interface Profile {
  imgsrc: StaticImageData;
  profileName: string;
  role: string;
}

const Pager: React.FC = () => {

  const {provider,walletAddress}=useMetaMaskContext()
  
  const getInitData=async()=>{
    if(provider){
      // console.log("function runnung")
      const signer=await provider.getSigner()
      const contract =new ethers.Contract(address,abi,signer)
      let datas=await contract.getAllNFTs() as NFTtypes[]
      console.log("mans ",datas)
      // const axiosPromises = datas.map(async (data) => {
        
      //   return axios.get(`https://gateway.pinata.cloud/ipfs/${data.tokenURI}`);
      // });
      // const response = await Promise.all(axiosPromises);
      // console.log("that si the res ",response);
      // const meta=await fetch("https://gateway.pinata.cloud/ipfs/QmUnxTd4N6u2fveo8eLiV6CQELZayCDgYYxSzJGw3r9gKT",{
        // method:"GET"
      // })
     
//      for(let i=0; i<datas.length;i++){
// console.log("comes ",meta)  
//       }
     
    const nftsdata=await Promise.all(datas.map(async(data,idx)=>{
      const price=Number(ethers.utils.formatEther(data.price))
      const tokenId=Number(data.tokenId)
      console.log("formatedd token ",tokenId)
      const meta=await axios.get(`https://gateway.pinata.cloud/ipfs/${data.tokenURI}`);
// console.log("agua final ",meta.data)
console.log("manan ",data.seller)
     return {
      inAuction:data.inAuction,
      owner:data.owner,
      price,
      seller:data.seller,
      sold:data.sold,
      tokenURI:data.tokenURI,
      name:meta.data.name,
      description:meta.data.description,
      imgSrc:meta.data.imgSrc,
      tokenId
    }
    }))
  //   console.log("data of nft",nftsdata)

   setNfts(nftsdata  )

    }
  }
  type NFTtypes={
    inAuction:boolean;
    owner:string;
    price:number;
    seller:string;
    sold:boolean;
    tokenURI:string;
    name:string;
    description:string;
    imgSrc:string;
    tokenId:number
  }
  const [nFTS,setNfts]=useState<NFTtypes[]>([])
  useEffect(()=>{
getInitData()

  },[provider])
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
        {nFTS.filter(nft=>nft.seller.toLowerCase()==walletAddress?.toLowerCase()). map((nft, idx) => (
            <ProductCard
            imageUrl={nft.imgSrc}
            title={nft.name}
            rating={3}
            price={nft.price}
            seller={nft.seller}
            tokenId={nft.tokenId}
        />
          ))}
    </div>
  );
}

export default Pager;

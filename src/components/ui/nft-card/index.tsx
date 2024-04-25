"use client"
import { useMetaMaskContext } from "@/providers/metamask-context";
import { ethers } from "ethers";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { abi, address } from "@/contract_abi_address/NftMarketPlace";


interface ProductCardProps {
  imageUrl: StaticImageData|string;
  title: string;
  rating: number;
  price: number;
  seller:string;
  tokenId:number

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
const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  rating,
  price,
  seller,
  tokenId
}) => {
  const {provider,walletAddress}=useMetaMaskContext()
  const handleData=async()=>{
    const signer=await provider.getSigner()
    const contract =new ethers.Contract(address,abi,signer)
    let datas=await contract.createAuction(tokenId)
    console.log(datas)   
  }
  
  const router=useRouter()
  return (
    <div className="hover:cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-500 bg-gradient-to-br from-gray-400 via-gray-500 to-black  w-full max-w-sm border border-gray-200 rounded-lg shadow ">
      <Image
        width={400}
        height={400}
        className="p-5 rounded-t-lg"
        src={imageUrl}
        alt="product image"
      />

      <div className="px-5 pb-3 flex flex-col gap-3">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h5>
        <div className="flex justify-between">
          <div className="flex gap-2 p-1 items-center text-white text-sm">
            <Image
              src={imageUrl}
              height={400}
              width={400}
              className="h-6 w-6 rounded-full"
              alt="User"
            />
            <p className="font-semibold text-gray-300">{title}</p>
          </div>
          <div>
            <span className="  bg-black text-white text-xs  font-extralight me-2 px-2.5 py-0.5 rounded-xl  border border-gray-500">
                <span className="font-bold mr-1 text-xl">#</span>1234
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 ">
            <div className="text-black font-semibold text-xs">Price</div>
            <div className="text-sm text-white">{price}</div>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="text-gray-400 font-semibold text-xs">
              Highest Bid
            </div>
            <div className="text-sm text-white"> {price}</div>
          </div>
        </div>
      </div>
      <div>
        {
walletAddress?.toLowerCase()==seller.toLowerCase() &&
        <button onClick={handleData}>Add to auction</button>
        }
        {/*  */}
      </div>
    </div>
  );
};

export default ProductCard;


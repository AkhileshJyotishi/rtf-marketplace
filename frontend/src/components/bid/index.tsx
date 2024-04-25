"use client"
import React, { useEffect, useState } from 'react'
import TextInput from '../ui/text-input'
import { useMetaMaskContext } from '@/providers/metamask-context';
import { ethers } from 'ethers';
import { abi, address } from '@/contract_abi_address/NftMarketPlace';

const BidComp = ({highestBid,highestBidder,auctionIndex}:{highestBid:string,highestBidder:string;auctionIndex:number}) => {
    const [bid,setBid]=useState<number>(0)
    const [highbid,setHIghestBid]=useState(highestBid);
    const {provider}=useMetaMaskContext()
    const getBid=async()=>{
      const signer=await provider.getSigner()
      const contract =new ethers.Contract(address,abi,signer)
      console.log(bid*1e-18)
      console.log(auctionIndex)
      let datas=await contract.bid(auctionIndex,ethers.utils.parseEther(String(bid *1e-18)))
      console.log(datas)
    }
  
  return (
    <div>
         <div className="border-gray-500 border-[0.1px] p-1 font-bold text-center rounded-lg flex flex-col gap-1">
              <h2 className="text-3xl ">Highest bid</h2>
              <h3 className="">{highbid} gwei</h3>
              <h3 >{highestBidder}</h3>
              <TextInput
                onChange={(e) => { if (+e.target.value > 0) setBid(e.target.value as any) }}
                type="number"
                className={"bg-transparent border border-gray-500  rounded-md w-full h-12"}
                placeholder='Enter bid here'
                value={bid}
                name="number"
                id={"1"}
              />
              <button className='bg-white text-black w-fit p-1 mx-auto'onClick={()=>{if(String(bid)>highestBid)setHIghestBid(String(bid))}}>Bid</button>
             </div>
    </div>
  )
}

export default BidComp

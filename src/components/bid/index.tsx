"use client"
import React, { useState } from 'react'
import TextInput from '../ui/text-input'

const BidComp = ({highestBid,highestBidder}:{highestBid:number,highestBidder:string;}) => {
    const [bid,setBid]=useState()
  return (
    <div>
         <div className="border-gray-500 border-[0.1px] p-1 font-bold text-center rounded-lg flex flex-col gap-1">
              <h2 className="text-3xl ">Highest bid</h2>
              <h3 className="">{highestBid}</h3>
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
             </div>
    </div>
  )
}

export default BidComp

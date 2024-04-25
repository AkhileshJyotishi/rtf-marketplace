"use client"
import axios from 'axios';
import React, { useEffect } from 'react'

const Trial = () => {
    async function pinByCID() {
        try {
            const data=await axios.get("https://gateway.pinata.cloud/ipfs/QmUnxTd4N6u2fveo8eLiV6CQELZayCDgYYxSzJGw3r9gKT")
            console.log(data.data)
        //   const data = JSON.stringify({
        //     hashToPin: "QmVN6CSExgr8QFZHVfWwnvgCW42C8ERLZspa4CK89dH8s9"
        //   })
        //   const res = await fetch("https://api.pinata.cloud/pinning/pinJobs",
        //   {
        //       method: "GET",
        //       headers: {
        //         contentType: 'application/json',
        //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
        //       },
        //       body: data,
        //   }
        //   );
        //   const resData = await res.json();
        //   console.log(resData);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
pinByCID()
      },[])
  return (
    <>
    
      
    </>
  )
}

export default Trial

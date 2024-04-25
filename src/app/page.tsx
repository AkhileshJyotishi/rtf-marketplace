"use client"
import { BackgroundCellAnimation } from "@/components/ui/background-ripple-effect";
import NotificationCard from "@/components/ui/collection-card";
import ProfileCard from "@/components/ui/profile-card";
import trailPhoto from "@/assets/trail.png";
import Boxing from "@/assets/lander.jpg";
import ProductCard from "@/components/ui/nft-card";
import Trial from "@/components/trial";
import { useEffect, useState } from "react";
import { useMetaMaskContext } from "@/providers/metamask-context";
import axios from "axios";

export default function Home() {
  const CollectionCards = [
    {
      title: "title 1",
      author: "auth 1",
      currentBId: 0,
      imageSrc:
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      avatarSrc: [
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
      ],
    },
    {
      title: "title 1",
      author: "auth 1",
      currentBId: 0,
      imageSrc:
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      avatarSrc: [
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png",
        "https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png",
      ],
    },
  ];
  const Profiles = [
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
  const {provider}=useMetaMaskContext()
  const getInitData=async()=>{
    if(provider){
      // console.log("function runnung")
      // const signer=await provider.getSigner()
      // const contract =new ethers.Contract(address,abi,signer)
      // let datas=await contract.getAllNFTs() as NFTtypes[]
      // const axiosPromises = datas.map(async (data) => {
      //   return axios.get(`https://gateway.pinata.cloud/ipfs/${data.tokenURI}`);
      // });
      // const response = await Promise.all(axiosPromises);
      // console.log("that si the res ",response);
      // const meta=await fetch("https://gateway.pinata.cloud/ipfs/QmUnxTd4N6u2fveo8eLiV6CQELZayCDgYYxSzJGw3r9gKT",{
        // method:"GET"
      // })
      const meta=await axios.get(`https://gateway.pinata.cloud/ipfs/QmUnxTd4N6u2fveo8eLiV6CQELZayCDgYYxSzJGw3r9gKT`,{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization':`${process.env.NEXT_PUBLIC_PINATA_JWT}`
      }
      });
      console.log("aya ",meta)
//       for(let i=0; i<datas.length;i++){
// console.log("comes ",meta)  
//       }
     
  //   const nftsdata=datas.map((data,idx)=>{
  //     const price=Number(ethers.utils.formatEther(data.price))
  //    return {
  //     inAuction:data.inAuction,
  //     owner:data.owner,
  //     price,
  //     seller:data.seller,
  //     sold:data.sold,
  //     tokenURI:data.tokenURI
  //   }
  //   })
  //   console.log("data of nft",nftsdata)
  //  setNfts(nftsdata  )

    }
  }
  type NFTtypes={
    inAuction:boolean;
    owner:string;
    price:number;
    seller:string;
    sold:boolean;
    tokenURI:string
  }
  const [nFTS,setNfts]=useState<NFTtypes[]>([])
  useEffect(()=>{
getInitData()

  },[provider])

  return (
    <main className="w-full bg-[#020617]">
    <div className="min-h-screen max-w-[85rem] mx-auto bg-[#020617]">
      <BackgroundCellAnimation />
      <section className="mt-8 flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-4xl text-white">Trending Collection</h2>
          <p className="text-gray-500 mt-2">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {CollectionCards.map((val, idx) => (
            <NotificationCard
              title={val.title}
              author={val.author}
              currentBid={val.currentBId}
              imageSrc={val.imageSrc}
              avatarSrcs={val.avatarSrc}
            />
          ))}
        </div>
      </section>
      <section className="mt-8 flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-4xl text-white">Top creators</h2>
          <p className="text-gray-500 mt-2">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {Profiles.map((profile, idx) => (
            <ProfileCard
              imageSrc={profile.imgsrc}
              name={profile.profileName}
              role={profile.role}
            />
          ))}
        </div>
      </section>
      <section className="mt-8 flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-4xl text-white">Top creators</h2>
          <p className="text-gray-500 mt-2">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[3rem]">
          {nFTS.map((nft, idx) => (
            <ProductCard
            imageUrl={trailPhoto}
            title="CryptoCity"
            rating={3}
            price={599}
        />
          ))}
        </div>
      </section>
      <section className="my-8 p-4 min-h-[80vh]  relative bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${Boxing.src})`}}>
      </section>
      <Trial/>
    </div>
    </main>
  );
}

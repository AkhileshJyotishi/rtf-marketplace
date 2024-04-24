import { BackgroundCellAnimation } from "@/components/ui/background-ripple-effect";
import NotificationCard from "@/components/ui/collection-card";
import ProfileCard from "@/components/ui/profile-card";
import trailPhoto from "@/assets/trail.png";
import Boxing from "@/assets/lander.jpg";

import Image from "next/image";
import ProductCard from "@/components/ui/nft-card";

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

  return (
    <main className="min-h-screen  max-w-7xl mx-auto ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {Profiles.map((profile, idx) => (
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
      
    </main>
  );
}

import React from "react";
import AuctionCard from "@/components/nft-card-auction";

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
          src="https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485"
          alt=""
        />
      </div>
      <span className="text-white text-xl font-extrabold my-[2rem] ml-[6rem]">
        All Auctions
      </span>
      <div className="px-[5.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[2.5rem]">
        {Profiles.map((profile, idx) => (
          <AuctionCard
            name={profile.name}
            nft_url={profile.nft_url}
            highest_bid={profile.highest_bid}
            time_left={profile.time_left}
            avatar={profile.creater_avatar}
            creater={profile.creator_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

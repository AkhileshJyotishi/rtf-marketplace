import React from "react";
import Button from "../ui/Button";

interface AuctionCardProps {
  name: string;
  nft_url: string;
  highest_bid: number;
  time_left: string;
  avatar: string;
  creater: string;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  name,
  nft_url,
  highest_bid,
  time_left,
  avatar,
  creater,
}) => {
  return (
    <div className="text-sm flex flex-col rounded-2xl p-6 shadow-2xl border-2 border-gray-600 bg-gradient-to-br from-gray-400 via-gray-500 to-black hover:cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-500 items-center">
      <div className="relative">
        <img
          className="top-0 w-[19rem] rounded-2xl"
          src={nft_url}
          alt="nft"
        />
      </div>
      <div className="text-white mb-4">
        <h1 className="text-2xl font-bold my-6 hover:text-cyan hover:cursor-pointer">
          {name}
        </h1>
        <div className="flex flex-row justify-between h-6 my-6 text-center gap-[2.5rem]">
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
            <p className="text-softblue self-center">{time_left} left</p>
          </div>
        </div>
        <Button title="Place Bid" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"/>
        <hr className="border-dark-blue-line mt-[1rem]" />
      </div>
      <div>
        <div className="flex flex-column align-middle">
          <img
            className="max-h-[2rem] border-white border-2 rounded-full mr-4"
            src={avatar}
            alt="avatar"
          />
          <p className="text-white font-extralight self-center">Creation of &nbsp;</p>
          <p className="text-gray-300 font-bold self-center hover:text-cyan hover:cursor-pointer">
            {creater}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;

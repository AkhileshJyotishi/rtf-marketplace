"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Tab } from "@headlessui/react";

export default function Profile({ children }) {
  const pathname = usePathname();
  console.log("akh ", pathname);
  const [subTab, setSubTab] = useState("created");
  const router = useRouter();

  const follow = false;

  const user = {
    name: "Roger Binny",
    sold: 53,
    volume: 250000,
    followers: 40543,
    address: "#ijcbta",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quia quo itaque.",
  };

  useEffect(() => {
    router.push(`/profile/${subTab}`);
  }, [subTab]);
  useEffect(() => {}, []);

  return (
    <div className="text-white flex flex-col max-w-6xl mx-auto">
      <div className="w-full">
        <img
          className="w-full h-[20rem] object-fill"
          src="https://timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg"
          alt="cover image"
        />
      </div>
      <div className="w-[6.5rem] absolute ml-[50%] md:ml-[6rem] ">
        <img
          className="h-[6.5rem] border-2 shadow-xl border-black object-contain rounded-lg mt-[16.5rem]"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1713909223~exp=1713909823~hmac=132dbc0036f79d587a41182ebf9e2560693a6a133335bd479511e55f57dab668"
          alt=""
        />
      </div>
      <div className="w-full  pt-[7rem] bg-transparent flex flex-col">
        <div className="text-3xl flex flex-col md:flex-row gap-4 justify-between px-[5rem]">
          <p className="font-extrabold min-w-[10rem]">{user.name}</p>
          <div className="flex flex-row gap-[5rem]">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 min-w-[8rem]"
              onClick={() => {
                e = e;
              }}
            >
              {user.address}
            </button>
            <button
              type="button"
              className="text-black border-[3px] border-blue-700 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 min-w-[8rem]"
              onClick={() => {
                e = e;
              }}
            >
              Follow
            </button>
          </div>
        </div>
        <div className="text-white flex flex-row gap-[6rem] ml-[5rem] mt-[1.5rem]">
          <div className="text-white flex flex-col">
            <p className="font-extrabold text-xl">{user.volume}</p>
            <p className="text-sm font-extralight">Volume</p>
          </div>
          <div className="text-white flex flex-col">
            <p className="font-extrabold text-xl">{user.sold}</p>
            <p className="text-sm font-extralight">NFT's Sold</p>
          </div>
          <div className="text-white flex flex-col">
            <p className="font-extrabold text-xl">{user.followers}</p>
            <p className="text-sm font-extralight">Followers</p>
          </div>
        </div>
        <div className="flex flex-col justify-between px-[5rem] mt-[2rem]">
          <p className="text-lg font-bold">Bio</p>{" "}
          <p className="text-sm">{user.bio}</p>
        </div>
        <div className="flex flex-col gap-2 justify-between px-[5rem] mt-[2rem]">
          <p className="text-lg font-bold">Links</p>{" "}
          <p className="text-sm text-white flex flex-row gap-4">
            <span
              className="hover:cursor-pointer"
              onClick={() => {
                console.log("Hello");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="25"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ffffff"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </span>
            <span
              className="hover:cursor-pointer"
              onClick={() => {
                console.log("Hello");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="25"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ffffff"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </span>
            <span
              className="hover:cursor-pointer"
              onClick={() => {
                console.log("Hello");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="25"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#ffffff"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </span>
          </p>
        </div>
        <nav className="border-[0.1px] rounded-lg   border-gray-700 mt-[2rem]">
          <div className="container flex items-center justify-between px-[4rem] mx-auto text-gray-600 capitalize p-1 ">
            <div
              onClick={() => {
                router.push("/profile/created");
                setSubTab("created");
              }}
              className={
                `border-b-[3px] border-transparent text-center hover:cursor-pointer font-bold   py-2 w-[9rem] hover:bg-gray-400 mx-1.5 sm:mx-6` +
                (subTab === "created"
                  ? "border-b-[3px] border-transparent  rounded-lg border-gray-400 bg-white"
                  : "border-b-[3px] border-transparent")
              }
            >
              Created
            </div>

            <div
              onClick={() => {
                router.push("/profile/owned");
                setSubTab("owned");
              }}
              className={
                `font-bold border-b-[3px] border-transparent text-center hover:cursor-pointer  hover:bg-gray-400  py-2 w-[9rem] mx-1.5 sm:mx-6` +
                (subTab === "owned"
                  ? "border-b-[3px] border-transparent rounded-lg border-gray-400 bg-white"
                  : "border-b-[3px] border-transparent")
              }
            >
              Owned
            </div>

            <div
              onClick={() => {
                router.push("/profile/collection");
                setSubTab("collection");
              }}
              className={
                `font-bold border-b-[3px] border-transparent text-center hover:cursor-pointer  hover:bg-gray-400 py-2 w-[9rem] hover:border-gray-400 mx-1.5 sm:mx-6` +
                (subTab === "collection"
                  ? "border-b-[3px] border-transparent rounded-lg border-gray-400 bg-white"
                  : "border-b-[3px] border-transparent")
              }
            >
              Collection
            </div>
          </div>
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}

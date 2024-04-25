"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import {address,abi} from "@/contract_abi_address/NftMarketPlace";
import { ethers } from "ethers";
import { useMetaMaskContext } from "@/providers/metamask-context";

interface FormData {
  username: string;
  about: string;
  file: File | null;
  price:number
}

export const Example=()=> {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    about: "",
    file: null,
    price:1500000
  });
  const {walletAddress , provider}=useMetaMaskContext()

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevFormData) => ({
      ...prevFormData,
      file,
    }));
  };

  const handleSubmit = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("hcala ")
    e.preventDefault();
    console.log(provider)
    const signer=await provider.getSigner()
    console.log(signer)
    console.log("Form submitted:", formData);
const Fdata=new FormData()
if(formData.file){
  Fdata.append("file",formData.file)
  const pinataMetadata = JSON.stringify({
    name: formData.username,
    description:formData.about
  });
  Fdata.append('pinataMetadata', pinataMetadata);
  try{
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength:Infinity,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${Fdata._boundary}`,
        Authorization:process.env.NEXT_PUBLIC_PINATA_JWT 
      }
    });
    const da={
      name: formData.username,
      description:formData.about,
      imgSrc:`https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
    }
    const metares=await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",da,{
      maxBodyLength:Infinity,
      headers: {
        'Content-Type': `application/json`,
        Authorization:process.env.NEXT_PUBLIC_PINATA_JWT 
      }
    })
    console.log("this is the meta data",metares.data)
    let signer = await provider?.getSigner()
    let contract = new ethers.Contract(address, abi,signer);
    const amountWei = ethers.utils.parseEther("0.0000000000015");
    // const res2=await contract.getListingPrice()
    // console.log(ethers.utils.formatEther(res2))
    // console.log("response ",res2)
    let data =await contract.creatingToken(metares.data.IpfsHash,formData.price,{value:amountWei})
    console.log("final resoponse ",data)
    // console.log(metares.data.IpfsHash);
    
  } catch (error) {
    console.log(error);
  }
}

};

  return (
    <>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <p className="mt-3 text-sm leading-6 text-yellow-500">
                This requires minimum of 1500000 wei.
              </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <div className=" p-1 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-white"
              >
                Price
              </label>
              <div className="mt-2">
                <div className=" p-1 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    min={1500000}
                    name="price"
                    id="price"
                    autoComplete="usernameprice"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter the price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                Minimum amount should be greater than 1500000 wei.
              </p>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-white"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-transparent sm:text-sm sm:leading-6"
                  value={formData.about}
                  onChange={handleInputChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write your description
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-white"
              >
                NFT
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400/20 px-6 py-10">
                <div className="text-center">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          onClick={(e)=>handleSubmit(e)}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </>
  );
}

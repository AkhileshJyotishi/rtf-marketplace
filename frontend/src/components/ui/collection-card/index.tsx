import Image from 'next/image';
import React from 'react';

interface NotificationCardProps {
    title: string;
    author: string;
    currentBid: number;
    imageSrc: string;
    avatarSrcs: string[];
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, author, currentBid, imageSrc, avatarSrcs }) => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="relative flex flex-col rounded-[20px] max-w-[300px] bg-background bg-clip-border shadow-3xl   w-full p-2 border border-gray-200">
                <div className="h-full w-full relative">
                    <Image src={imageSrc} className="mb-3 h-full w-full rounded-xl" alt="" height={400} width={400}/>
                    <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                        </div>
                    </button>
                </div>
                <div className='grid grid-cols-3 gap-3 mt-2 mb-2'>
                <Image src={imageSrc} className="mb-3 h-full w-full rounded-xl" alt="" height={400} width={400}/>
                <Image src={imageSrc} className="mb-3 h-full w-full rounded-xl" alt="" height={400} width={400}/>
                <Image src={imageSrc} className="mb-3 h-full w-full rounded-xl" alt="" height={400} width={400}/>

                </div>
                <div className="mb-3 flex items-center justify-between px-1">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-white capitalize">{title}</p>
                        <p className="mt-1 text-sm font-medium text-gray-500">{author}</p>
                    </div>
                    <div className="flex md:items-start mr-3">
                        {avatarSrcs.map((avatarSrc, index) => (
                            <span key={index} className={`z-${avatarSrcs.length - index} -mr-3 h-8 w-8 rounded-full border-2 border-white`}>
                                <img className="h-full w-full rounded-full object-cover" src={avatarSrc} alt="" />
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex">
                        <p className="mb-0 text-sm font-bold text-brand-500">Current Bid: {currentBid} <span>ETH</span></p>
                    </div>
                    <button  className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;

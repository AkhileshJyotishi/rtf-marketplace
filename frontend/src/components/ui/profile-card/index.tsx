import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface DropdownItem {
    label: string;
    onClick: () => void;
}

interface ProfileCardProps {
    imageSrc: StaticImageData;
    name: string;
    role: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    imageSrc,
    name,
    role,

}) => {
    return (
        <div className="w-full bg-background border border-gray-200 rounded-lg shadow  dark:border-gray-700 p-4">
        
            <div className="flex flex-col items-center ">
                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" height={400} width={400} src={imageSrc} alt={`${name} image`} />
                <h5 className="mb-1 text-xl font-medium text-white">{name}</h5>
                <span className="text-sm text-gray-500 ">{role}</span>
            </div>
        </div>
    );
};

export default ProfileCard;

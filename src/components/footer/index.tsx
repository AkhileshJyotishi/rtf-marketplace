import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo.png";

interface NavItem {
  href: string;
  name: string;
}

interface FooterProps {
  logoUrl?: string;
  description: string;
 navItems: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ logoUrl, navItems }) => {
  const SocialLinks = [
    {
      link: "",
      icon: <FaGithub />,
    },
    {
      link: "",
      icon: <FaInstagram />,
    },
    {
      link: "",
      icon: <FaTwitter />,
    },
  ];

  return (
    <footer className="backdrop-blur-md bg-transparent text-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 w-full mt-[2rem]">
      <div className="w-full flex flex-row items-center justify-between gap-x-[6rem]">
        <div className="flex flex-col gap-2 max-w-[15rem] ">
          {logoUrl && (
            <Image
              height={500}
              width={500}
              src={logo}
              className="w-32"
              alt="Logo"
            />
          )}
          <p className="leading-relaxed mt-2 text-[12px]">
            NFT marketplace where you can discover and collect exclusive boxing
            NFTs representing legendary fights, iconic moments, and rising stars
            in the ring.
          </p>
        </div>
        <div>
          <ul className="ml-[6rem] flex flex-row gap-[6rem] space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            {navItems.map((item, idx) => (
              <li key={idx} className="hover:text-gray-600">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-2 items-center justify-between sm:flex">
        <div className="flex items-center gap-x-6 text-gray-400 mt-6">
          {SocialLinks.map((social, idx) => (
            <Link key={idx} href={social.link}>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

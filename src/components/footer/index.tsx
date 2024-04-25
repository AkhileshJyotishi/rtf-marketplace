import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

interface NavItem {
  href: string;
  name: string;
}

interface FooterProps {
  logoUrl?: string;
  description: string;
  navItems: NavItem[];
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  logoUrl,
  description,
  navItems,
  copyright,
}) => {
  const SocialLinks = [
    {
        link:"",
        icon:<FaGithub/>
    },
    {
        link:"",
        icon:<FaInstagram/>
    },
    {
        link:"",
        icon:<FaTwitter/>
    }
  ];

  return (
    <footer className="backdrop-blur-md bg-transparent text-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 w-full">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        {logoUrl && (
          <Image
            height={500}
            width={500}
            src={logoUrl}
            className="w-32 sm:mx-auto"
            alt="Logo"
          />
        )}
        <p className="leading-relaxed mt-2 text-[15px]">{description}</p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {navItems.map((item, idx) => (
          <li key={idx} className="hover:text-gray-800">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">{copyright}</div>
        <div className="flex items-center gap-x-6 text-gray-400 mt-6">
          {SocialLinks.map((social, idx) => (
            <Link key={idx} href={social.link}>{social.icon}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

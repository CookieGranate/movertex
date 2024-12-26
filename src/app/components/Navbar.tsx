import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="p-4 flex justify-between items-center w-full backdrop-blur bg-white bg-opacity-30 border-b border-gray-500">
            <ul className="flex space-x-4 flex-grow-0">
                <li>
                    <Link href="/" className="flex items-center space-x-4">
                            <Image alt="Icon" width={50} height={50} src={"/img/Movertex_icon.png"} />
                            <p className="text-lg font-semibold">MOVertex</p>
                    </Link>
                </li>
            </ul>
            <ul className="flex space-x-4 justify-center flex-grow">
                <li>
                    <Link href="/" className="font-bold text-lg">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio" className="font-bold text-lg">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="font-bold text-lg">
                        Contact
                    </Link>
                </li>
            </ul>
            <ul className="flex space-x-4">
                <li>
                    <Link href="https://www.tiktok.com" target="_blank">
                        <FaTiktok size={24} className="text-black hover:text-[#69C9D0] duration-150" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com" target="_blank">
                        <FaTwitter size={24} className="text-black hover:text-[#1DA1F2] duration-150" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com" target="_blank">
                        <FaYoutube size={24} className="text-black hover:text-[#FF0000] duration-150"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
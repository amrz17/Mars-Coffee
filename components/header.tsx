import { NavLink, NavLinks } from "@/constant";
import { logo } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { AlignRight, Search, X } from "lucide-react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="w-full h-[5rem] flex items-center justify-between px-3 md:px-8">
      <div className="flex gap-2 items-center p-2">
        <Image src={logo} alt="Logo Caffe" width={30} height={30} />
        <Link href="/">
          <h1 className="text-base font-semibold font-poppins">Mars Coffee</h1>
        </Link>
      </div>
      <div className="md:flex gap-8 xl:gap-14 hidden">
        {NavLinks.map((link: NavLink, index: number) => (
          <li
            key={index}
            className="font-poppins text-sm font-normal hover:underline
              hover:underline-offset-4"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </div>
      <div className="hidden md:block">
        <button className="rounded-full hover:bg-neutral-100 p-2">
          <Search size={25} strokeWidth={2} />
        </button>
      </div>
      {/* Menu Nav For Mobile Device */}
      <div className="mx-4 block md:hidden ">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setOpenMenu((prev: boolean) => !prev);
          }}
          className="fixed right-5 top-5 rounded-full hover:bg-neutral-100 p-2"
        >
          {openMenu ? (
            <X size={25} strokeWidth={2} />
          ) : (
            <AlignRight size={25} strokeWidth={2} />
          )}
        </button>
      </div>
      {openMenu && <Sidebar initialIsOpen={true} />}
    </nav>
  );
};

export default Header;

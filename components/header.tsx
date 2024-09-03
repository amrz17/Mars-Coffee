import { NavLink, NavLinks } from "@/constant";
import { logo } from "@/public/icons";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { AlignRight, Search, X } from "lucide-react";

interface SidebarProps {
  initialIsOpen?: boolean;
}

const Header = ({ initialIsOpen = false }: SidebarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(initialIsOpen);

  const variants: Variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

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
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className=" rounded-full hover:bg-neutral-100 p-2"
        >
          {openMenu ? (
            <X color="#000" size={25} strokeWidth={2} />
          ) : (
            <AlignRight color="#000" size={25} strokeWidth={2} />
          )}
        </button>
        <AnimatePresence>
          {openMenu && (
            <motion.div
              animate={openMenu ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed left-0 bottom-0 text-white p-5
      md:hidden top-20 right-0 bg-amber-600 w-full h-screen py-10 font-poppins"
            >
              <div className="flex flex-col text-3xl ml-2 gap-8 font-thin items-start">
                {NavLinks.map((link: NavLink, index: number) => (
                  <li
                    key={index}
                    className="hover:underline hover:underline-offset-4"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;

import { NavLink, NavLinks } from "@/constant";
import { motion, Variants } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  initialIsOpen?: boolean;
}

export const Sidebar = ({ initialIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

  const variants: Variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 bottom-0 text-white p-5
      md:hidden top-20 right-0 bg-amber-600 w-full h-screen py-10 font-poppins"
    >
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="absolute top-[-3.7rem] right-[1.28rem] rounded-full hover:bg-neutral-100 p-2"
      >
        {isOpen ? <X color="#000" size={25} strokeWidth={2} /> : "Open"}
      </button>
      <div className="flex flex-col text-3xl ml-2 gap-8 font-thin items-start">
        {NavLinks.map((link: NavLink, index: number) => (
          <li key={index} className="hover:underline hover:underline-offset-4">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </div>
    </motion.aside>
  );
};

import { NavLink, NavLinks } from "@/constant";
import { logo, menu, search } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full h-[5rem] flex items-center justify-between px-3 md:px-8">
      <div className="flex gap-2 items-center p-2">
        <Image src={logo} alt="Logo Caffe" width={30} height={30} />
        <Link href="/">
          <h1 className="text-base font-semibold font-poppins">Mars Coffee</h1>
        </Link>
      </div>
      {/* Menu Nav For Mobile Device */}
      <div className="mx-4 block md:hidden rounded-full hover:bg-blue-300 p-2">
        <Image src={menu} alt="Icon Menu" width={22} height={22} className="" />
      </div>
      <div className="md:flex gap-8 hidden">
        {NavLinks.map((link: NavLink, index: number) => (
          <li
            key={index}
            className="list-none font-poppins text-sm font-normal hover:underline
              hover:underline-offset-4"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </div>
      <div className="hidden md:block rounded-full hover:bg-blue-300 p-2">
        <Image src={search} alt="Search Icon" width={20} height={20} />
      </div>
    </nav>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <div className="px-6 md:px-8 py-4 flex justify-between items-center shadow-sm overflow-hidden z-50 max-w-[1980px] mx-auto">
{/*       <Image
        src="/logo.png"
        alt="navbar-brand-logo"
        width={100}
        height={30}
        className="w-auto h-auto"
      /> */}
      <div className="text-md md:text-lg font-semibold uppercase">Crypto Tracker</div>
      <MobileNavbar />
      <div className="gap-6 items-center hidden md:flex">
        <NavbarItem link="/" item="crypto taxes"/>
        <NavbarItem link="/" item="free tools"/>
        <NavbarItem link="/" item="resource center"/>
        <button className="capitalize font-semibold text-white bg-[#1B4AEF] px-4 py-2 rounded-md text-sm">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;

export function NavbarItem({ link, item, onClick }: { link: string, item: string, onClick?: () => void;}) {
  return (
    <Link href={link} onClick={onClick}>
      <span className="capitalize font-semibold md:text-sm text-white md:text-[#0F1629]">{ item }</span>
    </Link>
  );
}

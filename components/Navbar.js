import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image className="" src="/logo.png" width={100} height={100} alt="" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/rains">
        <a>Rain Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;

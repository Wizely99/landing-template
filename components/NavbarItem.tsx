"use client";
import { NavLink } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
interface NavbarItemProps {
  link: NavLink;
}
import { usePathname } from "next/navigation";

const NavbarItem = ({ link }: NavbarItemProps) => {
  const path = usePathname();

  return (
    <div
      className="relative
  "
    >
      <Link
        href={link.href}
        key={link.key}
        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-primary"
      >
        {link.label}
      </Link>
      {link.href == path && (
        <motion.span
          initial={{ y: "-100%" }}
          animate={{ y: "0px" }}
          transition={{ type: "tween", duration: 0.7 }}
          layoutId="underline"
          className="absolute left-0 h-[2px] top-full bg-purple-500 w-full"
        />
      )}
    </div>
  );
};

export default NavbarItem;

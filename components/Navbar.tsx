'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Navbar = () => {
  const path = usePathname();
  return (

    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <div className="relative
          ">
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-primary">
            {link.label}
            </Link>
            {link.href==path&&<motion.span initial={{y:'-100%'}} animate={{y:'0px'}} transition={{type:"tween",duration:.7}} layoutId="underline" className="absolute left-0 h-[2px] top-full bg-purple-500 w-full"/>}
          
          </div>
        ))}

      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
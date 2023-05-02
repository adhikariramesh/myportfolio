

import Image from "next/image";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

import Nav from "./Nav";

const Header = () => {

  

  return (
    <>
      <header className="main-header">
        <div className="logo">
          <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          <h2>Prot<span className="folio">Folio</span></h2>
        </div>
        <p className="head-para"><IoIosCall /><span>+9779865295585</span> </p>
        <p className="head-para"><AiOutlineMail /><span>2021rameshprasd@gamil.com</span></p>
        <p className="head-para"><AiOutlineWhatsApp /><span>+9779808463282</span></p>
      </header>
     
      <Nav  />
    </>
  )
}

export default Header

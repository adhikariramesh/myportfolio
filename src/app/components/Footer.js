import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerContainer">

                <div className="footerMenu">
                    <h1>menu</h1>
                    <ul>
                        <li><Link href="/">home</Link></li>
                        <li><Link href="/">about</Link></li>
                        <li><Link href="/">portfolio</Link></li>
                        <li><Link href="/">services</Link></li>
                        <li><Link href="/">contect us</Link></li>
                    </ul>
                </div>
                <div className="location">
                    <h1>location</h1>
                    <p className="footer-para">Kathmandu Nepal</p>
                    <p className="footer-para"><IoIosCall /><span>   +9779865295585</span> </p>
                    <p className="footer-para"><AiOutlineMail /><span> 2021rameshprasd@gamil.com</span></p>
                </div>
                <div className="socialIcon">
                    <h1>Social Link</h1>
                    <Link className="footerLink" href="/"><AiFillGithub /></Link>
                    <Link className="footerLink" href="/"><AiFillLinkedin /></Link>
                    <Link className="footerLink" href="/"><BsFacebook /></Link>
                </div>
            </div>
            <p className="footerBottom">© 2023 All Rights Reserved </p>
        </footer>
    )
}

export default Footer

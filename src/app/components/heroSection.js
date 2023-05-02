import styles from "../styles/herosection.module.css";
import Image from "next/image";
import Link from "next/link";
const filePath = "http://localhost:3000/my-resume.pdf";


const HeroSection = () => {

    // const downloadCv = (url) =>{
    //         const fileName = url.split("/").pop();
    //         const aTag = document.createElement("a");
    //         aTag.href = url;
    //         aTag.setAttribute("download",fileName);
    //         document.body.appendChild(aTag);
    //         aTag.click();
    //         aTag.remove();
    // }
  return (
    <section className={styles.herosection}>
        <div className={styles.left}>
            <h2 className={styles.tophead}>My name is</h2>
            <h1 data-text="Ramesh" className={styles.head}>Ramesh prasad Adhikari</h1>
            <p className={styles.bottomhead}>web developer</p>
            
            <button className={styles.btn}>downolad cV</button>
             {/* onClick={downloadCv(filePath)} */}
          
           
        </div>
        <div className={styles.right}>
            <Image src="/images/hero.png" alt="hero" width={700} height={500} />
        </div>
    </section>
  )
}

export default HeroSection

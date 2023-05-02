import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
    return (
        <>
            <section className={styles.aboutSection}>
                <div className={styles.left}>
                    <Image src="/images/myimage1.png" alt="about" width={300} height={300} />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.head}>about me</h1>
                    <p className={styles.para}>I am Ramesh Prasad Adhikari.I was graduated with a bachelor of computer application from RIMT University. Web development with a proven ability to adapt in both self-starting
                        and collaborative environments while staying focused on achieving
                        high-quality results under strict deadlines. Eager to obtain a
                        challenging position at a prestigious a Company like Dream Version
                        that will expand my learning and build upon my developer skills</p>
                </div>
            </section>
            <section className={styles.sections}>
                <h1 className={styles.head}>education</h1>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <h1 className={styles.boxHead}>secondary school </h1>
                        <h1 className={styles.boxHead}>10 (SLC)</h1>
                        <p className={styles.boxpara}>Shree saraswati higher secondary school pipra, bhalohiya Rautahat, Nepal</p>
                        <h1 className={styles.boxHead}>2016</h1>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.boxHead}>higher secondary school </h1>
                        <h1 className={styles.boxHead}>+2 (commerce)</h1>
                        <p className={styles.boxpara}>Shree gauri shankar yadav rautahat campus Gaur,Rautahat, Nepal</p>
                        <h1 className={styles.boxHead}>2018</h1>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.boxHead}>bachelor's degree</h1>
                        <h1 className={styles.boxHead}>bachelor of computer application</h1>
                        <p className={styles.boxpara}>RIMT University mundiGobindGhar punjab, india </p>
                        <h1 className={styles.boxHead}>2021</h1>
                    </div>
                </div>
            </section>
            <section className={styles.sections}>
                    <div className={styles.skillcontainer}>
                        <div>
                        <h1 className={styles.head}>skills</h1>
                        <h2 className={styles.skillName}>HTML 5</h2>
                        <h2 className={styles.skillName}>CSS 3</h2>
                        <h2 className={styles.skillName}>JAVASCRIPT</h2>
                        <h2 className={styles.skillName}>NODE JS</h2>
                        <h2 className={styles.skillName}>REACT JS AND NEXT JS</h2>
                        <h2 className={styles.skillName}>MY SQL</h2>
                        <h2 className={styles.skillName}>PHP</h2>
                        <h2 className={styles.skillName}>BOOTSTRAP 5</h2>
                        </div>
                        <div>
                        <h1 className={styles.head}>language</h1>
                        <h2 className={styles.skillName}>NEPALI</h2>
                        <h2 className={styles.skillName}>HINDI</h2>
                        <h2 className={styles.skillName}>ENGLISH</h2>
                        <h2 className={styles.skillName}>BHOJPURI</h2>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default About

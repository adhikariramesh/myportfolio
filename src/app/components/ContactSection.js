import styles from "../styles/contactSection.module.css";
import { FaTelegramPlane } from "react-icons/fa"

const ContactSection = () => {
    return (
        <section className={styles.ContactSection}>
            <form action="#" method="post">
                <div className={styles.left}>
                    <input className={styles.inputFiled} type="text" placeholder="Full Name" required />
                    <input className={styles.inputFiled} type="email" placeholder="Email" required />
                    <input className={styles.inputFiled} type="number" placeholder="Phone Number" required />
                    <textarea className={styles.inputFiled} name="massge" id="massge" cols="50" rows="7" placeholder="Massage" required></textarea>
                    <button className={styles.btn}>send<FaTelegramPlane /></button>
                </div>
            </form>
           
        </section>
    )
}

export default ContactSection

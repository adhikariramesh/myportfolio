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
            <div className={styles.right}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776838658!2d85.28493286815886!3d27.709030242031446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1682951272117!5m2!1sen!2snp" width="500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default ContactSection

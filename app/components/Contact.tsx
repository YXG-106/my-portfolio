import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> mind@example.com</p>
        <p><strong>Phone:</strong> +86 234 567 8901</p>
        <p><strong>Location:</strong> Okinawa, JAPAN</p>
      </div>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" required /> I agree to the privacy policy
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
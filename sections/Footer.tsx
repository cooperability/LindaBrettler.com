import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className={styles.horizLine} />
        <div className="text-center text-sm text-gray-500">
          <span className="text-white font-bold text-lg mr-2">
            {" "}
            Linda Brettler
          </span>{" "}
          &copy; {new Date().getFullYear()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;

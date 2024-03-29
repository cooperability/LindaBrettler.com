import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Footer = () => {
  return (
    <footer className="px-2 sm:px-1 py-1 mt-2">
      <section className={styles.headingMd}>
        <div className="flex flex-row justify-between">
          <div className={styles.horizLine} />
          <Image
            priority
            src="/images/Letterhead.png"
            height={200}
            width={500}
            alt={"Letterhead"}
          />
          <div className="text-center text-sm text-gray-500">
            <span className="text-white font-bold text-lg mr-2">
              {" "}
              Linda Brettler
            </span>{" "}
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

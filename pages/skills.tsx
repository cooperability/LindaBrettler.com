import Layout from "../components/layout";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/utils.module.css";

const Skills: React.FC = () => {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        <p>
          Click to view (desktop optimized)
        </p>
        Projects page
        <Image
          priority
          src="/images/BMX.gif"
          height={2530}
          width={1656}
          alt={"BookMark eXtractor V2"}
        />
        <div className={styles.horizLine}></div>
        <Link href="https://opioid-converter.vercel.app">Opioid Converter (Typescript + CSS + Vercel)</Link>
      </section>
    </Layout>
  );
};

export default Skills;
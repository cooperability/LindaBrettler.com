"use client"
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.css";
import Image from "next/image";
import { useState } from "react";
import ActiveLink from "../components/activeLink";

const name = "Cooper Reed";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <Image
          priority
          src="/images/Landing.jpg"
          height={2530}
          width={1656}
          alt={"Blair Mansion Living Room"}
        />
      </section>
    </Layout>
  );
}
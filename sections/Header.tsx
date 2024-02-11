"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/solid"; // Import MenuIcon and XIcon
import styles from "../styles/utils.module.css";
import Link from "next/link";
import Sidebar from "./Sidebar";
import ActiveLink from "../components/activeLink";
import Image from "next/image";


const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window) {
      const checkWindowSize = () => {
        setIsMobile(window.innerWidth <= 500);
      };
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => {
        window.removeEventListener("resize", checkWindowSize);
      };
    }
  }, []);

  const navigator = () => {
    if (isMobile) {
      return (
        <div suppressHydrationWarning={true}>
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? (
              <XIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row space-between">
          <ActiveLink activeClassName="active" href="/">
            <a className={styles.navLink}>| Home |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/devlog">
            <a className={styles.navLink}>| Projects |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/about">
            <a className={styles.navLink}>| About |</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/skills">
            <a className={styles.navLink}>| Press |</a>
          </ActiveLink>
        </div>
      );
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div suppressHydrationWarning>
      <div className={styles.Header} suppressHydrationWarning>
        <p><b>Linda Brettler | Architect</b></p>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <nav className={styles.navbar} suppressHydrationWarning>
          {navigator()}
        </nav>
        <Link href="https://www.instagram.com/lindabrettlerarchitect/?hl=en">
          <div className="hover:cursor-pointer flex:horizontal justify-center items-center">
            <Image
                src="/images/insta.png"
                className={styles.socialsLink}
                alt="Instagram"
                width="50"
                height="50" />
          </div>
        </Link>
      </div>
      <div className={styles.horizLine} />
    </div>
  );
};

export default Header;

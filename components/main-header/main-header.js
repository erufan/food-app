import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import style from "./main-header.module.css";
import MainHeaderBackGround from "./main-header-background"

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround/>
    <header className={style.header}>
      <Link className={style.logo} href="/">
        <Image src={logo} alt="a table with food on it" priority/>
        next Food
      </Link>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link href="/meals">see meals</Link>
          </li>
          <li>
            <Link href="/community">food community</Link>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default MainHeader;

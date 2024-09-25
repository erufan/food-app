import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import style from "./main-header.module.css";
import MainHeaderBackGround from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logo} alt="a table with food on it" priority />
          next Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">see meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">food community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;

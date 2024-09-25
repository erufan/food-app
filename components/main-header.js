import Link from "next/link";
import logo from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} alt="a table with food on it" />
        next Food
      </Link>
      <nav>
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
  );
};

export default MainHeader;

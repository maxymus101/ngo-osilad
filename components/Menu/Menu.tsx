import Link from "next/link";
import css from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={css.main_nav}>
      <ul className={css.nav_list}>
        <li className={css.nav_list_item}>
          <Link href="/">Головна</Link>
        </li>
        <li className={css.nav_list_item}>
          <Link href="/ngo">Громадська організація</Link>
        </li>
        <li className={css.nav_list_item}>
          <Link href="/about">Про нас</Link>
        </li>
        <li className={css.nav_list_item}>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li className={css.nav_list_item}>
          <Link href="/news">Новини</Link>
        </li>
      </ul>
    </nav>
  );
}

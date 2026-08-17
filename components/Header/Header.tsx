import Image from "next/image";
import css from "./Header.module.css";
export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.header_logo}>
        <Image
          src="/public/cropped-logo_org1.png"
          alt="ГО ОСІЛАД logo"
          width={100}
          height={50}
        />
      </div>
      <nav className={css.main_nav}>
        <ul>
          <li className={css.nav_item}>Головна</li>
          <li className={css.nav_item}>Громадська організація</li>
          <li className={css.nav_item}>Про нас</li>
          <li className={css.nav_item}>Контакти</li>
          <li className={css.nav_item}>Новини</li>
        </ul>
      </nav>
    </header>
  );
}

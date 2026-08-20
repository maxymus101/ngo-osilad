"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu/Menu";

export default function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <header className={css.header}>
      <Link href="/" className={css.header_logo}>
        <Image
          src="/cropped-logo_org1.png"
          alt="ГО ОСІЛАД logo"
          width={95}
          height={95}
        />
      </Link>
      <div className={css.desktopMenu}>
        <Menu />
      </div>
      <button
        className={css.burgerButton}
        type="button"
        aria-label="Відкрити меню"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <svg width="32" height="32" aria-hidden="true" focusable="false">
          <use href="/icons.svg#burger-menu" />
        </svg>
      </button>
    </header>
  );
}

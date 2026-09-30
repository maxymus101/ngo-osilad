"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Container from "../Container/Container";

export default function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_wrapper}>
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
          <Link href="/donate" className={css.donateButton}>
            <span>Підтримати</span>
          </Link>
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
        </div>
      </Container>
    </header>
  );
}

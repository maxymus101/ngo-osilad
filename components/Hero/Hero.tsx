import Link from "next/link";
import css from "./Hero.module.css";
import Image from "next/image";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.hero_img_container}>
        <div className={css.overlay}></div>
        <Image
          src="/hero-bg/hero-tubes.jpg"
          alt="Hero Image"
          fill
          sizes="100vw"
          priority
          className={css.hero_img}
        />
      </div>
      <Container>
        <div className={css.hero_content}>
          <div className={css.hero_title}>
            <h1>
              Сучасна лабораторна медицина в деталях: оберіть захід для вашого
              професійного зростання
            </h1>
            <div className={css.decor_line}></div>
            <h2>
              Ми організовуємо навчальні події із залученням українських та
              іноземних спікерів, щоб ви отримували лише актуальні знання та
              офіційні сертифікати.
            </h2>
          </div>
          <div className={css.event_link}>
            <Link href="/event">Переглянути заходи</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Hero from "@/components/Hero/Hero";
import css from "./page.module.css";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className={css.content}>
          <p className={css.description}>
            Ми - команда професіоналів, яка прагне зробити медичну освіту
            доступною та якісною для всіх. Наша мета - створити сучасний
            освітній інститут, який надає високоякісну підготовку та підтримку
            для студентів та молодих фахівців.
          </p>
        </div>
      </Container>
    </>
  );
}

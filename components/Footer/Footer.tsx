import css from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.socials_group}>
          <div className={css.social_icon}>
            <figure>
              <Image
                src="/public/icons.svg#fb-ic"
                alt="Facebook group"
                width={32}
                height={32}
              />
            </figure>
          </div>
          <div className={css.social_icon}>
            <figure>
              <Image
                src="/public/icons.svg#yt-ic"
                alt="YouTube channel"
                width={32}
                height={32}
              />
            </figure>
          </div>
          <div className={css.social_icon}>
            <figure>
              <Image
                src="/public/icons.svg#viber-ic"
                alt="Viber group"
                width={32}
                height={32}
              />
            </figure>
          </div>
        </div>
        <div className={css.short_contacts}>
          <div className={css.contacts_block}>
            <p className={css.contact_info}>
              Адреса для листування: 79017, м. Львів, вул. Водогінна 2
            </p>
            <p>
              Громадська організація &quot;Освітній інститут клінічної
              лабораторної діагностики&quot;
            </p>
          </div>
        </div>
        <div className={css.lang_switscher}>
          <div className={css.lang_block}>
            <span>Українська</span>
          </div>
          <div className={css.lang_block}>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

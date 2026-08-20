import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.socials_group}>
          <div className={css.social_icon}>
            <svg width="32" height="32" aria-hidden="true" focusable="false">
              <use href="/icons.svg#yt-ic" />
            </svg>
          </div>
          <div className={css.social_icon}>
            <figure>
              <svg width="32" height="32" aria-hidden="true" focusable="false">
                <use href="/icons.svg#fb-ic" />
              </svg>
            </figure>
          </div>
          <div className={css.social_icon}>
            <figure>
              <svg width="32" height="32" aria-hidden="true" focusable="false">
                <use href="/icons.svg#viber-ic" />
              </svg>
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

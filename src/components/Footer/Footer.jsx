import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <section>
        <article>
          <h1>{t("first_title_footer")}</h1>
          <p>
            <a href="https://johnfajardodev.netlify.app/" target="_blank">
              JF - JohnFajardo
            </a>
          </p>
          <p>
            <a href="https://johnfajardodev.netlify.app/" target="_blank">
              Portfolio
            </a>
          </p>
          <p>
            <a href="http://github.com/Fajardo-dev" target="_blank">
              Github
            </a>
          </p>
        </article>
        <article>
          <h1>{t("second_title_footer")}</h1>
          <p>
            <a href="">Link 1</a>
          </p>
          <p>
            <a href="">Link 2</a>
          </p>
          <p>
            <a href="">Link 3</a>
          </p>
        </article>
      </section>
    </footer>
  );
}

export default Footer;

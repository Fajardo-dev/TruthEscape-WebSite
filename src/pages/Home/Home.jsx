import "./Home.css";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="banner-home">
        <article className="txt-banner">
          <h1>{t("title_banner")}</h1>
          <p>{t("description_banner")}</p>
        </article>
        <article className="buttons-banner">
          <PopUp title={t("donate_btn")} cont={t("donate_cont")} />
          <PopUp title={t("code_btn")} cont={t("code_cont")} />
          <PopUp title={t("download_btn")} cont={t("download_cont")} />
          <LanguageSelector />
        </article>
      </section>
    </main>
  );
}

export default Home;

import "./Home.css";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <main>
      <section className="banner-home">
        <article className="txt-banner">
          <h1>Truth Escape</h1>
          <p>The hidden truth awaits you.</p>
        </article>
        <article className="buttons-banner">
          <Button title="DONATE" />
          <Button title="CODE" />
          <Button title="DOWNLOAD" />
        </article>
      </section>
    </main>
  );
}

export default Home;

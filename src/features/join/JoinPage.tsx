import { JoinForm } from "./JoinForm";
import { site, join } from "../../content/site";

export function JoinPage() {
  return (
    <section className="section container">
      <div className="join__grid">
        <div className="join__intro">
          <span className="hero__eyebrow">{join.eyebrow}</span>
          <h1 className="section__title">{join.title}</h1>
          <p className="section__intro">{join.intro}</p>
          <p className="join__email">
            {join.emailNote}{" "}
            <a className="join__email-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <JoinForm />
      </div>
    </section>
  );
}
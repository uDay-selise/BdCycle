import { RiderScene } from "./RiderScene";
import { home, homeHighlights } from "../../content/site";

export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <section className="hero container">
        <div className="hero__grid">
          <div>
            <span className="hero__eyebrow">{home.eyebrow}</span>
            <h1 className="hero__title">{home.title}</h1>
            <p className="hero__lead">{home.lead}</p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href="#/join"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/join");
                }}
              >
                {home.joinLabel}
              </a>
              <a
                className="btn btn--secondary"
                href="#/events"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/events");
                }}
              >
                {home.eventsLabel}
              </a>
            </div>
          </div>
          <div className="hero__media">
            <RiderScene />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section__title">What our rides are like</h2>
        <p className="section__intro">
          No racing, no jargon — just a sociable ride out with people who love
          being on two wheels.
        </p>
        <div className="grid-3">
          {homeHighlights.map((item) => (
            <article className="panel" key={item.title}>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="callout">
          <div>
            <h2 className="callout__title">Come along</h2>
            <p className="callout__text">
              Fancy a ride with us? Drop us a line and we'll tell you what's
              coming up.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href="#/join"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/join");
            }}
          >
            {home.joinLabel}
          </a>
        </div>
      </section>
    </>
  );
}
import { RiderScene } from "../home/RiderScene";
import { about } from "../../content/site";

export function AboutPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <section className="section container">
        <div className="about__grid">
          <div className="about__body">
            <span className="hero__eyebrow">{about.eyebrow}</span>
            <h1 className="section__title">{about.title}</h1>
            <p className="section__intro">{about.intro}</p>
            <div className="about__prose">
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href="#/join"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/join");
                }}
              >
                Join a ride
              </a>
              <a
                className="btn btn--secondary"
                href="#/events"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/events");
                }}
              >
                See coming rides
              </a>
            </div>
          </div>
          <div className="hero__media">
            <RiderScene />
          </div>
        </div>
      </section>
    </>
  );
}
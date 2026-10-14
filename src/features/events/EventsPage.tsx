import { JoinForm } from "../join/JoinForm";
import { events, rides, type Ride } from "../../content/site";

function RideCard({ ride }: { ride: Ride }) {
  return (
    <article className="panel ride">
      <h3 className="ride__name">{ride.name}</h3>
      <dl className="ride__details">
        <div className="ride__detail">
          <dt>{events.rideLabels.date}</dt>
          <dd>{ride.date}</dd>
        </div>
        <div className="ride__detail">
          <dt>{events.rideLabels.time}</dt>
          <dd>{ride.time}</dd>
        </div>
        <div className="ride__detail">
          <dt>{events.rideLabels.meetingPoint}</dt>
          <dd>{ride.meetingPoint}</dd>
        </div>
      </dl>
    </article>
  );
}

export function EventsPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="section container">
      <span className="hero__eyebrow">{events.eyebrow}</span>
      <h1 className="section__title">{events.title}</h1>
      <p className="section__intro">{events.intro}</p>

      {rides.length > 0 ? (
        <div className="rides">
          <h2 className="visually-hidden">{events.listLabel}</h2>
          <div className="rides__list">
            {rides.map((ride) => (
              <RideCard key={`${ride.name}-${ride.date}`} ride={ride} />
            ))}
          </div>
          <div className="events__join">
            <JoinForm heading="Come along" />
          </div>
        </div>
      ) : (
        <div className="events__empty">
          <p className="events__note">{events.seasonNote}</p>
          <div className="events__join">
            <JoinForm />
          </div>
        </div>
      )}

      <p className="events__links">
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
      </p>
    </section>
  );
}
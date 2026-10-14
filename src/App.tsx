import { useRouter } from "./hooks/useRouter";
import { SiteHeader, SiteFooter } from "./features/shell/SiteChrome";
import { SiteNav } from "./features/shell/SiteNav";
import { HomePage } from "./features/home/HomePage";
import { EventsPage } from "./features/events/EventsPage";
import { AboutPage } from "./features/about/AboutPage";
import { JoinPage } from "./features/join/JoinPage";

function NotFound({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="section container stack">
      <h1 className="section__title">We couldn't find that page.</h1>
      <p className="section__intro">
        Head back to the Home page and we'll get you riding again.
      </p>
      <p>
        <a
          className="btn btn--primary"
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/");
          }}
        >
          Back to Home
        </a>
      </p>
    </section>
  );
}

export default function App() {
  const { path, navigate } = useRouter();

  return (
    <div className="site">
      <SiteHeader>
        <SiteNav path={path} onNavigate={navigate} />
      </SiteHeader>
      <main className="site__main">
        {path === "/" ? (
          <HomePage onNavigate={navigate} />
        ) : path === "/events" ? (
          <EventsPage onNavigate={navigate} />
        ) : path === "/about" ? (
          <AboutPage onNavigate={navigate} />
        ) : path === "/join" ? (
          <JoinPage />
        ) : (
          <NotFound onNavigate={navigate} />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
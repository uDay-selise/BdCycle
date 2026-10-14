import { site } from "../../content/site";

export function BrandMark() {
  return (
    <svg
      className="brand__mark"
      viewBox="0 0 48 48"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="hsl(var(--primary))" />
      <g
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      >
        <circle cx="16" cy="30" r="7" />
        <circle cx="33" cy="30" r="7" />
        <path d="M16 30 L24 18 L33 30 M24 18 L23 30" />
      </g>
    </svg>
  );
}

export function SiteHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#/">
          <BrandMark />
          <span>{site.brand}</span>
        </a>
        {children}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__note">
          {site.brand} · group rides in the local area. Everyone welcome.
        </p>
        <p className="footer__note">
          Say hello at{" "}
          <span className="footer__email">{site.email}</span>
        </p>
      </div>
    </footer>
  );
}
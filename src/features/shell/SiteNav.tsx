import { NAV_ITEMS } from "../../routes";

export function SiteNav({
  path,
  onNavigate,
}: {
  path: string;
  onNavigate: (path: string) => void;
}) {
  return (
    <nav className="nav" aria-label="Main">
      {NAV_ITEMS.map((item) => {
        const active = path === item.path;
        return (
          <a
            key={item.path}
            href={`#${item.path}`}
            className={`nav__link${active ? " nav__link--active" : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.path);
            }}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
import { useCallback, useEffect, useState } from "react";
import type { Route } from "../routes";

function readLocation(): string {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

export function useRouter() {
  const [path, setPath] = useState<string>(readLocation);

  useEffect(() => {
    const onChange = () => setPath(readLocation());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((next: Route | string) => {
    window.location.hash = next;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { path, navigate };
}
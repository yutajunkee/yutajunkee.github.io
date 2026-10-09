import { GITHUB_URL, SITE, WORKANA_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {SITE.name} · {SITE.location} · API work · 2026
      </p>
      <p>
        <a href={WORKANA_URL} target="_blank" rel="noopener noreferrer">
          Workana profile
        </a>
        {" · "}
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
      </p>
    </footer>
  );
}

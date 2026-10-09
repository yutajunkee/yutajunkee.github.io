import { GITHUB_URL, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {SITE.name} · {SITE.location} · API work · 2026
      </p>
      <p>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub profile
        </a>
      </p>
    </footer>
  );
}

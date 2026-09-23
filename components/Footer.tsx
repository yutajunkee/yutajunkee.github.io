import { WORKANA_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Yuta J. · Japan · API work · 2026</p>
      <p>
        <a href={WORKANA_URL} target="_blank" rel="noopener noreferrer">
          Workana profile
        </a>
      </p>
    </footer>
  );
}

import Image from "next/image";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <Image
            className="brand__avatar"
            src={SITE.avatar}
            alt=""
            width={44}
            height={44}
          />
          <span className="brand__name">{SITE.shortName}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#hire" ? "nav__hire" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

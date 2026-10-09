import Image from "next/image";
import { GITHUB_URL, SITE } from "@/lib/site";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <header className="section__head">
        <p className="overline">
          <span className="jp" aria-hidden="true">
            走
          </span>{" "}
          Desk
        </p>
        <h2 id="about-title">About</h2>
      </header>
      <div className="about__grid">
        <div className="about__copy">
          <div className="about__identity">
            <Image
              className="about__avatar"
              src={SITE.portrait}
              alt={SITE.name}
              width={1200}
              height={1200}
            />
            <div>
              <p className="about__name">{SITE.name}</p>
              <p className="about__role">
                {SITE.role} · {SITE.location}
              </p>
              <p className="about__role">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  github.com/yutajunkee1224
                </a>
              </p>
            </div>
          </div>
          <p>
            I work from Japan. For teams in the Americas that is an overnight
            window: you leave a spec in the evening and I return the surface in
            your morning. Europe overlaps the first half of my day.
          </p>
          <p>
            I build full products. Backend and frontend, mobile apps, SaaS
            platforms, and chatbots. The screen a person uses, and the system
            underneath it. Clear English, written first.
          </p>
          <p>
            I prefer a brief I can build against. What the user does, what the
            system stores, and what happens when something fails. If that
            document does not exist yet, the first station is writing it
            together. No stand-up theatre. A timetable.
          </p>
        </div>
        <figure className="about__figure">
          <Image
            src="/images/ticket-window-desk.png"
            alt="Ticket window desk with cream tickets, a vermillion stamp, and a navy laptop"
            width={1200}
            height={900}
          />
          <figcaption>Night desk. Tickets, stamp, laptop.</figcaption>
        </figure>
      </div>
    </section>
  );
}

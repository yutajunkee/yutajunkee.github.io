import Image from "next/image";
import { SITE } from "@/lib/site";

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
              src={SITE.avatar}
              alt={`Portrait of ${SITE.name}`}
              width={192}
              height={192}
            />
            <div>
              <p className="about__name">{SITE.name}</p>
              <p className="about__role">
                {SITE.role} · {SITE.location}
              </p>
            </div>
          </div>
          <p>
            I work from Japan. For teams in the Americas that is an overnight
            window: you leave a spec in the evening and I return the surface in
            your morning. Europe overlaps the first half of my day.
          </p>
          <p>
            I take API work. HTTP contracts other systems depend on. Webhooks
            that must arrive once. Admin routes nobody celebrates and everybody
            needs. Clear English, written first.
          </p>
          <p>
            I prefer a brief I can build against. Methods, paths, error grammar,
            auth, and what happens when the other side is down. If that document
            does not exist yet, the first station is writing it together. No
            stand-up theatre. A timetable.
          </p>
          <p>
            Hiring is through Workana. The rate is USD 30 an hour. I reply
            through Workana messages. There is no second inbox to miss.
          </p>
          <p>
            The public profile lists me as {SITE.name}, Japan, freelancer expert
            in IT &amp; Programming.
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

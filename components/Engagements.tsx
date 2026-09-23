import Image from "next/image";
import { ENGAGEMENTS } from "@/lib/site";

export function Engagements() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <header className="section__head">
        <p className="overline">
          <span className="jp" aria-hidden="true">
            発
          </span>{" "}
          On the board
        </p>
        <h2 id="work-title">Engagement types</h2>
        <p className="section__deck">
          Typical surfaces, not named clients. The work looks like this when it
          is going well.
        </p>
      </header>

      <div className="plate-band" aria-hidden="true">
        <Image
          src="/images/departure-board.png"
          alt=""
          width={1600}
          height={900}
        />
      </div>

      <div className="studies">
        {ENGAGEMENTS.map((item, index) => (
          <article
            className={`study ${index % 2 ? "study--flip" : ""}`}
            key={item.id}
          >
            <div className="study__image">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={1280}
                height={720}
              />
              <p className="study__serial">{item.serial}</p>
            </div>
            <div className="study__copy">
              <h3>{item.title}</h3>
              <p className="study__outcome">{item.outcome}</p>
              <p>{item.narrative}</p>
              <pre className="snippet">
                <code>
                  <span className="snippet__label">REQ</span>
                  {"\n"}
                  {item.snippet.req}
                  {"\n\n"}
                  <span className="snippet__label">RES</span>
                  {"\n"}
                  {item.snippet.res}
                </code>
              </pre>
              <div>
                <p className="tiny-label">Typical scope</p>
                <ul className="scope">
                  {item.scope.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

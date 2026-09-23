import Image from "next/image";
import { DepartureBoard } from "@/components/DepartureBoard";
import { WorkLink } from "@/components/WorkLink";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="hero__copy">
        <p className="overline">API Engineer · Japan · Workana</p>
        <h1 id="hero-name" className="hero__name">
          Yuta J.
        </h1>
        <p className="hero__offer">I write the routes your product cannot miss.</p>
        <p className="hero__lede">
          Japan-based freelancer. Contracts, integrations, webhooks, backend
          surfaces. Clear English. Available on Workana at $30/hour.
        </p>
        <div className="hero__actions">
          <WorkLink className="btn btn--primary">Hire on Workana</WorkLink>
          <a className="btn btn--ghost" href="#work">
            See the board
          </a>
        </div>
        <dl className="facts">
          <div>
            <dt>Origin</dt>
            <dd>Japan</dd>
          </div>
          <div>
            <dt>Rate</dt>
            <dd>$30 / hour</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>IT &amp; Programming</dd>
          </div>
          <div>
            <dt>Desk</dt>
            <dd>API specialist</dd>
          </div>
        </dl>
      </div>

      <div className="hero__stage">
        <DepartureBoard />
        <article className="stub">
          <div className="stub__photo">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Yuta J. at a night desk"
              width={480}
              height={640}
              priority
            />
          </div>
          <div className="stub__body">
            <p className="stub__serial">SERIAL YJ–3000</p>
            <p className="stub__from">
              FROM <strong>Japan</strong>
            </p>
            <p className="stub__to">
              TO <strong>Workana</strong>
            </p>
            <p className="stub__rate">USD 30 / HR · API</p>
          </div>
          <Image
            className="stub__stamp"
            src="/images/stamp-yj.png"
            alt="Vermillion YJ stamp"
            width={160}
            height={160}
          />
        </article>
      </div>
    </section>
  );
}

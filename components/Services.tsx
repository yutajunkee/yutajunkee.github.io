import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <header className="section__head">
        <p className="overline">
          <span className="jp" aria-hidden="true">
            改
          </span>{" "}
          On the counter
        </p>
        <h2 id="services-title">Services</h2>
        <p className="section__deck">
          Four punched tickets. Pick a window, or bring a broken one.
        </p>
      </header>
      <ol className="ticket-rack">
        {SERVICES.map((service, i) => (
          <li
            className={`ticket ticket--${service.index}`}
            key={service.index}
            style={{ ["--tilt" as string]: i % 2 === 0 ? "-0.4deg" : "0.6deg" }}
          >
            <span className="ticket__index" aria-hidden="true">
              {service.index}
            </span>
            <div className="ticket__main">
              <h3>{service.title}</h3>
              <p>{service.pitch}</p>
              <ul className="tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <p className="ticket__serial">YJ–SVC–{service.index}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

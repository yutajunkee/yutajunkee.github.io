import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <header className="section__head">
        <p className="overline">Timetable</p>
        <h2 id="process-title">Four stations</h2>
        <p className="section__deck">
          Quiet, sequential. No ceremony beyond a written spec.
        </p>
      </header>
      <ol className="stations">
        {PROCESS.map((step, index) => (
          <li className="station" key={step.title}>
            <span className="station__mark jp" title={step.markLabel}>
              {step.mark}
            </span>
            <span className="station__num">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

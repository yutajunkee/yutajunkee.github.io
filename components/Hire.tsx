import { WORKANA_URL } from "@/lib/site";
import { WorkLink } from "@/components/WorkLink";

export function Hire() {
  return (
    <section className="hire" id="hire" aria-labelledby="hire-title">
      <div className="hire__window">
        <p className="hire__kicker">
          <span className="jp" aria-hidden="true">
            着
          </span>{" "}
          Ticket window
        </p>
        <h2 id="hire-title">Collect your ticket on Workana</h2>
        <p className="hire__rate">USD 30 / hour</p>
        <p className="hire__note">I reply through Workana messages.</p>
        <WorkLink className="btn btn--window">Open the Workana profile</WorkLink>
        <p className="hire__url">
          <a href={WORKANA_URL} target="_blank" rel="noopener noreferrer">
            workana.com/freelancer/08022166a789a4218dd70d255136290e
          </a>
        </p>
      </div>
    </section>
  );
}

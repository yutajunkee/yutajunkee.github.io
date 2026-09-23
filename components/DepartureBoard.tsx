"use client";

import { useEffect, useState } from "react";
import { BOARD_ROWS } from "@/lib/site";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/-:";

function scramble(target: string, tick: number) {
  if (tick >= 6) return target;
  return target
    .split("")
    .map((char, i) => {
      if (char === " " || char === "/" || tick > i) return char;
      return GLYPHS[(tick * 7 + i * 13) % GLYPHS.length];
    })
    .join("");
}

export function DepartureBoard() {
  const [tick, setTick] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setReduced(true);
      setTick(6);
      return;
    }

    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      setTick(frame);
      if (frame >= 6) window.clearInterval(id);
    }, 70);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="board" data-settled={tick >= 6 || reduced ? "true" : "false"}>
      <div className="board__chrome">
        <p className="board__kicker">
          <span className="jp" aria-hidden="true">
            発
          </span>
          Departures · API surface
        </p>
        <p className="board__clock">PLATFORM 30</p>
      </div>
      <div className="board__table" role="table" aria-label="API departure board">
        <div className="board__head" role="row">
          <span>Dest</span>
          <span>Method</span>
          <span>Path</span>
          <span>Status</span>
        </div>
        {BOARD_ROWS.map((row, index) => (
          <div
            className="board__row"
            role="row"
            key={row.dest}
            style={{ animationDelay: `${80 + index * 90}ms` }}
          >
            <span className="cell cell--dest" role="cell">
              {scramble(row.dest, tick)}
            </span>
            <span className="cell cell--method" role="cell">
              {scramble(row.method, tick)}
            </span>
            <span className="cell cell--path" role="cell">
              {scramble(row.path, tick)}
            </span>
            <span className="cell cell--status" role="cell">
              {scramble(row.status, tick)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const WORKANA_URL =
  "https://www.workana.com/freelancer/08022166a789a4218dd70d255136290e";

export const SITE = {
  name: "Yuta J.",
  title: "Yuta J. — API Engineer in Japan",
  description:
    "Japan-based freelance API expert on Workana. Contracts, integrations, webhooks, and backend surfaces. USD 30 per hour.",
  rate: "USD 30 / hour",
  location: "Japan",
  category: "IT & Programming",
  role: "API specialist",
} as const;

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#hire", label: "Hire" },
] as const;

export const BOARD_ROWS = [
  { dest: "AUTH", method: "POST", path: "/v1/sessions", status: "201" },
  { dest: "ORDERS", method: "GET", path: "/v1/orders", status: "200" },
  { dest: "HOOKS", method: "POST", path: "/webhooks", status: "204" },
  { dest: "PAY", method: "GET", path: "/v1/payments/:id", status: "200" },
  { dest: "STOCK", method: "PUT", path: "/v1/inventory", status: "204" },
] as const;

export const SERVICES = [
  {
    index: "01",
    title: "API design & build",
    pitch:
      "REST and JSON contracts with versioning, auth, pagination, and error grammar a second team can implement against without a call.",
    tags: ["REST", "JSON", "Auth", "OpenAPI"],
  },
  {
    index: "02",
    title: "Integrations & webhooks",
    pitch:
      "Third-party APIs, retries, idempotency keys, and event delivery that still lands when the other side blinks.",
    tags: ["Webhooks", "Retries", "Idempotency", "Queues"],
  },
  {
    index: "03",
    title: "Backend for products",
    pitch:
      "Auth, CRUD, admin surfaces. The unglamorous middle that keeps a product honest after the demo.",
    tags: ["Auth", "CRUD", "Admin", "Postgres"],
  },
  {
    index: "04",
    title: "Rescue & hardening",
    pitch:
      "Broken endpoints, flaky callbacks, missing docs, production fire. I read the traffic, then close the hole.",
    tags: ["Debug", "Timeouts", "Docs", "Logs"],
  },
] as const;

export const ENGAGEMENTS = [
  {
    id: "marketplace",
    serial: "YJ-01",
    title: "Marketplace inventory sync",
    outcome: "Stock counts that agree across storefront and warehouse.",
    image: "/images/engagement-marketplace.png",
    imageAlt:
      "Warehouse packing bench with cartons, navy shelving, and a handheld scanner",
    narrative:
      "A typical ask: two catalogs, one truth. I specify the write path, the conflict rule, and the webhook that tells the storefront when a bin changes. Reads stay cheap. Writes stay boring.",
    snippet: {
      req: "PUT /v1/inventory/sku-4401\nIdempotency-Key: 8f2a-19c0",
      res: "204 No Content\nX-Stock-Revision: 1842",
    },
    scope: [
      "SKU map and warehouse source of truth",
      "Idempotent stock writes",
      "Out-of-order event handling",
      "Admin view for mismatches",
    ],
  },
  {
    id: "payments",
    serial: "YJ-02",
    title: "Payment webhook reliability",
    outcome: "Paid events that survive retries and duplicate posts.",
    image: "/images/engagement-payments.png",
    imageAlt: "Cream receipt tape beside a navy cash drawer and brass tray",
    narrative:
      "Providers retry. Clients double-click. I treat every callback as hostile until the ledger says otherwise: verify, lock on the event id, record, then fan out. The product sees one paid.",
    snippet: {
      req: "POST /webhooks/payments\nX-Signature: t=…,v1=…",
      res: "204 No Content\nX-Event-State: recorded",
    },
    scope: [
      "Signature verification",
      "Exactly-once business effect",
      "Dead-letter and replay",
      "Runbook for missed events",
    ],
  },
  {
    id: "partner",
    serial: "YJ-03",
    title: "Partner API for a mobile app",
    outcome: "A versioned surface a mobile team can ship against.",
    image: "/images/engagement-partner-api.png",
    imageAlt: "Night desk with a phone, cream ticket stub, and a dark laptop",
    narrative:
      "Mobile cannot wait on hallway decisions. I freeze /v1, document error shapes, and keep pagination stable. Breaking changes go to /v2. The app store date stays on the timetable.",
    snippet: {
      req: "GET /v1/me/orders?cursor=eyJ…\nAuthorization: Bearer …",
      res: '200 OK\n{ "data": […], "next": "…" }',
    },
    scope: [
      "Auth and token lifetime",
      "Cursor pagination",
      "Error grammar and codes",
      "OpenAPI + example payloads",
    ],
  },
] as const;

export const PROCESS = [
  {
    mark: "改",
    markLabel: "gate",
    title: "Brief & contract",
    copy: "Scope, rate, and the Workana thread. What ships, what waits, who signs off.",
  },
  {
    mark: "発",
    markLabel: "depart",
    title: "Spec the surface",
    copy: "Paths, verbs, auth, errors, and failure. A document the build can follow.",
  },
  {
    mark: "走",
    markLabel: "en route",
    title: "Build & instrument",
    copy: "Implement the contract. Logs, retries, and the checks that prove it.",
  },
  {
    mark: "着",
    markLabel: "arrive",
    title: "Hand off with docs",
    copy: "OpenAPI or a short runbook. How to call it, how to read it, how to extend it.",
  },
] as const;

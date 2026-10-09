export const GITHUB_URL = "https://github.com/yutajunkee1224";

export const SITE_URL = "https://yutajunkee.github.io";

export const PORTRAITS = [
  { url: "/images/yuta-junkee-1x1.jpg", width: 1200, height: 1200 },
  { url: "/images/yuta-junkee-4x3.jpg", width: 1200, height: 900 },
  { url: "/images/yuta-junkee-16x9.jpg", width: 1200, height: 675 },
] as const;

export const SITE = {
  name: "Yuta Junkee",
  shortName: "YJ",
  title: "Yuta Junkee — Full-Stack Developer in Japan",
  description:
    "Japan-based full-stack developer. Backend, frontend, mobile apps, SaaS platforms, and chatbots. USD 30 per hour.",
  rate: "USD 30 / hour",
  location: "Japan",
  category: "IT & Programming",
  role: "Full-stack developer",
  jobTitle: "Full-Stack Developer",
  avatar: "/images/avatar.png",
  portrait: PORTRAITS[0].url,
} as const;

export const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
] as const;

export const BOARD_ROWS = [
  { dest: "WEB", method: "GET", path: "/dashboard", status: "200" },
  { dest: "API", method: "POST", path: "/v1/orders", status: "201" },
  { dest: "APP", method: "GET", path: "/mobile/home", status: "200" },
  { dest: "SAAS", method: "POST", path: "/billing", status: "201" },
  { dest: "BOT", method: "POST", path: "/chat", status: "200" },
] as const;

export const SERVICES = [
  {
    index: "01",
    title: "Backend",
    pitch:
      "APIs, data, auth, and the jobs that keep a product honest after the demo. The part the screen stands on.",
    tags: ["APIs", "Auth", "Data", "Jobs"],
  },
  {
    index: "02",
    title: "Frontend",
    pitch:
      "Interfaces a person can finish a task in. Clear states, fast pages, and no mystery clicks.",
    tags: ["UI", "Pages", "Forms", "States"],
  },
  {
    index: "03",
    title: "Mobile apps",
    pitch:
      "iOS and Android products with the same rules as the web: sign-in, the awkward offline edge, and a release you can ship.",
    tags: ["iOS", "Android", "Auth", "Release"],
  },
  {
    index: "04",
    title: "SaaS platforms",
    pitch:
      "Multi-tenant products. Signup, roles, billing, and the admin view that shows whether the account is healthy.",
    tags: ["Tenancy", "Billing", "Roles", "Admin"],
  },
  {
    index: "05",
    title: "Chatbots",
    pitch:
      "Assistants that answer from your data, hand off when they should, and leave a transcript a person can trust.",
    tags: ["Assistants", "Retrieval", "Handoff", "Transcripts"],
  },
] as const;

export const ENGAGEMENTS = [
  {
    id: "saas",
    serial: "YJ-01",
    title: "SaaS platform",
    outcome: "One product, many accounts, and an admin view that tells the truth.",
    image: "/images/engagement-marketplace.png",
    imageAlt:
      "Warehouse packing bench with cartons, navy shelving, and a handheld scanner",
    narrative:
      "A typical ask: turn an operation into software. I set the tenant boundary, the roles, and the screen an admin uses when two accounts disagree. Billing sits next to the data, not in a side spreadsheet.",
    snippet: {
      req: "POST /v1/workspaces\nIdempotency-Key: 8f2a-19c0",
      res: "201 Created\n{ \"id\": \"ws_1842\" }",
    },
    scope: [
      "Tenant model and roles",
      "Signup through paid account",
      "Admin view for mismatches",
      "Backend and the web app together",
    ],
  },
  {
    id: "mobile",
    serial: "YJ-02",
    title: "Mobile app",
    outcome: "A phone build that ships against a stable product API.",
    image: "/images/engagement-partner-api.png",
    imageAlt: "Night desk with a phone, cream ticket stub, and a dark laptop",
    narrative:
      "The app store date does not wait on hallway decisions. I freeze the contract the phone calls, keep sign-in boring, and put the awkward offline case in the spec before it shows up in a review.",
    snippet: {
      req: "GET /v1/me\nAuthorization: Bearer …",
      res: '200 OK\n{ "data": { "plan": "pro" } }',
    },
    scope: [
      "iOS or Android client",
      "Auth and session lifetime",
      "Shared API with the web app",
      "Release checklist",
    ],
  },
  {
    id: "chatbot",
    serial: "YJ-03",
    title: "Product chatbot",
    outcome: "Answers from the product's own data, with a human exit.",
    image: "/images/engagement-payments.png",
    imageAlt: "Cream receipt tape beside a navy cash drawer and brass tray",
    narrative:
      "Customers ask where an order is, and the team pastes the same answer. I bind the bot to the order record, log every turn, and hand the thread to a person when the status is not in the system.",
    snippet: {
      req: "POST /v1/chat\n{ \"message\": \"Where is my order?\" }",
      res: '200 OK\n{ "reply": "…", "handoff": false }',
    },
    scope: [
      "Answers grounded in product data",
      "Handoff to a person",
      "Transcript a teammate can read",
      "The same auth as the rest of the app",
    ],
  },
] as const;

export const PROCESS = [
  {
    mark: "改",
    markLabel: "gate",
    title: "Brief & contract",
    copy: "Scope and rate. What ships, what waits, who signs off.",
  },
  {
    mark: "発",
    markLabel: "depart",
    title: "Spec the product",
    copy: "Screens, data, and the paths between them. A document the build can follow.",
  },
  {
    mark: "走",
    markLabel: "en route",
    title: "Build the stack",
    copy: "Backend, interface, and the checks that prove a person can finish the task.",
  },
  {
    mark: "着",
    markLabel: "arrive",
    title: "Hand off with docs",
    copy: "How to run it, how to change it, how to extend it.",
  },
] as const;

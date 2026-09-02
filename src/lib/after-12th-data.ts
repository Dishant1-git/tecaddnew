/**
 * Seed data for every slug under /after-12th-courses/[slug].
 *
 * Deliberately the same shape as `course-data.ts` — these seeds are fed through
 * the same `buildCourse` builder, so an after-12th page gets the identical
 * depth of content as a /courses page. What differs is framing, which lives in
 * the extra fields below (`stream`, `eligibility`, `fee`, `cardBlurb`) and is
 * applied in `after-12th-courses.ts`.
 *
 * The slugs match the "After 12th" mega menu in `content.ts` exactly, so every
 * dropdown link resolves.
 *
 * Copy is placeholder marketing content. Swap the strings; no component needs
 * touching.
 */

import type { CourseSeed } from "./course-data";

/** Stream ids double as the hub-page anchors on /after-12th-courses. */
export type After12StreamId =
  | "six-month"
  | "one-year"
  | "graphics"
  | "civil-mechanical";

export type After12Seed = CourseSeed & {
  stream: After12StreamId;
  /** Short card copy on the hub grid — the tagline is the longer hero line. */
  cardBlurb: string;
  /** Three chips under the card copy. */
  highlights: string[];
  /** Indicative fee range, shown in the spec rail. */
  fee: string;
  /** Entry requirement, shown in the spec rail and the hero stat. */
  eligibility: string;
};

export const after12StreamMeta: Array<{
  id: After12StreamId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
}> = [
  {
    id: "six-month",
    index: "01",
    title: "6 Month Certificates",
    tagline: "One skill, job-ready in half a year",
    blurb:
      "The shortest honest route to a first salary. One discipline, taught end to end, with a portfolio brief running underneath from the second month.",
  },
  {
    id: "one-year",
    index: "02",
    title: "1 Year Certificates",
    tagline: "Full programmes with an internship track",
    blurb:
      "Two semesters: the first builds the discipline, the second puts you inside a live delivery team with an internship letter at the end of it.",
  },
  {
    id: "graphics",
    index: "03",
    title: "Graphics",
    tagline: "Design, video and motion for screen and print",
    blurb:
      "Craft tracks for students who came out of 12th already making things. Portfolio weight matters more than marks here, and that is what these are built to produce.",
  },
  {
    id: "civil-mechanical",
    index: "04",
    title: "Civil / Mechanical",
    tagline: "Design and drafting for engineering streams",
    blurb:
      "For PCM students heading into a diploma, a B.Tech or straight into a site office. Drafting skill is what gets you paid on day one, whichever of those you pick.",
  },
];

const ANY_STREAM = "12th pass, any stream";
const PCM_PREFERRED = "12th pass, PCM preferred";

export const after12Seeds: After12Seed[] = [
  /* ------------------------------------------------------- 6 month tracks */
  {
    slug: "digital-marketing-communication",
    title: "Digital Marketing & Communication",
    category: "Digital Marketing",
    stream: "six-month",
    badge: "Trending",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹24,000 – ₹40,000",
    tagline:
      "Search, social, paid media and analytics run as one measurable system — on a live client account from the second month, not a demo dashboard.",
    focus:
      "Digital marketing is the fastest hire in Punjab for a 12th pass student with a portfolio, because results are provable: every campaign you run leaves numbers a hiring manager can check.",
    cardBlurb:
      "SEO, paid media, social and analytics run as one measurable system on a live client account rather than a demo dashboard.",
    highlights: ["Meta & Google Ads", "SEO and content", "GA4 reporting"],
    topics: [
      { t: "Digital Marketing Fundamentals", s: ["Digital against traditional marketing", "The buyer's journey online", "How a digital strategy is built"] },
      { t: "Search Engine Optimisation", s: ["On-page, off-page and technical SEO", "Keyword research", "Local SEO for a city like Amritsar"] },
      { t: "SEM & Google Ads", s: ["Search, display and shopping campaigns", "Budgets, targeting and ad copy", "Remarketing and ROI analysis"] },
      { t: "Social Media Marketing", s: ["Content calendars", "Paid social campaigns", "Audience targeting and organic growth"] },
      { t: "Content Marketing & Copywriting", s: ["Blog writing that ranks", "Ad copy and social captions", "Writing with clarity and persuasion"] },
      { t: "Email Marketing & Automation", s: ["Building a list", "Designing campaigns", "Automated follow-up sequences"] },
      { t: "Web Analytics & Data Interpretation", s: ["Traffic and user behaviour in GA4", "Conversion tracking", "Making data-backed decisions"] },
      { t: "E-Commerce & Affiliate Marketing", s: ["E-commerce marketing strategy", "Affiliate models", "Independent income streams"] },
      { t: "Design for Marketers", s: ["Professional creatives in Canva", "Working without a design team", "Brand consistency"] },
      { t: "AI Tools in Digital Marketing", s: ["Content creation with AI", "Campaign ideation", "Marketing automation"] },
      { t: "Communication & Soft Skills", s: ["Spoken English and business vocabulary", "Email and professional writing etiquette", "Client communication and presentation"], d: "Mock client presentations and group discussions, recorded and reviewed so you can see your own progress." },
      { t: "Live Projects & Portfolio Building", s: ["Real campaigns", "SEO audits", "A portfolio you can show an employer"] },
    ],
    tools: ["Google Ads", "GA4", "Google Search Console", "Meta Ads Manager", "Canva", "Mailchimp", "WordPress", "ChatGPT"],
    roles: ["Digital Marketing Executive", "Performance Marketing Trainee", "SEO Executive", "Social Media Manager", "Freelance Marketing Consultant"],
    projects: [
      { title: "Local Business Growth Campaign", body: "A full-funnel campaign for an Amritsar retailer: audience research, creatives, a live ad budget and a reported outcome." },
      { title: "SEO Rebuild of a Real Site", body: "Audit, keyword map, on-page fixes and a content plan, tracked in Search Console across the course." },
      { title: "Monthly Client Reporting Pack", body: "A Looker Studio dashboard and written commentary of the standard an agency sends a client." },
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    category: "Programming",
    stream: "six-month",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹18,000 – ₹30,000",
    tagline:
      "From your first line of code to a deployed application — the entry point for anyone heading towards data, AI or backend work.",
    focus:
      "Python is the shortest route from beginner to building things that actually run, which is why it is the language every other technical track after 12th builds on.",
    cardBlurb:
      "From first script to a deployed application. The entry point for anyone heading towards data, AI or backend work later.",
    highlights: ["Core Python", "APIs & databases", "Two shipped apps"],
    topics: [
      { t: "Python Fundamentals", s: ["Variables, data types and operators", "Conditional statements", "Loops and control flow"] },
      { t: "Functions & Modular Programming", s: ["Clean, reusable functions", "Scope, arguments and return values", "Structuring code the way professionals do"] },
      { t: "Data Structures", s: ["Lists, tuples, dictionaries and sets", "When and why to use each", "Handling data efficiently"] },
      { t: "Object-Oriented Programming", s: ["Classes and objects", "Inheritance and encapsulation", "From writing scripts to building software"] },
      { t: "File & Exception Handling", s: ["Reading from and writing to files", "try-except blocks", "Programs that do not break on surprise input"] },
      { t: "Libraries & Modules", s: ["NumPy for numerical computing", "Pandas for data manipulation", "Matplotlib and requests"] },
      { t: "Regular Expressions & Strings", s: ["Pattern matching", "Text processing", "Data cleaning and validation"] },
      { t: "Automation & Scripting", s: ["Automating repetitive tasks", "File organisation", "Data extraction"], d: "A working automation script that replaces a task you would otherwise do by hand every week." },
      { t: "Database Connectivity", s: ["Connecting Python to a database", "Storing and retrieving data", "The foundation of backend work"] },
      { t: "Modern Developer Tools", s: ["VS Code and Jupyter Notebooks", "Git and GitHub", "AI-assisted coding and debugging"] },
      { t: "Live Projects & Portfolio", s: ["Automation tools", "Mini-applications", "Data-driven scripts you can demo"] },
    ],
    tools: ["Python 3", "VS Code", "Git", "Jupyter", "NumPy", "pandas", "requests", "MySQL", "ChatGPT"],
    roles: ["Python Developer (Trainee)", "Automation Executive", "Junior Backend Developer", "Data Analyst", "QA Automation Trainee"],
    projects: [
      { title: "Shop Inventory Automation", body: "A script that reads supplier spreadsheets, reconciles stock and emails a daily exception report." },
      { title: "Booking REST API", body: "A Flask service with authentication, validation and a relational schema behind it." },
      { title: "Scraper & Data Pipeline", body: "A scheduled scraper that cleans, de-duplicates and writes structured records into a database." },
    ],
  },
  {
    slug: "machine-learning-ai",
    title: "Machine Learning & AI",
    category: "AI & Data",
    stream: "six-month",
    badge: "Trending",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹28,000 – ₹42,000",
    tagline:
      "Models built on data you have had to clean yourself, evaluated honestly, and written up the way a hiring manager expects to read them.",
    focus:
      "Most of machine learning is not the model — it is the data work before it and the evaluation after it, which is exactly where this course spends its time.",
    cardBlurb:
      "Models built on data you have had to clean yourself, evaluated honestly, and written up the way a hiring manager expects to read them.",
    highlights: ["Scikit-learn", "Model evaluation", "Capstone notebook"],
    topics: [
      { t: "Python Programming Foundations", s: ["Syntax and data structures", "Loops and functions", "Object-oriented programming"] },
      { t: "Mathematics & Statistics for ML", s: ["Probability", "Linear algebra basics", "T-test, Z-test, ANOVA and Chi-square"] },
      { t: "Data Handling & Analysis", s: ["Cleaning real-world datasets", "NumPy and Pandas", "Preparing messy, unstructured data"] },
      { t: "Data Visualisation", s: ["Matplotlib and Seaborn", "Spotting problems before modelling", "Explaining insight to non-technical people"] },
      { t: "Core Machine Learning Algorithms", s: ["Regression and classification", "Clustering and decision trees", "Random forests, SVM and ensembles"] },
      { t: "Deep Learning & Neural Networks", s: ["TensorFlow and Keras", "CNNs for image tasks", "RNNs for sequences and time series"] },
      { t: "Natural Language Processing", s: ["Text preprocessing", "Sentiment analysis", "Chatbots and text classifiers"] },
      { t: "Generative AI & Modern Tools", s: ["Large language models", "Prompt engineering", "AI-powered automation"] },
      { t: "Model Deployment Basics", s: ["From notebook to usable application", "The real AI workflow in a company", "What happens after the model works"], d: "A trained model deployed behind a simple interface, so somebody other than you can actually use it." },
      { t: "Live Projects & Portfolio", s: ["Predictive modelling", "Image classification", "Text analysis and automation tools"] },
    ],
    tools: ["Python 3", "NumPy", "pandas", "scikit-learn", "TensorFlow", "Jupyter", "Git", "ChatGPT"],
    roles: ["Machine Learning Trainee", "Junior Data Analyst", "AI Associate", "Data Science Intern", "Analytics Executive"],
    projects: [
      { title: "Customer Churn Predictor", body: "A classification model on a deliberately messy dataset, with the cleaning decisions documented." },
      { title: "Price Prediction Notebook", body: "A regression study with feature engineering and an honest error analysis section." },
      { title: "Segmentation Dashboard", body: "Clustering output turned into a Streamlit app a business user can actually operate." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cyber & Cloud",
    stream: "six-month",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹26,000 – ₹40,000",
    tagline:
      "Networking fundamentals, hardening and defensive tooling, practised in a lab environment you are allowed to break.",
    focus:
      "Security work is defensive first: you cannot protect a system you do not understand, so the course builds the network and Linux base before any tooling appears.",
    cardBlurb:
      "Networking fundamentals, hardening and defensive tooling, practised in a lab environment you are allowed to break.",
    highlights: ["Network basics", "Linux hardening", "Incident write-ups"],
    topics: [
      { t: "Networking & Security Fundamentals", s: ["IP addressing", "TCP/IP, DNS and HTTP/HTTPS", "Firewalls and basic administration"] },
      { t: "Operating System & System Security", s: ["Windows and Linux security architecture", "User permissions and system hardening", "Practical work in Kali Linux"] },
      { t: "Ethical Hacking & Penetration Testing", s: ["Reconnaissance and scanning", "Gaining and maintaining access", "The full pen-test lifecycle, in a legal lab"] },
      { t: "Web Application Security", s: ["SQL injection and XSS", "Broken authentication", "The OWASP Top 10"] },
      { t: "Network Security & Threat Detection", s: ["Firewalls, IDS and IPS", "VPNs", "Traffic analysis and monitoring"] },
      { t: "Cryptography & Data Protection", s: ["Symmetric and asymmetric encryption", "Hashing and digital signatures", "Compliance in practice"] },
      { t: "Vulnerability Assessment & Risk", s: ["Identifying weaknesses systematically", "Quantitative and qualitative risk", "Deciding what to fix first"], d: "A written vulnerability assessment of a lab environment, prioritised the way a real security team would." },
      { t: "Incident Response & Forensics", s: ["Incident response planning", "Containment and recovery", "Basic digital forensics"] },
      { t: "AI-Era Cybersecurity Threats", s: ["AI-generated phishing", "Deepfake social engineering", "Prompt injection, and AI copilots in the SOC"] },
    ],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Nessus", "SQLMap", "John the Ripper"],
    roles: ["SOC Analyst (L1)", "IT Security Trainee", "Network Support Executive", "Systems Administrator", "Compliance Assistant"],
    projects: [
      { title: "Hardened Server Build", body: "A Linux server taken from default install to a documented hardened baseline, with before/after scans." },
      { title: "Network Traffic Investigation", body: "A packet capture analysed to identify and explain suspicious activity." },
      { title: "Simulated Incident Report", body: "A full response write-up for a lab breach: timeline, impact, containment and prevention." },
    ],
  },
  {
    slug: "tally-erp-gst",
    title: "Tally ERP with GST",
    category: "Business & Office",
    stream: "six-month",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹9,000 – ₹16,000",
    tagline:
      "Books, inventory, payroll and GST filing on real transaction sets — the fastest hire in the Amritsar trading and export market.",
    focus:
      "Every trading house, unit and clinic in the city runs books, and most of them run them in Tally — which is why this is the shortest gap between a 12th result and a salary.",
    cardBlurb:
      "Books, inventory, payroll and GST filing on real transaction sets — the fastest hire in the Amritsar trading and export market.",
    highlights: ["GST returns", "Payroll entries", "Balance sheets"],
    topics: [
      { t: "Accounting Fundamentals", s: ["Debit and credit logic", "Journal to ledger", "Trial balance"] },
      { t: "Company Setup in Tally", s: ["Masters and groups", "Voucher types", "Data security and backups"] },
      { t: "Day-to-Day Vouchers", s: ["Sales and purchase entries", "Payments and receipts", "Contra and journal"] },
      { t: "Inventory Management", s: ["Stock groups and units", "Batches and godowns", "Reorder levels"] },
      { t: "GST End to End", s: ["Rates and HSN", "GSTR-1 and GSTR-3B", "Reconciliation with 2B"] },
      { t: "Payroll & Statutory", s: ["Employee masters", "Salary structures", "PF, ESI and TDS basics"] },
      { t: "Reports & Finalisation", s: ["P&L and balance sheet", "Ratio analysis", "Year-end closing"], d: "A completed set of finalised books for a simulated trading firm, ready for audit." },
    ],
    tools: ["TallyPrime", "MS Excel", "GST Portal", "Google Sheets", "PDF tools", "Email", "Windows", "Zoho Books (overview)"],
    roles: ["Accounts Assistant", "Tally Operator", "GST Executive", "Billing Executive", "Store & Inventory Clerk"],
    projects: [
      { title: "Trading Firm Book Set", body: "Twelve months of entries for a simulated Amritsar wholesaler, closed and finalised." },
      { title: "GST Return Cycle", body: "A full quarter of GSTR-1 and 3B preparation, including a reconciliation exercise." },
      { title: "Payroll Run", body: "A monthly payroll with statutory deductions, payslips and the accounting entries behind them." },
    ],
  },
  {
    slug: "computer-basics-excel",
    title: "Computer Basics & MS Excel",
    category: "Business & Office",
    stream: "six-month",
    duration: "3 months",
    level: "Absolute beginner to confident",
    eligibility: ANY_STREAM,
    fee: "₹6,000 – ₹12,000",
    tagline:
      "The floor everything else stands on: file discipline, formulas, pivots and dashboards good enough to hand to a manager.",
    focus:
      "Almost every office role assumes this and almost no school teaches it properly, so three months here removes the single most common reason a first application is rejected.",
    cardBlurb:
      "The floor everything else stands on: file discipline, formulas, pivots and dashboards good enough to hand to a manager.",
    highlights: ["Formulas & pivots", "Dashboards", "Typing speed"],
    topics: [
      { t: "Computer & OS Basics", s: ["Files, folders and naming", "Shortcuts that save hours", "Safe browsing and backups"] },
      { t: "Word Processing", s: ["Styles and templates", "Tables and mail merge", "Print-ready documents"] },
      { t: "Excel Foundations", s: ["Cells, ranges and references", "Formatting for readability", "Sorting and filtering"] },
      { t: "Formulas & Functions", s: ["Absolute vs relative refs", "IF, VLOOKUP and XLOOKUP", "Text and date functions"] },
      { t: "Pivot Tables & Analysis", s: ["Building a pivot", "Grouping and slicers", "Summarising for a manager"] },
      { t: "Charts & Dashboards", s: ["Choosing the right chart", "Conditional formatting", "A one-screen dashboard"], d: "A single-sheet dashboard summarising a real dataset, ready to email." },
      { t: "Presentations & Email", s: ["Slide structure", "Professional email writing", "Calendar and scheduling"] },
    ],
    tools: ["MS Excel", "MS Word", "PowerPoint", "Google Sheets", "Google Docs", "Outlook", "Windows", "Typing tutor"],
    roles: ["Office Assistant", "Data Entry Executive", "MIS Assistant", "Front Office Executive", "Back Office Associate"],
    projects: [
      { title: "Sales MIS Workbook", body: "A monthly reporting workbook with lookups, pivots and a summary sheet a manager can read in a minute." },
      { title: "Attendance & Payroll Sheet", body: "An automated tracker with formulas that flag anomalies instead of needing manual checks." },
      { title: "Business Presentation Pack", body: "A documented, formatted deck and covering letter produced to office standard." },
    ],
  },

  /* -------------------------------------------------------- 1 year tracks */
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Data",
    stream: "one-year",
    badge: "Trending",
    featured: true,
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹52,000 – ₹75,000",
    tagline:
      "Prompting, retrieval, agents and evaluation — built into working products instead of stopping at a chat window.",
    focus:
      "Anyone can prompt a model; the employable skill is building something reliable on top of one, which means retrieval, guardrails and evaluation you can defend.",
    cardBlurb:
      "Prompting, retrieval, agents and evaluation — built into working products instead of stopping at a chat window.",
    highlights: ["RAG pipelines", "Agent workflows", "Evaluation harnesses"],
    topics: [
      { t: "Foundations of AI & Generative AI", s: ["How generative AI differs from traditional ML", "How large language models work", "Understanding the why, not just the tool"] },
      { t: "Python for AI", s: ["Targeted, practical Python", "Working with APIs", "No prior coding assumed"] },
      { t: "Prompt Engineering", s: ["Structured, reliable prompts", "Chain-of-thought and role-based prompting", "Iterative refinement for business use"] },
      { t: "Large Language Models in Practice", s: ["How GPT-based models are used", "Chatbots and content generation", "Integrating an LLM into a project"] },
      { t: "Retrieval-Augmented Generation", s: ["Combining LLMs with your own data", "Internal knowledge bots", "Accuracy and grounding"], d: "A RAG-based knowledge assistant answering questions over a real document set, with citations." },
      { t: "AI Content & Image Generation", s: ["ChatGPT for text and content", "DALL·E and image generation", "Applied to marketing and design work"] },
      { t: "AI Agents & Automation Frameworks", s: ["Agentic AI concepts", "LangChain", "Multi-step planning and execution"] },
      { t: "AI Ethics & Responsible Use", s: ["Data privacy", "Ethical guardrails", "Responsible deployment inside a company"] },
      { t: "Real-World Projects", s: ["AI-powered customer support chatbots", "Content generation tools", "Simple AI automation workflows"] },
      { t: "Career-Ready Portfolio", s: ["Projects you can present in interviews", "A portfolio for LinkedIn", "Material for freelance pitches"] },
    ],
    tools: ["Python 3", "ChatGPT", "LangChain", "Hugging Face", "Claude API", "Jupyter", "Streamlit", "Git"],
    roles: ["Generative AI Associate", "AI Application Developer", "Prompt Engineer", "AI Automation Executive", "Junior ML Engineer"],
    projects: [
      { title: "Document Q&A Assistant", body: "A RAG application over a real document set, with citations and a measured accuracy baseline." },
      { title: "Support Triage Agent", body: "A tool-using agent that classifies incoming queries and drafts replies for human approval." },
      { title: "Evaluation Harness", body: "A scored test suite that catches quality regressions before they reach a user." },
    ],
  },
  {
    slug: "cloud-computing-devops",
    title: "Cloud Computing & DevOps",
    category: "Cyber & Cloud",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹48,000 – ₹72,000",
    tagline:
      "Provision it, containerise it, automate the deploy — then keep it alive when something fails at 2am.",
    focus:
      "Cloud work is judged on what happens under failure, so the course puts you on call for your own environments long before the certificate is in sight.",
    cardBlurb:
      "Provision it, containerise it, automate the deploy, then keep it alive when something fails at 2am.",
    highlights: ["Linux & networking", "Docker & CI/CD", "Monitoring"],
    topics: [
      { t: "Cloud Computing Fundamentals", s: ["IaaS, PaaS and SaaS", "Public, private and hybrid cloud", "Why organisations left on-premise"] },
      { t: "Amazon Web Services", s: ["EC2, S3 and IAM", "VPC networking and RDS", "Lambda, auto scaling and load balancing"] },
      { t: "Microsoft Azure", s: ["Virtual machines and storage", "Azure Active Directory and resource groups", "App Services, networking and security"] },
      { t: "Google Cloud Platform", s: ["Compute Engine and Cloud Storage", "IAM and networking basics", "Where GCP fits for data and AI workloads"] },
      { t: "Linux Fundamentals", s: ["Command line navigation", "File permissions and processes", "Basic shell scripting"] },
      { t: "Version Control with Git", s: ["Branching and merging", "Collaborative workflows", "Git and GitHub in a team"] },
      { t: "Containers with Docker", s: ["Containerisation concepts", "Building images", "Managing running containers"] },
      { t: "Orchestration with Kubernetes", s: ["Pods and deployments", "Scaling applications", "Container orchestration in practice"] },
      { t: "CI/CD with Jenkins", s: ["Pipeline setup", "Automated testing", "Automated deployment"], d: "A working CI/CD pipeline that tests and deploys an application to cloud infrastructure without manual steps." },
      { t: "Infrastructure as Code", s: ["Provisioning through code", "Terraform basics", "Repeatable environments"] },
      { t: "Monitoring & Logging", s: ["Tracking application performance", "Reading logs under pressure", "Troubleshooting a live environment"] },
      { t: "Real-World Project Work", s: ["End-to-end application deployment", "A scalable cloud architecture", "Certification guidance and interview prep"] },
    ],
    tools: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "Ubuntu Linux", "Prometheus"],
    roles: ["Cloud Support Associate", "DevOps Trainee", "Site Reliability Trainee", "Linux Administrator", "Build & Release Assistant"],
    projects: [
      { title: "Containerised Web Platform", body: "A multi-service application built, containerised and deployed behind a load balancer." },
      { title: "Automated Delivery Pipeline", body: "A CI/CD pipeline that tests, builds and ships to staging and production with a rollback path." },
      { title: "Observability Stack", body: "Metrics, dashboards and alerting for a running service, with a written incident runbook." },
    ],
  },
  {
    slug: "ai-data-science",
    title: "AI & Data Science",
    category: "AI & Data",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹50,000 – ₹74,000",
    tagline:
      "Statistics, wrangling, modelling and visual storytelling — the full path from a messy CSV to a decision someone acts on.",
    focus:
      "Data science is a communication job with maths attached: the model matters, but the person who can explain it to a room is the one who gets hired.",
    cardBlurb:
      "Statistics, wrangling, modelling and visual storytelling — the full path from a messy CSV to a decision someone acts on.",
    highlights: ["Pandas & SQL", "Statistical modelling", "Power BI"],
    topics: [
      { t: "Programming Foundations", s: ["Python data structures and functions", "NumPy and Pandas", "SQL for querying business data"] },
      { t: "Statistics & Data Analysis", s: ["Measures of central tendency", "Probability and correlation", "Hypothesis testing"] },
      { t: "Data Cleaning & Preprocessing", s: ["Missing values and duplicates", "Outlier detection", "Turning raw data into usable data"] },
      { t: "Data Visualisation", s: ["Power BI and Tableau dashboards", "Matplotlib and Seaborn", "Turning numbers into a story"], d: "A business dashboard built from a real dataset that a non-technical team could act on." },
      { t: "Machine Learning", s: ["Supervised and unsupervised learning", "Regression, classification and clustering", "Training, testing and evaluating models"] },
      { t: "Deep Learning & Neural Networks", s: ["How neural networks are structured", "Image recognition and recommendations", "Deep learning frameworks"] },
      { t: "Generative AI & Modern Tools", s: ["ChatGPT for SQL generation", "AI-assisted content and analysis", "Automating repetitive analytical work"] },
      { t: "Real-World Projects & Portfolio", s: ["Data cleaning exercises", "Complete machine learning models", "Dashboards you can show a recruiter"] },
    ],
    tools: ["Python 3", "MySQL", "pandas", "NumPy", "scikit-learn", "Power BI", "Tableau", "Jupyter", "Google Colab", "ChatGPT"],
    roles: ["Data Analyst", "Business Analyst (Trainee)", "MIS Executive", "Reporting Analyst", "Junior Data Scientist"],
    projects: [
      { title: "Retail Sales Analysis", body: "A full analysis of a year of transactions ending in three recommendations with numbers behind them." },
      { title: "Power BI Executive Dashboard", body: "A refreshable model and report built for a non-technical audience." },
      { title: "Predictive Capstone", body: "A model trained, evaluated and presented with its limitations stated plainly." },
    ],
  },
  {
    slug: "machine-learning-deep-learning",
    title: "Machine Learning & Deep Learning",
    category: "AI & Data",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹52,000 – ₹75,000",
    tagline:
      "Classical ML first, neural networks second, with vision and language projects trained on hardware you have access to.",
    focus:
      "Deep learning is taught after classical models on purpose — knowing when a simpler model wins is the judgement that separates a practitioner from a tutorial follower.",
    cardBlurb:
      "Classical ML first, neural networks second, with vision and language projects trained on hardware you have access to.",
    highlights: ["Neural networks", "Vision & NLP", "Model deployment"],
    topics: [
      { t: "Core Machine Learning Concepts", s: ["ML against traditional programming", "Supervised, unsupervised, reinforcement", "Data preprocessing and feature engineering"] },
      { t: "Model Evaluation", s: ["Accuracy, precision and recall", "Train and test splits", "Choosing the right metric for the problem"] },
      { t: "Core Algorithms", s: ["Linear and logistic regression", "Decision trees and random forests", "SVM, KNN and k-means clustering"] },
      { t: "Artificial Neural Networks", s: ["How ANNs mimic learning", "Activation functions", "Backpropagation and optimisation"] },
      { t: "Convolutional Neural Networks", s: ["Image and video processing", "Layers and filters", "Building an image classifier"] },
      { t: "Recurrent Neural Networks", s: ["Sequential and time-series data", "Sequence modelling", "Where RNNs beat CNNs"] },
      { t: "Transfer Learning & NLP", s: ["Using pre-trained models", "Fine-tuning for a new problem", "Text-based AI applications"] },
      { t: "Deployment & Presentation", s: ["Model deployment basics", "Structured and unstructured datasets", "Presenting project work in an interview"] },
      { t: "Capstone Project", s: ["A predictive model", "An image recognition system", "Sentiment analysis with NLP"], d: "A capstone you take from dataset to trained model to a written explanation you can defend in a technical round." },
    ],
    tools: ["Python 3", "NumPy", "pandas", "scikit-learn", "TensorFlow", "Jupyter", "Google Colab", "Git"],
    roles: ["Junior ML Engineer", "Deep Learning Associate", "Computer Vision Trainee", "AI Research Assistant", "Data Scientist (Entry)"],
    projects: [
      { title: "Image Classifier with Transfer Learning", body: "A vision model fine-tuned on a small custom dataset, with augmentation and error analysis." },
      { title: "Text Classification Service", body: "A language model fine-tuned and served behind an API with measured latency." },
      { title: "Deployed Capstone Demo", body: "A trained model wrapped in an interface someone outside the class can use unaided." },
    ],
  },
  {
    slug: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    category: "Cyber & Cloud",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹48,000 – ₹72,000",
    tagline:
      "Offensive technique taught alongside the defensive job it exists to serve — inside an isolated lab, under written authorisation.",
    focus:
      "Every offensive technique in this course is taught with the fix beside it, and every exercise runs in an isolated lab against targets we own, because that is the only way this work is legal or employable.",
    cardBlurb:
      "Offensive technique taught alongside the defensive job it exists to serve, inside an isolated lab with written authorisation.",
    highlights: ["Recon & scanning", "Web app testing", "Report writing"],
    topics: [
      { t: "Networking & OS Fundamentals", s: ["Computer networks and IP addressing", "TCP/IP, DNS and HTTP/HTTPS", "Operating system fundamentals"] },
      { t: "Linux & Kali Linux", s: ["Command-line operations", "File systems and permissions", "Navigating Kali's security toolkit"] },
      { t: "Information Gathering & Reconnaissance", s: ["Footprinting techniques", "Mapping a target network", "The first phase of any real engagement"] },
      { t: "Network Scanning with Nmap", s: ["Network and port scanning", "Service enumeration", "Finding entry points"] },
      { t: "Vulnerability Assessment & Pen Testing", s: ["Identifying vulnerabilities", "Safe exploitation with Metasploit", "Documenting findings like a professional"], d: "A full penetration test report on a lab target — findings, evidence, severity and remediation." },
      { t: "Web Application Security", s: ["SQL injection and XSS", "Broken authentication", "Testing with Burp Suite"] },
      { t: "Network Traffic Analysis", s: ["Capturing traffic with Wireshark", "Detecting suspicious activity", "The core skill of a SOC role"] },
      { t: "Malware Analysis & Threat Detection", s: ["Malware types", "Behaviour analysis", "Detection techniques"] },
      { t: "Wireless Network Security", s: ["Wireless vulnerabilities", "Security protocols", "Wi-Fi and IoT exposure"] },
      { t: "Cryptography Basics", s: ["Encryption and hashing", "Secure communication protocols", "How weak crypto gets exploited"] },
      { t: "Incident Response & Best Practice", s: ["Detection, containment and recovery", "Red team and blue team perspectives", "Security policy in practice"] },
      { t: "Real-World Projects & Simulations", s: ["Live attack-and-defence scenarios", "Documented lab exercises", "A portfolio you can show an employer"] },
    ],
    tools: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Wireshark", "OWASP ZAP", "Ubuntu Linux", "VirtualBox"],
    roles: ["Security Analyst (Trainee)", "VAPT Associate", "SOC Analyst", "Application Security Trainee", "IT Security Executive"],
    projects: [
      { title: "Authorised Lab Assessment", body: "A scoped engagement against lab targets, from recon to a written remediation report." },
      { title: "Web Application Audit", body: "A deliberately vulnerable application tested, documented and then fixed by you." },
      { title: "Detection Rule Set", body: "Alerting built to catch the exact techniques you used earlier in the course." },
    ],
  },
  /* ------------------------------------------------------- graphics tracks */
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹22,000 – ₹36,000",
    tagline:
      "Type, layout, colour and print production, taught against real briefs with a critique session every week.",
    focus:
      "Design is a craft judged on output, so the course runs on briefs and critique from week two — software training alone produces operators, not designers.",
    cardBlurb:
      "Type, layout, colour and print production, taught against real briefs with a critique session every week.",
    highlights: ["Photoshop & Illustrator", "Print production", "Brand kits"],
    topics: [
      { t: "Design Principles", s: ["Hierarchy and balance", "Grids and alignment", "Whitespace as a tool"] },
      { t: "Typography", s: ["Type anatomy and pairing", "Spacing and rhythm", "Setting long copy"] },
      { t: "Colour & Composition", s: ["Colour systems", "Contrast and accessibility", "Building a palette"] },
      { t: "Photoshop for Designers", s: ["Non-destructive editing", "Masking and retouching", "Export discipline"] },
      { t: "Vector Work in Illustrator", s: ["Paths and shapes", "Logo construction", "Scalable assets"] },
      { t: "Layout & Print Production", s: ["Bleed, trim and safe area", "CMYK vs RGB", "Press-ready PDFs"], d: "A press-ready file pack that a local printer accepts without a single query." },
      { t: "Brand Identity Systems", s: ["Logo suites", "Usage rules", "Applying a system consistently"] },
      { t: "Portfolio & Client Work", s: ["Case study writing", "Presenting to a client", "Handling revisions"] },
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva", "CorelDRAW", "Adobe Bridge", "Pantone guides", "Google Fonts", "Behance"],
    roles: ["Graphic Designer", "Junior Visual Designer", "DTP Operator", "Brand Design Assistant", "Freelance Designer"],
    projects: [
      { title: "Full Brand Identity", body: "Logo, palette, type system and usage guide for a real Amritsar business, presented to the owner." },
      { title: "Print Campaign Set", body: "Poster, flyer and hoarding artwork produced to press specification and proofed." },
      { title: "Social Design System", body: "A reusable template kit that keeps a brand consistent across a month of posts." },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹18,000 – ₹30,000",
    tagline:
      "Cut, grade, mix and deliver — long form for YouTube and vertical edits for the feeds that actually pay in Punjab.",
    focus:
      "Editing is pacing and sound before it is effects, which is why the first month is spent on rhythm and audio rather than transitions.",
    cardBlurb:
      "Cut, grade, mix and deliver — long form for YouTube and vertical edits for the feeds that actually pay in Punjab.",
    highlights: ["Premiere Pro", "Colour & audio", "Short-form delivery"],
    topics: [
      { t: "Footage & Project Setup", s: ["Ingest and naming", "Sequence settings", "Proxy workflow"] },
      { t: "The Craft of the Cut", s: ["Pacing and rhythm", "Cutting on action", "Building a story from rushes"] },
      { t: "Audio That Carries a Video", s: ["Dialogue cleanup", "Music and ducking", "Loudness for platforms"] },
      { t: "Colour Correction & Grading", s: ["Scopes and exposure", "Matching shots", "Building a look"] },
      { t: "Motion Graphics Basics", s: ["Titles and lower thirds", "Keyframes and easing", "Simple animated logos"] },
      { t: "Short-Form Editing", s: ["Vertical framing", "Hook in three seconds", "Captions and subtitles"], d: "A set of three vertical edits cut from one long-form piece, each with burnt-in captions." },
      { t: "Delivery & Client Handover", s: ["Export presets", "Versioning and feedback rounds", "Archiving a project"] },
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Media Encoder", "CapCut", "Frame.io", "YouTube Studio"],
    roles: ["Video Editor", "Social Media Editor", "Post-Production Assistant", "Motion Graphics Trainee", "Freelance Editor"],
    projects: [
      { title: "Brand Story Film", body: "A two-minute film cut from provided rushes, graded, mixed and delivered to spec." },
      { title: "Short-Form Content Batch", body: "Ten vertical edits from one shoot, captioned and formatted for three platforms." },
      { title: "Event Highlights Reel", body: "A paced highlights edit with music sync, colour matching and a clean audio bed." },
    ],
  },
  {
    slug: "animation",
    title: "2D / 3D Animation",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹45,000 – ₹70,000",
    tagline:
      "Timing and weight first, software second. You finish with a reel, not a folder of half-rendered scenes.",
    focus:
      "Studios hire off a reel, and a reel is judged on movement rather than render quality — so the fundamentals of timing and weight come before any software feature.",
    cardBlurb:
      "Timing and weight first, software second. You finish with a reel, not a folder of half-rendered scenes.",
    highlights: ["After Effects", "Blender basics", "Showreel"],
    topics: [
      { t: "Principles of Animation", s: ["Timing and spacing", "Anticipation and follow-through", "Weight and arcs"] },
      { t: "Drawing & Storyboarding", s: ["Thumbnails", "Shot planning", "Animatics"] },
      { t: "2D Motion Graphics", s: ["Keyframes and graph editor", "Shape layers", "Kinetic typography"] },
      { t: "Character Rigging in 2D", s: ["Puppet tools", "Parenting and hierarchy", "Walk cycles"] },
      { t: "3D Modelling Basics", s: ["Polygon modelling", "UVs and materials", "Scene organisation"] },
      { t: "Lighting & Rendering", s: ["Three-point lighting", "Render settings", "Render passes"] },
      { t: "3D Animation & Camera", s: ["Keyframing in 3D", "Camera moves", "Physics and simulation basics"] },
      { t: "Sound, Edit & Reel", s: ["Sound design", "Editing a sequence", "Reel structure and order"], d: "A 60-second showreel ordered so the strongest six seconds play first." },
      { t: "Internship Capstone", s: ["Client brief", "Production schedule", "Final delivery"] },
    ],
    tools: ["After Effects", "Blender", "Adobe Animate", "Premiere Pro", "Photoshop", "Audition", "Krita", "Mixamo", "DaVinci Resolve"],
    roles: ["2D Animator", "Motion Graphics Designer", "3D Generalist (Junior)", "Explainer Video Artist", "Freelance Animator"],
    projects: [
      { title: "Animated Explainer", body: "A 60-second explainer from script and storyboard through to sound-designed final cut." },
      { title: "3D Product Turntable", body: "A modelled, textured and lit product render sequence built to client-approval standard." },
      { title: "Personal Showreel", body: "A cut reel of your best work, ordered and paced the way studios expect to receive it." },
    ],
  },
  {
    slug: "ui-ux-figma",
    title: "UI/UX Design with Figma",
    category: "Graphics & Media",
    stream: "graphics",
    badge: "Trending",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹26,000 – ₹42,000",
    tagline:
      "Research, flows, components and handoff — design a developer can build without asking you twenty questions.",
    focus:
      "UI/UX is judged on decisions, not screens: the portfolio that gets hired shows why a layout changed after testing, not just how it looks.",
    cardBlurb:
      "Research, flows, components and handoff — design that a developer can build without asking you twenty questions.",
    highlights: ["Figma systems", "Prototyping", "Usability tests"],
    topics: [
      { t: "UX Foundations", s: ["User needs and goals", "Problem framing", "Competitive teardown"] },
      { t: "Research & Interviews", s: ["Writing good questions", "Synthesis into insights", "Personas that are useful"] },
      { t: "Information Architecture", s: ["Card sorting", "Navigation structure", "User flows"] },
      { t: "Wireframing", s: ["Low-fidelity speed", "Layout options", "Reviewing before polishing"] },
      { t: "Visual UI Design", s: ["Spacing and type scales", "Colour and contrast", "States and empty screens"] },
      { t: "Design Systems in Figma", s: ["Components and variants", "Auto layout", "Tokens and libraries"] },
      { t: "Prototyping & Testing", s: ["Interactive prototypes", "Moderated usability tests", "Iterating on findings"], d: "A tested prototype with a written list of what changed after real users touched it." },
      { t: "Developer Handoff", s: ["Specs and redlines", "Naming that survives", "Working with a developer"] },
    ],
    tools: ["Figma", "FigJam", "Maze", "Notion", "Photoshop", "Illustrator", "Google Forms", "Loom", "Zeplin", "Framer"],
    roles: ["UI/UX Designer", "Product Design Trainee", "Interaction Designer", "Design System Assistant", "Freelance Product Designer"],
    projects: [
      { title: "App Redesign Case Study", body: "An existing app redesigned from research through to tested prototype, written up as a case study." },
      { title: "Design System Library", body: "A component library with variants, tokens and documentation another designer can pick up." },
      { title: "End-to-End Product Flow", body: "A complete signup-to-checkout flow, usability tested and revised twice." },
    ],
  },

  /* ------------------------------------------------ civil / mechanical CAD */
  {
    slug: "autocad",
    title: "AutoCAD",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "3 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹9,000 – ₹16,000",
    tagline:
      "2D drafting to drawing-office standard: layers, blocks, dimensioning and plot sets that print correctly the first time.",
    focus:
      "A drawing is a legal document on a site, so the course is as strict about layer discipline and title blocks as it is about the geometry itself.",
    cardBlurb:
      "2D drafting to drawing-office standard: layers, blocks, dimensioning and plot sets that print correctly the first time.",
    highlights: ["2D drafting", "Layouts & plotting", "Site drawings"],
    topics: [
      { t: "Getting Started with AutoCAD", s: ["Interface and workspace setup", "The command line", "Cartesian coordinate navigation"] },
      { t: "Core 2D Drafting Tools", s: ["Lines, polylines, circles, arcs", "Trim, extend, offset, mirror, array", "Object snaps and precision"] },
      { t: "Layers & Layer Management", s: ["Organised, professional drawings", "Line types and weights", "Drawing standards"] },
      { t: "Dimensioning & Annotation", s: ["Dimension styles", "Text styles and multiline text", "Hatching and pattern fills"] },
      { t: "Blocks & Block Editing", s: ["Reusable design elements", "Dynamic blocks", "Design Center and external references"] },
      { t: "Layouts, Plotting & Presentation", s: ["Plot settings and page setup", "Viewports and layout management", "Construction-ready plot sets"], d: "A construction-ready plot set at the correct scale, issued from paper space with a completed title block." },
      { t: "Introduction to 3D Modelling", s: ["3D solid modelling", "Working with extrusions", "3D views into 2D documents"] },
      { t: "Industry-Specific Applications", s: ["Civil: site plans and base maps", "Mechanical: parts and assembly detailing", "Architecture: floor plans and elevations"] },
      { t: "Templates & Productivity", s: ["Template creation", "Workflow shortcuts", "The speed a drawing office expects"] },
      { t: "Real Project Work", s: ["Floor plans and site layouts", "Structural drawings", "A portfolio-ready drawing set"] },
    ],
    tools: ["AutoCAD", "AutoCAD LT", "DWG TrueView", "eDrawings", "PDF plotting", "MS Excel", "Windows", "Plotter"],
    roles: ["CAD Draughtsman", "Junior Draughtsman", "Site Documentation Assistant", "Design Office Trainee", "Freelance Drafter"],
    projects: [
      { title: "Residential Floor Plan Set", body: "Plans, sections and elevations for a two-storey house, fully dimensioned and plotted to scale." },
      { title: "Mechanical Part Drawing", body: "An orthographic detail drawing with tolerances and a complete title block." },
      { title: "Site Layout Drawing", body: "A plot layout with levels, services and a revision history maintained across the course." },
    ],
  },
  {
    slug: "solidworks",
    title: "SolidWorks",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹16,000 – ₹28,000",
    tagline:
      "Parametric part and assembly modelling for mechanical work, finishing with a fully detailed assembly drawing set.",
    focus:
      "Parametric modelling is design intent made explicit — a model built badly works once and breaks the moment a dimension changes, so the course teaches sketch discipline first.",
    cardBlurb:
      "Parametric part and assembly modelling for mechanical work, finishing with a fully detailed assembly drawing set.",
    highlights: ["Part modelling", "Assemblies", "Drawing sheets"],
    topics: [
      { t: "Interface & Sketching Fundamentals", s: ["Toolbars, feature tree, navigation", "Geometric relations and constraints", "Dimensioning and sketch planes"] },
      { t: "Part Modelling", s: ["Extrude, revolve, sweep, loft", "Fillet, chamfer and shell", "Pattern tools"] },
      { t: "Assembly Design", s: ["Coincident, concentric and distance mates", "Sub-assemblies", "Interference detection"] },
      { t: "Engineering Drawings & Detailing", s: ["Orthographic and section views", "Dimensioning standards and tolerances", "Bills of Materials"], d: "A manufacturing-ready drawing set generated from your own 3D model, with a complete BOM." },
      { t: "Sheet Metal Design", s: ["Flanges, bends and hems", "Cuts and reliefs", "Accurate flat patterns for fabrication"] },
      { t: "Surfacing Techniques", s: ["Freeform and organic geometry", "Beyond standard solid modelling", "Consumer product shapes"] },
      { t: "Weldments", s: ["Structural frameworks", "Weld-based assemblies", "Cut lists for fabrication"] },
      { t: "Simulation & Motion Analysis", s: ["Basic stress analysis", "Motion studies", "How assemblies move and interact"] },
      { t: "Rendering & Visualisation", s: ["Materials and appearances", "Basic render settings", "Presenting models to a client"] },
      { t: "Industry Project Work", s: ["Mechanical components", "A full assembly", "A portfolio that shows design capability"] },
    ],
    tools: ["SolidWorks", "SolidWorks Drawings", "eDrawings", "AutoCAD", "MS Excel", "PDF", "Windows"],
    roles: ["Mechanical Design Trainee", "Product Design Assistant", "CAD Engineer (Junior)", "Tool Room Draughtsman", "R&D Assistant"],
    projects: [
      { title: "Parametric Component", body: "A part driven by a design table so a size change regenerates the whole model cleanly." },
      { title: "Multi-Part Assembly", body: "A working assembly with mates, motion check and interference detection." },
      { title: "Production Drawing Pack", body: "A drawing set with sections, tolerances and a bill of materials a workshop could quote from." },
    ],
  },
  {
    slug: "3ds-max",
    title: "3ds Max",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹24,000 – ₹38,000",
    tagline:
      "Architectural visualisation — model, light, texture and render interiors and exteriors clients approve from.",
    focus:
      "Visualisation sells a design before it is built, so the course is judged on whether a render reads as believable to a client, not on how many features you touched.",
    cardBlurb:
      "Architectural visualisation — model, light, texture and render interiors and exteriors clients approve from.",
    highlights: ["Modelling", "Lighting & materials", "Render output"],
    topics: [
      { t: "Fundamentals of 3D Modelling", s: ["Interface, navigation and viewports", "Primitives and splines", "Modifiers"] },
      { t: "Advanced Modelling Techniques", s: ["Polygon and edge modelling", "Mesh editing", "Furniture, staircases and architectural detail"] },
      { t: "Architectural & Interior Visualisation", s: ["Floor plans and interior spaces", "Exterior building models", "Converting 2D AutoCAD drawings into 3D"] },
      { t: "Texturing & Material Application", s: ["The Material Editor", "Wood, glass, fabric, metal and stone", "UVW mapping"] },
      { t: "Lighting Techniques", s: ["Daylight systems", "Standard and photometric lights", "Realistic interior and exterior setups"] },
      { t: "Camera Setup & Composition", s: ["Professional, well-composed shots", "Architectural walkthroughs", "Client-ready presentation angles"] },
      { t: "Rendering with V-Ray", s: ["Render settings", "Quality against speed", "Photorealistic final output"], d: "A photorealistic V-Ray render of your own interior or exterior scene, at portfolio quality." },
      { t: "Animation Basics", s: ["Keyframing", "Timeline controls", "Simple object animation"] },
      { t: "Real-World Project Practice", s: ["Interior scenes", "Architectural walkthroughs", "Product visualisation"] },
    ],
    tools: ["3ds Max", "V-Ray", "AutoCAD", "Photoshop", "Substance (overview)", "PDF", "Windows"],
    roles: ["3D Visualiser", "Architectural Rendering Artist", "Interior Visualisation Trainee", "Walkthrough Artist", "Freelance 3D Artist"],
    projects: [
      { title: "Interior Visualisation", body: "A living room modelled, furnished, lit and rendered from a supplied floor plan." },
      { title: "Exterior Elevation Render", body: "A daylight exterior with landscaping and believable materials, post-processed for presentation." },
      { title: "Walkthrough Animation", body: "A 30-second camera walkthrough rendered, cut and delivered with sound." },
    ],
  },
  {
    slug: "revit",
    title: "Revit",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹16,000 – ₹28,000",
    tagline:
      "BIM workflow end to end, from the structural model to schedules and coordinated construction documentation.",
    focus:
      "BIM replaces drawing with modelling: change the model and every plan, section and schedule updates — which is why offices that adopt it stop hiring pure drafters.",
    cardBlurb:
      "BIM workflow end to end, from the structural model to schedules and coordinated construction documentation.",
    highlights: ["BIM modelling", "Families", "Documentation"],
    topics: [
      { t: "Fundamentals of BIM", s: ["How BIM differs from 2D CAD", "Why construction moved to it", "One model across design, structure and MEP"] },
      { t: "Revit Interface & Project Workflow", s: ["Project browser and properties", "View controls", "New project to final documents"] },
      { t: "Levels, Grids & Reference Planes", s: ["Levels for multi-storey buildings", "Grids for structural layout", "The backbone of every project"] },
      { t: "Wall, Floor & Roof Modelling", s: ["Walls with structural layers", "Generating floors", "Flat, sloped and hip roofs"] },
      { t: "Doors, Windows & Families", s: ["Inserting and customising components", "The family system", "Creating basic custom families"] },
      { t: "Curtain Walls, Stairs & Ramps", s: ["Glazed curtain wall facades", "Staircase design and editing", "Ramps and vertical circulation"] },
      { t: "Dimensions, Constraints & Annotation", s: ["Dimensioning tools", "Parametric constraints", "Annotation for professional drawing sets"] },
      { t: "Schedules & Quantity Take-offs", s: ["Door and window schedules", "Material schedules", "Quantities straight from the model"] },
      { t: "Rendering & Visualisation", s: ["Revit's built-in rendering", "Basic walkthroughs", "Camera views for client presentation"] },
      { t: "MEP Coordination Basics", s: ["Mechanical, electrical and plumbing", "Coordinating with the architectural model", "What a BIM coordinator actually does"] },
      { t: "Construction Documentation & Sheet Sets", s: ["Plans, elevations, sections and details", "Sheet set assembly", "The format firms actually submit"], d: "A complete construction documentation set for a residential or commercial building, assembled to submission standard." },
      { t: "Autodesk Certification Preparation", s: ["Aligned to Certified Professional standards", "Practice under exam conditions", "Certification alongside your course certificate"] },
    ],
    tools: ["Revit", "AutoCAD", "Navisworks", "BIM 360", "eDrawings", "PDF", "Windows"],
    roles: ["BIM Modeller", "Revit Draughtsman", "Architectural Assistant", "BIM Coordinator (Trainee)", "Documentation Assistant"],
    projects: [
      { title: "Residential BIM Model", body: "A two-storey house modelled with architectural and structural elements coordinated in one file." },
      { title: "Custom Family Set", body: "Parametric families built to project standards and tested at several sizes." },
      { title: "Construction Document Set", body: "Plans, sections, elevations and schedules issued as a coordinated sheet set." },
    ],
  },
];

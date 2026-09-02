/**
 * Seed data for every slug under /internship-training/[slug].
 *
 * Same shape as `course-data.ts` and `after-12th-data.ts`, so these programmes
 * are fed through the same `buildCourse` builder and get the identical depth of
 * content as a /courses page. What differs is that a course is a *subject* and
 * these are *formats* — a duration and a delivery contract, inside which the
 * student picks their own discipline. The framing that carries that difference
 * lives in the extra fields below and is applied in `training.ts`.
 *
 * The slugs match the "Internship & Training" mega menu in `content.ts`
 * exactly, so every dropdown link resolves.
 *
 * Copy is placeholder marketing content. Swap the strings; no component needs
 * touching.
 */

import type { CourseSeed } from "./course-data";
import type { Course, CourseFaq, CourseReview } from "./courses";

/** Track ids double as the hub-page anchors on /internship-training. */
export type TrainingTrackId = "short-term" | "long-term" | "programmes";

export type TrainingSeed = CourseSeed & {
  track: TrainingTrackId;
  /** Short card copy on the hub grid — the tagline is the longer hero line. */
  cardBlurb: string;
  /** Three chips under the card copy. */
  highlights: string[];
  /** Indicative fee range, shown in the spec rail and the fee FAQ. */
  fee: string;
  /** Who the format is open to, shown in the spec rail. */
  eligibility: string;
  /**
   * What the format is formally accepted *as* — the reason a student picks a
   * duration rather than a subject. Shown in the spec rail.
   */
  credential: string;
  /**
   * How the duration is actually spent. A course page derives its stages from
   * the module list, but on a format page the calendar *is* the product, so
   * each span is stated outright rather than inferred.
   */
  plan: Array<{ span: string; title: string; body: string }>;

  /**
   * Per-programme copy overrides.
   *
   * Everything here is optional and everything left undefined falls back to the
   * shared generators in `training.ts`, which write for *any* format. A
   * programme sets these only once it has its own researched copy — currently
   * just 45 Days Training — so one page can be rewritten without disturbing the
   * other nine.
   */
  copy?: {
    /** Replaces the generated paragraphs under "What X actually involves". */
    overview?: string[];
    /** Replaces the generated tick list beside the overview. */
    checks?: string[];
    /** Replaces the generic "who walks in" personas. */
    audience?: Course["audience"];
    /** Lead paragraph and cards for the "why students choose us" section. */
    why?: {
      intro: string;
      reasons: Array<{ title: string; body: string }>;
    };
    /** Replaces the generated FAQ set wholesale. */
    faqs?: CourseFaq[];
    /**
     * Real reviews for this programme. Ratings, average and the star
     * distribution are all derived from these, so the rail cannot disagree
     * with the quotes under it.
     */
    reviews?: Array<Omit<CourseReview, "initials">>;
  };
};

export const trainingTrackMeta: Array<{
  id: TrainingTrackId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
}> = [
  {
    id: "short-term",
    index: "01",
    title: "Short Term",
    tagline: "Summer, winter and university-mandated batches",
    blurb:
      "The formats colleges ask for by name. Long enough to build one real thing properly, short enough to finish inside a vacation.",
  },
  {
    id: "long-term",
    index: "02",
    title: "Long Term",
    tagline: "Deeper tracks that finish with a live project",
    blurb:
      "Four to six months, which is where a single build becomes a body of work — two live briefs, a capstone, and time to be genuinely good at the toolchain.",
  },
  {
    id: "programmes",
    index: "03",
    title: "Programmes",
    tagline: "Industrial training and internship placements",
    blurb:
      "Documentation-led formats. You sit inside a delivery team, and you leave with the letter your university or your CV actually needs.",
  },
];

/** The shared toolchain every training format runs on, whatever the discipline. */
const CORE_TOOLCHAIN = [
  "Git",
  "VS Code",
  "Postman",
  "Notion",
  "Figma",
  "Google Sheets",
  "Canva",
  "Docker",
];

export const trainingSeeds: TrainingSeed[] = [
  /* ------------------------------------------------------------ short term */
  {
    slug: "45-days",
    title: "45 Days Training",
    category: "Internship & Training",
    track: "short-term",
    badge: "Trending",
    featured: true,
    duration: "45 days · 6 weeks",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹15,000",
    eligibility: "12th pass, graduates, final-year students and working professionals",
    credential: "Certificate + internship letter",
    tagline:
      "Forty-five days that turn a degree into a job-ready skillset — live projects, mentors who still do the work, and a portfolio recruiters actually stop on.",
    focus:
      "This is industrial training for students who want more than classroom theory. Forty-five days is long enough to build one real thing properly and too short to waste on slides, so you spend the first fortnight on fundamentals and the toolchain, then move onto a live client brief from our own delivery pipeline for the rest of it.",
    cardBlurb:
      "Two weeks of fundamentals, then four weeks on a live client brief with daily trainer review and a portfolio write-up at the end.",
    highlights: ["Live client brief", "Internship letter", "Weekday or weekend"],
    plan: [
      { span: "Weeks 1 – 2", title: "Foundations & toolchain", body: "Environment, editor and version control set up from nothing, then the fundamentals of your chosen discipline worked daily with a trainer looking at the output." },
      { span: "Weeks 3 – 4", title: "The live client brief", body: "A real requirement from the delivery pipeline. You scope it, build it in daily increments and act on review notes that arrive whether or not you agree with them." },
      { span: "Weeks 5 – 6", title: "Testing, portfolio & placement", body: "Test and harden what you built, write it up to portfolio standard, then a CV pass and a mock interview before the certificate and letter are issued." },
    ],
    topics: [
      { t: "Foundations & Toolchain Setup", s: ["Environment and editor setup", "Version control from day one", "Reading documentation properly"] },
      { t: "Core Concepts in Practice", s: ["Working the fundamentals", "Debugging your own output", "File and naming hygiene"] },
      { t: "Real Inputs, Real Constraints", s: ["Messy real-world inputs", "Industry file standards", "Building to a written spec"] },
      { t: "The Live Client Brief", s: ["Scoping the requirement", "Build, review, iterate", "Daily trainer sign-off"] },
      { t: "Testing & Iteration", s: ["Finding your own faults first", "Reviewing against the brief", "Handover documentation"], d: "A tested deliverable with its review history and handover notes attached." },
      { t: "Portfolio, CV & Interview Prep", s: ["Writing the project up", "Resume and LinkedIn pass", "Mock interview with feedback"], d: "A portfolio entry and a CV a hiring manager can read in ninety seconds." },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Trainee Executive", "Junior Developer", "Junior Analyst", "Freelance Consultant"],
    projects: [
      { title: "Fundamentals Build", body: "Your first working piece, applying weeks one and two end to end rather than as isolated exercises." },
      { title: "Real-World Data Challenge", body: "The same class of task again, this time against messy real inputs with the awkward edge cases left in." },
      { title: "Live Client Brief", body: "A genuine requirement pulled from the TechCadd delivery pipeline, scoped and built to a real deadline." },
      { title: "Portfolio Capstone", body: "A project you specify yourself, taken through to deployment and written up for your portfolio." },
    ],

    /* The only programme with fully written copy of its own; everything else
       still runs on the shared generators in `training.ts`. */
    copy: {
      overview: [
        "Designed for B.Tech, BCA, MCA, Diploma and IT/CS students, the programme covers the domains actually being hired for right now — Web Development, Python Programming, Data Science, AI & Machine Learning, Cyber Security, Digital Marketing, UI/UX Design and Cloud Computing. Whether you are from Amritsar, Ludhiana, Jalandhar or a town nearby, it fills the exact gap between what colleges teach and what companies expect.",
        "Batches stay small — typically 15 to 20 students — so you get personalised mentorship rather than a lost-in-the-crowd lecture. You work with real tools on real client-style projects, and the certificate at the end is one that carries weight in placements and interviews, all inside 45 days and without derailing your semester.",
      ],
      checks: [
        "12th pass, graduates, final-year students and working professionals — no entrance test",
        "No prior coding background needed on most tracks",
        "Batches of 15 – 20, so a trainer knows your name and your project",
        "Fits a semester break, summer vacation or gap between applications",
      ],

      audience: [
        {
          title: "B.Tech & BE students",
          tag: "Mandatory training, covered",
          body: "If your college requires industrial training or an internship certificate, these 45 days check that box — while actually teaching you the skills companies hire for, rather than producing paperwork to submit to your university. CSE, IT, ECE and allied branches all fit.",
        },
        {
          title: "BCA & MCA students",
          tag: "Complements your syllabus",
          body: "Structured specifically to sit alongside a BCA or MCA syllabus: hands-on coding, live projects and modern frameworks that the regular curriculum rarely covers in any depth. It is the most-asked-for combination we run.",
        },
        {
          title: "Diploma & polytechnic students",
          tag: "Bridges the gap",
          body: "If you have finished or are pursuing a diploma in computer science, IT or a related technical field, this bridges theoretical coursework and what industry actually expects — useful before applying for jobs or taking lateral entry into B.Tech.",
        },
        {
          title: "12th pass students",
          tag: "No coding background needed",
          body: "You do not have to wait until graduation to start building a career. Science or commerce, with no prior coding, this gives you a strong practical foundation in web development, digital marketing or Python before college even begins.",
        },
        {
          title: "Fresh graduates & job seekers",
          tag: "Proof for your CV",
          body: "Recruiters want proof of practical skill, not just a degree. Forty-five days adds real project experience, a certificate and portfolio-ready work samples to your CV — exactly what is missing for most freshers applying to IT and marketing roles.",
        },
        {
          title: "Working professionals",
          tag: "Fits around your job",
          body: "If you are working but want to pivot into IT, data or digital marketing, a short focused format fits your schedule far better than a multi-year course. You reskill without quitting, on evening or weekend batches.",
        },
      ],

      why: {
        intro:
          "A lot of short-term training hands out a certificate and calls it done. This programme is structured around what recruiters in Amritsar, Ludhiana and Chandigarh actually screen for — live project experience, tool proficiency and interview readiness. That is the difference between a certificate that sits in a folder and one that gets you shortlisted.",
        reasons: [
          {
            title: "Built for placement outcomes",
            body: "Every block is aimed at what a hiring panel checks: work you built, tools you can actually operate, and answers you have rehearsed. Attendance is not the product here.",
          },
          {
            title: "Live projects, not just theory",
            body: "Whichever track you pick, you are taught through real client-style briefs. You are not watching demos — you are building something you can open in an interview.",
          },
          {
            title: "Small batches, real mentorship",
            body: "Batches are kept to roughly 15 – 20 students, so a trainer can clear your doubts, review your code or your campaign individually, and guide you one-on-one.",
          },
          {
            title: "Trainers with industry experience",
            body: "You learn from people who have done the work, not from someone reading a syllabus — so the guidance reflects current tools, current hiring expectations and current project standards.",
          },
          {
            title: "Timed for a semester break",
            body: "Forty-five days is long enough to build genuine depth and short enough to fit a vacation or a gap between applications. Your academic year never goes on hold.",
          },
          {
            title: "ISO-certified and recognised",
            body: "TechCadd holds ISO 9001 certification and is a recognised PMKVY training partner — formal recognition that unregistered local coaching centres cannot offer students or parents weighing up the investment.",
          },
          {
            title: "Covers what your syllabus misses",
            body: "Most college curricula lag industry tooling by a few years. This fills that exact gap: current frameworks, in-demand languages, live-project workflows and the practical tools your degree has not caught up with.",
          },
          {
            title: "Career support past the certificate",
            body: "Resume building, mock interviews and placement assistance are part of the programme structure, not an add-on sold separately once the modules are over.",
          },
          {
            title: "A name Punjab employers know",
            body: "Established centres across Amritsar, Jalandhar, Mohali, Chandigarh and Hoshiarpur, with word-of-mouth trust through college placement cells — which is why local employers recognise the certificate.",
          },
        ],
      },

      faqs: [
        {
          q: "What is the duration of the 45 Days Training programme?",
          a: "It runs for exactly 45 days — roughly six weeks — covering foundational concepts, hands-on tool training and a live project in your chosen domain. The calendar is deliberately shaped to fit inside a semester break or a gap period.",
        },
        {
          q: "Who can join the 45 Days Training programme?",
          a: "B.Tech, BCA, MCA and Diploma students, 12th pass students, fresh graduates, job seekers and working professionals looking to upskill. No advanced prior technical background is required for most tracks.",
        },
        {
          q: "Which courses are available under the 45-day programme?",
          a: "Web Development, Python Programming, Data Science, Artificial Intelligence & Machine Learning, Cyber Security, Digital Marketing, UI/UX Design and Cloud Computing. You pick the track at counselling; the 45-day structure runs the same way whichever you choose.",
        },
        {
          q: "Is prior coding experience required to join?",
          a: "No. Tracks are structured to start from fundamentals and build to job-ready skills within the 45 days, which works even with zero prior coding background. Basic computer familiarity is enough to get started.",
        },
        {
          q: "Does the programme include live projects?",
          a: "Yes. Every track is built around real, client-style briefs rather than guided tutorials, so you finish with actual portfolio work to show a recruiter — a working website, a data model, a campaign report or a security audit, depending on your track.",
        },
        {
          q: "Will I get a certificate after completing the training?",
          a: "Yes, on successful completion. It is accepted by most colleges and universities as proof of mandatory industrial training, and it names the work you did rather than just the dates you attended.",
        },
        {
          q: "Is this suitable for college-mandated industrial training?",
          a: "Yes. The programme is designed to satisfy mandatory industrial training requirements for B.Tech, BCA, MCA and Diploma students, and the certificate is widely accepted by universities across Punjab. If your department has its own report format, tell us at the start and the documentation is produced that way.",
        },
        {
          q: "What is the batch size?",
          a: "Typically 15 to 20 students. That is small enough for personalised mentorship, individual doubt-clearing and close trainer attention right through the programme.",
        },
        {
          q: "Do you provide placement assistance after the training?",
          a: "Yes. Resume building, mock interviews and placement support are built into the programme to help you convert the training into a job or an internship. The placement cell keeps working with you after the batch ends rather than stopping on your last day.",
        },
        {
          q: "Can I choose my own project during the 45-day internship?",
          a: "You are encouraged to work on projects aligned with current industry demand, and your trainer helps you pick something impactful within your chosen domain. Freelancers and business owners can often bring their own requirement instead.",
        },
        {
          q: "Is this useful if I am travelling in from Ludhiana or Jalandhar?",
          a: "Many students do exactly that, usually on a senior’s recommendation. If the commute is the sticking point, every batch also runs live online in parallel, and the review loop — brief, deadline, trainer sign-off — is identical either way.",
        },
        {
          q: "How is TechCadd different from other institutes in Amritsar?",
          a: "ISO 9001 certified, a recognised PMKVY training partner, and an established presence across Amritsar, Jalandhar, Mohali, Chandigarh and Hoshiarpur — backed by industry-experienced trainers and a track record of student placements rather than advertising.",
        },
      ],

      reviews: [
        {
          name: "Simran Kaur",
          role: "BCA Student, Guru Nanak Dev University",
          rating: 5,
          meta: "Amritsar · Summer batch",
          quote:
            "I joined for my 45 days industrial training after my 5th semester, and honestly it was the best decision. The Web Development track was properly practical — I built a real project I could show in my campus placement interview. Trainers were always available to clear doubts.",
        },
        {
          name: "Harpreet Singh",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Ludhiana · Weekday batch",
          quote:
            "I travelled from Ludhiana specifically for this programme because my seniors recommended it. The Python and Data Science training was hands-on from day one, not theory on a whiteboard. Worth the daily commute.",
        },
        {
          name: "Manpreet Kaur",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Summer batch",
          quote:
            "My college needed a mandatory industrial training certificate, but I wanted actual skills too. This gave me both — a solid Machine Learning project for my resume and a certificate my college accepted without any issue.",
        },
        {
          name: "Arshdeep Singh",
          role: "Diploma (CSE)",
          rating: 4,
          meta: "Ludhiana · Morning batch",
          quote:
            "Batch size was small so the trainer actually knew what each of us was struggling with. The Cyber Security module went deeper than I expected for a 45-day course. Only wish the batch timings were a bit more flexible.",
        },
        {
          name: "Ramanpreet Kaur",
          role: "12th Pass Student",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "I had not done any coding before this. The Digital Marketing track started from absolute basics and by the end I was running real SEO and Google Ads tasks. A great starting point before college.",
        },
        {
          name: "Gurjot Singh",
          role: "B.Tech ECE Student",
          rating: 5,
          meta: "Ludhiana · Weekday batch",
          quote:
            "Came to Amritsar for the 45-day training after comparing a few institutes in Ludhiana. The live project approach and mentor support made the difference. Already using the React skills in my final year project.",
        },
        {
          name: "Jasleen Kaur",
          role: "Fresh Graduate",
          rating: 4,
          meta: "Amritsar · Evening batch",
          quote:
            "I graduated last year and was struggling to get interview calls. After the Data Analytics programme here, I finally have real project work to talk about in interviews. Placement support was helpful too.",
        },
        {
          name: "Karanveer Singh",
          role: "BCA Student",
          rating: 5,
          meta: "Ludhiana · Summer batch",
          quote:
            "A few of us from our BCA batch in Ludhiana came together for this training. The trainers have real industry background, which you can tell from how they explain things — not just textbook answers.",
        },
        {
          name: "Navjot Kaur",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "The UI/UX track exceeded my expectations. Learned Figma properly and built two real interface projects. The portfolio I built here directly helped me land a design internship.",
        },
        {
          name: "Rajveer Singh",
          role: "B.Tech IT Student",
          rating: 4,
          meta: "Chandigarh region · Weekend batch",
          quote:
            "Solid training overall — the Cloud Computing basics module was new territory for me and well explained. Would have liked a bit more time on advanced topics, but great for a 45-day format.",
        },
        {
          name: "Simarjit Kaur",
          role: "Working Professional",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "I work full-time but wanted to switch into digital marketing. The 45-day structure fit around my job, and the practical campaign work gave me the confidence to actually start freelancing on the side.",
        },
      ],
    },
  },
  {
    slug: "6-weeks",
    title: "6 Weeks Training",
    category: "Internship & Training",
    track: "short-term",
    badge: "Trending",
    duration: "6 weeks",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹15,000",
    eligibility: "Final-year students, graduates and 12th pass students",
    credential: "Certificate + internship letter",
    tagline:
      "The six-week slot most Punjab colleges mandate, run as a real project cycle rather than a certificate you collect at the end.",
    focus:
      "Most colleges write six weeks into the syllabus and leave students to find something to do with it. This is that slot used properly: a fortnight of tooling, then a brief with a deadline and a reviewer. Career-focused and mentor-led rather than theory-heavy, so you finish with a portfolio you can actually show an employer.",
    cardBlurb:
      "Built for the six-week industrial slot in a Punjab college syllabus — a real brief, a real reviewer and the letter your department asks for.",
    highlights: ["University accepted", "One live brief", "Letter on file"],
    plan: [
      { span: "Weeks 1 – 2", title: "Orientation & fundamentals", body: "Toolchain, Git and the review loop, then the core concepts compressed into a fortnight of worked examples and your first reviewed artefact." },
      { span: "Weeks 3 – 4", title: "Specified project build", body: "A brief handed over as a written spec, built against a daily trainer sign-off using the file and version conventions the job would expect." },
      { span: "Weeks 5 – 6", title: "Submission & documentation", body: "Testing before handover, then the report written in your department's format alongside a portfolio entry you can actually show a recruiter." },
    ],
    topics: [
      { t: "Orientation & Toolchain", s: ["Editor and environment", "Git and branching basics", "How the review loop works"] },
      { t: "Fundamentals at Speed", s: ["Core concepts, compressed", "Debugging your own assignments", "Your first reviewed artefact"] },
      { t: "Standards & Real Files", s: ["Industry conventions", "How teams plan, build and deliver", "Version discipline"] },
      { t: "Project Build", s: ["Scope and plan", "Build in daily increments", "Trainer review at each step"] },
      { t: "Submission & Documentation", s: ["Testing before handover", "Report writing and presentation", "Portfolio write-up"], d: "A submission pack in the format a university department expects, plus a portfolio entry." },
    ],
    /* One tool from each track this format opens onto, rather than the generic
       `CORE_TOOLCHAIN` — the rail is the quickest answer to "what will I
       actually touch", which is the question this page gets asked. */
    tools: ["VS Code", "Git", "Python 3", "Java 21", "pandas", "Power BI", "Google Ads", "AWS"],
    roles: ["Trainee Engineer", "Junior Developer", "Trainee Analyst", "Intern"],
    projects: [
      { title: "Toolchain Warm-Up", body: "A small end-to-end build in week two that proves the environment, the workflow and the review loop all work." },
      { title: "Specified Project Build", body: "A brief handed to you as a written spec, built in daily increments against a trainer sign-off." },
      { title: "College Submission Pack", body: "The project documented to the standard a Punjab university department accepts for industrial training credit." },
    ],

    copy: {
      overview: [
        "The programme is built for B.Tech, BCA, MCA and diploma students who have to complete mandatory industrial training and would rather come out of it with something. Instead of theory-heavy sessions, the six weeks run hands-on across web development, Python, Java, data science, machine learning, digital marketing, cloud computing and cyber security — you pick the track at counselling.",
        "What you get is a structured, mentor-led curriculum, project-based assignments and a recognised certificate that adds real weight to a resume rather than filling a line on it. For most students it is the foundation the first internship or placement conversation is built on.",
      ],
      checks: [
        "Final-year students, graduates and 12th pass students — no entrance test",
        "Eight tracks to choose from, picked at counselling",
        "Project-based from day one, not lecture-based",
        "Certificate accepted for university industrial training credit",
      ],

      audience: [
        {
          title: "B.Tech & B.E. students",
          tag: "Satisfies the requirement",
          body: "Most engineering curricula require a mandatory six-week industrial or summer training between semesters. This satisfies that while giving you resume-worthy skills in web development, Python, Java, data science or cloud — the subjects that stay purely theoretical in a college classroom. CSE, IT, ECE and allied branches all fit.",
        },
        {
          title: "BCA students",
          tag: "Bridges to real code",
          body: "BCA students need industrial exposure to strengthen their foundation before an MCA or the job market. Six weeks here bridges classroom concepts and real coding practice — programming languages, front-end and back-end work, and a live project you take from scope to handover.",
        },
        {
          title: "MCA students",
          tag: "Career accelerator",
          body: "With placements getting more competitive, MCA students use this for the specialised modules a standard postgraduate curriculum does not reach — full-stack development, data analytics or AI and machine learning, worked as projects rather than as chapters.",
        },
        {
          title: "Diploma & polytechnic students",
          tag: "Job-relevant fast",
          body: "If you hold a diploma in computer science, IT or a related engineering field, this six-week window builds practical, job-relevant skill that makes you competitive for entry-level roles — or for lateral entry into a degree programme.",
        },
        {
          title: "12th pass students",
          tag: "Test your interest early",
          body: "Not enrolled in a technical degree yet? That is fine. A lot of 12th pass students join to get a head start, test whether IT, digital marketing or web development actually interests them, and build a foundation before committing to a specialised degree or diploma.",
        },
        {
          title: "Fresh graduates & job seekers",
          tag: "Quick, practical upskilling",
          body: "If your degree is finished and the job hunt is not going anywhere, a short focused programme moves the needle. Recruiters value candidates who can demonstrate real project experience, and six weeks is enough to have some.",
        },
        {
          title: "Students who want it local",
          tag: "No metro commute",
          body: "Whether you are in Amritsar itself or coming in from Batala, Tarn Taran or further, this is a locally accessible option — you do not have to move to Chandigarh or another metro for training of this standard.",
        },
      ],

      why: {
        intro:
          "Choosing the right six-week programme genuinely shapes the next stage of your career, because this is usually the first thing on your CV that is not a marksheet. Here is what actually differs between one centre and the next.",
        reasons: [
          {
            title: "Bridges college and career",
            body: "Most curricula are heavy on theory and leave you underprepared for what industry expects. This closes that gap with the same tools, technologies and workflows real IT companies use today.",
          },
          {
            title: "Live, project-based from day one",
            body: "Instead of passive lectures you build: a website, a Python application, a dataset analysis, a marketing campaign. You leave with tangible work to show in an interview rather than notes and slides.",
          },
          {
            title: "Fulfils the academic requirement",
            body: "For B.Tech, BCA and MCA students most universities require a formal industrial training certificate. This meets that requirement and makes sure you learn something real in the process instead of just collecting it.",
          },
          {
            title: "Curriculum that keeps up",
            body: "Course content is updated to match actual demand — full stack, Python, data science, digital marketing, cloud and cyber security. Your six weeks go into skills employers are hiring for now, not a syllabus frozen years ago.",
          },
          {
            title: "Mentorship from working trainers",
            body: "Learning from people who have done the work rather than taught from a textbook changes what you get: practical insight, real problem-solving approaches, and honest career guidance rather than encouragement.",
          },
          {
            title: "Resume and interview confidence",
            body: "You come out with talking points, a portfolio of real work, and the ability to explain what you built and why. In the Amritsar and Ludhiana job markets, that increasingly counts for more than an academic score.",
          },
          {
            title: "A name known across Punjab",
            body: "Established centres in Amritsar, Jalandhar, Mohali, Hoshiarpur and Ludhiana mean we know the academic requirements, the university expectations and the hiring realities that Punjab students are actually dealing with.",
          },
          {
            title: "Local, without the metro cost",
            body: "Students often assume quality IT training means moving to Chandigarh or Mohali. Getting the same structure closer to home saves the travel, the hostel and the time — none of which improve the training.",
          },
          {
            title: "A foundation for what comes next",
            body: "Six weeks is short, but it is long enough to understand how real projects work and to find out which specialisation actually interests you. Most students use it as the step before an internship, freelance work or campus placement.",
          },
        ],
      },

      faqs: [
        {
          q: "What is the duration of the 6 Weeks Training programme?",
          a: "Exactly six weeks: a fortnight on the toolchain and fundamentals, then a specified project build, then testing and documentation. It is shaped to fit inside a typical college semester break.",
        },
        {
          q: "Who can join this programme?",
          a: "B.Tech, BCA, MCA and diploma students who need mandatory industrial training, plus 12th pass students exploring tech careers and fresh graduates looking to build practical skills. There is no entrance test.",
        },
        {
          q: "Which tracks are available?",
          a: "Web Development, Python Programming, Data Science, Machine Learning & AI, Java, Digital Marketing, Cloud Computing and Cyber Security. You pick one at counselling based on your interest or your career goal, and the six-week structure runs the same way whichever you choose.",
        },
        {
          q: "Do I need prior coding knowledge to join?",
          a: "No. Most tracks — Python and Web Development included — are structured for beginners and build gradually to more advanced, practical work. Anyone arriving with prior exposure moves through the early blocks faster and spends the time saved on the project.",
        },
        {
          q: "Does the programme include live projects, or is it theory-based?",
          a: "It is project-based. Every track is built around real, hands-on assignments and a project you scope, build and hand over, rather than lectures and slides. That project is what makes the certificate worth showing.",
        },
        {
          q: "What tools will I actually work with?",
          a: "It depends on the track: React.js and Node.js on web development; Python, Pandas and Jupyter on data and ML; Core Java on the Java track; Google Ads, GA4 and Search Console on digital marketing; AWS basics on cloud; Wireshark and Kali Linux on cyber security. Every track uses Git and GitHub.",
        },
        {
          q: "Will I get a certificate, and will my college accept it?",
          a: "Yes to both. Every student receives a certificate on successful completion, which can be submitted against college industrial training requirements and added to your resume. If your department has its own report format, tell us at the start and the documentation is produced that way.",
        },
        {
          q: "Is this useful for placements?",
          a: "It is built to be. Portfolio-ready skills and interview-relevant project experience are the things students actually use to strengthen placement and internship applications — no one guarantees a job, but this is what makes the conversation go better.",
        },
        {
          q: "Is this suitable for students coming from Ludhiana?",
          a: "Yes, and many do — the alternative is usually Chandigarh or Mohali for the same standard of training. Where the commute is the sticking point, every batch also runs live online, with the same brief, deadline and trainer sign-off.",
        },
        {
          q: "Can I choose which track I specialise in?",
          a: "Yes. You select the track at counselling based on your interest or career direction — web development, data science, digital marketing, cyber security or any of the others — and switch before the batch starts if you change your mind.",
        },
        {
          q: "How is this different from other six-week programmes in Amritsar?",
          a: "A trusted regional presence across Punjab, trainers who still work in the industry, live project work rather than recorded lectures, and placement support afterwards. The combination is what makes the six weeks practical rather than purely certificate-focused.",
        },
      ],

      reviews: [
        {
          name: "Simran Kaur",
          role: "BCA Student, Guru Nanak Dev University",
          rating: 5,
          meta: "Amritsar · Summer batch",
          quote:
            "I did my 6 weeks training in web development and honestly it was way more practical than I expected. We actually built a working website instead of just watching slides. My trainer explained everything step by step, even the doubts I had from college.",
        },
        {
          name: "Harpreet Singh",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "My college required 6 weeks industrial training, so I joined for Python. Best decision honestly. The projects we worked on actually matched what I later saw in my placement interview questions.",
        },
        {
          name: "Manpreet Kaur",
          role: "MCA Student",
          rating: 4,
          meta: "Amritsar · Morning batch",
          quote:
            "Good training overall, especially the data science module. The trainer had real industry experience which made a big difference. Only thing is the batch size could be slightly smaller for more one-on-one time.",
        },
        {
          name: "Arshdeep Singh",
          role: "Diploma CSE Student",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "I travel from Ludhiana for this training and it is totally worth it. The digital marketing sessions on Google Ads and SEO were really practical — I even started freelancing a little after completing it.",
        },
        {
          name: "Ravneet Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "I was looking for 6 weeks training near Ludhiana and found the Amritsar centre through a friend's recommendation. The Java classes were clear and the trainer made sure everyone was following along before moving ahead.",
        },
        {
          name: "Gurpreet Singh",
          role: "B.Tech IT Student",
          rating: 4,
          meta: "Amritsar · Weekday batch",
          quote:
            "Solid programme for anyone needing their mandatory 6 weeks industrial training. Learned React and got to build a mini project from scratch. Would have liked a few more sessions on deployment though.",
        },
        {
          name: "Jaspreet Kaur",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Evening batch",
          quote:
            "The AI/ML track really opened my eyes to how much is possible with Python. The trainer broke down complex topics in a very simple way — it did not feel overwhelming at all, even as a beginner.",
        },
        {
          name: "Karanveer Singh",
          role: "12th Pass Student",
          rating: 5,
          meta: "Amritsar · Summer batch",
          quote:
            "I was not sure which tech field to pick, so I joined the general web development track. Now I actually know what coding involves, and I have decided to pursue BCA next year because of this training.",
        },
        {
          name: "Amanpreet Kaur",
          role: "B.Tech Student",
          rating: 4,
          meta: "Ludhiana · Weekend batch",
          quote:
            "Commuted from Ludhiana a few times a week and it was manageable. Cyber security basics were taught well with real tools like Wireshark, which I had not touched before. Good hands-on exposure.",
        },
        {
          name: "Navjot Singh",
          role: "Fresh Graduate",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "After finishing my degree I felt I lacked practical skills. This six-week programme helped me build a proper portfolio in digital marketing, and I landed a junior role within two months of completing it.",
        },
        {
          name: "Ishpreet Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "The trainers actually answer your doubts patiently, even the basic ones. My full stack project from this training is still on my resume and interviewers always ask about it.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------- long term */
  {
    slug: "4-months",
    title: "4 Months Training",
    category: "Internship & Training",
    track: "long-term",
    duration: "4 months",
    level: "Beginner to job-ready",
    fee: "₹18,000 – ₹40,000",
    eligibility: "Graduates, final-year students and career changers",
    credential: "Certificate + internship letter",
    tagline:
      "Industry-driven, hands-on training for engineering and IT students who want real skill — two live briefs, a capstone, and the toolchain habits that survive a real job.",
    focus:
      "Four months is the first duration where you stop rehearsing and start working. One brief teaches you the process; the second is where you are expected to run it yourself, with the trainer reviewing rather than steering. It is built to bridge college theory and what employers actually expect, which is a different thing from a signed certificate.",
    cardBlurb:
      "Two live briefs instead of one, with the second run largely by you — plus a capstone and a placement-readiness block at the end.",
    highlights: ["Two live briefs", "Capstone project", "Placement prep"],
    plan: [
      { span: "Month 1", title: "Foundations & environment", body: "The toolchain from scratch and the fundamentals in depth — including the common failure modes, so you can review your own work before anyone else does." },
      { span: "Month 2", title: "First live brief", body: "A real requirement scoped with your trainer and delivered against a client-facing deadline, with a debrief on what you would do differently." },
      { span: "Month 3", title: "Second brief, run by you", body: "The same again, except you own the scope and the schedule. The trainer reviews rather than steers, which is the actual difference between training and working." },
      { span: "Month 4", title: "Capstone & placement prep", body: "Your own specification taken to deployment and documented, then CV and portfolio review, mock interviews and realistic role and salary expectations." },
    ],
    topics: [
      { t: "Foundations & Environment", s: ["Toolchain from scratch", "Version control properly", "Reading and writing docs"] },
      { t: "Core Discipline Skills", s: ["The fundamentals in depth", "Common failure modes", "Reviewing your own work"] },
      { t: "Working to Industry Standards", s: ["Conventions and structure", "Databases and API basics", "Handling real, imperfect inputs"] },
      { t: "First Live Brief", s: ["Guided scoping", "Build with daily review", "Handover and debrief"] },
      { t: "Second Live Brief", s: ["You scope it", "You run the schedule", "Trainer reviews, does not steer"] },
      { t: "Collaboration & Handover", s: ["Working against someone else's code", "Written handover", "Code and file review"] },
      { t: "Capstone Build", s: ["Your own specification", "Deployment or delivery", "Documented decisions"], d: "A deployed capstone with a written record of the decisions behind it." },
      { t: "Placement Readiness", s: ["CV and portfolio pass", "Mock interviews", "Presenting your project work"] },
    ],
    /* Its own stack rather than `CORE_TOOLCHAIN`: this is the one long-term
       format written around a development track, so the database and API tools
       belong in the rail and the generic office tools do not. */
    tools: ["VS Code", "Git", "MySQL", "MongoDB", "Postman", "Figma", "Docker", "Notion"],
    roles: ["Junior Developer", "Analyst", "Executive", "Freelance Consultant", "Trainee Engineer"],
    projects: [
      { title: "Guided Live Brief", body: "Your first real requirement, scoped with the trainer and built against a client-facing deadline." },
      { title: "Self-Run Live Brief", body: "The second brief, where you own the scope and the schedule and the trainer only reviews." },
      { title: "Inherited Codebase Task", body: "A change request on work someone else wrote — the task every junior actually gets in month one." },
      { title: "Portfolio Capstone", body: "A specification of your own, taken to deployment and documented well enough to walk an interviewer through." },
    ],

    copy: {
      overview: [
        "You work on live projects in web development, Python, data science, digital marketing and more, guided by trainers who know the Punjab job market — what firms in Amritsar, Ludhiana and Jalandhar are hiring for now, rather than what a national syllabus says they should be. Whether you are pursuing B.Tech, BCA, MCA or any technical degree, the structure is the same: fundamentals to a consistent baseline first, then applied project work.",
        "TechCadd is an ISO 9001-certified training company with centres across Amritsar, Jalandhar, Hoshiarpur, Ludhiana and Mohali, so the certificate you finish with carries formal institutional backing rather than being a self-printed completion letter — which matters when the same training is also being submitted against a mandatory college requirement.",
      ],
      checks: [
        "Graduates, final-year students and career changers — no prerequisite",
        "Mentor-led throughout: code reviews and same-day doubt resolution",
        "Flexible batch timings, workable for outstation students",
        "ISO 9001-certified certificate, accepted for mandatory training",
      ],

      audience: [
        {
          title: "B.Tech & B.E. students",
          tag: "Expected, not optional",
          body: "For CSE, IT and ECE students, industrial training is no longer optional — it is expected. This satisfies the academic requirement while giving you real coding, development and project experience, so you leave with a portfolio rather than paperwork. Students from GNDU, Khalsa College and affiliated institutes across the Majha region make up much of each intake.",
        },
        {
          title: "BCA & MCA students",
          tag: "Fills the practical gap",
          body: "BCA and MCA syllabi teach programming concepts without enough hands-on application. Four months of mentor-led work in real coding environments, on live projects with industry tools, is exactly the practical experience recruiters screen for when they are hiring freshers into developer or analyst roles.",
        },
        {
          title: "Diploma & polytechnic students",
          tag: "Closes the skill gap",
          body: "If you hold a diploma in computer science or IT and want to strengthen your technical foundation before entering the job market — or before a B.Tech lateral entry — this closes the distance between diploma-level theory and what industry actually expects on day one.",
        },
        {
          title: "Fresh graduates & job seekers",
          tag: "Proof of applied skill",
          body: "A resume carrying only a degree is rarely enough now; employers want proof of applied skill. Four focused months adds in-demand technical skills, real project work and a completion certificate that means something to the person reading your CV.",
        },
        {
          title: "Career switchers & professionals",
          tag: "No tech background needed",
          body: "Not everyone arrives from a technical background, and that is fine. If you are in a non-tech role and want to move into IT, web development or data, the track is approachable for a beginner while still rigorous enough to build genuine competency rather than familiarity.",
        },
        {
          title: "Students travelling in from nearby cities",
          tag: "Flexible timings",
          body: "The centre is in Amritsar, but a steady share of every batch travels from Ludhiana, Jalandhar and Hoshiarpur for the curriculum, the mentorship and the placement support. Flexible batch timings and a live online option make the trip manageable alongside a college schedule.",
        },
      ],

      why: {
        intro:
          "Where you complete your industrial training should not be a checkbox decision. It shapes your resume, your confidence in an interview and often your first offer — so it is worth knowing what actually differs between one centre and the next.",
        reasons: [
          {
            title: "Real projects, not theory repeated",
            body: "Most college curricula are heavy on theory and light on application. This inverts that ratio: live, real-world briefs rather than simulated exercises, so you finish with deliverables to show rather than a grade on a transcript.",
          },
          {
            title: "Built around what employers want",
            body: "The curriculum is shaped by current demand — the tools, languages and frameworks companies in Amritsar, Ludhiana and Chandigarh are actively hiring for. Your four months go into skills that translate into employability, not outdated syllabus content.",
          },
          {
            title: "Mandatory training, made meaningful",
            body: "If your college requires a training certificate you have a choice: treat it as a formality, or use it as genuine skill-building. This is built for the second — it satisfies the requirement and strengthens your technical profile at the same time.",
          },
          {
            title: "Mentor-led, not self-paced guesswork",
            body: "Learning to code alone from videos and PDFs is slow and frustrating. Here you get real-time doubt resolution, code reviews and structured feedback — the support that shortens the learning curve rather than leaving you to find your own way.",
          },
          {
            title: "Certification that carries weight",
            body: "TechCadd is an ISO 9001-certified training company approved by the Ministry of Corporate Affairs. To an employer or an academic evaluator, that is recognised institutional backing rather than another self-printed completion letter.",
          },
          {
            title: "Centres across Punjab, not one city",
            body: "Training centres in Amritsar, Jalandhar, Hoshiarpur, Ludhiana and Mohali mean the curriculum is shaped by demand across several job markets rather than one narrow local economy — and employers across the region know the name.",
          },
          {
            title: "Trainers who know the local market",
            body: "Not a generic national curriculum taught at a distance. Your trainers know what recruiters in Amritsar, Ludhiana and Jalandhar are hiring for right now, so the skills you build map onto openings you can actually apply to.",
          },
          {
            title: "Workable for outstation students",
            body: "Batch timings are set so students commuting from Ludhiana, Jalandhar or Hoshiarpur can realistically attend without disrupting a college schedule, and every batch runs live online in parallel.",
          },
          {
            title: "A head start on placement talk",
            body: "Recruiters hiring freshers consistently favour candidates who can speak confidently about real project work. Four months of it gives you concrete talking points instead of a vague answer about what you covered in college.",
          },
        ],
      },

      faqs: [
        {
          q: "What is the duration of the 4 Months Training programme?",
          a: "Four months, structured as one month of foundations, two live briefs across months two and three, and a capstone with placement preparation in month four. If your college mandates six months instead, the 6 Months Training format runs the same way over a longer calendar.",
        },
        {
          q: "Who is eligible to join?",
          a: "B.Tech and B.E., BCA, MCA, diploma and polytechnic students, fresh graduates, and working professionals looking to upskill or switch into a tech career. There is no strict prerequisite and no entrance test — beginners are welcome.",
        },
        {
          q: "Is this only for computer science students?",
          a: "No. CSE and IT students are the majority, but students from ECE, mechanical and other technical backgrounds join every intake to build practical tech skills. The first month exists precisely so that everyone reaches a consistent baseline before the specialised work starts.",
        },
        {
          q: "What subjects and tools are covered?",
          a: "Depending on the track you choose: web development (HTML, CSS, JavaScript, React, Node.js), Python programming, data science fundamentals with Pandas and NumPy, mobile app development basics, Git and GitHub, database work in MySQL or MongoDB, and digital marketing fundamentals.",
        },
        {
          q: "Does the programme include live projects, or is it theory-based?",
          a: "It is heavily project-focused. You deliver two live briefs and a capstone, so you finish with a complete, functioning project built start to finish — the centrepiece of your resume and the thing an interviewer will actually ask about.",
        },
        {
          q: "Will this fulfil my college's mandatory industrial training requirement?",
          a: "Yes. The programme is structured to satisfy standard mandatory training requirements for B.Tech, BCA and MCA students, while giving you genuine hands-on project experience beyond a signed certificate. If your department has its own report format, tell us at the start and the documentation is produced that way.",
        },
        {
          q: "Is the certificate recognised?",
          a: "Yes. TechCadd is an ISO 9001-certified training company, so the certificate carries formal, government-linked recognition. The internship letter alongside it names the projects, the duration and the supervising reviewer.",
        },
        {
          q: "Can working professionals or career switchers join?",
          a: "Yes. The programme is approachable for a beginner while still building real technical competency, which is what makes it workable for someone moving into IT or a tech-adjacent role from somewhere else. Evening and weekend batches exist for exactly this.",
        },
        {
          q: "Is this suitable if I am travelling from Ludhiana?",
          a: "Many students do. TechCadd has a presence across Mohali, Ludhiana, Jalandhar and Hoshiarpur, and students regularly travel to the Amritsar centre for the training and the certification. Where the commute is the sticking point, the same batch runs live online.",
        },
        {
          q: "What is the class format — classroom, online or hybrid?",
          a: "All three. Batch timings are flexible enough to accommodate local students and outstation students commuting from cities like Ludhiana, and the review loop — brief, deadline, trainer sign-off — is identical whichever way you attend.",
        },
        {
          q: "How is TechCadd different from other institutes in Amritsar or Ludhiana?",
          a: "Centres across Punjab rather than a single city, ISO 9001 certification, a PMKVY partnership, a curriculum shaped by current hiring demand, and mentor-led rather than self-paced delivery. The combination is credibility plus genuinely practical skill-building, which is harder to find than either alone.",
        },
        {
          q: "Does completing this help with placements?",
          a: "There is no job guarantee, and nobody honestly offers one. What it does is strengthen your profile with real project experience, resume support and interview preparation — which is what actually moves the needle in a placement drive.",
        },
      ],

      reviews: [
        {
          name: "Simranjeet Kaur",
          role: "B.Tech CSE, GNDU",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I did my industrial training at TechCadd right after my 5th semester, and honestly it was the best decision. My college wanted a proper certificate for mandatory training, but I also wanted to actually learn something. The web development track gave me real project experience — I built a full working website by the end, not just some sample code.",
        },
        {
          name: "Harpreet Singh",
          role: "BCA Student",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "I was travelling from Ludhiana every week for the batches, and it was worth it. The trainers actually explain things instead of rushing through slides. My Python and Data Science sessions helped me understand things my college professors never made clear.",
        },
        {
          name: "Ravneet Kaur",
          role: "MCA, Guru Nanak Dev University",
          rating: 4,
          meta: "Amritsar · Morning batch",
          quote:
            "Good structured programme. I did the 4 months industrial training batch and it fit well around my semester schedule. Only thing I would say is the batch size could be slightly smaller for more one-on-one doubt clearing, but overall the content quality was solid.",
        },
        {
          name: "Gurpreet Singh",
          role: "B.Tech Student",
          rating: 5,
          meta: "Ludhiana · Weekday batch",
          quote:
            "I searched a lot for industrial training options near Ludhiana before choosing the Amritsar centre. Glad I made the trip. The live project work is what really stood out — most other places just give you recorded videos.",
        },
        {
          name: "Amanpreet Kaur",
          role: "Diploma CS",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "As a diploma student I always felt behind compared to B.Tech students when it came to practical skills. This training completely changed that. I now feel confident talking about actual projects in interviews instead of just my diploma marks.",
        },
        {
          name: "Jaspreet Singh",
          role: "B.Tech ECE",
          rating: 4,
          meta: "Amritsar · Evening batch",
          quote:
            "Solid training overall. I came from an ECE background so web development was new territory for me, but the trainers were patient and broke things down well. The certificate is recognised too, which mattered for my college submission.",
        },
        {
          name: "Navjot Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Chandigarh · Weekend batch",
          quote:
            "I travelled from Chandigarh for the weekend sessions and it was manageable. What I liked most was that the curriculum felt current — not outdated content copied from five years ago. My final project actually impressed my placement interviewers.",
        },
        {
          name: "Karanveer Singh",
          role: "Fresh Graduate",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I had already graduated and was struggling to get interview calls with just my degree. Did the 4 months programme here and added real project work to my resume. Started getting responses within weeks of updating my profile.",
        },
        {
          name: "Simran Bhatia",
          role: "MCA Student",
          rating: 4,
          meta: "Amritsar · Evening batch",
          quote:
            "Good mentorship throughout. The PMKVY-linked certification gave the training extra credibility when I mentioned it during interviews. Would recommend for anyone serious about actually learning, not just getting a certificate.",
        },
        {
          name: "Manpreet Singh",
          role: "B.Tech IT",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "Compared other options in Ludhiana before deciding, but the reputation and multi-city presence gave me more confidence. The Git and GitHub training alone was worth it — my college never taught version control properly.",
        },
      ],
    },
  },
  {
    slug: "6-months",
    title: "6 Months Training",
    category: "Internship & Training",
    track: "long-term",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    fee: "₹18,000 – ₹40,000",
    eligibility:
      "Final-year students, graduates, 12th pass students and working professionals",
    credential: "Certificate + internship letter",
    tagline:
      "The full route: a discipline learned properly, three live briefs, and the last six weeks spent inside a delivery team rather than a classroom.",
    focus:
      "Six months is what it actually takes to be hireable without an asterisk. The first half builds the discipline; the second puts you on real delivery work with an internship letter to show for it. It is the semester-long slot most Punjab engineering colleges require, used as industry exposure rather than as classroom theory stretched over a longer calendar.",
    cardBlurb:
      "Three live briefs, a capstone and a final internship block inside a delivery team — the longest and most complete training format we run.",
    highlights: ["Internship block", "Three live briefs", "Placement drives"],
    plan: [
      { span: "Months 1 – 2", title: "Discipline foundations", body: "Toolchain, conventions and the fundamentals in depth, plus the habits — self-review, documentation, version discipline — that decide whether you are employable." },
      { span: "Month 3", title: "First live brief", body: "Guided scoping on a real requirement, built in daily increments with a debrief and rework cycle at the end of it." },
      { span: "Month 4", title: "Second brief & team work", body: "You scope and schedule this one, then take a change request on someone else's code — the task every junior actually gets in their first month." },
      { span: "Month 5", title: "Internship block", body: "Placed on live delivery work with real deadlines and real stakeholders. The internship letter is drafted from what you did here, not from your attendance." },
      { span: "Month 6", title: "Capstone & placement cycle", body: "A capstone on your own specification, then portfolio review, mock interview rounds and drives with hiring partners that continue after the batch ends." },
    ],
    topics: [
      { t: "Foundations & Toolchain", s: ["Environment and editor", "Git, branches and reviews", "Documentation habits"] },
      { t: "Core Discipline Skills", s: ["Fundamentals in depth", "Debugging under pressure", "Self-review before submission"] },
      { t: "Industry Standards & Structure", s: ["Conventions that scale", "Imperfect real inputs", "Task estimation"] },
      { t: "First Live Brief", s: ["Guided scoping", "Daily increments", "Debrief and rework"] },
      { t: "Second Live Brief", s: ["Independent scoping", "Owning the schedule", "Review, not supervision"] },
      { t: "Working in a Team", s: ["Someone else's code", "Handover documents", "Review etiquette"] },
      { t: "Capstone Build", s: ["Own specification", "Deployment and delivery", "Decision log"] },
      { t: "Internship Block", s: ["Placed on live delivery", "Real deadlines and stakeholders", "Documented internship letter"], d: "A signed internship letter describing the delivery work you actually did." },
      { t: "Placement & Interview Cycle", s: ["Portfolio and CV review", "Mock interview rounds", "Hiring partner drives"] },
    ],
    /* The five tracks this format opens onto, one anchor tool each, rather
       than the generic `CORE_TOOLCHAIN`. */
    tools: ["VS Code", "Git", "MongoDB", "Python 3", "pandas", "Jupyter", "TensorFlow", "Google Ads"],
    roles: ["Junior Developer", "Analyst", "Executive", "Trainee Engineer", "Freelance Consultant"],
    projects: [
      { title: "Guided Live Brief", body: "The first real requirement, scoped with a trainer and delivered against a client deadline." },
      { title: "Self-Run Live Brief", body: "A second brief you scope, schedule and deliver yourself, reviewed rather than supervised." },
      { title: "Team Delivery Task", body: "Work inside an existing codebase and an existing team, with a written handover at the end." },
      { title: "Portfolio Capstone", body: "Your own specification taken to deployment, documented well enough to defend in an interview." },
    ],

    copy: {
      overview: [
        "The programme is built for B.Tech, BCA, MCA, M.Sc(IT) and other technical students who need genuine industry exposure rather than more classroom theory. The tracks are the ones being hired for — Full Stack Development, Python, Data Science, AI, Digital Marketing and Cyber Security — taught through live projects, real case studies and mentorship from trainers who still work in the field.",
        "Batches stay small, the curriculum is ISO-certified, and placement support runs alongside the training rather than after it. The point is that you finish holding a portfolio, the confidence to talk through it, and interview-ready skills — the certificate is the least interesting thing in that list.",
      ],
      checks: [
        "No advanced technical background needed on most tracks",
        "Basic computer literacy helps but is not mandatory",
        "Small batches, so your work is reviewed individually",
        "Documentation and project reports for college submission included",
      ],

      audience: [
        {
          title: "B.Tech & B.E. students",
          tag: "The semester slot",
          body: "For CSE, IT, ECE and allied branches, this is the most valuable time to do it. Most engineering colleges across Punjab require or strongly recommend a semester-long industrial training, and this satisfies that while giving you resume-worthy project experience in full stack, Python, AI or data science.",
        },
        {
          title: "BCA & MCA students",
          tag: "Closes the fresher gap",
          body: "Computer applications students consistently hit the gap between what is taught and what companies expect from a fresher. Six months of structured, practical exposure to coding, databases, live projects and modern tooling is precisely what gets screened for in a technical interview.",
        },
        {
          title: "M.Sc(IT), B.Sc(IT), BBA & MBA students",
          tag: "Adds the practical half",
          body: "If your degree is theory-heavy, this adds the industry-facing skill set that makes a resume competitive — digital marketing, data analytics or business intelligence, learned as work rather than as coursework.",
        },
        {
          title: "12th pass students",
          tag: "Explore before committing",
          body: "Not in college yet? Plenty of students join to explore IT, design or digital marketing early and build a foundation before committing to a degree stream. Six months is long enough to know whether the field actually suits you.",
        },
        {
          title: "Fresh graduates & job seekers",
          tag: "Solves the experience gap",
          body: "If interviews are not happening because your resume has no practical experience, this addresses that directly. A completed six-month training backed by real project work and a documented internship letter is one of the strongest additions you can make to a fresher CV.",
        },
        {
          title: "Working professionals",
          tag: "Upskill without resigning",
          body: "Professionals pivoting into IT, digital marketing or data-driven roles make up a steady share of every intake. Flexible batch timings mean you can do it without pausing your current job, and the project work is scheduled around the batch you pick.",
        },
      ],

      why: {
        intro:
          "Hundreds of institutes across Punjab claim to offer industrial training, and the brochures are hard to tell apart. Here is what actually makes six months here different from six months elsewhere.",
        reasons: [
          {
            title: "Real projects, not recorded lectures",
            body: "Too many industrial training programmes are repackaged online courses. This centres on live, real-world work — an application, a dashboard, a campaign — so you leave with a portfolio you can walk someone through, not a certificate you cannot explain.",
          },
          {
            title: "Built around what companies hire for",
            body: "The curriculum is updated to match current demand: full stack MERN and MEAN, Python, data science, AI, cyber security and digital marketing — the same skills firms in Amritsar, Ludhiana and Chandigarh are actively recruiting for.",
          },
          {
            title: "Solves the no-experience catch",
            body: "Companies want experience and you cannot get experience without a job. Six months of real project work, practical problem-solving and a documented internship block breaks that cycle, and gives you actual examples to answer interview questions with.",
          },
          {
            title: "Small batches, real mentorship",
            body: "Batch sizes are kept deliberately manageable, so a trainer can track your progress, review your code or your campaign individually and correct a mistake while it is still small. On a hands-on programme that feedback is what decides how job-ready you get.",
          },
          {
            title: "College requirements, handled",
            body: "If your B.Tech, BCA or MCA programme mandates a six-month certificate, the process is straightforward: structured curriculum, proper documentation, project reports, and a certificate your college and your employer accept without a query.",
          },
          {
            title: "ISO 9001 certified and recognised",
            body: "TechCadd is an ISO 9001 certified training company approved under the Ministry of Corporate Affairs. For a student or a parent weighing up credibility, that is recognised value both for college submission and for employer verification.",
          },
          {
            title: "Tested across Punjab, not one city",
            body: "Established centres in Amritsar, Jalandhar, Hoshiarpur and Mohali have trained thousands of students from B.Tech, BCA, MCA and M.Sc(IT) backgrounds — so the curriculum has been refined against diverse intakes rather than written for a single batch.",
          },
          {
            title: "Trainers who have shipped work",
            body: "Learning from someone who has only taught, versus someone who has actually built and shipped real projects, is a measurable difference. Your doubts get resolved with practical context rather than a textbook explanation.",
          },
          {
            title: "Career support past the certificate",
            body: "Resume building, mock interviews and connections into hiring networks are part of the programme. The goal is training that converts into an offer, not a completed programme that sits in a folder.",
          },
        ],
      },

      faqs: [
        {
          q: "What is the duration of the 6 Months Training programme?",
          a: "Six months. Two months of discipline foundations, two live briefs and team work across months three and four, a month placed on live delivery, then a capstone and the placement cycle in month six — with documentation support throughout.",
        },
        {
          q: "Who is eligible for the programme?",
          a: "B.Tech and B.E. students (CSE, IT, ECE), BCA, MCA, M.Sc(IT), B.Sc(IT), BBA and MBA students, 12th pass students, fresh graduates, and working professionals looking to upskill. There is no entrance test.",
        },
        {
          q: "Is prior coding or technical knowledge required?",
          a: "No. Basic computer literacy helps, but most tracks are designed to take a beginner from foundational concepts to job-ready skills across the six months. A genuine interest in doing the work matters more than which degree you hold.",
        },
        {
          q: "Which tracks are available?",
          a: "Full Stack Web Development, Python & Data Science, Artificial Intelligence, Digital Marketing and Cyber Security. Each includes live projects and practical tool training, and you choose at counselling rather than being assigned one.",
        },
        {
          q: "What tools will I actually work with?",
          a: "It depends on the track: React.js, Node.js, Express and MongoDB or MySQL on full stack; Pandas, NumPy, Matplotlib, Scikit-learn and Jupyter on data science; TensorFlow and Keras on AI; Google Ads, GA4 and Search Console on digital marketing; network security and vulnerability assessment tools on cyber security. Every track uses Git and GitHub.",
        },
        {
          q: "Will this fulfil my college's industrial training requirement?",
          a: "Yes. You get proper documentation, project reports and a recognised training certificate accepted by most B.Tech, BCA and MCA colleges across Punjab. If your department has its own report format, tell us at the start and the paperwork is produced that way.",
        },
        {
          q: "Is the certificate recognised?",
          a: "Yes. TechCadd is an ISO 9001 certified training company approved under the Ministry of Corporate Affairs, so the certificate carries formal recognition. The internship letter alongside it names the delivery work you did, the duration and the supervising reviewer.",
        },
        {
          q: "What is the batch size?",
          a: "Deliberately small. The programme depends on a trainer reviewing your work individually and clearing doubts one to one, and that stops being possible past a certain number of people in a room.",
        },
        {
          q: "Does the programme include placement assistance?",
          a: "Yes — resume building, mock interview rounds and connections into hiring networks, running through month six and continuing after your batch ends. There is no job guarantee, and anyone offering you one before seeing your work is guessing.",
        },
        {
          q: "Can working professionals join?",
          a: "Yes. Timings are flexible enough to accommodate a job or an academic commitment, and weekend batches run in parallel with the weekday ones. The delivery work in month five is scheduled around the batch you pick.",
        },
        {
          q: "Is this suitable for students coming from Ludhiana?",
          a: "Many students do exactly that, either on weekend batches or by relocating for the duration. The certification and curriculum are the same standard across every TechCadd centre, and the batch also runs live online if the commute is the sticking point.",
        },
        {
          q: "How do I enrol?",
          a: "Visit the Amritsar centre, fill in the enquiry form on this page, or request a callback for counselling on which track fits. Nothing is confirmed until you have chosen a track and a batch, and instalment plans are agreed in writing before you enrol.",
        },
      ],

      reviews: [
        {
          name: "Simranjeet Kaur",
          role: "B.Tech CSE, Guru Nanak Dev University",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I did my 6 months industrial training during my 6th semester and honestly it was way better than I expected. We worked on a real MERN stack project, not just PPTs. My trainer explained every doubt patiently, and my college accepted the certificate without any issue.",
        },
        {
          name: "Harpreet Singh",
          role: "BCA, Khalsa College",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I was confused between a Ludhiana institute and the Amritsar centre for my industrial training. Went with TechCadd and do not regret it — small batch, proper mentorship, and I actually built a working project by the end.",
        },
        {
          name: "Ravneet Kaur",
          role: "MCA, Punjab Technical University",
          rating: 4,
          meta: "Amritsar · Morning batch",
          quote:
            "Good structured programme. The Python and Data Science modules were solid, especially the live dataset project. Would have liked slightly more sessions on interview prep, but overall a strong six months.",
        },
        {
          name: "Gurpreet Singh",
          role: "B.Tech IT Student",
          rating: 5,
          meta: "Ludhiana · Weekend batch",
          quote:
            "I travel from Ludhiana for weekend batches. Worth the commute honestly. The trainers have real industry experience and it shows in how they explain concepts — not just textbook stuff.",
        },
        {
          name: "Manpreet Kaur",
          role: "B.Sc(IT) Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "My six months here gave me my first real project for my resume. I got shortlisted for two interviews right after finishing, because I could actually talk about what I had built.",
        },
        {
          name: "Jaspreet Singh",
          role: "BCA, DAV College",
          rating: 4,
          meta: "Amritsar · Evening batch",
          quote:
            "The Digital Marketing track was practical — we ran an actual campaign, not theory slides. The SEO and GA4 sessions were genuinely useful. I recommend it to anyone confused about which track to pick.",
        },
        {
          name: "Amandeep Kaur",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Chandigarh region · Weekend batch",
          quote:
            "I compared a few institutes in Chandigarh and Amritsar before joining. The ISO certification and PMKVY partnership gave me confidence it was not some random institute, and the training quality matched that.",
        },
        {
          name: "Karanveer Singh",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "Best decision for my 6th semester industrial training. Full Stack track, live project, proper documentation for my college submission — everything sorted without stress.",
        },
        {
          name: "Navjot Kaur",
          role: "B.Tech ECE Student",
          rating: 4,
          meta: "Ludhiana · Weekend batch",
          quote:
            "Came from Ludhiana specifically for this programme after friends recommended it. The AI track was challenging but the trainers broke it down well. The batch was small enough that I never felt lost.",
        },
        {
          name: "Rajveer Singh",
          role: "Fresh Graduate",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "Already graduated but had zero practical experience. This six-month programme fixed that completely. Built a real portfolio, got interview-ready, and landed a job within two months of finishing.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------ programmes */
  {
    slug: "industrial-training",
    title: "Industrial Training",
    category: "Internship & Training",
    track: "programmes",
    badge: "Trending",
    duration: "6 weeks – 6 months",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹40,000",
    eligibility:
      "BCA, MCA, B.Tech, diploma and 12th pass students, graduates and career switchers",
    credential: "Certificate + university-format training letter",
    tagline:
      "The industrial training your university requires, run as actual industry work — with the paperwork done in the format your department accepts.",
    focus:
      "Industrial training fails when it becomes a signature on a form. Here you are given a real brief, a real reviewer and a real deadline, and the documentation is produced alongside the work rather than invented at the end. You move past textbooks into real development, design or analytics workflows, guided by trainers who have shipped genuine industry projects.",
    cardBlurb:
      "Any duration your syllabus mandates, delivered as real project work with the report and letter your department expects.",
    highlights: ["Any mandated length", "Department paperwork", "Real brief"],
    plan: [
      { span: "Week 1", title: "Scope & department requirements", body: "We read your syllabus brief and agree a deliverable that satisfies both your department and a real requirement, so the work counts twice." },
      { span: "Middle stretch", title: "Supervised build", body: "The build itself against a real deadline, with a weekly supervisor review and a progress log that becomes the evidence in your report." },
      { span: "Final fortnight", title: "Report, viva & letter", body: "Testing evidence gathered, the training report written in your department's format, viva preparation, then the signed letter and certificate." },
    ],
    topics: [
      { t: "Scope & Department Requirements", s: ["Reading your syllabus brief", "Mapping it to real work", "Agreeing the deliverable"] },
      { t: "Toolchain & Working Standards", s: ["Environment setup", "Version control", "Conventions and structure"] },
      { t: "Supervised Build Phase", s: ["Real requirement, real deadline", "Weekly supervisor review", "Recorded progress log"] },
      { t: "Testing & Verification", s: ["Testing before submission", "Debugging what you built", "Evidence of what works"] },
      { t: "Report & Documentation", s: ["University report format", "Diagrams and evidence", "Viva preparation"], d: "A training report in your department's format, with evidence you can defend in a viva." },
      { t: "Letter & Certification", s: ["Signed training letter and certificate", "Portfolio write-up", "Resume and interview preparation"] },
    ],
    /* One anchor per track this format opens onto — including the CAD side,
       which no other training format here covers and which is the reason a
       mechanical or civil student ends up on this page. */
    tools: ["VS Code", "Git", "MySQL", "Python 3", "Power BI", "AWS", "Google Ads", "AutoCAD"],
    roles: ["Trainee Engineer", "Industrial Trainee", "Junior Developer", "Junior Analyst"],
    projects: [
      { title: "Scoped Training Brief", body: "A requirement matched to your syllabus deliverable so the work counts twice — for us and for your department." },
      { title: "Supervised Build", body: "The build itself, with a weekly supervisor review and a progress log that becomes your report evidence." },
      { title: "University Training Report", body: "The report written in your department's format, with diagrams, testing evidence and a viva-ready summary." },
    ],

    copy: {
      overview: [
        "Whether you are a BCA, MCA, B.Tech or diploma student, the training runs for whatever length your syllabus mandates and closes the gap between college theory and real industry practice — live projects, current tools and mentorship from working professionals. Amritsar's growing IT ecosystem needs practical talent rather than certificates, so the curriculum is shaped around what recruiters in Punjab are genuinely screening for.",
        "Tracks span web development, software and programming, mobile app development, data science and AI, digital marketing, cyber security, and CAD/CAE engineering design — so IT students and mechanical, civil or architecture students each find something aligned to their actual career direction. You finish with a certified industrial training completion, a project portfolio and the confidence to talk about both.",
      ],
      checks: [
        "BCA, MCA, B.Tech, diploma, 12th pass, graduates and career switchers",
        "No prior coding background needed on any track",
        "Documentation produced in your own department's format",
        "Local to Amritsar — no relocating to Jalandhar or Chandigarh",
      ],

      audience: [
        {
          title: "BCA, MCA & B.Tech students",
          tag: "Mandatory training, covered",
          body: "For most colleges and universities around Amritsar — GNDU, Khalsa College, affiliated institutes and the wider Majha region — industrial training is a mandatory part of the curriculum. This satisfies that requirement and gives you far more than a certificate: real project exposure, practical coding or design experience, and a portfolio you can show an employer.",
        },
        {
          title: "Diploma & polytechnic students",
          tag: "Past the basics",
          body: "Diploma holders in computer science, IT or a related technical field who want to strengthen their practical skill set before entering the job market fit well here. There is enough depth to move past diploma-level basics into the tools and workflows a job actually runs on.",
        },
        {
          title: "12th pass students",
          tag: "A head start",
          body: "Not in college yet, or looking for a head start? Students who have just finished 12th — science or commerce — and are curious about IT, web development, design or data can use this as a launchpad, building in-demand skills well before their peers do.",
        },
        {
          title: "Fresh graduates & job seekers",
          tag: "Closes the skill gap",
          body: "Already graduated and finding that your degree did not teach what companies expect? Instead of generic theory you work on live-style projects that mirror what IT companies in Punjab and across India are hiring for — which is what turns a CV into an interview.",
        },
        {
          title: "Career switchers",
          tag: "No tech background needed",
          body: "If you are moving in from a non-technical background, the structured format gives you enough time to build genuine competence without needing years of prior coding experience behind you. You are met where you are rather than dropped into the middle.",
        },
        {
          title: "Students from nearby towns",
          tag: "No relocation",
          body: "Amritsar is the regional hub, and students travel in from Tarn Taran, Batala, Gurdaspur and across the Majha belt precisely to reach training of this standard. Batch timings are set so that commute is workable, and every batch runs live online in parallel.",
        },
      ],

      why: {
        intro:
          "Choosing the right industrial training is not just about ticking a college requirement — it is about what your resume looks like on the other side of it. Here is what actually separates one programme from another.",
        reasons: [
          {
            title: "Closes the degree-versus-skills gap",
            body: "College curricula move slowly next to the industry. Students graduate with strong theory and little exposure to real tools, live projects or industry workflow. This is built specifically to close that gap with the current skills recruiters screen for.",
          },
          {
            title: "As long as your syllabus asks for",
            body: "Departments mandate anything from six weeks to six months. Rather than forcing your requirement into a fixed course length, the scope is agreed against your own syllabus brief in week one, so the work satisfies your department and a real client at once.",
          },
          {
            title: "Live projects, not assignments",
            body: "Not pre-recorded tutorials or copy-paste exercises: functional web applications, working models, deployed APIs, portfolio-ready case studies. That tangible proof is exactly what an employer asks to see in an interview.",
          },
          {
            title: "Built around what companies want",
            body: "The curriculum is shaped by live-style projects, current tools and the workflows real IT companies use — so what you produce is a portfolio and a set of case studies rather than a completion letter you cannot explain.",
          },
          {
            title: "Mentors who have shipped work",
            body: "Learning from someone who has actually delivered live projects is a measurable difference. You are coached on how professionals approach a problem, debug it and deliver it — not walked through concepts.",
          },
          {
            title: "Resume weight for placements",
            body: "For BCA, MCA and B.Tech students heading into campus or off-campus interviews, a strong industrial training project on the CV is often what separates shortlisted from rejected. This is built to give you that specific edge.",
          },
          {
            title: "Certification that carries weight",
            body: "Training is structured around ISO-certified processes and government-linked skill development standards, which gives your certificate more credibility than an in-house-only completion letter — and your department accepts it without a query.",
          },
          {
            title: "Local, without relocating",
            body: "Students from Amritsar, Tarn Taran, Batala and Gurdaspur used to travel to Jalandhar, Ludhiana or Chandigarh for training of this standard. Doing it locally saves the cost, the commute and the hostel — none of which improve the training.",
          },
          {
            title: "More than just the code",
            body: "Communication, professionalism and confidence get the same attention as the technical work, because they decide as much about whether you land the job — resume building and mock interview practice are part of every track.",
          },
        ],
      },

      faqs: [
        {
          q: "How long does Industrial Training run?",
          a: "For as long as your syllabus mandates — anywhere from six weeks to six months. The scope is agreed in week one against your department's brief, so a shorter requirement gets a tighter deliverable rather than a rushed version of a longer one.",
        },
        {
          q: "Who can join the programme?",
          a: "BCA, MCA, B.Tech and diploma students, 12th pass students, fresh graduates, job seekers and career switchers in and around Amritsar — regardless of prior coding experience. There is no entrance test.",
        },
        {
          q: "Is this suitable for a complete beginner?",
          a: "Yes. Every track starts from foundational concepts and builds up to job-ready skills, which works for beginners and for students who already have some exposure — the latter simply move through the early blocks faster.",
        },
        {
          q: "Which tracks are included?",
          a: "Web Development, Software & Programming Development, Mobile App Development, Data Science & AI, Digital Marketing, Cyber Security, and CAD/CAE engineering design. The CAD track is why mechanical, civil and architecture students end up here rather than on a purely IT format.",
        },
        {
          q: "Can I choose my own specialisation?",
          a: "Yes. You pick the track at counselling based on your interest and career goal, and counsellors are briefed to help you choose on fit rather than steer you to whichever track is currently popular.",
        },
        {
          q: "What kind of projects will I work on?",
          a: "Live-style, real-world work — a functional web application, a data analysis dashboard, a design model — depending on your track, with weekly checkpoints rather than everything crammed into the final week.",
        },
        {
          q: "Is industrial training mandatory for BCA, MCA or B.Tech?",
          a: "For most university curricula in Punjab it is a mandatory academic component. This programme is designed to fulfil that requirement while adding real, practical skill value on top of the paperwork.",
        },
        {
          q: "Will I get a certificate, and will my college accept it?",
          a: "Yes to both. You receive an industrial training completion certificate recognised for academic requirements, plus a training letter written in your department's format — the report, the diagrams and the viva-ready summary are produced alongside the work rather than invented at the end.",
        },
        {
          q: "Does the programme include placement or career support?",
          a: "Yes — resume building, interview preparation and connections with hiring partners, which is the difference between finishing a training and getting shortlisted. The placement cell keeps working with you after your batch ends.",
        },
        {
          q: "Can students from Tarn Taran, Batala or Gurdaspur join?",
          a: "Many do. Amritsar is the regional hub for this, and it is a locally accessible alternative to travelling to Jalandhar, Ludhiana or Chandigarh. Where the commute is still difficult, the same batch runs live online.",
        },
        {
          q: "Do I need technical knowledge for the Data Science or AI track?",
          a: "Basic computer literacy helps, but the track builds progressively — Python fundamentals first, then data analysis, visualisation and model building. Nobody is expected to arrive knowing the advanced material.",
        },
        {
          q: "How is this different from other institutes in Amritsar?",
          a: "Industry-experienced trainers rather than lecturers, live project work rather than recorded tutorials, recognised certification rather than an in-house letter, and career support that continues past the last class. The combination is what makes the training count.",
        },
      ],

      reviews: [
        {
          name: "Simran Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I did my industrial training in web development at TechCadd, and honestly it was way more practical than I expected. We actually built a working project from scratch instead of just following slides. It helped me a lot during my campus placement interviews.",
        },
        {
          name: "Harpreet Singh",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "Coming from a small college near Tarn Taran, I never got proper exposure to live projects. The trainers explained everything with real examples, not just theory from books. My coding confidence has genuinely improved.",
        },
        {
          name: "Aman Mehta",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "I was confused between choosing web development or data science, and the counsellors actually helped me pick based on my interest rather than pushing the popular option. The length felt like just the right amount of time to learn something properly.",
        },
        {
          name: "Gurleen Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Batala · Weekend batch",
          quote:
            "I used to travel all the way to Jalandhar for good training options, so having this accessible for Amritsar-area students was honestly a relief. It saved me so much travel time and hostel expense.",
        },
        {
          name: "Rohit Sharma",
          role: "B.Tech IT Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "The DSA and programming sessions were solid. My trainer used to give us real interview-style problems, not basic textbook questions. It genuinely helped when I sat for my first technical interview.",
        },
        {
          name: "Navjot Kaur",
          role: "MCA Student",
          rating: 5,
          meta: "Gurdaspur · Weekend batch",
          quote:
            "I will be honest, I joined mainly because my college required industrial training as a mandatory subject. But by the end I had built a full project I was proud to show in interviews — I did not expect that.",
        },
        {
          name: "Karanveer Singh",
          role: "B.Tech Mechanical Student",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "Did my training in AutoCAD and 3ds Max. The practical, hands-on approach made a huge difference compared to how it is taught in college labs. My trainer had real industry project experience, and it showed.",
        },
        {
          name: "Ishita Bansal",
          role: "BCA Student",
          rating: 5,
          meta: "Amritsar · Evening batch",
          quote:
            "I was a complete beginner in coding, honestly a bit nervous going in. But the pace was manageable and I never felt lost. By the end I was building things I could not have imagined doing at the start.",
        },
        {
          name: "Manpreet Singh",
          role: "MCA Student",
          rating: 5,
          meta: "Tarn Taran · Weekend batch",
          quote:
            "What stood out for me was the resume and interview prep support at the end. A lot of institutes just hand you a certificate and that is it. Here they actually helped me prepare for real interviews.",
        },
        {
          name: "Pooja Rani",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I did the Data Science track — Python, Power BI and some machine learning basics. It was intense but worth it. My trainer used to relate everything to real business use cases, which made it click faster.",
        },
        {
          name: "Yuvraj Singh",
          role: "BCA Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "Compared to what my friends went through at other local institutes, this felt far more structured. Weekly project checkpoints kept us accountable instead of cramming everything into the last week.",
        },
        {
          name: "Ritika Chopra",
          role: "MCA Student",
          rating: 5,
          meta: "Amritsar · Evening batch",
          quote:
            "Being from Amritsar, not having to relocate for quality industrial training was a big plus for my parents too. The trainers were approachable and always ready to clear doubts, even outside class hours.",
        },
      ],
    },
  },
  {
    slug: "internship-program",
    title: "Internship Program",
    category: "Internship & Training",
    track: "programmes",
    duration: "45 days – 6 months",
    level: "Beginner to job-ready",
    fee: "₹12,000 – ₹35,000",
    eligibility:
      "12th pass students, undergraduates, postgraduates, graduates and working professionals",
    credential: "Documented internship letter + certificate",
    tagline:
      "Not a shadowing exercise. You are placed on live delivery work with a reviewer, a deadline and a letter that describes what you actually did.",
    focus:
      "Most internship letters say nothing, because most internships involve nothing. This one puts you on work that ships, which is the only reason the letter is worth reading. Every module is mapped to what companies expect from a fresher — practical ability, tool familiarity, project experience, and the confidence to explain your own work in an interview.",
    cardBlurb:
      "A placement inside the delivery team on work that ships, ending in a letter that names the projects rather than the dates.",
    highlights: ["Live delivery work", "Named in the letter", "2 – 6 months"],
    plan: [
      { span: "Weeks 1 – 2", title: "Onboarding & first task", body: "How the team works, the review standard, and a small scoped change on live work — enough to learn the bar without being able to break anything." },
      { span: "Middle stretch", title: "Owning a feature", body: "You scope a feature, build it against the team's actual deadline and defend it in review, talking to the person whose requirement it is." },
      { span: "Final weeks", title: "Handover & letter", body: "Test your own work, write the handover that lets someone else pick it up, then a reviewer debrief — which is what the letter is drafted from." },
    ],
    topics: [
      { t: "Onboarding & Standards", s: ["How the team tracks progress", "Version control and review", "What good enough means here"] },
      { t: "First Assigned Task", s: ["A small scoped change", "Working with the database", "Review, rework and ship it"] },
      { t: "Owning a Feature", s: ["Scope it yourself", "Build against a deadline", "Handle the review notes"] },
      { t: "Working With Stakeholders", s: ["Reading a real requirement", "Communicating technical work clearly", "Reporting progress honestly"] },
      { t: "Delivery & Handover", s: ["Testing your own work", "Written handover", "Debrief with the reviewer"], d: "Shipped work with a written handover and a recorded reviewer debrief." },
      { t: "Letter, Portfolio & Next Role", s: ["Internship letter drafted from real tasks", "Portfolio write-up", "Interview preparation"] },
    ],
    /* One tool per category the programme puts you in front of — editor and
       version control, databases, APIs, design, cloud, and the project
       tracking most students never meet until their first job. */
    tools: ["VS Code", "Git", "MySQL", "Postman", "Figma", "AWS", "Docker", "Notion"],
    roles: ["Intern", "Junior Developer", "Junior Analyst", "Trainee Executive"],
    projects: [
      { title: "First Scoped Task", body: "A small, real change on live work — enough to learn the review standard without being able to break anything." },
      { title: "Owned Feature", body: "A feature you scope, build and defend in review, delivered against the team's actual deadline." },
      { title: "Handover Pack", body: "The written handover and debrief that let someone else pick your work up — and that your letter is drafted from." },
    ],

    copy: {
      overview: [
        "Whether you are a BCA, MCA, B.Tech or diploma student — from GNDU, Khalsa College, Amritsar Group of Colleges or any other institute in the city — the programme is built to close the distance between what you study and what the IT industry actually expects. You work on live projects, get hands-on lab practice, and are mentored by people who know real workplace demands rather than a textbook syllabus.",
        "Duration runs from 45 days to six months depending on whether you need it for a short industrial training requirement or a fuller internship, and the documentation is produced in the format GNDU and IKG PTU affiliated colleges accept. What you leave with is more than a summer break spent usefully: project work you can demonstrate, tools you can actually operate, and a certificate that means something to a recruiter.",
      ],
      checks: [
        "12th pass to postgraduate, plus working professionals — no entrance test",
        "No prior technical background needed on most tracks",
        "Documentation and reports for GNDU and IKG PTU requirements",
        "Local to Amritsar — no commuting to Mohali or Chandigarh",
      ],

      audience: [
        {
          title: "12th pass students",
          tag: "Look before you commit",
          body: "Just finished 12th and unsure whether to go straight into a degree? This gives you a practical preview of what the industry actually looks like. Rather than guessing between web development, data analytics, digital marketing or cyber security, you get hands-on exposure before committing years to a specific degree.",
        },
        {
          title: "BCA, MCA & B.Tech / M.Tech students",
          tag: "The core audience",
          body: "Most curricula — GNDU-affiliated colleges and IKG PTU institutes included — require industrial training or an internship as part of the degree, whether that is 45 days, six weeks or six months. This is designed around that academic requirement while making sure the certificate and the skills are genuinely useful at a placement drive.",
        },
        {
          title: "Final-year students & fresh graduates",
          tag: "Fills the stated gap",
          body: "If you are job hunting, this fills the gap employers name most often: no practical, real-project experience. Recruiters across Amritsar's IT and service sector — and firms in Chandigarh, Mohali and Jalandhar that hire from Punjab's talent pool — consistently prefer candidates who have worked on live projects.",
        },
        {
          title: "Career switchers & self-taught learners",
          tag: "A roadmap, not tutorials",
          body: "Not everyone arrives from a pure computer science background. Commerce graduates, science students and anyone who has been learning informally get a clear, guided route with a mentor attached — instead of scattered tutorials and no way to tell whether you are actually improving.",
        },
        {
          title: "Working professionals",
          tag: "Upskill locally",
          body: "Already employed but want to add an in-demand skill without relocating to Chandigarh or Mohali for it? Batch timings are set to fit around existing commitments, and the delivery work you are placed on is scheduled around the batch you pick.",
        },
      ],

      why: {
        intro:
          "Why choose this over a generic coaching centre or a purely online course? The honest answer is what happens to the work you produce — whether it ends up as a certificate in a folder, or as something a recruiter asks you to walk them through.",
        reasons: [
          {
            title: "Industry requirements, not syllabus completion",
            body: "Plenty of programmes exist only to satisfy a college requirement — a certificate handed over after passive lectures. Every module here is mapped to what companies expect from a fresher: practical ability, tool familiarity, project experience, and being able to explain your own work.",
          },
          {
            title: "Live projects from week one",
            body: "Not long theory sessions followed by a rushed project at the end. You are on live and mini-projects continuously, so by completion you have actual deliverables to show rather than notes to recall.",
          },
          {
            title: "Mentors, not instructors",
            body: "The most common complaint about generic institutes is being left to work it out alone after a lecture. Mentors here stay involved — reviewing your project work, clearing doubts one to one, and pushing you to understand why something works rather than how to copy it.",
          },
          {
            title: "Built for university requirements",
            body: "Whether your department mandates 45 days, six weeks or six months, the documentation, project reports and certification are produced in the format your college expects — with real skill-building underneath rather than paperwork alone.",
          },
          {
            title: "Curriculum aligned to real hiring",
            body: "The syllabus is not designed in isolation from the job market. It follows the tools, technologies and workflows companies across Amritsar, Chandigarh and Mohali are actively hiring for, so what you learn is relevant the day you walk into an interview.",
          },
          {
            title: "Local access, no compromise",
            body: "Serious training in Punjab has tended to concentrate in Mohali, Chandigarh and Jalandhar, leaving Amritsar students to either commute or settle. Getting the same structured, mentor-led, project-based approach locally removes that trade-off entirely.",
          },
          {
            title: "Certification colleges and recruiters accept",
            body: "TechCadd is an ISO 9001 certified training company and an approved PMKVY training partner. The certificate satisfies a university's documented-training requirement, and the project experience behind it stands up when a recruiter asks you to explain your work.",
          },
          {
            title: "A model already tested across Punjab",
            body: "Thousands of students have been through these programmes in Jalandhar, Hoshiarpur, Ludhiana and Mohali. What runs in Amritsar is a system that has been refined across the region rather than a first attempt at one.",
          },
          {
            title: "Judged on job-readiness",
            body: "The measure of an internship is not whether you finished it — it is whether you are more employable afterwards. Live projects you can talk about, practical tool experience, and the confidence to apply it in a real workplace are the actual deliverables.",
          },
        ],
      },

      faqs: [
        {
          q: "How long does the Internship Program run?",
          a: "Anywhere from 45 days to six months, depending on whether you need it for a short industrial training requirement or a fuller internship experience. The duration is agreed at counselling against your college's requirement.",
        },
        {
          q: "Who can join?",
          a: "12th pass students, undergraduates (BCA, B.Tech, B.Sc-IT), postgraduates (MCA, M.Tech), diploma students, fresh graduates and working professionals looking to upskill. No prior technical background is required for most tracks.",
        },
        {
          q: "Does this count towards my college's industrial training requirement?",
          a: "Yes. It is structured to meet the common university requirements — 45 days, six weeks and six months — with proper documentation and project reports accepted by most colleges affiliated with GNDU and IKG PTU. If your department has its own report format, tell us at the start.",
        },
        {
          q: "Is this suitable for a beginner with no coding experience?",
          a: "Yes. Fundamentals are built from scratch with mentor support, so you can progress at a workable pace. Anyone arriving with prior exposure moves through the early blocks faster and spends the time saved on the delivery work.",
        },
        {
          q: "What will I actually learn?",
          a: "Programming fundamentals, web development, database management, industry-standard tooling including Git and GitHub, live project work, and documentation and interview-readiness skills — weighted towards whichever track you choose.",
        },
        {
          q: "Is the project work real, or built for the classroom?",
          a: "Real. You are placed on live delivery work with a reviewer and an actual deadline, starting with a small scoped change and moving up to owning a feature. That is the only reason the letter at the end is worth reading.",
        },
        {
          q: "Will I get a certificate?",
          a: "Yes — a completion certificate along with project documentation you can submit to your college and use in job applications. The internship letter alongside it names the projects and the reviewer rather than just the dates you attended.",
        },
        {
          q: "Where in Amritsar is the training, and do I need to travel?",
          a: "It is accessible from across the city — Ranjit Avenue, Lawrence Road, Green Avenue, Batala Road and the surrounding areas — which removes the need to travel to Mohali or Chandigarh for training of this standard. Every batch also runs live online.",
        },
        {
          q: "Can working professionals join?",
          a: "Yes. Scheduling is flexible enough to work around an existing job or academic commitment, and evening and weekend batches run in parallel with the weekday ones.",
        },
        {
          q: "Is there placement assistance afterwards?",
          a: "Interview preparation, portfolio building from your project work, and guidance on job readiness — continuing after your batch finishes rather than stopping on your last day. Nobody guarantees a job, and anyone who does is guessing.",
        },
        {
          q: "How is this different from other institutes in Amritsar?",
          a: "Live project work from day one, personalised mentor guidance, and a curriculum aligned with real industry expectations — rather than theory-only lectures followed by a token final project.",
        },
        {
          q: "How do I enrol?",
          a: "Use the enquiry form on this page or visit the Amritsar centre, and a counsellor will work out the right track and duration against your college requirement and your career goals. Fees and instalments are agreed in writing before you enrol.",
        },
      ],

      reviews: [
        {
          name: "Ramanpreet Kaur",
          role: "BCA, GNDU",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I needed industrial training for my BCA degree and honestly was not expecting much, but this completely changed that. The mentors actually sit with you and explain things until you get it. I built my first real web project here and used it in my placement interview last month.",
        },
        {
          name: "Gurdeep Singh",
          role: "B.Tech CSE, Amritsar Group of Colleges",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "Coming from Ranjit Avenue, I did not want to travel to Mohali every day for training. This gave me the same quality without the commute. The trainers pushed me to actually understand the logic instead of just copying code.",
        },
        {
          name: "Simran Kaur",
          role: "MCA, GNDU",
          rating: 4,
          meta: "Amritsar · Morning batch",
          quote:
            "Good structured programme. I was worried MCA-level training would be too basic, but they adjusted the pace once they saw where I was at. Would have liked a slightly longer project phase, but overall a very solid experience.",
        },
        {
          name: "Harpreet Singh",
          role: "Diploma Student",
          rating: 5,
          meta: "Amritsar · Evening batch",
          quote:
            "I am from a small institute near Batala Road and always felt behind compared to bigger city students. This internship training gave me real confidence — I finally have a project I am proud to show in interviews.",
        },
        {
          name: "Manpreet Kaur",
          role: "BCA, Khalsa College",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "My college needed a proper internship certificate with documentation, and that was handled professionally while actually teaching me something useful. My mentor was patient even when I asked the same doubt three times.",
        },
        {
          name: "Arshdeep Singh",
          role: "B.Tech IT Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "Compared to a friend's experience at a generic local institute, this felt like actual industry training. We worked on live projects from week one, not just at the end. I recommend it to anyone doing industrial training in Amritsar.",
        },
        {
          name: "Jaspreet Kaur",
          role: "BCA, GNDU Affiliated College",
          rating: 4,
          meta: "Amritsar · Evening batch",
          quote:
            "Solid programme with genuinely helpful trainers. I came in knowing almost nothing about web development and left with a working project. Batch timings were flexible enough to work around my college schedule.",
        },
        {
          name: "Karanvir Singh",
          role: "M.Tech Student",
          rating: 5,
          meta: "Amritsar · Weekday batch",
          quote:
            "I had already done a basic course elsewhere but wanted something more practical before my job search. This filled that gap well — proper tools, real project work, and mentors who have clearly worked in the industry themselves.",
        },
        {
          name: "Navjot Kaur",
          role: "BCA Student",
          rating: 5,
          meta: "Amritsar · Morning batch",
          quote:
            "What stood out was how approachable the mentors were. I never felt embarrassed asking basic questions. By the end I had a portfolio project I actually built myself, not something copy-pasted from tutorials.",
        },
        {
          name: "Ishaan Mehta",
          role: "B.Tech CSE Student",
          rating: 5,
          meta: "Amritsar · Weekend batch",
          quote:
            "I compared a few options in Amritsar and Chandigarh before choosing TechCadd, and it was worth it. The certificate satisfied my university's industrial training requirement and the skills held up when I actually needed them in interviews.",
        },
        {
          name: "Ravneet Kaur",
          role: "BCA Student",
          rating: 4,
          meta: "Amritsar · Weekday batch",
          quote:
            "Overall a great experience. The hands-on approach is what I appreciated most — far better than sitting through lectures. My only suggestion would be more sessions on advanced tools, but the fundamentals were taught really well.",
        },
      ],
    },
  },
];

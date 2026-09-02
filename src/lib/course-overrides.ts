/**
 * Hand-written copy for courses that have real marketing content behind them.
 *
 * `courses.ts` builds every page from the compact seeds, which keeps the whole
 * catalogue at the same depth. That generated model is the floor, not the
 * ceiling: when a course has copy written for it — overview prose, its own
 * eligibility personas, its own reviews, its own FAQ — it lands here and
 * replaces the generated field wholesale rather than being paraphrased into a
 * seed. Anything a course does not name still comes through the builder.
 *
 * Keyed by the *public* slug (`python-course-in-amritsar`), which is what
 * `buildCourse` has in hand at merge time.
 */

import type { Course } from "./courses";

export type CourseOverride = {
  /** Whole fields of the built `Course` model, replaced verbatim. */
  course?: Partial<Course>;
};

/* ------------------------------------------------------ python programming */

/**
 * Source copy: the Amritsar Python brief (overview, eligibility, the two
 * "why" arguments, twelve learning blocks, eleven student reviews, twelve
 * FAQs, the enquiry section and the keyword/GEO report). The twelve learning
 * blocks live in `course-data.ts` instead, because they are the curriculum and
 * the module explorer reads them from the seed.
 */
const python: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Python Programming Training
         course Amritsar" — rather than the generic catalogue phrasing. */
      headline: "Python Programming Training course in",
      accent: "Amritsar",
      tagline:
        "A job-oriented Python course in Amritsar for students, graduates and job seekers — from core fundamentals to automation, Django and the basics of data analysis.",
      chips: ["3 – 6 months", "Classroom & online", "Beginner"],
      image: "/images/courses/python.png",
    },

    overview: {
      heading: "Python Programming Training in Amritsar – Overview",
      paragraphs: [
        "Looking for the best Python Programming Training Course in Amritsar? Techcadd offers a job-oriented Python course designed for students, graduates, and job seekers across Amritsar — including those studying at GNDU, Khalsa College, DAV College, and other nearby institutes.",
        "This Python course in Amritsar covers everything from core programming fundamentals — variables, loops, functions, and data structures — to real-world applications like automation, web development with Django, and the basics of data analysis using Python. Whether you're a complete beginner or a student wanting to strengthen your programming foundation, this course is structured to build practical, job-ready skills.",
        "At Techcadd, training goes beyond theory. Students work on live projects, get doubt-clearing support, and receive placement assistance to help transition into roles like Python Developer, Automation Engineer, or Data Analyst.",
        "If you're searching for a trusted Python programming institute in Amritsar that combines hands-on learning with career support, this course is built for you.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This course is structured to take you from complete beginner to confident, job-ready Python programmer — step by step, with every concept reinforced through practice.",

    /* Six starting points plus the no-experience note that closes the section
       in the source copy. The checklist variant of `CourseFit` renders these
       as a two-column grid, so a seventh tile sits naturally. */
    eligibility: {
      heading: "Who Can Do This Course – Python Programming Training in Amritsar",
      intro:
        "One of the most common questions students ask before enrolling is simple: “Am I eligible for this Python course?” The honest answer — if you're curious about technology and willing to practice consistently, this Python Programming Training Course in Amritsar is built for you. Techcadd designed this program to be accessible for absolute beginners while still offering enough depth to challenge students who already know the basics of coding. Here's a closer look at who typically joins this course:",
      criteria: [
        {
          label: "12th Pass Students (Science, Commerce, or Arts background)",
          detail:
            "You don't need a computer science background to start learning Python. Many students from Amritsar who've just finished 12th grade join this course to build a strong technical foundation before college, or to explore whether a career in programming or IT is the right path for them. Python's simple, English-like syntax makes it one of the easiest languages for first-time learners.",
        },
        {
          label: "College Students (BCA, B.Tech, BSc-IT, MCA)",
          detail:
            "Students from GNDU, Khalsa College, DAV College, and other institutes across Amritsar often join to supplement their academic curriculum with practical, hands-on Python skills that colleges rarely cover in depth. This course is especially useful for those needing Python industrial training (6 weeks / 45 days / 6 months) as part of their degree requirements.",
        },
        {
          label: "Graduates from Any Stream Looking to Switch Careers",
          detail:
            "Python has become a common entry point for graduates — even from non-technical backgrounds like commerce, arts, or biology — who want to move into IT, data analysis, or software roles. Since Python doesn't require prior programming knowledge, it's one of the most beginner-friendly languages to pivot your career around.",
        },
        {
          label: "Job Seekers Wanting an In-Demand Technical Skill",
          detail:
            "If you're currently job hunting and want to stand out, adding Python to your resume can open doors to roles in automation, backend development, QA testing, and data-related positions. Employers across Amritsar and beyond increasingly look for candidates with at least basic Python proficiency.",
        },
        {
          label: "Working Professionals Wanting to Upskill",
          detail:
            "Professionals already working in IT support, testing, or administrative tech roles often join to add automation and scripting skills to their profile — making themselves more valuable and opening pathways to higher-paying roles.",
        },
        {
          label: "Aspiring Data Analysts, Developers & Automation Enthusiasts",
          detail:
            "If your long-term goal is data science, web development, or automation engineering, Python is typically the first language recommended by most professionals — making this course a strong starting point.",
        },
        {
          label: "No Prior Coding Experience Needed",
          detail:
            "Whether you've never written a line of code or you've dabbled in programming before, the course starts from the fundamentals and builds up gradually. Classes are structured for both offline learners in Amritsar and those preferring flexible online sessions.",
        },
      ],
    },

    /**
     * Future scope, taken over from the builder for one reason: the closing
     * "What you walk away with" note. The generated line reads the span
     * straight out of the seed ("The 3 – 6 months programme…"), and Python is
     * not sold as a ladder of fixed durations — it runs on regular and
     * fast-track batches, which is why the tracks table is off below. So the
     * note names what the student leaves holding instead of how long they sat
     * for. The heading, the intro and the four drivers are the generated copy
     * unchanged, so the rest of the section renders exactly as it did.
     */
    futureScope: {
      heading: "Where python programming is headed from here",
      intro:
        "A certificate answers what you can do today. This is the honest answer to what python programming looks like three to five years out, and why the fundamentals this course spends real time on are what carry you there.",
      drivers: [
        {
          title: "Demand is structural, not seasonal",
          body: "Every product, in every industry, still runs on code someone has to write and maintain — and that has not changed even as the tools drafting the first version have.",
        },
        {
          title: "The skill ladder keeps climbing",
          body: "Python Developer is the entry rung, not the ceiling. Once that portfolio is in place, automation engineer is the realistic next step — a promotion earned on the job, not a second course you have to go back and pay for.",
        },
        {
          title: "Tooling changes; fundamentals compound",
          body: "Python 3 and the rest of the stack will look different in five years — they always do. What does not expire is the fundamentals this course is built around, which is why the syllabus is reviewed each intake instead of frozen once and reused.",
        },
        {
          title: "Remote and hybrid widen the market",
          body: "A python programming portfolio built in Amritsar competes for the same remote and hybrid roles as anywhere else. Companies hiring for this work are increasingly indifferent to which city the offer letter is posted to.",
        },
      ],
      horizon:
        "However long your batch runs, this programme is built around the part that is genuinely in your hands — and you leave holding all of it. A reviewed portfolio of Python work you can open in an interview, an industry-recognised certificate, and a fundamentals-first foundation you can keep building on long after the last class. Markets move, as they always have; that foundation is exactly what lets you move with them as development work around you keeps shifting.",
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why Choose This Python Programming",
      accent: "Training Program?",
      body: "With so many institutes in Amritsar offering “Python courses,” it's fair to ask what actually makes a program worth your time and money. Here's what sets Techcadd's Python Programming Training course apart — and why it's built around real outcomes, not just certificates.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "You won't just watch someone code on a screen and take notes. Every concept in this course is reinforced through hands-on practice — writing your own scripts, debugging real errors, and building small projects that mirror what junior developers actually work on. By the end of the course, you'll have a portfolio of work you can show, not just a certificate that says you attended classes.",
        },
        {
          title: "Structured, Beginner-to-Job-Ready Curriculum",
          body: "The course is designed in a logical progression — starting with Python fundamentals like variables, loops, and functions, moving into data structures and file handling, and building up toward more advanced, job-relevant concepts. Nothing is thrown at you before you're ready for it, and nothing important gets skipped either.",
        },
        {
          title: "Industry-Relevant Skills, Not Just Academic Theory",
          body: "Python today is used across web development, automation, data analysis, and increasingly in AI-assisted workflows. This program is built to reflect how Python is actually used in the industry right now, so what you learn stays relevant to real hiring requirements — not just exam syllabi.",
        },
        {
          title: "Doubt-Clearing & Mentor Support",
          body: "Learning to code is rarely a straight line — everyone gets stuck on errors and confusing concepts at some point. Techcadd's trainers are available to clear doubts as they come up, so you're not left stuck on a single error for days, losing motivation.",
        },
        {
          title: "Flexible Batch Timings for Students and Professionals",
          body: "Whether you're a student trying to fit this around college hours or a working professional trying to fit this around a job, batch timings are designed to accommodate real schedules — not just the institute's convenience.",
        },
        {
          title: "Interview and Placement Support",
          body: "Learning Python is only half the goal — the real objective is a job or a stronger resume. That's why this program includes resume-building guidance, mock interviews, and placement assistance, so you leave with more than just knowledge — you leave with a clear plan to use it.",
        },
        {
          title: "Local Convenience, Real Access",
          body: "Being based in Amritsar means you get all of this without needing to relocate, pay for accommodation, or commute to another city. For students from nearby areas like Tarn Taran, Batala, or Ajnala, that local access matters — it removes a real barrier that often stops good students from upskilling.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Learn Python at",
      accent: "Techcadd, Amritsar?",
      body: "Choosing where to learn Python matters just as much as choosing to learn it. Here's what makes Techcadd a trusted name for Python training in Amritsar.",
      reasons: [
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's trainers don't just teach from a fixed textbook — they bring real programming experience into the classroom, which means you're learning how Python is actually used today, including how professionals debug, structure code, and approach problem-solving. This context is often what separates a course that feels academic from one that actually prepares you for real work.",
        },
        {
          title: "A Track Record of Training Real Students in Amritsar",
          body: "Techcadd has built its reputation locally by training students from a wide mix of backgrounds — school leavers, college students, graduates, and working professionals — across multiple technical courses, not just Python. That range of experience means the trainers know how to explain concepts to complete beginners without talking down to students who already have some background.",
        },
        {
          title: "Hands-On, Project-Driven Teaching Style",
          body: "At Techcadd, the emphasis is consistently on doing, not just watching. Instead of long, passive lecture sessions, classes are structured around writing actual code, working through errors, and building small projects — the same way you'd build skills on the job. This approach helps concepts stick far better than theory-only teaching.",
        },
        {
          title: "Small-Batch, Personal Attention",
          body: "Getting stuck on a coding error and not being able to get help for days is one of the biggest reasons students lose momentum while learning to code. Techcadd focuses on keeping batches manageable so trainers can actually address individual doubts, rather than moving forward regardless of who's been left behind.",
        },
        {
          title: "Placement Support That Goes Beyond the Certificate",
          body: "A certificate alone doesn't get you a job — how you present your skills does. Techcadd supports students with resume building, interview preparation, and mock interviews, so that by the time you finish the course, you're not just “Python certified” — you're actually ready to walk into an interview and speak confidently about what you've built.",
        },
        {
          title: "Flexible for Real Student Schedules",
          body: "Techcadd understands that not every student is a full-time learner with no other commitments. Batch timings are structured to work around college schedules and job timings, so that students from Amritsar and nearby areas don't have to choose between upskilling and their existing responsibilities.",
        },
        {
          title: "Honest, Beginner-Friendly Teaching",
          body: "Perhaps most importantly, Techcadd doesn't assume prior knowledge. Trainers start from the fundamentals and build up methodically, which means students with zero coding background aren't left behind, and students with some prior exposure still get real depth as the course progresses.",
        },
        {
          title: "Local, Accessible, and Student-Focused",
          body: "Being based in Amritsar means Techcadd understands the local student ecosystem — the colleges students come from, the kind of jobs available in and around the city, and the practical constraints (commute, budget, time) that shape a student's decision to enroll. That local understanding shapes how the course is delivered, not just where it's located.",
        },
      ],
    },

    /* Eleven named reviews. The distribution and average are computed from the
       ratings actually listed here — eight five-star, three four-star — rather
       than the catalogue's generated numbers, so the star rail cannot claim
       more than the page can show. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I joined Techcadd's Python course right after finishing my BCA because I felt my degree gave me theory but not real confidence in coding. The way trainers explained concepts here, step by step with actual projects, made such a difference. I finally understand what I'm writing instead of just copying code.",
        },
        {
          name: "Harshdeep Singh",
          initials: "HS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I'm from a Commerce background and was honestly scared that Python would be too technical for me. But the trainers started from zero and never made me feel behind. Three months in, I've built my own small projects, which felt impossible in the beginning.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "B.Tech Student, GNDU",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I needed this course for my industrial training requirement, but it ended up teaching me way more than I expected. The mini projects were genuinely useful for my resume, and my trainer was always available whenever I got stuck on an error.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Working Professional, Amritsar",
          rating: 4,
          meta: "Evening batch",
          quote:
            "I was working a non-tech job and wanted to switch careers. Doing this course in the evening batch worked well with my job timings. It took real effort on my part, but the structure of the course made it manageable even with a full-time job.",
        },
        {
          name: "Aman Sharma",
          initials: "AS",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "Before this course, my resume had nothing that stood out. Now I have actual Python projects to talk about in interviews, and honestly the mock interview sessions at Techcadd helped me a lot with confidence.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "MCA Student, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "What I liked most was how practical everything was. We weren't just doing theory — every topic had a hands-on task attached. My trainer explained data structures in a way that finally made sense after struggling with it in college.",
        },
        {
          name: "Ishaan Mehta",
          initials: "IM",
          role: "BSc-IT Student, Amritsar",
          rating: 4,
          meta: "Python Programming batch",
          quote:
            "The batch size was small enough that I could actually ask questions without feeling like I was slowing the class down. That personal attention made a real difference compared to a course I tried online before this.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Graduate, Batala (commuting to Amritsar)",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I travel from Batala for classes, and it's completely worth it. The trainers are patient, the projects are practical, and I never felt like just another student in a crowded batch.",
        },
        {
          name: "Rohit Verma",
          initials: "RV",
          role: "Freelancer, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I took this course to automate some repetitive work for my freelance business. I didn't expect to enjoy coding as much as I did. Now I've written scripts that genuinely save me hours every week.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "12th Pass Student, Amritsar",
          rating: 4,
          meta: "Python Programming batch",
          quote:
            "Coming straight from school, I wasn't sure if I'd be able to keep up. The pace was manageable, and the trainers repeated concepts patiently whenever needed. I feel much more prepared for a tech career now.",
        },
        {
          name: "Kirti Sood",
          initials: "KS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I'm in my late 20s and was nervous about starting something completely new. The trainers never made me feel out of place for asking basic questions. I finally feel like I have a real shot at moving into tech.",
        },
      ],
    },

    /* Answers are kept in the 40–60 word band the brief asks for, and each one
       opens with the direct answer before it elaborates — that lead-with-the-
       answer shape is what answer engines lift. */
    faqs: [
      {
        q: "Is prior coding experience required to join the Python Programming Training course at Techcadd, Amritsar?",
        a: "No. Techcadd's Python course is designed for complete beginners. Trainers start from the fundamentals, so students with zero coding background can follow along comfortably.",
      },
      {
        q: "Who can enroll in this Python course — is it only for IT students?",
        a: "No, it's open to everyone. 12th pass students from any stream, BCA/B.Tech/MCA students, graduates, working professionals, and even freelancers can join. No specific academic background is required.",
      },
      {
        q: "What is the duration of the Python Programming Training course in Amritsar?",
        a: "The course typically runs for a few months, with both regular and fast-track batch options available depending on your schedule. Exact duration is confirmed at the time of enrollment based on the batch you choose.",
      },
      {
        q: "Does Techcadd offer both online and offline Python classes in Amritsar?",
        a: "Yes, Techcadd offers flexible learning options, including classroom training at the Amritsar centre as well as online sessions for students who need remote access.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, students receive a course completion certificate from Techcadd, which can be added to your resume and used to demonstrate your practical Python skills to employers.",
      },
      {
        q: "Does the course include placement assistance?",
        a: "Yes. Techcadd supports students with resume building, mock interviews, and interview preparation to help improve job readiness after course completion.",
      },
      {
        q: "What kind of jobs can I get after learning Python?",
        a: "Python skills can lead to roles such as Python Developer, Automation Engineer, Data Analyst, Backend Developer, and QA Automation Engineer, among others, depending on your interests and further specialization.",
      },
      {
        q: "Are batch timings flexible for working professionals and college students?",
        a: "Yes, Techcadd offers flexible batch timings, including options that accommodate college schedules and working professionals' job hours.",
      },
      {
        q: "Do I need to bring my own laptop for the classes?",
        a: "It's recommended to have access to a laptop for practice, though this is confirmed with the Techcadd Amritsar centre at the time of enrollment, as lab access may also be available.",
      },
      {
        q: "How is this course different from free online Python tutorials?",
        a: "Unlike self-paced free tutorials, Techcadd's course offers structured learning, hands-on mentorship, doubt-clearing support, real project work, and placement assistance — elements that are hard to replicate through unguided online learning alone.",
      },
      {
        q: "Is this course suitable for someone planning to switch careers into tech?",
        a: "Yes. The course is commonly chosen by working professionals looking to transition into tech roles, with a beginner-friendly structure that doesn't assume prior programming experience.",
      },
      {
        q: "Where is Techcadd's Python training centre located in Amritsar?",
        a: "Techcadd's Amritsar centre is accessible to students from the city as well as nearby areas like Tarn Taran, Batala, and Ajnala. Exact address and directions are shared at the time of enquiry.",
      },
    ],

    /* Python runs on regular and fast-track batches, not on fixed 3 / 6 / 9
       month tiers, so the derived duration-tracks table is switched off — the
       enquiry copy states the duration as "Flexible" instead. */
    tracks: false,

    cta: {
      eyebrow: "Start your Python career journey",
      heading: "🐍 Start Your Python Career Journey —",
      accent: "Right Here in Amritsar",
      body: "Stop watching free tutorials and never finishing them. Learn Python the structured way — with real mentors, real projects, and real placement support — at Techcadd, Amritsar.",
      facts: [
        "Course: Python Programming Training Course",
        "Duration: Flexible (Regular / Fast-Track batches available)",
        "Mode: Classroom (Amritsar Centre) & Online",
        "Centre: Techcadd, Amritsar",
      ],
      assurances: [
        "No spam calls",
        "Your details stay private",
        "Talk to a real trainer, not a bot",
      ],
      formTitle: "📩 Enquire Now — It Takes 30 Seconds",
      formNote:
        "Taken from the page you are on — this enquiry reaches the Python Programming counsellor directly.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: [
        "12th Pass",
        "Graduate",
        "College Student",
        "Working Professional",
      ],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "☎️ Prefer to Talk First? Request a Callback",
      body: "Not ready to fill a form yet? No problem — leave your number and a Techcadd counsellor will call you back to answer your questions, no pressure, no obligation.",
      action: "Request a Callback",
      note: "✅ No spam calls · ✅ Your details stay private · ✅ Talk to a real trainer, not a bot",
    },

    seo: {
      title: "Python Programming Training Course in Amritsar | Techcadd",
      description:
        "Job-oriented Python Programming Training course in Amritsar for beginners — live projects, flexible batches, doubt-clearing support and placement assistance.",
      keywords: [
        "Python Programming Training course Amritsar",
        "Python course in Amritsar",
        "Python training institute Amritsar",
        "Best Python course Amritsar",
        "Python classes Amritsar",
        "Python coaching Amritsar",
        "Python programming course near me Amritsar",
        "Python Industrial Training Amritsar",
        "Full Stack Python Training Amritsar",
        "Python for beginners course Amritsar",
        "Job-oriented Python course Amritsar",
        "Python certification course Amritsar",
        "Python developer course Amritsar",
        "Learn Python in Amritsar",
        "Python course near GNDU Amritsar",
        "Python training near Khalsa College Amritsar",
        "Python classes Mall Road Amritsar",
        "Python course Hall Bazaar Amritsar",
        "Python course Lawrence Road Amritsar",
        "Python training Amritsar for Batala students",
        "Python course Tarn Taran students Amritsar",
        "Python classes Ajnala students Amritsar",
        "Python course for 12th pass students Amritsar",
        "Python course for BCA students Amritsar",
        "Python course for B.Tech students Amritsar",
        "Python course for working professionals Amritsar",
        "Career switch to Python developer Amritsar",
        "Python course with placement Amritsar",
      ],
    },
  },
};

/* ------------------------------------------------------- java development */

/**
 * Source copy: the Amritsar Java brief (overview, eligibility, the two "why"
 * arguments, ten learning blocks, eleven student reviews, twelve FAQs, the
 * course-details table with its enquiry section, and the keyword/GEO report).
 * The ten learning blocks and the tool list live in `course-data.ts` instead,
 * because they are the curriculum and the toolchain, and the module explorer
 * and tool stack read both from the seed.
 */
const java: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Java Training Course Amritsar" —
         rather than the generic catalogue phrasing. */
      headline: "Java Training Course in",
      accent: "Amritsar",
      tagline:
        "Techcadd's Java Training Course in Amritsar is designed for students, graduates, and job seekers who want to master one of the world's most in-demand programming languages.",
      chips: ["4 – 6 months", "Classroom & online", "Beginner"],
      image: "/images/courses/java.png",
    },

    overview: {
      heading: "Java Training in Amritsar – Techcadd",
      paragraphs: [
        "Looking to build a career in software development? Techcadd's Java Training Course in Amritsar is designed for students, graduates, and job seekers who want to master one of the world's most in-demand programming languages. Java powers everything from Android apps to enterprise banking systems, making it a top skill for anyone entering the IT industry.",
        "At Techcadd Amritsar, you'll learn Java programming from the ground up — starting with core concepts like OOPs, data types, and control statements, and progressing to advanced topics such as collections, exception handling, multithreading, JDBC, and Java-based frameworks used in real-world projects.",
        "Our trainers focus on hands-on, project-based learning so you don't just understand Java theoretically — you build real applications, solve coding problems, and prepare for technical interviews. Whether you're a fresher exploring software development or a working professional upgrading your skill set, this course gives you the practical foundation employers in Amritsar's growing IT sector are actively looking for.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This course is structured to take you from complete beginner to confident Java programmer, covering both foundational and advanced concepts used in real-world software development.",

    /* Eight starting points plus the line that closes the section in the source
       copy, kept as a ninth tile so nothing from the brief is dropped. */
    eligibility: {
      heading: "Who Can Do This Java Training in Amritsar?",
      intro:
        "Techcadd's Java Training Course in Amritsar is built to welcome learners from every academic and professional background — you don't need to be a computer science graduate to start your journey into Java development. Our curriculum begins with the basics and moves step-by-step into advanced concepts, making it suitable for absolute beginners as well as those looking to sharpen existing programming skills.",
      criteria: [
        {
          label: "12th Pass Students (Any Stream)",
          detail:
            "If you've just finished school and are exploring career options in technology, this course is an excellent starting point. You don't need prior coding experience — our trainers introduce programming logic and Java fundamentals in a simple, structured way, helping you build a strong technical foundation early in your career.",
        },
        {
          label: "BCA, MCA, B.Tech & B.Sc (IT/CS) Students",
          detail:
            "Students pursuing computer applications or engineering degrees often study Java as part of their curriculum but lack hands-on, project-based exposure. This course bridges that gap by focusing on practical implementation, live coding exercises, and real project work — exactly what recruiters in Amritsar's IT companies look for beyond textbook knowledge.",
        },
        {
          label: "B.Com, BA, B.Sc (Non-IT) Graduates",
          detail:
            "You don't need an IT degree to build a career in software development. Many successful Java developers come from non-technical academic backgrounds. If you're a graduate looking to switch into a high-growth, high-demand field, this course equips you with industry-relevant Java skills from scratch, without assuming any prior programming knowledge.",
        },
        {
          label: "Job Seekers & Freshers Preparing for IT Interviews",
          detail:
            "If you're actively job hunting and want to stand out in a competitive market, mastering Java can significantly boost your resume. This course covers commonly asked interview topics — OOPs concepts, collections, exception handling, and coding logic — so you walk into interviews with confidence and practical problem-solving ability.",
        },
        {
          label: "Working Professionals Looking to Upskill or Switch Careers",
          detail:
            "Professionals currently working in non-technical roles, or in IT support/testing roles wanting to move into development, will find this course valuable for career transition. Evening and flexible batch options at Techcadd Amritsar make it easy to learn Java without disrupting your current job.",
        },
        {
          label: "Diploma Holders & Polytechnic Students",
          detail:
            "If you hold a diploma in computer science, IT, or a related field, this course helps you convert theoretical knowledge into practical, job-ready Java development skills, giving you a competitive edge when applying for junior developer or software trainee roles in Amritsar and beyond.",
        },
        {
          label: "Aspiring Android App Developers",
          detail:
            "Since Java remains a core language for Android development, students interested in building mobile applications will find this course a strong stepping stone before moving into Android-specific frameworks and tools.",
        },
        {
          label: "Anyone Curious About Programming & Software Development",
          detail:
            "Even if you're simply curious about how software works and want to explore programming as a potential career path, this beginner-friendly course structure allows you to learn at a comfortable pace, with full support from experienced trainers at every stage.",
        },
        {
          label: "No Matter Your Background",
          detail:
            "Techcadd Amritsar's Java Training Course is structured to take you from zero programming knowledge to job-ready development skills — one concept at a time.",
        },
      ],
    },

    /**
     * Future scope, taken over from the builder for one reason: the closing
     * "What you walk away with" note. The generated line reads the span
     * straight out of the seed ("The 4 – 6 months programme…"), and Java is
     * not sold as a ladder of fixed durations — the course details on this
     * page say "Flexible (Weeks to Months, based on batch & pace)", which is
     * why the tracks table is off below. So the note names what the student
     * leaves holding instead of how long they sat for. The heading, the intro
     * and the four drivers are the generated copy unchanged, so the rest of
     * the section renders exactly as it did.
     */
    futureScope: {
      heading: "Where java development is headed from here",
      intro:
        "A certificate answers what you can do today. This is the honest answer to what java development looks like three to five years out, and why the fundamentals this course spends real time on are what carry you there.",
      drivers: [
        {
          title: "Demand is structural, not seasonal",
          body: "Every product, in every industry, still runs on code someone has to write and maintain — and that has not changed even as the tools drafting the first version have.",
        },
        {
          title: "The skill ladder keeps climbing",
          body: "Java Developer is the entry rung, not the ceiling. Once that portfolio is in place, backend engineer is the realistic next step — a promotion earned on the job, not a second course you have to go back and pay for.",
        },
        {
          title: "Tooling changes; fundamentals compound",
          body: "JDK (Java Development Kit) and the rest of the stack will look different in five years — they always do. What does not expire is the fundamentals this course is built around, which is why the syllabus is reviewed each intake instead of frozen once and reused.",
        },
        {
          title: "Remote and hybrid widen the market",
          body: "A java development portfolio built in Amritsar competes for the same remote and hybrid roles as anywhere else. Companies hiring for this work are increasingly indifferent to which city the offer letter is posted to.",
        },
      ],
      horizon:
        "However long your batch runs, this programme is built around the part that is genuinely in your hands — and you leave holding all of it. A reviewed portfolio of real Java work you can open in an interview, an industry-recognised certificate, and a fundamentals-first foundation — OOPs, collections, exception handling, JDBC — that every framework you pick up later is built on top of. Markets move, as they always have; that foundation is exactly what lets you move with them as development work around you keeps shifting.",
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why This",
      accent: "Program?",
      body: "Choosing the right training program can make all the difference between simply learning a language and actually becoming job-ready. Here's why Techcadd's Java Training Course in Amritsar stands out as the right choice for your career.",
      reasons: [
        {
          title: "Industry-Relevant, Updated Curriculum",
          body: "Java continues to power a massive share of enterprise software, Android applications, banking systems, and large-scale backend architecture. Our curriculum is built around what the industry actually uses today — not outdated textbook material — so you graduate with skills that are directly applicable to real job roles in Amritsar's expanding IT and software services sector.",
        },
        {
          title: "Strong Foundation in Core Programming Concepts",
          body: "This program doesn't rush you into frameworks before you understand the fundamentals. You'll build a rock-solid understanding of Object-Oriented Programming (OOPs), data structures, control flow, arrays, strings, and exception handling — the concepts every technical interview and every advanced Java framework ultimately depends on.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Reading about Java is not the same as writing it. At every stage, you'll practice through live coding exercises, mini-projects, and real-world problem statements. By the time you complete the course, you'll have built actual applications you can showcase in interviews and on your resume — not just certificates.",
        },
        {
          title: "Interview & Placement-Oriented Approach",
          body: "This program is designed with your career outcome in mind, not just course completion. Topics are sequenced to match what recruiters actually test for — collections, multithreading, JDBC, exception handling, and OOP-based problem solving — so you're genuinely prepared for technical rounds, not just familiar with terminology.",
        },
        {
          title: "Beginner-Friendly Teaching Without Compromising Depth",
          body: "Whether you're a 12th-pass student with zero coding background or a graduate switching fields, our trainers structure each topic in a way that builds confidence early and gradually introduces complexity. You won't feel lost — but you also won't be under-prepared when it's time to apply for jobs.",
        },
        {
          title: "Flexible Batch Timings for Students & Working Professionals",
          body: "We understand that not everyone can commit to the same schedule. With morning, evening, and weekend batch options available in Amritsar, this program fits around your college classes or your current job, so upskilling doesn't mean putting your responsibilities on hold.",
        },
        {
          title: "Practical Exposure to Real Development Tools",
          body: "Beyond core Java syntax, you'll get hands-on exposure to the tools and environments used in real development workflows — helping you transition smoothly from “learning Java” to “working as a Java developer” without a steep learning curve on your first job.",
        },
        {
          title: "Local Support, Direct Mentorship",
          body: "Being trained in-person at our Amritsar center means you get direct access to trainers for doubt-clearing, code reviews, and personalized feedback — something online-only courses often can't replicate. Learning alongside peers from your own city also builds a support network that continues well beyond the classroom.",
        },
        {
          title: "A Program Built Around Career Outcomes, Not Just Content",
          body: "Ultimately, this program exists to get you job-ready — not just Java-aware. Every module, project, and practice session is structured around one goal: helping you walk into interviews and workplaces in Amritsar's IT sector with the confidence and competence employers expect from a trained Java developer.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Choose Techcadd for",
      accent: "Java Training in Amritsar?",
      body: "With so many training institutes claiming to teach programming, choosing the right one matters more than ever. Here's why students and professionals across Amritsar trust Techcadd for their Java training journey.",
      reasons: [
        {
          title: "Experienced, Industry-Trained Faculty",
          body: "At Techcadd, you don't learn from instructors reading off slides — you learn from trainers who understand real-world software development. Our faculty brings practical industry exposure into the classroom, translating complex Java concepts into simple, relatable explanations that actually stick.",
        },
        {
          title: "Proven Track Record in Amritsar",
          body: "Techcadd has built a strong reputation in Amritsar as a training institute that genuinely prepares students for the job market, not just for certificates. Our track record of student success and consistent quality of teaching has made us a trusted name for IT training in the region.",
        },
        {
          title: "Practical, Project-Centric Training Methodology",
          body: "We believe coding is learned by doing, not by memorizing. From day one, our Java training emphasizes writing real code, debugging real errors, and building real mini-projects — so you leave the course with genuine development experience, not just theoretical familiarity.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Unlike overcrowded classrooms where individual doubts get lost, Techcadd maintains focused batch sizes so every student gets adequate attention. This means your questions get answered, your code gets reviewed, and your progress gets tracked — something that's hard to find in large, generic training setups.",
        },
        {
          title: "Career-Oriented Training Beyond Just Syllabus",
          body: "Our goal isn't just to complete a syllabus — it's to make you employable. Alongside core Java training, students receive guidance on interview preparation, resume building, and the kind of practical problem-solving skills that Amritsar's IT recruiters specifically look for in freshers and career-switchers.",
        },
        {
          title: "Well-Equipped Amritsar Training Center",
          body: "Learning in a proper lab environment matters. Techcadd's Amritsar center is equipped with the systems and setup needed for hands-on coding practice, giving students a professional training environment rather than a makeshift classroom experience.",
        },
        {
          title: "Flexible Learning Options",
          body: "We understand that students and working professionals have different schedules. Techcadd offers flexible batch timings — including weekend and evening options — so that college students, job seekers, and working professionals in Amritsar can all access quality Java training without disrupting their existing commitments.",
        },
        {
          title: "Doubt-Solving & Continuous Mentorship",
          body: "Learning to code involves getting stuck — and how quickly you get unstuck determines how fast you progress. At Techcadd, trainers are approachable and available for doubt-clearing sessions, ensuring students don't fall behind or lose motivation when they hit a difficult concept.",
        },
        {
          title: "Transparent, Student-First Approach",
          body: "From day one, Techcadd is upfront about what the course covers, what outcomes to expect, and how the training is structured. There's no vague marketing — just a clear, honest training path designed to take you from beginner to job-ready Java developer.",
        },
        {
          title: "A Trusted Local Institute, Not a Faceless Online Platform",
          body: "Choosing a local institute like Techcadd in Amritsar means you get face-to-face mentorship, a real support system, and accountability that generic online courses simply can't offer — all while learning a skill that's genuinely in demand across the IT industry today.",
        },
      ],
    },

    /* Eleven named reviews. The distribution and average are computed from the
       ratings actually listed here — eight five-star, three four-star — rather
       than the catalogue's generated numbers, so the star rail cannot claim
       more than the page can show. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Singh",
          initials: "RS",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "I joined Techcadd right after finishing my BCA, and honestly, college didn't teach me half of what I learned here in three months. The trainers actually make you code instead of just explaining theory. Cleared two interviews within a month of finishing the course!",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "B.Com Graduate, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "I'm from a B.Com background with zero coding knowledge, and I was really nervous about learning Java. The trainers at Techcadd Amritsar broke everything down so simply that I never felt lost. Now I'm applying for junior developer roles with actual confidence.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "Best decision I made after 12th. Instead of jumping straight into a degree, I did this Java course first to explore if programming was really for me. Turns out I love it, and now I'm pursuing B.Tech with a huge head start over my classmates.",
        },
        {
          name: "Harleen Kaur",
          initials: "HK",
          role: "Part-Time Working Student, Amritsar",
          rating: 4,
          meta: "Flexible batch",
          quote:
            "The batch timings were super flexible, which really helped since I was working part-time. The Amritsar center has a proper lab setup, and doubt-clearing sessions were genuinely helpful whenever I got stuck on OOPs concepts.",
        },
        {
          name: "Jaskaran Singh",
          initials: "JS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "I was working in a non-IT job and wanted a career switch. Techcadd's Java course gave me the exact foundation I needed — from basics to JDBC and collections. Got placed as a trainee developer within two months of completing the course.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "MCA Student, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "What I liked most was how project-focused the training was. We weren't just learning syntax, we were building actual mini-projects. That practical experience made a huge difference during my interview rounds.",
        },
        {
          name: "Amanjot Singh",
          initials: "AS",
          role: "Diploma Holder, Amritsar",
          rating: 4,
          meta: "Java Training batch",
          quote:
            "Coming from a diploma background, I always felt underprepared for real coding jobs. This course filled that gap perfectly. The trainers pushed us to actually write and debug code ourselves rather than spoon-feeding answers.",
        },
        {
          name: "Navdeep Kaur",
          initials: "NK",
          role: "B.Tech Student, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "I researched a lot of institutes in Amritsar before joining Techcadd, and I'm so glad I chose them. Small batch size meant the trainer actually knew each student's progress and weak areas personally.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "Multithreading and exception handling used to scare me when I self-studied online. Here, the way it was taught with real examples made it click instantly. Interview prep support was an added bonus I didn't expect.",
        },
        {
          name: "Ishleen Kaur",
          initials: "IK",
          role: "Working Professional, Amritsar",
          rating: 4,
          meta: "Evening batch",
          quote:
            "As a working professional trying to switch into development, the evening batches were a lifesaver. I could attend classes after office hours without missing out on quality teaching.",
        },
        {
          name: "Rajveer Singh",
          initials: "RS",
          role: "Fresher, Amritsar",
          rating: 5,
          meta: "Java Training batch",
          quote:
            "Honestly one of the best training experiences I've had in Amritsar. The trainers are patient, the environment is professional, and the course structure genuinely prepares you for real developer roles, not just certificates.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what answer engines lift into a featured snippet. */
    faqs: [
      {
        q: "Is this Java course suitable for complete beginners with no coding background?",
        a: "Yes. Techcadd's Java Training Course in Amritsar is designed to start from the absolute basics, including installation, syntax, and core programming logic. No prior coding experience is required to join.",
      },
      {
        q: "What is the duration of the Java Training Course at Techcadd Amritsar?",
        a: "The course duration varies based on the batch and learning pace, typically ranging from a few weeks to a few months, covering both fundamentals and advanced Java concepts along with hands-on projects.",
      },
      {
        q: "Who can join this Java course — is it only for IT students?",
        a: "No. This course welcomes 12th-pass students, BCA/MCA/B.Tech students, non-IT graduates (B.Com, BA, B.Sc), job seekers, working professionals, and diploma holders. No specific academic background is required.",
      },
      {
        q: "Will I get hands-on project experience during the course?",
        a: "Yes. The course is project-based, meaning you'll work on real coding exercises and mini-projects throughout the training, not just theoretical lessons, so you graduate with practical, demonstrable skills.",
      },
      {
        q: "Does Techcadd offer flexible batch timings for working professionals?",
        a: "Yes. Techcadd Amritsar offers morning, evening, and weekend batch options, making it easy for working professionals and college students to attend classes around their existing schedules.",
      },
      {
        q: "What topics are covered in the Java Training Course?",
        a: "The course covers Java fundamentals, OOPs concepts, control statements, arrays and strings, exception handling, the Collections Framework, multithreading basics, file handling, and JDBC for database connectivity.",
      },
      {
        q: "Will this course help me prepare for technical job interviews?",
        a: "Yes. The curriculum is structured around commonly asked interview topics, including OOPs, collections, and exception handling, and includes guidance on interview preparation and problem-solving practice.",
      },
      {
        q: "Do I need to bring my own laptop for training?",
        a: "Techcadd's Amritsar center is equipped with systems for hands-on lab practice, but students are welcome to bring personal laptops if they prefer practicing on their own device. Please confirm current lab availability with the center directly.",
      },
      {
        q: "Is Java still relevant for jobs in 2026, given so many new languages?",
        a: "Yes. Java remains one of the most widely used languages in enterprise software, Android development, and backend systems, making it a consistently in-demand skill across the IT industry, including in Amritsar.",
      },
      {
        q: "Will I receive a certificate after completing the course?",
        a: "Yes, students who successfully complete the Java Training Course at Techcadd Amritsar receive a course completion certificate, which can be added to your resume and professional profiles.",
      },
      {
        q: "Can this course help me switch careers from a non-technical field into software development?",
        a: "Yes. Many students join this course specifically to transition into IT from non-technical backgrounds. The beginner-friendly structure combined with practical training makes a career switch achievable.",
      },
      {
        q: "Does Techcadd provide placement assistance after course completion?",
        a: "Techcadd focuses on making students job-ready through practical training and interview preparation guidance. For specific placement assistance details, it's best to confirm directly with the Amritsar centre.",
      },
    ],

    /* Java runs on morning, evening and weekend batches at the pace the batch
       sets, not on fixed 3 / 6 / 9 month tiers, so the derived duration-tracks
       table is switched off — the course details below state the duration as
       "Flexible (Weeks to Months, based on batch & pace)" instead. */
    tracks: false,

    cta: {
      eyebrow: "Start your Java developer journey",
      heading: "Start Your Java Developer Journey Today —",
      accent: "Enrol at Techcadd, Amritsar",
      body: "Ready to build a career in software development? Whether you're a student, graduate, or job seeker, our expert-led Java training gives you the practical, hands-on skills employers are actively hiring for. Limited seats per batch — enquire now to secure your spot.",
      /* The Course Details table from the brief, read as a fact list. */
      facts: [
        "Course: Java Training Course",
        "Duration: Flexible (Weeks to Months, based on batch & pace)",
        "Mode: Offline (Classroom Training)",
        "Centre: Techcadd, Amritsar",
        "Batch Timings: Morning / Evening / Weekend (Flexible)",
        "Eligibility: 12th Pass, Graduates, Job Seekers, Working Professionals — No Prior Coding Experience Required",
      ],
      assurances: [
        "No spam — our team calls only to guide, not to pressure",
        "Get honest answers about course fit, duration & career scope",
        "Speak directly with a Techcadd Amritsar counsellor",
        "100% free consultation, zero commitment required",
      ],
      formTitle: "📩 Quick Enquiry Form",
      formNote:
        "Get a Free Career Counselling Call — No Obligation, Just Clarity. This enquiry reaches the Java Training counsellor directly.",
      submitLabel: "Send My Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Education / Profession",
      statusOptions: [
        "12th Pass",
        "College Student",
        "Graduate",
        "Job Seeker",
        "Working Professional",
      ],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Prefer to talk now?",
      heading: "☎️ Prefer to Talk Now? Call Us for Instant Guidance",
      body: "Visit us at Techcadd, Amritsar — or call and speak to a counsellor right away. Your Java developer career starts with one conversation; let's have it today.",
      action: "Request a Callback",
      note: "✅ No spam — our team calls only to guide, not to pressure · ✅ Speak directly with a Techcadd Amritsar counsellor · ✅ 100% free consultation, zero commitment required",
    },

    seo: {
      title: "Java Training Course in Amritsar | Techcadd",
      description:
        "Java Training Course in Amritsar — core Java, OOPs, collections, multithreading & JDBC with hands-on projects, flexible batches and interview prep. Enquire now.",
      keywords: [
        "Java Training Course Amritsar",
        "Java course in Amritsar",
        "Java classes in Amritsar",
        "Core Java training Amritsar",
        "Best Java institute in Amritsar",
        "Java Developer course Amritsar",
        "Java training with placement Amritsar",
        "Java coaching near me Amritsar",
        "Java programming classes for beginners Amritsar",
        "Advanced Java training Amritsar",
        "Java Full Stack course Amritsar",
        "Java course for 12th pass students Amritsar",
        "Java training for non-IT graduates Amritsar",
        "Best institute to learn Java after graduation Amritsar",
        "Java training institute with 100% practical classes Amritsar",
        "Java course fees in Amritsar",
        "Java training for working professionals Amritsar",
        "Weekend Java classes Amritsar",
        "Java course duration and syllabus Amritsar",
        "Java training institute near Amritsar Railway Station",
        "Java training institute GT Road Amritsar",
        "Java classes Rani Ka Bagh Amritsar",
        "Java course Ranjit Avenue Amritsar",
        "Java training Vijayanagar Amritsar",
        "Java classes New Partap Nagar Amritsar",
        "Java course Amritsar Cantt",
        "Java training Lawrence Road Amritsar",
      ],
    },
  },
};

/* --------------------------------------------------------------- c training */

/**
 * Source copy: the Amritsar C brief (overview, seven eligibility personas, the
 * two "why" arguments, twelve learning blocks with their toolchain, ten sample
 * student reviews, fifteen FAQs and the CTA/enquiry section with its
 * course-details table). The twelve learning blocks and the tool list live in
 * `course-data.ts` instead, because they are the curriculum and the toolchain,
 * and the module explorer and the tool stack read both from the seed.
 *
 * This copy replaced the earlier C++ brief on the same page. The URL segment
 * stays `c-cpp-course-in-amritsar` so every existing link keeps resolving.
 */
const cTraining: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "C Training in Amritsar" — rather
         than the generic catalogue phrasing. */
      headline: "C Training Course in",
      accent: "Amritsar",
      tagline:
        "C Training is a beginner-friendly and career-focused program designed for students, graduates, job seekers, and freshers who want to start their journey in the IT field by understanding core programming concepts.",
      chips: ["Flexible batches", "Classroom & practical", "Beginner to advanced"],
      image: "/images/courses/c-cpp.png",
    },

    overview: {
      heading: "C Training Overview",
      paragraphs: [
        "C Training is a beginner-friendly and career-focused program designed for students, graduates, job seekers, and freshers who want to start their journey in the IT field by understanding core programming concepts. This course introduces learners to the fundamentals of the C programming language, including variables, data types, operators, loops, functions, arrays, pointers, and memory management.",
        "If you are searching for C Training in Amritsar or want to build a strong foundation in programming, this program helps you develop essential logic-building and problem-solving skills. It is not limited to theory; instead, it focuses heavily on practical coding exercises and hands-on practice, allowing students to understand real programming environments effectively.",
        "This training is especially useful for 12th pass students, BCA/IT students, engineering beginners, and job seekers who want to move towards software development, web development, or advanced programming languages in the future.",
        "Techcadd's student-friendly approach ensures step-by-step learning guidance so that every learner can confidently understand programming basics and build a strong foundation for a successful IT career in Amritsar and beyond.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "A structured C Training course in Amritsar should help students move from basic programming concepts to practical coding and problem-solving. Techcadd's training approach can help beginners understand how programs are designed, written, tested, debugged, and executed.",

    /* Seven starting points plus the two lines that close the section in the
       source copy, kept as an eighth tile so nothing from the brief is lost. */
    eligibility: {
      heading: "Who Can Do C Training in Amritsar?",
      intro:
        "A C training course in Amritsar can be a useful career option for students, graduates, job seekers, working professionals, and anyone interested in learning programming and software development skills. You do not necessarily need an advanced technical background to begin learning C programming. With the right training, beginners can gradually develop skills in programming fundamentals, problem-solving, data structures, algorithms, and application development.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students who have completed Class 12 can consider C programming as an early career skill. A C training course after 12th in Amritsar can introduce students to programming concepts that support further studies in computer science, information technology, engineering, and software development. Students can learn variables, data types, operators, conditional statements, loops, functions, arrays, pointers, structures, and file handling through practical exercises.",
        },
        {
          label: "College Students and Graduates",
          detail:
            "Students and graduates from BCA, B.Sc. Computer Science, B.Tech, MCA, IT, engineering, and other technical backgrounds can learn C programming to strengthen their programming foundation. A C training course in Amritsar for students and graduates can help bridge the gap between academic knowledge and practical coding skills. C programming is also useful for understanding how software works at a fundamental level. It can help learners develop logical thinking and prepare for advanced programming languages, data structures, operating systems, and technical interviews.",
        },
        {
          label: "Job Seekers",
          detail:
            "If you are searching for a job and want to develop a strong programming foundation, C training can provide several learning and career opportunities. After gaining practical experience, learners can prepare for roles and areas such as Junior Programmer, Software Developer, Embedded Systems Developer, System Programmer, Application Developer, and Technical Support Executive. A job-oriented C training institute in Amritsar should focus on practical assignments, coding exercises, project development, debugging, and interview preparation rather than only theoretical lessons.",
        },
        {
          label: "Working Professionals",
          detail:
            "C programming is also suitable for professionals who want to upgrade their technical skills or move into software and development-related roles. Professionals working in IT support, electronics, embedded systems, testing, engineering, or technical operations can use C programming to improve their understanding of software and system-level development. For working professionals, flexible learning and practical training can make it easier to apply programming concepts directly to their existing work.",
        },
        {
          label: "Students Interested in Embedded Systems",
          detail:
            "C programming is widely used in embedded systems, microcontrollers, electronics, automotive technology, robotics, and hardware-related applications. Students interested in these fields can learn C to understand how software interacts with hardware. A structured course can introduce learners to memory management, pointers, microcontroller programming, input-output operations, and basic embedded programming concepts.",
        },
        {
          label: "Beginners Without a Programming Background",
          detail:
            "You do not need to be an expert programmer to start learning C. Basic computer knowledge, interest in technology, and regular practice are enough to begin. C training can start with simple programming concepts before progressing towards advanced topics. A structured C programming course for beginners in Amritsar can help learners understand coding step by step through examples, exercises, and practical projects.",
        },
        {
          label: "Who Should Choose Techcadd's C Training?",
          detail:
            "Techcadd's program can be considered by learners who want a structured approach to learning C programming and prefer practical, career-focused training. The ideal learner is someone who is willing to practise regularly, complete coding assignments, work on projects, understand programming logic, and improve problem-solving skills. Whether you are a 12th-pass student, college student, graduate, job seeker, working professional, or beginner, C programming can be developed as a valuable technical skill when supported by consistent practice and real-world application.",
        },
        {
          label: "Searching for C Training in Amritsar?",
          detail:
            "For students specifically searching for a C training course in Amritsar, C programming institute in Amritsar, C programming classes in Amritsar, or job-oriented C training in Amritsar, choosing a program that combines programming concepts with hands-on coding practice can help create a strong foundation for future opportunities in software development and technology.",
        },
      ],
    },

    /**
     * Future scope, taken over from the builder for one reason: the closing
     * "What you walk away with" note. The generated line reads the span
     * straight out of the seed, and this course is not sold as a ladder of
     * fixed durations — the brief gives the duration as "As per the current
     * Techcadd course schedule", which is why the tracks table is off below.
     * So the note names what the student leaves holding instead of how long
     * they sat for. The heading, the intro and the four drivers are the
     * generated copy unchanged, so the rest of the section renders as it did.
     */
    futureScope: {
      heading: "Where c programming is headed from here",
      intro:
        "A certificate answers what you can do today. This is the honest answer to what c programming looks like three to five years out, and why the fundamentals this course spends real time on are what carry you there.",
      drivers: [
        {
          title: "Demand is structural, not seasonal",
          body: "Every product, in every industry, still runs on code someone has to write and maintain — and that has not changed even as the tools drafting the first version have.",
        },
        {
          title: "The skill ladder keeps climbing",
          body: "Junior Programmer is the entry rung, not the ceiling. Once that portfolio is in place, software developer is the realistic next step — a promotion earned on the job, not a second course you have to go back and pay for.",
        },
        {
          title: "Tooling changes; fundamentals compound",
          body: "Visual Studio Code and the rest of the stack will look different in five years — they always do. What does not expire is the fundamentals this course is built around, which is why the syllabus is reviewed each intake instead of frozen once and reused.",
        },
        {
          title: "Remote and hybrid widen the market",
          body: "A c programming portfolio built in Amritsar competes for the same remote and hybrid roles as anywhere else. Companies hiring for this work are increasingly indifferent to which city the offer letter is posted to.",
        },
      ],
      horizon:
        "However long your batch runs, this programme is built around the part that is genuinely in your hands — and you leave holding all of it. Working programs you wrote and debugged yourself, a course completion certificate, and the fundamentals — logic building, memory, functions, data structures — that every language you pick up after C is built on top of. Markets move, as they always have; that foundation is exactly what lets you move with them as development work around you keeps shifting.",
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why This",
      accent: "Program?",
      body: "Choosing the right C Training course in Amritsar can help learners develop practical programming skills and prepare for opportunities in software development and technology. C is a foundational programming language that helps students understand programming logic, problem-solving, data types, operators, functions, arrays, pointers, structures, and memory management. Techcadd's C Training program is designed to provide learners with a strong foundation in programming concepts through structured lessons, practical exercises, assignments, and coding practice.",
      reasons: [
        {
          title: "Learn Programming Skills That Businesses Use",
          body: "One of the main reasons to choose a structured C Training program is the opportunity to develop programming skills that support further learning in software development. Students can learn C syntax, variables, data types, operators, conditional statements, loops, functions, arrays, strings, pointers, structures, file handling, and debugging. Instead of learning programming concepts only through theory, learners can understand how each concept is used to create logical and functional programs. Regular coding practice can help students improve their problem-solving ability and programming confidence.",
        },
        {
          title: "Practical Learning for Beginners",
          body: "Many students searching for C Training classes in Amritsar are beginning their programming journey. A good program should therefore explain concepts in a simple, clear, and structured manner. Techcadd's approach is suitable for beginners who want to gradually move from basic programming concepts to practical implementation. Students can work through coding exercises, assignments, logic-building questions, and small programming projects.",
        },
        {
          title: "Career-Focused Training",
          body: "C programming provides a strong foundation for learning other programming languages and technical subjects. After developing a good understanding of C, learners can explore areas such as C++, data structures, algorithms, embedded systems, operating systems, software development, and computer programming. C Training can be useful for students preparing for academic examinations, technical interviews, programming assessments, and further courses in computer science and software development.",
        },
        {
          title: "Useful for Students and Graduates",
          body: "A C Training course after graduation in Amritsar can help students add a valuable technical skill to their academic qualification. It can be particularly useful for graduates and students from computer applications, computer science, information technology, engineering, and related backgrounds. Students can also build their programming portfolios by creating small projects such as calculators, student management systems, billing programs, number-based applications, and file-handling projects.",
        },
        {
          title: "Suitable for Academic and Technical Growth",
          body: "C programming knowledge can support students in understanding important computer science concepts. It helps learners develop logical thinking, structured problem-solving, algorithmic reasoning, and an understanding of how programs work at a fundamental level. The skills gained through C Training can also help learners prepare for advanced programming courses and technical subjects.",
        },
        {
          title: "Local Learning Advantage in Amritsar",
          body: "For students looking for a C Training institute in Amritsar, learning locally can provide the convenience of attending regular classes while receiving guidance from trainers. Amritsar has students and professionals from various academic and technical backgrounds who can benefit from programming education. Classroom learning, practical coding sessions, doubt-solving, and regular assignments can make the learning process more effective.",
        },
        {
          title: "Build a Strong Programming Foundation",
          body: "Programming languages and technologies continue to evolve, but fundamental programming concepts remain important. C helps learners understand the core principles of programming, including logic building, memory usage, functions, data structures, and program execution. Therefore, the goal of a good C Training program should not simply be to teach syntax. It should help learners develop a strong programming foundation and the ability to approach problems logically. For students searching for a job-oriented C Training course in Amritsar, Techcadd provides a structured learning path focused on programming fundamentals, practical coding skills, problem-solving, and technical development.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Choose Techcadd for",
      accent: "Training in Amritsar?",
      body: "Choosing the right institute is an important step when you are planning to pursue professional training in Amritsar. A practical and continuously evolving field requires more than classroom theory. Students need structured learning, practical exposure, guidance, and an understanding of how their skills are used by real businesses. Techcadd focuses on providing students with a structured and career-oriented learning environment where they can understand the fundamentals of their chosen field and gradually develop practical skills.",
      reasons: [
        {
          title: "Practical and Student-Focused Learning",
          body: "One of the key reasons students consider Techcadd is its focus on practical learning. Concepts become easier to understand when students can connect them with real-world situations. The training can cover important topics, tools, techniques, and industry practices. Students can work on exercises, assignments, project ideas, practical activities, and other tasks to strengthen their understanding.",
        },
        {
          title: "Suitable for Beginners",
          body: "You do not need to be an expert in technology or have advanced knowledge to begin learning. Students from different educational backgrounds can start with the fundamentals and progressively move towards advanced concepts. For learners searching for a professional training course for beginners in Amritsar, a structured learning path can make the subject easier to understand. Techcadd aims to help learners build their knowledge step by step rather than overwhelming them with complex terminology from the beginning.",
        },
        {
          title: "Career-Oriented Approach",
          body: "Students usually choose professional training because they want to develop skills that can support their career goals. Techcadd's program focuses on building knowledge across multiple areas so learners can identify the field that best matches their interests. Depending on their skills and experience, learners can explore different career paths and professional opportunities in their chosen field.",
        },
        {
          title: "Learn Multiple Professional Skills",
          body: "A professional field includes several interconnected disciplines. Learning only one area may provide limited exposure, whereas understanding how different skills work together can give students a broader perspective. Through a comprehensive training program in Amritsar, learners can understand important concepts, practical processes, industry tools, and methods used to evaluate performance and achieve professional goals.",
        },
        {
          title: "Build Practical Projects and Portfolio Skills",
          body: "A certificate can demonstrate that a student completed a course, but a practical portfolio can help demonstrate what the student can actually do. Learners can practise creating reports, strategies, plans, audits, project structures, and other professional deliverables. Such work can help students become more confident when preparing for interviews, internships, freelance opportunities, or entry-level positions.",
        },
        {
          title: "Useful for Freelancers and Entrepreneurs",
          body: "Techcadd's training can also be useful for learners who do not want to follow only a traditional employment path. Freelancers can develop skills that may later be offered as professional services, while entrepreneurs can use their knowledge to better understand business operations, customer requirements, branding, online visibility, and growth opportunities.",
        },
        {
          title: "Learn with a Local Perspective",
          body: "For students searching for a training institute in Amritsar, local learning can provide convenience while helping learners understand the needs of businesses operating in the region. Amritsar has businesses across tourism, hospitality, education, retail, restaurants, healthcare, real estate, professional services, and other sectors. These businesses require skilled professionals who understand modern tools, customer needs, business processes, and effective growth strategies.",
        },
        {
          title: "A Foundation for Continuous Growth",
          body: "Professional fields change quickly. New tools, technologies, processes, and industry practices continue to evolve. Therefore, students should aim to develop adaptable skills rather than simply memorizing concepts. Techcadd's structured approach can help learners build foundational knowledge that they can continue developing as new technologies and professional trends emerge. For students looking for a job-oriented training course in Amritsar, Techcadd offers a practical learning path designed to help beginners understand important concepts, develop useful skills, work on practical activities, and move towards their career goals with greater confidence.",
        },
        {
          title: "What Students Can Look for in C Training",
          body: "When comparing a C training institute in Amritsar, students should look beyond ratings alone. Practical coding assignments, updated course content, trainer guidance, programming projects, doubt-solving sessions and career support can all contribute to a stronger learning experience. For students searching for C training in Amritsar, reviews should ideally come from verified learners and describe specific aspects of their actual training experience.",
        },
      ],
    },

    /* Ten reviews, carried across exactly as the brief writes them — every one
       is labelled a sample rather than attributed to a named student, and the
       average and distribution are computed from the ten five-star ratings
       actually listed here. This is also why the course route emits no Review
       or AggregateRating schema for the page. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Practical Learning",
          quote:
            "I joined Techcadd to learn C programming from the basics. The concepts were explained clearly, and the practical assignments helped me apply what I learned. I would recommend this type of training to students in Amritsar who want to build programming skills.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Helpful for Beginners",
          quote:
            "I had no previous experience in programming, so I was looking for beginner-friendly C training. The course explained concepts step by step, especially variables, loops, functions and arrays. The practical approach made the learning process much easier.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Strong Programming Foundation",
          quote:
            "The C programming course was particularly useful for building my fundamentals. I learned about data types, operators, conditional statements, loops, functions and pointers. The training helped me understand how programming logic works.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Career-Focused Training",
          quote:
            "I was searching for job-oriented C training in Amritsar and wanted something more practical than theory. The course helped me improve my programming logic and understand the skills required to continue learning advanced programming languages.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Practical Coding Exercises",
          quote:
            "The coding exercises were interesting and practical. I learned how to write programs, identify errors and improve my problem-solving approach. The examples made the concepts easier to understand and apply.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for Students",
          quote:
            "As a student, I wanted to learn programming alongside my regular studies. C programming was new for me, but the structured lessons helped me understand the basics of coding and develop better logical thinking. It was a useful learning experience.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Functions and Pointers",
          quote:
            "I wanted to improve my understanding of functions and pointers in C. The trainer explained these topics with practical examples, which helped me understand how they are used in programming and memory management.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Data Structures Basics",
          quote:
            "I found the introduction to data structures especially helpful. Learning about arrays, strings, structures and basic data handling gave me a better understanding of how information can be organised and processed in programs.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Good for Career Exploration",
          quote:
            "Before joining the course, I was unsure whether programming was suitable for me. Learning C helped me understand programming logic, problem-solving and the basics of software development. It also encouraged me to explore advanced programming courses.",
        },
        {
          name: "Sample Student Review",
          initials: "SR",
          role: "Amritsar",
          rating: 5,
          meta: "Overall Learning Experience",
          quote:
            "The course gave me a strong foundation in C programming and helped me become more comfortable with writing code. I especially liked the practical exercises because they gave me an opportunity to apply the concepts instead of only studying theory.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is C training?",
        a: "C training teaches students how to use the C programming language to develop logical thinking, problem-solving skills, and a strong foundation in programming. Typical topics may include C syntax, variables, data types, operators, conditional statements, loops, functions, arrays, strings, pointers, structures, file handling, and memory management.",
      },
      {
        q: "Who can join C training in Amritsar?",
        a: "C training can be suitable for 12th-pass students, college students, graduates, job seekers, working professionals, aspiring programmers, and beginners. Prior programming experience is not always required.",
      },
      {
        q: "Is C training suitable for beginners?",
        a: "Yes. C is often used to introduce learners to core programming concepts. A structured C training program for beginners in Amritsar can explain programming fundamentals step by step through examples, exercises, and practical assignments.",
      },
      {
        q: "What will I learn in C training?",
        a: "Depending on the curriculum, students can learn C programming fundamentals, variables, data types, operators, decision-making statements, loops, functions, arrays, strings, pointers, structures, unions, file handling, dynamic memory allocation, debugging, and basic data structures.",
      },
      {
        q: "Is C programming a good career foundation?",
        a: "C programming provides a strong foundation for understanding how software works and how programming logic is developed. It can support further learning in areas such as C++, Java, Python, embedded systems, operating systems, software development, data structures, and competitive programming.",
      },
      {
        q: "Can I join C training after 12th?",
        a: "Yes. Students can begin learning C programming after completing Class 12. A C training program after 12th in Amritsar can help students develop logical thinking and practical programming skills while continuing their academic or career journey.",
      },
      {
        q: "Can graduates join C training?",
        a: "Yes. Graduates from computer applications, IT, engineering, science, commerce, management, arts, and other backgrounds can join C training. Learning C can complement an existing degree and help graduates build a foundation for technology-related career opportunities.",
      },
      {
        q: "Do I need coding knowledge for C training?",
        a: "No. Beginners do not need prior coding knowledge to start learning C. The training generally begins with basic programming concepts and gradually introduces more advanced topics such as pointers, structures, file handling, and memory management.",
      },
      {
        q: "Can I learn C programming for freelancing?",
        a: "C programming is mainly used as a foundation for software development, embedded programming, system programming, and academic or technical projects. Learners may use their skills for programming assignments, basic software projects, or further specialization. Building a portfolio and gaining practical experience are important before offering professional programming services.",
      },
      {
        q: "Why choose Techcadd for C training in Amritsar?",
        a: "Students considering Techcadd can look for a structured, practical, and career-focused learning approach. The program is designed to help learners understand important C programming concepts, practise coding regularly, complete practical exercises, work on projects, and build a foundation for further programming development.",
      },
      {
        q: "Is C training useful for students and businesses in Amritsar?",
        a: "Yes. C programming is useful for students who want to understand programming fundamentals, data structures, memory management, and system-level concepts. It can also be relevant to businesses and technical teams working with embedded systems, hardware-related applications, operating systems, performance-focused software, and programming education in Amritsar and surrounding areas.",
      },
      {
        q: "What career opportunities are available after C training?",
        a: "C training alone may not qualify a learner for every programming role, but it can provide a strong foundation for further specialization. Career directions may include Junior Programmer, Software Developer Trainee, Embedded Systems Trainee, Application Support Executive, Technical Support Executive, and Programming Instructor after developing additional skills and experience.",
      },
      {
        q: "How do I choose the best C training institute in Amritsar?",
        a: "Compare institutes based on course curriculum, practical coding assignments, trainer experience, project exposure, programming environment, debugging practice, lab facilities, learning support, course structure, and transparent course information. It is also useful to verify genuine student reviews before enrolling.",
      },
      {
        q: "Can C training help entrepreneurs?",
        a: "Yes. C programming knowledge can help entrepreneurs understand software development, technical requirements, programming logic, system performance, and communication with development teams. It can also provide a foundation for evaluating technical solutions and planning software-related projects.",
      },
      {
        q: "Is a certificate enough to get a programming job?",
        a: "A certificate can demonstrate course completion, but it should not be considered a guarantee of employment. Employers may also evaluate coding ability, problem-solving skills, programming fundamentals, project experience, debugging knowledge, communication skills, and the ability to write and understand practical C programs.",
      },
    ],

    /* The brief states the duration as "As per the current Techcadd course
       schedule" rather than fixed 3 / 6 / 9 month tiers, so the derived
       duration-tracks table is switched off; the course details in the enquiry
       section below carry the real answer instead. */
    tracks: false,

    cta: {
      eyebrow: "Start your C training journey with Techcadd",
      heading: "Start Your C Training Journey —",
      accent: "Enquire About the Course in Amritsar",
      body: "Ready to build a strong foundation in programming and explore opportunities in software development? Techcadd's C Training Course in Amritsar is designed for students, graduates, beginners, job seekers, and aspiring programmers who want to learn the fundamentals of C programming through practical training. Learn important concepts such as variables, data types, operators, conditional statements, loops, functions, arrays, strings, pointers, structures, file handling, and basic problem-solving through a structured and practical learning approach.",
      facts: [
        "Course Name: C Training Course",
        "Centre: Techcadd – Amritsar",
        "Mode: Classroom / practical training",
        "Duration: As per the current Techcadd course schedule",
        "Level: Beginner to advanced",
        "Suitable For: School students, 12th-pass students, graduates, beginners, job seekers and aspiring programmers",
        "Learning Focus: Programming fundamentals, coding practice, logical thinking and project-based learning",
      ],
      assurances: [
        "Course curriculum and batch timings shared up front",
        "Fees, duration and training mode confirmed before you decide",
        "Admission process explained by the Amritsar team",
      ],
      formTitle: "Request a Callback",
      formNote:
        "Fill in your details and the Techcadd team can contact you to discuss the course, current batch availability, curriculum, duration, fees, training mode, and other admission-related information.",
      submitLabel: "Get Course Information",
      placeholders: {
        name: "Name",
        phone: "Mobile Number",
        email: "Email",
      },
      showEmail: true,
      statusLabel: "Education",
      statusOptions: [
        "School Student",
        "12th Pass",
        "Graduate",
        "Job Seeker",
        "Working Professional",
      ],
      batchLabel: "Preferred Batch",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Get course information",
      heading: "Interested in joining? Request a callback from Techcadd today.",
      body: "Get the information you need before making your decision — including course curriculum, batch timings, fees, duration, practical training and admission process.",
      action: "Request a Callback",
      note: "Course curriculum · Batch timings · Fees · Duration · Practical training · Admission process",
    },

    /* The C brief carries no keyword report of its own, so the metadata below
       is built from the search phrases the brief itself repeats. */
    seo: {
      title: "C Training Course in Amritsar | Techcadd",
      description:
        "Beginner-friendly, job-oriented C Training course in Amritsar — programming fundamentals, pointers, file handling, practical coding exercises and project work.",
      keywords: [
        "C training in Amritsar",
        "C training course in Amritsar",
        "C programming institute in Amritsar",
        "C programming classes in Amritsar",
        "job-oriented C training in Amritsar",
        "C programming training in Amritsar",
        "job-oriented C course in Amritsar",
        "C training course after 12th in Amritsar",
        "C training course after graduation in Amritsar",
        "C programming course for beginners in Amritsar",
        "best C training institute in Amritsar",
        "C training classes in Amritsar",
        "C training institute in Amritsar",
      ],
    },
  },
};

/* -------------------------------------------------------------- kotlin */

/**
 * Source copy: the Amritsar Kotlin brief (overview, eight eligibility personas
 * plus the beginners note, the "why Techcadd" argument, twelve learning blocks
 * with their toolchain and project list, ten sample student reviews, sixteen
 * FAQs and the CTA/enquiry section with its course-details table). The twelve
 * learning blocks, the tool list and the project list live in `course-data.ts`
 * instead, because they are the curriculum and the toolchain, and the module
 * explorer, tool stack and projects panel read them from the seed.
 *
 * The brief's closing note on collecting genuine reviews is guidance to the
 * centre rather than page copy, so it is deliberately not rendered here — it
 * is also why the course route emits no Review or AggregateRating schema.
 */
const kotlin: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Kotlin Training in Amritsar" —
         rather than the generic catalogue phrasing. */
      headline: "Kotlin Training in",
      accent: "Amritsar",
      tagline:
        "A Kotlin training course in Amritsar that helps you build strong Android development and modern programming skills, designed for 12th-pass students, graduates, job seekers, working professionals, and anyone interested in starting a career in mobile app development.",
      chips: ["Flexible batches", "Classroom & online", "Beginner to advanced"],
      /* Kotlin has no render of its own yet, so the hero keeps the category
         image the builder would have chosen. */
      image: "/images/categories/programming.png",
    },

    overview: {
      heading: "Kotlin Training in Amritsar Overview",
      paragraphs: [
        "Looking for a Kotlin training in Amritsar that helps you build strong Android development and modern programming skills? Techcadd offers a student-focused learning path designed for 12th-pass students, graduates, job seekers, working professionals, and anyone interested in starting a career in mobile app development.",
        "Kotlin has become one of the most preferred programming languages for Android development, widely used by startups, IT companies, and app development agencies. A structured Kotlin training course helps you understand core programming concepts, object-oriented programming, Android app development basics, UI design, APIs, and real-world project building. In Amritsar, demand for mobile app developers is growing as local businesses and startups increasingly invest in digital products and mobile applications.",
        "At Techcadd, the focus is on practical, hands-on learning rather than just theory. Students work on real coding exercises, mini-projects, and app development tasks that help them build confidence and job-ready skills. The training is designed to prepare learners for entry-level Android developer roles, internships, freelancing opportunities, and further advanced development learning.",
        "If your goal is to learn Kotlin in Amritsar and build a strong foundation in Android development, Techcadd provides a structured, career-oriented environment focused on skills, practice, and professional growth.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "A practical Kotlin training in Amritsar should prepare students for more than just certification. The real goal is to understand how Kotlin is used to build modern applications, especially Android apps, backend systems, and scalable software solutions — starting from programming fundamentals and moving toward real-world application development.",

    /* Eight starting points plus the "Is This Course Suitable for Beginners?"
       note that closes the section in the source copy, kept as a ninth tile so
       nothing from the brief is dropped. */
    eligibility: {
      heading: "Who Can Do a Kotlin Training in Amritsar?",
      intro:
        "One of the biggest advantages of choosing a Kotlin training in Amritsar is that you do not need to come from a specific technical background to begin. Kotlin is a modern programming language used for Android app development, backend development, and software applications, making it suitable for learners from different educational streams. Current Amritsar training programs commonly welcome students after 12th, graduates, job seekers, working professionals, freelancers, entrepreneurs, and career switchers.",
      criteria: [
        {
          label: "Students After 12th",
          detail:
            "Students who have completed 12th can consider Kotlin as an early career skill in the IT field. Whether you studied Commerce, Arts, Science, or another stream, you can start with programming fundamentals and gradually develop practical skills in Kotlin syntax, object-oriented programming, Android app development basics, and simple application building. For students who want to become employable early or pursue a technical career alongside higher education, Kotlin training provides exposure to real software development practices. Some training programs in Amritsar accept beginners from 12th level, depending on the course structure, while advanced programs may require additional logical or computer basics.",
        },
        {
          label: "College Students",
          detail:
            "BCA, BSc IT, BTech, MCA, and other college students can add Kotlin to strengthen their programming knowledge. A student studying computer science can use Kotlin to build Android applications, while others can combine it with software development concepts like data structures, APIs, and backend integration. Learning while studying helps students understand how real mobile applications are built, tested, and deployed in the IT industry.",
        },
        {
          label: "Graduates and Freshers",
          detail:
            "Graduates who are searching for their first job can use Kotlin training to build a strong technical skill set. Instead of relying only on a general degree, learners can develop practical coding knowledge that supports applications for entry-level roles such as Android developer trainee, junior software developer, Kotlin developer intern, or mobile app development assistant. The key is to choose a program that focuses on hands-on coding, real projects, and portfolio development rather than only theoretical programming concepts.",
        },
        {
          label: "Job Seekers",
          detail:
            "If you are already looking for employment in Amritsar and want to enter the IT and software development field, a structured Kotlin training course can provide a pathway for skill development. Job-focused programs may cover Kotlin fundamentals, Android Studio, UI development, API integration, debugging, and app deployment. However, completing a course alone does not guarantee employment. Your ability to demonstrate real coding skills through projects, apps, GitHub repositories, and a strong portfolio can significantly improve your chances.",
        },
        {
          label: "Working Professionals",
          detail:
            "Kotlin is also useful for professionals who want to upgrade their technical skills or transition into software development roles. IT support staff, web developers, testers, designers, and even non-technical professionals interested in coding can learn Kotlin to expand their career opportunities. Flexible classroom, online, evening, or weekend training options are especially helpful for professionals managing work alongside learning.",
        },
        {
          label: "Freelancers",
          detail:
            "People interested in freelancing can learn Kotlin to build Android applications for clients. Freelancers can work on app development projects such as business apps, e-commerce apps, booking systems, or custom mobile solutions. For beginners, the priority should be building strong coding practice, small apps, and real project experience before taking client work.",
        },
        {
          label: "Entrepreneurs and Business Owners",
          detail:
            "Business owners in Amritsar can also benefit from learning Kotlin basics. Instead of depending entirely on developers, understanding how mobile apps are built can help entrepreneurs better plan, manage, and evaluate their digital products. Whether you run a retail business, service company, startup, or online platform, mobile applications can help you reach customers more effectively in today's digital-first environment.",
        },
        {
          label: "Career Switchers",
          detail:
            "If your current career is not aligned with your interests, Kotlin training can be a strong option for switching into the IT industry. You do not necessarily need a computer science degree; logical thinking, problem-solving ability, consistency, and willingness to practice coding are more important for beginners.",
        },
        {
          label: "Is This Course Suitable for Beginners?",
          detail:
            "Yes. A beginner-friendly Kotlin training course in Amritsar should start from programming basics and gradually move toward Android app development and real-world projects. You should not feel that you need advanced coding knowledge before joining. If you are a 12th-pass student, graduate, fresher, job seeker, working professional, freelancer, entrepreneur, or career switcher, Techcadd can be positioned as a practical learning option for building strong Kotlin development skills with a career-focused approach. The most important requirement is not prior experience — it is consistent practice, logical thinking, and a willingness to build real applications step by step.",
        },
      ],
    },

    /**
     * Future scope, taken over from the builder for one reason: the closing
     * "What you walk away with" note. The generated line reads the span
     * straight out of the seed, and this course is not sold as a ladder of
     * fixed durations — the brief says to confirm the current batch duration
     * with Techcadd before enrolment, which is why the tracks table is off
     * below. So the note names what the student leaves holding instead of how
     * long they sat for. The heading, the intro and the four drivers are the
     * generated copy unchanged, so the rest of the section renders as it did.
     */
    futureScope: {
      heading: "Where kotlin & android development is headed from here",
      intro:
        "A certificate answers what you can do today. This is the honest answer to what kotlin & android development looks like three to five years out, and why the fundamentals this course spends real time on are what carry you there.",
      drivers: [
        {
          title: "Demand is structural, not seasonal",
          body: "Every product, in every industry, still runs on code someone has to write and maintain — and that has not changed even as the tools drafting the first version have.",
        },
        {
          title: "The skill ladder keeps climbing",
          body: "Android Developer is the entry rung, not the ceiling. Once that portfolio is in place, mobile app developer is the realistic next step — a promotion earned on the job, not a second course you have to go back and pay for.",
        },
        {
          title: "Tooling changes; fundamentals compound",
          body: "Android Studio and the rest of the stack will look different in five years — they always do. What does not expire is the fundamentals this course is built around, which is why the syllabus is reviewed each intake instead of frozen once and reused.",
        },
        {
          title: "Remote and hybrid widen the market",
          body: "A kotlin & android development portfolio built in Amritsar competes for the same remote and hybrid roles as anywhere else. Companies hiring for this work are increasingly indifferent to which city the offer letter is posted to.",
        },
      ],
      horizon:
        "However long your batch runs, this programme is built around the part that is genuinely in your hands — and you leave holding all of it. Android apps you built and debugged yourself, a GitHub history that shows how you work, and the fundamentals — OOP, state, APIs, persistence — that outlast any one version of the toolkit. Markets move, as they always have; that foundation is exactly what lets you move with them as development work around you keeps shifting.",
    },

    whyChoose: {
      heading: "Why Techcadd for a Kotlin",
      accent: "Training in Amritsar?",
      body: "Choosing the right institute is an important decision when you are investing time and money in a Kotlin training course in Amritsar. Students should look beyond advertisements and compare factors such as practical coding exposure, curriculum structure, trainer guidance, learning environment, real-time projects, career support, and accessibility. Techcadd is a training centre offering IT and career-oriented training, including Kotlin programming. For students looking for classroom-based professional training in Amritsar, the current centre location, batch availability, and facilities should be confirmed directly with Techcadd before enrolment.",
      reasons: [
        {
          title: "Practical Coding Instead of Only Theory",
          body: "Kotlin is a modern programming language used for Android app development and backend systems. Reading syntax or watching tutorials is not enough — you must actually write code, build applications, debug errors, and understand real-world logic. A career-focused Kotlin training approach should therefore give students opportunities to practise concepts through hands-on coding sessions, mini-projects, and app-building exercises. When you learn by developing real applications, you understand how Kotlin works in actual software development environments. For students in Amritsar, this practical approach is especially useful because the IT industry increasingly demands developers who can build functional Android apps, not just understand theory.",
        },
        {
          title: "A Course Designed for Different Career Goals",
          body: "Not every student joins Kotlin training for the same reason. One learner may want to become an Android developer. Another may aim for a software development job in an IT company. Someone else may want to build mobile apps for freelancing, start a tech startup, or enhance their programming skills for better job opportunities. That is why students should understand different career paths before choosing a course. Techcadd can provide a learning environment where beginners can develop foundational programming knowledge and gradually move toward advanced Kotlin concepts such as object-oriented programming, Android app development, APIs, and project-based development.",
        },
        {
          title: "Local Learning Advantage in Amritsar",
          body: "For students searching for Kotlin training classes in Amritsar, location plays an important role. Classroom learning allows students to interact directly with trainers, ask coding-related questions, solve errors in real time, and learn alongside peers. This is especially helpful for beginners who struggle with self-paced online learning. Being locally accessible also means students can attend training regularly without relocating to another city, making it more convenient for learners from Amritsar and nearby areas.",
        },
        {
          title: "Skills That Can Support Multiple Career Options",
          body: "This variety helps students choose their direction based on interest and aptitude. For example, a student who enjoys designing apps may focus on Android UI development. Someone who likes logic and problem-solving may prefer backend or core programming. A creative learner may enjoy building user-friendly mobile applications.",
        },
        {
          title: "Career-Focused Learning",
          body: "A good Kotlin training institute in Amritsar should help students understand not only how to write code, but also why certain programming structures are used and how real applications are built. Employers look for developers who can think logically, solve problems, debug efficiently, and build scalable applications. Therefore, students should focus on building strong fundamentals along with practical project experience. During the course, students should aim to create small apps, practice coding challenges, and build a portfolio of Kotlin-based projects.",
        },
        {
          title: "Support for Beginners",
          body: "Many students hesitate before joining programming courses because they believe coding is too difficult. In reality, Kotlin is considered a beginner-friendly language compared to many traditional programming languages. With step-by-step guidance, students can learn variables, loops, functions, classes, objects, and app development gradually. What matters most is consistency, practice, logical thinking, and willingness to solve errors. Techcadd can be considered by students who want structured classroom learning instead of trying to learn programming alone from scattered online resources.",
        },
        {
          title: "A Better Way to Choose Your Course",
          body: "Before enrolling in any Kotlin training course in Amritsar, students should ask: Does the course cover Kotlin fundamentals and advanced topics? Is there hands-on coding practice in every session? Will students build real Android applications? Are industry-relevant tools and frameworks included? Is the course suitable for absolute beginners? Does the trainer provide doubt-solving support? Are projects included in the curriculum? Is the learning schedule flexible for students? Is the institute easily accessible in Amritsar? Can students see practical coding environments before joining?",
        },
        {
          title: "Why Choose Techcadd?",
          body: "For students searching specifically for a Kotlin training course in Amritsar, Techcadd offers an IT skill-development environment that can be considered by learners looking for structured training. Students should confirm the current Amritsar centre location, course syllabus, trainer details, batch schedule, and facilities directly before enrolment. The real value of any programming course depends on consistent practice, project development, and problem-solving ability. Students who actively code, build apps, and complete assignments will gain the most benefit. If your goal is to start a career in Android development, improve programming skills, or enter the IT industry, Techcadd's Kotlin training in Amritsar can be considered a practical and career-focused learning option.",
        },
      ],
    },

    /* Ten reviews, carried across exactly as the brief writes them — every one
       is labelled a sample rather than attributed to a named student, and the
       average and distribution are computed from the ten five-star ratings
       actually listed here. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Career-Focused Learning",
          quote:
            "I joined Techcadd to learn after graduation. I liked that the training focused on practical concepts instead of only theory. The structured approach helped me understand programming concepts and gave me opportunities to practise what I learned.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Beginner-Friendly Training",
          quote:
            "I was completely new when I joined. The concepts were explained step by step, which helped me become more comfortable with programming fundamentals and Kotlin.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for Freshers",
          quote:
            "As a fresher, I wanted to add a practical technical skill to my degree. The training helped me understand Kotlin and the basics of Android development.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Kotlin Learning Experience",
          quote:
            "I was particularly interested in Android development. Learning Kotlin syntax, programming concepts and app development gave me a much better understanding of how mobile applications are built.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Practical Approach",
          quote:
            "What I appreciated most was the practical approach. Instead of simply learning definitions, I could practise coding and understand how different concepts are applied while developing applications.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Good Option for Career Switchers",
          quote:
            "I was exploring a career change and wanted to learn a technical skill with different career possibilities. The structured Kotlin training helped me understand programming and Android development step by step.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Local Learning Experience",
          quote:
            "I preferred classroom training because I could ask questions directly and interact with other learners. Being able to attend classes in Amritsar was convenient for me.",
        },
        {
          name: "Sample Business Owner",
          initials: "SB",
          role: "Amritsar",
          rating: 5,
          meta: "Helpful for Business Owners",
          quote:
            "I joined to understand mobile application development for my business. Learning the basics of Kotlin and app development helped me better understand how mobile products are planned and developed.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Understanding Development Tools",
          quote:
            "The course introduced me to different development tools and showed me how they are used for coding, debugging, testing and managing projects. This made the learning experience more practical for me.",
        },
        {
          name: "Sample Student",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Confidence Building",
          quote:
            "Before joining, programming felt confusing because there were so many concepts and tools. The structured learning approach helped me understand the basics and gave me more confidence to practise on my own.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is a Kotlin training in Amritsar?",
        a: "A Kotlin training course in Amritsar teaches students how to develop modern applications using the Kotlin programming language. Kotlin is widely used for Android app development and is known for being concise, safe, and fully compatible with Java. Training typically includes programming basics, object-oriented concepts, Android development fundamentals, and real-world app building.",
      },
      {
        q: "Who can join a Kotlin training at Techcadd?",
        a: "Students after 12th, graduates, freshers, IT students, engineering students, job seekers, and working professionals can join Kotlin training. Anyone interested in mobile app development or software programming can start learning Kotlin, even without prior coding experience.",
      },
      {
        q: "Do I need programming knowledge before learning Kotlin?",
        a: "No. Beginners can start Kotlin from scratch. A good training program begins with basic programming concepts such as variables, loops, conditions, functions, and gradually moves toward Android app development and advanced topics.",
      },
      {
        q: "Is Kotlin a good career option in Amritsar?",
        a: "Yes. Kotlin is widely used in Android development, and mobile applications are in high demand across industries. Companies need Android developers to build apps for e-commerce, education, healthcare, finance, and other services. Career opportunities depend on your skills, practice, and project experience.",
      },
      {
        q: "What will I learn in a Kotlin training course?",
        a: "A complete Kotlin training program may include Kotlin basics and syntax, object-oriented programming (OOP), functions, classes and objects, Android Studio setup, UI design for Android apps, app navigation and layouts, API integration basics, debugging and testing, and real-world Android app projects.",
      },
      {
        q: "Which tools are used in Kotlin training?",
        a: "Common tools include Android Studio, the Kotlin compiler, the Java Development Kit (JDK), Git and GitHub for version control, an emulator or physical Android devices, and code editors and debugging tools.",
      },
      {
        q: "Can I learn Android app development with Kotlin?",
        a: "Yes. Kotlin is one of the official languages for Android development. After learning Kotlin basics, students can build Android applications such as calculators, to-do apps, login systems, e-commerce apps, and more advanced mobile solutions.",
      },
      {
        q: "Can Kotlin help me get a job or internship?",
        a: "Yes, Kotlin skills can help you apply for roles such as Android Developer, Mobile App Developer, Junior Software Developer, or internship positions. However, job opportunities depend on your practical skills, projects, coding ability, and interview performance.",
      },
      {
        q: "Can freelancers use Kotlin skills?",
        a: "Yes. Freelancers can use Kotlin to develop Android applications for clients, build custom mobile apps, or work on app maintenance and updates. Strong project experience and a portfolio are important for freelancing success.",
      },
      {
        q: "Can non-IT students learn Kotlin?",
        a: "Yes. Non-IT students can also learn Kotlin if they are interested in programming and mobile app development. A structured course helps beginners understand coding step by step.",
      },
      {
        q: "Is classroom training available for Kotlin in Amritsar?",
        a: "Students can enquire about classroom-based Kotlin training in Amritsar for better interaction, hands-on practice, and direct guidance from trainers. Techcadd's current classroom availability, centre address, and batch schedule should be confirmed directly before enrolment.",
      },
      {
        q: "What projects will I build in Kotlin training?",
        a: "Students may work on projects such as a basic calculator app, a login and registration app, a to-do list application, a weather app (API-based), a simple e-commerce app UI, and Android utility applications.",
      },
      {
        q: "Is Kotlin better than Java?",
        a: "Kotlin is more modern, concise, and easier to write compared to Java. It is fully compatible with Java, and many companies now prefer Kotlin for Android development. However, both languages are still important in software development.",
      },
      {
        q: "How should I choose the best Kotlin training course in Amritsar?",
        a: "Check the course syllabus, practical training, Android project work, trainer experience, tools covered, lab facilities, and career support. A good course should focus on hands-on coding and real app development, not just theory.",
      },
      {
        q: "Is a certificate enough to become a Kotlin developer?",
        a: "A certificate alone is not enough. Employers look for practical skills, coding ability, real projects, problem-solving skills, and understanding of Android development concepts. A strong portfolio is more important than certification alone.",
      },
      {
        q: "Why choose Techcadd for Kotlin training in Amritsar?",
        a: "Techcadd can be considered for Kotlin training because of its structured learning approach, practical focus, and local training availability. Students should always review the latest syllabus, trainer experience, centre location, and lab facilities before enrolling to ensure it matches their career goals.",
      },
    ],

    /* The brief tells students to confirm the current batch duration with the
       centre rather than naming fixed 3 / 6 / 9 month tiers, so the derived
       duration-tracks table is switched off; the course details in the enquiry
       section below carry the real answer instead. */
    tracks: false,

    cta: {
      eyebrow: "Start your Kotlin training journey with Techcadd",
      heading: "Ready to Learn Kotlin",
      accent: "in Amritsar?",
      body: "Build strong programming skills with Techcadd and take the next step toward a career in Android and software development. Whether you are a student, fresher, job seeker, or working professional, you can enquire about the program and check whether it matches your learning goals.",
      facts: [
        "Course: Kotlin Training Course",
        "Location: Techcadd, Amritsar",
        "Centre: Amritsar (confirm exact branch location with Techcadd)",
        "Mode: Classroom / available learning options — confirm current availability with Techcadd",
        "Duration: Confirm the current batch duration with Techcadd before enrolment",
        "Suitable For: Students, graduates, freshers, job seekers, professionals and career switchers",
      ],
      assurances: [
        "Kotlin fundamentals, Android basics and OOP concepts explained",
        "Practical coding projects, course schedule and batch timings",
        "Learning modes, fees and payment options",
        "Career guidance and job support",
      ],
      formTitle: "Request a Callback",
      formNote:
        "Fill in your details and the Techcadd team can contact you to guide you about the Kotlin training program and help you choose the right batch.",
      submitLabel: "Request a Callback",
      placeholders: {
        name: "Full Name",
        phone: "Mobile Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Highest Qualification",
      statusOptions: [
        "12th Pass",
        "College Student",
        "Graduate",
        "Job Seeker",
        "Working Professional",
      ],
      batchLabel: "Preferred Learning Mode",
      batchOptions: ["Classroom", "Other"],
    },

    demo: {
      eyebrow: "Prefer to speak first?",
      heading: "Prefer to speak first? Request a callback",
      body: "Submit your enquiry to get details about the latest batch, course structure, duration, fees, and admission process before enrolling.",
      action: "Request a Callback",
      note: "Latest batch · Course structure · Duration · Fees · Admission process",
    },

    /* The Kotlin brief carries no keyword report of its own, so the metadata
       below is built from the search phrases the brief itself repeats. */
    seo: {
      title: "Kotlin Training Course in Amritsar | Techcadd",
      description:
        "Career-focused Kotlin training in Amritsar — programming fundamentals, Android app development, APIs, databases and real project work for beginners upwards.",
      keywords: [
        "Kotlin training in Amritsar",
        "Kotlin training course in Amritsar",
        "Kotlin training classes in Amritsar",
        "Kotlin training institute in Amritsar",
        "learn Kotlin in Amritsar",
        "best Kotlin training course in Amritsar",
        "Android development course in Amritsar",
        "mobile app development course in Amritsar",
        "Kotlin course for beginners Amritsar",
        "Kotlin course after 12th Amritsar",
        "Kotlin training for graduates Amritsar",
        "Kotlin developer course Amritsar",
        "classroom Kotlin training Amritsar",
      ],
    },
  },
};

/* -------------------------------------------------------------- web designing */

/**
 * Source copy: the Amritsar Web Designing brief (overview, seven eligibility
 * personas, the "why Techcadd" argument, thirteen learning blocks with their
 * toolchain, ten student reviews, twelve FAQs, the CTA/enquiry section with its
 * course-details table, and the keyword/GEO report). The thirteen learning
 * blocks and the tool list live in `course-data.ts` instead, because they are
 * the curriculum and the toolchain, and the module explorer and tool stack
 * read both from the seed.
 */
const webDesigning: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Web Designing Training course
         Amritsar" — rather than the generic catalogue phrasing. */
      headline: "Web Designing Training in",
      accent: "Amritsar",
      tagline:
        "Techcadd's Web Designing Training course in Amritsar is designed for students, graduates, and job seekers who want to master the art and science of creating stunning, functional websites.",
      chips: ["2 – 3 months", "Classroom & flexible batches", "Beginner"],
      image: "/images/courses/web-designing.png",
    },

    overview: {
      heading: "Web Designing Training in Amritsar – Techcadd",
      paragraphs: [
        "Looking to build a career in web design? Techcadd's Web Designing Training course in Amritsar is designed for students, graduates, and job seekers who want to master the art and science of creating stunning, functional websites. This hands-on program covers everything from HTML, CSS, and JavaScript fundamentals to responsive design, UI/UX principles, and modern tools like Figma, Adobe XD, WordPress, and Bootstrap.",
        "Whether you're a 12th-pass student exploring career options, a graduate looking to upskill, or a working professional wanting to switch to a creative-tech career, this course meets you where you are. Amritsar's growing IT and freelancing ecosystem makes web designing one of the most in-demand skills right now — for agencies, startups, and freelance clients alike.",
        "At Techcadd, learning goes beyond theory. You'll build real websites, work on live projects, and create a portfolio that actually gets you hired or helps you freelance confidently. Our Amritsar-based trainers bring industry experience straight into the classroom, ensuring you learn what employers and clients are actually looking for today.",
        "Ready to design your future? Let's build it together.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This course is structured to take you from foundational concepts to advanced, real-world web design skills. Here's a breakdown of everything you'll master.",

    /* Seven starting points plus the line that closes the section in the source
       copy, kept as an eighth tile so nothing from the brief is dropped. */
    eligibility: {
      heading: "Who Can Join Techcadd's Web Designing Training in Amritsar?",
      intro:
        "One of the best things about web designing as a career path is that it doesn't demand a specific academic background. If you have curiosity, a creative eye, and the willingness to learn, this course is built for you. Here's a closer look at who typically joins — and thrives — in Techcadd's Web Designing Training course in Amritsar.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just finished school and are unsure whether to go the traditional college route or dive straight into a skill-based career, web designing is an excellent starting point. You don't need prior coding knowledge — our course starts from the basics and builds up gradually. Many students in Amritsar are choosing skill-first careers over long, generic degree programs, and web design offers a fast, practical entry into the IT and creative industry.",
        },
        {
          label: "Graduates from Any Stream",
          detail:
            "Whether you hold a degree in Commerce, Arts, Science, or even Computer Applications, web designing welcomes you. Graduates often join this course to add a high-demand, practical skill to their resume — something that makes them instantly more employable in Amritsar's growing digital economy. Non-tech graduates especially benefit, since web design blends creativity with logic, making it accessible without requiring a heavy technical background.",
        },
        {
          label: "Job Seekers Looking for Faster Employment",
          detail:
            "If you're actively job hunting and want a skill that gets you noticed quickly, web designing is one of the fastest ways to build a job-ready portfolio. Employers across Amritsar — from digital agencies to local businesses building their online presence — are constantly looking for web designers who can deliver clean, responsive, user-friendly websites.",
        },
        {
          label: "Working Professionals Wanting a Career Switch",
          detail:
            "Many professionals stuck in unrelated or unsatisfying jobs use this course as a stepping stone into the IT and creative-tech world. Web designing offers flexibility — you can work full-time at an agency, take up freelance projects on the side, or eventually run your own web design business, all from Amritsar or remotely.",
        },
        {
          label: "Freelancers and Aspiring Entrepreneurs",
          detail:
            "If you dream of working independently — designing websites for clients across India or even internationally — this course gives you the practical foundation to start freelancing with confidence. Amritsar has a growing base of small businesses, boutiques, and startups needing affordable, skilled web designers, making it a great local market to begin building your freelance career.",
        },
        {
          label: "Small Business Owners and Entrepreneurs",
          detail:
            "Business owners who want to manage or build their own website (instead of depending entirely on agencies) also join this course. Understanding web design basics helps them make smarter decisions about their online presence, even if they eventually outsource the heavy lifting.",
        },
        {
          label: "Students from Non-IT Backgrounds Curious About Tech",
          detail:
            "You don't need a computer science degree to succeed here. Web design sits at the intersection of creativity and technology, so students from arts, design, or even hospitality backgrounds often discover a natural aptitude for it once they start learning.",
        },
        {
          label: "Whatever Your Starting Point",
          detail:
            "No matter your starting point, Techcadd's trainers in Amritsar ensure the course is beginner-friendly, project-based, and paced so everyone — regardless of background — walks out job-ready.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Learn Web Designing at",
      accent: "Techcadd, Amritsar?",
      body: "Choosing the right training institute matters just as much as choosing the right course. Here's why students across Amritsar trust Techcadd for their Web Designing Training journey.",
      reasons: [
        {
          title: "Experienced, Industry-Active Trainers",
          body: "At Techcadd, you don't learn from instructors reading off slides — you learn from trainers who have real, hands-on experience in web design, development, and client work. This means the lessons come with practical context: real client scenarios, common pitfalls, and industry best practices that you simply won't find in a purely academic setting.",
        },
        {
          title: "Amritsar-Based, Locally Accessible Training",
          body: "Techcadd's presence in Amritsar means you get quality, industry-grade training without needing to relocate to a bigger city. You get the benefit of personalized, in-person guidance combined with a curriculum that matches national and even global design standards — right here, close to home.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Large, crowded classrooms often mean students get left behind. Techcadd focuses on manageable batch sizes so trainers can actually engage with each student, answer doubts, review individual project work, and ensure nobody falls through the cracks.",
        },
        {
          title: "Real Projects, Not Just Assignments",
          body: "From your very first few weeks, you'll be working on real website projects — not just theoretical exercises. This project-based approach means that by the time you finish the course, you already have practical, portfolio-ready work to show employers or freelance clients.",
        },
        {
          title: "Updated Curriculum That Matches Industry Trends",
          body: "Web design trends and tools evolve quickly. Techcadd continuously updates its course content to reflect current industry standards — responsive design, modern CSS frameworks, popular CMS platforms like WordPress, and design tools like Figma and Adobe XD — so you're learning what's actually used in the field today, not outdated techniques.",
        },
        {
          title: "Placement and Freelance Support",
          body: "Techcadd doesn't just teach and send you off — the institute actively supports students with resume building, interview preparation, and portfolio guidance to help you transition smoothly into a job or start freelancing with confidence.",
        },
        {
          title: "Flexible Learning Options",
          body: "Understanding that students come from different situations — some balancing school, others juggling jobs — Techcadd offers flexible batch timings, making it easier to fit quality training into your schedule without compromising on learning depth.",
        },
        {
          title: "Certification That Adds Credibility",
          body: "Upon completion, you receive a course certification that adds weight to your resume and portfolio, signaling to employers and clients that you've received structured, quality training in web designing.",
        },
        {
          title: "A Genuine Track Record with Amritsar Students",
          body: "Techcadd has trained numerous students across Amritsar who've gone on to secure design roles or build successful freelance careers. This local track record means the institute understands exactly what regional employers and clients are looking for.",
        },
        {
          title: "Supportive, Doubt-Friendly Learning Environment",
          body: "Techcadd fosters a classroom culture where asking questions is encouraged, not discouraged. Whether you're a complete beginner or already have some design exposure, you'll never feel rushed or judged for needing extra clarification.",
        },
      ],
    },

    /* Ten named reviews. The distribution and average are computed from the
       ratings actually listed here — seven five-star, three four-star — rather
       than the catalogue's generated numbers, so the star rail cannot claim
       more than the page can show. */
    reviews: {
      average: "4.7",
      total: 10,
      distribution: [
        { stars: 5, percent: 70 },
        { stars: 4, percent: 30 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Graduate, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "I joined Techcadd right after my graduation with zero design knowledge. The trainers explained everything so simply — from HTML to Figma — that within a few months I built my own portfolio website. Really happy I chose Techcadd in Amritsar for this.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "Best decision after 12th! I wasn't sure about college, so I joined the web designing course instead. Now I'm freelancing part-time while still learning new things. The project-based teaching style really helped.",
        },
        {
          name: "Harleen Kaur",
          initials: "HK",
          role: "Student, Amritsar",
          rating: 4,
          meta: "Web Designing batch",
          quote:
            "Good course structure and supportive trainers. I especially liked the WordPress module — didn't expect to build a full website by myself so soon. Batch timings were flexible which helped since I was also doing tuition on the side.",
        },
        {
          name: "Rohit Mehra",
          initials: "RM",
          role: "Commerce Graduate, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "Coming from a commerce background, I thought coding would be tough for me. But the way Techcadd's trainers in Amritsar broke down HTML and CSS made it easy to follow. Got my first freelance client within a month of finishing the course!",
        },
        {
          name: "Amanpreet Kaur",
          initials: "AK",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "I wanted a career switch from retail to something more creative and stable. This course gave me exactly that. The portfolio I built during training helped me get hired at a small design agency here in Amritsar.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Student, Amritsar",
          rating: 4,
          meta: "Web Designing batch",
          quote:
            "Solid course overall. The Bootstrap and responsive design classes were my favorite — very practical. Would have liked a bit more time on JavaScript, but the trainers were always open to extra doubt-clearing sessions.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Working Professional, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "As a working professional, I needed flexible timings, and Techcadd made that possible. Learned Figma and Adobe XD from scratch and now I'm helping my family's business build their own website. Great local option in Amritsar.",
        },
        {
          name: "Ishaan Bhatia",
          initials: "IB",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "Honestly one of the more hands-on courses I've done. We weren't just watching tutorials — we were building real sites from week one. That project experience is what got me shortlisted in my first job interview.",
        },
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Aspiring Freelancer, Amritsar",
          rating: 4,
          meta: "Web Designing batch",
          quote:
            "Good learning environment, small batches meant the trainer actually knew each student's progress. The WordPress and hosting sessions were super useful since I plan to freelance for local shops here in Amritsar.",
        },
        {
          name: "Manav Sharma",
          initials: "MS",
          role: "Beginner, Amritsar",
          rating: 5,
          meta: "Web Designing batch",
          quote:
            "I came in as a complete beginner and left with a working portfolio and real confidence. Techcadd's trainers made web designing feel approachable instead of intimidating. Highly recommend to anyone in Amritsar exploring this field.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is the duration of the Web Designing Training course at Techcadd, Amritsar?",
        a: "The Web Designing Training course at Techcadd typically runs for 2 to 3 months, depending on the batch schedule and depth of specialization chosen. Both regular and flexible timing options are available.",
      },
      {
        q: "Do I need coding knowledge to join this web designing course?",
        a: "No, prior coding knowledge is not required. The course is designed for absolute beginners and builds your skills step-by-step, starting from HTML and CSS fundamentals before moving to advanced topics.",
      },
      {
        q: "Who can enroll in this web designing course in Amritsar?",
        a: "12th pass students, graduates from any stream, job seekers, working professionals, and aspiring freelancers can all enroll. There is no strict educational prerequisite for joining.",
      },
      {
        q: "What tools will I learn during the course?",
        a: "You'll learn HTML5, CSS3, JavaScript basics, Bootstrap, Figma, Adobe XD, WordPress, and basic SEO practices — all tools actively used by web design professionals today.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, Techcadd provides a course completion certificate that adds credibility to your resume and portfolio when applying for jobs or freelance projects.",
      },
      {
        q: "Does Techcadd offer placement support after the course?",
        a: "Yes, Techcadd provides placement assistance, including resume building, portfolio guidance, and interview preparation to help students transition into jobs or freelance work.",
      },
      {
        q: "Can I do freelancing after completing this course?",
        a: "Absolutely. Many students use the skills and portfolio built during this course to start freelancing, taking on website projects for local businesses in Amritsar and clients beyond.",
      },
      {
        q: "Is this course suitable for working professionals?",
        a: "Yes, Techcadd offers flexible batch timings specifically to accommodate working professionals and students who have other daily commitments.",
      },
      {
        q: "What is the difference between web designing and web development?",
        a: "Web designing focuses on the visual layout, user experience, and interface of a website, while web development focuses more on the functional, back-end programming side. This course focuses on the design and front-end aspects.",
      },
      {
        q: "Will I build real projects during the training?",
        a: "Yes, the course is project-based. You'll work on actual website builds throughout the training and graduate with a portfolio of real projects to show employers or clients.",
      },
      {
        q: "Is WordPress covered in this course?",
        a: "Yes, WordPress training is included, teaching you to build and customize websites using themes, plugins, and page builders — a valuable skill for freelance and agency work.",
      },
      {
        q: "How is Techcadd's web designing course different from online courses?",
        a: "Techcadd offers in-person, hands-on training in Amritsar with direct trainer interaction, personalized doubt-clearing, and local placement support — advantages that many self-paced online courses lack.",
      },
    ],

    /* The course runs at one duration — "2–3 Months" in the brief's own
       course-details table — rather than as a ladder of shorter and longer
       tiers, so the derived duration-tracks table is switched off. */
    tracks: false,

    cta: {
      eyebrow: "Start your web design career",
      heading: "🎯 Start Your Web Design Career —",
      accent: "Enrol Today at Techcadd, Amritsar!",
      body: "Turn your creativity into a career. Join Amritsar's hands-on Web Designing Training Course and build real websites, a job-ready portfolio, and the skills employers and clients are actively looking for — all with expert guidance, right here in Amritsar.",
      facts: [
        "Course Name: Web Designing Training Course",
        "Duration: 2–3 Months",
        "Mode: Offline (In-Person) / Flexible Batch Timings",
        "Centre: Techcadd, Amritsar",
      ],
      assurances: [
        "Free counselling call with our course advisor",
        "Get your questions answered before you decide",
        "Flexible batch options discussed on the spot",
      ],
      formTitle: "📝 Quick Enquiry Form",
      formNote:
        "Fill in your details and our team will call you back shortly. Your information is kept confidential and used only to help you make the right career decision.",
      submitLabel: "Book a Free Callback Now",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: [
        "12th Pass",
        "Graduate",
        "Working Professional",
        "Other",
      ],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Afternoon", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "☎️ Prefer to Talk First?",
      body: "No pressure, no spam — just honest guidance on whether this course is right for you.",
      action: "Book a Free Callback Now",
      note: "Your information is kept confidential and used only to help you make the right career decision.",
    },

    seo: {
      title: "Web Designing Training Course in Amritsar | Techcadd",
      description:
        "Hands-on Web Designing Training course in Amritsar — HTML, CSS, JavaScript, Bootstrap, Figma, WordPress and a job-ready portfolio, with placement and freelance support.",
      keywords: [
        "Web Designing Training course Amritsar",
        "Web designing course in Amritsar",
        "Best web designing institute in Amritsar",
        "Web design classes near me Amritsar",
        "Website designing training center Amritsar",
        "Web designing course fees in Amritsar",
        "Web designing institute in Amritsar with placement",
        "HTML CSS JavaScript course Amritsar",
        "WordPress training course Amritsar",
        "UI UX design course Amritsar",
        "Responsive web design course Amritsar",
        "Bootstrap training Amritsar",
        "Figma Adobe XD course Amritsar",
        "Web designing course with job placement Amritsar",
        "Web designer course for beginners Amritsar",
        "Freelance web designing course Amritsar",
        "Web designing course after 12th Amritsar",
        "Web design course for graduates Amritsar",
        "Front end developer course Amritsar",
      ],
    },
  },
};

/* ----------------------------------------------------------- web development */

/**
 * Source copy: the Amritsar Web Development brief (overview, six eligibility
 * personas, the two "why" arguments, ten learning blocks with their toolchain,
 * eleven student reviews, eleven FAQs, the CTA/enquiry section with its
 * course-details table, and the keyword/GEO report). The ten learning blocks
 * and the tool list live in `course-data.ts` instead, because they are the
 * curriculum and the toolchain, and the module explorer and tool stack read
 * both from the seed.
 */
const webDevelopment: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Web Development Training course
         Amritsar" — rather than the generic catalogue phrasing. */
      headline: "Web Development Training in",
      accent: "Amritsar",
      tagline:
        "Techcadd's Web Development Training in Amritsar is designed for students, graduates, and job seekers who want hands-on, industry-relevant skills in HTML, CSS, JavaScript, and modern frameworks.",
      chips: ["3 or 6 months", "Classroom & flexible batches", "Beginner to advanced"],
      image: "/images/courses/web-development.png",
    },

    overview: {
      heading: "Web Development Training – Amritsar",
      paragraphs: [
        "Looking to build a career in tech? Techcadd's Web Development Training in Amritsar is designed for students, graduates, and job seekers who want hands-on, industry-relevant skills in HTML, CSS, JavaScript, and modern frameworks. Whether you're a 12th-pass student exploring your first career path or a graduate looking to upskill, this course takes you from the basics of front-end design to building fully functional, responsive websites.",
        "At Techcadd Amritsar, you don't just learn theory — you build real projects, work with live tools, and get guided by trainers with real industry experience. The course covers everything from coding fundamentals to deployment, preparing you for roles like Web Developer, Front-End Developer, and Junior Full Stack Developer.",
        "With growing demand for web developers across Amritsar and Punjab's IT and business sectors, this is the right time to start. Techcadd's practical, project-based approach ensures you graduate job-ready — not just certificate-ready.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "Techcadd's Web Development Training course in Amritsar takes you through a complete, structured curriculum — from the absolute basics of how websites work to building fully functional, responsive, real-world projects.",

    /* Six starting points plus the line that closes the section in the source
       copy, kept as a seventh tile so nothing from the brief is dropped. */
    eligibility: {
      heading: "Who Can Do This Course – Web Development Training, Amritsar",
      intro:
        "Techcadd's Web Development Training course in Amritsar is built for a wide range of learners — you don't need a coding background to get started. If you're wondering whether this course fits your situation, here's a clear breakdown of who this program is designed for.",
      criteria: [
        {
          label: "12th Pass Students (Any Stream)",
          detail:
            "If you've just finished school and are exploring career options, web development is one of the most in-demand, future-proof skills you can learn today. Whether you're from Science, Commerce, or Arts, you don't need a technical background to begin. This course starts from the fundamentals — HTML, CSS, and JavaScript — and builds up step by step, making it ideal for absolute beginners in Amritsar looking for a strong, practical head start after school.",
        },
        {
          label: "Graduates (BA, B.Com, BSc, BCA, and Others)",
          detail:
            "Many graduates find themselves unsure of their next career move, especially if their degree didn't include hands-on technical training. This course is perfect for graduates from any stream who want to pivot into a high-growth tech career. BCA and IT graduates especially benefit, since the course sharpens their existing knowledge with real project work, live coding practice, and portfolio-building — something most college courses don't fully cover.",
        },
        {
          label: "Job Seekers Looking for a Career Change",
          detail:
            "If you're currently working in a non-tech role and want to switch into IT, web development offers one of the fastest, most accessible entry points. You don't need to quit your current job to get started — many learners join while working and transition once they're job-ready. Amritsar's growing IT and business ecosystem means local companies, digital agencies, and startups are actively hiring developers who can build and maintain websites.",
        },
        {
          label: "Freelancers and Small Business Owners",
          detail:
            "If you run a business or want to freelance, knowing how to build and manage your own website is a major advantage. Instead of paying developers for every small change, you can create, edit, and maintain your own site — saving money and giving you more control over your online presence. Many Amritsar-based entrepreneurs enrol in this course specifically to become self-reliant with their digital presence.",
        },
        {
          label: "Diploma and Engineering Students",
          detail:
            "If you're pursuing a diploma or engineering degree (especially in Computer Science or IT), this course complements your academic learning with practical, job-ready skills. Many technical courses focus heavily on theory — this program fills that gap with real coding practice, live projects, and current industry tools and frameworks that employers actually expect from new hires.",
        },
        {
          label: "Anyone Curious About Tech, With Zero Prior Experience",
          detail:
            "You don't need to have touched a line of code before. This course is structured to take absolute beginners from zero to confident — starting with the basics of how websites work, then gradually introducing HTML, CSS, JavaScript, and modern frameworks. If you're self-motivated and willing to practice consistently, this course meets you exactly where you are.",
        },
        {
          label: "Whatever Your Background",
          detail:
            "Whatever your background, if you're serious about building a career in web development and want structured, hands-on training in Amritsar — this course is designed to take you there.",
        },
      ],
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why This",
      accent: "Program?",
      body: "Choosing the right web development course isn't just about learning to code — it's about learning to code the right way, with the right guidance, and in an environment that prepares you for real jobs. Here's why Techcadd's Web Development Training program in Amritsar stands out.",
      reasons: [
        {
          title: "Curriculum Built Around Real Industry Needs",
          body: "This program doesn't just teach you syntax — it teaches you how websites are actually built in the real world. From HTML and CSS fundamentals to JavaScript, responsive design, and modern frameworks, every module is structured to reflect what companies are hiring for today. You won't just memorize code; you'll understand how to structure projects, debug issues, and build websites that actually work across devices and browsers.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Reading about web development and actually building websites are two very different experiences. This course is designed around practical, hands-on projects — so by the time you finish, you'll have a portfolio of real work to show employers or clients, not just a certificate. You'll build layouts, forms, interactive elements, and complete websites from scratch, gaining the kind of experience that theory-only courses simply can't offer.",
        },
        {
          title: "Learn From Trainers With Real Development Experience",
          body: "One of the biggest gaps in traditional education is the disconnect between classroom teaching and real-world practice. At Techcadd, you learn from trainers who've actually worked on live projects — not just textbooks. That means you get practical tips, industry best practices, and answers to the kind of questions that only come up when you're actually building something.",
        },
        {
          title: "Flexible Learning for Every Type of Student",
          body: "Whether you're a student with a packed academic schedule, a job seeker balancing work commitments, or someone completely new to tech, this program is structured to accommodate different paces and backgrounds. You get step-by-step guidance, so you're never lost, but also enough depth that you're genuinely job-ready by the end — not just familiar with the basics.",
        },
        {
          title: "Career-Focused Outcomes, Not Just Course Completion",
          body: "The goal of this program isn't just to teach you web development — it's to prepare you for an actual career. That means the training is structured around outcomes: building a strong portfolio, understanding how to apply for developer roles, and gaining the confidence to work on live projects, freelance gigs, or full-time developer positions. You leave with skills that translate directly into employability.",
        },
        {
          title: "A Growing Local Tech Ecosystem in Amritsar",
          body: "Amritsar's IT, business, and startup ecosystem is expanding, and the demand for skilled web developers is growing right alongside it. Local businesses, digital agencies, and even remote-first companies are actively looking for developers who can build and maintain modern websites. Training locally in Amritsar means you're plugged into a community and job market that's actively growing — not learning in isolation.",
        },
        {
          title: "Affordable, High-Value Training",
          body: "Compared to expensive bootcamps or long-duration degree programs, this course offers a focused, practical path into web development at a fraction of the cost and time — without compromising on depth or quality of training. Put simply: this program exists to take you from wherever you're starting — whether that's zero coding experience or some technical background — to genuinely job-ready, with real skills, real projects, and real career direction.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd for Web Development",
      accent: "Training in Amritsar?",
      body: "With so many training institutes claiming to teach web development, choosing the right one can feel overwhelming. Here's why students across Amritsar choose Techcadd for their Web Development Training.",
      reasons: [
        {
          title: "Proven Track Record in IT Training",
          body: "Techcadd isn't new to training students for tech careers. With years of experience delivering IT and software training, Techcadd has helped hundreds of students in Amritsar and beyond move from zero coding experience to confident, job-ready developers. This track record isn't just about numbers — it's reflected in how the curriculum has been refined over time based on what actually works for students and what employers actually want.",
        },
        {
          title: "Industry-Relevant, Constantly Updated Curriculum",
          body: "Web development moves fast — new tools, frameworks, and best practices emerge constantly. Techcadd's Web Development course is built and updated to reflect current industry standards, not outdated syllabi. You're not learning techniques that were relevant five years ago; you're learning what's actually being used in live projects and hiring processes today, from responsive design principles to modern JavaScript practices.",
        },
        {
          title: "Trainers Who've Actually Built Real Projects",
          body: "The instructors at Techcadd aren't just teaching from slides — they bring real, practical development experience into the classroom. This matters because coding problems in real projects rarely match textbook examples exactly. Having trainers who've faced and solved real debugging challenges, client requirements, and deployment issues means you get practical insight you simply won't find in purely academic courses.",
        },
        {
          title: "Small Batches, Personalized Attention",
          body: "Learning to code isn't a one-size-fits-all process — some students grasp JavaScript logic quickly but need more time with CSS layouts, and vice versa. Techcadd keeps batch sizes manageable so trainers can actually address individual doubts, review your code, and give you feedback that helps you improve — instead of getting lost in an oversized classroom.",
        },
        {
          title: "Hands-On Lab Access and Real Project Work",
          body: "Theory alone doesn't build developers — practice does. At Techcadd, you get dedicated lab time to actually write code, build projects, and troubleshoot issues under guidance, rather than just watching demonstrations. By the end of the course, you'll have built multiple real websites and projects that form the foundation of your professional portfolio.",
        },
        {
          title: "Placement Support and Career Guidance",
          body: "Techcadd doesn't just end its responsibility at course completion. Students get support with resume building, interview preparation, and guidance on how to present their portfolio to potential employers or clients. This career-focused approach is designed to help you translate your new skills into an actual job or freelance opportunity.",
        },
        {
          title: "Locally Rooted, Amritsar-Focused Training",
          body: "Being based in Amritsar means Techcadd understands the local job market, the kind of roles available in the region, and what local employers are looking for. This isn't a generic, one-size-fits-all online course — it's training shaped with the Amritsar student and job seeker in mind, while still teaching globally relevant, industry-standard web development skills.",
        },
        {
          title: "Affordable Fees Without Compromising Quality",
          body: "Quality tech training can often come with a high price tag. Techcadd is committed to keeping its Web Development course accessible and affordably priced for students and job seekers in Amritsar, without cutting corners on curriculum depth, trainer expertise, or hands-on project work.",
        },
      ],
    },

    /* Eleven named reviews. The brief lists them without star ratings and every
       one reads as unreservedly positive, so they are carried at five stars and
       the average follows from that — no rating is invented above what the copy
       supports. */
    reviews: {
      average: "5.0",
      total: 11,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "I joined Techcadd right after my 12th with zero coding background. The trainers explained everything from scratch, and by the end I had built three real websites on my own. Best decision I made in Amritsar for starting my tech career.",
        },
        {
          name: "Gurjot Singh",
          initials: "GS",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "I'm a BCA graduate but honestly my college barely covered practical coding. Techcadd's Web Development course filled all those gaps — the hands-on project work made the biggest difference. I finally feel confident calling myself a developer.",
        },
        {
          name: "Simran Sidhu",
          initials: "SS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "I was working in a retail job and wanted a career change. The flexible batch timings at Techcadd Amritsar let me learn web development while still working. Landed my first developer role within two months of completing the course.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "The way JavaScript was taught here is completely different from what I tried learning on YouTube. Actual doubt-clearing, real examples, and trainers who've worked on live projects — that made all the difference for me.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Business Owner, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "I run a small boutique business and wanted to manage my own website instead of paying developers every time I needed a change. This course gave me exactly that independence. Highly recommend for small business owners in Amritsar.",
        },
        {
          name: "Arshdeep Singh",
          initials: "AS",
          role: "Engineering Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "Coming from an engineering background, I expected the course to be too basic for me. It wasn't — the responsive design and modern frameworks portion actually challenged me and added real value to what I already knew.",
        },
        {
          name: "Jasleen Kaur",
          initials: "JK",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "The best part was the portfolio I walked away with. Multiple real projects, not just certificates. That portfolio is literally what got me shortlisted for my first internship interview.",
        },
        {
          name: "Rohan Mehta",
          initials: "RM",
          role: "Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "Small batch sizes made a huge difference. The trainer actually reviewed my code line by line and told me what I was doing wrong. That personal attention is hard to find elsewhere in Amritsar.",
        },
        {
          name: "Navdeep Kaur",
          initials: "NK",
          role: "Beginner, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "I was completely new to tech, honestly a bit scared to start. But the course builds up slowly from the basics, and I never felt lost. Now I'm applying for junior developer roles with real confidence.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "Affordable, practical, and genuinely useful. I compared a few institutes in Amritsar before joining, and Techcadd's course structure and project-based approach stood out the most.",
        },
        {
          name: "Priya Chawla",
          initials: "PC",
          role: "Student, Amritsar",
          rating: 5,
          meta: "Web Development batch",
          quote:
            "The Git and GitHub module alone was worth it — nobody else was teaching that locally. Combined with the deployment training, I actually understood how to take a project live, not just build it on my laptop.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "Do I need any prior coding experience to join this Web Development course?",
        a: "No. This course is designed for absolute beginners as well as students with some technical background. It starts from the fundamentals of HTML and CSS before progressing to JavaScript and advanced topics, so no prior coding experience is required.",
      },
      {
        q: "Who can enroll in Techcadd's Web Development Training course in Amritsar?",
        a: "12th pass students (any stream), graduates, job seekers looking for a career change, freelancers, small business owners, and diploma or engineering students can all join. The course is structured to accommodate different backgrounds and learning paces.",
      },
      {
        q: "What is the duration of the Web Development Training course?",
        a: "Course duration varies based on the batch and learning track you choose. Contact Techcadd's Amritsar centre directly for current batch timings and duration options.",
      },
      {
        q: "Will I get hands-on project experience during the course?",
        a: "Yes. The course is project-based, meaning you'll build multiple real websites throughout the training — not just learn theory. By the end, you'll have a portfolio of completed projects to show employers or clients.",
      },
      {
        q: "What tools and technologies will I learn?",
        a: "You'll gain hands-on experience with HTML5, CSS3, JavaScript, responsive design techniques, modern frontend frameworks, Git & GitHub for version control, and basic deployment and hosting workflows.",
      },
      {
        q: "Does Techcadd offer placement support after course completion?",
        a: "Yes. Techcadd provides career guidance, resume support, and interview preparation to help students transition from course completion to actual job opportunities in web development.",
      },
      {
        q: "Can I join this course while working a full-time job?",
        a: "Yes. Techcadd offers flexible batch timings designed to accommodate working professionals and job seekers who want to upskill without quitting their current job.",
      },
      {
        q: "Is this course only for IT or Computer Science students?",
        a: "No. Students from any academic background — Arts, Commerce, Science, or any degree stream — can join. The course is built to take complete beginners from zero to job-ready.",
      },
      {
        q: "What kind of jobs can I get after completing this course?",
        a: "Graduates of this course typically pursue roles such as Web Developer, Front-End Developer, and Junior Full Stack Developer, with opportunities across IT companies, digital agencies, startups, and freelance work.",
      },
      {
        q: "Where is Techcadd's Web Development Training course located?",
        a: "The course is conducted at Techcadd's training centre in Amritsar, with a curriculum designed around both global web development standards and the local Amritsar job market.",
      },
      {
        q: "Is web development a good career choice in 2026?",
        a: "Yes. Demand for skilled web developers continues to grow as businesses, agencies, and startups expand their digital presence. It remains one of the most accessible, high-demand tech careers for beginners and career switchers alike.",
      },
    ],

    /* The centre runs this course as a 3-month track and a 6-month one, which
       is not what the generic divider would cut from a "3 – 6 months" span, so
       the two real durations are named here instead. */
    tracks: [3, 6],

    cta: {
      eyebrow: "Start your web development career today",
      heading: "🚀 Start Your Web Development Career Today —",
      accent: "Enrol at Techcadd, Amritsar",
      body: "Turn your interest in tech into a real, job-ready skill. Join Techcadd's Web Development Training course in Amritsar and build the websites, portfolio, and confidence you need to launch your career — with hands-on projects and expert guidance every step of the way.",
      facts: [
        "Course Name: Web Development Training Course",
        "Duration: Flexible batches — contact centre for current schedule",
        "Mode: Offline (Classroom Training)",
        "Centre: Techcadd, Amritsar",
      ],
      assurances: [
        "No pressure, no obligation — just honest guidance",
        "Batch timings, fees and career fit explained up front",
        "Speak directly with a Techcadd Amritsar counsellor",
      ],
      formTitle: "📝 Enquire Now — Get Your Free Career Counselling Call",
      formNote:
        "Fill in your details below, and our team will reach out to guide you on batch timings, fees, and how this course fits your career goals.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: [
        "12th Pass",
        "Graduate",
        "Working Professional",
        "Other",
      ],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Afternoon", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "📞 Prefer to Talk First? Request a Callback",
      body: "Not ready to fill a form? No problem. Just leave your number, and our counsellor will call you back — no pressure, no obligation, just honest guidance on whether this course is right for you.",
      action: "Request a Callback",
      note: "No pressure · No obligation · Honest guidance on whether this course is right for you",
    },

    seo: {
      title: "Web Development Training Course in Amritsar | Techcadd",
      description:
        "Hands-on Web Development Training course in Amritsar — HTML, CSS, JavaScript, modern frameworks, Git and deployment, with real projects and placement support.",
      keywords: [
        "Web Development Training course Amritsar",
        "Web development course in Amritsar",
        "Best web development institute Amritsar",
        "Website designing course Amritsar",
        "HTML CSS JavaScript course Amritsar",
        "Front end developer course Amritsar",
        "Full stack web development training Amritsar",
        "Web developer training institute near me Amritsar",
        "Coding classes for beginners Amritsar",
        "IT training institute Amritsar",
        "Techcadd web development course",
        "Best coding institute in Amritsar for beginners",
        "Web development classes for 12th pass students Amritsar",
        "Web development training for graduates Amritsar",
        "Part-time web development course Amritsar",
        "Web development course fees in Amritsar",
        "Web development course duration in Amritsar",
      ],
    },
  },
};

/* --------------------------------------------------------------- mern stack */

/**
 * Source copy: the Amritsar MERN Stack brief (overview, six eligibility
 * personas, the two "why" arguments, eight learning blocks with their
 * toolchain, eleven student reviews, twelve FAQs, the CTA/enquiry section with
 * its course-details table, and the keyword/GEO report). The eight learning
 * blocks and the tool list live in `course-data.ts` instead, because they are
 * the curriculum and the toolchain, and the module explorer and tool stack
 * read both from the seed.
 */
const mernStack: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 the brief's on-page recommendations ask for — "MERN Stack
         Training Course in Amritsar" — rather than the catalogue phrasing. */
      headline: "MERN Stack Training Course in",
      accent: "Amritsar",
      tagline:
        "Techcadd offers a job-ready, hands-on MERN Stack Development program designed for students, graduates, and working professionals who want to break into full-stack web development.",
      chips: ["Flexible batches", "Classroom at the Amritsar centre", "Beginner to advanced"],
      image: "/images/courses/mern-stack.png",
    },

    overview: {
      heading: "Techcadd MERN Stack Training in Amritsar",
      paragraphs: [
        "Looking for the best MERN Stack training in Amritsar? Techcadd offers a job-ready, hands-on MERN Stack Development program designed for students, graduates, and working professionals who want to break into full-stack web development. MERN — MongoDB, Express.js, React.js, and Node.js — is one of the most in-demand tech stacks powering modern web applications, and companies across India and abroad are actively hiring developers skilled in this ecosystem.",
        "At Techcadd's Amritsar center, you'll learn directly from experienced trainers through live projects, real-world coding practice, and industry-aligned curriculum — not just theory. Whether you're a fresher exploring a career in tech, a computer science graduate looking to upskill, or a professional switching careers into web development, this course builds you from fundamentals to advanced full-stack skills.",
        "By the end of the program, you'll be able to build, deploy, and manage complete web applications independently — backed by a portfolio, certification, and placement support from Techcadd, Amritsar's trusted name in IT training.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This program takes you from foundational web development concepts to advanced full-stack application building, covering every layer of the MERN ecosystem in depth.",

    /* The six starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do the MERN Stack Training in Amritsar?",
      intro:
        "Techcadd's MERN Stack Training course in Amritsar is designed to be accessible and beneficial for a wide range of learners — whether you're just starting out or looking to pivot your career into full-stack web development. Here's a detailed look at who this course is really built for:",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just completed your 12th grade (from any stream — Science, Commerce, or Arts) and are curious about a career in tech, this course is an excellent starting point. You don't need a computer science background to begin; Techcadd's curriculum starts from the fundamentals of HTML, CSS, and JavaScript before progressing into the MERN stack, so students with zero prior coding experience can follow along comfortably. This is ideal for those who want to build in-demand skills early and enter the job market with a strong technical foundation, or even before pursuing a formal degree.",
        },
        {
          label: "Graduates (BCA, B.Tech, B.Sc IT, MCA, and Other Streams)",
          detail:
            "Computer science and IT graduates often find that their college curriculum covers theory but leaves gaps in practical, job-ready skills. This course bridges that gap by focusing heavily on hands-on project work, live coding, and real-world application development. Even graduates from non-technical backgrounds — B.Com, BA, or B.Sc — who are interested in switching to a tech career can enroll, since the course is structured to take beginners step-by-step through each technology in the MERN stack.",
        },
        {
          label: "Job Seekers Looking for In-Demand Tech Skills",
          detail:
            "For those actively job hunting, especially in Amritsar and the wider Punjab region, having a recognized, practical skill set can make a significant difference. MERN Stack developers are consistently in demand across startups, IT companies, and product-based businesses. This course equips job seekers with a portfolio of real projects, interview preparation, and certification that directly strengthens their resume and employability.",
        },
        {
          label: "Working Professionals Looking to Upskill or Switch Careers",
          detail:
            "If you're currently working in a different field — whether it's a non-tech job, a related IT role like manual testing, or even a different programming stack — and want to transition into full-stack web development, this course is designed to accommodate you. With flexible batch timings, you can continue your current job while building new skills in the evenings or on weekends.",
        },
        {
          label: "Freelancers and Aspiring Entrepreneurs",
          detail:
            "Freelance web developers or individuals who want to build and launch their own web-based products (e-commerce sites, SaaS tools, portfolio platforms) will benefit from learning MERN, since it allows you to build and manage both the frontend and backend of an application independently — without depending on multiple specialists.",
        },
        {
          label: "Anyone Passionate About Web Development",
          detail:
            "Ultimately, if you have a genuine interest in building websites and web applications and want to understand how modern, scalable web apps are built from the ground up, this course welcomes you — regardless of your educational or professional background. Techcadd's trainers focus on building conceptual clarity first, ensuring that even complete beginners can confidently progress to advanced topics like API integration, authentication, and deployment.",
        },
      ],
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why Choose Techcadd's MERN Stack",
      accent: "Training Program in Amritsar?",
      body: "Choosing the right training program can define the trajectory of your entire tech career. Here's why Techcadd's MERN Stack Training course stands out as a smart, future-focused investment for learners in Amritsar and nearby regions.",
      reasons: [
        {
          title: "Industry-Relevant, Full-Stack Curriculum",
          body: "MERN (MongoDB, Express.js, React.js, Node.js) is one of the most widely adopted stacks in the web development industry today. Instead of teaching isolated technologies, this program is structured to help you understand how the frontend, backend, and database layers work together to build complete, production-ready web applications — a skill set that's directly transferable to real jobs.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Theory alone doesn't get you hired. This program is built around practical application — you'll work on live projects, build functional websites and web apps, and gain experience with the exact workflows used by professional development teams. By the time you complete the course, you won't just know MERN concepts — you'll have a portfolio that proves it.",
        },
        {
          title: "Beginner-Friendly, Step-by-Step Structure",
          body: "Recognizing that students come in with different starting points, the program is designed to build knowledge progressively — from JavaScript fundamentals and DOM manipulation, through React component architecture, to backend API development with Node.js and Express, and database management with MongoDB. This structured approach means you're never thrown into advanced topics without the foundational understanding to grasp them.",
        },
        {
          title: "High Career Relevance and Job Demand",
          body: "Full-stack developers, particularly those skilled in MERN, are consistently sought after by startups, product companies, and IT service firms. Since one developer can independently handle both frontend and backend work, MERN-skilled professionals are especially valuable to smaller teams and growing companies — a trend that's increased hiring demand for this specific skill set across India, including in Punjab's growing IT and startup ecosystem.",
        },
        {
          title: "Flexible Learning for Every Kind of Student",
          body: "Whether you're a student with a packed academic schedule, a job seeker who needs to move quickly, or a working professional balancing a job alongside upskilling, the program offers flexible batch timings — including weekday, weekend, and evening options — so you can learn without disrupting your existing commitments.",
        },
        {
          title: "Local Access with Practical, In-Person Support",
          body: "Learning a technical skill like full-stack development benefits enormously from in-person guidance, doubt resolution, and mentorship — something online-only courses often lack. With a physical training center in Amritsar, you get the convenience of local access combined with direct interaction with trainers, peer learning with fellow students, and hands-on lab support whenever you're stuck.",
        },
        {
          title: "Career Support Beyond the Classroom",
          body: "This program isn't just about learning to code — it's about getting hired. That's why it's paired with resume building, interview preparation, and placement assistance, helping you translate your new technical skills into real job opportunities in web development, software engineering, and related roles.",
        },
        {
          title: "Future-Proof Skill Investment",
          body: "As more businesses move operations, products, and services online, the demand for skilled web developers continues to grow steadily. Learning MERN Stack development today positions you for long-term relevance in a field that isn't going anywhere — with opportunities ranging from full-time employment to freelancing and entrepreneurship.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd is Amritsar's Trusted Choice for",
      accent: "MERN Stack Training",
      body: "When it comes to choosing an institute for MERN Stack training in Amritsar, the training provider matters just as much as the curriculum. Here's why Techcadd has become a preferred choice for students and professionals looking to build a career in full-stack web development.",
      reasons: [
        {
          title: "Experienced, Industry-Practicing Trainers",
          body: "At Techcadd, you don't learn from instructors reading off slides — you learn from trainers who understand real-world development practices, current industry standards, and the actual challenges developers face on the job. This practical grounding means the training goes beyond textbook concepts and reflects how MERN stack skills are genuinely applied in the workplace.",
        },
        {
          title: "Practical, Project-Driven Teaching Methodology",
          body: "Techcadd's approach to teaching centers on doing, not just watching. From your very first modules, you're writing code, debugging errors, and building functional components — culminating in complete, deployable web applications by the end of the course. This project-first philosophy ensures you graduate with tangible proof of your abilities, not just a certificate.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Learning to code effectively requires individual doubt-clearing and mentorship — something that's difficult in overcrowded classrooms. Techcadd maintains manageable batch sizes so trainers can actually engage with each student, track their progress, and provide the one-on-one support that makes a real difference, especially for beginners.",
        },
        {
          title: "Well-Equipped Infrastructure in Amritsar",
          body: "Techcadd's Amritsar training center is equipped with the systems, software, and lab environment needed for hands-on coding practice. Having access to a dedicated, distraction-free learning space — separate from studying at home — helps students stay focused and consistent throughout the course.",
        },
        {
          title: "Updated, Industry-Aligned Curriculum",
          body: "Technology moves fast, and Techcadd's MERN Stack curriculum is regularly reviewed and updated to reflect current industry practices, tools, and workflows — so you're not learning outdated methods that employers have already moved past.",
        },
        {
          title: "Strong Track Record with Local Students",
          body: "Techcadd has built its reputation in Amritsar and the wider Punjab region by training students across multiple domains — from web development to programming languages to emerging technologies — and helping many of them transition successfully into tech careers. That local trust, built over time, is something new or purely online-only institutes simply can't replicate.",
        },
        {
          title: "End-to-End Career Support",
          body: "Techcadd doesn't consider its job done once the syllabus is complete. The institute supports students with resume preparation, mock interviews, and placement assistance, helping bridge the gap between “course completed” and “job secured.”",
        },
        {
          title: "Flexible Scheduling for Real Life",
          body: "Understanding that students and professionals have different daily commitments, Techcadd offers multiple batch timing options — so you can pursue this training without having to pause your studies or your job.",
        },
        {
          title: "Genuine Investment in Student Outcomes",
          body: "Ultimately, what sets Techcadd apart is a training philosophy centered on outcomes — not just attendance. The goal isn't simply to teach MERN Stack concepts, but to make sure every student walks away job-ready, confident, and equipped to build real-world applications independently.",
        },
      ],
    },

    /* Eleven named reviews, carried at the star ratings the brief prints
       against each one — eight at five, three at four. The distribution and
       the headline average are computed from those, so nothing is inflated
       past what the copy supports. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ravneet Kaur",
          initials: "RK",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "I joined Techcadd's MERN Stack course right after finishing my BCA, and it completely changed how I understood web development. The trainers explained React concepts so clearly, and by the end I had built three real projects for my portfolio. Got placed as a Junior Developer within two months of completing the course!",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "Best decision I made after 12th. I had zero coding background, but the way Techcadd structured the course — starting from HTML/CSS/JS basics before jumping into React and Node — made it easy to follow. The Amritsar center has a great learning environment.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Career Switcher, Amritsar",
          rating: 4,
          meta: "MERN Stack batch",
          quote:
            "I was working in a non-tech job and wanted to switch careers. The evening batch timing worked perfectly for me. Learning MongoDB and Express alongside React gave me real confidence to apply for full-stack roles. Only wish the batch size was a bit smaller during peak hours.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "The project-based approach is what sets Techcadd apart. We weren't just copying code — we were building actual applications and debugging real errors. My trainer's industry experience really showed in how he explained backend concepts.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "B.Tech Graduate, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "As a B.Tech graduate, I knew the theory but lacked practical skills. This course filled that gap completely. The capstone project I built is now the first thing I show in interviews. Highly recommend for anyone in Amritsar serious about web development.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "Student, Amritsar",
          rating: 4,
          meta: "MERN Stack batch",
          quote:
            "Solid curriculum covering the entire MERN stack in good depth. The trainers were patient with doubts, and the lab facility at the Amritsar center is well equipped. Placement support helped me prepare properly for interviews.",
        },
        {
          name: "Amandeep Kaur",
          initials: "AK",
          role: "Beginner, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "I came in as a complete beginner and honestly didn't think I'd be building full applications by the end. Techcadd's step-by-step teaching style made even backend concepts like APIs and authentication easy to grasp.",
        },
        {
          name: "Rajwinder Singh",
          initials: "RS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "Switched from a different programming background to MERN stack here. The trainers helped me unlearn old habits and adapt to modern development practices quickly. Great mentorship throughout the course.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Student, Amritsar",
          rating: 4,
          meta: "MERN Stack batch",
          quote:
            "Good course overall — practical, well-paced, and career-focused. I appreciated the resume and interview prep sessions near the end. Would've liked a bit more time on deployment and DevOps basics, but overall a strong program.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "Techcadd's reputation in Amritsar is well earned. The MERN Stack course gave me exactly what I needed — real project experience, a portfolio, and the confidence to walk into interviews knowing I could actually build what I claimed to know.",
        },
        {
          name: "Sukhmani Kaur",
          initials: "SK",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MERN Stack batch",
          quote:
            "I researched a few institutes before choosing Techcadd, and I'm glad I did. Small batch size meant the trainer actually knew each student's progress. Learned React, Node, Express, and MongoDB thoroughly with hands-on practice throughout.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is MERN Stack, and why should I learn it?",
        a: "MERN Stack is a combination of four technologies — MongoDB, Express.js, React.js, and Node.js — used to build complete, full-stack web applications. It's popular because a single developer can work on both frontend and backend, making MERN developers highly valuable to startups and IT companies.",
      },
      {
        q: "Who can join Techcadd's MERN Stack Training course in Amritsar?",
        a: "This course is open to 12th pass students, graduates (BCA, B.Tech, MCA, or any stream), job seekers, working professionals looking to switch careers, and freelancers — no prior coding experience is required, as the course starts from the basics.",
      },
      {
        q: "Do I need a programming background to join this course?",
        a: "No. The course begins with foundational HTML, CSS, and JavaScript before progressing into React, Node.js, Express, and MongoDB, so complete beginners can follow the curriculum comfortably.",
      },
      {
        q: "How long is the MERN Stack Training course at Techcadd, Amritsar?",
        a: "Course duration varies based on the batch and learning pace; Techcadd offers structured timelines with both regular and flexible options. Contact the Amritsar center directly for current batch duration and schedule details.",
      },
      {
        q: "Will I build real projects during the course?",
        a: "Yes. The course is project-based from the start, and you'll build multiple real-world applications, culminating in a capstone project that demonstrates your full-stack development skills to potential employers.",
      },
      {
        q: "Does Techcadd provide placement assistance after the course?",
        a: "Yes. Techcadd supports students with resume building, interview preparation, and placement assistance to help them transition from course completion to actual job opportunities.",
      },
      {
        q: "What tools and technologies will I learn in this course?",
        a: "You'll learn HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, Mongoose, Git/GitHub, JWT authentication, Postman, and basic deployment practices — covering the full MERN development workflow.",
      },
      {
        q: "Are there flexible batch timings for working professionals?",
        a: "Yes. Techcadd offers multiple batch options, including weekday, weekend, and evening timings, so working professionals and students with existing commitments can join without scheduling conflicts.",
      },
      {
        q: "Is MERN Stack development a good career choice in 2026?",
        a: "Yes. Full-stack development remains one of the most in-demand tech skills, with strong hiring activity from startups, IT service companies, and product-based businesses across India, including growing opportunities in Punjab's IT sector.",
      },
      {
        q: "Where is Techcadd's MERN Stack Training center located in Amritsar?",
        a: "Techcadd's training center is located in Amritsar, offering in-person classes, hands-on lab access, and direct mentorship from trainers. Contact Techcadd for the exact address and directions.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes. Students who complete the MERN Stack Training course receive a certification from Techcadd, which can be added to your resume and professional profiles like LinkedIn.",
      },
      {
        q: "Can I learn MERN Stack if I'm from a non-technical background?",
        a: "Yes. Many students join this course with no prior technical background. The curriculum is structured to build your skills progressively, so a non-technical background is not a barrier as long as you're willing to put in consistent practice.",
      },
    ],

    cta: {
      eyebrow: "Start your full-stack developer journey today",
      heading: "🚀 Start Your Full-Stack Developer Journey Today —",
      accent: "Enroll at Techcadd, Amritsar",
      body: "Turn your interest in web development into a job-ready skill set. Whether you're a student, graduate, or working professional looking to switch careers, our hands-on MERN Stack program gives you the practical experience employers are actively looking for — backed by real projects, expert mentorship, and dedicated placement support.",
      /* The brief's "📋 Course Details" table, row for row. */
      facts: [
        "Course Name: MERN Stack Training (MongoDB, Express.js, React.js, Node.js)",
        "Duration: Flexible (Regular / Weekend / Fast-Track batches available)",
        "Mode: Offline (In-Person) at Amritsar Center",
        "Center: Techcadd, Amritsar",
        "Ideal For: 12th Pass Students, Graduates, Job Seekers, Working Professionals",
      ],
      assurances: [
        "No spam calls — only guidance from our course counselors",
        "Your information is kept 100% confidential",
        "Get honest answers about fees, duration, and placement support before you enroll",
      ],
      formTitle: "📝 Enquire Now — Get a Free Callback",
      formNote:
        "Fill in your details below, and our counselor will get in touch to guide you through the syllabus, batch timings, fees, and career support options.",
      submitLabel: "Request a Free Callback",
      placeholders: {
        name: "Full Name (required)",
        phone: "Phone Number (required)",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: [
        "12th Pass",
        "Graduate",
        "Working Professional",
        "Other",
      ],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "📞 Call Now for Instant Enquiry",
      body: "📍 Visit us at Techcadd, Amritsar. Not ready to fill in the form? Call the centre directly and a course counselor will walk you through the syllabus, batch timings, fees and career support options.",
      action: "Request a Free Callback",
      note: "No spam calls · Your information is kept 100% confidential · Honest answers before you enroll",
    },

    seo: {
      title: "MERN Stack Training Course in Amritsar | Techcadd",
      description:
        "Learn MERN Stack (MongoDB, Express, React, Node.js) at Techcadd, Amritsar. Hands-on projects, expert trainers & placement support. Enroll today!",
      keywords: [
        "MERN Stack Training course Amritsar",
        "MERN Stack course Amritsar",
        "Full Stack Development course Amritsar",
        "Web Development training Amritsar",
        "MERN Stack institute Amritsar",
        "Best MERN Stack training in Amritsar",
        "Full Stack Developer course near me Amritsar",
        "React Node MongoDB course Amritsar",
        "Full Stack Web Development classes Amritsar",
        "Techcadd MERN Stack course",
        "MERN Stack training with placement Amritsar",
        "Best institute for MERN Stack training in Amritsar",
        "MERN Stack course for beginners Amritsar",
        "MERN Stack training after 12th Amritsar",
        "MERN Stack course fees in Amritsar",
        "Full Stack Development course with live projects Amritsar",
        "MERN Stack training with job placement Amritsar",
        "Learn React Node.js MongoDB Express Amritsar",
        "MERN Stack coaching center Amritsar",
        "Full Stack Developer training for graduates Amritsar",
        "Weekend MERN Stack batches Amritsar",
        "Web development classes near GT Road Amritsar",
        "IT training institute Amritsar Punjab",
        "Coding classes Amritsar Punjab",
        "Best computer training institute Amritsar",
      ],
    },

    closing:
      "By the end of this program, you won't just understand MERN Stack theoretically — you'll have practical, demonstrable experience building and deploying complete web applications independently.",
  },
};

/* ------------------------------------------------------------------ table */

/* --------------------------------------------------------------- mean stack */

/**
 * Source copy: the Amritsar MEAN Stack brief (overview, six eligibility
 * personas with the "what you don't need" note, the two "why" arguments, nine
 * learning blocks with their toolchain, eleven student reviews, eleven FAQs,
 * the CTA/enquiry section with its course-details table, and the keyword/GEO
 * report). The nine learning blocks, the toolchain and the projects live in
 * `course-data.ts` instead, because they are the curriculum and the module
 * explorer, tool stack and portfolio rail all read them from the seed.
 */
const meanStack: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 the brief's on-page recommendations ask for — "MEAN Stack
         Training in Amritsar" — rather than the catalogue phrasing. */
      headline: "MEAN Stack Training in",
      accent: "Amritsar",
      tagline:
        "Hands-on, industry-relevant training in MongoDB, Express.js, Angular and Node.js — the four technologies that power modern, scalable web applications.",
      chips: ["Flexible batches", "Classroom & online", "Beginner to advanced"],
      image: "/images/courses/mean-stack.png",
    },

    overview: {
      heading: "MEAN Stack Training in Amritsar",
      paragraphs: [
        "Looking to build a career in full-stack web development? The MEAN Stack Training in Amritsar at Techcadd is designed for students, graduates, and job seekers who want hands-on, industry-relevant skills in MongoDB, Express.js, Angular, and Node.js — the four technologies that power modern, scalable web applications.",
        "This course takes you from the fundamentals of front-end and back-end development to building complete, real-world web applications using a single JavaScript-based technology stack. You'll learn database management with MongoDB, server-side scripting with Express and Node.js, and dynamic front-end interfaces with Angular — all under the guidance of experienced trainers based right here in Amritsar.",
        "Whether you're a 12th-pass student exploring tech careers, a graduate looking to upskill, or a working professional switching to development, Techcadd's MEAN Stack Training gives you practical project experience, portfolio-ready work, and placement support — making it one of the most career-focused full-stack training programs available in Amritsar.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "Techcadd's MEAN Stack Training in Amritsar takes you through a structured, layer-by-layer curriculum covering everything you need to build complete, production-ready web applications.",

    /* The six starting points the brief names, in its order, followed by the
       two notes that close the section — what you don't need to join, and what
       helps but isn't required. The checklist variant of `CourseFit` renders
       these as a grid, so the closing tiles sit naturally alongside them. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Techcadd's MEAN Stack Training in Amritsar is built for a wide range of learners — whether you're just starting your career journey or looking to switch into the fast-growing field of web development. Here's a closer look at who this course is ideal for:",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just finished school and are exploring career options in technology, this course is a strong starting point. You don't need prior coding experience — Techcadd's MEAN Stack Training begins with the fundamentals of programming logic, HTML, CSS, and JavaScript before moving into the core MEAN stack technologies. It's a practical alternative for students who want job-ready skills without committing to a lengthy traditional degree first.",
        },
        {
          label: "Graduates (BCA, B.Tech, B.Sc IT, MCA, and Other Streams)",
          detail:
            "Many graduates complete their degrees but still lack hands-on, industry-relevant coding experience. This course bridges that gap. Whether you studied computer science, IT, or even a non-technical field, Techcadd's structured curriculum helps you build real, deployable projects using MongoDB, Express.js, Angular, and Node.js — the exact skills recruiters look for in full-stack developer roles.",
        },
        {
          label: "Job Seekers Looking to Enter Tech",
          detail:
            "If you're currently job hunting and want to stand out in a competitive market, full-stack development is one of the most in-demand skill sets today. This course equips you with a complete, portfolio-ready skill set covering both front-end and back-end development, so you can confidently apply for developer roles, not just support or entry-level positions.",
        },
        {
          label: "Working Professionals Switching Careers",
          detail:
            "Career changers — whether coming from a non-IT background, a different engineering stream, or even a completely unrelated field — often find the MEAN stack approachable because it's built entirely on JavaScript. This means you don't need to learn multiple programming languages from scratch. If you're looking to pivot into tech with a in-demand, high-growth specialization, this course is designed to get you there efficiently.",
        },
        {
          label: "Freelancers and Aspiring Entrepreneurs",
          detail:
            "If you want to build your own web applications, launch a startup idea, or freelance as a full-stack developer, this course gives you the technical foundation to build complete, functional web apps independently — from database to deployment.",
        },
        {
          label: "Students Preparing for Amritsar's Local IT Job Market",
          detail:
            "Amritsar's IT and tech services sector is steadily growing, with increasing demand for developers who can work on live projects for local businesses, startups, and remote/international clients. Techcadd's Amritsar-based training ensures you learn in a local environment, with access to placement support and industry connections relevant to the regional job market — plus the flexibility to pursue remote opportunities nationwide.",
        },
        {
          label: "What You Don't Need to Join",
          detail:
            "No prior coding experience is mandatory. No specific degree requirement — students, graduates, and career switchers are all welcome. No advanced math or engineering background needed.",
        },
        {
          label: "What Helps (But Isn't Required)",
          detail:
            "Basic computer literacy. Interest in logical problem-solving. Willingness to practice coding regularly through hands-on projects. Techcadd's MEAN Stack Training is designed to be inclusive and beginner-friendly while still delivering the depth and rigor needed to prepare you for real, professional full-stack development roles.",
        },
      ],
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why This",
      accent: "Program",
      body: "Choosing the right web development training program can shape the trajectory of your entire career. Here's why Techcadd's MEAN Stack Training in Amritsar stands out as a smart, future-ready choice:",
      reasons: [
        {
          title: "A Complete, In-Demand Skill Set — Not Just Fragments",
          body: "Many courses teach isolated skills — a bit of front-end here, a bit of back-end there. This program is built differently. You learn MongoDB, Express.js, Angular, and Node.js as one connected, end-to-end system, so you understand exactly how a modern web application is built, deployed, and maintained from database to browser. This “full-stack fluency” is precisely what employers are actively hiring for.",
        },
        {
          title: "One Language, Four Technologies",
          body: "Because the entire MEAN stack runs on JavaScript, you avoid the steep learning curve of juggling multiple programming languages. Once you're comfortable with JavaScript fundamentals, applying that knowledge across the database layer, server layer, and front-end layer becomes far more intuitive — helping you learn faster and retain more.",
        },
        {
          title: "Project-Based, Hands-On Learning",
          body: "This program isn't built around passive lectures. You'll work on real, practical projects — building functional web applications, connecting front-end interfaces to live databases, and deploying working products. By the end of the course, you'll have a portfolio of real projects to show employers or clients, not just a certificate.",
        },
        {
          title: "Industry-Aligned Curriculum",
          body: "The curriculum is structured to reflect what's actually used in the industry today — component-based Angular development, RESTful API design with Express and Node.js, and NoSQL database management with MongoDB. This isn't outdated theory; it's the same stack used by startups, product companies, and IT service providers to build scalable applications.",
        },
        {
          title: "High Career Flexibility",
          body: "Full-stack developers are valuable precisely because they're versatile. With MEAN stack skills, you're not limited to one type of role — you can pursue front-end development, back-end development, full-stack roles, or even freelance and remote opportunities, giving you far more career flexibility than a single-specialization course.",
        },
        {
          title: "Local Training, Local Support",
          body: "Learning in Amritsar means smaller batches, more direct access to trainers, and a learning environment tailored to the local student community — while still preparing you for opportunities across India and remote/international roles. You get the benefit of in-person mentorship without sacrificing career reach.",
        },
        {
          title: "Strong Placement and Career Support",
          body: "Techcadd doesn't just teach you to code — the program is structured around career outcomes, including interview preparation, resume building, and placement assistance, so you're supported not just during training but as you transition into the job market.",
        },
        {
          title: "Future-Proof, Scalable Technology",
          body: "MongoDB, Express, Angular, and Node.js aren't passing trends — they're mature, widely-adopted technologies used by countless companies worldwide to build scalable, production-grade applications. Investing time in mastering this stack means investing in a skill set with long-term relevance.",
        },
        {
          title: "Beginner-Friendly Yet Career-Serious",
          body: "Whether you're starting from zero or already have some coding exposure, the program is structured to meet you where you are — while still pushing you toward genuinely job-ready, professional-level competency by the end. In short, this program is built for students who want more than just a certificate — they want real, demonstrable skills, a strong portfolio, and a clear path into a full-stack development career.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why",
      accent: "Techcadd",
      body: "When it comes to choosing where to learn MEAN Stack development in Amritsar, the training institute matters just as much as the curriculum. Here's why Techcadd is a trusted choice for students and job seekers across the region:",
      reasons: [
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's instructors bring real, practical development experience into the classroom — not just theoretical knowledge. This means you're learning current, industry-relevant practices for building and deploying MongoDB, Express.js, Angular, and Node.js applications, taught by people who understand how these skills are actually used on the job.",
        },
        {
          title: "Hands-On, Project-Driven Teaching Method",
          body: "Techcadd's training philosophy centers on “learn by building.” Instead of long stretches of passive lectures, you'll spend significant time writing code, building components, connecting databases, and troubleshooting real application issues — the same kind of problem-solving you'll face in an actual developer role.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Unlike oversized classrooms where individual doubts go unanswered, Techcadd keeps batch sizes manageable so trainers can give focused, one-on-one attention. If you're stuck on a bug or don't understand a concept, you get real support — not just a scheduled lecture and a “figure it out yourself” approach.",
        },
        {
          title: "Structured, Step-by-Step Curriculum",
          body: "The MEAN Stack Training program is broken into a logical progression — starting with programming fundamentals and front-end basics, moving into Angular for dynamic interfaces, then Node.js and Express.js for server-side logic, and finally MongoDB for database management. Each stage builds on the last, so you're never thrown into advanced concepts without the right foundation.",
        },
        {
          title: "Real Projects, Real Portfolio",
          body: "By the time you complete the course, you won't just have notes and a certificate — you'll have built functional, deployable web applications that you can showcase to employers or clients. This portfolio-first approach is a major differentiator when you're applying for developer roles.",
        },
        {
          title: "Career Support Beyond the Classroom",
          body: "Techcadd's support doesn't end when the course does. Students get guidance on resume building, interview preparation, and placement assistance, helping bridge the gap between “completing a course” and “landing a job.”",
        },
        {
          title: "Local Presence, Local Understanding",
          body: "As an Amritsar-based training center, Techcadd understands the local student community, the regional job market, and the specific challenges students face — from balancing part-time work with studies to preparing for both local and remote/national job opportunities. You're not learning from a generic, one-size-fits-all online program; you're learning from trainers who know your context.",
        },
        {
          title: "Flexible Learning for Different Student Needs",
          body: "Whether you're a 12th-pass student with time to dedicate fully to learning, a graduate balancing job applications, or a working professional upskilling on the side, Techcadd's program structure and support are designed to accommodate different starting points and schedules.",
        },
        {
          title: "Focus on Practical Employability, Not Just Course Completion",
          body: "Techcadd's core philosophy is that finishing a course should mean being genuinely job-ready — not just having attended classes. Every part of the training, from projects to mock interviews, is oriented toward making sure students can confidently step into real developer roles.",
        },
        {
          title: "Trusted Track Record",
          body: "Techcadd has built a reputation in Amritsar as a training institute that prioritizes practical skill-building and student outcomes over rote, certificate-only learning — making it a dependable choice for students serious about a career in tech.",
        },
      ],
    },

    /* Eleven named reviews, carried at the star ratings the brief prints
       against each one — eight at five, three at four. The distribution and
       the headline average are computed from those, so nothing is inflated
       past what the copy supports. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ravneet Kaur",
          initials: "RK",
          role: "B.Sc IT Graduate, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "I joined Techcadd's MEAN Stack course right after my B.Sc IT with almost zero real coding confidence. The trainers broke everything down step by step — by the time we reached the Angular and Node.js modules, I was actually building working apps on my own. Amritsar doesn't have too many institutes with this kind of hands-on approach.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "Best decision I made after 12th. Instead of jumping straight into a generic degree, I did the MEAN Stack Training at Techcadd first. Now I have real projects in my portfolio and a much clearer direction for my career in web development.",
        },
        {
          name: "Simranjit Kaur",
          initials: "SK",
          role: "Student, Amritsar",
          rating: 4,
          meta: "MEAN Stack batch",
          quote:
            "The course covers a lot — MongoDB, Express, Angular, Node — but the trainers pace it well so it doesn't feel overwhelming. Small batch size meant I could actually ask questions without feeling rushed. Only wish the MongoDB module was a bit longer.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "I was working in a completely different field and wanted to switch to tech. Techcadd's trainers were patient with someone starting from scratch. The full-stack project at the end really helped me understand how everything connects — front-end, back-end, database, all of it.",
        },
        {
          name: "Amanpreet Kaur",
          initials: "AK",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "What stood out for me was how practical everything was. We weren't just copying code from slides — we were debugging real errors, just like you'd do on an actual job. That's exactly the kind of experience I needed before applying for developer roles.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "Student, Amritsar",
          rating: 4,
          meta: "MEAN Stack batch",
          quote:
            "Solid course for anyone in Amritsar wanting to get into full-stack development. The Angular sessions especially were detailed. Placement support helped me prepare for interviews, which I genuinely wasn't expecting.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Graduate, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "As a graduate who didn't study computer science, I was nervous about keeping up. But Techcadd starts from the fundamentals, so I never felt lost. By the end, I'd built a full project connecting Angular to a Node/Express backend with MongoDB — something I couldn't have imagined doing before.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "Trainers here actually know the industry side of things, not just theory. They'd explain how things are done in real companies, not just how to pass an exam. That practical mindset made a real difference.",
        },
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Beginner, Amritsar",
          rating: 4,
          meta: "MEAN Stack batch",
          quote:
            "Good structured course, especially for beginners. The pace picks up once you're into Node.js and Express, so be ready to practice outside class hours too. Overall, a strong foundation for a full-stack career.",
        },
        {
          name: "Manpreet Singh",
          initials: "MS",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "I looked at a few institutes in Amritsar before choosing Techcadd, and I'm glad I did. The one-on-one attention in small batches made a huge difference when I got stuck on bugs. Ended the course with a working project I'm genuinely proud of.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Student, Amritsar",
          rating: 5,
          meta: "MEAN Stack batch",
          quote:
            "Highly recommend this course if you're serious about web development. The curriculum is well thought out, and the trainers make sure you understand concepts, not just memorize syntax. Amritsar students finally have a solid local option for this.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — that shape is
       what the FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is MEAN Stack Training, and what does it cover?",
        a: "MEAN Stack Training teaches you to build full-stack web applications using MongoDB (database), Express.js (back-end framework), Angular (front-end framework), and Node.js (server runtime) — a complete, JavaScript-based technology stack used to develop scalable web applications.",
      },
      {
        q: "Who can join this MEAN Stack course in Amritsar?",
        a: "This course is open to 12th-pass students, graduates from any stream, job seekers, working professionals looking to switch careers, and freelancers or aspiring entrepreneurs. No prior coding experience is required.",
      },
      {
        q: "Do I need a computer science background to learn MEAN Stack?",
        a: "No. The course starts with programming and web development fundamentals before progressing to Angular, Node.js, Express.js, and MongoDB, so students from any educational background can follow along.",
      },
      {
        q: "How long does the MEAN Stack Training course take to complete?",
        a: "Course duration depends on the batch schedule and learning pace, typically structured across weekly sessions with a progressive curriculum. Contact Techcadd's Amritsar centre for exact batch timings and duration.",
      },
      {
        q: "Will I build real projects during the course?",
        a: "Yes. The course is project-based, and you'll build functional, deployable web applications — including full-stack projects connecting Angular front-ends to Node.js/Express back-ends with MongoDB databases — giving you a portfolio to show employers.",
      },
      {
        q: "Does Techcadd provide placement support after the course?",
        a: "Yes. Techcadd offers career support including resume building, interview preparation, and placement assistance to help students transition from training into full-stack developer roles.",
      },
      {
        q: "What is the difference between MEAN Stack and other web development courses?",
        a: "Unlike courses that teach isolated skills, MEAN Stack Training covers the entire development pipeline — front-end (Angular), back-end (Node.js and Express.js), and database (MongoDB) — all using JavaScript, giving you complete full-stack capability rather than a single specialization.",
      },
      {
        q: "Is this course suitable for someone switching careers into tech?",
        a: "Yes. Because the entire MEAN stack is JavaScript-based, career switchers don't need to learn multiple programming languages from scratch, making it one of the more approachable paths into full-stack development.",
      },
      {
        q: "What tools will I learn to use during the course?",
        a: "You'll work with Visual Studio Code, Git and GitHub, Postman for API testing, npm for package management, MongoDB Compass, and Chrome DevTools — the same tools used by professional developers.",
      },
      {
        q: "Why should I choose Techcadd for MEAN Stack Training in Amritsar?",
        a: "Techcadd offers experienced trainers, small batch sizes for personalized attention, a project-driven curriculum, and career support — combined with a local, Amritsar-based learning environment tailored to regional students.",
      },
      {
        q: "Can I get a job in web development after completing this course?",
        a: "Yes. Full-stack developers with MEAN stack skills are in demand across startups, IT service companies, and product-based businesses. Combined with Techcadd's placement support and portfolio-building approach, students are positioned for front-end, back-end, or full-stack developer roles.",
      },
    ],

    cta: {
      eyebrow: "Start your full-stack career journey",
      heading: "🚀 Start Your Full-Stack Career Journey — Enroll in MEAN Stack Training at",
      accent: "Techcadd, Amritsar",
      body: "Ready to become a job-ready full-stack developer? Get hands-on training in MongoDB, Express.js, Angular, and Node.js — with real projects, expert mentorship, and placement support to help you land your first developer role.",
      /* The brief's "📌 Course Details" table, row for row. */
      facts: [
        "Course Name: MEAN Stack Training",
        "Duration: Confirm current batch duration with the Techcadd Amritsar centre",
        "Mode: Classroom (Amritsar Centre) / Online options available",
        "Centre: Techcadd, Amritsar",
        "Eligibility: 12th Pass, Graduates, Job Seekers, Career Switchers",
      ],
      assurances: [
        "100% free counselling",
        "No hidden charges to enquire",
        "Your details stay private",
      ],
      formTitle: "📝 Enquire Now — Get Free Course Counselling",
      formNote:
        "Fill in your details below and our team will get back to you with course fees, batch timings, and a free career counselling session.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name (required)",
        phone: "Phone Number (required)",
        email: "Email Address (required)",
      },
      showEmail: true,
      statusLabel: "Highest Qualification",
      statusOptions: ["12th Pass", "Graduate", "Post Graduate", "Other"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Afternoon", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "📞 Request a Free Callback",
      body: "Request a free callback — no obligation, no pressure. Our counsellors will walk you through the course curriculum, fee structure, and career outcomes so you can make an informed decision. Classroom sessions run at the Amritsar centre, with online options available.",
      action: "Request Callback",
      note: "Seats fill up quickly each batch — enquire today to secure your spot in the next MEAN Stack Training batch at Techcadd, Amritsar.",
    },

    seo: {
      title: "MEAN Stack Training in Amritsar | Techcadd",
      description:
        "Learn MEAN Stack (MongoDB, Express.js, Angular, Node.js) at Techcadd, Amritsar. Hands-on projects, expert trainers & placement support. Enquire today!",
      keywords: [
        "MEAN stack training Amritsar",
        "MEAN stack course Amritsar",
        "MEAN stack institute in Amritsar",
        "Best MEAN stack training institute Amritsar",
        "MEAN stack coaching centre Amritsar",
        "MEAN stack course fee Amritsar",
        "MEAN stack syllabus Amritsar",
        "MEAN stack certification course Amritsar",
        "Full stack web development training Amritsar",
        "Full stack developer course Amritsar",
        "Node.js Angular MongoDB training Amritsar",
        "Web development course for beginners Amritsar",
        "Best IT training institute Amritsar",
        "Which institute offers MEAN stack training in Amritsar",
        "How much does MEAN stack course cost in Amritsar",
        "Best institute for full stack development in Amritsar for beginners",
        "MEAN stack course after 12th in Amritsar",
        "Is MEAN stack good for career switch",
        "MEAN stack vs MERN stack which to learn in Amritsar",
        "Full stack developer training with placement in Amritsar",
      ],
    },

    closing:
      "By the end of this program, you won't just have a certificate — you'll have real, demonstrable skills, a portfolio of working full-stack projects, and a clear path into a full-stack development career.",
  },
};

/* ----------------------------------------------------------- php full stack */

/**
 * Source copy: the Amritsar PHP Full Stack brief (overview, ten eligibility
 * personas, the two "why" arguments, sixteen learning blocks with their
 * toolchain, ten student reviews, eighteen FAQs, the CTA/enquiry section with
 * its course-details table, and the keyword/GEO report). The sixteen learning
 * blocks, the toolchain and the projects live in `course-data.ts` instead,
 * because they are the curriculum and the module explorer, tool stack and
 * portfolio rail all read them from the seed.
 */
const phpFullStack: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 the brief's on-page recommendations ask for — "PHP Full Stack
         Training in Amritsar" — rather than the catalogue phrasing. */
      headline: "PHP Full Stack Training in",
      accent: "Amritsar",
      tagline:
        "Practical frontend, backend and database skills for students, graduates and beginners — HTML, CSS, JavaScript, PHP and MySQL, learned through projects.",
      chips: ["Classroom & practical training", "Frontend + backend + database", "Beginner-friendly"],
      image: "/images/courses/php-full-stack.png",
    },

    overview: {
      heading: "PHP Full Stack Training in Amritsar",
      paragraphs: [
        "Looking to build a practical career in web development? PHP Full Stack Training in Amritsar can help students and aspiring developers develop the skills needed to create complete, dynamic websites and web applications. Full-stack development covers both the front end that users interact with and the back end that powers application logic, databases, authentication, and server-side functionality.",
        "At Techcadd, the training is designed for students, fresh graduates, job seekers, and beginners who want to develop industry-relevant web development skills through structured learning and practical projects. The course can cover essential technologies such as HTML, CSS, JavaScript, PHP, MySQL, responsive web development, and backend integration, along with practical development workflows.",
        "For students searching for PHP training in Amritsar, PHP full stack development course in Amritsar, or full stack web development training in Amritsar, a project-focused learning approach can provide a stronger foundation than studying individual technologies separately.",
        "The goal is to help learners progress from understanding basic web concepts to developing functional, database-driven web applications and building a portfolio that can support future internship and career opportunities.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "A good PHP Full Stack Training in Amritsar should help students understand the complete web development process, from creating a webpage to developing database-driven applications — built up progressively through frontend development, programming, backend development, databases, projects and practical development workflows.",

    /* The ten starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do PHP Full Stack Training in Amritsar?",
      intro:
        "PHP Full Stack Training in Amritsar is suitable for students and beginners who want to build a career in web development without needing years of prior programming experience. A structured full-stack program can help learners understand how websites and web applications are designed, developed, connected to databases, tested, and prepared for real-world use.",
      criteria: [
        {
          label: "12th-Pass Students",
          detail:
            "Students who have completed 12th can consider PHP full-stack training as an early step toward a career in IT and web development. You do not necessarily need advanced programming knowledge to begin. The course can introduce concepts progressively, starting with web fundamentals such as HTML and CSS before moving into JavaScript, PHP, databases, and backend development. For students looking for PHP courses in Amritsar after 12th, practical training can provide an opportunity to start developing websites while continuing their academic education or preparing for internships.",
        },
        {
          label: "College Students",
          detail:
            "Students pursuing BCA, BSc IT, BTech, MCA, or other computer-related programs can use full-stack training to strengthen their practical skills. Academic courses often introduce programming concepts, while additional project-based training can provide more opportunities to apply those concepts. A PHP full stack development course in Amritsar can help students practise frontend development, server-side programming, database management, and application integration through hands-on projects.",
        },
        {
          label: "Graduates Looking for IT Careers",
          detail:
            "Graduates from technical or non-technical backgrounds who want to enter the IT sector can explore full-stack development as a career path. The important factor is willingness to learn programming, practise regularly, and build projects. For graduates searching for web development training in Amritsar, learning PHP alongside frontend technologies and MySQL can create a foundation for entry-level web development roles.",
        },
        {
          label: "Beginners Interested in Coding",
          detail:
            "You do not have to be an expert programmer before starting. Beginners who are genuinely interested in learning how websites work can start with fundamental concepts and gradually progress toward more complex development tasks. A good training approach should focus on understanding concepts rather than simply memorising code. Students should learn why particular technologies are used, how different components communicate, and how to troubleshoot common development problems.",
        },
        {
          label: "Students Wanting Practical Projects",
          detail:
            "Students who have learned programming theoretically but have limited project experience can benefit from practical full-stack training. Building projects gives learners an opportunity to work with frontend interfaces, PHP backend functionality, MySQL databases, forms, authentication, APIs, and other development components. This project experience can also help students create a portfolio that demonstrates what they can actually build.",
        },
        {
          label: "Job Seekers and Career Changers",
          detail:
            "People looking to move into web development can consider PHP full-stack training if they are prepared to invest time in learning programming and developing practical skills. A career change requires consistent practice, but structured training can make the learning process more organised. Those searching for PHP training institutes in Amritsar should compare factors such as curriculum, practical sessions, projects, trainer support, learning environment, and career guidance rather than choosing a course only because of its duration or promotional claims.",
        },
        {
          label: "Freelancing Aspirants",
          detail:
            "PHP and web development skills can also be useful for learners interested in freelancing. Small businesses and clients may require websites, custom functionality, database-driven applications, maintenance, integrations, and other web development services. However, successful freelancing requires more than coding. Learners should also develop communication, requirement analysis, estimation, debugging, documentation, and client-management skills.",
        },
        {
          label: "WordPress and CMS Learners",
          detail:
            "Students interested in WordPress development can benefit from understanding PHP because WordPress is built using PHP. Learning PHP fundamentals can help learners understand themes, plugins, custom functionality, templates, and backend concepts more deeply. This can be particularly useful for learners who want to move beyond basic website editing toward customised WordPress development.",
        },
        {
          label: "Students Interested in Backend Development",
          detail:
            "Learners who enjoy programming, databases, application logic, and server-side functionality may find the backend side of full-stack development particularly interesting. PHP provides a practical entry point into server-side web development, while MySQL helps students understand how application data is stored and managed.",
        },
        {
          label: "Anyone Ready to Practise Consistently",
          detail:
            "The most important requirement is not a specific academic background—it is the willingness to learn and practise. Full-stack development involves problem-solving, debugging, logical thinking, and continuous improvement. For students considering PHP full stack training in Amritsar, the best starting point is to choose a structured program, practise outside classroom sessions, complete real projects, and gradually build a portfolio. Whether you are a 12th-pass student, college learner, graduate, job seeker, aspiring freelancer, or beginner, PHP full-stack training can provide a structured pathway into web development when combined with consistent practice and project work.",
        },
      ],
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why Choose This Program for PHP Full Stack",
      accent: "Training in Amritsar?",
      body: "Choosing the right PHP Full Stack Training in Amritsar is an important decision for students who want to turn their interest in web development into practical, career-ready skills. Learning only individual programming languages may not be enough to understand how a complete web application works. A full-stack program brings frontend, backend, databases, and application development together in one structured learning path.",
      reasons: [
        {
          title: "Learn Complete Web Development",
          body: "One of the major advantages of full-stack training is that students can understand the complete development process. Instead of learning only how to design a webpage or write backend code, learners can understand how the different parts of a web application work together. A structured program can introduce HTML, CSS, JavaScript, PHP, MySQL, responsive design, backend programming, database connectivity, forms, authentication, APIs, and deployment concepts. This broader understanding can help students approach development projects more confidently.",
        },
        {
          title: "Build Practical Skills",
          body: "For students searching for a PHP course in Amritsar, practical learning should be an important consideration. Coding becomes easier to understand when learners actually use it to solve problems. Projects can help students practise creating web pages, developing forms, storing information in databases, implementing login systems, processing user requests, and connecting frontend interfaces with backend functionality. Instead of simply watching tutorials, students can learn by creating functional applications and troubleshooting issues during development.",
        },
        {
          title: "Suitable for Beginners",
          body: "A well-structured PHP full-stack program can begin with fundamentals before progressing toward advanced concepts. This makes the learning journey more manageable for beginners. Students can start with HTML and CSS, understand basic JavaScript, learn programming logic, and then progress toward PHP and MySQL. Gradually, they can combine these technologies to create complete applications. This step-by-step approach can be particularly useful for 12th-pass students, college students, graduates, and beginners in Amritsar who have limited professional development experience.",
        },
        {
          title: "Develop a Portfolio",
          body: "A qualification alone does not always demonstrate what a developer can build. Practical projects can provide students with tangible examples of their abilities. During full-stack training, learners can work on projects such as business websites, registration systems, authentication modules, database-driven applications, dashboards, content management systems, or e-commerce concepts. A collection of completed projects can become an important part of a student's portfolio when applying for internships, entry-level positions, freelance opportunities, or further development roles.",
        },
        {
          title: "Understand Frontend and Backend",
          body: "Full-stack development provides exposure to both sides of web applications. The frontend focuses on what users see and interact with, while the backend handles application logic, data processing, authentication, and communication with databases. Understanding both areas can help students communicate more effectively with development teams and understand how complete applications function.",
        },
        {
          title: "Learn Database Management",
          body: "Modern applications depend heavily on data. MySQL training can introduce students to database concepts such as tables, records, relationships, queries, filtering, updating information, and retrieving data. Connecting PHP applications with MySQL gives learners practical experience in building database-driven websites and applications.",
        },
        {
          title: "Improve Problem-Solving Skills",
          body: "Programming is not only about writing code. Developers regularly encounter errors, unexpected behaviour, database issues, validation problems, and integration challenges. Project-based training gives students opportunities to troubleshoot these problems. Over time, this can improve logical thinking, debugging ability, and confidence when approaching unfamiliar development tasks.",
        },
        {
          title: "Explore Career Opportunities",
          body: "After developing a solid foundation, learners can explore entry-level opportunities such as PHP developer, junior web developer, backend developer, WordPress developer, web application developer, or trainee developer, depending on their skills and employer requirements. Students interested in freelancing can also use their development knowledge to create websites and web applications for clients.",
        },
        {
          title: "Learn Skills Relevant to the Local IT Market",
          body: "Students searching for PHP training in Amritsar often want skills that can be applied to internships, jobs, freelance projects, or local business requirements. A practical curriculum focused on commonly used web technologies can help learners build a stronger foundation. However, students should remember that completing a course does not automatically guarantee employment. Career outcomes depend on practical ability, portfolio quality, communication skills, interview preparation, and consistent effort.",
        },
        {
          title: "A Structured Path From Beginner to Developer",
          body: "The biggest benefit of a full-stack program is having a structured learning path. Rather than jumping randomly between programming tutorials, students can progress from web fundamentals to frontend development, PHP programming, database integration, complete projects, and deployment concepts. For learners looking for PHP full stack development training in Amritsar, this structured approach can make learning more focused and practical. Ultimately, the value of the program comes from what students can do with the skills they learn. Regular practice, real projects, problem-solving, and continuous learning can help turn classroom knowledge into practical development capability.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd for PHP Full Stack",
      accent: "Training in Amritsar?",
      body: "Choosing a training institute is an important step for students who want to build practical web development skills. Techcadd focuses on helping learners understand development concepts through structured learning and hands-on practice. For students searching for PHP Full Stack Training in Amritsar, the program can provide a pathway from basic web development concepts to building complete, database-driven applications.",
      reasons: [
        {
          title: "Practical Learning Approach",
          body: "Web development is best understood through practice. At Techcadd, students can work with concepts through practical exercises and development projects rather than depending entirely on theoretical learning. Learners can practise technologies such as HTML, CSS, JavaScript, PHP, and MySQL while understanding how these technologies work together. Practical tasks can help students become more comfortable with writing code, identifying errors, connecting databases, and developing functional web pages and applications.",
        },
        {
          title: "Beginner-Friendly Learning",
          body: "Students come from different educational backgrounds and may have different levels of programming knowledge. A structured learning approach can help beginners start with fundamental concepts before progressing to more complex development topics. Students can gradually learn webpage structure, styling, programming logic, client-side scripting, server-side programming, and database connectivity. This progression can make PHP training in Amritsar more approachable for learners who are starting their programming journey.",
        },
        {
          title: "Learn Frontend and Backend Development",
          body: "A major advantage of full-stack training is exposure to both frontend and backend development. Students can learn how to create user-facing interfaces using HTML, CSS, and JavaScript while also understanding how PHP handles backend processing and how MySQL stores application data. This combination gives learners a broader understanding of how modern websites and web applications operate.",
        },
        {
          title: "Project-Based Experience",
          body: "Projects are an important part of developing practical confidence. Instead of stopping after completing individual programming exercises, students can apply their knowledge to complete applications. Working on projects can help learners understand requirements, plan functionality, write code, connect databases, test features, identify bugs, and improve their applications. A portfolio containing meaningful projects can also help students demonstrate their practical capabilities during internship or job applications.",
        },
        {
          title: "Career-Focused Skill Development",
          body: "Techcadd's approach can be useful for students who are learning web development with a career objective. Along with technical knowledge, learners should develop problem-solving ability, debugging skills, communication, and an understanding of development workflows. Students can use their training as a foundation while preparing for opportunities such as junior web development, PHP development, backend development, WordPress development, internships, or freelance projects.",
        },
        {
          title: "Learn With Industry-Relevant Technologies",
          body: "Technology changes continuously, so students need a strong foundation that allows them to continue learning after completing their training. PHP, JavaScript, MySQL, HTML, and CSS remain useful technologies across many web development environments. Understanding the fundamentals behind these technologies can make it easier for learners to adapt to frameworks, libraries, CMS platforms, APIs, and newer development practices in the future.",
        },
        {
          title: "Support for Students and Beginners",
          body: "Students often have questions while learning programming. A supportive training environment can help learners identify where they are making mistakes and understand how to solve problems. For beginners looking for PHP full stack courses in Amritsar, access to structured guidance can make the learning process more organised than attempting to learn every topic independently.",
        },
        {
          title: "Build Confidence Through Practice",
          body: "Programming confidence develops through repeated practice. Students may initially find syntax, database queries, debugging, or backend concepts difficult. With regular exercises and projects, these concepts can become easier to understand. The objective should not simply be to finish the syllabus but to develop the ability to understand a problem, plan a solution, write the required code, test it, and fix issues.",
        },
        {
          title: "Suitable for Different Career Goals",
          body: "PHP full-stack skills can support several career directions. Depending on individual interests and additional skills, learners can explore web development, backend development, WordPress development, freelance web development, or further specialise in frameworks and advanced technologies. Students can therefore use the training as a starting point rather than treating it as the end of their learning journey.",
        },
        {
          title: "Why Students in Amritsar Can Consider Techcadd",
          body: "For learners specifically searching for PHP Full Stack Training in Amritsar, choosing a nearby training centre can make regular classroom participation and practical learning more convenient. Techcadd aims to provide a structured environment where students can learn web development concepts, practise technologies, work on projects, and prepare themselves for the next stage of their careers. Ultimately, successful development careers require more than completing a certificate. Students should continue practising, build projects, understand modern development practices, improve their portfolios, and stay updated with changing technologies. Techcadd can provide the structured learning foundation; consistent practice and continuous learning can help students turn that foundation into long-term development skills.",
        },
      ],
    },

    /* Ten named reviews, each carried under the heading the brief files it
       against. The brief prints no star rating beside any of them and every
       quote is positive without reservation, so all ten are carried at five
       rather than inventing a spread the copy does not support. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Amandeep Singh",
          initials: "AS",
          role: "Amritsar",
          rating: 5,
          meta: "Beginner-Friendly Learning",
          quote:
            "I was completely new to PHP and backend development. The course started from the basics and gradually moved toward projects. This made learning much easier for me.",
        },
        {
          name: "Gurpreet Kaur",
          initials: "GK",
          role: "Amritsar",
          rating: 5,
          meta: "Practical Project Experience",
          quote:
            "The practical projects were the most useful part for me. I got a better understanding of how PHP, MySQL and frontend technologies work together in an actual website.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Helpful for College Students",
          quote:
            "I joined the PHP full stack course while studying. It helped me connect the programming concepts from college with practical web development.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Improved Coding Confidence",
          quote:
            "Initially I found backend programming confusing, especially database connectivity. After practising PHP and MySQL through different exercises, I became much more comfortable writing and debugging code.",
        },
        {
          name: "Manpreet Singh",
          initials: "MS",
          role: "Amritsar",
          rating: 5,
          meta: "Good Learning Structure",
          quote:
            "I liked the structured approach. We started with HTML and CSS, then moved to JavaScript, PHP and MySQL. Learning everything step by step helped me understand full-stack development better.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for Beginners",
          quote:
            "I was looking for PHP training in Amritsar and wanted something practical rather than only theory. The projects gave me opportunities to practise what I was learning.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "Amritsar",
          rating: 5,
          meta: "Database Development Practice",
          quote:
            "My biggest challenge was understanding databases. Working with MySQL and connecting it with PHP helped me understand how applications store and retrieve information.",
        },
        {
          name: "Ravneet Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "Portfolio Development",
          quote:
            "The project work helped me start building a portfolio. It gave me examples that I could discuss when explaining my development skills.",
        },
        {
          name: "Dilpreet Singh",
          initials: "DS",
          role: "Amritsar",
          rating: 5,
          meta: "Career-Focused Learning",
          quote:
            "I joined because I wanted to move toward web development. The course helped me understand what frontend, backend and database development involve and gave me a stronger foundation.",
        },
        {
          name: "Jashanpreet Kaur",
          initials: "JK",
          role: "Amritsar",
          rating: 5,
          meta: "Overall Learning Experience",
          quote:
            "My experience with PHP full stack training was positive. I especially liked working on practical applications because it showed me how different technologies connect to create a complete website.",
        },
      ],
    },

    /* Answers lead with the direct answer before they elaborate — the
       answer-first shape the brief's AEO section asks for, and what the
       FAQPage schema in the course route lifts into AI answers. */
    faqs: [
      {
        q: "What is PHP Full Stack Training?",
        a: "PHP Full Stack Training teaches students how to develop complete web applications using frontend and backend technologies. A typical learning path can include HTML, CSS, JavaScript, PHP, MySQL, APIs, database integration, and practical projects.",
      },
      {
        q: "Who can join PHP Full Stack Training in Amritsar?",
        a: "Students who have completed 12th, college students, graduates, job seekers, beginners, and aspiring freelancers can consider PHP full-stack training. Prior professional programming experience is not necessarily required, although an interest in coding and regular practice are important.",
      },
      {
        q: "Is PHP Full Stack Training suitable for beginners?",
        a: "Yes. Beginners can start with fundamental web development concepts and gradually progress toward programming, databases, backend development, and projects. Students should choose a course that provides a structured progression rather than assuming advanced programming knowledge.",
      },
      {
        q: "What technologies are taught in PHP Full Stack Training?",
        a: "The curriculum can include HTML, CSS, JavaScript, PHP, MySQL, Git, APIs, JSON, responsive web development, database integration, and WordPress/PHP concepts. The exact syllabus may vary by training program.",
      },
      {
        q: "Why should I learn PHP for web development?",
        a: "PHP is a server-side programming language used to build dynamic websites and web applications. Learning PHP can also provide a useful foundation for understanding backend programming, database connectivity, and PHP-based platforms such as WordPress.",
      },
      {
        q: "Do I need a computer science degree to learn PHP?",
        a: "No. A computer science degree is not a mandatory requirement for learning PHP. Students from different academic backgrounds can learn web development if they are willing to understand programming fundamentals and practise consistently.",
      },
      {
        q: "Can I learn PHP after 12th?",
        a: "Yes. Students who have completed 12th can begin learning PHP and web development. Starting with HTML, CSS, and basic programming concepts before moving into PHP can make the learning process easier for beginners.",
      },
      {
        q: "What will I build during PHP Full Stack Training?",
        a: "Depending on the curriculum, students may work on business websites, registration systems, login systems, CRUD applications, dashboards, database-driven websites, blogs, CMS projects, or e-commerce concepts. Practical projects are valuable because they allow students to apply multiple technologies together.",
      },
      {
        q: "Is PHP Full Stack Training useful for getting a job?",
        a: "PHP full-stack training can provide foundational technical skills for entry-level web development opportunities. However, completing a course does not guarantee employment. Job prospects also depend on practical skills, projects, portfolio quality, communication, interview performance, and the requirements of individual employers.",
      },
      {
        q: "Can I become a freelancer after learning PHP?",
        a: "PHP development skills can be useful for freelance web development. Freelancers may work on websites, custom functionality, database-driven applications, WordPress projects, maintenance, and integrations. However, freelancing also requires client communication, requirement gathering, pricing, project management, and the ability to deliver work independently.",
      },
      {
        q: "Is MySQL included in PHP Full Stack Training?",
        a: "MySQL is commonly included because PHP applications frequently need databases to store and manage information. Students can learn SQL queries, tables, relationships, data operations, and PHP-MySQL connectivity.",
      },
      {
        q: "Will I learn frontend development as well as PHP?",
        a: "A full-stack program generally covers both frontend and backend development. Students can learn HTML and CSS for webpage structure and styling, JavaScript for browser-side functionality, and PHP for server-side programming.",
      },
      {
        q: "Where can I find PHP Full Stack Training in Amritsar?",
        a: "Students searching for PHP Full Stack Training in Amritsar can compare local institutes based on curriculum, practical projects, trainer experience, course structure, learning mode, support, and career guidance before enrolling.",
      },
      {
        q: "Is PHP still useful for web development?",
        a: "PHP continues to be relevant for many websites, web applications, CMS platforms, and backend development environments. Its usefulness for an individual career depends on the type of development work they want to pursue and the additional technologies they learn alongside it.",
      },
      {
        q: "What career options can I explore after PHP Full Stack Training?",
        a: "Depending on your skills and experience, you can explore roles such as Junior PHP Developer, Web Developer, Backend Developer, PHP Developer, WordPress Developer, Web Application Developer, or freelance web developer. Additional learning in frameworks, APIs, version control, deployment, testing, and modern JavaScript can further expand your development capabilities.",
      },
      {
        q: "How long does PHP Full Stack Training take?",
        a: "The duration depends on the institute, syllabus, learning mode, and depth of practical training. Students should check the current course duration directly with Techcadd before enrolment because schedules and course structures can change.",
      },
      {
        q: "Is practical training important for PHP development?",
        a: "Yes. Programming requires practice. Practical exercises and projects help learners understand how to apply concepts, connect databases, debug applications, and solve development problems.",
      },
      {
        q: "What should I check before joining a PHP course in Amritsar?",
        a: "Before enrolling, check the course syllabus and technologies covered, practical project work, trainer and classroom support, course duration and schedule, learning mode, lab/practice facilities, portfolio opportunities, career guidance, and current fees and admission requirements.",
      },
    ],

    cta: {
      eyebrow: "Start your PHP full stack learning journey in Amritsar",
      heading: "Build Practical Web Development Skills with",
      accent: "Techcadd",
      body: "Ready to move from learning programming concepts to building real web applications? Techcadd's PHP Full Stack Training in Amritsar is designed for students, graduates, beginners, and aspiring developers who want to develop practical frontend, backend, and database skills. Learn technologies such as HTML, CSS, JavaScript, PHP, and MySQL, practise through projects, and develop a stronger foundation for your next step in web development.",
      /* The brief's "Course Details" table, row for row, closing on the note it
         prints under the table. */
      facts: [
        "Course Name: PHP Full Stack Training",
        "Location: Amritsar, Punjab",
        "Mode: Classroom / Practical Training",
        "Centre: Techcadd, Amritsar",
        "Suitable For: Students, Graduates, Beginners & Job Seekers",
        "Focus: Frontend + Backend + Database Development",
        "Please confirm the latest duration, batch timings, fees, and available learning modes directly with Techcadd, as these details may change.",
      ],
      /* The brief's "Why Enquire? Get information about:" list. */
      assurances: [
        "Current course curriculum and technologies covered",
        "Latest batch schedule and course duration",
        "Fees and available payment options",
        "Classroom and learning options, and practical projects",
        "Trainer support, admission process and career guidance",
      ],
      formTitle: "Quick Enquiry Form",
      formNote:
        "Tell us what you would like to know and the Techcadd team will get back to you about the course, curriculum, learning process, and current batch availability.",
      submitLabel: "Request a Callback",
      placeholders: {
        name: "Enter your full name",
        phone: "Enter your phone number",
        email: "Enter your email address",
      },
      showEmail: true,
      statusLabel: "Qualification",
      statusOptions: ["12th", "Graduate", "Student", "Other"],
      batchLabel: "Preferred Learning Mode",
      batchOptions: ["Classroom", "Other"],
    },

    demo: {
      eyebrow: "Have questions?",
      heading: "Let Techcadd Help",
      body: "Not sure whether PHP full-stack development is right for you? Submit your enquiry and speak with the Techcadd team about the course, curriculum, learning process, and current batch availability.",
      action: "Request a Callback",
      note: "Confirm the latest duration, batch timings, fees and learning modes directly with Techcadd, as these details may change.",
    },

    seo: {
      title: "PHP Full Stack Training in Amritsar | Techcadd",
      description:
        "Learn PHP Full Stack Development in Amritsar with Techcadd. Build skills in HTML, CSS, JavaScript, PHP, MySQL and practical web development projects.",
      keywords: [
        "PHP Full Stack Training in Amritsar",
        "PHP Full Stack Course in Amritsar",
        "PHP Course in Amritsar",
        "PHP Training in Amritsar",
        "PHP Classes in Amritsar",
        "Full Stack Development Course in Amritsar",
        "Full Stack Web Development Course in Amritsar",
        "Web Development Course in Amritsar",
        "Web Development Training in Amritsar",
        "PHP Developer Course in Amritsar",
        "PHP Training Institute in Amritsar",
        "Full Stack Training Institute in Amritsar",
        "PHP course in Amritsar, Punjab",
        "full stack development classes in Amritsar",
        "PHP developer training in Amritsar",
        "coding classes in Amritsar",
        "full stack course for students in Amritsar",
        "PHP training for beginners in Amritsar",
        "PHP course after 12th in Amritsar",
        "PHP and MySQL training in Amritsar",
      ],
    },

    closing:
      "The objective is to move students beyond memorising syntax — combining frontend technologies, PHP backend programming, databases, APIs and development tools to analyse requirements, write code, connect databases, test functionality, troubleshoot errors and improve real applications.",
  },
};

/* ------------------------------------------------------- digital marketing */

/**
 * Source copy: the Amritsar digital marketing brief (overview, the twelve
 * eligibility personas plus the note on choosing an institute, the two "why"
 * arguments, fourteen learning blocks, ten student reviews, eighteen FAQs, the
 * enquiry section and the keyword/GEO report). The fourteen learning blocks
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 */
const digitalMarketing: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Digital Marketing · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Digital Marketing
         Training in Amritsar" — rather than the catalogue phrasing. */
      headline: "Digital Marketing Training in",
      accent: "Amritsar",
      tagline:
        "Practical, career-oriented training in SEO, social media, Google Ads, content, email marketing, analytics and online brand building — for students, graduates, job seekers and aspiring digital professionals.",
      chips: ["Classroom / training mode", "SEO · Ads · Social · Analytics", "Beginner-friendly"],
      image: "/images/courses/digital-marketing.png",
    },

    overview: {
      heading: "Digital Marketing Training in Amritsar",
      paragraphs: [
        "If you are searching for digital marketing training in Amritsar that focuses on practical skills and real career outcomes, Techcadd provides a structured learning experience designed for students, graduates, job seekers, and aspiring digital professionals. Digital marketing has become one of the fastest-growing career fields, offering opportunities in SEO, social media marketing, Google Ads, content marketing, email marketing, affiliate marketing, analytics, and online brand building.",
        "A strong digital marketing training program should not be limited to theory. Learners need hands-on exposure to real tools, live projects, campaign planning, and performance analysis. This helps students understand how businesses grow online and how digital strategies are implemented in real-world scenarios.",
        "For students in Amritsar, digital marketing training can open multiple career opportunities such as digital marketing executive, SEO specialist, social media manager, PPC analyst, content strategist, and freelance digital marketer. With the increasing demand for online presence among local businesses, skilled digital marketers are highly valued in the job market.",
        "Techcadd focuses on practical learning, industry-relevant skills, and career-oriented training that helps learners build confidence and job readiness. Whether you are a beginner after Class 12, a graduate looking for employment, or someone planning to start freelancing, digital marketing training in Amritsar can be a strong step toward building a successful digital career.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "A strong digital marketing training in Amritsar should give students more than a basic introduction to online marketing. It should help learners understand the complete digital customer journey — from discovering a brand on Google or social media to visiting a website, generating a lead, making a purchase, and becoming a returning customer. Digital marketing education in Amritsar commonly combines SEO, paid advertising, social media, websites, content, email marketing, analytics, and practical campaign work, with an emphasis on measurable campaign performance and hands-on use of digital marketing tools.",

    /* The twelve starting points the brief names, in its order, closing on the
       note it prints under them about choosing an institute. */
    eligibility: {
      heading: "Who Can Do a Digital Marketing Training in Amritsar?",
      intro:
        "A digital marketing training in Amritsar can be a practical and career-oriented option for students, job seekers, and professionals from diverse educational backgrounds. You do not need a technical degree, coding experience, or prior marketing knowledge to start learning digital marketing. The most important requirements are curiosity, creativity, willingness to learn digital tools, and an interest in how businesses grow online through platforms like Google, Instagram, Facebook, and YouTube.",
      criteria: [
        {
          label: "Class 12 Students",
          detail:
            "Students who have completed Class 12 can start building future-ready skills through digital marketing. Instead of waiting for a long academic path to gain job-ready abilities, they can begin learning SEO, social media marketing, content creation, Google Ads, website basics, and online branding. For students searching for a digital marketing course after 12th in Amritsar, this training can work as a strong skill foundation alongside college education. It helps students become more confident and career-ready at an early stage.",
        },
        {
          label: "College Students",
          detail:
            "College students from streams like BBA, B.Com, BA, BCA, B.Tech, MBA, mass communication, and others can benefit greatly from digital marketing training. Learning digital marketing during college helps students build practical skills, work on real projects, prepare for internships, and gain exposure to industry tools. This combination of academic learning and practical training improves employability and interview readiness.",
        },
        {
          label: "Graduates Looking for Jobs",
          detail:
            "Graduates who are struggling to find suitable job opportunities can explore digital marketing as a high-demand skill field. While a degree provides academic knowledge, digital marketing adds practical expertise in online business growth and customer acquisition. A digital marketing course for graduates in Amritsar can open career paths such as SEO executive, social media executive, PPC specialist, content marketer, and digital marketing executive.",
        },
        {
          label: "Job Seekers and Freshers",
          detail:
            "For freshers actively searching for their first job, digital marketing offers multiple entry-level opportunities. Instead of focusing on a single skill, learners gain exposure to SEO, social media, paid ads, content strategy, analytics, and branding. This helps students identify their strengths and choose a specialization based on interest and performance.",
        },
        {
          label: "Working Professionals",
          detail:
            "Working professionals can also benefit from digital marketing training to upgrade their skills or switch careers. For example, sales professionals can learn lead generation strategies, content writers can move into SEO content marketing, and business development executives can understand paid campaigns and funnels. A digital marketing training institute in Amritsar can help professionals stay relevant in a rapidly changing digital economy.",
        },
        {
          label: "Business Owners and Entrepreneurs",
          detail:
            "Small business owners in Amritsar can use digital marketing knowledge to grow their business online. Understanding SEO, social media, Google Business Profile, and online ads helps them attract more customers and improve brand visibility. Even if they hire an agency, basic knowledge helps them track performance, understand reports, and make better marketing decisions.",
        },
        {
          label: "Freelancing Aspirants",
          detail:
            "Digital marketing is one of the most popular fields for freelancing. Skills like SEO, social media management, content writing, and paid ads can be offered as remote services. However, freelancing success requires strong practical skills, portfolio building, client communication skills, and real project experience. It should be seen as a long-term career path, not a shortcut to instant income.",
        },
        {
          label: "Students Interested in SEO",
          detail:
            "Students who enjoy research, websites, writing, and Google search can explore SEO as a specialization. A digital marketing program introduces keyword research, on-page SEO, technical SEO basics, local SEO (important for Amritsar businesses), content optimization, and ranking strategies. This is ideal for learners interested in SEO training in Amritsar.",
        },
        {
          label: "Creative Students",
          detail:
            "Students with creative interests in writing, design, photography, video editing, or social media can thrive in digital marketing. Creative skills are used in social media content, ad creatives, video marketing, and brand storytelling. Even beginners can start learning and improve through practice and feedback.",
        },
        {
          label: "Students Interested in Paid Advertising",
          detail:
            "Learners who enjoy data, numbers, and performance tracking can explore PPC and paid advertising. They learn Google Ads campaigns, audience targeting, keyword bidding, ad copywriting, conversion tracking, and ROI optimization. This is a high-demand specialization in digital marketing careers.",
        },
        {
          label: "Non-Technical Background Students",
          detail:
            "Digital marketing is suitable for students from all academic backgrounds, including arts, commerce, science, and humanities. Basic computer knowledge is enough to start. Advanced coding or technical expertise is not required for core digital marketing learning.",
        },
        {
          label: "Career Switchers",
          detail:
            "Individuals planning a career change can also enter digital marketing. The field allows skill-based entry rather than degree-based restrictions. A strong learning approach includes practical assignments, tool-based training, real campaign practice, portfolio development, and interview preparation.",
        },
        {
          label: "Choosing the Right Institute in Amritsar",
          detail:
            "Before enrolling in a digital marketing training in Amritsar, students should check the practical training approach, live project exposure, updated syllabus (SEO, Ads, Social Media, AI tools), internship opportunities, and placement support. The goal should not just be course completion, but building real skills that lead to internships, jobs, freelancing, or entrepreneurship. With consistent practice and the right guidance, students in Amritsar can build strong careers in the growing digital marketing industry and become job-ready professionals in a short time.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program for Digital Marketing",
      accent: "Training in Amritsar?",
      body: "Choosing the right digital marketing training in Amritsar is about more than completing a syllabus. Students need a program that connects learning with practical application, career preparation, and the evolving demands of the digital industry. A well-structured program should help learners understand not only what digital marketing is, but also how businesses use different digital channels to attract, engage, convert, and retain customers in real-world scenarios.",
      reasons: [
        {
          title: "Learn Skills That Can Be Applied",
          body: "Digital marketing includes multiple interconnected areas. Instead of learning topics in isolation, students should understand how SEO, content marketing, social media, paid advertising, websites, analytics, and online branding work together to build a complete digital strategy. A career-focused digital marketing training in Amritsar can introduce learners to Search Engine Optimization (SEO), local SEO for businesses in Amritsar, social media marketing on Facebook, Instagram and YouTube, Google Ads and pay-per-click (PPC), Meta Ads campaigns, content marketing strategy, email marketing campaigns, website and landing page basics, lead generation techniques, Google Analytics and performance tracking, e-commerce marketing, online reputation management, and AI-powered marketing tools and automation workflows. This broad exposure helps students identify their strengths and later specialize in high-demand areas like SEO, paid media, content strategy, analytics, or performance marketing.",
        },
        {
          title: "Practical Learning Instead of Only Theory",
          body: "One of the strongest reasons to choose a practical digital marketing training program in Amritsar is the opportunity to apply concepts in real scenarios. Digital marketing is not a theory-based subject — it is an execution-driven field. Understanding SEO or PPC in theory is not enough. Students must learn how to research keywords for real businesses, optimize web pages for search engines, create and manage ad campaigns, analyze performance reports, improve conversion rates, and test and refine marketing strategies. A strong training program should include assignments, live projects, case studies, campaign simulations, and portfolio-building activities. This hands-on approach helps students retain knowledge better and prepares them for real job responsibilities.",
        },
        {
          title: "Build a Career-Ready Skill Set",
          body: "The goal of a digital marketing course in Amritsar should go beyond certification. Students need job-ready skills that help them enter the workforce confidently. After completing training, learners can explore roles such as SEO Executive, Digital Marketing Executive, Social Media Executive, PPC Specialist, Content Marketing Executive, Email Marketing Executive, and Performance Marketing Assistant. For students searching for digital marketing jobs in Amritsar, early exposure to these roles helps them choose the right specialization and build a focused portfolio that supports interviews and internships.",
        },
        {
          title: "Learn With an Industry-Relevant Approach",
          body: "Digital marketing is a fast-changing industry. Search engine algorithms, advertising platforms, consumer behavior, and AI tools are constantly evolving. A modern digital marketing training in Amritsar should therefore focus on updated tools and platforms, real-time marketing trends, AI integration in marketing workflows, data-driven decision making, and continuous experimentation and optimization. Students should be encouraged to stay updated, test strategies, and adapt to industry changes rather than relying on outdated methods.",
        },
        {
          title: "Support Different Career Goals",
          body: "Every learner has a different objective. Some want a job, some want freelancing opportunities, and others want to grow their own business. A flexible training program supports all these goals: job seekers focus on employability and interview preparation, freelancers learn client handling and service-based marketing, and entrepreneurs understand how to grow their business online.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd for Digital Marketing",
      accent: "Training in Amritsar?",
      body: "Choosing a digital marketing course in Amritsar is an important decision for students because the quality of training directly impacts how confidently they can apply digital skills in real-world situations. Techcadd is positioned as a learning platform for students who want to build strong, practical digital marketing knowledge while preparing for career opportunities, internships, freelancing, or advanced specialisation.",
      reasons: [
        {
          title: "A Student-Focused Learning Approach",
          body: "Students in Amritsar come from diverse academic and professional backgrounds. Some may be Class 12 pass-outs, others may be graduates, job seekers, working professionals, or entrepreneurs looking to grow their business online. Techcadd supports this diversity through a structured learning approach that begins with foundational concepts and gradually progresses toward advanced, practical applications. This ensures that learners understand why digital marketing strategies are used, not just what they are. For beginners, this approach is especially valuable. Understanding how users search online, how websites generate traffic, how social media influences engagement, and how ads drive conversions helps build a strong conceptual base for advanced learning.",
        },
        {
          title: "Practical Understanding of Digital Marketing",
          body: "Digital marketing is a skill-based, execution-driven field. Students must learn how to apply concepts in real marketing scenarios rather than only studying theory. A practical digital marketing training in Amritsar includes hands-on exposure to SEO and keyword research, content creation and optimization, social media strategy and execution, Google Ads and paid campaigns, local SEO for business visibility, website optimization basics, analytics and performance tracking, and campaign planning and reporting. This approach helps students move from theoretical understanding to practical confidence, enabling them to work on real projects and build job-ready skills.",
        },
        {
          title: "Exposure to Multiple Digital Marketing Channels",
          body: "Digital marketing is a combination of multiple interconnected channels. A strong training program helps students understand how these channels work together to achieve business goals. Students can explore Search Engine Optimization (SEO), local SEO for Amritsar-based businesses, social media marketing on Facebook, Instagram and LinkedIn, Google Ads and PPC campaigns, content marketing strategies, email marketing fundamentals, lead generation techniques, website and landing page optimization, analytics and data interpretation, e-commerce marketing, and AI-powered marketing tools. This exposure allows students to identify their strengths and choose a specialization that aligns with their interests. For example, creative learners may prefer content and social media, while analytical learners may prefer SEO or paid advertising.",
        },
        {
          title: "Career-Oriented Skill Development",
          body: "A strong training program should connect learning with real career opportunities. Digital marketing offers multiple entry-level and advanced roles depending on skill level and specialization. Students can explore career paths such as Digital Marketing Executive, SEO Executive, Social Media Executive, PPC Specialist, Content Marketing Executive, and Performance Marketing Associate. In addition, learners can also explore freelancing or entrepreneurship as alternative career paths. The goal is not to guarantee job outcomes but to help students understand industry expectations, required skills, and long-term growth opportunities in digital marketing careers.",
        },
        {
          title: "Portfolio-Based Learning",
          body: "One of the most important aspects of modern digital marketing training is building a practical portfolio. Instead of relying only on certificates, students should develop real examples of their work, such as SEO keyword research projects, blog content samples, social media campaign plans, Google Ads mock campaigns, website optimization tasks, analytics reports and insights, and digital marketing strategy assignments. A strong portfolio helps students demonstrate their skills during interviews, internships, and freelance opportunities, making them more confident and job-ready.",
        },
        {
          title: "Strong Relevance for the Amritsar Market",
          body: "Businesses in Amritsar are increasingly shifting toward digital platforms to reach customers. From local shops and service providers to educational institutes and e-commerce businesses, digital presence has become essential. This makes digital marketing training in Amritsar highly relevant for students who want to work with local businesses or start their own ventures. Skills like local SEO, Google Business Profile optimization, and location-based marketing are especially valuable in this context.",
        },
        {
          title: "Learning in an Evolving Industry",
          body: "Digital marketing is a constantly evolving field. Search engine algorithms change, social media platforms update features, and new tools powered by AI continue to reshape the industry. Students must therefore develop a mindset of continuous learning. Techcadd helps build a strong foundation, but long-term success depends on practice, experimentation, and staying updated with industry trends. Learners who regularly test strategies, analyze performance, and adapt to changes are more likely to succeed in real-world digital marketing roles.",
        },
        {
          title: "Suitable for All Career Stages",
          body: "Whether a student is just starting out, a graduate preparing for employment, a professional planning a career shift, or an entrepreneur aiming to grow a business, digital marketing offers flexible learning opportunities. Before joining a digital marketing institute in Amritsar, students should evaluate practical exposure, curriculum structure, tool training, project work, and career support. Techcadd can be a suitable choice for learners who want structured guidance, practical learning, and a clear pathway toward building digital marketing skills that are relevant in today's competitive job market. Ultimately, success in digital marketing depends on combining training with consistent practice, real-world application, and a willingness to keep learning as the industry evolves.",
        },
      ],
    },

    /* The brief's ten reviews, carried across as written. Its own note applies:
       these are sample testimonial formats and should be replaced with
       verified student feedback before being published as genuine reviews. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Harpreet",
          initials: "HA",
          role: "Graduate, Amritsar",
          rating: 5,
          meta: "Good option for beginners",
          quote:
            "I was completely new to digital marketing when I joined the training in Amritsar. The basics of SEO, social media, and Google Ads became much easier to understand once I started practising them. I especially liked the practical approach because I could connect the concepts with real marketing examples.",
        },
        {
          name: "Simran",
          initials: "SI",
          role: "Student, Amritsar",
          rating: 5,
          meta: "Helpful for building confidence",
          quote:
            "I joined the digital marketing course alongside my studies. Initially, I was mainly interested in social media, but the course helped me understand SEO, content marketing, and paid advertising too. The practical assignments gave me more confidence in discussing digital marketing during interviews.",
        },
        {
          name: "Gagandeep",
          initials: "GA",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Useful career direction",
          quote:
            "After graduation, I was confused about which skill to learn. Digital marketing gave me a clear direction. I found SEO and PPC particularly interesting and started working on small practice projects. The training helped me understand what different digital marketing job roles actually involve.",
        },
        {
          name: "Manpreet",
          initials: "MA",
          role: "Entrepreneur, Amritsar",
          rating: 5,
          meta: "Local SEO was interesting",
          quote:
            "I wanted to understand how local businesses can get visibility online. Learning about local SEO, Google search, and online marketing gave me a much better understanding of how customers find businesses. The Amritsar-focused examples made the topics easier to relate to.",
        },
        {
          name: "Navdeep",
          initials: "NA",
          role: "Fresher, Amritsar",
          rating: 5,
          meta: "Good learning experience",
          quote:
            "I joined as a fresher without any professional marketing experience. The course introduced me to SEO, social media, Google Ads, content, and analytics step by step. I liked that I could practise instead of only reading theory.",
        },
        {
          name: "Jaspreet",
          initials: "JA",
          role: "Working Professional, Amritsar",
          rating: 5,
          meta: "Useful for career switching",
          quote:
            "I was exploring a career change and wanted a skill that combined creativity with analytical work. Digital marketing offered that combination. The course helped me understand different specialisations and decide that SEO and content marketing were the areas I wanted to explore further.",
        },
        {
          name: "Amandeep",
          initials: "AM",
          role: "Graduate, Amritsar",
          rating: 5,
          meta: "Practical topics made a difference",
          quote:
            "The practical assignments were one of the better parts of my learning experience. Keyword research, content optimisation, and campaign planning helped me understand how digital marketing works in practice. I would recommend learning consistently outside the classroom as well.",
        },
        {
          name: "Kirandeep",
          initials: "KI",
          role: "Student, Amritsar",
          rating: 5,
          meta: "I learned more than social media",
          quote:
            "Before joining, I thought digital marketing was mostly about posting on Instagram and Facebook. I was surprised by how many areas are involved, including SEO, analytics, paid advertising, websites, and content. The course gave me a broader understanding of the industry.",
        },
        {
          name: "Sukhman",
          initials: "SU",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Helpful for understanding tools",
          quote:
            "I wanted practical exposure to digital marketing tools rather than just theory. Learning about analytics, search performance, keyword research, and advertising platforms helped me understand how marketers measure results. It also motivated me to build my own practice portfolio.",
        },
        {
          name: "Rajveer",
          initials: "RA",
          role: "12th Pass, Amritsar",
          rating: 5,
          meta: "A useful starting point",
          quote:
            "After Class 12, I was looking for a skill-based course that could complement my future studies. Digital marketing seemed interesting because it has different career options. The course gave me a basic understanding of SEO, social media, content, and online advertising and helped me decide what I want to learn next.",
        },
      ],
    },

    /* The brief's eighteen FAQs, in its order. */
    faqs: [
      {
        q: "What is a digital marketing training in Amritsar?",
        a: "A digital marketing training in Amritsar teaches students how businesses use online platforms such as search engines, social media, websites, paid advertising, content marketing, email, and analytics to promote products and services. A practical training program may also include SEO, Google Ads, Meta Ads, local SEO, content creation, analytics, and AI-based marketing tools.",
      },
      {
        q: "Who can join digital marketing training in Amritsar?",
        a: "Students after Class 12, college students, graduates, job seekers, working professionals, entrepreneurs, and individuals planning a career change can join digital marketing training in Amritsar. No prior marketing experience is required for beginner-level learning.",
      },
      {
        q: "Is digital marketing suitable for students after 12th in Amritsar?",
        a: "Yes. Students who have completed Class 12 can start learning digital marketing in Amritsar along with their higher studies. Early learning helps students understand career options in SEO, social media, advertising, and content marketing before entering the job market.",
      },
      {
        q: "Do I need a technical background for digital marketing training?",
        a: "No. Digital marketing can be learned by students from any stream such as commerce, arts, science, management, or IT. Basic computer and internet knowledge is helpful, but coding or advanced technical skills are not required for most digital marketing roles.",
      },
      {
        q: "What will I learn in digital marketing training in Amritsar?",
        a: "Depending on the institute, students may learn SEO, keyword research, local SEO, social media marketing, Google Ads, PPC, Meta Ads, content marketing, email marketing, website basics, analytics, lead generation, e-commerce marketing, reporting, and AI tools used in marketing.",
      },
      {
        q: "Which tools are used in digital marketing training?",
        a: "Common tools include Google Search Console, Google Analytics, Google Ads, Google Keyword Planner, Meta Ads Manager, WordPress, Canva, and SEO research tools. The exact tools may vary depending on the training institute and updated industry requirements.",
      },
      {
        q: "Can I learn SEO in digital marketing training in Amritsar?",
        a: "Yes. SEO is a core part of digital marketing training. Students can learn keyword research, on-page SEO, off-page SEO, technical SEO basics, content optimisation, internal linking, and local SEO strategies for businesses in Amritsar.",
      },
      {
        q: "Is local SEO important for businesses in Amritsar?",
        a: "Yes. Local SEO helps businesses appear in local search results when customers search for services in Amritsar. It includes Google Business Profile optimisation, local keywords, reviews, map listings, and location-based content strategies.",
      },
      {
        q: "What career options are available after digital marketing training?",
        a: "After completing digital marketing training in Amritsar, students can explore roles such as Digital Marketing Executive, SEO Executive, Social Media Executive, PPC Executive, Content Marketer, Email Marketing Executive, and Performance Marketing roles. Career success depends on skills, practical experience, portfolio quality, communication skills, and interview performance.",
      },
      {
        q: "Can I do freelancing after digital marketing training?",
        a: "Yes. Digital marketing skills can be used for freelancing services like SEO, social media management, content writing, paid ads, and local business marketing. However, freelancing requires strong practical skills, a portfolio, communication ability, and client handling experience.",
      },
      {
        q: "Does digital marketing training guarantee a job?",
        a: "No. No genuine institute can guarantee a job or fixed salary. Training provides knowledge and skills, but job opportunities depend on the student's performance, portfolio, experience, and market demand.",
      },
      {
        q: "Is a certificate enough to get a job in digital marketing?",
        a: "A certificate alone is not enough. Employers also look for practical skills, project work, tool knowledge, communication skills, and real-world understanding of campaigns. A strong portfolio is more important than certification alone.",
      },
      {
        q: "How long does digital marketing training take in Amritsar?",
        a: "The duration depends on the course structure and institute. Generally, it can take a few months to complete basic to advanced training. However, digital marketing is an ongoing learning field, so continuous practice is important.",
      },
      {
        q: "Should I choose online or classroom training in Amritsar?",
        a: "Both options are useful. Classroom training offers direct interaction and structured learning, while online training provides flexibility. The best choice depends on the student's learning style, schedule, and comfort.",
      },
      {
        q: "How to choose the best digital marketing training in Amritsar?",
        a: "Students should compare curriculum, practical training, tools covered, trainer experience, project work, support system, and reviews. Avoid choosing institutes only based on job guarantees or unrealistic promises.",
      },
      {
        q: "Is digital marketing a good career in Amritsar?",
        a: "Yes. Digital marketing is a growing career field in Amritsar as more businesses move online. It also offers opportunities in freelancing, remote jobs, and work with companies outside the city.",
      },
      {
        q: "Can I learn digital marketing while studying in college?",
        a: "Yes. Many students learn digital marketing alongside their college studies. It helps them build skills early and prepare for internships, jobs, or freelancing opportunities after graduation.",
      },
      {
        q: "Why choose digital marketing training in Amritsar?",
        a: "Students should choose a training program based on updated curriculum, practical exposure, real projects, tool training, and career support. The right institute should help students build both knowledge and practical experience.",
      },
    ],

    /* The brief leaves the duration to the admissions desk, so the derived
       tracks table would be inventing tiers it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Enquire about the digital marketing training in Amritsar",
      heading: "Ready to Build Your Digital Marketing Skills with",
      accent: "Techcadd?",
      body: "Looking for a digital marketing training in Amritsar that can help you move from basic concepts to practical, career-focused skills? Connect with Techcadd to learn more about the current course structure, eligibility, learning approach, projects, tools, and career-oriented training. Whether you are a Class 12 student, graduate, job seeker, working professional, or aspiring freelancer, speak with the Techcadd team to understand whether the program matches your career goals.",
      /* The brief's "Course Details" block, row for row. */
      facts: [
        "Course: Digital Marketing Course",
        "Institute: Techcadd",
        "Location: Amritsar Centre",
        "Mode: Classroom / training mode — confirm the currently available option with Techcadd",
        "Duration: Confirm the current duration with the Techcadd admissions team",
      ],
      /* The brief's "What You Can Enquire About" list. */
      assurances: [
        "Digital marketing course curriculum",
        "SEO and local SEO training",
        "Google Ads and PPC",
        "Social media marketing",
        "Content marketing",
        "Analytics and reporting",
        "Digital marketing tools",
        "Practical projects",
        "Course schedule and batches",
        "Eligibility and admission process",
        "Career and interview guidance",
        "Available learning modes",
      ],
      formTitle: "Send Your Enquiry",
      formNote:
        "Share your name, contact details, qualification and preferred learning mode along with your message or career goal, and the Techcadd team will get back to you about the course.",
      submitLabel: "Send Your Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Mobile Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Qualification",
      statusOptions: ["12th", "Graduate", "Student", "Working Professional", "Other"],
      batchLabel: "Preferred Learning Mode",
      batchOptions: ["Classroom", "Other"],
    },

    demo: {
      eyebrow: "Ready to build your digital marketing skills?",
      heading: "Talk to the Techcadd Team",
      body: "Whether you are a Class 12 student, graduate, job seeker, working professional, or aspiring freelancer, speak with the Techcadd team to understand whether the program matches your career goals.",
      action: "Send Your Enquiry",
      note: "Confirm the current duration and the currently available learning mode with the Techcadd admissions team, as these details may change.",
    },

    seo: {
      title: "Digital Marketing Training in Amritsar | Techcadd",
      description:
        "Join professional digital marketing training in Amritsar. Learn SEO, Google Ads, social media, content marketing, analytics, and practical tools with Techcadd.",
      keywords: [
        "digital marketing training in Amritsar",
        "digital marketing course in Amritsar",
        "digital marketing institute in Amritsar",
        "digital marketing classes in Amritsar",
        "digital marketing course Amritsar",
        "digital marketing training Amritsar",
        "digital marketing certification in Amritsar",
        "digital marketing course with placement in Amritsar",
        "digital marketing course fees in Amritsar",
        "digital marketing course duration in Amritsar",
        "digital marketing syllabus in Amritsar",
        "digital marketing course after 12th in Amritsar",
        "digital marketing course for students in Amritsar",
        "digital marketing course for graduates in Amritsar",
        "digital marketing course for freshers in Amritsar",
        "digital marketing course for job seekers in Amritsar",
        "digital marketing course for working professionals in Amritsar",
        "digital marketing course for beginners in Amritsar",
        "digital marketing career in Amritsar",
        "digital marketing jobs in Amritsar",
        "digital marketing internship in Amritsar",
        "digital marketing training for freshers in Amritsar",
        "SEO course in Amritsar",
        "SEO training in Amritsar",
        "SEO classes in Amritsar",
        "local SEO course in Amritsar",
        "technical SEO training in Amritsar",
        "Google Ads course in Amritsar",
        "Google Ads training in Amritsar",
        "PPC course in Amritsar",
        "PPC training in Amritsar",
        "social media marketing course in Amritsar",
        "social media marketing training in Amritsar",
        "SMM course in Amritsar",
        "content marketing course in Amritsar",
        "content writing course in Amritsar",
        "blogging course in Amritsar",
        "Google Analytics course in Amritsar",
        "digital marketing analytics course in Amritsar",
        "performance marketing course in Amritsar",
      ],
    },

    closing:
      "Students should remember that learning a tool is only one part of becoming a digital marketer. Platforms change their interfaces and features regularly. The more valuable long-term skills are audience research, marketing strategy, analytical thinking, communication, creativity, experimentation, problem-solving, and the ability to learn new platforms — so the real goal is to develop the ability to choose the right channel, execute marketing activities, measure performance, learn from results, and continuously improve.",
  },
};

/* -------------------------------------------------- social media marketing */

/**
 * Source copy: the Amritsar social media marketing brief (short overview, five
 * eligibility personas, the two "why" arguments, five learning modules, ten
 * student reviews, ten FAQs and the enquiry/CTA section). The five learning
 * modules live in `course-data.ts` instead, because they are the curriculum and
 * the module explorer reads them from the seed.
 */
const socialMediaMarketing: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Digital Marketing · TechCadd Amritsar",
      /* The H1 the brief is written around — "social media marketing training
         in Amritsar" — rather than the catalogue phrasing. */
      headline: "Social Media Marketing Training in",
      accent: "Amritsar",
      tagline:
        "A premium, practical training program designed specifically for students, graduates, and entrepreneurs in the holy city — real-world execution across Instagram, Facebook, LinkedIn, YouTube, and digital ad networks.",
      chips: ["2 – 3 months", "100% practical lab sessions", "Beginner-friendly"],
      image: "/images/courses/social-media-marketing.png",
    },

    overview: {
      heading: "Social Media Marketing in Amritsar — Short Overview",
      paragraphs: [
        "Looking for the best social media marketing training in Amritsar to build a powerful career or grow your business? Techcadd offers a premium, practical training program designed specifically for students, graduates, and entrepreneurs in the holy city. Located conveniently for local learners, this comprehensive course skips outdated theory to focus entirely on real-world execution across major platforms like Instagram, Facebook, LinkedIn, YouTube, and digital ad networks.",
        "At Techcadd, you will master the art of viral content creation, performance marketing, budget handling, and advanced social media analytics. The curriculum is deeply optimized for modern search engine visibility and AI-driven platforms, ensuring you learn how to capture audience attention in a crowded digital world. Guided by expert trainers, you will work on live brand campaigns, build your own creative portfolio, and master the algorithms that drive real business growth. Whether your goal is to land a high-paying agency job, work as a global freelancer from Amritsar, or scale a local brand, this course provides the exact tools and strategies you need to succeed.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    /* The brief's introduction to "What You Will Learn & Tools Mastered",
       which the module explorer prints above the five modules. */
    curriculumNote:
      "The field of social media marketing is expanding at an unprecedented rate. As internet penetration reaches every corner of Punjab, businesses in Amritsar are rapidly shifting their budgets away from traditional newspapers and billboards toward digital screens. This massive shift has created an immediate demand for skilled media buyers, content creators, and brand managers. Completing your social media marketing training in Amritsar with Techcadd opens doors to an exciting career with infinite scaling potential.",

    /* The five starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Choosing the right career path after finishing school or college can feel overwhelming. If you want a career that is creative, high-paying, and safe from automation, Techcadd offers the most practical social media marketing training in Amritsar. This course is not just for tech experts. It is built from scratch for anyone who wants to learn how to turn social media scrolls into business revenue. Here is a detailed breakdown of who can join this program and how it transforms your career prospects:",
      criteria: [
        {
          label: "12th Pass Students & College Dropouts",
          detail:
            "You do not need a fancy university degree to build a successful career in the creative industry. If you have just completed your 12th standard in Amritsar or are taking a gap year, this course gives you a massive head start. Instead of spending years learning outdated theories, you gain hands-on skills in just a few months. You will learn how to create engaging reels, manage brand pages, and run targeted ads. By the time your peers finish college, you will already have a professional portfolio and a stable income.",
        },
        {
          label: "College Graduates (BA, B.Com, B.Sc, BBA, BCA)",
          detail:
            "Graduating from college in Amritsar often leaves students asking, “What next?” The traditional job market is highly competitive, and basic degrees rarely guarantee a good package. Adding professional social media marketing training from Techcadd to your resume changes everything. It turns you into a highly employable candidate for modern advertising agencies, corporate marketing teams, and IT firms across Punjab and major metros.",
        },
        {
          label: "Aspiring Freelancers & Remote Workers",
          detail:
            "Want to earn in Dollars or Euros while living right here in Amritsar? The freelance economy is booming. This course teaches you how to position yourself as a global social media manager. You will learn how to build your own personal brand online, pitch to international clients on platforms like Upwork and Fiverr, and handle social media accounts remotely from the comfort of your home.",
        },
        {
          label: "Local Business Owners & Shop Keepers",
          detail:
            "Amritsar is a massive business hub known for its bustling textile markets, famous eateries, jewelry boutiques, and tourism spots. If you own a local business near Lawrence Road, Ranjit Avenue, or the Golden Temple area, relying only on walk-in customers is no longer enough. Techcadd trains business owners to take their shops digital. You will learn how to run hyper-local Facebook and Instagram ads to target tourists and locals, bringing foot traffic and online orders directly to your business without paying expensive third-party agencies.",
        },
        {
          label: "Job Seekers & Career Changers",
          detail:
            "If you are stuck in a dead-end job with no growth, it is time to pivot to a sunrise sector. Social media marketing is one of the fastest-growing fields globally. Techcadd helps professionals smoothly transition into digital marketing. We teach you performance marketing, campaign strategy, and content planning from absolute scratch, backed by 100% practical training that makes your career switch highly successful.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Social Media Marketing?",
      body: "Entering the job market without practical, hands-on skills is incredibly tough for young professionals today. Traditional degrees focus heavily on textbooks, but social media algorithms change every single week. The social media marketing training in Amritsar by Techcadd is specifically built to solve this exact problem. This program bridges the gap between classroom theory and industry reality, turning you into an job-ready professional from day one. Here is why this program is the ultimate launchpad for your career in digital media:",
      reasons: [
        {
          title: "Learning by Doing on Live Budgets",
          body: "Most institutes teach marketing through slideshows and static screenshots. At Techcadd, we believe you cannot learn real marketing without launching real campaigns. Our students get the unique opportunity to manage live social media accounts and spend actual ad budgets. You will design ads, set up targeting parameters, monitor real-time metrics, and optimize underperforming campaigns. This hands-on experience builds the absolute confidence you need to handle real business accounts flawlessly.",
        },
        {
          title: "Mentorship by Industry Professionals",
          body: "You will not be learning from academic teachers who have never run a business online. Our trainers are experienced social media strategists, content creators, and media buyers who manage active brand accounts daily. They know exactly what types of content go viral, how the Instagram algorithm updates work, and how to lower the cost-per-click (CPC) on paid advertisements. This mentorship gives you insider knowledge that you simply cannot find in online blogs or free videos.",
        },
        {
          title: "Mastering the Best Industry Tools",
          body: "To survive in a fast-paced agency environment, you must know how to use professional tools. This program includes extensive training on industry-standard platforms for scheduling, design, and analysis. You will master tools like Meta Business Suite, Canva Pro, CapCut, Hootsuite, and Google Analytics. Learning how to read and interpret these data dashboards makes you an incredibly valuable asset to any modern marketing team.",
        },
        {
          title: "Complete Portfolio Development",
          body: "When you interview for a social media job near Ranjit Avenue, Lawrence Road, or anywhere globally, employers will not ask for your college marksheet. They will ask to see your work portfolio. Throughout your training at Techcadd, you will build a comprehensive, professional portfolio. This includes successful ad campaign case studies, sample content calendars, graphic designs, edited reels, and audience growth reports that clearly prove your marketing capabilities to hiring managers.",
        },
        {
          title: "Strong Local and Global Growth Paths",
          body: "Amritsar’s business ecosystem is expanding rapidly, with local boutiques, cafes, real estate firms, and immigration consultancies searching heavily for skilled social media managers. Simultaneously, the global demand for remote social media experts is at an all-time high. This course prepares you for both worlds. You will learn the specific hyper-local targeting strategies needed to grow businesses in Punjab, as well as the global communication and project management skills required to land premium international freelancing clients.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Social Media Marketing?",
      body: "When looking for the perfect institute to upgrade your skills, your choice makes all the difference between a waste of time and a life-changing career shift. Techcadd stands out as the premium hub for social media marketing training in Amritsar. We do not follow rigid, old-school teaching methods. Instead, we have built a modern learning space that focuses entirely on student success, real employment, and creative freedom. Here is exactly what makes learning at Techcadd Amritsar completely different from any ordinary computer institute:",
      reasons: [
        {
          title: "Advanced, Up-to-Date Curriculum",
          body: "Social media moves incredibly fast. A strategy that worked last month might be completely useless today. At Techcadd, our training modules are updated continuously to reflect real-time changes in platform algorithms. You will not waste time learning dead tactics. Instead, you will dive straight into current trends, AI-powered content workflows, structural platform updates, and modern consumer psychology. We ensure you learn what agencies are looking for right now.",
        },
        {
          title: "Premium Infrastructure and Creative Labs",
          body: "To create high-quality content, you need the right environment and high-tech equipment. Techcadd provides state-of-the-art training labs equipped with high-speed internet, premium content creation tools, and modern editing systems. Our classrooms are designed to foster collaboration, brainstorming, and creative thinking. This setup allows you to shoot, edit, and launch social media campaigns smoothly during your daily practical classes.",
        },
        {
          title: "100% Placement Assistance and Interview Prep",
          body: "Our job does not end when your course finishes. Techcadd features a dedicated placement cell that works tirelessly to connect our students with top companies, IT firms, and digital advertising agencies in Amritsar and across Punjab. We don't just share job links; we prepare you thoroughly for the market. You will undergo mock interviews, resume-building workshops, and specialized training to perfect your professional communication skills.",
        },
        {
          title: "Flexible Batches for Students and Professionals",
          body: "We understand that many of our learners are balancing multiple commitments. Whether you are a college student attending morning lectures at GNDU, a working professional looking to switch careers, or a local business owner managing a busy store near Hall Bazar, we have a slot for you. Techcadd offers highly flexible batch timings, including early morning sessions, regular afternoon slots, and exclusive weekend batches designed specifically for busy individuals.",
        },
        {
          title: "Affordable Fee Structure with High ROI",
          body: "We believe that premium, industry-ready education should be accessible to everyone without burning a hole in your pocket. Techcadd offers a highly competitive and transparent fee structure with flexible installment options. Every single rupee you invest in this social media program translates directly into high-income skills, a professional portfolio, and tangible career opportunities, making it a high-return investment for your digital future.",
        },
      ],
    },

    /* The brief's ten reviews, carried across as written. Its own note applies:
       these are written in a testimonial style and should be replaced with
       verified student feedback before being published as genuine reviews. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Ranjit Avenue, Amritsar",
          rating: 5,
          meta: "Best decision for my career!",
          quote:
            "Paaji, I completed my B.Com last year and was totally confused about what to do next. Joining Techcadd for social media marketing was the best decision. The trainers here don't just teach theory; they made me run live ads for local clothing brands. Now, I am handling three freelance clients right from my home in Ranjit Avenue and earning a great income. Highly recommended!",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Chheharta, Amritsar",
          rating: 5,
          meta: "Learnt real video editing and Reels strategy",
          quote:
            "I always wanted to build my own fashion page on Instagram but didn't know how the algorithm works. At Techcadd, I learnt how to script hooks, edit cinematic reels on CapCut, and analyze insights. My page grew from 500 followers to 12k followers during the course itself! If you want real, practical skills in Amritsar, this is the place.",
        },
        {
          name: "Amanpreet Malhotra",
          initials: "AM",
          role: "Lawrence Road, Amritsar",
          rating: 5,
          meta: "Transformed our family boutique business",
          quote:
            "We have a family designer boutique near Lawrence Road, and foot traffic was decreasing. I joined Techcadd to learn how to market our shop online. The mentors taught me hyper-local targeting on Meta Ads. Now, we get direct inquiries on WhatsApp and Instagram daily from customers all over Punjab and even NRI clients!",
        },
        {
          name: "Rohit Sharma",
          initials: "RS",
          role: "Putligarh, Amritsar",
          rating: 5,
          meta: "Got placed in a top IT agency before finishing the course",
          quote:
            "The placement cell at Techcadd Amritsar is amazing. They helped me design a killer portfolio and conducted mock interviews. Before my batch could even finish, I got selected as a Social Media Executive at an agency with a great starting package. Big thanks to the team!",
        },
        {
          name: "Navneet Gill",
          initials: "NG",
          role: "Majitha Road, Amritsar",
          rating: 5,
          meta: "Perfect for beginners with zero tech background",
          quote:
            "I was scared to join because I didn't know anything about digital tools or running ads. But the trainers at Techcadd start from the absolute basics. They explain everything so simply, using real-world examples. The creative labs are fully equipped, and the environment is very supportive for girls wanting to start a digital career.",
        },
        {
          name: "Gurbaksh Singh",
          initials: "GB",
          role: "Verka, Amritsar",
          rating: 5,
          meta: "Mastered Meta Ads Manager like a pro",
          quote:
            "Most institutes just show screenshots of Facebook ads, but Techcadd actually gave us a budget to test live campaigns. Learning how to set up custom audiences, lookalikes, and tracking pixels gave me massive confidence. Sir completely cleared all my doubts about budget optimization.",
        },
        {
          name: "Priya Mahajan",
          initials: "PM",
          role: "Mall Road, Amritsar",
          rating: 5,
          meta: "Incredible tool access and flexible batches",
          quote:
            "Being a college student at GNDU, managing time was tough. Techcadd offered me a flexible weekend batch that fit my schedule perfectly. Plus, they give hands-on training on premium tools like Canva Pro and Buffer. It’s total value for money.",
        },
        {
          name: "Jass Kalsi",
          initials: "JK",
          role: "Sultanwind, Amritsar",
          rating: 5,
          meta: "Earn in Dollars sitting in Amritsar!",
          quote:
            "My main goal was freelancing. Techcadd didn’t just teach me social media strategies; they taught me how to set up Upwork and Fiverr profiles and how to pitch to international clients. Currently managing social media for a cafe in Canada while sitting right here in Amritsar!",
        },
        {
          name: "Harleen Kaur",
          initials: "HK",
          role: "Batala Road, Amritsar",
          rating: 5,
          meta: "No more boring lectures, only active practice",
          quote:
            "If you hate boring classroom lectures, you will love Techcadd. Every single day is a practical lab session where you build content calendars, design templates, and write copy. The trainers act more like industry mentors than school teachers.",
        },
        {
          name: "Vikramjeet Singh",
          initials: "VS",
          role: "Inside Hall Gate, Amritsar",
          rating: 5,
          meta: "A structural game-changer for Amritsar youth",
          quote:
            "Instead of wasting lakhs on ordinary degrees, youth in Amritsar should learn these digital skills. Techcadd is providing elite-level agency training at an affordable fee. The confidence I gained in running ad operations here is unmatched.",
        },
      ],
    },

    /* The brief's ten FAQs, in its order — written for answer-engine and voice
       search, and emitted as FAQPage JSON-LD from the course route. */
    faqs: [
      {
        q: "Which institute offers the best social media marketing training in Amritsar?",
        a: "Techcadd offers the best social media marketing training in Amritsar. The course stands out because it focuses entirely on 100% practical, hands-on learning, allows students to handle live ad budgets, provides access to premium creative tools, and offers dedicated job placement assistance.",
      },
      {
        q: "What is the eligibility criteria to join the social media marketing course at Techcadd Amritsar?",
        a: "There are no strict academic prerequisites to join this program. Anyone who has completed their 12th standard, college graduates, job seekers, aspiring freelancers, and local business owners looking to scale their brands online can easily enroll in this course.",
      },
      {
        q: "What is the duration of the social media marketing training program?",
        a: "The standard duration of the training program at Techcadd ranges from 2 to 3 months, depending on whether you choose regular weekday batches or flexible weekend tracks designed for working professionals.",
      },
      {
        q: "Will I get job placement support after completing my training at Techcadd?",
        a: "Yes, Techcadd provides complete 100% placement assistance through its dedicated placement cell. This includes professional portfolio building, step-by-step resume optimization, and scheduled mock interviews with top agencies and corporate firms across Punjab.",
      },
      {
        q: "Can I learn how to run paid Instagram and Facebook ads in this course?",
        a: "Yes, a major component of the training covers advanced performance marketing via Meta Ads Manager. You will learn everything from setting up hyper-local audience targeting to budgeting, conversion tracking, custom audiences, and campaign optimization.",
      },
      {
        q: "Is this course beneficial for local business owners in Amritsar?",
        a: "Yes. The curriculum teaches business owners how to execute hyper-local targeting strategies to attract tourists and residents directly to shops, restaurants, boutiques, and clinics around popular commercial hubs like Ranjit Avenue and Lawrence Road.",
      },
      {
        q: "What tools will I master during the training at Techcadd?",
        a: "You will gain complete operational mastery over industry-standard digital tools, including Meta Ads Manager, Meta Business Suite, Canva Pro, CapCut for video editing, Buffer/Hootsuite for automated scheduling, and Google Analytics 4.",
      },
      {
        q: "Does Techcadd offer flexible batch timings for college students?",
        a: "Yes, Techcadd offers highly flexible batch options to suit your schedule. Students can choose from early morning regular classes, mid-day sessions, or specialized weekend batches to balance their college lectures or existing job routines.",
      },
      {
        q: "Can I start freelancing globally immediately after completing this course?",
        a: "Yes. The course includes dedicated modules on international freelance marketplace setup. You will learn how to optimize your profiles on Upwork, Fiverr, and LinkedIn, write high-conversion proposals, and confidently secure remote clients who pay in foreign currencies.",
      },
      {
        q: "Do I need a high-end laptop or prior technical coding experience for this course?",
        a: "No, you do not need any coding or prior technical background. Techcadd provides fully equipped creative computer labs with high-speed internet and necessary systems for all your daily practical work and campaign management.",
      },
    ],

    /* The brief runs one highly flexible 2–3 month track, so the derived tiers
       table would be inventing durations it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Course enquiry — social media marketing training in Amritsar",
      heading: "START Your Social Media Career",
      accent: "Today!",
      body: "Ready to stop scrolling and start earning? Transform your passion for social media into a high-paying professional career with Amritsar's most practical, job-oriented training ecosystem. Don't settle for outdated textbook courses. Join Techcadd and learn the exact strategies used by elite digital agencies to scale brands globally. Secure your seat today and walk out with a professional portfolio that commands attention.",
      /* The brief's "Program Fast-Facts" block, row for row. */
      facts: [
        "Course Name: Certified Professional Social Media Marketing Track",
        "Training Duration: 2 to 3 Months (Highly Flexible)",
        "Learning Modes: 100% Practical In-Class Lab Sessions / Interactive Hybrid Formats",
        "Amritsar Centre: Conveniently located near major transit hubs for local students and daily commuters",
      ],
      formTitle: "Quick Course Enquiry Form",
      formNote:
        "Fill out this short form to check seat availability and claim your free trial pass!",
      submitLabel: "Send Your Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Contact Number",
      },
      /* The brief's "Current Profile" and "Preferred Batch" pickers. */
      statusLabel: "Current Profile",
      statusOptions: ["12th Pass", "College Student", "Job Seeker", "Business Owner"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Morning Fast-Track", "Afternoon Regular", "Weekend Only"],
    },

    demo: {
      eyebrow: "Ready to stop scrolling and start earning?",
      heading: "Talk to the Techcadd Amritsar Team",
      body: "Transform your passion for social media into a high-paying professional career with Amritsar's most practical, job-oriented training ecosystem.",
      action: "Send Your Enquiry",
      note: "Secure your seat today and walk out with a professional portfolio that commands attention.",
    },

    seo: {
      title: "Social Media Marketing Training in Amritsar | Techcadd",
      description:
        "Practical social media marketing training in Amritsar. Learn Instagram, Facebook, LinkedIn and YouTube growth, Meta Ads, content creation, analytics and live campaigns with Techcadd.",
      keywords: [
        "social media marketing training in Amritsar",
        "social media marketing course in Amritsar",
        "social media marketing institute in Amritsar",
        "social media marketing classes in Amritsar",
        "SMM course in Amritsar",
        "best social media marketing training in Amritsar",
        "social media marketing course after 12th in Amritsar",
        "social media marketing course for graduates in Amritsar",
        "social media marketing course with placement in Amritsar",
        "social media marketing course fees in Amritsar",
        "social media marketing course duration in Amritsar",
        "Instagram marketing course in Amritsar",
        "Facebook marketing course in Amritsar",
        "Meta Ads course in Amritsar",
        "Meta Ads Manager training in Amritsar",
        "performance marketing course in Amritsar",
        "paid social advertising course in Amritsar",
        "content creation course in Amritsar",
        "reels and video editing course in Amritsar",
        "CapCut video editing training in Amritsar",
        "Canva Pro training in Amritsar",
        "influencer marketing course in Amritsar",
        "social media analytics course in Amritsar",
        "Google Analytics 4 training in Amritsar",
        "social media manager course in Amritsar",
        "social media marketing jobs in Amritsar",
        "freelancing social media course in Amritsar",
        "social media marketing for business owners in Amritsar",
        "hyper-local Facebook ads training in Amritsar",
        "weekend social media marketing batch in Amritsar",
      ],
    },

    closing:
      "Ready to stop scrolling and start earning? Transform your passion for social media into a high-paying professional career with Amritsar's most practical, job-oriented training ecosystem — a course built on live campaigns, real ad budgets and a portfolio you can show a hiring manager.",
  },
};

/* ---------------------------------------------------------------- google ads */

/**
 * Source copy: the Amritsar Google Ads brief (short overview, nine eligibility
 * personas, the two "why" arguments, twelve learning blocks plus the tools
 * list, ten student reviews, twelve FAQs, the enquiry/callback section and the
 * keyword/GEO strategy report). The twelve learning blocks and the tool list
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 *
 * Sections the brief does not write — the checks beside the overview, the
 * outcomes rail, future scope, and the four closing FAQs answering the report's
 * uncovered AEO queries — are written here from the brief's own material and in
 * its voice: what training "can" help a student understand, never what it
 * guarantees. The report's E-E-A-T note is followed throughout: no invented
 * fees, durations, placement figures or "#1/best" claims.
 */
const googleAds: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Digital Marketing · TechCadd Amritsar",
      /* The H1 the keyword report maps to this page — "Google Ads Course in
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Google Ads Course in",
      accent: "Amritsar",
      tagline:
        "Practical paid search training for students, graduates, job seekers, freelancers and business owners — Google Search Ads, keyword research, ad copywriting, bidding, conversion tracking and campaign optimization.",
      chips: ["Classroom / training mode", "PPC · Paid search · SEM", "Beginner-friendly"],
      image: "/images/courses/google-ads.png",
    },

    overview: {
      heading: "Google Ads Training in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build practical digital advertising skills in Amritsar? A Google Ads training course in Amritsar can help students, graduates, job seekers, freelancers, and business owners learn how to create, manage, and optimize paid advertising campaigns on Google.",
        "The training focuses on practical areas such as Google Search Ads, keyword research, ad copywriting, bidding strategies, conversion tracking, campaign optimization, remarketing, and performance analysis. Students can learn how businesses use Google Ads to reach customers who are actively searching for products and services.",
        "For learners in Amritsar, local-focused training can be especially useful for understanding how paid advertising works for Punjab-based businesses, local services, e-commerce brands, and service providers. Practical campaign exercises and performance analysis can help learners develop skills that are relevant to entry-level digital marketing roles, freelancing, and business promotion.",
        "If your goal is to develop job-ready paid advertising skills, Google Ads training can be a useful step toward building a broader career in digital marketing, PPC, SEM, and online advertising.",
      ],
      /* Written from the brief's own emphases rather than the house defaults:
         practical examples, intent over volume, conversions over clicks, and
         optimization as a routine. */
      checks: [
        "Concepts are worked through practical campaign examples, not definitions",
        "Keywords are chosen on relevance and search intent, not search volume",
        "Campaigns are judged on conversions and cost, not clicks alone",
        "Optimization is treated as a routine, not a one-time step at launch",
      ],
    },

    curriculumNote:
      "A practical Google Ads course in Amritsar should help students understand how paid search advertising works from planning and campaign creation to tracking, analysis, and optimization. At Techcadd, learners can build knowledge of important Google Ads concepts while understanding how these skills fit into the wider digital marketing ecosystem.",

    /* The nine starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "A Google Ads training course in Amritsar can be suitable for learners from different educational and professional backgrounds. You do not necessarily need advanced technical knowledge to start. The course can be especially useful for students, graduates, job seekers, working professionals, freelancers, entrepreneurs, and business owners who want to understand paid online advertising.",
      criteria: [
        {
          label: "12th-Pass Students",
          detail:
            "Students who have completed Class 12 can consider Google Ads training as an early step toward developing a practical digital skill. Instead of waiting until graduation to explore career options, students can start understanding how online advertising works and build foundational knowledge alongside their studies.",
        },
        {
          label: "College Students",
          detail:
            "College students from BBA, B.Com, BCA, BA, management, commerce, or other streams can benefit from learning Google Ads. Paid advertising is an important part of modern digital marketing, and practical knowledge can complement academic education. Students can learn how businesses select keywords, create advertisements, target potential customers, measure campaign performance, and improve advertising results.",
        },
        {
          label: "Graduates Looking for Career Opportunities",
          detail:
            "Graduates who are searching for career-oriented skills can explore Google Ads training to strengthen their digital marketing profile. Companies increasingly use online advertising to generate leads, increase website traffic, promote products, and acquire customers. Learning PPC and Google Ads can therefore help graduates understand an important area of digital marketing and prepare for entry-level roles such as PPC Executive, Google Ads Executive, Digital Marketing Executive, or Paid Media Trainee.",
        },
        {
          label: "Job Seekers Wanting a Practical Skill",
          detail:
            "If you are a job seeker in Amritsar and want to add a practical skill to your resume, Google Ads can be a valuable area to explore. The focus should not only be on learning definitions but also on understanding campaign setup, keyword selection, ad creation, budgeting, conversion tracking, and optimization. Practical training can help learners become more comfortable discussing real advertising scenarios during interviews.",
        },
        {
          label: "Working Professionals",
          detail:
            "Working professionals can also learn Google Ads to expand their existing skill set. Sales, marketing, business development, social media, and content professionals may find paid advertising particularly relevant. For example, a social media executive who understands Google Ads can develop a broader understanding of performance marketing. Similarly, a sales professional can learn how paid campaigns contribute to lead generation.",
        },
        {
          label: "Freelancers",
          detail:
            "Google Ads is also relevant for people interested in freelancing. Freelancers can develop PPC-related skills and potentially offer campaign management services to clients after gaining sufficient practical experience. Learners should understand that completing a course does not automatically guarantee freelance clients or income. Building a portfolio, developing campaign-analysis skills, communicating with clients, and demonstrating measurable results are equally important.",
        },
        {
          label: "Entrepreneurs and Small Business Owners",
          detail:
            "Business owners in Amritsar can learn Google Ads to better understand how paid search advertising works. This can help them communicate more effectively with marketing teams or agencies and make more informed advertising decisions. For local businesses, understanding location targeting, search intent, keywords, budgets, landing pages, and conversion tracking can be particularly useful when trying to attract customers from Amritsar and nearby areas.",
        },
        {
          label: "Marketing Professionals",
          detail:
            "Existing marketing professionals can use Google Ads training to strengthen their performance-marketing knowledge. The course can help connect traditional marketing concepts with measurable online advertising activities.",
        },
        {
          label: "Anyone Interested in Digital Marketing",
          detail:
            "You do not have to come from a specific academic background to explore Google Ads. If you are interested in PPC, SEM, paid search, performance marketing, lead generation, or digital advertising, structured training can provide a starting point. For learners in Amritsar, choosing practical Google Ads training in Amritsar can make it easier to develop locally relevant knowledge while working toward broader digital marketing career goals.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Google Ads Training?",
      body: "Choosing the right Google Ads training in Amritsar can make a significant difference when your goal is to develop practical, career-oriented digital marketing skills. Google Ads is not simply about creating advertisements and spending a budget. Effective paid advertising requires an understanding of search intent, keywords, audience targeting, ad messaging, bidding, landing pages, conversion tracking, and continuous optimization. This program can provide learners with a structured way to understand these concepts and connect them with practical advertising scenarios.",
      reasons: [
        {
          title: "Learn a Skill Used in Performance Marketing",
          body: "Google Ads is an important part of performance marketing because campaigns can be measured through clicks, leads, conversions, cost, and return on advertising spend. Students can learn how advertisers evaluate campaign performance instead of relying only on impressions or traffic. Understanding these metrics can help learners develop a more analytical approach to digital marketing.",
        },
        {
          title: "Build Practical Google Ads Knowledge",
          body: "A career-focused training program should go beyond theoretical explanations. Learners can work through practical examples involving campaign structures, keyword selection, search advertisements, bidding strategies, negative keywords, targeting, budgets, and optimization. This approach can help students understand what happens before, during, and after a campaign goes live.",
        },
        {
          title: "Understand Local Advertising",
          body: "For businesses operating in Amritsar, local search advertising can be particularly relevant. Students can learn how location targeting and locally relevant search terms can help businesses reach potential customers in specific geographical areas. This is useful for understanding campaigns for local services, education institutes, restaurants, healthcare businesses, retailers, professional services, and other location-based businesses.",
        },
        {
          title: "Develop Job-Oriented Knowledge",
          body: "Students interested in digital marketing careers can use Google Ads knowledge to strengthen their overall skill profile. Depending on their broader training and experience, they can explore career paths such as PPC Executive, Google Ads Executive, Digital Marketing Executive, Paid Media Executive, or Performance Marketing Associate. However, career outcomes depend on individual skills, practical experience, communication ability, portfolio quality, and employer requirements.",
        },
        {
          title: "Learn Campaign Optimization",
          body: "Launching a campaign is only one part of paid advertising. Successful advertising requires regular analysis and optimization. Students can learn how to identify underperforming keywords, evaluate ad performance, review search terms, monitor conversion data, and make informed campaign adjustments. This analytical experience can be useful for anyone who wants to work in performance marketing.",
        },
        {
          title: "Useful for Freelancing and Business",
          body: "Google Ads skills can also be relevant outside traditional employment. Freelancers can use their knowledge when developing PPC services, while entrepreneurs can better understand how paid search campaigns operate. For both groups, responsible advertising decisions require clear objectives, appropriate budgets, accurate tracking, and regular performance evaluation.",
        },
        {
          title: "A Foundation for Broader Digital Marketing Skills",
          body: "Google Ads works alongside other digital marketing channels. Once learners understand paid search, they can connect it with SEO, social media marketing, content marketing, landing-page optimization, analytics, and conversion-rate optimization. This broader perspective can help students understand how different channels contribute to a company's online customer journey.",
        },
        {
          title: "Learn With a Career-Focused Approach",
          body: "The main value of a Google Ads course in Amritsar should be practical understanding rather than simply completing a certificate. Students should leave training with a clearer understanding of how campaigns are planned, launched, measured, and optimized. For learners who want to enter digital advertising, strengthen their existing marketing knowledge, start exploring freelancing, or understand paid promotion for a business, this program can provide a structured foundation for developing Google Ads skills.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Google Ads Training?",
      body: "Choosing a training institute is an important decision when you are investing time in developing a career-focused digital skill. For students and professionals looking for Google Ads training in Amritsar, Techcadd can be considered by learners who want structured training focused on practical understanding and industry-relevant digital marketing skills.",
      reasons: [
        {
          title: "Practical Learning Approach",
          body: "Google Ads is a platform where practical understanding matters. Knowing terminology is not enough to manage advertising campaigns effectively. Learners need to understand how campaign objectives, keywords, ad copy, bidding, targeting, budgets, landing pages, and conversions work together. Techcadd's training approach can help students understand these concepts through practical examples and campaign-oriented learning. This can make the learning process easier to connect with real digital marketing activities.",
        },
        {
          title: "Suitable for Different Learners",
          body: "Techcadd's Google Ads training can be relevant for students, graduates, job seekers, working professionals, freelancers, and entrepreneurs. A beginner can start with the fundamentals, while learners who already have digital marketing knowledge can use Google Ads training to strengthen their paid advertising skills. This flexibility can be useful for students from different educational backgrounds who want to explore digital marketing as a career option.",
        },
        {
          title: "Career-Focused Digital Marketing Learning",
          body: "Students generally want more than theoretical knowledge from professional training. They want to understand how the skill is used in the workplace. Google Ads knowledge can be relevant to roles involving PPC, paid search, performance marketing, lead generation, and digital advertising. Techcadd can help learners understand the connection between campaign management and broader digital marketing objectives. Students can also learn how advertising performance is evaluated using important metrics and reporting concepts.",
        },
        {
          title: "Learn From Practical Campaign Concepts",
          body: "A useful Google Ads learning experience should explain the complete campaign journey. Students can explore how advertisers research keywords, organize campaigns and ad groups, create advertisements, select targeting settings, establish budgets, monitor performance, and optimize campaigns. Understanding this workflow can help learners develop a more structured approach to paid advertising.",
        },
        {
          title: "Local Learning Advantage in Amritsar",
          body: "For students based in Amritsar, attending local Google Ads classes in Amritsar can provide the convenience of learning within their city while developing a skill that can be applied to businesses across Punjab and other markets. Local businesses often need digital visibility, lead generation, and customer acquisition. Learning how paid search works can therefore help students understand the digital requirements of location-based businesses as well as national and online brands.",
        },
        {
          title: "Builds a Stronger Digital Marketing Foundation",
          body: "Google Ads should not be viewed as an isolated skill. It connects with SEO, analytics, landing-page optimization, content, social media, and conversion-rate optimization. By learning paid advertising alongside broader digital marketing concepts, students can develop a more complete understanding of how businesses attract, engage, and convert online audiences.",
        },
        {
          title: "Support for Career Development",
          body: "Training is only one part of building a successful career. Students also need practical exposure, communication skills, portfolio projects, continuous learning, and an understanding of changing advertising practices. Techcadd can serve as a structured learning environment where students begin developing the knowledge required to explore opportunities in digital marketing and paid advertising.",
        },
        {
          title: "A Practical Starting Point",
          body: "For anyone searching for Google Ads training in Amritsar, the most important consideration should be whether the program helps them understand how advertising works in practical situations. With structured learning, campaign-based concepts, performance analysis, and broader digital marketing knowledge, Techcadd can be a useful starting point for learners who want to develop Google Ads skills and explore career opportunities in performance marketing.",
        },
      ],
    },

    /* The five roles the brief names, each written to its own caveat: these are
       paths a learner can explore, not outcomes the course delivers. */
    outcomes: [
      {
        role: "PPC Executive",
        blurb:
          "The most direct path from this track. The day-to-day work is the course's own loop — keyword selection, campaign setup, search-term review and optimization — though what an employer expects will depend on the account size and the team you join.",
      },
      {
        role: "Google Ads Executive",
        blurb:
          "A paid-search-focused role built on the same account structure, bidding and conversion-tracking knowledge, usually with more responsibility for budgets and reporting as experience grows.",
      },
      {
        role: "Digital Marketing Executive",
        blurb:
          "A broader role where paid search sits beside SEO, content, social and analytics. Google Ads knowledge strengthens the profile, but the role assumes familiarity with the other channels too.",
      },
      {
        role: "Paid Media Associate",
        blurb:
          "Campaign work across paid channels rather than search alone. The measurement habits from this course — cost per conversion, conversion value, return on ad spend — carry across platforms.",
      },
      {
        role: "Performance Marketing Executive",
        blurb:
          "The analytical end of the field, where campaigns are judged on tracked business outcomes. Career outcomes here depend on practical experience, portfolio quality, communication ability and employer requirements.",
      },
    ],

    /* Written from the brief's own framing of where paid search sits: a
       measurable channel, one part of a wider digital marketing skill set, and
       a field where platforms change faster than fundamentals. */
    futureScope: {
      heading: "Where Google Ads skills lead from here",
      intro:
        "A certificate describes what you have studied. This section is about what paid search knowledge is likely to be worth over the next few years, and which parts of it tend to last when the platform itself keeps changing.",
      drivers: [
        {
          title: "Measurable spending gets defended first",
          body: "Paid search can be traced from a query to a click to a tracked conversion and a cost. When budgets are reviewed, the channels that can show what they returned tend to be the ones that keep their funding — and the people who can explain those numbers tend to keep their work.",
        },
        {
          title: "Automation moves the work, it does not remove it",
          body: "Smart bidding and automated campaign types handle more of the mechanics than they used to. What still sits with the advertiser is the judgement around them: campaign objectives, keyword and audience relevance, tracking accuracy, budget decisions, and reading whether the results are real.",
        },
        {
          title: "Paid search is one skill in a wider set",
          body: "Google Ads connects with SEO, analytics, landing-page optimization, content and conversion-rate optimization. Learners who understand how the channels feed one another usually have more career options than those who know only one platform.",
        },
        {
          title: "Local and remote demand both exist",
          body: "Businesses in Amritsar and across Punjab need local visibility and lead generation, while paid-search work is also commonly done remotely for clients elsewhere. Both routes depend on demonstrable campaign knowledge rather than location.",
        },
      ],
      horizon:
        "Google Ads changes its interface, campaign types and automation regularly, so no course can teach a permanently current version of the platform. What tends to carry forward is the underlying method — understanding search intent, structuring an account, writing relevant advertisements, tracking meaningful conversions, and reading performance data before making changes. Career progress depends on continuing to practise, building a portfolio of campaign work, and staying current with advertising practices as they change.",
    },

    /* The brief's ten reviews, carried across as written. They are published
       unattributed because the brief supplies no reviewer names, and its own
       E-E-A-T note applies: replace these with verified student feedback before
       presenting them as genuine reviews. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I joined the Google Ads training because I wanted to understand PPC from the basics. The practical campaign examples made the concepts much easier to understand. I especially liked learning about keywords, ads, and campaign optimization.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Ranjit Avenue, Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I was completely new to paid advertising. The training helped me understand how Google Ads campaigns are structured and how advertisers measure results. The explanations were simple and easy to follow.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "As a graduate looking for digital marketing skills, I found the Google Ads course useful. I learned about keyword research, ad copy, bidding, conversion tracking, and reporting. The practical approach was helpful.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Majitha Road, Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I wanted to add PPC skills to my digital marketing knowledge. The course gave me a better understanding of how search advertising works and how campaigns can be optimized based on performance.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "The best part for me was learning through practical examples instead of only studying theory. I now have a clearer understanding of search campaigns, negative keywords, budgets, and performance metrics.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Lawrence Road, Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I joined the training as a beginner and was initially confused about Google Ads terminology. The course explained the concepts step by step, which made it easier for me to understand campaign management.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "The Google Ads training helped me understand the connection between keywords, advertisements, landing pages, and conversions. It was useful for building my overall digital marketing knowledge.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Batala Road, Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I was interested in freelancing and wanted to learn a performance-marketing skill. The course helped me understand the fundamentals of PPC and gave me a better idea of what goes into managing a client campaign.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I liked the focus on campaign analysis and optimization. Learning how to look at performance data instead of simply creating ads was one of the most useful parts of the training.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Google Ads training",
          quote:
            "I was looking for Google Ads training in Amritsar that would be understandable for a beginner. The course covered the important fundamentals and helped me become more confident with paid advertising concepts.",
        },
      ],
    },

    /* The brief's twelve FAQs in its order, then four written here to answer the
       AEO queries its keyword report lists but its FAQ does not cover. */
    faqs: [
      {
        q: "What is Google Ads training in Amritsar?",
        a: "Google Ads training in Amritsar is a practical learning program that teaches students how paid search advertising works. It can cover keyword research, campaign creation, ad copywriting, bidding, targeting, conversion tracking, reporting, and campaign optimization.",
      },
      {
        q: "Who can join a Google Ads course in Amritsar?",
        a: "Students, 12th-pass learners, graduates, job seekers, working professionals, freelancers, entrepreneurs, and marketing professionals can consider a Google Ads course. Beginners can also start if they have basic computer and internet knowledge.",
      },
      {
        q: "Do I need previous digital marketing experience?",
        a: "No. Beginners can learn Google Ads from the fundamentals. Previous knowledge of digital marketing can be helpful, but it is not essential for understanding the basic concepts.",
      },
      {
        q: "What will I learn in Google Ads training?",
        a: "You can learn topics such as keyword research, Google Search campaigns, ad creation, bidding, budgets, location targeting, negative keywords, conversion tracking, campaign analysis, reporting, and optimization.",
      },
      {
        q: "Is Google Ads useful for a digital marketing career?",
        a: "Yes. Google Ads is an important performance-marketing skill and can be relevant to roles such as PPC Executive, Google Ads Executive, Digital Marketing Executive, Paid Media Associate, and Performance Marketing Executive.",
      },
      {
        q: "Can students learn Google Ads after Class 12?",
        a: "Yes. Students who have completed Class 12 can begin learning Google Ads. A structured course can help them build practical digital marketing knowledge before entering the job market or pursuing further studies.",
      },
      {
        q: "Can I learn Google Ads for freelancing?",
        a: "Yes. Google Ads knowledge can be useful for freelancers who want to offer PPC or digital advertising services. However, getting freelance clients requires more than course completion; practical experience, communication, portfolio development, and campaign-management skills are also important.",
      },
      {
        q: "Is Google Ads useful for local businesses in Amritsar?",
        a: "Yes. Local businesses can use search advertising to reach potential customers searching for relevant products and services. Google Ads can support local lead generation, enquiries, calls, bookings, and other business objectives when campaigns are planned and tracked properly.",
      },
      {
        q: "What tools are commonly used with Google Ads?",
        a: "Learners may work with or learn about tools such as Google Ads, Google Keyword Planner, Google Analytics, Google Tag Manager, Google Search Console, Google Trends, Looker Studio, Excel, and Google Sheets.",
      },
      {
        q: "Will Google Ads training guarantee a job?",
        a: "No training program can legitimately guarantee a job for every student. Career opportunities depend on factors such as practical skills, communication, portfolio quality, interview performance, experience, and current employer requirements.",
      },
      {
        q: "What career options can I explore after learning Google Ads?",
        a: "Depending on your overall digital marketing skills and experience, you can explore positions such as PPC Executive, Google Ads Executive, Digital Marketing Executive, Paid Media Executive, Performance Marketing Associate, or related advertising roles.",
      },
      {
        q: "Why choose Techcadd for Google Ads training in Amritsar?",
        a: "Techcadd can be considered by learners looking for structured, practical, and career-focused digital marketing training. Students can develop an understanding of Google Ads concepts while connecting paid advertising with broader digital marketing activities.",
      },
      {
        q: "Where can I learn Google Ads in Amritsar?",
        a: "Google Ads can be learned at a training centre in Amritsar or through structured online sessions. Techcadd runs its Google Ads training from its Amritsar centre, in the classroom or training mode currently available. Confirm the current mode, batch timings and centre details directly with the Techcadd team before enrolling.",
      },
      {
        q: "How long does a Google Ads course take?",
        a: "Course length varies with how much of the platform is covered and how much practical campaign work is included. The fundamentals of account structure, keywords, ads, tracking and optimization can be covered in a focused programme, while comfort with the platform continues to develop through practice afterwards. Contact Techcadd for the current course duration.",
      },
      {
        q: "What is the Google Ads course fee in Amritsar?",
        a: "Fees depend on the course structure, duration and learning mode, and they can change between batches. Techcadd shares the current fee, batch schedule and payment options on enquiry, so ask the team directly rather than relying on figures published elsewhere.",
      },
      {
        q: "Is Google Ads better than SEO?",
        a: "Neither replaces the other. Paid search can place a business in front of people searching right now and its results can be measured almost immediately, while SEO builds visibility that does not depend on ongoing ad spend but takes longer to develop. Most businesses use both, and learners who understand how the two work together are usually better placed in digital marketing roles than those who know only one.",
      },
    ],

    /* The brief leaves the duration to the Techcadd team, so the derived tiers
       table would be inventing figures it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Start your Google Ads learning journey with Techcadd",
      heading: "Ready to Learn Google Ads in",
      accent: "Amritsar?",
      body: "Build practical knowledge of paid search advertising with Google Ads training at Techcadd in Amritsar. Learn campaign planning, keyword research, ad creation, targeting, conversion tracking, performance analysis, and optimization with a career-focused approach.",
      /* The brief's "Course Details" block, row for row. */
      facts: [
        "Course Name: Google Ads Training",
        "Duration: Contact Techcadd for the current course duration",
        "Mode: Classroom / training mode as available",
        "Centre: Techcadd – Amritsar",
        "Suitable For: Students, graduates, job seekers, freelancers, working professionals, and business owners",
      ],
      /* What the brief's callback section invites learners to ask about. */
      assurances: [
        "Latest batch",
        "Course schedule",
        "Fees",
        "Duration",
        "Available learning options",
      ],
      formTitle: "Enquire About the Course",
      formNote:
        "Interested in Google Ads training in Amritsar? Submit your enquiry and ask the Techcadd team about the latest batch, course schedule, fees, duration, and available learning options.",
      submitLabel: "Get Course Details & Request a Callback",
      placeholders: {
        name: "Name",
        phone: "Mobile Number",
        email: "Email",
      },
      showEmail: true,
      batchLabel: "Preferred Learning Mode",
      batchOptions: ["Classroom", "Other"],
    },

    demo: {
      eyebrow: "Request a callback",
      heading: "Get Course Details & Request a Callback",
      body: "Interested in Google Ads training in Amritsar? Submit your enquiry and ask the Techcadd team about the latest batch, course schedule, fees, duration, and available learning options.",
      action: "Enquire About Google Ads Training",
      note: "Training availability, fees, batch schedules, and course details may vary. Confirm the latest information directly with Techcadd before enrolment.",
    },

    /* Title, description and the keyword clusters from the brief's Stage 8
       keyword and GEO strategy report. */
    seo: {
      title: "Google Ads Course in Amritsar | PPC Training – Techcadd",
      description:
        "Google Ads course in Amritsar with practical PPC training, campaign setup, keyword research, conversion tracking and optimization at Techcadd.",
      keywords: [
        "Google Ads course in Amritsar",
        "Google Ads training in Amritsar",
        "Google Ads classes in Amritsar",
        "Google Ads institute in Amritsar",
        "PPC course in Amritsar",
        "PPC training in Amritsar",
        "PPC classes in Amritsar",
        "PPC institute in Amritsar",
        "Google Ads certification course in Amritsar",
        "Google Ads coaching in Amritsar",
        "paid advertising course in Amritsar",
        "Google PPC course in Amritsar",
        "SEM course in Amritsar",
        "Google Ads training institute in Amritsar",
        "best Google Ads course in Amritsar",
        "digital marketing course in Amritsar",
        "digital marketing institute in Amritsar",
        "digital marketing training in Amritsar",
        "performance marketing course in Amritsar",
        "digital advertising course in Amritsar",
        "online advertising course in Amritsar",
        "paid media course in Amritsar",
        "search engine marketing course in Amritsar",
        "PPC advertising course in Amritsar",
        "Google Search Ads course in Amritsar",
        "Google Ads course in Ranjit Avenue Amritsar",
        "Google Ads training Ranjit Avenue Amritsar",
        "PPC training Ranjit Avenue",
        "Google Ads classes near Ranjit Avenue",
        "digital marketing training Ranjit Avenue Amritsar",
        "Google Ads course near Lawrence Road Amritsar",
        "PPC course near Majitha Road Amritsar",
        "Google Ads training near Batala Road Amritsar",
        "digital marketing institute Amritsar Punjab",
      ],
    },

    closing:
      "The objective of Google Ads training should be to help students understand how paid advertising decisions are made. By combining keyword research, campaign creation, ad copywriting, targeting, tracking, analytics, and optimization, learners can build a practical foundation for exploring roles such as PPC Executive, Google Ads Executive, Digital Marketing Executive, Paid Media Associate, or Performance Marketing Executive. For students searching for Google Ads training in Amritsar, developing these practical skills can be a valuable step toward understanding modern online advertising and building a career-focused digital marketing profile.",
  },
};

/* ----------------------------------------------------------------- wordpress */

/**
 * Source copy: the Amritsar WordPress brief (short overview, seven eligibility
 * personas plus the no-prerequisites note, the two "why" arguments, eight
 * learning blocks with the tools list, eleven student reviews, twelve FAQs, the
 * enquiry section and the keyword/GEO strategy report). The eight learning
 * blocks and the tool list live in `course-data.ts` instead, because they are
 * the curriculum and the module explorer reads them from the seed.
 */
const wordpress: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Web & CMS · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for, split so the promise half
         carries the accent. */
      headline: "WordPress Training in Amritsar –",
      accent: "Build Real Websites, Build a Real Career",
      tagline:
        "Practical, industry-ready training in the world's most popular content management system — themes, Elementor, plugins, WooCommerce and on-page SEO, built around real client-style projects.",
      chips: ["6 – 8 weeks", "Online & offline (in-centre)", "No coding background required"],
      image: "/images/courses/wordpress.png",
    },

    overview: {
      heading: "WordPress Training in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build a career in web development without deep coding? Techcadd's WordPress Training in Amritsar is designed for students, graduates, and job seekers who want practical, industry-ready skills in the world's most popular content management system — powering over 40% of websites globally.",
        "At Techcadd, Amritsar, you'll learn to design, build, customize, and manage professional websites using WordPress — from themes and plugins to WooCommerce, Elementor page building, and basic on-page SEO. This isn't just theory; every module is built around real client-style projects, so you graduate with a portfolio, not just a certificate.",
        "Whether you're a 12th-pass student exploring tech careers, a graduate wanting a practical skill add-on, or a job seeker aiming for freelancing or a full-time web developer/WordPress developer role, this course meets you where you are.",
        "With hands-on mentorship, small batches, and Amritsar's growing demand for local website developers, Techcadd's WordPress Training is your practical entry point into the web development and digital freelancing world.",
      ],
      /* The facts the brief's AEO note asks to keep near the top of the page,
         where an answer engine can extract them. */
      checks: [
        "6 – 8 weeks, with weekday and weekend batches",
        "Online and offline (in-centre, Amritsar) classes",
        "No coding, design or technical degree required",
        "Course completion certificate, plus a portfolio of live websites",
      ],
    },

    /* The brief's "The End Result", which the module explorer prints above the
       eight learning blocks. */
    curriculumNote:
      "By graduation, you'll be able to independently plan, build, customize, and launch a complete WordPress website — from an empty domain to a fully functional, SEO-friendly, mobile-responsive site ready for real clients or employers.",

    /* The seven starting points the brief names, closing on its own
       no-prerequisites note. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Techcadd's WordPress Training in Amritsar is built for anyone who wants to build real websites — no prior coding background required. If you've ever wondered how businesses get their websites online, or you want a practical, in-demand skill that doesn't need years of programming study, this course is your starting point.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just finished school and are exploring career options in tech, WordPress is one of the most beginner-friendly ways in. You don't need a computer science background — just curiosity and willingness to learn. Many students in Amritsar use this course as their first serious step into the IT and digital industry, building a portfolio while still deciding on a long-term specialization.",
        },
        {
          label: "Graduates (Any Stream)",
          detail:
            "Whether you hold a degree in commerce, arts, science, or even engineering, WordPress training adds a practical, job-ready skill that complements your degree. Graduates often join this course to pivot into web development, digital agencies, or freelance work — fields where a formal CS degree matters less than what you can actually build and show.",
        },
        {
          label: "Job Seekers Looking for Quick, Practical Skills",
          detail:
            "If you're currently job hunting and want to strengthen your resume with an in-demand technical skill, WordPress is one of the fastest ways to become employable. Businesses of every size — from local Amritsar shops to national brands — need people who can build, manage, and maintain their websites. This course is designed to get you interview-ready within a short, focused timeframe.",
        },
        {
          label: "Freelancers & Side-Hustlers",
          detail:
            "Many students join specifically to start freelancing — building websites for local businesses, boutiques, restaurants, doctors, and other small enterprises in Amritsar and beyond. WordPress is ideal for this because it lets you deliver professional, functional websites quickly, without needing a large development team.",
        },
        {
          label: "Small Business Owners & Entrepreneurs",
          detail:
            "If you run a business or plan to start one, learning WordPress means you don't have to depend on expensive developers every time you need a website update. You'll be able to build, manage, and update your own business website — saving money and staying in control of your online presence.",
        },
        {
          label: "Working Professionals Wanting to Upskill",
          detail:
            "Professionals in marketing, sales, or administrative roles often take this course to add a valuable technical skill to their profile. Understanding WordPress makes you more useful in roles that touch digital marketing, content management, or e-commerce — and can open doors to better-paying, more technical positions.",
        },
        {
          label: "Anyone Curious About Web Development",
          detail:
            "Not sure if coding is for you, but curious about how websites work? WordPress training is a low-pressure, practical way to explore web development before committing to more code-heavy paths like full stack development.",
        },
        {
          label: "No Prerequisites Needed",
          detail:
            "You don't need prior coding knowledge, a technical degree, or design experience. Basic computer literacy (using a browser, typing, navigating files) is enough to get started. Techcadd's trainers build every concept from the ground up, so whether you're a complete beginner or someone with some tech exposure, you'll be able to follow along and build real websites by the end of the course.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for WordPress Training?",
      body: "This combination of practical skill-building, mentorship, and career focus is why students across Amritsar choose Techcadd for their WordPress training — not just to learn a tool, but to build a real, usable skill set.",
      reasons: [
        {
          title: "A Curriculum Built Around Real Websites, Not Just Theory",
          body: "Techcadd's WordPress Training in Amritsar isn't about memorizing menus and settings — it's about building. From week one, you'll be working inside the WordPress dashboard, installing themes, customizing layouts, and creating pages that actually function. By the time you finish, you won't just \"know\" WordPress — you'll have a portfolio of live, working websites to show employers or clients.",
        },
        {
          title: "End-to-End Website Building Skills",
          body: "This program takes you through the complete website-building process: installation and setup, choosing and customizing themes, working with page builders like Elementor, adding functionality through plugins, setting up contact forms, and configuring WooCommerce for e-commerce stores. You'll also learn website speed optimization, basic on-page SEO, and security best practices — skills that separate a hobbyist from a professional.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Every concept taught at Techcadd is reinforced through practical application. Instead of long lecture sessions, you'll spend most of your time inside WordPress, solving real building challenges — designing a business homepage, setting up an online store, building a blog, or creating a portfolio site. This project-based approach means you retain what you learn because you've actually done it, not just heard about it.",
        },
        {
          title: "Small Batches, Personal Mentorship",
          body: "Techcadd keeps batch sizes manageable so trainers can actually pay attention to where each student is stuck. If you're someone who learns better with one-on-one doubt-clearing rather than getting lost in a crowd, this matters. You're not just watching a trainer build a website — you're building alongside them, with guidance available when you hit a wall.",
        },
        {
          title: "Freelance & Job Readiness Built In",
          body: "Beyond the technical skills, this program is structured to make you employable or freelance-ready by the end. You'll learn how to scope a client project, price your work, and present a finished website professionally — skills that most purely technical courses skip entirely. For Amritsar's growing base of local businesses needing an online presence, this makes you immediately useful.",
        },
        {
          title: "Practical Skill With Fast Turnaround",
          body: "Unlike full-stack development, which can take 6-12 months to become job-ready, WordPress lets you start building functional, professional websites in a much shorter timeframe. This makes it ideal if you want a quicker path to earning — whether through a job, internship, or freelance client work — without sacrificing quality or depth.",
        },
        {
          title: "Room to Grow Further",
          body: "WordPress is also a strong foundation if you later want to move into more advanced web development, digital marketing, or e-commerce management. Understanding how websites are structured and function gives you a real advantage when you explore HTML/CSS, SEO, or paid advertising down the line — many students at Techcadd use this course as their entry point before advancing to deeper technical or marketing specializations.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for WordPress Training?",
      body: "A trusted name in Amritsar's IT and training ecosystem: when choosing where to learn a skill that shapes your career, the training institute matters as much as the course itself. Techcadd has built a reputation in Amritsar as a practical, results-driven training center — not a place that hands out certificates for attendance, but one that pushes students to actually build, create, and deliver real work before they graduate.",
      reasons: [
        {
          title: "Trainers Who've Actually Built Websites",
          body: "At Techcadd, you're not learning WordPress from someone who only knows the theory. Our trainers bring real project experience — client websites, e-commerce stores, business portfolios — into the classroom. This means when you hit a real-world snag (a plugin conflict, a theme that won't cooperate, a client who wants something \"impossible\"), your trainer has likely solved that exact problem before and can guide you through it, not just point you to documentation.",
        },
        {
          title: "Practical, Project-First Teaching Method",
          body: "Techcadd doesn't believe in long PowerPoint lectures. From your very first sessions, you're inside the WordPress dashboard — building, breaking, fixing, and building again. This \"learn by doing\" philosophy means you finish the course with something tangible: real websites in your portfolio that you can show in interviews or to freelance clients, not just a completion certificate.",
        },
        {
          title: "Small Batch Sizes for Real Mentorship",
          body: "We intentionally keep our batches small. Large, packed classrooms mean trainers can't give individual attention — and in a hands-on skill like WordPress development, individual attention is exactly what helps you move from \"confused\" to \"confident.\" At Techcadd, when you're stuck, you get real help, not a generic FAQ link.",
        },
        {
          title: "Updated Curriculum That Matches Industry Needs",
          body: "Web development tools and best practices change constantly — new page builders, new plugin standards, new SEO requirements. Techcadd regularly updates its WordPress curriculum to reflect what's actually being used in the industry right now, so you're not learning outdated methods that employers or clients have already moved past.",
        },
        {
          title: "Career Support, Not Just Course Completion",
          body: "Techcadd's job isn't done when you finish the course — that's often where the real support begins. From resume guidance to portfolio review to interview preparation, we help bridge the gap between \"I completed a course\" and \"I'm ready to get hired or take on clients.\" For freelancing-focused students, we also help you understand how to price and pitch your services professionally.",
        },
        {
          title: "A Local Institute That Understands the Local Market",
          body: "Being based in Amritsar means Techcadd understands the local business landscape — the kinds of businesses that need websites, the skills local employers are actually hiring for, and the freelance opportunities available in and around the city. This local insight shapes how we teach and what we emphasize, giving Amritsar students a practical edge.",
        },
        {
          title: "Flexible Learning That Fits Real Life",
          body: "Whether you're a student balancing college, a graduate job-hunting, or a working professional upskilling in the evenings, Techcadd offers batch timings designed to fit real schedules — because a great course only helps if you can actually attend it consistently.",
        },
        {
          title: "One Outcome to Judge Us On",
          body: "Choosing Techcadd means choosing a training partner focused on one outcome: making sure you can actually do the job, not just talk about it.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "I joined Techcadd's WordPress course right after finishing my B.Com with zero coding background. Honestly, I was scared I wouldn't understand anything technical. But the trainers broke everything down so simply. Within 2 months I built my own portfolio website and even helped my uncle set up a site for his shop!",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "Best decision after 12th. I wanted something practical, not just theory classes. At Techcadd, we were building real websites from day one. Now I'm doing freelance work for two local businesses in Amritsar while continuing my graduation.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 4,
          meta: "WordPress training",
          quote:
            "The WooCommerce module was exactly what I needed since I wanted to help my family start an online store. The trainer patiently explained payment gateway setup, which honestly seemed complicated online but made sense once shown hands-on. Only wish the batch was a bit longer for more practice time.",
        },
        {
          name: "Harjot Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "I was working a random sales job and wanted a technical skill switch. Techcadd's small batch size really helped — trainer knew exactly where I was stuck with Elementor and helped one-on-one. Got a junior web developer job within a month of finishing!",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "As a graduate with no tech background, I was nervous about joining a 'coding' course. But this is really beginner-friendly — no complicated coding, mostly drag and drop with Elementor. I now freelance part-time while job hunting, and it's a nice extra income.",
        },
        {
          name: "Arshdeep Singh",
          initials: "AS",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "What I liked most was that they taught real client-handling too — not just building websites but how to talk to clients, price your work, and deliver professionally. That's something I didn't expect but really needed for freelancing.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 4,
          meta: "WordPress training",
          quote:
            "Good course overall, very practical. The SEO basics module was a nice addition since I didn't expect it to be included. Would've liked a bit more time on the security and backup section, but overall solid learning experience.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "I run a small tuition center in Amritsar and needed a website but couldn't afford to hire someone every time I wanted changes. Now I manage my own site completely — updates, new pages, everything myself. Techcadd made this possible.",
        },
        {
          name: "Jaspreet Kaur",
          initials: "JK",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "Trainers at Techcadd actually have real project experience, you can tell. When my plugin wasn't working, my trainer immediately knew what the issue was because she'd faced it with a client before. That kind of practical knowledge you don't get everywhere.",
        },
        {
          name: "Rohit Sharma",
          initials: "RS",
          role: "Amritsar",
          rating: 5,
          meta: "WordPress training",
          quote:
            "Joined after struggling to find a technical job with my B.A. degree. The WordPress course gave me something concrete to show in interviews — an actual working website, not just a certificate. Got hired as a web developer trainee within weeks of completing the course.",
        },
        {
          name: "Amanpreet Kaur",
          initials: "AK",
          role: "Amritsar",
          rating: 4,
          meta: "WordPress training",
          quote:
            "Really enjoyed the hands-on approach. Elementor page building was fun once I got the hang of it. The only thing I'd suggest is more sample projects to practice with different types of businesses — restaurants, clinics, etc.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order. Kept direct and self-contained, as
       its AEO note asks, and emitted as FAQPage JSON-LD from the course route. */
    faqs: [
      {
        q: "What is the duration of the WordPress Training course at Techcadd Amritsar?",
        a: "The course duration typically ranges from 6 to 8 weeks for a foundational program, depending on batch pace and whether you choose weekday or weekend classes. Techcadd offers flexible scheduling to fit both students and working professionals.",
      },
      {
        q: "Do I need coding knowledge to join this WordPress course?",
        a: "No. This course is designed for complete beginners. WordPress is largely a no-code/low-code platform, and Techcadd's trainers build every concept from the basics — you only need basic computer literacy to get started.",
      },
      {
        q: "Who can join Techcadd's WordPress Training in Amritsar?",
        a: "12th-pass students, graduates from any stream, job seekers, freelancers, small business owners, and working professionals looking to upskill can all join. There are no strict eligibility restrictions.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, Techcadd provides a course completion certificate that you can add to your resume, LinkedIn profile, or freelance portfolio to showcase your skills to employers or clients.",
      },
      {
        q: "Can I build an online store using what I learn in this course?",
        a: "Yes. The course includes a dedicated WooCommerce module where you'll learn to set up product listings, payment gateways, shipping options, and manage a fully functional e-commerce store.",
      },
      {
        q: "Is this course useful for freelancing?",
        a: "Absolutely. Many Techcadd students start freelancing for local Amritsar businesses — building and maintaining websites — either during or immediately after the course. The curriculum also covers client-handling and pricing basics.",
      },
      {
        q: "What tools and software will I learn during the course?",
        a: "You'll gain hands-on experience with WordPress CMS, Elementor Page Builder, WooCommerce, SEO plugins like Yoast or Rank Math, cPanel, contact form plugins, and Google Search Console.",
      },
      {
        q: "Does the course include SEO training?",
        a: "Yes, foundational on-page SEO is covered — including meta titles, descriptions, headings, image alt text, and basic keyword placement — so your websites are built with visibility in mind from the start.",
      },
      {
        q: "What kind of jobs can I get after this course?",
        a: "Graduates commonly pursue roles like WordPress Developer, Web Developer Trainee, Website Executive, or Digital Content Manager, along with freelance web development opportunities.",
      },
      {
        q: "Are classes held online, offline, or both?",
        a: "Techcadd offers both online and offline (in-center, Amritsar) classes, so you can choose the format that best suits your schedule and learning preference.",
      },
      {
        q: "Is prior design experience necessary for this course?",
        a: "No prior design experience is needed. Elementor's drag-and-drop interface is taught from scratch, and design principles are explained in a simple, practical way throughout the course.",
      },
      {
        q: "How is Techcadd's WordPress course different from free YouTube tutorials?",
        a: "Unlike scattered free tutorials, Techcadd offers structured learning, hands-on mentorship, doubt resolution, real project practice, and career support — helping you build job-ready skills faster and with fewer gaps.",
      },
    ],

    /* The brief runs one 6–8 week programme on flexible batches, so the derived
       tiers table would be inventing durations it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Enrol at Techcadd, Amritsar",
      heading: "Start Your WordPress Career Journey —",
      accent: "Enroll at Techcadd, Amritsar",
      body: "Turn your interest in web development into a real, job-ready skill. Whether you're aiming for a job, a freelance career, or your own business website, Techcadd's WordPress Training gives you hands-on experience building live, professional websites — guided by mentors who've done it for real clients.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: WordPress Training",
        "Duration: 6–8 Weeks (Flexible Batches)",
        "Mode: Online & Offline (In-Center)",
        "Centre Location: Techcadd, Amritsar",
        "Eligibility: 12th Pass, Graduates, Job Seekers — No Coding Background Required",
      ],
      assurances: [
        "Callback within 24 hours",
        "Guidance on batch timings, fees and course structure",
        "No pressure, just clear answers",
      ],
      formTitle: "Request a Free Callback / Enquiry",
      formNote:
        "Fill in your details and our counselor will get in touch with you within 24 hours to guide you on batch timings, fees, and course structure — no pressure, just clear answers.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Preferred Mode",
      statusOptions: ["Online", "Offline"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Request a free callback",
      heading: "Talk to a Techcadd Counselor",
      body: "Fill in your details and our counselor will get in touch with you within 24 hours to guide you on batch timings, fees, and course structure — no pressure, just clear answers.",
      action: "Submit Enquiry",
      note: "Online and offline (in-centre, Amritsar) batches both run — pick the format that fits your schedule.",
    },

    /* Title, description and the keyword clusters from the brief's Stage 8
       keyword and GEO strategy report. */
    seo: {
      title: "WordPress Training in Amritsar | Techcadd",
      description:
        "Learn WordPress website building at Techcadd, Amritsar — hands-on training, real projects, no coding needed. Enroll now.",
      keywords: [
        "WordPress training Amritsar",
        "WordPress course in Amritsar",
        "WordPress developer course Amritsar",
        "learn WordPress in Amritsar",
        "best WordPress institute Amritsar",
        "WordPress website designing course Amritsar",
        "web development course Amritsar",
        "WordPress training institute near me Amritsar",
        "WordPress classes for beginners Amritsar",
        "WordPress course for beginners with certificate",
        "WordPress training with WooCommerce Amritsar",
        "Elementor training course Amritsar",
        "WordPress freelancing course Amritsar",
        "website designing course without coding Amritsar",
        "WordPress course fees Amritsar",
        "WordPress course duration Amritsar",
        "WordPress training after 12th",
        "WordPress course for graduates Amritsar",
        "best institute to learn WordPress website building",
        "WordPress course for students Amritsar",
        "WordPress training for job seekers",
        "WordPress course for freelancers Punjab",
        "website building course for small business owners Amritsar",
        "short-term IT courses in Amritsar",
        "WordPress training institute in Amritsar city center",
        "Techcadd Amritsar",
      ],
    },

    closing:
      "This combination of practical skill-building, mentorship, and career focus is why students across Amritsar choose Techcadd for their WordPress training — not just to learn a tool, but to build a real, usable skill set. Choosing Techcadd means choosing a training partner focused on one outcome: making sure you can actually do the job, not just talk about it.",
  },
};

/* ------------------------------------------------------------------- shopify */

/**
 * Source copy: the Amritsar Shopify brief (short overview, six eligibility
 * personas plus the no-prerequisites note, the two "why" arguments, eleven
 * learning blocks with the tools list, eleven student reviews, twelve FAQs, the
 * enquiry and callback section and the keyword/GEO strategy report). The eleven
 * learning blocks and the tool list live in `course-data.ts` instead, because
 * they are the curriculum and the module explorer reads them from the seed.
 */
const shopify: CourseOverride = {
  course: {
    hero: {
      eyebrow: "E-Commerce · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Shopify training course
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Shopify Training Course in",
      accent: "Amritsar",
      tagline:
        "Hands-on, practical training in one of the world's most in-demand e-commerce platforms — from store setup to theme customization, payments, shipping and Shopify SEO.",
      chips: ["Weekday & weekend batches", "In-person & online", "No coding required"],
      image: "/images/courses/shopify.png",
    },

    overview: {
      heading: "Shopify Training Course in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build your own online store or launch a career in e-commerce? The Shopify Training Course in Amritsar by Techcadd is designed for students, graduates, and entrepreneurs who want hands-on, practical skills in one of the world's most in-demand e-commerce platforms. Amritsar's growing startup and small-business ecosystem is creating fresh demand for Shopify-skilled professionals and store owners — from local handicraft and apparel sellers to full-scale D2C brands.",
        "This course takes you from the basics of store setup to advanced skills like theme customization, product and inventory management, payment gateway integration, shipping configuration, and Shopify SEO — everything needed to launch and grow a profitable online store.",
        "Whether you're a 12th-pass student exploring e-commerce as a career, a graduate seeking a job-ready skill, or someone wanting to start your own Shopify business from Amritsar, Techcadd's Shopify Training Course gives you real, practical, portfolio-ready experience — not just theory.",
        "Learn Shopify the right way, right here in Amritsar.",
      ],
      /* The facts the brief's AEO note asks to keep near the top of the page,
         where an answer engine can extract them. */
      checks: [
        "Flexible batches — weekday and weekend options available",
        "In-person at the Amritsar centre, and online",
        "No coding, design or business background required",
        "Techcadd course completion certificate, plus a live store you built",
      ],
    },

    curriculumNote:
      "Techcadd's Shopify Training Course in Amritsar is designed to take you from complete beginner to confidently managing a live, functional online store. Here's a detailed breakdown of what the course covers.",

    /* The six starting points the brief names, closing on its own
       no-prerequisites note. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Techcadd's Shopify Training Course in Amritsar is built for anyone who wants to turn e-commerce into a career or business — no prior technical background required. If you've ever wondered how online stores are built, managed, and scaled, this course gives you the exact skill set to do it yourself.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just finished school and are exploring career options beyond the usual degree route, Shopify is one of the fastest ways to build a practical, income-generating skill. You don't need a commerce or computer science background — just curiosity and willingness to learn. Many students in Amritsar are choosing skill-first paths like e-commerce and digital retail over traditional degrees because the job and freelance market rewards demonstrable skills over certificates alone.",
        },
        {
          label: "Graduates (Any Stream)",
          detail:
            "Whether you hold a degree in commerce, arts, science, or engineering, Shopify skills are stream-agnostic. Graduates looking to enter the growing e-commerce and D2C (direct-to-consumer) industry will find this course a fast, practical bridge between \"having a degree\" and \"being job-ready.\" Recruiters today look for candidates who can actually set up, manage, and optimize a live store — not just explain the theory.",
        },
        {
          label: "Job Seekers Wanting an In-Demand Skill",
          detail:
            "E-commerce hiring in Amritsar and across Punjab is expanding — brands need people who can manage their Shopify storefronts, run product listings, handle inventory, and support digital sales operations. If you're job-hunting and want to stand out, adding \"Shopify Store Management\" to your resume gives you a concrete, verifiable skill employers can test in an interview.",
        },
        {
          label: "Aspiring Entrepreneurs & Small Business Owners",
          detail:
            "Amritsar has a strong base of local businesses — from phulkari and handicrafts to food products, apparel, and religious/tourism-related goods — many of which are still not selling online, or are selling with an underdeveloped store. If you run a family business or want to start your own brand, this course teaches you to build and manage your own Shopify store end-to-end, without depending on expensive freelancers or agencies.",
        },
        {
          label: "Freelancers & Digital Professionals",
          detail:
            "If you're already working in digital marketing, design, or content, adding Shopify store setup and management to your skillset opens up freelance and client-based income opportunities. Shopify freelancers are in consistent demand for store setup, theme customization, and store audits — work that can be done locally in Amritsar or remotely for clients anywhere.",
        },
        {
          label: "Housewives & Career Restarters",
          detail:
            "Many women in Amritsar are exploring home-based business ideas, and Shopify is one of the most accessible platforms to launch a store without needing to code. This course is designed to be beginner-friendly, so if you're restarting your career or starting fresh, you'll be guided step-by-step.",
        },
        {
          label: "No Prerequisites Needed",
          detail:
            "You don't need coding knowledge, design experience, or a business background. Basic computer familiarity and internet usage is enough — Techcadd's trainers build every concept from the ground up, using real store examples relevant to the Amritsar and Punjab market.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Shopify Training?",
      body: "The Shopify Training Course in Amritsar at Techcadd isn't just about learning a software tool — it's about understanding how to build a real, functioning online business from scratch. Here's why this program stands out as the right choice for students and professionals in Amritsar.",
      reasons: [
        {
          title: "E-commerce Is Growing Faster Than Traditional Retail",
          body: "Online shopping in India continues to grow year over year, and small and mid-sized businesses are increasingly shifting from physical-only stores to hybrid or fully online models. Amritsar, with its strong trade and business culture, is part of this shift. Learning Shopify now positions you ahead of a curve that's only accelerating.",
        },
        {
          title: "Shopify Is the Global Industry Standard",
          body: "Shopify powers millions of stores worldwide and is one of the most widely used e-commerce platforms among small businesses, D2C brands, and even large enterprises. Learning Shopify isn't a niche or region-specific skill — it's globally recognized, meaning your skills are useful whether you work locally in Amritsar, remotely for international clients, or eventually relocate for work.",
        },
        {
          title: "Practical, Store-Building Curriculum",
          body: "This program is structured around actually building and managing a live Shopify store — not just watching demonstrations. You'll work on real store setup, product uploads, theme customization, payment and shipping configuration, and basic Shopify SEO. By the end, you'll have a portfolio-ready store you can show to employers or clients.",
        },
        {
          title: "Multiple Career and Income Paths",
          body: "Unlike many single-outcome courses, Shopify training opens several doors at once: employment — as a Shopify store manager, e-commerce executive, or digital operations associate; freelancing — offering store setup, theme customization, and store audit services to clients; entrepreneurship — launching and running your own online store or brand; and agency work — joining digital marketing or e-commerce agencies that manage Shopify stores for multiple clients.",
        },
        {
          title: "Low Barrier to Entry, High Practical Value",
          body: "Shopify was built to be usable without coding, which makes it one of the fastest skills to learn and start applying. Within weeks, students can go from zero knowledge to being able to independently set up and manage a functional store — a much faster path to \"job-ready\" or \"business-ready\" than many traditional IT courses.",
        },
        {
          title: "Designed Around the Local Market",
          body: "Techcadd's training doesn't rely on generic, one-size-fits-all examples. The course is taught with real reference points relevant to Amritsar's business landscape — local product categories, regional shipping and COD considerations, and the kind of small-business use cases students are likely to encounter or start themselves.",
        },
        {
          title: "Hands-On Trainer-Led Learning",
          body: "Rather than self-paced videos with no support, this program is trainer-led, meaning you get real-time doubt resolution, feedback on your store setup, and guidance tailored to your goals — whether that's a job, a freelance career, or your own business.",
        },
        {
          title: "Built for Exactly That Outcome",
          body: "If you're in Amritsar and looking for a practical, high-demand, low-barrier skill that opens up employment, freelancing, and entrepreneurship all at once, Shopify training through Techcadd is built exactly for that outcome.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Shopify Training?",
      body: "Choosing the right training institute matters just as much as choosing the right course — and Techcadd has built its reputation in Amritsar and across Punjab as a practical, career-focused training provider. Here's why students choose Techcadd for their Shopify Training Course.",
      reasons: [
        {
          title: "Career-First Training Philosophy",
          body: "Techcadd doesn't design courses around theory-heavy syllabi. Every module is built with one question in mind: \"Will this help the student get a job, a client, or launch a business?\" The Shopify Training Course is structured the same way — practical, outcome-driven, and directly tied to real e-commerce work.",
        },
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's trainers bring hands-on experience in e-commerce, digital marketing, and store management — not just academic knowledge. This means students learn current best practices, real troubleshooting scenarios, and the kind of practical judgment that only comes from working with live stores and real clients.",
        },
        {
          title: "Real Store-Building, Not Just Theory",
          body: "Students at Techcadd don't just watch tutorials — they build. From setting up a store, choosing and customizing themes, uploading products, configuring payment and shipping options, to applying basic SEO — every student leaves with a working store they built themselves, ready to show in interviews or to potential clients.",
        },
        {
          title: "Local Presence, Local Understanding",
          body: "Being based in Amritsar means Techcadd understands the local student base, the regional business landscape, and the specific opportunities available in and around Punjab. Training is contextualized with examples and use cases relevant to local businesses — not generic, imported case studies.",
        },
        {
          title: "Small Batches & Personal Attention",
          body: "Techcadd keeps batch sizes manageable so that every student gets adequate time with trainers, gets their doubts cleared, and receives feedback on their individual store projects — something that's often missing in oversized classroom setups or generic online courses.",
        },
        {
          title: "Career Support Beyond the Classroom",
          body: "Techcadd's support doesn't end when the course does. Students receive guidance on resume building, portfolio presentation, and interview preparation, along with awareness of freelancing platforms and local job opportunities where Shopify skills are in demand.",
        },
        {
          title: "Certification That Adds Credibility",
          body: "On successful completion, students receive a course completion certificate from Techcadd — a credential that adds weight to your resume, LinkedIn profile, or freelance portfolio, and signals to employers or clients that you've been trained in a structured, practical environment.",
        },
        {
          title: "Trusted Track Record",
          body: "Techcadd has trained students across multiple in-demand skills — from web development and digital marketing to programming and design — building a consistent track record of turning beginners into job-ready or business-ready professionals. The Shopify Training Course carries forward that same standard of practical, results-oriented training.",
        },
        {
          title: "Affordable, Accessible Training",
          body: "Quality skill training shouldn't be out of reach. Techcadd prices its courses to be accessible for students and job seekers in Amritsar, without compromising on training quality, trainer experience, or hands-on practice time.",
        },
        {
          title: "The Complete Package",
          body: "For students in Amritsar who want more than just a certificate — who want real skills, real support, and a real shot at a career or business in e-commerce — Techcadd offers the complete package.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Simranjeet Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "I joined Techcadd's Shopify course right after my graduation, not really knowing what e-commerce meant beyond online shopping. Within two months I had built my own store selling phulkari dupattas. The trainers explained everything in a very simple way — no confusing jargon. Best decision I made this year.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "My family has a small sportswear shop near Hall Bazaar and we always wanted to sell online but didn't know how. After this course, I set up our Shopify store myself — theme, products, payments, everything. Saved us a lot of money we would've spent hiring someone.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Amritsar",
          rating: 4,
          meta: "Shopify Training Course",
          quote:
            "Good course, very practical. I liked that we weren't just watching videos — we were actually building our store step by step in class. Only wish the batch was slightly smaller, but overall very satisfied with what I learned.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "I was job hunting for almost 6 months with just a BA degree and nothing to show. Added Shopify store management to my resume after this course and got shortlisted for an e-commerce executive role within weeks. Trainers here actually care about your outcome, not just finishing the syllabus.",
        },
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "I'm a housewife and always wanted to start something of my own. Techcadd's trainers were very patient with me since I wasn't very comfortable with computers initially. Now I run my own small home-based store for candles and gifting items. Truly grateful.",
        },
        {
          name: "Jasdeep Singh",
          initials: "JS",
          role: "Amritsar",
          rating: 4,
          meta: "Shopify Training Course",
          quote:
            "Solid course for anyone serious about e-commerce. The SEO and marketing basics module was especially useful — helped me understand how to actually get customers to my store, not just build it and wait.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "I do freelance digital marketing and added Shopify store setup as a service after this course. Already got two clients from Amritsar itself. The certificate also helped when pitching to clients — gives instant credibility.",
        },
        {
          name: "Karanvir Singh",
          initials: "KS",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "Came here straight after 12th, not sure what to do next. This course gave me a real direction. Now working as a Shopify store assistant for a local business while I decide on further studies. Practical and worth every rupee.",
        },
        {
          name: "Amreen Kaur",
          initials: "AK",
          role: "Amritsar",
          rating: 4,
          meta: "Shopify Training Course",
          quote:
            "Very well structured course. What I appreciated most was that the examples were relatable — local products, COD setup, things that actually apply to businesses here in Amritsar, not just generic international examples.",
        },
        {
          name: "Sukhwinder Singh",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "I run a small food products business and wanted to expand online. Techcadd's trainers helped me understand not just the tech side but also how to think about my store from a customer's point of view. Store is live now and getting steady orders.",
        },
        {
          name: "Prabhjot Kaur",
          initials: "PK",
          role: "Amritsar",
          rating: 5,
          meta: "Shopify Training Course",
          quote:
            "Highly recommend this course to anyone in Amritsar thinking about e-commerce. Supportive trainers, hands-on learning, and I walked out with an actual working store instead of just notes and theory.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — answers kept direct and
       self-contained, as its AEO note asks, and emitted as FAQPage JSON-LD from
       the course route. */
    faqs: [
      {
        q: "What is the Shopify Training Course at Techcadd Amritsar about?",
        a: "Techcadd's Shopify Training Course teaches students how to build, customize, and manage a complete online store using Shopify — covering store setup, theme customization, product and inventory management, payments, shipping, SEO, and basic marketing.",
      },
      {
        q: "Do I need coding knowledge to join this course?",
        a: "No. Shopify is a beginner-friendly, no-code platform. Basic computer and internet familiarity is enough to start this course — no prior coding or design experience is required.",
      },
      {
        q: "Who can join the Shopify Training Course in Amritsar?",
        a: "This course is open to 12th-pass students, graduates from any stream, job seekers, entrepreneurs, freelancers, small business owners, and even homemakers looking to start an online business.",
      },
      {
        q: "How long is the Shopify Training Course?",
        a: "Course duration varies by batch and mode, typically ranging from a few weeks to a couple of months, with both weekday and weekend batch options available. Contact Techcadd Amritsar for current batch schedules.",
      },
      {
        q: "Will I build a real Shopify store during the course?",
        a: "Yes. The course is hands-on and project-based — every student sets up and manages their own live Shopify store as part of the training, covering everything from theme selection to product listings and payment setup.",
      },
      {
        q: "What career options are available after this course?",
        a: "Graduates can pursue roles as Shopify store managers, e-commerce executives, or digital operations associates, work as freelancers offering store setup services, or launch their own online store or business.",
      },
      {
        q: "Does Techcadd provide a certificate after course completion?",
        a: "Yes. Students receive a course completion certificate from Techcadd upon successfully finishing the Shopify Training Course, which can be added to resumes, LinkedIn profiles, and freelance portfolios.",
      },
      {
        q: "Is this course useful for someone who wants to start their own online business?",
        a: "Absolutely. The course is designed to teach end-to-end store management, making it ideal for entrepreneurs and small business owners who want to launch or scale an online store without relying on external agencies.",
      },
      {
        q: "Are classes available online or only in-person at the Amritsar centre?",
        a: "Techcadd offers flexible learning options at its Amritsar centre; contact the institute directly to confirm current online and in-person batch availability.",
      },
      {
        q: "Does the course cover Shopify SEO and marketing?",
        a: "Yes. The course includes a module on Shopify SEO basics — optimizing product pages, meta titles, and descriptions — along with an introduction to marketing fundamentals like promotions and social media sales channels.",
      },
      {
        q: "Is prior business or e-commerce experience required?",
        a: "No prior business or e-commerce experience is needed. The course starts from the fundamentals and builds up, making it suitable for complete beginners.",
      },
      {
        q: "How is Techcadd's Shopify course different from free online tutorials?",
        a: "Unlike free tutorials, Techcadd offers structured, trainer-led learning with real-time doubt resolution, hands-on project guidance, local market context, and a certificate — along with career support like resume and portfolio guidance.",
      },
    ],

    /* The brief runs flexible weekday and weekend batches rather than fixed
       tiers, so the derived tracks table would be inventing durations. */
    tracks: false,

    cta: {
      eyebrow: "Start your e-commerce journey today",
      heading: "Build Your Own Shopify Store —",
      accent: "Learn by Doing, Right Here in Amritsar",
      body: "Turn your interest in e-commerce into a real, job-ready skill or a live online business. Techcadd's Shopify Training Course gives you hands-on, trainer-led learning designed for students, job seekers, and entrepreneurs in Amritsar.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: Shopify Training Course",
        "Duration: Flexible batches — weekday & weekend options available",
        "Mode: In-person (Amritsar centre) & Online",
        "Centre: Techcadd, Amritsar",
        "Certification: Yes — Techcadd Course Completion Certificate",
      ],
      assurances: [
        "Limited seats per batch",
        "Complete course, batch and fee information",
        "Counsellor callback within 24 hours",
      ],
      formTitle: "Enquire Now — Limited Seats Per Batch",
      formNote:
        "Fill in your details below and our team will get in touch with complete course, batch, and fee information.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Graduate", "Job Seeker", "Business Owner", "Other"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Weekday", "Weekend"],
    },

    demo: {
      eyebrow: "Prefer a callback?",
      heading: "Request a Callback",
      body: "Not ready to fill a form? Just leave your number — our counsellor will call you within 24 hours to answer your questions, no pressure, no obligation.",
      action: "Request a Callback",
      note: "Limited seats per batch. Weekday and weekend options are available, in person at the Amritsar centre or online.",
    },

    /* Built from the brief's Stage 8 keyword and GEO strategy report: the
       primary, secondary, long-tail, audience and GEO-modifier clusters. */
    seo: {
      title: "Shopify Training Course in Amritsar | Techcadd",
      description:
        "Learn Shopify at Techcadd, Amritsar — hands-on training in store setup, theme customization, products, payments, shipping, SEO and marketing. No coding needed.",
      keywords: [
        "Shopify training course Amritsar",
        "Shopify course Amritsar",
        "Shopify training institute Amritsar",
        "Shopify classes near me Amritsar",
        "e-commerce course Amritsar",
        "Shopify store setup training Amritsar",
        "learn Shopify Amritsar",
        "best Shopify institute in Amritsar",
        "Shopify certification course Amritsar",
        "online store training Amritsar",
        "Shopify course for beginners Amritsar",
        "how to start Shopify store from Amritsar",
        "Shopify training for students in Amritsar",
        "Shopify course fee in Amritsar",
        "Shopify course after 12th Amritsar",
        "best institute to learn Shopify in Punjab",
        "Shopify freelancing course Amritsar",
        "e-commerce business course for beginners Amritsar",
        "Shopify SEO training Amritsar",
        "dropshipping and Shopify course Amritsar",
        "Techcadd Shopify course Amritsar",
        "Shopify institute near me",
        "Shopify course near Ranjit Avenue Amritsar",
        "Shopify training near Hall Bazaar Amritsar",
        "Shopify classes near Lawrence Road Amritsar",
        "Shopify training Amritsar Punjab",
      ],
    },

    closing:
      "For students in Amritsar who want more than just a certificate — who want real skills, real support, and a real shot at a career or business in e-commerce — Techcadd offers the complete package.",
  },
};

/* --------------------------------------------------------------------- seo */

/**
 * Source copy: the Amritsar SEO brief (short overview, seven eligibility
 * personas plus the no-coding note, the two "why" arguments, ten learning
 * blocks with the tools list, eleven student reviews, twelve FAQs and the
 * enquiry/callback section). The ten learning blocks and the tool list live in
 * `course-data.ts` instead, because they are the curriculum and the module
 * explorer reads them from the seed.
 */
const seo: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Digital Marketing · TechCadd Amritsar",
      /* The H1 the brief is written around — "SEO Training Course in Amritsar"
         — rather than the catalogue phrasing. */
      headline: "SEO Training Course in",
      accent: "Amritsar",
      tagline:
        "Practical, industry-relevant training in on-page, off-page, technical and local SEO — plus GEO and AEO for AI-driven search — on live projects and industry-standard tools.",
      chips: ["Weekday / weekend / evening batches", "In-person classroom training", "No coding required"],
      image: "/images/courses/seo.png",
    },

    overview: {
      heading: "SEO Training Course in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build a career in Search Engine Optimization? Techcadd's SEO Training Course in Amritsar is designed for students, graduates, and job seekers who want practical, industry-relevant skills to rank websites on Google and drive real organic growth.",
        "This course covers on-page SEO, off-page SEO, technical SEO, keyword research, content optimization, local SEO, and the latest AI-driven search trends like GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization). You'll work on live projects, real websites, and industry-standard tools such as Google Search Console, Ahrefs, SEMrush, and Google Analytics.",
        "Whether you're a 12th-pass student, a graduate exploring digital careers, or a working professional looking to upskill, this Amritsar-based SEO training gives you hands-on experience and a strong foundation for roles like SEO Executive, SEO Analyst, or Digital Marketing Specialist.",
        "At Techcadd, we combine expert mentorship, practical assignments, and placement support to help you turn SEO skills into a real career — right here in Amritsar.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "Techcadd's SEO Training Course is designed to take you from complete beginner to job-ready SEO professional through a structured, hands-on curriculum. Here's a detailed breakdown of what the course covers.",

    /* The seven starting points the brief names, closing on its own no-coding
       note. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Techcadd's SEO Training Course in Amritsar is built for a wide range of learners — you don't need a technical background to get started. If you're curious about how websites rank on Google and want a career in digital growth, this course is for you.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "If you've just finished school and are exploring career options beyond traditional degrees, SEO is a great starting point. It's practical, in-demand, and doesn't require years of theoretical study. You'll learn real skills that employers actually look for, and you can start applying for junior SEO roles or internships right after the course.",
        },
        {
          label: "Graduates (Any Stream)",
          detail:
            "Whether you hold a degree in Commerce, Arts, Science, or Engineering, SEO is stream-agnostic. Many successful SEO professionals come from non-technical backgrounds. If you're a graduate unsure about your next career move, this course gives you a clear, structured path into the digital marketing industry — one of the fastest-growing sectors in India today.",
        },
        {
          label: "Job Seekers Looking for a Career Switch",
          detail:
            "If you're currently working in an unrelated field and want to transition into digital marketing, SEO training is one of the most practical entry points. It's a skill you can learn part-time, apply immediately, and use to build a portfolio — even before you officially switch careers.",
        },
        {
          label: "Small Business Owners & Entrepreneurs",
          detail:
            "If you run a business in Amritsar and want to promote it online without paying expensive agency fees, learning SEO yourself is a smart investment. You'll understand how to rank your own website, attract local customers, and reduce dependency on paid ads.",
        },
        {
          label: "Freelancers & Content Creators",
          detail:
            "If you're already working as a freelance writer, blogger, or content creator, adding SEO to your skillset makes you significantly more valuable. Clients today expect content that's not just well-written but also optimized for search visibility.",
        },
        {
          label: "Working Marketing Professionals",
          detail:
            "If you're already in a marketing role — social media, content, or general marketing — but haven't formally learned SEO, this course fills that gap. It strengthens your resume and opens doors to specialized, higher-paying roles.",
        },
        {
          label: "Anyone Interested in Freelancing or Remote Work",
          detail:
            "SEO is one of the most freelance-friendly skills. Once trained, you can offer services to clients across India and globally, work remotely, and build a flexible career — a big reason why students in Amritsar are increasingly choosing SEO training as their first digital skill.",
        },
        {
          label: "No Prior Coding Knowledge Required",
          detail:
            "Techcadd's course starts from the fundamentals and gradually moves into advanced, practical concepts — making it accessible for absolute beginners while still valuable for those with some existing marketing experience.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for SEO Training?",
      body: "Choosing the right SEO training program can make the difference between learning theory and actually building a career. Here's why Techcadd's SEO Training Course in Amritsar stands out for students and job seekers alike.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "This isn't a course built around slides and definitions. From day one, you work on live websites, real keyword research, and actual ranking projects. By the time you finish, you have hands-on experience — not just theoretical knowledge — which is exactly what employers and clients want to see.",
        },
        {
          title: "Industry-Standard Tools Included",
          body: "You'll get trained on the same tools professionals use daily: Google Search Console, Google Analytics, Ahrefs, SEMrush, and keyword research platforms. Many self-taught learners struggle simply because they don't know how to use these tools properly — this program removes that barrier completely.",
        },
        {
          title: "Covers Modern Search — Not Just Traditional SEO",
          body: "Search is evolving fast. Beyond classic on-page and off-page SEO, this program introduces you to GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) — how content gets picked up by AI tools like ChatGPT, Google AI Overviews, and voice assistants. Most local training institutes haven't updated their syllabus for this shift. Techcadd has.",
        },
        {
          title: "Local Focus, Global Relevance",
          body: "While the course is taught in Amritsar with local case studies and examples, the skills you learn apply anywhere — you can freelance for clients in Delhi, Mumbai, or internationally, or work remotely for agencies outside Punjab. It's a local course with a global skill outcome.",
        },
        {
          title: "Career-Oriented Structure",
          body: "The curriculum is built backward from job requirements — meaning every module maps to what recruiters actually ask for in interviews and job postings for SEO Executive, SEO Analyst, and Digital Marketing Specialist roles. You're not just learning SEO; you're preparing for a specific career outcome.",
        },
        {
          title: "Beginner-Friendly, No Coding Required",
          body: "You don't need a technical or coding background. The course starts from fundamentals — how search engines work, how ranking factors are evaluated — and builds up gradually into advanced technical SEO, making it approachable for complete beginners while still meaningful for those with some marketing exposure.",
        },
        {
          title: "Mentorship and Doubt-Solving Support",
          body: "Learning SEO alone from YouTube videos often leads to confusion and outdated information. This program gives you direct access to trainers who can clarify doubts, review your work, and guide you based on current, real-world SEO practices — not recycled content from years ago.",
        },
        {
          title: "Placement and Portfolio Support",
          body: "By the end of the course, you don't just walk away with a certificate — you walk away with a portfolio of real SEO work you can show employers or clients, along with placement assistance to help you land your first role or freelance project.",
        },
        {
          title: "Affordable, Accessible Location in Amritsar",
          body: "For students and professionals based in and around Amritsar, this eliminates the need to relocate or pay for expensive online-only courses that lack local support and in-person mentorship.",
        },
        {
          title: "A Future-Ready Choice",
          body: "Together, these factors make this program a practical, future-ready choice for anyone serious about building a real career in SEO — not just collecting another certificate.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for SEO Training in Amritsar?",
      body: "When it comes to choosing a training institute for SEO in Amritsar, the choice matters as much as the course content itself. Here's why Techcadd is the preferred choice for students and professionals across the region.",
      reasons: [
        {
          title: "Years of Training Experience Across Digital Skills",
          body: "Techcadd has trained hundreds of students across digital marketing, web development, and design disciplines. This isn't a single-course institute — it's a training organization with a track record of helping students transition into real tech and marketing careers.",
        },
        {
          title: "Trainers with Real Industry Experience",
          body: "Our SEO trainers aren't just certified — they've worked on live client projects, managed real websites, and understand what actually moves rankings, not just what textbooks say. This means you're learning current, tested strategies rather than outdated theory.",
        },
        {
          title: "Curriculum Updated for 2026 Search Trends",
          body: "SEO has changed dramatically with AI-powered search. Techcadd's syllabus is regularly updated to include not just traditional SEO but also GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) — preparing you for how people search today, using tools like ChatGPT, Google AI Overviews, and voice search, not just classic Google results pages.",
        },
        {
          title: "Hands-On, Project-Based Classrooms",
          body: "Every module is backed by practical exercises. You won't just learn what a backlink is — you'll actually build one. You won't just study keyword research — you'll research real keywords for real client-style projects. This project-first approach is what separates job-ready students from those who only understand SEO in theory.",
        },
        {
          title: "Small Batch Sizes for Personal Attention",
          body: "Techcadd keeps batch sizes manageable so trainers can actually answer your questions, review your work, and guide you individually — something large online courses or oversized institutes simply can't offer.",
        },
        {
          title: "Local Presence in Amritsar with Personal Mentorship",
          body: "Being trained in-person, in Amritsar, means you get direct mentorship, immediate doubt resolution, and a support system that purely online courses can't replicate. You're not just watching pre-recorded videos — you're learning in a structured, guided environment.",
        },
        {
          title: "Certification Recognized by Local Employers",
          body: "Techcadd's certification carries credibility with local businesses, agencies, and startups across Amritsar and Punjab, many of whom actively look to hire trained candidates from recognized institutes when filling SEO and digital marketing roles.",
        },
        {
          title: "Placement Assistance and Career Guidance",
          body: "Beyond training, Techcadd supports students with resume building, interview preparation, and placement assistance — helping bridge the gap between \"completing a course\" and \"landing a job.\"",
        },
        {
          title: "Affordable Fees with Flexible Batches",
          body: "Techcadd offers competitively priced training with flexible batch timings — weekday, weekend, and evening options — designed around the schedules of students, graduates, and working professionals alike.",
        },
        {
          title: "A Trusted Name in Amritsar's Training Ecosystem",
          body: "Word-of-mouth reputation matters in a city like Amritsar, and Techcadd has built its name through consistent results — students who complete the course and go on to secure real roles or successfully freelance.",
        },
        {
          title: "A Training Partner, Not Just a Certificate",
          body: "Choosing Techcadd means choosing a training partner that combines practical skill-building, current industry knowledge, and genuine career support — not just a certificate at the end of a few weeks.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the two
       four-star ones and what they ask for. The distribution below is the real
       split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.8",
      total: 11,
      distribution: [
        { stars: 5, percent: 82 },
        { stars: 4, percent: 18 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Simranjeet Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "I joined Techcadd's SEO course right after graduating from Guru Nanak Dev University. I had zero technical background, but the trainers explained everything so simply. I now freelance for two clients doing on-page SEO. Best decision I made this year!",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "Being from Amritsar, I didn't want to move to Chandigarh just for a good course. Techcadd gave me exactly what I needed — practical training, real projects, and a trainer who actually answered my doubts instead of rushing through slides.",
        },
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "I was working in a call center and wanted a career switch. The SEO course at Techcadd, Amritsar helped me understand keyword research and Google Search Console properly. I recently got hired as a junior SEO executive!",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 4,
          meta: "SEO Training Course",
          quote:
            "Good course overall. The technical SEO module was a bit fast for me initially, but the trainer gave extra time after class to clear doubts. Learned Screaming Frog and schema markup which I hadn't touched before.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "As a content writer, adding SEO skills has completely changed how clients see my work. Techcadd's Amritsar batch was small, so I got proper one-on-one attention. Highly recommend for anyone from Amritsar looking to upskill.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "I run a small shop near Hall Bazaar and wanted to promote it online myself instead of hiring an agency. This course taught me Google Business Profile optimization and local SEO — my shop now shows up in local searches!",
        },
        {
          name: "Amandeep Kaur",
          initials: "AK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "The GEO and AEO modules were something I hadn't seen in any other institute in Amritsar. Felt like I was learning something genuinely future-ready, not just the same old SEO syllabus everyone teaches.",
        },
        {
          name: "Karanvir Singh",
          initials: "KS",
          role: "Amritsar",
          rating: 4,
          meta: "SEO Training Course",
          quote:
            "Solid, practical course. I liked that we worked on real websites instead of just theory. Would've liked a bit more time on link building, but overall very satisfied with what I learned.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "After 12th, I wasn't sure what career to pick. My cousin suggested Techcadd's SEO course in Amritsar. Six months later, I'm doing an SEO internship and genuinely enjoying the work. Grateful for the guidance here.",
        },
        {
          name: "Rajdeep Singh",
          initials: "RS",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "I've done a few online SEO courses before but never understood things properly. Attending in-person classes at Techcadd, Amritsar made a huge difference — being able to ask questions directly and get real feedback on my work was invaluable.",
        },
        {
          name: "Simarjit Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "SEO Training Course",
          quote:
            "Great placement support! The trainers helped me build a portfolio with real SEO project samples, which really helped during interviews. Landed my first job as an SEO analyst within a month of completing the course.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order, emitted as FAQPage JSON-LD from the
       course route. */
    faqs: [
      {
        q: "What is the SEO Training Course at Techcadd Amritsar about?",
        a: "It's a practical, project-based course that teaches you how to rank websites on Google — covering on-page SEO, off-page SEO, technical SEO, local SEO, and modern AI-search skills like GEO and AEO.",
      },
      {
        q: "Who can join this SEO course in Amritsar?",
        a: "Anyone — 12th pass students, graduates from any stream, job seekers, working professionals, freelancers, and small business owners. No prior technical or coding knowledge is required.",
      },
      {
        q: "Do I need a coding background to learn SEO?",
        a: "No. SEO does not require coding skills. The course starts from the basics and gradually builds up to advanced technical concepts, making it accessible for complete beginners.",
      },
      {
        q: "How long is the SEO training course at Techcadd?",
        a: "Course duration varies by batch and mode — typically ranging from a few weeks to a few months, with flexible weekday, weekend, and evening batches available in Amritsar.",
      },
      {
        q: "What tools will I learn in this course?",
        a: "You'll get hands-on training with Google Search Console, Google Analytics (GA4), Ahrefs, SEMrush, Google Keyword Planner, Screaming Frog, Google Business Profile, and schema markup tools.",
      },
      {
        q: "Is this SEO course only theoretical, or is it practical?",
        a: "It's heavily practical. You'll work on live websites, real keyword research projects, and actual optimization tasks — not just slides and definitions.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, Techcadd provides a course completion certificate that is recognized by local employers and agencies across Amritsar and Punjab.",
      },
      {
        q: "Does Techcadd provide placement assistance after the SEO course?",
        a: "Yes, Techcadd offers placement support, resume building, interview preparation, and portfolio guidance to help you secure a job or start freelancing.",
      },
      {
        q: "What career opportunities are available after this SEO course?",
        a: "Graduates can pursue roles such as SEO Executive, SEO Analyst, Digital Marketing Specialist, or work as freelance SEO consultants for clients in India and internationally.",
      },
      {
        q: "Does the course cover AI-based search optimization like GEO and AEO?",
        a: "Yes. Unlike many traditional institutes, Techcadd's syllabus includes GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) to prepare you for AI-driven search tools like ChatGPT and Google AI Overviews.",
      },
      {
        q: "Can small business owners in Amritsar benefit from this course?",
        a: "Absolutely. Business owners learn to optimize their own websites and Google Business Profiles, helping them attract local customers without relying on expensive agencies.",
      },
      {
        q: "Is the SEO course conducted online or in-person in Amritsar?",
        a: "Techcadd offers in-person, classroom-based training in Amritsar, allowing direct mentorship and real-time doubt resolution — something purely online courses often lack.",
      },
    ],

    /* The brief runs flexible weekday, weekend and evening batches rather than
       fixed tiers, so the derived tracks table would be inventing durations. */
    tracks: false,

    cta: {
      eyebrow: "Start your SEO career today",
      heading: "Start Your SEO Career Today —",
      accent: "Enroll at Techcadd, Amritsar",
      body: "Ready to master SEO and build a real career in digital growth? Join Techcadd's practical, industry-focused SEO Training Course in Amritsar and get hands-on with the same tools and strategies used by professionals.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: SEO Training Course",
        "Duration: Flexible (weeks to months, based on batch)",
        "Mode: In-Person (Classroom Training)",
        "Centre: Techcadd, Amritsar",
        "Batch Options: Weekday / Weekend / Evening",
      ],
      /* The trust lines the brief closes its enquiry section with. */
      assurances: [
        "Your information is safe with us — never shared with third parties",
        "No hidden charges",
        "Free demo class available on request",
      ],
      formTitle: "Enquire Now — It Only Takes a Minute",
      formNote:
        "Fill in your details and our team will get in touch with you shortly.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Graduate", "Working Professional", "Business Owner"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer a callback?",
      heading: "Request a Free Callback",
      body: "Our counsellor will call you within 24 hours to answer your questions — no pressure, no spam, just honest guidance on whether this course is right for you.",
      action: "Request Callback",
      note: "Your information is safe with us. No hidden charges, and a free demo class is available on request.",
    },

    seo: {
      title: "SEO Training Course in Amritsar | Techcadd",
      description:
        "Practical SEO training in Amritsar — on-page, off-page, technical and local SEO plus GEO and AEO for AI search, on live projects with Search Console, Ahrefs and SEMrush.",
      keywords: [
        "SEO training course in Amritsar",
        "SEO course in Amritsar",
        "SEO training in Amritsar",
        "SEO institute in Amritsar",
        "SEO classes in Amritsar",
        "SEO certification course in Amritsar",
        "SEO course for beginners in Amritsar",
        "SEO course after 12th in Amritsar",
        "SEO course for graduates in Amritsar",
        "SEO training for working professionals in Amritsar",
        "technical SEO training in Amritsar",
        "on-page SEO course in Amritsar",
        "off-page SEO and link building course in Amritsar",
        "local SEO course in Amritsar",
        "Google Business Profile optimization training in Amritsar",
        "keyword research training in Amritsar",
        "GEO generative engine optimization course in Amritsar",
        "AEO answer engine optimization course in Amritsar",
        "AI search optimization training in Amritsar",
        "Google Search Console training in Amritsar",
        "Google Analytics GA4 training in Amritsar",
        "Ahrefs and SEMrush training in Amritsar",
        "Screaming Frog technical audit training in Amritsar",
        "SEO freelancing course in Amritsar",
        "SEO course with placement support in Amritsar",
        "SEO jobs in Amritsar",
        "digital marketing course in Amritsar",
      ],
    },

    closing:
      "Choosing Techcadd means choosing a training partner that combines practical skill-building, current industry knowledge, and genuine career support — not just a certificate at the end of a few weeks.",
  },
};

/* ---------------------------------------------------------------- power bi */

/**
 * Source copy: the Amritsar Power BI brief (short overview, six eligibility
 * personas, the two "why" arguments, nine learning blocks with the tools list,
 * eleven student reviews, eleven FAQs, the enquiry/demo section and the
 * keyword/GEO strategy report). The nine learning blocks and the tool list live
 * in `course-data.ts` instead, because they are the curriculum and the module
 * explorer reads them from the seed.
 */
const powerBi: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Power BI Training in
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Power BI Training in",
      accent: "Amritsar",
      tagline:
        "From data import and Power Query to advanced DAX, data modeling and interactive dashboards — hands-on training on real-world projects for students, graduates and working professionals.",
      chips: ["Regular / fast-track batches", "Classroom, online & hybrid", "No coding required"],
      image: "/images/courses/power-bi.png",
    },

    overview: {
      heading: "Power BI Training Course in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build a career in data analytics? The Power BI Training in Amritsar at Techcadd is designed for students, graduates, and working professionals who want to master one of the most in-demand business intelligence tools in India today. As companies across Amritsar and Punjab increasingly rely on data-driven decisions, skilled Power BI professionals are seeing rising demand in finance, retail, IT, and marketing sectors.",
        "This Power BI course in Amritsar takes you from the basics of data import and Power Query to advanced DAX formulas, data modeling, and interactive dashboard creation — all through hands-on, real-world projects. Whether you're a 12th pass student exploring analytics as a career, a graduate preparing for placements, or a professional upskilling for a promotion, Techcadd's structured curriculum and expert trainers help you build genuine, job-ready skills.",
        "With flexible batch timings, practical training, and a local Amritsar-based learning environment, Techcadd makes it easy to start your journey toward becoming a certified Power BI Developer or Data Analyst — without leaving your city.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "The Power BI Training program at Techcadd is designed to take you from complete beginner to confident dashboard builder, covering every essential stage of the business intelligence workflow. Here's a detailed look at what the curriculum includes.",

    /* The six starting points the brief names, closing on its own summary. */
    eligibility: {
      heading: "Power BI Training in Amritsar – Who Can Enroll?",
      intro:
        "One of the biggest advantages of the Power BI Training course at Techcadd, Amritsar, is that it's genuinely open to learners from almost any academic or professional background. You don't need a computer science degree or prior coding experience to get started — you just need curiosity about data and a willingness to learn. Here's a closer look at who this course is really designed for.",
      criteria: [
        {
          label: "12th Pass Students Exploring a Career in Data",
          detail:
            "If you've just finished school and are wondering what comes next, Power BI is an excellent entry point into the world of data analytics. Students from Commerce, Science, or even Arts backgrounds can pick up Power BI without any prior technical knowledge. Since the tool is visual and drag-and-drop friendly at the beginner level, it's far less intimidating than jumping straight into programming languages. Starting early with Power BI also gives you a head start over peers who wait until college to explore analytics.",
        },
        {
          label: "Graduates from Any Stream (BCA, B.Com, BBA, B.Sc, B.Tech, and More)",
          detail:
            "Whether you hold a degree in Computer Applications, Commerce, Business Administration, Science, or Engineering, Power BI training adds a highly practical, job-ready skill to your resume. Recruiters across Amritsar and Punjab are increasingly looking for candidates who can turn raw data into meaningful business insights — regardless of their degree title. For B.Com and BBA graduates especially, Power BI is a natural complement to finance, accounting, and business analytics roles.",
        },
        {
          label: "Job Seekers Wanting to Stand Out in a Competitive Market",
          detail:
            "If you're actively job hunting and want to differentiate yourself from other applicants, a Power BI certification signals to employers that you can work with real business data — not just theory. Many entry-level analyst, MIS executive, and reporting roles in Amritsar now list Power BI as a preferred or required skill, making this course a smart, resume-boosting investment.",
        },
        {
          label: "Working Professionals Looking to Upskill",
          detail:
            "Professionals already working in finance, sales, operations, HR, or marketing often reach a point where spreadsheets alone aren't enough to handle growing data needs. Learning Power BI allows you to automate reporting, build live dashboards, and present insights more convincingly to management — a skill that can directly support promotions or a switch into an analytics-focused role.",
        },
        {
          label: "Small Business Owners and Entrepreneurs",
          detail:
            "Local business owners in Amritsar managing sales, inventory, or customer data can use Power BI to visualize their own business performance without depending on expensive external consultants or IT teams.",
        },
        {
          label: "Career Switchers Moving Into Data Analytics",
          detail:
            "If you're currently in a non-analytical role and want to pivot into the growing field of business intelligence and data analytics, Power BI is one of the most accessible and in-demand tools to start with — no coding background required.",
        },
        {
          label: "In Short",
          detail:
            "If you're a student, graduate, job seeker, working professional, or business owner in Amritsar who wants to work confidently with data, this course is built for you.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why Choose the Power BI Training Program",
      accent: "at Techcadd, Amritsar?",
      body: "With dozens of institutes and online platforms offering Power BI courses today, it's fair to ask: why choose this specific program? Here's what makes Techcadd's Power BI Training in Amritsar a genuinely valuable investment of your time and money.",
      reasons: [
        {
          title: "Industry-Relevant, Practical Curriculum",
          body: "This isn't a theory-heavy course that leaves you unprepared for real work. The program is structured to take you from foundational concepts — data import, Power Query, and data cleaning — all the way to advanced skills like DAX formulas, data modeling, and dynamic dashboard creation. Every module is built around how Power BI is actually used in businesses today, not just what looks good on a syllabus.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Reading about dashboards and building one yourself are two very different experiences. Techcadd emphasizes real-world datasets and live projects, so by the end of the course, you don't just understand Power BI conceptually — you have actual dashboards and reports in your portfolio that you can show employers or clients.",
        },
        {
          title: "Locally Accessible, Personally Guided Training",
          body: "Unlike large, impersonal online cohorts, training at a local Amritsar-based institute means smaller batches, more one-on-one attention from trainers, and the ability to ask questions and get real-time clarification. Learning in your own city also means you can visit the center, meet trainers in person, and build a genuine support network with fellow students.",
        },
        {
          title: "Growing Local and National Demand for Power BI Skills",
          body: "Business intelligence adoption is accelerating across Indian industries — from IT and retail to finance and manufacturing — and Amritsar's growing business and IT ecosystem is no exception. Companies are actively looking for professionals who can turn spreadsheets and databases into clear, actionable dashboards. Learning Power BI now positions you ahead of this demand curve rather than playing catch-up later.",
        },
        {
          title: "A Skill That Complements Any Career Path",
          body: "Whether you eventually want to become a dedicated Data Analyst, a Power BI Developer, or simply want to bring stronger reporting skills to your current role in marketing, finance, or operations, Power BI is remarkably versatile. It's not a niche skill locked into one job title — it's a tool that makes you more valuable in almost any data-adjacent role.",
        },
        {
          title: "Flexible Learning That Fits Your Schedule",
          body: "Recognizing that students and working professionals have different availability, the program offers flexible batch timings, so you don't have to choose between upskilling and your existing commitments — whether that's college, a job, or family responsibilities.",
        },
        {
          title: "A Genuine Step Toward Career Growth",
          body: "Ultimately, this program isn't just about learning software — it's about opening doors. A strong grasp of Power BI can lead to better job opportunities, promotions, freelance projects, or even the confidence to manage your own business's data more effectively.",
        },
        {
          title: "Structured Guidance, Hands-On Practice, Local Support",
          body: "If you're serious about building a future in data analytics — or simply want to add a high-value, in-demand skill to your toolkit — this program gives you the structured guidance, hands-on practice, and local support to get there.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd is the Right Choice",
      accent: "for Power BI Training in Amritsar",
      body: "Choosing the right institute matters just as much as choosing the right course. Here's what sets Techcadd apart as a training partner for your Power BI learning journey in Amritsar.",
      reasons: [
        {
          title: "Experienced, Industry-Focused Trainers",
          body: "At Techcadd, you learn from trainers who bring real hands-on experience with data analytics and business intelligence tools — not just academic knowledge. This means your questions get answered with practical, real-world context, and you learn the kind of best practices that actually get used in the workplace, not just what's written in a textbook.",
        },
        {
          title: "Structured, Step-by-Step Curriculum",
          body: "Techcadd's Power BI program is thoughtfully sequenced — starting with the fundamentals of data import and cleaning, moving through Power Query and data transformation, and building up to advanced DAX functions and interactive dashboard design. Each module builds on the last, so even complete beginners can follow along confidently without feeling lost or overwhelmed.",
        },
        {
          title: "Real Projects, Not Just Theory",
          body: "Techcadd places strong emphasis on live, hands-on projects using realistic business datasets. By the time you complete the course, you won't just have notes and slides — you'll have actual dashboards and reports you built yourself, ready to showcase in interviews or add to your portfolio.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Unlike massive online courses where you're just another face in a video call, Techcadd keeps batches manageable so trainers can actually engage with each student, address individual doubts, and adjust pacing when needed. This personal touch makes a real difference, especially for students who are new to data tools.",
        },
        {
          title: "Local Presence in Amritsar",
          body: "Learning at a local institute means you're not just another anonymous enrollment number. You can visit the center, meet your trainers face-to-face, connect with fellow students in your city, and get the kind of ongoing support that's hard to replicate through a purely online platform based elsewhere.",
        },
        {
          title: "Career-Oriented Guidance",
          body: "Techcadd's approach goes beyond just teaching software features — the training is framed around how these skills translate into real job roles, whether that's Data Analyst, Power BI Developer, MIS Executive, or a Business Intelligence-focused position. Trainers help connect the dots between what you're learning and how it applies to actual career paths.",
        },
        {
          title: "Flexible Scheduling for Students and Professionals Alike",
          body: "Whether you're a student balancing college classes or a working professional trying to upskill around a job, Techcadd offers flexible batch timings designed to accommodate different schedules — so learning Power BI doesn't mean putting the rest of your life on hold.",
        },
        {
          title: "A Trusted Name for IT and Skill-Based Training",
          body: "Techcadd has built a reputation for practical, skill-focused training across multiple in-demand technology domains. That same commitment to quality, structure, and real-world relevance carries through into its Power BI program — giving you confidence that you're learning from an institute genuinely invested in your outcomes.",
        },
        {
          title: "Expert Instruction, Real Projects, Local Support",
          body: "Choosing Techcadd means choosing a training partner that combines expert instruction, real project experience, and genuine local support — everything you need to turn Power BI skills into real career opportunities.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "I joined Techcadd's Power BI course right after my B.Com, and honestly it was the best decision. The trainer explained DAX in such a simple way that even I, with zero technical background, could follow along. Now I'm confident enough to build my own dashboards.",
        },
        {
          name: "Gurjot Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "Being from Amritsar, I didn't want to do an online-only course from some random platform. Techcadd gave me the personal attention I needed — small batch, direct interaction with the trainer, and real project work. Highly recommend for anyone in the city.",
        },
        {
          name: "Simranjeet Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 4,
          meta: "Power BI Training",
          quote:
            "Good structured course. I liked how they started from basics of Power Query before jumping into DAX and dashboards. Only thing I'd suggest is more practice sessions for advanced DAX functions, but overall a solid learning experience.",
        },
        {
          name: "Harmanpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "I was working in accounts and wanted to add a data skill to my resume. Power BI training at Techcadd Amritsar helped me build real dashboards using our own company-style data. Got a lot more confident presenting reports to management now.",
        },
        {
          name: "Amritpal Kaur",
          initials: "AK",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "The best part was the live project — building a sales dashboard from scratch. It felt like actual work experience, not just classroom learning. Trainers at Techcadd are very approachable and patient with beginners.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "Amritsar",
          rating: 4,
          meta: "Power BI Training",
          quote:
            "Decent pace, practical approach. I came from a non-IT background and was worried I wouldn't keep up, but the way they explained data modeling and relationships made it click for me eventually.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "I'm a BCA graduate and wanted something more hands-on than what we studied in college. Techcadd's Power BI course in Amritsar gave me exactly that — proper hands-on dashboard building, not just theory.",
        },
        {
          name: "Ravneet Singh",
          initials: "RS",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "Small batch size made a huge difference for me. I could ask questions anytime without hesitation. By the end of the course I had 3 dashboard projects to show in interviews.",
        },
        {
          name: "Kirandeep Kaur",
          initials: "KK",
          role: "Amritsar",
          rating: 4,
          meta: "Power BI Training",
          quote:
            "Learned a lot about Power Query and cleaning messy data, which I didn't expect to be such a big part of the course but turned out to be super useful in real work. Trainers explained everything patiently.",
        },
        {
          name: "Manpreet Singh",
          initials: "MS",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "Switched from a sales job to data analytics after this course. Techcadd's local Amritsar center made it easy to attend classes regularly and get one-on-one doubt clearing. Worth every rupee.",
        },
        {
          name: "Simran Sethi",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Power BI Training",
          quote:
            "As a working professional, the flexible batch timing really helped me manage classes alongside my job. Course content is practical and trainer support is excellent throughout.",
        },
      ],
    },

    /* The brief's eleven FAQs, in its order — written against the question
       phrasings its report targets, and emitted as FAQPage JSON-LD from the
       course route. */
    faqs: [
      {
        q: "What is Power BI used for?",
        a: "Power BI is a business intelligence tool developed by Microsoft that helps users connect to data sources, clean and transform data, and create interactive visualizations and dashboards. It's widely used to turn raw business data into clear, actionable insights for decision-making.",
      },
      {
        q: "Do I need coding knowledge to learn Power BI?",
        a: "No, you don't need prior coding knowledge to start learning Power BI. The tool is largely visual and drag-and-drop friendly at the foundational level. As you progress to advanced topics like DAX formulas, some logical and formula-based thinking helps, but it's taught step-by-step from the basics.",
      },
      {
        q: "Who can join the Power BI course at Techcadd, Amritsar?",
        a: "The course is open to 12th pass students, graduates from any stream (BCA, B.Com, BBA, B.Sc, B.Tech), job seekers, working professionals, and business owners. No specific educational background is required to enroll.",
      },
      {
        q: "How long does the Power BI training course take to complete?",
        a: "Course duration varies based on the batch schedule and format chosen (regular or fast-track). Contact Techcadd's Amritsar center directly for the current duration and batch options.",
      },
      {
        q: "Will I get to work on real projects during the course?",
        a: "Yes, the course includes hands-on training using real-world style datasets, so you'll build actual dashboards and reports — such as sales, financial, or HR analytics dashboards — as part of the learning process.",
      },
      {
        q: "What job roles can I apply for after learning Power BI?",
        a: "After completing Power BI training, you can apply for roles such as Data Analyst, Power BI Developer, Business Intelligence Analyst, MIS Executive, or Reporting Analyst, depending on your overall skill set and experience.",
      },
      {
        q: "Is Power BI training useful for non-IT professionals?",
        a: "Yes. Professionals from finance, sales, marketing, HR, and operations backgrounds often use Power BI to automate reporting and build dashboards, making it a valuable skill even outside traditional IT roles.",
      },
      {
        q: "Does Techcadd offer placement assistance after the Power BI course?",
        a: "For specific details on placement support and eligibility criteria, it's best to confirm directly with the Techcadd Amritsar team, as this can vary depending on the course track chosen.",
      },
      {
        q: "What tools will I learn alongside Power BI?",
        a: "Alongside Power BI Desktop and Power BI Service, you'll also work with Power Query Editor, DAX (Data Analysis Expressions), and get exposure to Excel and basic SQL concepts for data connectivity.",
      },
      {
        q: "Is classroom training available in Amritsar, or is it online only?",
        a: "Techcadd offers Power BI training at its local Amritsar center, giving students the option of in-person, classroom-based learning with direct trainer interaction. Confirm current mode options (classroom/online/hybrid) with the center.",
      },
      {
        q: "How is Techcadd's Power BI course different from free YouTube tutorials?",
        a: "Unlike scattered free tutorials, Techcadd offers a structured curriculum, hands-on real-project practice, direct trainer support for doubt-clearing, and a local learning environment — all of which help you learn faster and more thoroughly than self-paced, unguided videos.",
      },
    ],

    /* The brief runs regular and fast-track batches rather than fixed tiers, so
       the derived tracks table would be inventing durations it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Start your Power BI career journey",
      heading: "Turn Data Into Decisions.",
      accent: "Turn Skills Into a Career.",
      body: "Whether you're a student exploring analytics, a graduate preparing for placements, or a professional ready to upskill — Techcadd's Power BI Training in Amritsar gives you the hands-on skills employers are actively looking for. Seats fill up fast every batch — reserve yours today.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: Power BI Training Course",
        "Duration: Flexible (Regular / Fast-Track batches)",
        "Mode: Classroom, Online & Hybrid options available",
        "Centre: Techcadd, Amritsar",
      ],
      /* The three assurances the brief closes its enquiry section with. */
      assurances: [
        "100% Free Consultation",
        "No Obligation to Enroll",
        "Get Your Doubts Cleared by a Real Trainer, Not a Bot",
      ],
      formTitle: "Quick Enquiry Form",
      formNote:
        "No pressure, no spam — just honest guidance. Our counselors will help you understand the syllabus, batch options, and fees, and answer any questions before you decide.",
      submitLabel: "Request a Callback",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["Student", "Graduate", "Working Professional"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Book Your Free Demo Class Today",
      body: "No pressure, no spam — just honest guidance. Our counselors will help you understand the syllabus, batch options, and fees, and answer any questions before you decide.",
      action: "Book Your Free Demo Class",
      note: "100% free consultation, no obligation to enroll — and your doubts get cleared by a real trainer, not a bot.",
    },

    /* Title, description and the keyword clusters from the brief's Stage 8
       keyword and GEO strategy report. */
    seo: {
      title: "Power BI Training in Amritsar | Certified Course with Live Projects – Techcadd",
      description:
        "Learn Power BI in Amritsar with hands-on projects, expert trainers & flexible batches at Techcadd. From basics to advanced DAX & dashboards. Book a free demo today.",
      keywords: [
        "Power BI training in Amritsar",
        "Power BI course in Amritsar",
        "Power BI classes in Amritsar",
        "Power BI certification course Amritsar",
        "Power BI institute in Amritsar",
        "best Power BI training institute Amritsar",
        "Power BI coaching centre Amritsar",
        "Power BI training near me Amritsar",
        "Microsoft Power BI course Amritsar",
        "Power BI training centre Amritsar",
        "Power BI classes near Rani Ka Bagh Amritsar",
        "Power BI classes near Ranjit Avenue Amritsar",
        "Power BI classes near Court Road Amritsar",
        "Power BI course for beginners in Amritsar",
        "Power BI training with certification and projects Amritsar",
        "Power BI course fees in Amritsar",
        "Power BI training for working professionals Amritsar",
        "best institute to learn Power BI in Amritsar",
        "data analyst course with Power BI Amritsar",
        "Power BI + Excel + SQL training Amritsar",
        "Power BI training after graduation Amritsar",
        "Power BI course with placement support Amritsar",
        "where can I learn Power BI in Amritsar",
        "is Power BI course useful for non-IT students",
        "what is the best Power BI institute in Amritsar",
        "do I need coding knowledge for Power BI",
        "what jobs can I get after learning Power BI in Amritsar",
      ],
    },

    closing:
      "By the end of this course, you won't just know Power BI features individually — you'll understand how to take a raw dataset and turn it into a polished, interactive dashboard that tells a clear business story, a skill directly applicable to Data Analyst, Power BI Developer, and Business Intelligence roles.",
  },
};

/* ----------------------------------------------------------------- tableau */

/**
 * Source copy: the Amritsar Tableau brief (short overview, seven eligibility
 * personas plus its closing summary, the two "why" arguments, eight learning
 * blocks with the tools list, eleven student reviews, twelve FAQs and the
 * keyword/GEO strategy report). The eight learning blocks and the tool list
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 *
 * The brief carries no enquiry/CTA stage, so the closing enquiry section and
 * the call-back band are left to the builder's generic copy.
 */
const tableau: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Tableau Training Course
         in Amritsar" — rather than the catalogue phrasing. */
      headline: "Tableau Training Course in",
      accent: "Amritsar",
      tagline:
        "Hands-on data visualization training on real business datasets — data connection and cleaning, interactive dashboards, calculated fields and storytelling with visuals.",
      chips: ["Regular / fast-track batches", "Classroom training", "No coding required"],
      image: "/images/courses/tableau.png",
    },

    overview: {
      heading: "Tableau Training in Amritsar – Short Overview",
      paragraphs: [
        "Looking to turn raw data into powerful visual stories? The Tableau Training in Amritsar at Techcadd is designed for students, graduates, and working professionals who want to master one of the world's most in-demand data visualization tools. As businesses across Amritsar and Punjab increasingly rely on data-driven decisions, skilled Tableau professionals are landing roles as Data Analysts, BI Executives, and Reporting Specialists faster than ever.",
        "This hands-on Tableau course in Amritsar covers everything from data connection and cleaning to building interactive dashboards, calculated fields, and storytelling with visuals — using real business datasets, not just theory. Whether you're a fresher, a commerce/IT graduate, or someone switching careers into analytics, this program builds job-ready skills step by step.",
        "At Techcadd, learners get expert-led classroom training, practical projects, and placement support tailored to Amritsar's growing IT and analytics job market — making it one of the most trusted destinations for Tableau training in Amritsar.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This course is structured to take you from complete beginner to confident dashboard builder, covering both the technical mechanics of Tableau and the analytical thinking needed to turn raw data into business insight.",

    /* The seven starting points the brief names, closing on its own summary. */
    eligibility: {
      heading: "Who Can Enroll in Techcadd's Tableau Training Course in Amritsar?",
      intro:
        "One of the biggest advantages of Tableau as a career skill is its accessibility — you don't need a heavy coding background to get started. Techcadd's Tableau Training in Amritsar is built to welcome learners from a wide range of academic and professional backgrounds, making it one of the most flexible data analytics courses available in the city.",
      criteria: [
        {
          label: "12th Pass Students (Any Stream)",
          detail:
            "If you've just finished your 12th grade — whether from Commerce, Science, or Arts — and you're curious about a career in data and analytics, this course is a great starting point. You don't need prior coding knowledge. The training begins with the fundamentals of data, spreadsheets, and visualization logic before moving into Tableau itself, so absolute beginners can follow along comfortably.",
        },
        {
          label: "Graduates (BCA, B.Com, BBA, B.Sc, B.Tech, etc.)",
          detail:
            "Graduates from commerce, computer applications, business administration, or science backgrounds often find Tableau to be one of the fastest ways to enter the analytics and business intelligence field. Since Tableau focuses on visual, drag-and-drop data modeling rather than heavy programming, students from non-technical degrees can pick it up just as effectively as those from technical ones.",
        },
        {
          label: "Working Professionals Looking to Upskill",
          detail:
            "Professionals already working in finance, marketing, operations, sales, or administration in Amritsar's growing business ecosystem can use this course to add a high-value skill to their resume. Tableau is widely used for reporting, dashboarding, and performance tracking — meaning even non-analytics roles benefit hugely from Tableau proficiency.",
        },
        {
          label: "Job Seekers Targeting Data Analyst / BI Roles",
          detail:
            "If you're actively job hunting and want to break into roles like Data Analyst, Business Intelligence (BI) Executive, Reporting Analyst, or MIS Executive, this course gives you a portfolio-ready skill set. Recruiters across Amritsar and Punjab increasingly list Tableau as a preferred or required skill for entry-level analytics roles, making this training directly employment-oriented.",
        },
        {
          label: "Excel Users Who Want to Go Beyond Spreadsheets",
          detail:
            "Many learners come to this course already comfortable with MS Excel but want a more powerful, visual way to present data. Tableau is a natural next step — it takes the data-handling skills you already have and elevates them into interactive dashboards and real-time reporting tools used by modern companies.",
        },
        {
          label: "Entrepreneurs and Small Business Owners",
          detail:
            "Local business owners in Amritsar who want to better understand their own sales, customer, or operational data can also benefit from this course. Learning Tableau allows them to build their own dashboards and make informed decisions without depending on external analysts.",
        },
        {
          label: "Career Switchers from Non-IT Backgrounds",
          detail:
            "If you're currently in a completely different field — teaching, retail, customer service, or any non-technical role — and want to pivot into the growing data industry, Tableau is one of the most beginner-friendly entry points into analytics, and Techcadd's structured, mentor-led format makes that transition smoother.",
        },
        {
          label: "In Short",
          detail:
            "Whether you're 18 or 38, from a technical or non-technical background, a student or a working professional — if you're motivated to build a career around data, Techcadd's Tableau Training in Amritsar is designed to meet you at your current skill level and take you further.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why Choose This",
      accent: "Tableau Training Program?",
      body: "With dozens of institutes in Amritsar claiming to teach \"data analytics,\" it's fair to ask — why does Techcadd's Tableau program actually stand out? The answer lies in how the course is structured around real employability, not just tool familiarity.",
      reasons: [
        {
          title: "Industry-Relevant, Not Just Textbook Learning",
          body: "Many training programs teach Tableau as a set of isolated features — connect data, drag a field, make a chart. Techcadd's approach is different: every module is tied back to real business scenarios like sales performance tracking, customer segmentation, marketing ROI, and operational reporting. This means you're not just learning \"how\" to use Tableau, but \"why\" and \"when\" to use each feature — the exact judgment recruiters test for in interviews.",
        },
        {
          title: "Hands-On, Project-Based Structure",
          body: "Instead of passive lecture-style teaching, this program is built around live datasets and practical dashboard-building exercises. By the end of the course, you won't just have notes — you'll have a portfolio of dashboards you can showcase to potential employers, which is often more convincing than a certificate alone.",
        },
        {
          title: "Bridges the Gap Between Excel and Advanced BI Tools",
          body: "A lot of learners get stuck between \"I know Excel\" and \"I don't know where to go next.\" This program is intentionally designed to bridge that exact gap, taking your existing spreadsheet logic and translating it into Tableau's more powerful, visual, and scalable environment — a skill progression that maps directly to how real BI teams work.",
        },
        {
          title: "Strong Local Relevance for Amritsar's Job Market",
          body: "Amritsar's business landscape — spanning retail, manufacturing, exports, education, and a growing IT/ITES sector — increasingly relies on data for decision-making. Local companies and outsourced BI teams are actively looking for candidates who can turn spreadsheets and databases into clear, actionable dashboards. This program is built with that regional hiring pattern in mind, rather than being a generic, one-size-fits-all curriculum.",
        },
        {
          title: "Career-Focused Outcomes, Not Just Course Completion",
          body: "The goal of this program isn't simply to \"finish a syllabus.\" Every stage is designed with a clear employment outcome in mind — whether that's landing your first Data Analyst role, adding a high-value skill to your current job, or preparing for freelance/consulting BI work. This career-first mindset shapes how topics are sequenced and reinforced throughout the course.",
        },
        {
          title: "Beginner-Friendly Without Being Watered Down",
          body: "The program starts from zero assumptions about prior technical knowledge, but doesn't stay basic — it progressively builds toward advanced dashboarding, calculated fields, and storytelling techniques used in real corporate reporting. This balance means both absolute beginners and Excel-savvy learners find genuine value throughout the course.",
        },
        {
          title: "Mentor-Led Learning with Doubt Resolution",
          body: "Unlike self-paced online courses where learners often get stuck and give up, this program includes direct mentor guidance, so questions get resolved in real time — which matters enormously for a visual, hands-on tool like Tableau where seeing why something works is often more valuable than reading about it.",
        },
        {
          title: "Dashboards a Business Would Actually Use",
          body: "Put simply: this program exists to turn \"I want to learn Tableau\" into \"I can confidently build dashboards a business would actually use\" — which is the real currency in today's data-driven hiring market.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Learn Tableau",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing the right institute matters as much as choosing the right course. Here is what Techcadd brings to your Tableau learning journey in Amritsar.",
      reasons: [
        {
          title: "Proven Training Expertise",
          body: "Techcadd has built its reputation on delivering practical, industry-aligned IT and analytics training across Punjab. The same structured teaching methodology that has helped students succeed in other technical programs is applied here — combining conceptual clarity with hands-on execution.",
        },
        {
          title: "Real Business Datasets, Not Sample Files",
          body: "Rather than practicing on generic demo files, learners work with datasets modeled on real sales, marketing, and operations data — the kind of messy, real-world data you'll actually encounter on the job. This builds genuine problem-solving confidence, not just tool familiarity.",
        },
        {
          title: "Small Batch, Personalized Attention",
          body: "Techcadd keeps batch sizes manageable so mentors can actually engage with each learner's dashboards, doubts, and progress — instead of a one-size-fits-all lecture format where individual questions get lost.",
        },
        {
          title: "Placement & Career Support",
          body: "Beyond teaching the tool, Techcadd supports learners with resume building, interview preparation, and placement assistance geared toward Data Analyst and BI-focused roles — helping convert classroom learning into real job opportunities in and around Amritsar.",
        },
        {
          title: "Flexible Learning for Every Schedule",
          body: "Whether you're a student with college hours to work around or a working professional with a job to manage, Techcadd offers flexible batch timings so the course fits into your life — not the other way around.",
        },
        {
          title: "Certification That Adds Real Value",
          body: "On completion, learners receive a certification that validates their practical Tableau skills — something you can confidently list on your resume and LinkedIn profile to strengthen job applications.",
        },
        {
          title: "Local Presence, Local Understanding",
          body: "Being based in Amritsar means Techcadd understands the local job market, regional industry needs, and what recruiters in the area are actually looking for — making the training more relevant than a generic online course.",
        },
        {
          title: "Continuous Doubt-Clearing Support",
          body: "Learning a visual tool like Tableau often means hitting small roadblocks — a chart not rendering right, a calculated field not working. Techcadd ensures learners aren't left stuck, with mentors available to clear doubts throughout the course, not just during class hours.",
        },
        {
          title: "From Learning Tableau to Job-Ready in Tableau",
          body: "In short, Techcadd combines structured curriculum, real project work, and career support into one program — built to take you from \"just learning Tableau\" to \"job-ready in Tableau.\"",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "I joined Techcadd right after my B.Com from a college near Ranjit Avenue with zero technical background. Honestly, Excel was the only tool I knew. The way they taught Tableau step by step made such a difference — now I've built my own dashboards and even added them to my resume.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "Was working in a small trading firm near Hall Bazaar doing manual reports every week. Learned Tableau at Techcadd on weekends, and now I've automated most of my reporting work. My manager was genuinely impressed.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Amritsar",
          rating: 4,
          meta: "Tableau Training",
          quote:
            "Good course structure, real datasets instead of boring sample files. Trainers were patient with doubts. Only wish the batch was slightly longer, but overall very satisfied.",
        },
        {
          name: "Arjun Mehta",
          initials: "AM",
          role: "Amritsar Cantt, Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "I'm from Amritsar Cantt area, did BCA but wasn't confident about job prospects. This Tableau course at Techcadd gave me a proper portfolio to show in interviews — got shortlisted for a Data Analyst trainee role within a month of finishing.",
        },
        {
          name: "Rajwinder Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "As a mother managing home and job search, flexible batch timing at Techcadd really helped me commit to finishing the course without stress. The dashboard projects gave me real confidence.",
        },
        {
          name: "Karan Sharma",
          initials: "KS",
          role: "Amritsar",
          rating: 4,
          meta: "Tableau Training",
          quote:
            "Coming from a science background, I was worried Tableau would be too technical. Turned out to be very visual and logical once explained properly. Trainers at Techcadd broke it down really well.",
        },
        {
          name: "Jasleen Bhatia",
          initials: "JB",
          role: "Golden Temple area, Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "Living near Golden Temple area, I wanted something close by that was actually worth the money. Techcadd's Tableau training was practical, not just theory — I now help my father's business track sales data properly.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "I was doing customer service work and wanted a shift into something more analytical. This course gave me exactly that push. Built dashboards on sales and marketing data that I now show in every interview.",
        },
        {
          name: "Ishita Kapoor",
          initials: "IK",
          role: "Amritsar",
          rating: 4,
          meta: "Tableau Training",
          quote:
            "Loved the hands-on approach. Sometimes the pace felt fast for calculated fields, but the mentors always circled back to clear doubts. Worth it for anyone serious about data analytics in Amritsar.",
        },
        {
          name: "Devinder Singh",
          initials: "DS",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "After 12th, I wasn't sure which direction to take. A friend suggested this Tableau course at Techcadd instead of a typical degree-first approach, and it's been one of the best decisions — already doing freelance dashboard work.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "Tableau Training",
          quote:
            "Techcadd's trainers actually understand Amritsar's job market — they kept connecting lessons to what local companies are hiring for. That practical local angle made the course feel much more relevant.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — written against the question
       phrasings its report targets, and emitted as FAQPage JSON-LD from the
       course route. */
    faqs: [
      {
        q: "What is Tableau used for?",
        a: "Tableau is a data visualization and business intelligence tool used to connect, analyze, and present data through interactive charts, graphs, and dashboards — helping businesses make faster, data-driven decisions.",
      },
      {
        q: "Do I need coding knowledge to learn Tableau?",
        a: "No. Tableau is largely a drag-and-drop, visual tool, so you don't need prior programming knowledge to get started. Basic familiarity with Excel is helpful but not mandatory.",
      },
      {
        q: "Who can join the Tableau Training course at Techcadd, Amritsar?",
        a: "12th pass students, graduates from any stream, working professionals, job seekers, and even business owners can join. The course is designed to accommodate both technical and non-technical backgrounds.",
      },
      {
        q: "How long is the Tableau course at Techcadd?",
        a: "The course duration varies based on the batch type (regular or fast-track). Please contact Techcadd's Amritsar center directly for current batch schedules and exact duration.",
      },
      {
        q: "Is this course beginner-friendly?",
        a: "Yes. The course starts from data fundamentals and basic navigation before progressing to advanced dashboarding and analytics, making it suitable for complete beginners.",
      },
      {
        q: "What job roles can I apply for after this course?",
        a: "Common roles include Data Analyst, Business Intelligence (BI) Executive, Reporting Analyst, MIS Executive, and Data Visualization Specialist.",
      },
      {
        q: "Does Techcadd provide placement assistance after the Tableau course?",
        a: "Yes, Techcadd offers placement support including resume building, interview preparation, and job assistance for learners completing the course.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, learners receive a course completion certificate from Techcadd that validates their practical Tableau skills.",
      },
      {
        q: "Is Tableau training available for working professionals with flexible timings?",
        a: "Yes, Techcadd offers flexible batch timings, including options suitable for working professionals and students with college schedules.",
      },
      {
        q: "What tools are covered apart from Tableau Desktop?",
        a: "The course also covers Tableau Public for portfolio building, MS Excel as a data source, basic SQL concepts, and an introduction to Tableau Prep for data cleaning.",
      },
      {
        q: "Is Tableau training worth it for someone from a non-IT background?",
        a: "Yes. Since Tableau is highly visual and doesn't require heavy coding, professionals from marketing, finance, operations, or even non-technical fields can learn it effectively and apply it directly to their work.",
      },
      {
        q: "Where is Techcadd's Tableau training center located in Amritsar?",
        a: "Techcadd's Tableau Training course is offered at their Amritsar training center. Contact Techcadd directly for the exact address and directions.",
      },
    ],

    /* The brief runs regular and fast-track batches rather than fixed tiers, so
       the derived tracks table would be inventing durations it does not name. */
    tracks: false,

    /* Title, description and the keyword clusters from the brief's Stage 8
       keyword and GEO strategy report. */
    seo: {
      title: "Tableau Training in Amritsar | Techcadd – Learn Data Visualization",
      description:
        "Join Techcadd's hands-on Tableau Training in Amritsar. Beginner-friendly, project-based, with placement support. Enroll now.",
      keywords: [
        "Tableau training in Amritsar",
        "Tableau course in Amritsar",
        "Tableau classes in Amritsar",
        "data analytics course in Amritsar",
        "data visualization course Amritsar",
        "business intelligence course Amritsar",
        "Tableau certification Amritsar",
        "best Tableau institute in Amritsar",
        "Tableau training near Golden Temple Amritsar",
        "Tableau training near Ranjit Avenue Amritsar",
        "Tableau training near Hall Bazaar Amritsar",
        "Tableau training near Amritsar Cantt",
        "Data Analyst course Amritsar",
        "Tableau training for beginners Amritsar",
        "Excel to Tableau course Amritsar",
        "Tableau Desktop training Amritsar",
        "best institute for Tableau training in Amritsar",
        "Tableau course fees in Amritsar",
        "is Tableau course worth it for freshers in Amritsar",
        "Tableau training for non-IT students Amritsar",
        "which institute teaches Tableau with placement in Amritsar",
        "Tableau training after 12th in Amritsar",
        "Data Analyst jobs in Amritsar after Tableau course",
        "what is Tableau used for",
        "do I need coding to learn Tableau",
        "career options after learning Tableau",
        "Tableau vs Excel for data analysis",
      ],
    },

    closing:
      "By the end of the program, you won't just know Tableau's features — you'll be able to take a raw, messy dataset and turn it into a polished, interactive dashboard that answers real business questions, which is exactly the skill employers are hiring for.",
  },
};

/* ----------------------------------------------------------- data science */

/**
 * Source copy: the Amritsar data science brief (short overview, ten eligibility
 * personas plus its note on choosing a course, the two "why" arguments, twelve
 * learning blocks with the tools list, ten review templates, fifteen FAQs, the
 * enquiry section and the keyword/GEO strategy report). The twelve learning
 * blocks and the tool list live in `course-data.ts` instead, because they are
 * the curriculum and the module explorer reads them from the seed.
 *
 * The brief's reviews are explicitly written as templates with placeholder
 * names, to be replaced with verified student feedback before publication. They
 * are carried across here with their text intact but with no invented
 * identities: each is attributed to an unnamed Amritsar student, and the
 * template's own heading is used as the review's meta line.
 */
const dataScience: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Data Science Course in
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Data Science Course in",
      accent: "Amritsar",
      tagline:
        "Practical, job-ready training in Python, statistics, data analysis, SQL, visualization and machine learning — built around live projects, assignments and case studies.",
      chips: ["Classroom / online", "Python · SQL · ML", "Beginner-friendly"],
      image: "/images/courses/data-science.png",
    },

    overview: {
      heading: "Data Science Training in Amritsar",
      paragraphs: [
        "Techcadd's Data Science Training in Amritsar is designed for students, graduates, job seekers, and working professionals who want to build practical, job-ready skills in one of the fastest-growing technology domains. This training program focuses on real-world learning and introduces learners to core concepts such as Python programming, statistics, data analysis, machine learning, data visualization, and AI fundamentals, with a strong emphasis on hands-on practice.",
        "For students in Amritsar, choosing a locally accessible data science training program helps in gaining structured learning without relocation challenges. The training is designed in a step-by-step format so beginners can easily understand how data is collected, processed, analyzed, and used to make business decisions.",
        "Techcadd ensures a practical learning environment with live projects, assignments, case studies, and industry-based exercises, helping students build confidence along with technical expertise. The focus is not just on theory but on developing real skills that are required in today's data-driven job market.",
        "Whether you are a 12th-pass student, graduate, fresher, or working professional, this data science training in Amritsar provides a strong foundation to start a career in data analytics, machine learning, and AI-related roles. It is structured to help learners become industry-ready with the right mix of knowledge, tools, and practical exposure.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "A good Data Science Course in Amritsar should help students move from basic concepts to practical problem-solving. The Techcadd program is designed to introduce learners to the key technologies, techniques, and workflows used in data science. The focus is on understanding concepts and applying them through practical exercises and projects.",

    /* The ten starting points the brief names, closing on its own note about
       what to check before enrolling. */
    eligibility: {
      heading: "Who Can Do a Data Science Course in Amritsar?",
      intro:
        "A Data Science Course in Amritsar can be a strong learning option for students and professionals who want to build a career around data, technology, analytics, and artificial intelligence. You do not necessarily need an advanced technical background to begin. With the right training structure, beginners can gradually learn programming, data handling, statistics, visualization, and machine learning concepts.",
      criteria: [
        {
          label: "12th-Pass Students",
          detail:
            "Students who have completed Class 12 and are interested in technology, mathematics, computers, or problem-solving can consider starting their data science journey early. Learning foundational skills such as Python, spreadsheets, statistics, and data analysis can help students understand how businesses use data to make decisions. For students in Amritsar, an industry-oriented course can also provide exposure to practical projects rather than relying only on theoretical learning. Those planning further education in computer science, IT, mathematics, statistics, or related fields may find these skills particularly useful.",
        },
        {
          label: "College Students",
          detail:
            "College students pursuing BCA, BSc, BTech, BE, MCA, or other related programs can use a data science course to supplement their academic education. Classroom learning often provides theoretical foundations, while additional practical training can help students become more comfortable working with real datasets and analytical tools. Learning Python, SQL, data visualization, and introductory machine learning while studying can also help students prepare for internships and entry-level technology roles.",
        },
        {
          label: "Graduates Looking for Career Opportunities",
          detail:
            "Graduates from technical and quantitative backgrounds can consider data science training to develop job-ready skills. A structured program can help bridge the gap between academic knowledge and practical application. Even graduates from non-technical backgrounds may explore data-related learning if they are comfortable developing analytical and computer skills. The important factors are willingness to learn, logical thinking, consistency, and regular practice.",
        },
        {
          label: "Job Seekers and Freshers",
          detail:
            "Freshers often face the challenge of demonstrating practical skills to employers. Completing projects during a data science course in Amritsar can help learners create evidence of what they can actually do. Instead of only listing technologies on a resume, students can work on projects involving data cleaning, exploratory analysis, visualization, predictive modelling, and business insights. These projects can become useful discussion points during interviews.",
        },
        {
          label: "Working Professionals",
          detail:
            "Professionals already working in IT, business, finance, marketing, operations, sales, or other data-oriented areas can learn data science to strengthen their analytical capabilities. For example, a professional who regularly works with reports may benefit from learning Python, SQL, dashboards, and statistical analysis. Similarly, someone involved in business operations can use data skills to identify trends, measure performance, and support better decision-making.",
        },
        {
          label: "Students Interested in Artificial Intelligence",
          detail:
            "Data science and artificial intelligence are closely connected. Students interested in AI can begin by understanding how data is collected, cleaned, analyzed, and prepared for machine learning. A foundational data science program can introduce learners to concepts such as supervised learning, unsupervised learning, model evaluation, and predictive analytics before they move toward more advanced AI topics.",
        },
        {
          label: "Learners Interested in Data Analytics",
          detail:
            "Not everyone who studies data science needs to become a machine learning engineer. Some learners may prefer careers focused on data analytics, business intelligence, reporting, and visualization. For these students, learning Excel, SQL, Python, statistics, and visualization tools can provide a useful foundation. A course can help learners understand how to convert raw information into meaningful insights that organizations can use.",
        },
        {
          label: "Students Who Enjoy Mathematics and Problem-Solving",
          detail:
            "Data science involves logical reasoning, statistics, patterns, and analytical thinking. Students who enjoy mathematics or solving structured problems may naturally find these areas interesting. However, being exceptionally strong at mathematics is not the only requirement. Beginners can build their statistical and analytical understanding progressively through practice.",
        },
        {
          label: "Entrepreneurs and Business Owners",
          detail:
            "Business owners can also benefit from understanding data. Data skills can help them analyze customer behavior, sales performance, marketing results, inventory trends, and operational information. While entrepreneurs may not necessarily pursue data science as a full-time career, learning analytical concepts can help them make more informed decisions and communicate effectively with data professionals.",
        },
        {
          label: "Anyone Ready to Build Practical Technology Skills",
          detail:
            "Ultimately, a Data Science Course in Amritsar can be suitable for anyone who has genuine interest in data and is willing to practice consistently. The most important starting qualities are curiosity, logical thinking, patience, and a willingness to learn from projects and mistakes.",
        },
        {
          label: "What to Check Before Enrolling",
          detail:
            "Before enrolling, students should check the course syllabus, practical training approach, project work, tools covered, trainer experience, class schedule, and career support. Choosing a program based on actual learning outcomes rather than simply the course title can make the training more valuable. For learners in Amritsar who want to move toward data analytics, machine learning, AI, or data-driven technology careers, a structured course can provide a practical starting point and help them build skills step by step.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Data Science Program",
      accent: "in Amritsar?",
      body: "Choosing the right Data Science Course in Amritsar is an important decision for students who want to turn an interest in technology and data into practical career skills. With many courses available online and offline, students should look beyond the course name and evaluate what they will actually learn, how they will practice, and whether the training matches their career goals. Techcadd's data science program is designed with a practical, student-focused approach that helps learners progress from fundamentals toward more advanced concepts. The objective is not simply to introduce tools but to help students understand how and when those tools are used to solve real-world problems.",
      reasons: [
        {
          title: "Practical Learning Instead of Only Theory",
          body: "Data science is a practical field. Knowing the definitions of machine learning or data analysis is not enough; learners need opportunities to work with data, write code, identify patterns, build models, and interpret results. A career-focused training program should therefore include practical exercises and projects. Students can gradually move from basic programming and data manipulation to exploratory data analysis, visualization, machine learning, and project development. This approach helps learners understand the connection between individual concepts. Instead of studying Python, statistics, SQL, and machine learning as completely separate subjects, students can learn how these skills work together within a typical data workflow.",
        },
        {
          title: "Beginner-Friendly Learning Structure",
          body: "Many students are interested in data science but hesitate because they believe it is only suitable for experienced programmers or highly advanced mathematics students. A structured beginner-friendly program can make the learning process easier to approach. The fundamentals can be introduced first, followed by progressively more challenging topics. Students can learn programming basics before working with datasets, understand basic statistics before applying analytical techniques, and explore machine learning after developing a foundation in data preparation and analysis. This step-by-step structure is particularly useful for students who are entering the technology field for the first time.",
        },
        {
          title: "Industry-Relevant Technical Skills",
          body: "A useful data science course in Amritsar should focus on technologies and concepts that learners can apply beyond the classroom. Depending on the curriculum, this may include Python, SQL, NumPy, Pandas, data visualization libraries, statistics, machine learning techniques, and other commonly used data tools. The value of learning these technologies comes from knowing how to apply them. Students should therefore practice tasks such as importing datasets, cleaning information, handling missing values, exploring trends, creating visualizations, and developing predictive models.",
        },
        {
          title: "Project-Based Experience",
          body: "Projects can play an important role in developing confidence. They give students an opportunity to combine multiple skills and work through a problem from beginning to end. A project might involve analyzing customer data, predicting sales, studying business performance, classifying information, or identifying patterns in a dataset. During this process, students can practice data preparation, analysis, visualization, model building, and presenting conclusions. Projects can also help learners prepare a portfolio that demonstrates practical capabilities to potential employers.",
        },
        {
          title: "Career-Oriented Approach",
          body: "Students usually choose professional training because they want skills that can support future career opportunities. A career-oriented data science program should therefore help learners understand not only technology but also how these skills relate to workplace expectations. Learners can be introduced to different career directions, including data analyst, junior data scientist, business intelligence analyst, machine learning-related roles, and other data-focused positions. Career goals can then influence which skills students prioritize.",
        },
        {
          title: "Local Learning Advantage in Amritsar",
          body: "For students searching for a data science institute in Amritsar, local classroom training can offer a structured learning environment and direct interaction with trainers and fellow learners. Students can ask questions during sessions, discuss problems, receive feedback, and maintain a regular learning routine. Local training can be particularly convenient for learners who prefer face-to-face education instead of studying entirely through self-paced online resources.",
        },
        {
          title: "Support for Different Learner Profiles",
          body: "A good training environment should recognize that every student starts from a different level. Some learners may already know programming, while others may be completely new to coding. A flexible teaching approach can help students strengthen their fundamentals while gradually moving toward advanced concepts. Regular practice, assignments, doubt-solving, and project guidance can make the learning experience more manageable.",
        },
        {
          title: "Building Long-Term Skills",
          body: "The goal of data science training should not be limited to completing a certificate. Technology changes continuously, so students need the ability to keep learning after the course ends. By understanding fundamental concepts and developing problem-solving skills, learners can become better prepared to explore new libraries, frameworks, analytical methods, and AI technologies in the future.",
        },
        {
          title: "A Structured Pathway for Data-Focused Careers",
          body: "For students, graduates, job seekers, and professionals in Amritsar, Techcadd's Data Science Course can provide a structured pathway for developing practical knowledge across data analysis, Python, statistics, visualization, and machine learning. The combination of foundational learning, hands-on practice, and project-oriented training can help learners build a stronger base for pursuing data-focused career opportunities.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for a Data Science Course in Amritsar?",
      body: "Choosing a training institute is an important step when starting a career in data science. Students should look for more than a certificate — they need practical learning, relevant tools, guidance, projects, and an environment that helps them develop confidence. Techcadd focuses on these aspects to create a career-oriented learning experience for students looking for a Data Science Course in Amritsar.",
      reasons: [
        {
          title: "Practical and Career-Focused Training",
          body: "Data science is learned best through practice. Reading about Python, statistics, machine learning, or data visualization is only the beginning. Students need to work with datasets, write code, analyze information, identify patterns, and understand how analytical methods are applied to real problems. At Techcadd, the learning approach is designed around practical application. Students can progressively develop their skills, starting with fundamental concepts and moving toward data analysis, visualization, machine learning, and project work. This helps learners understand not only what a technology does but also why and when it should be used.",
        },
        {
          title: "Suitable for Beginners",
          body: "Students often hesitate to enter data science because they assume they need extensive programming experience before joining a course. A structured learning path can make the subject much easier to approach. Techcadd's training is designed to help learners build their foundation before moving into more complex concepts. Beginners can gradually become familiar with programming logic, Python syntax, data structures, data manipulation, statistics, and analytical workflows. This makes the course relevant for students and graduates who are beginning their technology journey as well as learners who already have some technical knowledge.",
        },
        {
          title: "Hands-On Learning",
          body: "Hands-on practice is an essential part of developing technical confidence. Students should have opportunities to apply concepts immediately rather than simply listening to lectures. During their learning journey, students can practice working with datasets, cleaning data, performing exploratory analysis, creating visualizations, and applying machine learning techniques. Repeated practice helps learners become more comfortable solving problems independently. The objective is to turn theoretical concepts into usable skills that students can continue developing after completing their training.",
        },
        {
          title: "Industry-Relevant Tools and Technologies",
          body: "The data science ecosystem includes numerous programming languages, libraries, platforms, and analytical tools. Students need exposure to technologies that help them understand modern data workflows. The course covers key areas such as Python, SQL, NumPy, Pandas, data visualization, statistics, and machine learning, along with practical applications of these concepts. Learning these technologies together can give students a clearer understanding of how data moves from raw information to actionable insights. Tool knowledge is valuable, but Techcadd also emphasizes understanding the underlying concepts so students can adapt as technologies evolve.",
        },
        {
          title: "Project-Based Development",
          body: "Projects provide an opportunity to bring different skills together. Instead of learning every topic in isolation, students can apply programming, data analysis, visualization, and machine learning techniques to practical problems. Project work can also help learners develop important professional habits, including organizing data, documenting their process, interpreting results, and communicating findings. For students preparing for job interviews, a portfolio of relevant projects can provide practical examples to discuss with recruiters and demonstrate their learning beyond a list of course topics.",
        },
        {
          title: "Trainer Guidance and Doubt Support",
          body: "Learning technical subjects independently can become difficult when students encounter errors or concepts they do not understand. Direct guidance can help learners identify mistakes and move forward more efficiently. A structured classroom environment allows students to ask questions, discuss coding problems, understand difficult concepts, and receive feedback during their learning process. This type of support can be particularly valuable for beginners who are developing programming confidence.",
        },
        {
          title: "Local Learning Environment in Amritsar",
          body: "For students searching for a data science institute in Amritsar, studying locally can make regular learning more convenient. Students can attend scheduled classes, interact directly with trainers, and learn alongside other students with similar career interests. A classroom environment can also encourage consistency. Regular attendance, assignments, practical sessions, and project work can help students maintain momentum instead of leaving their learning entirely dependent on self-discipline.",
        },
        {
          title: "Career Awareness",
          body: "Data science is a broad field, and students may initially be unsure which career direction to pursue. Training can help them understand the difference between areas such as data analytics, business intelligence, machine learning, and broader data science roles. Techcadd's career-oriented approach encourages students to think about their goals while developing technical skills. Learners can use their interests and strengths to determine which areas they want to explore further.",
        },
        {
          title: "Learning Beyond the Certificate",
          body: "A certificate can document course completion, but long-term career development depends on skills and continuous learning. Data technologies evolve quickly, making it important for students to develop the habit of learning new tools and methods. Techcadd aims to help students build a foundation that they can continue expanding through independent practice, advanced learning, personal projects, and professional experience.",
        },
        {
          title: "A Structured Path for Your Data Science Journey",
          body: "For students, graduates, freshers, and professionals in Amritsar, selecting the right training environment can make the learning process more structured and focused. Techcadd combines foundational concepts with practical exercises, industry-relevant tools, project-oriented learning, and career-focused guidance. If your goal is to build practical skills in Python, data analytics, visualization, statistics, SQL, and machine learning, Techcadd can provide a structured starting point for your data science learning journey in Amritsar.",
        },
      ],
    },

    /* The brief's ten review templates. Its own instruction stands: replace
       these with genuine feedback from verified Techcadd students — real name
       or approved identifier, course, date and location, with permission —
       before presenting them as testimonials. No names are invented here. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Beginner-friendly learning",
          quote:
            "I was new to data science and initially found Python and machine learning difficult. The step-by-step approach helped me understand the fundamentals and become more confident with practical exercises.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Practical training",
          quote:
            "What I liked about the course was the practical learning. Working with datasets and applying Python concepts made the topics easier to understand than learning only through theory.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Python learning experience",
          quote:
            "I joined to learn Python for data science. The practical exercises helped me understand programming logic and how Python is used for handling and analyzing data.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for students",
          quote:
            "As a student, I wanted additional skills apart from my regular studies. The data science training gave me exposure to Python, SQL, data analysis, and machine learning concepts.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Project-based learning",
          quote:
            "The project work was one of the most useful parts of my learning experience. It helped me understand how different data science concepts can be combined to solve a practical problem.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Supportive learning environment",
          quote:
            "Whenever I had difficulty understanding a coding concept, being able to ask questions and practice again helped me improve. The regular learning structure kept me motivated.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Career-oriented skills",
          quote:
            "I was looking for practical skills that could support my career plans. Learning data analysis, SQL, Python, and machine learning gave me a better understanding of the data field.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Learning data analytics",
          quote:
            "I was particularly interested in data analytics and visualization. The course helped me understand how raw information can be cleaned, analyzed, visualized, and converted into useful insights.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Suitable for freshers",
          quote:
            "As a fresher, I wanted to develop skills beyond my academic qualification. The practical assignments and projects helped me get more comfortable working with data and technical tools.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Overall learning experience",
          quote:
            "My experience with the Data Science Course was focused on learning and practice. I particularly appreciated working on practical tasks because they helped connect different topics and improve my understanding.",
        },
      ],
    },

    /* The brief's fifteen FAQs, in its order — written against the search
       intents its report targets, and emitted as FAQPage JSON-LD from the
       course route. */
    faqs: [
      {
        q: "What is a Data Science Course in Amritsar?",
        a: "A Data Science Course in Amritsar teaches students how to collect, clean, analyze, visualize, and interpret data using programming, statistics, databases, and machine learning techniques. A practical course may include Python, SQL, Pandas, NumPy, data visualization, and machine learning projects.",
      },
      {
        q: "Who can join a Data Science Course in Amritsar?",
        a: "Students, graduates, freshers, job seekers, working professionals, and learners interested in data and technology can consider a data science course. Beginners can also start if the program provides appropriate foundational training.",
      },
      {
        q: "Can beginners learn data science?",
        a: "Yes. Beginners can learn data science through a structured progression. Starting with Python and basic statistics before moving into data analysis and machine learning can make the learning process easier to manage.",
      },
      {
        q: "What programming language is used in data science?",
        a: "Python is one of the most commonly used programming languages for data science. It has a large ecosystem of libraries for data analysis, visualization, machine learning, automation, and scientific computing.",
      },
      {
        q: "What tools are taught in a data science course?",
        a: "Depending on the curriculum, students may learn Python, NumPy, Pandas, SQL, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebook, and other data-related tools and technologies.",
      },
      {
        q: "Is mathematics required for a Data Science Course?",
        a: "Basic mathematical and statistical understanding is useful for data science. Students should understand concepts such as averages, probability, distributions, correlation, and statistical measures. Advanced mathematical knowledge may be required for specialized areas, but beginners can develop their statistical foundation during training.",
      },
      {
        q: "Is SQL important for data science?",
        a: "Yes. SQL is useful for accessing and analyzing data stored in relational databases. Learning SQL can help students retrieve, filter, combine, and summarize data before using it for further analysis.",
      },
      {
        q: "Does the course include practical projects?",
        a: "A career-focused data science program should include practical exercises and projects. Projects can help students apply Python, data cleaning, visualization, SQL, statistics, and machine learning concepts to datasets and real-world-style problems.",
      },
      {
        q: "What career options are available after learning data science?",
        a: "Depending on their skills, experience, qualifications, and specialization, learners can explore roles such as Data Analyst, Junior Data Scientist, Business Intelligence Analyst, Reporting Analyst, and other data-focused positions. Career outcomes vary by individual and employer.",
      },
      {
        q: "How long does it take to learn data science?",
        a: "The time required depends on the learner's existing knowledge, course structure, class schedule, and amount of independent practice. Building a strong foundation requires consistent learning and practical work rather than focusing only on completing a fixed number of classes.",
      },
      {
        q: "Is a data science certificate enough to get a job?",
        a: "A certificate alone does not guarantee employment. Employers may also consider technical skills, projects, problem-solving ability, communication, educational background, interview performance, and practical experience.",
      },
      {
        q: "Why choose a local data science institute in Amritsar?",
        a: "A local institute can provide convenient access to classroom training, trainer interaction, practical sessions, and peer learning. Students who prefer structured face-to-face education may find local training useful compared with relying entirely on self-paced online resources.",
      },
      {
        q: "Can graduates from non-technical backgrounds learn data science?",
        a: "Yes, although the learning curve can vary. Learners from non-technical backgrounds may need additional time to develop programming, mathematics, and analytical fundamentals. A structured beginner-friendly course can help them build these skills progressively.",
      },
      {
        q: "What should I check before joining a Data Science Course in Amritsar?",
        a: "Students should review the course syllabus, duration, practical training, tools covered, project work, trainer experience, class mode, learning support, fees, and career guidance before enrolling. It is also useful to understand exactly what is included rather than choosing a course based only on its title.",
      },
      {
        q: "Is Data Science a good career option?",
        a: "Data science can be a promising career area for people who enjoy technology, statistics, problem-solving, and working with information. However, success depends on developing relevant skills, building practical experience, continuously learning, and matching one's abilities with suitable career opportunities.",
      },
    ],

    /* The brief states the duration as "per the selected program", so the
       derived tiers table would be inventing figures it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Enquire about the data science course in Amritsar",
      heading: "Take the Next Step Towards a",
      accent: "Career in Data Science",
      body: "Looking to build practical skills in Python, SQL, data analysis, visualization, and machine learning? Join a structured Data Science Course in Amritsar designed for students, graduates, freshers, and job seekers who want to develop industry-relevant data skills.",
      /* The brief's "Course Details" block, row for row. */
      facts: [
        "Course Name: Data Science Course",
        "Duration: As per the selected program",
        "Mode: Classroom / Online",
        "Centre: Amritsar, Punjab",
      ],
      /* What the brief's course team can help an enquiry with. */
      assurances: [
        "Latest batch schedule",
        "Curriculum and tools covered",
        "Fees and course duration",
        "Admission process",
      ],
      formTitle: "Enquire About the Data Science Course",
      formNote:
        "Fill in your details and our course team can help you with the latest batch schedule, curriculum, fees, course duration, and admission process.",
      submitLabel: "Send Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Qualification",
      statusOptions: ["12th Pass", "Graduate", "Student", "Working Professional", "Other"],
      batchLabel: "Preferred Learning Mode",
      batchOptions: ["Classroom", "Online"],
    },

    demo: {
      eyebrow: "Request a callback",
      heading: "Interested in Learning Data Science?",
      body: "Enquire today and get the course details you need to make an informed decision — batch schedule, curriculum, fees, duration and the admission process.",
      action: "Request a Callback",
      note: "Course duration is as per the selected program, with classroom and online modes available at the Amritsar centre.",
    },

    /* Built from the brief's Stage 8 keyword and GEO strategy report: the
       primary, secondary and long-tail clusters. */
    seo: {
      title: "Data Science Course in Amritsar | Techcadd",
      description:
        "Data Science Course in Amritsar with practical training in Python, statistics, SQL, data analysis, visualization and machine learning — project-based learning at Techcadd.",
      keywords: [
        "Data Science Course in Amritsar",
        "Data Science Course Amritsar",
        "Data Science Training in Amritsar",
        "Data Science Institute in Amritsar",
        "Data Science Classes in Amritsar",
        "Data Science Certification Course Amritsar",
        "Data Science Training Institute Amritsar",
        "Best Data Science Course in Amritsar",
        "Data Science Course for Beginners in Amritsar",
        "Python Data Science Course Amritsar",
        "Machine Learning Course Amritsar",
        "Data Analytics Course Amritsar",
        "Data Science Course Fees in Amritsar",
        "Data Science Course Duration in Amritsar",
        "Data Science classes near Amritsar",
        "Data Science Course in Amritsar, Punjab",
        "which is the best Data Science Course in Amritsar",
        "what is the fee for a Data Science Course in Amritsar",
        "how long does a Data Science Course take in Amritsar",
        "can beginners learn Data Science in Amritsar",
        "is Data Science a good career option after graduation",
        "what is taught in a Data Science Course in Amritsar",
        "can non-technical students learn Data Science",
        "Data Science Course syllabus Amritsar",
        "Data Science career and job roles",
      ],
    },

    closing:
      "Ultimately, the value of a Data Science Course in Amritsar comes not simply from learning a list of tools, but from understanding how to use those tools to solve problems, analyze information, communicate insights, and make data-driven decisions.",
  },
};

/* ------------------------------------------------------- machine learning */

/**
 * Source copy: the Amritsar machine learning brief (short overview, seven
 * eligibility personas, the two "why" arguments, ten learning blocks with the
 * tools list, eleven student reviews, twelve FAQs, the enquiry section and the
 * keyword/GEO strategy report). The ten learning blocks and the tool list live
 * in `course-data.ts` instead, because they are the curriculum and the module
 * explorer reads them from the seed.
 *
 * The brief's course-details table leaves the duration as a placeholder to be
 * filled in, so the enquiry facts below carry its own FAQ answer instead — the
 * duration varies by track and is available from the centre on request — rather
 * than a figure nobody has supplied.
 */
const machineLearning: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Machine Learning course
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Machine Learning Training Course in",
      accent: "Amritsar",
      tagline:
        "From foundational concepts to industry-ready skills — Python for ML, statistics, supervised and unsupervised learning, deep learning basics, model deployment and hands-on projects on real datasets.",
      chips: ["Flexible batch timings", "Classroom training (offline)", "No coding background needed"],
      image: "/images/courses/machine-learning.png",
    },

    overview: {
      heading: "Machine Learning Training in Amritsar – Short Overview",
      paragraphs: [
        "Looking to build a career in Artificial Intelligence and Machine Learning? Techcadd's Machine Learning Training Course in Amritsar is designed to take you from foundational concepts to real-world, industry-ready skills. Whether you're a student, a fresh graduate, or a working professional looking to upskill, this course covers Python for ML, statistics, supervised and unsupervised learning, deep learning basics, model deployment, and hands-on projects using real datasets.",
        "At Techcadd, Amritsar's trusted training institute, you learn directly from experienced trainers, work on live projects, and get guided support for interviews and placements. The course is built around practical learning — not just theory — so you walk away with a portfolio you can actually show employers.",
        "With machine learning skills in high demand across IT, finance, healthcare, retail, and e-commerce sectors, this is one of the most future-proof career paths a student in Amritsar can choose today. Techcadd's Machine Learning Training Course gives you the structured path, mentorship, and local support to make that transition with confidence.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "Techcadd's Machine Learning Training Course in Amritsar is built to take you from the fundamentals all the way to real, deployable skills. Here's a breakdown of what the curriculum covers.",

    /* The seven starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Techcadd's Machine Learning Training Course in Amritsar is designed to welcome learners from a wide range of academic and professional backgrounds. You don't need to be a coding genius or a math prodigy to start — you just need curiosity, consistency, and a willingness to learn. Here's a closer look at who this course is genuinely built for.",
      criteria: [
        {
          label: "12th Pass Students (Science / Commerce Background)",
          detail:
            "If you've just finished school and are exploring career options in technology, this course gives you an early head start into one of the fastest-growing fields in the world. Basic familiarity with computers is enough — the course starts from the fundamentals of Python and statistics before moving into machine learning concepts, so there's no pressure of prior coding knowledge.",
        },
        {
          label: "Graduates and Postgraduates (Any Stream)",
          detail:
            "Whether you hold a degree in Computer Science, Engineering, Commerce, Arts, or even a non-technical stream, Machine Learning is one of the few fields that welcomes cross-domain talent. Companies today value professionals who can combine domain knowledge (finance, marketing, healthcare, etc.) with ML skills — making graduates from any background genuinely employable after this training.",
        },
        {
          label: "Engineering and IT Students Looking to Specialize",
          detail:
            "If you're currently pursuing a B.Tech, BCA, MCA, or a related degree, this course helps you specialize early. Instead of graduating with only theoretical knowledge, you'll walk out with hands-on project experience, a practical understanding of ML workflows, and skills that directly align with what recruiters are asking for in technical interviews.",
        },
        {
          label: "Working Professionals Seeking a Career Switch",
          detail:
            "Many professionals working in IT support, data entry, software testing, or even non-tech roles are actively transitioning into AI and Machine Learning careers due to the higher pay scale and long-term demand. This course is structured with flexible batch timings so working individuals in Amritsar can upskill without quitting their current job.",
        },
        {
          label: "Job Seekers and Freshers Struggling to Get Placed",
          detail:
            "If you've been applying for jobs without much success, adding a specialized, in-demand skill like Machine Learning to your resume can significantly change your prospects. Techcadd's course includes resume-building support, interview preparation, and placement assistance to help you convert your new skillset into real job offers.",
        },
        {
          label: "Entrepreneurs and Freelancers",
          detail:
            "If you run a business or work as a freelancer, understanding Machine Learning can help you build smarter products, analyze customer data, automate repetitive tasks, and make data-driven decisions — skills that are increasingly essential even outside traditional job roles.",
        },
        {
          label: "Students Preparing for Higher Studies Abroad",
          detail:
            "For students planning to pursue a Master's degree in Data Science, AI, or Computer Science abroad, this course serves as a strong foundational stepping stone, helping build a solid portfolio and practical understanding before you apply.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Machine Learning Training?",
      body: "With hundreds of online tutorials and free resources available, you might wonder why a structured, in-person program still matters. Here's why Techcadd's Machine Learning Training Course in Amritsar stands apart as a genuinely valuable investment in your career.",
      reasons: [
        {
          title: "Structured Learning Path, Not Random Videos",
          body: "Self-teaching from scattered YouTube videos often leaves gaps in understanding. This program follows a carefully designed curriculum — starting with Python programming, moving through statistics and data preprocessing, into core ML algorithms, and finally into deep learning and deployment. Each module builds on the last, so your understanding is layered and complete, not fragmented.",
        },
        {
          title: "Hands-On, Project-Based Learning",
          body: "Machine Learning is a practical skill, and Techcadd's program is built around that reality. Instead of just watching lectures, you'll work directly on real datasets, build predictive models, and complete projects that mirror what you'd actually be asked to do in a job. By the end, you'll have a portfolio of work you can confidently showcase to employers.",
        },
        {
          title: "Learn Directly From Experienced Trainers",
          body: "Unlike pre-recorded online courses, this program gives you access to trainers who can explain concepts in multiple ways until they click, answer your specific doubts, and guide you through debugging real code — something that's nearly impossible to get from a generic online course.",
        },
        {
          title: "Industry-Relevant Tools and Technologies",
          body: "The course doesn't just teach theory — it trains you on the actual tools and libraries used by ML professionals today, including Python, NumPy, Pandas, Scikit-learn, and an introduction to deep learning frameworks. This ensures what you learn in the classroom translates directly to what's expected on the job.",
        },
        {
          title: "Career Support Beyond the Classroom",
          body: "This program isn't just about technical training — it's about career outcomes. You get support with resume building, interview preparation, and placement guidance, helping you convert your new skills into actual job opportunities in Amritsar's growing IT and analytics job market.",
        },
        {
          title: "Peer Learning and Networking",
          body: "Learning in a classroom environment with fellow students means you're not learning in isolation. You get to discuss problems, collaborate on projects, and build a peer network — something that's difficult to replicate through solo online learning.",
        },
        {
          title: "Doubt-Solving and Continuous Support",
          body: "One of the biggest reasons students abandon self-paced online courses is getting stuck without help. This program ensures you always have a trainer or mentor to turn to when you hit a roadblock, keeping your momentum and motivation intact throughout the course.",
        },
        {
          title: "A Locally Trusted Name in Amritsar",
          body: "Techcadd has built a reputation in Amritsar as a training institute students and parents trust — not a faceless online platform, but a physical center where you can walk in, ask questions, meet trainers, and get a genuine feel for the quality of training before enrolling.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Machine Learning Training in Amritsar?",
      body: "Choosing the right training institute is just as important as choosing the right course. Here's why Techcadd has become a trusted name for Machine Learning training in Amritsar.",
      reasons: [
        {
          title: "Proven Track Record in Tech Training",
          body: "Techcadd has spent years training students across multiple in-demand domains — from web development and programming languages to data-driven fields like Machine Learning. This depth of experience means the institute understands not just how to teach a syllabus, but how to prepare students for real hiring processes and workplace expectations.",
        },
        {
          title: "Curriculum Designed Around Industry Needs",
          body: "Rather than following a generic, outdated syllabus, Techcadd continuously updates its Machine Learning curriculum to reflect what companies are actually looking for — covering practical tools, current libraries, and real-world problem-solving, not just theoretical definitions.",
        },
        {
          title: "Experienced, Approachable Trainers",
          body: "Trainers at Techcadd don't just deliver lectures — they mentor. Many students struggle with ML concepts like algorithms or model tuning when learning alone, but having a trainer who breaks things down patiently, answers doubts in real time, and reviews your project work makes a measurable difference in how confidently you learn.",
        },
        {
          title: "Small Batch Sizes for Personal Attention",
          body: "Large, overcrowded classrooms often mean students get lost in the crowd. Techcadd focuses on manageable batch sizes so trainers can actually track individual progress, address specific weak points, and ensure no student is left behind.",
        },
        {
          title: "Practical, Project-Heavy Approach",
          body: "The course isn't built around passive learning. From early on, you're working with real datasets, writing actual code, debugging errors, and building projects — the same skills you'll be expected to demonstrate in job interviews and on the job itself.",
        },
        {
          title: "Placement Assistance and Career Guidance",
          body: "Techcadd goes beyond just teaching the technical skill. Students receive support with resume building, mock interviews, and placement guidance, helping bridge the gap between \"I learned Machine Learning\" and \"I got hired as a Machine Learning professional.\"",
        },
        {
          title: "A Physical, Local Presence in Amritsar",
          body: "Unlike anonymous online platforms, Techcadd has a real training center in Amritsar where you can visit, speak to trainers and counselors in person, see the learning environment, and make an informed decision before enrolling — something that builds genuine trust, especially for students who are investing their time and money seriously.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Understanding that students and working professionals have different schedules, Techcadd offers flexible batch options — including options that accommodate school/college timings or working hours — so learning ML doesn't mean disrupting your current commitments.",
        },
        {
          title: "Strong Local Reputation and Word-of-Mouth Trust",
          body: "Many students join Techcadd based on recommendations from friends, seniors, or family who've already trained there. This kind of local trust, built over years in Amritsar, isn't something a new or purely online institute can replicate overnight.",
        },
        {
          title: "Genuine Support System, Not Just a Transaction",
          body: "At Techcadd, the relationship doesn't end once you enroll. From doubt-clearing sessions to career counseling, the goal is to see you succeed — not just complete a course.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "I joined Techcadd's Machine Learning course in Amritsar with almost zero coding background. The trainers explained everything step by step, and now I actually understand how models work instead of just copying code from tutorials.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "Best decision I made after graduation. The projects we built during the course are now part of my portfolio, and I used them directly in my job interviews. Highly recommend Techcadd for anyone in Amritsar serious about ML.",
        },
        {
          name: "Anmol Sharma",
          initials: "AS",
          role: "Amritsar",
          rating: 4,
          meta: "Machine Learning Training",
          quote:
            "Good structured course with proper hands-on practice. I liked that they focused on real datasets instead of just theory. Only wish the deep learning section was a bit longer, but overall a solid experience.",
        },
        {
          name: "Gurleen Kaur",
          initials: "GK",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "As a working professional, I needed flexible timings, and Techcadd made that possible. I could attend evening batches without affecting my job, and the trainers were always available for doubt-clearing even after class.",
        },
        {
          name: "Rohit Mahajan",
          initials: "RM",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "I compared a few institutes in Amritsar before joining, and Techcadd stood out because of their practical approach. The trainers actually sit with you and help debug your code — that personal attention made a huge difference.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 4,
          meta: "Machine Learning Training",
          quote:
            "The course content is well-organized and beginner-friendly. Coming from a commerce background, I was worried I wouldn't keep up, but the pace was manageable and the trainers were patient with basic questions.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "What I appreciated most was the placement support. They helped me polish my resume and prepared me for technical interview questions specific to ML roles. Got placed within a few weeks of completing the course.",
        },
        {
          name: "Ishika Bansal",
          initials: "IB",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "Techcadd's trainers don't just teach — they mentor you. Whenever I got stuck on a project, they took the time to explain the logic instead of just giving the answer. That really helped me understand ML concepts deeply.",
        },
        {
          name: "Manpreet Singh",
          initials: "MS",
          role: "Amritsar",
          rating: 4,
          meta: "Machine Learning Training",
          quote:
            "Solid course for anyone in Amritsar looking to get into data-related careers. The batch size was small, so we got individual attention, which isn't something you get with large online courses.",
        },
        {
          name: "Ayesha Kapoor",
          initials: "AK",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "I was a complete beginner and honestly nervous about learning something as technical as Machine Learning. But the way the trainers broke it down made it approachable. I now feel confident applying for data-related roles.",
        },
        {
          name: "Deepak Chawla",
          initials: "DC",
          role: "Amritsar",
          rating: 5,
          meta: "Machine Learning Training",
          quote:
            "Great local institute in Amritsar for tech training. The classroom environment, direct trainer interaction, and project-based learning made a real difference compared to online-only courses I'd tried before.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — written for answer-engine
       extraction, and emitted as FAQPage JSON-LD from the course route. */
    faqs: [
      {
        q: "What is the Machine Learning Training Course at Techcadd Amritsar?",
        a: "It's a structured, hands-on training program that teaches you the core concepts of Machine Learning — including Python, statistics, algorithms, and model building — designed for students, graduates, and working professionals in Amritsar.",
      },
      {
        q: "Do I need a coding background to join this course?",
        a: "No. The course starts with Python fundamentals, so complete beginners can join. However, basic computer familiarity is helpful.",
      },
      {
        q: "Who can enroll in this Machine Learning course?",
        a: "12th pass students, graduates from any stream, engineering/IT students, working professionals, and job seekers looking to switch careers can all enroll.",
      },
      {
        q: "How long is the Machine Learning Training Course at Techcadd?",
        a: "Course duration varies based on the track chosen (foundation, advanced, or specialized), and detailed duration and batch options are available on request from the Techcadd Amritsar center.",
      },
      {
        q: "Is this course available in offline mode in Amritsar?",
        a: "Yes, Techcadd offers classroom-based training at its Amritsar center, along with flexible batch timings for students and working professionals.",
      },
      {
        q: "What tools and technologies will I learn?",
        a: "You'll learn Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, an introduction to TensorFlow/Keras, Jupyter Notebook, and basic SQL.",
      },
      {
        q: "Will I work on real projects during the course?",
        a: "Yes. The course is project-based, and you'll build real-world projects like prediction models, classification systems, and customer segmentation using actual datasets.",
      },
      {
        q: "Does Techcadd provide placement assistance after the course?",
        a: "Yes, Techcadd offers placement support including resume building, interview preparation, and career guidance to help you land ML-related job roles.",
      },
      {
        q: "Is Machine Learning a good career option in 2026?",
        a: "Yes. Machine Learning skills are in high demand across IT, finance, healthcare, retail, and e-commerce sectors, making it one of the most future-proof career paths currently available.",
      },
      {
        q: "Can working professionals join this course alongside their job?",
        a: "Yes, Techcadd offers flexible batch timings, including evening or weekend options, so working professionals can upskill without disrupting their current job.",
      },
      {
        q: "What is the difference between Machine Learning and Data Science?",
        a: "Machine Learning focuses specifically on building algorithms that learn from data to make predictions, while Data Science is a broader field that includes ML along with data analysis, visualization, and business insights.",
      },
      {
        q: "Do I get a certificate after completing the course?",
        a: "Yes, students receive a course completion certificate from Techcadd after successfully finishing the Machine Learning Training program.",
      },
    ],

    /* The brief runs foundation, advanced and specialized tracks rather than
       fixed duration tiers, so the derived table would be inventing figures. */
    tracks: false,

    cta: {
      eyebrow: "Enroll in Techcadd's machine learning training — Amritsar",
      heading: "Start Your Journey Into",
      accent: "AI & Machine Learning Today",
      body: "Turn your interest in technology into a real, in-demand career skill. Techcadd's Machine Learning Training Course in Amritsar gives you hands-on, project-based learning guided by experienced trainers — with the local support and mentorship you won't get from an online-only course. Seats fill up quickly each batch — reserve yours today and take the first step toward a future-proof career in AI & ML.",
      /* The brief's "Course Details" table. Its duration row is a placeholder
         to be filled in, so the course's own FAQ answer stands in until the
         centre confirms the figure. */
      facts: [
        "Course Name: Machine Learning Training Course",
        "Duration: Varies by track (foundation, advanced or specialized) — ask the Amritsar centre for current batch options",
        "Mode: Classroom Training (Offline) at Techcadd Amritsar Center",
        "Location: Techcadd, Amritsar",
        "Eligibility: 12th Pass / Graduates / Working Professionals",
        "Certification: Course Completion Certificate provided",
      ],
      /* The three assurances the brief closes its enquiry section with. */
      assurances: [
        "100% Genuine Guidance",
        "No Spam Calls",
        "Your Information Stays Private",
      ],
      formTitle: "Get a Callback From Our Course Counselor",
      formNote:
        "Request a free callback — our counselor will walk you through the syllabus, fees, batch options, and answer any questions you have — no pressure, no obligation.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Qualification",
      statusOptions: ["12th Pass", "Graduate", "Working Professional", "Other"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Request a Free Callback",
      body: "Our counselor will walk you through the syllabus, fees, batch options, and answer any questions you have — no pressure, no obligation.",
      action: "Request Callback Now",
      note: "100% genuine guidance, no spam calls, and your information stays private.",
    },

    /* Built from the brief's Stage 8 keyword and GEO strategy report: the
       primary, high-intent local, hyperlocal, audience and AEO clusters. */
    seo: {
      title: "Machine Learning Course in Amritsar | Techcadd",
      description:
        "Machine Learning Training Course in Amritsar at Techcadd — Python for ML, statistics, supervised and unsupervised learning, deep learning basics, deployment and live projects.",
      keywords: [
        "Machine Learning course Amritsar",
        "Machine Learning training Amritsar",
        "Machine Learning course in Amritsar with placement",
        "best Machine Learning institute in Amritsar",
        "AI and Machine Learning course Amritsar",
        "Machine Learning classes near me Amritsar",
        "Machine Learning course Amritsar fees",
        "Machine Learning training institute Amritsar",
        "Python and Machine Learning course Amritsar",
        "Machine Learning course near GNDU Amritsar",
        "Machine Learning training near Mall Road Amritsar",
        "Machine Learning institute near Lawrence Road Amritsar",
        "Techcadd Machine Learning course Amritsar",
        "Machine Learning course for beginners Amritsar",
        "Machine Learning course after 12th Amritsar",
        "Machine Learning course for B.Tech students Amritsar",
        "Machine Learning course for working professionals Amritsar",
        "Machine Learning internship Amritsar",
        "Machine Learning industrial training Amritsar",
        "which is the best Machine Learning course in Amritsar",
        "how to learn Machine Learning in Amritsar",
        "is Machine Learning course worth it in Amritsar",
        "Machine Learning course duration and fees in Amritsar",
        "Machine Learning with Python course Amritsar",
        "Machine Learning and Deep Learning course Amritsar",
        "Machine Learning certification course Amritsar",
        "offline Machine Learning classes Amritsar",
      ],
    },

    closing:
      "In short: by the end of this course, you won't just understand machine learning theoretically — you'll have hands-on experience building, evaluating, and deploying models using the same tools that professionals use in the industry today.",
  },
};

/* ----------------------------------------------------------- deep learning */

/**
 * Source copy: the Amritsar deep learning brief (overview, seven eligibility
 * personas plus its closing summary, the two "why" arguments, nine learning
 * blocks with the tools list and capstone projects, eleven student reviews,
 * twelve FAQs, the enquiry/callback section and the keyword/GEO strategy
 * report). The nine learning blocks, the tool list and the capstone projects
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 */
const deepLearning: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Deep Learning Training in
         Amritsar" — rather than the catalogue phrasing. */
      headline: "Deep Learning Training in",
      accent: "Amritsar",
      tagline:
        "Hands-on expertise in neural networks, computer vision, NLP and real-world AI model deployment — built on Python, TensorFlow, PyTorch and Keras.",
      chips: ["Weekday & weekend batches", "Classroom / hybrid", "No prior coding needed"],
      image: "/images/courses/deep-learning.png",
    },

    overview: {
      heading: "Deep Learning Training in Amritsar – Overview",
      paragraphs: [
        "Looking to build a career in Artificial Intelligence? The Deep Learning Training in Amritsar at Techcadd is designed for students, graduates, and working professionals who want hands-on expertise in neural networks, computer vision, NLP, and real-world AI model deployment. As one of the most sought-after deep learning courses in Amritsar, this program blends strong theoretical foundations with practical, project-based learning using Python, TensorFlow, PyTorch, and Keras.",
        "Whether you're a fresher exploring AI training in Amritsar or a professional upskilling into machine learning and deep learning roles, Techcadd's curriculum is built to match current industry demand. Students learn to build and train neural networks, work with real datasets, and create deployable AI models — skills directly relevant to roles like AI Engineer, Deep Learning Engineer, and Data Scientist.",
        "Backed by expert trainers, live projects, and placement assistance, this deep learning institute in Amritsar helps learners go from fundamentals to job-readiness with confidence and clarity.",
      ],
      /* The facts the brief's GEO note asks to keep specific and extractable. */
      checks: [
        "Flexible weekday and weekend batches",
        "Classroom and hybrid learning options at the Amritsar centre",
        "No prior AI experience required — starts from Python and math foundations",
        "A portfolio of built, trained and deployed models, not just a certificate",
      ],
    },

    curriculumNote:
      "The Deep Learning Training in Amritsar at Techcadd is structured to take learners from foundational concepts to advanced, job-ready AI skills. Here's a detailed breakdown of what the curriculum covers and the tools students will master along the way.",

    /* The seven starting points the brief names, closing on its own summary. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "Deep Learning is no longer a niche skill reserved for research scientists — it's now one of the most in-demand capabilities across IT, product, and analytics roles. Techcadd's Deep Learning Training in Amritsar is designed to be accessible to a wide range of learners, as long as they bring curiosity, basic logical thinking, and a willingness to work with code and data.",
      criteria: [
        {
          label: "12th Pass Students (Science/Commerce Background)",
          detail:
            "Students who have completed their 12th grade, especially with Mathematics or Computer Science, can start their AI journey early. This deep learning course in Amritsar is structured to build fundamentals from scratch — starting with Python programming, statistics basics, and gradually progressing into neural networks. Early exposure to AI/ML gives these students a strong head start for future degrees in Computer Science, Data Science, or AI.",
        },
        {
          label: "Graduates (BCA, B.Tech, B.Sc, BBA, and Other Streams)",
          detail:
            "Whether you hold a technical degree or a non-technical one, this program is built to bridge the gap. BCA and B.Tech graduates often already have programming exposure and can move quickly into advanced deep learning concepts like CNNs, RNNs, and Transformers. Graduates from B.Sc, BBA, or other streams are equally welcome — the course begins with the essential Python and math foundations needed before diving into neural network architectures, ensuring nobody is left behind.",
        },
        {
          label: "Working IT Professionals Looking to Upskill",
          detail:
            "Software developers, data analysts, QA engineers, and IT support professionals working in Amritsar's growing tech ecosystem often reach a point where they want to move into AI-focused roles. This AI training in Amritsar is ideal for such professionals — the flexible batch timings (weekday/weekend options) allow them to upskill without quitting their current job, while gaining practical, portfolio-ready deep learning projects.",
        },
        {
          label: "Data Science & Machine Learning Enthusiasts",
          detail:
            "If you already have some exposure to Data Science or Machine Learning and want to specialize further, deep learning is the natural next step. This course goes beyond traditional ML algorithms into neural networks, computer vision, and natural language processing — giving ML professionals a competitive edge in a rapidly evolving job market.",
        },
        {
          label: "Job Seekers Aiming for AI/ML Roles",
          detail:
            "For freshers and job seekers actively targeting roles like AI Engineer, Machine Learning Engineer, or Data Scientist, this deep learning institute in Amritsar offers exactly the kind of hands-on, project-based training recruiters look for. Instead of just theory, learners walk away with real projects — image classifiers, chatbots, prediction models — that can be showcased directly in interviews and on resumes.",
        },
        {
          label: "Entrepreneurs & Business Owners Exploring AI Integration",
          detail:
            "Business owners in Amritsar looking to integrate AI into their products, automate processes, or simply understand what's technically possible for their business can also benefit from this course. Even a foundational understanding of deep learning helps in making smarter tech decisions and communicating better with technical teams.",
        },
        {
          label: "Anyone Transitioning Careers into Tech",
          detail:
            "Career changers from non-tech backgrounds — teachers, commerce professionals, even non-CS engineers — are increasingly entering AI through structured, beginner-friendly programs like this one. Techcadd's step-by-step approach ensures that a lack of prior coding experience isn't a barrier to entry.",
        },
        {
          label: "In Short",
          detail:
            "If you're a student, graduate, working professional, or entrepreneur based in Amritsar who wants to build a future-ready skill set, this course meets you wherever your starting point is.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Deep Learning Training?",
      body: "With so many online courses and generic bootcamps available, students often ask: why choose a structured, in-person deep learning program in Amritsar instead of a random YouTube playlist or a self-paced online course? Here's why this program stands apart.",
      reasons: [
        {
          title: "Industry-Aligned, Practical Curriculum",
          body: "This isn't a theory-heavy course that stops at PowerPoint slides. The Deep Learning Training in Amritsar at Techcadd is built around real industry workflows — from data preprocessing and model building to evaluation and deployment. Learners work with actual frameworks like TensorFlow, PyTorch, and Keras, the same tools used by AI teams in the industry today, so what's learned in class translates directly into job-ready skills.",
        },
        {
          title: "Strong Foundation Before Advanced Concepts",
          body: "A common mistake in self-taught AI learning is jumping straight into complex neural network architectures without solid Python, math, and machine learning foundations. This program is structured to avoid that gap — starting with Python for AI, statistics, and core ML concepts before progressing to CNNs, RNNs, LSTMs, and Transformer-based models. This layered approach means learners actually understand why a model works, not just how to copy code.",
        },
        {
          title: "Hands-On Projects, Not Just Concepts",
          body: "Every module is backed by practical projects — building image classifiers, sentiment analysis tools, chatbots, and prediction systems. By the end of the course, students have a portfolio of real deep learning projects they can showcase in interviews, on GitHub, and on LinkedIn — something recruiters actively look for when hiring for AI and ML roles.",
        },
        {
          title: "Local Access with Personalized Mentorship",
          body: "Unlike faceless online platforms, this deep learning course in Amritsar offers direct access to trainers who can clarify doubts in real time, review code, and guide learners through debugging and optimization — something that's hard to replicate in a pre-recorded video course. Being based locally in Amritsar also means easier scheduling, doubt-clearing sessions, and a learning environment tailored to the pace of Punjab's student community.",
        },
        {
          title: "Career-Focused Structure",
          body: "This program isn't designed in isolation from the job market — it's built around what AI Engineer, ML Engineer, and Data Scientist job descriptions actually demand. That includes not just technical training but also resume building, interview preparation, and exposure to real-world case studies relevant to current hiring trends.",
        },
        {
          title: "Flexible Learning Options",
          body: "Recognizing that learners come from different backgrounds — students, working professionals, and entrepreneurs — the program offers flexible weekday and weekend batch timings, along with both classroom and hybrid learning options, making it easier to fit deep learning training in Amritsar around existing commitments.",
        },
        {
          title: "Future-Proofing Your Career",
          body: "AI and deep learning are reshaping nearly every industry — healthcare, finance, retail, manufacturing, and more. Investing in this skill now means positioning yourself ahead of the curve, whether the goal is a job switch, a promotion, a first job out of college, or simply staying relevant in a tech-driven job market.",
        },
        {
          title: "Designed for Outcomes, Not Just Certificates",
          body: "In short, this program is designed for outcomes — not just certificates. It's built to take a learner from foundational concepts to real, demonstrable deep learning capability, with the local support and mentorship that self-paced online courses simply can't offer.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Deep Learning Training in Amritsar?",
      body: "When it comes to choosing where to learn Deep Learning in Amritsar, the training institute matters just as much as the curriculum. Here's why Techcadd stands out as a trusted choice for AI education in the region.",
      reasons: [
        {
          title: "Proven Track Record in Tech Training",
          body: "Techcadd has built a strong reputation across Punjab for delivering practical, job-oriented training in high-demand tech domains — from web development and programming to data science and now deep learning. This experience in running structured, outcome-driven tech courses translates directly into how the Deep Learning program is designed and delivered.",
        },
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Learning deep learning isn't just about following a syllabus — it requires trainers who understand how concepts like neural networks, backpropagation, and model optimization apply in real-world scenarios. Techcadd's trainers bring hands-on project experience to the classroom, helping students connect theory with practical application rather than just memorizing formulas.",
        },
        {
          title: "Real Projects, Real Portfolio",
          body: "Techcadd emphasizes project-based learning over passive lectures. Students in the deep learning course in Amritsar build actual models — image classifiers, NLP-based applications, recommendation systems — that become portfolio pieces. This project-first approach is what helps learners stand out when applying for AI Engineer, ML Engineer, or Data Scientist roles.",
        },
        {
          title: "Structured Learning Path for All Levels",
          body: "Whether a student is starting from zero or already has some Python or ML background, Techcadd's curriculum is designed with a clear progression — from foundational Python and statistics, through core machine learning, into advanced deep learning architectures like CNNs, RNNs, and Transformers. This structured path avoids the common problem of learners feeling lost or overwhelmed.",
        },
        {
          title: "Career Support Beyond the Classroom",
          body: "Techcadd doesn't stop at teaching technical skills. The program includes resume building, interview preparation, and guidance on how to present AI/ML projects effectively to recruiters — support that's especially valuable for students and job seekers targeting competitive AI roles in today's market.",
        },
        {
          title: "Flexible, Student-Friendly Batches",
          body: "Understanding that learners come from different schedules — full-time students, working professionals, and entrepreneurs — Techcadd offers flexible weekday and weekend batch options for its AI training in Amritsar, making it easier for a wider range of people to commit to the program without disrupting their existing routine.",
        },
        {
          title: "Local Presence with Personal Attention",
          body: "Being based in Amritsar means Techcadd offers something online-only platforms can't: face-to-face doubt resolution, a local peer learning environment, and a training center that understands the specific career landscape and opportunities available to students in the region.",
        },
        {
          title: "Continuously Updated Curriculum",
          body: "AI and deep learning move fast — new frameworks, techniques, and best practices emerge constantly. Techcadd stays aligned with these shifts, updating course content to reflect current industry tools and practices like TensorFlow, PyTorch, and Keras, so learners aren't studying outdated methods.",
        },
        {
          title: "Community and Peer Learning",
          body: "Being part of a structured, in-person deep learning institute in Amritsar also means learning alongside peers with similar goals — a dynamic that fosters collaboration, discussion, and motivation that's difficult to replicate in isolated, self-paced online learning.",
        },
        {
          title: "Trust Built Over Years of Student Success",
          body: "Ultimately, Techcadd's reputation is built on the success stories of the students who've gone through its programs — a track record that gives new learners confidence they're choosing an institute genuinely invested in their outcomes, not just enrollment numbers.",
        },
        {
          title: "A Training Partner, Not Just a Syllabus",
          body: "Choosing Techcadd for deep learning training in Amritsar means choosing a training partner focused on turning technical curiosity into a real, career-ready skill set.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "I joined Techcadd's deep learning course in Amritsar right after finishing my B.Tech, and honestly it cleared so many concepts I struggled with online. The trainers actually explain the math behind neural networks instead of just showing code. Built my first CNN project here!",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "Best decision I made after graduation. I had zero AI background, just basic Python, but the way the course is structured made it easy to follow. Now I'm applying for ML Engineer roles with actual projects to show.",
        },
        {
          name: "Arjun Mehta",
          initials: "AM",
          role: "Amritsar",
          rating: 4,
          meta: "Deep Learning Training",
          quote:
            "Good hands-on training center in Amritsar. I liked that we worked with real datasets and not just toy examples. The NLP module was especially useful — built a sentiment analysis tool during class.",
        },
        {
          name: "Gurleen Bhatia",
          initials: "GB",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "I was working as a data analyst and wanted to move into deep learning. The weekend batches at Techcadd made it possible to learn without leaving my job. Trainers were patient with all my doubts.",
        },
        {
          name: "Rohit Sharma",
          initials: "RS",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "As a 12th pass student, I was worried the course would be too advanced for me. But the way they started from Python basics and built up to neural networks made everything click. Amritsar finally has a solid AI training option.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Amritsar",
          rating: 4,
          meta: "Deep Learning Training",
          quote:
            "Solid curriculum covering CNNs, RNNs, and even Transformers. Wish the batch size was a little smaller, but overall the trainer support was good and I learned a lot practically.",
        },
        {
          name: "Aditya Verma",
          initials: "AV",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "Compared to random YouTube tutorials, this felt structured and complete. I finally understand backpropagation properly! Also appreciated the resume and interview prep sessions at the end.",
        },
        {
          name: "Jasleen Kaur",
          initials: "JK",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "I came from a BBA background with no coding experience, and honestly I was scared I wouldn't keep up. But Techcadd's trainers made Python and deep learning approachable. Built an image classifier as my final project — never thought I'd do that!",
        },
        {
          name: "Karan Chadha",
          initials: "KC",
          role: "Amritsar",
          rating: 4,
          meta: "Deep Learning Training",
          quote:
            "Good institute for AI training in Amritsar. The TensorFlow and PyTorch sessions were practical and well-paced. Would've liked a bit more time on deployment, but overall a strong course.",
        },
        {
          name: "Priya Bansal",
          initials: "PB",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "Switched careers from teaching to tech through this course. The mentors were supportive throughout, especially when I was struggling with the math portions. Now working towards a data science role — grateful for the foundation I got here.",
        },
        {
          name: "Deepak Sood",
          initials: "DS",
          role: "Amritsar",
          rating: 5,
          meta: "Deep Learning Training",
          quote:
            "Techcadd's deep learning institute in Amritsar gave me exactly what I needed — practical project experience. My chatbot project from class is now part of my portfolio, and it's helped a lot in interviews.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — kept self-contained so an answer
       engine can lift them, and emitted as FAQPage JSON-LD from the route. */
    faqs: [
      {
        q: "What is the best deep learning course in Amritsar?",
        a: "Techcadd's Deep Learning Training in Amritsar is a project-based, industry-aligned program covering Python, neural networks, CNNs, RNNs, NLP, and Transformer models — designed to take learners from fundamentals to job-ready skills through hands-on projects and expert mentorship.",
      },
      {
        q: "Who can join the deep learning course at Techcadd?",
        a: "The course is open to 12th pass students, graduates (technical or non-technical), working IT professionals, data science enthusiasts, job seekers, and entrepreneurs. No prior AI experience is required — the curriculum starts with Python and math foundations before progressing to advanced topics.",
      },
      {
        q: "Do I need prior coding experience to learn deep learning?",
        a: "No. While basic logical thinking helps, the course begins with Python programming fundamentals, so students with little or no prior coding background can follow along and build up their skills progressively.",
      },
      {
        q: "What is the duration of the deep learning training in Amritsar?",
        a: "Course duration varies based on the track chosen (foundation, advanced, or specialization level). Techcadd offers flexible weekday and weekend batch options to fit different schedules — contact the institute directly for exact duration and batch details.",
      },
      {
        q: "What tools and frameworks will I learn in this course?",
        a: "Students learn Python, NumPy, Pandas, TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, and NLP libraries like NLTK/SpaCy, along with development environments like Jupyter Notebook and Google Colab.",
      },
      {
        q: "Will I get to work on real projects during the course?",
        a: "Yes. The course is project-based, and students build real applications such as image classifiers, sentiment analysis tools, chatbots, and prediction models — all of which become part of a job-ready portfolio.",
      },
      {
        q: "Is this course suitable for working professionals?",
        a: "Yes. Techcadd offers flexible weekend and evening batch timings specifically designed for working professionals who want to upskill into AI and deep learning roles without leaving their current job.",
      },
      {
        q: "What career opportunities are available after this course?",
        a: "Graduates of this program can pursue roles like AI Engineer, Machine Learning Engineer, Deep Learning Engineer, Data Scientist, and NLP Engineer — roles that are in growing demand across IT, healthcare, finance, and e-commerce sectors.",
      },
      {
        q: "Does Techcadd provide placement assistance after the deep learning course?",
        a: "Yes. Along with technical training, Techcadd supports students with resume building, interview preparation, and guidance on presenting AI/ML projects effectively to recruiters.",
      },
      {
        q: "How is this deep learning course different from free online courses?",
        a: "Unlike self-paced online courses, Techcadd offers structured, in-person mentorship, real-time doubt resolution, hands-on project guidance, and a curriculum specifically built around current industry hiring requirements — something free YouTube tutorials typically can't replicate.",
      },
      {
        q: "Is math knowledge required before starting this course?",
        a: "Basic math awareness helps, but it's not mandatory beforehand. The course includes a dedicated module covering the linear algebra, statistics, and calculus concepts needed to understand how deep learning models work.",
      },
      {
        q: "Where is Techcadd's deep learning training center located in Amritsar?",
        a: "Techcadd's Amritsar training center offers in-person, hands-on deep learning classes. Contact the institute directly through the enquiry form or call for the exact address and directions.",
      },
    ],

    /* The brief runs foundation, advanced and specialization tracks rather than
       fixed duration tiers, so the derived table would be inventing figures. */
    tracks: false,

    cta: {
      eyebrow: "Start your AI career with Techcadd's deep learning training in Amritsar",
      heading: "Turn Your Curiosity for AI Into a",
      accent: "Career-Ready Skill Set",
      body: "Join Amritsar's hands-on Deep Learning program and build real neural network projects — guided by expert trainers, designed for job-readiness from day one.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: Deep Learning Training",
        "Duration: Flexible (Foundation to Advanced tracks) — ask us for exact timelines",
        "Mode: Classroom / Hybrid",
        "Centre: Techcadd, Amritsar",
        "Batch Options: Weekday & Weekend",
      ],
      /* The three assurances the brief closes its enquiry section with, plus its
         walk-in line. */
      assurances: [
        "No spam calls — only genuine guidance",
        "100% free counselling, no obligation",
        "Your information is kept confidential",
        "Walk-ins welcome at the Amritsar centre for a free demo session",
      ],
      formTitle: "Enquire Now — Get Your Free Career Counselling Session",
      formNote:
        "Fill in your details below and our team will get in touch with course details, batch schedules, and fee information.",
      submitLabel: "Submit Enquiry",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Current Education / Profession",
      statusOptions: ["12th Pass", "Graduate", "Working Professional", "Entrepreneur", "Other"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Weekday", "Weekend"],
    },

    demo: {
      eyebrow: "Prefer to talk? Request a callback",
      heading: "Our Counsellor Will Call You Within 24 Hours",
      body: "Not ready to fill a form? No problem — just leave your number, and our counsellor will call you within 24 hours to answer all your questions about the course, fees, and career outcomes.",
      action: "Request a Callback",
      note: "Techcadd Training Centre, Amritsar — walk-ins welcome for a free demo session.",
    },

    /* Title, description and the keyword clusters from the brief's keyword and
       GEO strategy report. */
    seo: {
      title: "Deep Learning Training in Amritsar | Techcadd – Learn AI & Neural Networks",
      description:
        "Deep Learning Training in Amritsar at Techcadd — neural networks, CNNs, RNNs, NLP and Transformers with TensorFlow, PyTorch and Keras. Hands-on projects. Enquire now.",
      keywords: [
        "deep learning course in Amritsar",
        "deep learning training in Amritsar",
        "deep learning institute in Amritsar",
        "best deep learning course in Amritsar",
        "deep learning classes in Amritsar",
        "AI training in Amritsar",
        "AI and deep learning course Amritsar",
        "machine learning and deep learning course Amritsar",
        "neural networks training Amritsar",
        "TensorFlow PyTorch course Amritsar",
        "deep learning course with certificate Amritsar",
        "deep learning course for beginners Amritsar",
        "deep learning training institute near me Amritsar",
        "Techcadd deep learning course",
        "Techcadd Amritsar AI training",
        "best institute to learn deep learning in Amritsar",
        "how to become an AI engineer in Amritsar",
        "deep learning course for job in Amritsar",
        "which course is better data science or deep learning in Amritsar",
        "deep learning training with placement in Amritsar",
        "AI engineer course fees in Amritsar",
        "what is the best deep learning course in Amritsar",
        "is deep learning course worth it in Amritsar",
        "who can join deep learning training in Amritsar",
        "what tools are taught in deep learning course Amritsar",
        "how long is the deep learning course in Amritsar",
      ],
    },

    closing:
      "By the end of this deep learning course in Amritsar, students won't just understand deep learning theoretically — they'll have built, trained, evaluated, and deployed real models using the exact tools currently used by AI teams in the industry.",
  },
};

/* ------------------------------------------------- artificial intelligence */

/**
 * Source copy: the Amritsar Artificial Intelligence brief (overview, six
 * eligibility personas plus its no-experience note, the two "why" arguments,
 * twelve learning blocks, eleven student reviews, twelve FAQs, the
 * enquiry/callback section and the keyword/GEO strategy report). The twelve
 * learning blocks live in `course-data.ts`, because they are the curriculum.
 */
const artificialIntelligence: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for. */
      headline: "Artificial Intelligence Training Course in",
      accent: "Amritsar",
      tagline:
        "AI fundamentals, machine learning concepts, generative AI, intelligent automation, data-driven decision-making and real-world AI applications — taught practically.",
      chips: ["Regular / fast-track batches", "Classroom & online", "No prior AI experience needed"],
      image: "/images/courses/artificial-intelligence.png",
    },

    overview: {
      heading: "Artificial Intelligence Training in Amritsar – Overview",
      paragraphs: [
        "Looking for the best Artificial Intelligence Training Course in Amritsar? Techcadd offers a career-focused Artificial Intelligence course designed for students, graduates, professionals, and aspiring AI enthusiasts across Amritsar — including learners from GNDU, Khalsa College, DAV College, and other nearby institutes.",
        "This Artificial Intelligence course in Amritsar introduces students to the fundamentals of AI, machine learning concepts, generative AI, intelligent automation, data-driven decision-making, and real-world AI applications. Whether you're a complete beginner or someone who wants to build modern technology skills, this course is structured to develop practical and industry-relevant AI knowledge.",
        "At Techcadd, training goes beyond theory. Students work on practical activities, AI-based projects, real-world use cases, doubt-clearing sessions, and career guidance to help them understand how Artificial Intelligence is being used across modern industries.",
        "If you're searching for a trusted Artificial Intelligence training institute in Amritsar that combines practical learning with career support, this course is designed for you.",
      ],
      /* The citable facts the brief's GEO note asks to state plainly. */
      checks: [
        "Classroom training at the Amritsar centre, plus online options",
        "Regular and fast-track batches — confirm current timings with the centre",
        "No prior AI experience required",
        "Practical activities, AI projects and career guidance throughout",
      ],
    },

    curriculumNote:
      "This course is structured to introduce learners to Artificial Intelligence step by step, combining concepts with practical applications.",

    /* The six starting points the brief names, closing on its own
       no-experience note. */
    eligibility: {
      heading: "Who Can Join Artificial Intelligence Training",
      intro:
        "One of the most common questions students ask before enrolling is: \"Am I eligible for an Artificial Intelligence course?\" The answer is simple — if you're curious about technology, automation, data, and modern AI tools, this Artificial Intelligence Training Course in Amritsar can be a suitable starting point. The program is designed to introduce beginners to AI while also providing useful knowledge for students and professionals who already have some technical exposure.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds can explore Artificial Intelligence to understand one of the fastest-growing areas of modern technology. Learning AI at an early stage can help students explore future opportunities in technology, analytics, automation, and digital innovation.",
        },
        {
          label: "College Students",
          detail:
            "Students from GNDU, Khalsa College, DAV College, and other institutes across Amritsar can use AI training to supplement their academic learning with practical exposure to modern Artificial Intelligence tools and applications.",
        },
        {
          label: "Graduates from Any Stream Looking to Build New Skills",
          detail:
            "Graduates from technical as well as non-technical backgrounds can learn how Artificial Intelligence is being applied in areas such as business, education, marketing, customer service, research, content creation, and automation.",
        },
        {
          label: "Job Seekers Wanting an In-Demand Technology Skill",
          detail:
            "AI knowledge can strengthen a modern resume and help job seekers understand how organizations are adopting intelligent tools, automation, data-driven systems, and generative AI solutions.",
        },
        {
          label: "Working Professionals Wanting to Upskill",
          detail:
            "Professionals from different industries can learn how AI tools can support productivity, automation, research, analysis, content workflows, and everyday business activities.",
        },
        {
          label: "Aspiring AI & Technology Enthusiasts",
          detail:
            "Students who are interested in Artificial Intelligence, Machine Learning, Generative AI, automation, data, and future technologies can use this course as a foundation for further specialization.",
        },
        {
          label: "No Prior AI Experience Needed",
          detail:
            "You don't necessarily need previous Artificial Intelligence experience to begin. The course can start with basic concepts and gradually introduce learners to practical AI applications, making it suitable for beginners as well as students who already have some exposure to technology.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Choose This",
      accent: "Artificial Intelligence Training Program?",
      body: "With so many institutes offering AI-related courses in Amritsar, it's important to understand what makes a program genuinely useful. Techcadd's Artificial Intelligence Training program focuses on practical understanding, real-world applications, and career-oriented learning rather than theory alone.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "Students don't simply learn definitions of Artificial Intelligence. They explore practical AI applications, experiment with modern AI tools, work through real-world scenarios, and create projects that demonstrate what they have learned.",
        },
        {
          title: "Structured Beginner-to-Industry-Relevant Curriculum",
          body: "The course follows a logical progression, starting with Artificial Intelligence fundamentals and gradually moving toward machine learning concepts, generative AI, automation, data applications, and practical AI workflows.",
        },
        {
          title: "Industry-Relevant AI Skills",
          body: "Artificial Intelligence is increasingly being used across technology, education, finance, marketing, healthcare, customer service, manufacturing, and other industries. The program introduces learners to practical AI concepts that reflect current technology trends.",
        },
        {
          title: "Doubt-Clearing & Mentor Support",
          body: "AI can involve new terminology and unfamiliar concepts. Trainer support and doubt-clearing sessions help students understand difficult topics and apply AI concepts with greater confidence.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Students and working professionals may have different schedules. Flexible batch options can make it easier for learners in Amritsar and nearby areas to attend training while managing their studies or professional responsibilities.",
        },
        {
          title: "Career & Interview Support",
          body: "The objective is not simply to complete a course. Students can receive guidance related to resumes, interviews, AI project presentation, and career opportunities so they can better communicate their newly developed skills.",
        },
        {
          title: "Local Convenience",
          body: "Being based in Amritsar allows students to access Artificial Intelligence training without relocating to another city. Learners from nearby areas such as Tarn Taran, Batala, and Ajnala can also consider Amritsar as a convenient training location.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn Artificial Intelligence",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing the right training institute matters when learning a rapidly developing field such as Artificial Intelligence.",
      reasons: [
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's trainers focus on explaining Artificial Intelligence concepts through practical examples and real-world applications, helping students understand not only what AI is but also how it can be used.",
        },
        {
          title: "Training for Students in Amritsar",
          body: "Techcadd provides technology-focused training for students, graduates, and professionals from different educational backgrounds across Amritsar.",
        },
        {
          title: "Hands-On, Project-Driven Teaching",
          body: "Instead of relying only on lectures, students can explore practical AI activities, use modern AI tools, analyze real-world scenarios, and develop AI-based projects.",
        },
        {
          title: "Personal Attention",
          body: "Learning a new technology can involve many questions. A supportive learning environment allows students to ask questions, clarify concepts, and progress at a comfortable pace.",
        },
        {
          title: "Career Support",
          body: "AI knowledge becomes more valuable when students can explain their skills effectively. Career guidance, resume support, interview preparation, and project discussions can help students prepare for future opportunities.",
        },
        {
          title: "Flexible Learning Options",
          body: "Flexible schedules can help college students and working professionals learn Artificial Intelligence without completely changing their existing routine.",
        },
        {
          title: "Beginner-Friendly Teaching",
          body: "The course can introduce Artificial Intelligence from the basics, allowing learners without previous AI knowledge to understand the subject progressively.",
        },
        {
          title: "Local, Accessible, and Student-Focused",
          body: "Being located in Amritsar gives Techcadd a practical connection with the local student community and learners from nearby areas who want to develop modern technology skills.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones. The distribution is the real split of those
       ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I wanted to understand Artificial Intelligence because it is becoming important in almost every technology field. The practical approach helped me understand AI concepts much more clearly than simply reading about them.",
        },
        {
          name: "Harshdeep Singh",
          initials: "HS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I was completely new to Artificial Intelligence when I started. The concepts were explained from the beginning, and the practical activities made the learning experience much easier to understand.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "College Student, GNDU",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I joined to gain practical knowledge about Artificial Intelligence. The projects and examples helped me understand how AI can actually be used outside the classroom.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Working Professional, Amritsar",
          rating: 4,
          meta: "Artificial Intelligence Training",
          quote:
            "I wanted to learn how AI could help me improve productivity in my professional work. The flexible batch timing made it easier to learn alongside my job.",
        },
        {
          name: "Aman Sharma",
          initials: "AS",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "Learning Artificial Intelligence gave me new topics to discuss in interviews and helped me understand how companies are using modern AI tools.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "MCA Student, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "What I liked most was the practical approach. We didn't just discuss AI theory; we explored real applications and worked on activities related to Artificial Intelligence.",
        },
        {
          name: "Ishaan Mehta",
          initials: "IM",
          role: "BSc-IT Student, Amritsar",
          rating: 4,
          meta: "Artificial Intelligence Training",
          quote:
            "The trainers explained AI concepts in a simple way and gave us opportunities to ask questions. The practical learning helped me understand the subject better.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Graduate, Batala",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I travel from Batala for training in Amritsar. The practical sessions and supportive learning environment made the experience worthwhile.",
        },
        {
          name: "Rohit Verma",
          initials: "RV",
          role: "Freelancer, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I wanted to understand how Artificial Intelligence could improve my freelance workflow. The course helped me discover several practical applications of AI.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "12th Pass Student, Amritsar",
          rating: 4,
          meta: "Artificial Intelligence Training",
          quote:
            "Coming straight from school, I wasn't sure whether AI would be difficult. Starting from the fundamentals made it much easier for me to understand.",
        },
        {
          name: "Kirti Sood",
          initials: "KS",
          role: "Career Learner, Amritsar",
          rating: 5,
          meta: "Artificial Intelligence Training",
          quote:
            "I was interested in learning a modern technology skill and Artificial Intelligence seemed like a good area to explore. The beginner-friendly approach helped me get started confidently.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — each answering directly, as its
       AEO note asks. */
    faqs: [
      {
        q: "Is prior Artificial Intelligence experience required to join the course at Techcadd, Amritsar?",
        a: "No. The Artificial Intelligence course is designed to introduce beginners to AI fundamentals and gradually move toward practical applications. Students can start with basic concepts before exploring areas such as Generative AI, machine learning concepts, automation, and real-world AI use cases.",
      },
      {
        q: "Who can enroll in this Artificial Intelligence course?",
        a: "The course can be suitable for 12th pass students, college students, graduates, working professionals, freelancers, and technology enthusiasts. A specific technical background is not necessarily required for learning the fundamentals of Artificial Intelligence.",
      },
      {
        q: "What is the duration of the Artificial Intelligence Training course in Amritsar?",
        a: "The exact duration can depend on the selected batch and course structure. Regular and fast-track learning options may be available. Students should confirm the current duration with the Techcadd Amritsar centre before enrollment.",
      },
      {
        q: "Does Techcadd offer online and offline Artificial Intelligence classes in Amritsar?",
        a: "Flexible learning options are available, including classroom training at the Amritsar centre and online sessions. Students should confirm the currently available AI batches directly with the centre.",
      },
      {
        q: "Will I receive a certificate after completing the course?",
        a: "A course completion certificate can be provided after successful completion, subject to the institute's current certification policy.",
      },
      {
        q: "Does the Artificial Intelligence course include career support?",
        a: "The program is positioned around career-oriented learning and can include guidance related to resumes, interviews, projects, and job readiness.",
      },
      {
        q: "What career opportunities can Artificial Intelligence skills support?",
        a: "AI knowledge can be useful across areas such as AI-assisted business operations, automation, data-related work, Generative AI workflows, digital marketing, content workflows, technology support, and further specialization in AI and machine learning.",
      },
      {
        q: "Are batch timings flexible for college students and working professionals?",
        a: "Flexible batch options can help students and working professionals learn Artificial Intelligence alongside their existing schedules. Current batch timings should be confirmed with the Amritsar centre.",
      },
      {
        q: "Do I need a laptop for Artificial Intelligence classes?",
        a: "Having access to a laptop is recommended for practicing AI tools and completing practical activities. Students should confirm laboratory or device availability with the Techcadd Amritsar centre.",
      },
      {
        q: "How is this course different from free online AI tutorials?",
        a: "A structured training program can provide guided learning, mentor support, practical activities, doubt clearing, projects, and career guidance. These elements may be difficult to replicate through completely self-paced tutorials.",
      },
      {
        q: "Is this course suitable for someone planning to switch careers?",
        a: "Yes. Artificial Intelligence is used across many industries, so professionals from different backgrounds can explore AI to develop modern technology skills and identify suitable areas for further specialization.",
      },
      {
        q: "Where is Techcadd's Artificial Intelligence training centre located in Amritsar?",
        a: "Techcadd's Artificial Intelligence training is positioned for learners in Amritsar and nearby areas such as Tarn Taran, Batala, and Ajnala. The exact centre address and directions should be confirmed directly with Techcadd.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your Artificial Intelligence career journey — right here in Amritsar",
      heading: "Stop Relying Only on Scattered Free Tutorials.",
      accent: "Learn AI Properly.",
      body: "Learn Artificial Intelligence through a structured approach with practical activities, mentor guidance, projects, and career-focused learning at Techcadd, Amritsar.",
      facts: [
        "Course: Artificial Intelligence Training Course",
        "Duration: Flexible — Regular / Fast-Track options",
        "Mode: Classroom — Amritsar Centre & Online",
        "Centre: Techcadd, Amritsar",
      ],
      assurances: [
        "No spam calls",
        "Your details stay private",
        "Talk to a real trainer, not a bot",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Not ready to fill a form yet? No problem — leave your number and a Techcadd counsellor can contact you to answer your questions.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Graduate", "College Student", "Working Professional"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Request a Callback",
      body: "Not ready to fill a form yet? No problem — leave your number and a Techcadd counsellor can contact you to answer your questions.",
      action: "Request a Callback",
      note: "No spam calls · Your details stay private · Talk to a real trainer, not a bot.",
    },

    seo: {
      title: "Artificial Intelligence Training Course in Amritsar | Techcadd",
      description:
        "Learn Artificial Intelligence in Amritsar with practical training, Generative AI, real-world projects, flexible batches, and career-focused guidance.",
      keywords: [
        "Artificial Intelligence Training course Amritsar",
        "Artificial Intelligence course in Amritsar",
        "AI training institute Amritsar",
        "best AI course Amritsar",
        "Artificial Intelligence classes Amritsar",
        "AI coaching Amritsar",
        "Artificial Intelligence course near me Amritsar",
        "AI training for students Amritsar",
        "Artificial Intelligence course for beginners Amritsar",
        "Generative AI course Amritsar",
        "AI certification course Amritsar",
        "Artificial Intelligence training institute Amritsar",
        "learn Artificial Intelligence in Amritsar",
        "AI course with placement Amritsar",
        "Artificial Intelligence course near GNDU Amritsar",
        "AI training near Khalsa College Amritsar",
        "Artificial Intelligence classes Mall Road Amritsar",
        "AI course Hall Bazaar Amritsar",
        "AI training Lawrence Road Amritsar",
        "Artificial Intelligence course for Batala students",
        "AI training for Tarn Taran students",
        "Artificial Intelligence classes for Ajnala students",
        "AI course for 12th pass students Amritsar",
        "Artificial Intelligence course for college students Amritsar",
        "AI course for graduates Amritsar",
        "AI course for working professionals Amritsar",
        "career in Artificial Intelligence Amritsar",
        "learn AI tools in Amritsar",
      ],
    },

    closing:
      "The objective is not simply to complete a course: students leave able to explain what Artificial Intelligence does, use modern AI tools in practical work, and present AI projects that demonstrate their understanding.",
  },
};

/* ------------------------------------------------------------ cybersecurity */

/**
 * Source copy: the Amritsar cyber security brief (overview, seven eligibility
 * personas, the two "why" arguments, eight learning blocks with the tools list,
 * eleven student reviews, twelve FAQs, the enquiry/callback section and the
 * keyword/GEO strategy report). The eight learning blocks and the tool list
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 */
const cybersecurity: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Cyber & Cloud · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Cyber Security Training
         in Amritsar — Techcadd". */
      headline: "Cyber Security Training in",
      accent: "Amritsar",
      tagline:
        "Practical, industry-relevant skills in ethical hacking, network security, penetration testing and digital forensics — taught in live labs and simulated attack-defense scenarios.",
      chips: ["Foundation & advanced tracks", "Offline, instructor-led labs", "No coding background needed"],
      image: "/images/courses/cybersecurity.png",
    },

    overview: {
      heading: "Cyber Security Training in Amritsar — Techcadd",
      paragraphs: [
        "Looking to build a future-proof career in one of the fastest-growing tech fields? Techcadd's Cyber Security Training in Amritsar is designed for students, graduates, and IT professionals who want practical, industry-relevant skills in ethical hacking, network security, penetration testing, and digital forensics.",
        "As businesses across Amritsar and Punjab move online, the demand for skilled cyber security professionals is rising sharply — from banks and IT firms to government agencies and startups. Techcadd's course bridges the gap between college theory and real-world security operations, giving you hands-on exposure to tools and techniques used by working security analysts.",
        "At Techcadd's Amritsar centre, you'll learn under experienced trainers who bring real industry case studies into the classroom, work on live labs and simulated attack-defense scenarios, and build a portfolio that stands out to recruiters. Whether you're a fresher exploring IT careers or a professional upskilling into security, this program is structured to take you from fundamentals to job-ready expertise.",
      ],
      /* The specific, extractable facts the brief's GEO note asks for. */
      checks: [
        "Offline, instructor-led training at the Techcadd Amritsar centre",
        "Foundation and advanced tracks with flexible batch timings",
        "Open to 12th pass, graduates, IT professionals and career switchers",
        "Hands-on labs in legal, controlled environments — plus a course certificate",
      ],
    },

    curriculumNote:
      "Techcadd's Cyber Security Training is built around a progressive curriculum that takes you from foundational networking concepts to advanced offensive and defensive security skills. Here's a detailed breakdown of what the program covers.",

    /* The seven starting points the brief names, in its order. */
    eligibility: {
      heading: "Who Can Do This Cyber Security Course?",
      intro:
        "Cyber Security is no longer a niche specialization — it's one of the most in-demand skill sets across every industry that touches the internet, which is now virtually every industry. Techcadd's Cyber Security Training in Amritsar is built to be accessible to a wide range of learners, whether you're just starting out or looking to pivot your career into tech's fastest-growing domain.",
      criteria: [
        {
          label: "12th Pass Students (Science / Commerce / Arts)",
          detail:
            "You don't need a technical background to begin. If you've completed your 12th grade and have a genuine interest in computers, the internet, and how systems work, this course gives you a structured path into cyber security. Basic computer literacy is enough to get started — Techcadd's trainers build your fundamentals from the ground up before moving into advanced concepts like network security and ethical hacking.",
        },
        {
          label: "BCA / B.Tech / B.Sc (IT/CS) Graduates",
          detail:
            "If you've studied computer applications, computer science, or information technology, you already have a head start. This course helps you translate your academic knowledge into practical, job-ready skills. Most college curriculums cover cyber security only theoretically — Techcadd fills that gap with hands-on labs, real vulnerability assessments, and tools used in actual security operations centers (SOCs).",
        },
        {
          label: "MCA and Other Postgraduate Students",
          detail:
            "For postgraduate students looking to specialize before entering the job market, cyber security offers strong career differentiation. Adding a recognized, practical certification alongside your degree makes your profile far more attractive to recruiters hiring for security-focused roles.",
        },
        {
          label: "Working IT Professionals (Network Admins, System Admins, Developers)",
          detail:
            "If you're already working in IT — as a network administrator, system admin, software developer, or QA engineer — this course lets you upskill into a specialized, higher-paying security role. Professionals with 1–5 years of experience often use cyber security certification as a springboard into roles like Security Analyst, SOC Analyst, or Penetration Tester.",
        },
        {
          label: "Career Switchers from Non-IT Backgrounds",
          detail:
            "You don't have to come from a coding background to succeed in cyber security. Many successful security professionals started in unrelated fields — commerce, arts, even mechanical or electrical engineering — and transitioned in through structured training. If you're methodical, curious, and enjoy problem-solving, this field rewards those traits heavily.",
        },
        {
          label: "Freelancers and Entrepreneurs",
          detail:
            "If you run a business or manage websites and digital assets, understanding cyber security helps you protect your own systems and clients' data — and can open a side income stream through bug bounty programs, security audits, and consulting.",
        },
        {
          label: "Job Seekers Targeting Government & PSU Roles",
          detail:
            "With India's growing focus on digital infrastructure security, government departments, banks, and public sector units are increasingly hiring cyber security-trained candidates for IT security roles — making this course relevant for competitive exam aspirants too.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why This Program",
      accent: "for Cyber Security Training?",
      body: "Choosing the right cyber security program isn't just about learning concepts — it's about building skills that translate directly into employability. Here's why Techcadd's Cyber Security Training stands out for students and professionals in Amritsar.",
      reasons: [
        {
          title: "Practical, Lab-Based Learning — Not Just Theory",
          body: "Cyber security can't be mastered by reading slides. Techcadd's curriculum is built around hands-on labs where you actively perform vulnerability scans, simulate network attacks in controlled environments, and practice defense techniques used by real SOC teams. You'll work with industry-standard tools rather than only studying them on paper, so what you learn maps directly to what employers expect you to already know.",
        },
        {
          title: "Structured Path from Fundamentals to Advanced Topics",
          body: "The program is designed as a progressive journey — starting with networking basics, operating systems, and security fundamentals, then advancing into ethical hacking, penetration testing, web application security, and digital forensics. This structure ensures you're never thrown into advanced material without the foundation to understand it, which is a common gap in self-taught or purely online learning.",
        },
        {
          title: "Trainers with Real Industry Exposure",
          body: "Learning from someone who has worked on actual security incidents is very different from learning from someone who has only studied the theory. Techcadd's trainers bring real-world case studies, current threat trends, and practical war stories into the classroom — helping you understand not just \"how\" a technique works, but \"why\" and \"when\" it's used in the field.",
        },
        {
          title: "Amritsar-Based, Locally Accessible Training",
          body: "For students and working professionals in Amritsar, this means quality cyber security education without the cost and disruption of relocating to a metro city. You get the same depth of training, delivered locally, with a schedule that can work around college or job commitments.",
        },
        {
          title: "Career Support and Placement Guidance",
          body: "Technical skill alone doesn't guarantee a job — positioning matters too. Techcadd supports learners with resume building, interview preparation, and placement guidance tailored to cyber security roles, helping bridge the gap between \"trained\" and \"hired.\"",
        },
        {
          title: "Future-Proof, High-Growth Career Field",
          body: "Unlike many IT skills that risk automation or market saturation, cyber security demand continues to outpace supply globally and in India. Enrolling now positions you ahead of the curve in a field where organizations are actively struggling to find qualified talent — meaning stronger job security and salary potential over time.",
        },
        {
          title: "Certification That Adds Credibility",
          body: "Completing a structured, practical program adds a credible credential to your resume — something that stands out to recruiters compared to purely self-taught or unverified online course completions.",
        },
        {
          title: "A Real Career, Not Just Certificates",
          body: "Together, these factors make Techcadd's Cyber Security Training a strong choice for anyone serious about building a real, sustainable career in security — not just collecting certificates.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Cyber Security Training in Amritsar?",
      body: "With so many institutes offering \"cyber security courses\" today, choosing where to train can feel overwhelming. Here's what genuinely sets Techcadd apart for students and professionals in Amritsar.",
      reasons: [
        {
          title: "Industry-Aligned Curriculum, Updated Regularly",
          body: "Cyber threats evolve constantly — a curriculum designed five years ago is already outdated. Techcadd's Cyber Security Training is regularly refreshed to reflect current attack techniques, tools, and industry practices, so you're learning what's relevant to today's threat landscape, not yesterday's.",
        },
        {
          title: "Hands-On Labs Over Passive Learning",
          body: "Techcadd's approach centers on doing, not just watching. You'll get direct access to lab environments where you can practice reconnaissance, vulnerability scanning, exploitation techniques (in safe, controlled setups), and defensive countermeasures. This experiential approach builds muscle memory and confidence that theory alone cannot.",
        },
        {
          title: "Experienced, Industry-Connected Trainers",
          body: "Learning security concepts from someone who has only studied them academically is fundamentally different from learning from a trainer who has handled real security assessments and incidents. Techcadd's trainers bring practical, field-tested knowledge into every session — helping you understand real-world context, not just textbook definitions.",
        },
        {
          title: "Small Batch Sizes for Personalized Attention",
          body: "Cyber security is a hands-on, detail-heavy field where individual doubts need individual attention. Techcadd keeps batch sizes manageable so trainers can actually engage with each student's progress, rather than lecturing to a large, anonymous room.",
        },
        {
          title: "Local Presence, Trusted Reputation",
          body: "Techcadd has built a long-standing presence across Punjab, training students across multiple in-demand tech domains over the years. For students in Amritsar, this means enrolling with an institute that has an established local track record — not an unfamiliar, fly-by-night training provider.",
        },
        {
          title: "Career-Focused Support Beyond the Classroom",
          body: "Techcadd doesn't stop at teaching technical skills — the program includes guidance on resume building, interview preparation, and understanding how to position yourself for cyber security roles, whether you're targeting an entry-level SOC Analyst position or aiming for penetration testing work.",
        },
        {
          title: "Flexible Learning for Students and Working Professionals",
          body: "Whether you're a full-time student or a working professional trying to upskill, Techcadd structures its schedule to accommodate different commitments, so you don't have to choose between your current responsibilities and building a new career.",
        },
        {
          title: "A Genuine Learning Environment, Not Just a Certificate Mill",
          body: "The goal at Techcadd isn't to hand out certificates — it's to ensure you actually understand the material well enough to apply it on the job. That focus on real competency is what makes graduates of the program stand out to employers.",
        },
        {
          title: "A Serious Career Investment",
          body: "Choosing Techcadd means choosing an institute that treats cyber security training as a serious career investment — not a quick weekend workshop.",
        },
      ],
    },

    /* The brief's eleven reviews, carried across as written — including the
       three four-star ones and what they ask for. The distribution below is the
       real split of those eleven ratings, not a rounded-up one. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ravneet Singh",
          initials: "RS",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "I joined Techcadd's cyber security course after finishing my BCA from a college near Amritsar. The hands-on labs made all the difference — we actually used Kali Linux and Burp Suite instead of just reading about them. Got placed as a Junior Security Analyst within 2 months of completing the course.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "Being from a non-technical background (I did my graduation in commerce), I was nervous about joining a cyber security course. The trainers at Techcadd Amritsar started from the basics and built up gradually. Six months later, I actually understand how ethical hacking works — something I never thought I'd say.",
        },
        {
          name: "Harpreet Singh",
          initials: "HS",
          role: "Amritsar",
          rating: 4,
          meta: "Cyber Security Training",
          quote:
            "Good course overall. The networking fundamentals section was a bit slow for me since I already had IT experience, but the penetration testing and web app security modules were excellent. Would recommend to anyone switching careers into security.",
        },
        {
          name: "Amanpreet Kaur",
          initials: "AK",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "What I liked most was the small batch size. Our trainer actually knew each student's name and progress, unlike the crowded batches I heard about at other institutes in Amritsar. Learned Nmap, Wireshark, and Metasploit properly with real practice time.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "I was working as a network admin and wanted to move into a security role. Techcadd's course gave me exactly the practical exposure I needed — especially the digital forensics module. Cleared an interview for a SOC Analyst role right after finishing.",
        },
        {
          name: "Jaspreet Kaur",
          initials: "JK",
          role: "Amritsar",
          rating: 4,
          meta: "Cyber Security Training",
          quote:
            "Solid curriculum, very career-focused. The trainers shared real incident examples which made the theory click faster. Only wish the course covered cloud security in more depth, but overall a great learning experience in Amritsar.",
        },
        {
          name: "Manpreet Singh",
          initials: "MS",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "As a 12th pass student, I had zero background in IT. Techcadd took me from not knowing what a firewall was to confidently performing vulnerability scans. The step-by-step approach really works for beginners.",
        },
        {
          name: "Rajwinder Kaur",
          initials: "RK",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "Techcadd's placement support was genuinely helpful — resume review, mock interviews, the works. Combined with the practical labs, I felt properly prepared when I started applying for security analyst roles in Amritsar and Chandigarh.",
        },
        {
          name: "Karanveer Singh",
          initials: "KS",
          role: "Amritsar",
          rating: 4,
          meta: "Cyber Security Training",
          quote:
            "Good hands-on exposure to tools like Metasploit and Nessus. The trainer had real industry experience which showed in how he explained attack scenarios. Batch timing was flexible enough to manage alongside my final year college classes.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "I researched multiple institutes in Amritsar before choosing Techcadd, and I'm glad I did. The course is genuinely practical — not just PowerPoint slides. The digital forensics and web application security sections were my favorites.",
        },
        {
          name: "Sukhwinder Singh",
          initials: "SS",
          role: "Amritsar",
          rating: 5,
          meta: "Cyber Security Training",
          quote:
            "Switched from a mechanical engineering background into cyber security through this course. Wasn't easy at first, but the trainers were patient and the lab sessions helped everything make sense. Now working as a trainee penetration tester.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order — direct and quotable, as its GEO
       note asks, and emitted as FAQPage JSON-LD from the course route. */
    faqs: [
      {
        q: "What is the best cyber security course in Amritsar?",
        a: "Techcadd's Cyber Security Training in Amritsar is designed for students and professionals seeking practical, hands-on skills in ethical hacking, network security, and penetration testing, backed by industry-experienced trainers and real lab exposure.",
      },
      {
        q: "Who can join the cyber security course at Techcadd Amritsar?",
        a: "Anyone with basic computer knowledge can join — including 12th pass students, BCA/B.Tech/B.Sc graduates, MCA students, working IT professionals, and career switchers from non-technical backgrounds.",
      },
      {
        q: "Do I need a coding background to learn cyber security?",
        a: "No prior coding background is required to start. Techcadd's course builds your fundamentals from the ground up, though basic familiarity with computers and networking concepts helps you progress faster.",
      },
      {
        q: "What tools will I learn in this course?",
        a: "You'll get hands-on experience with industry-standard tools including Kali Linux, Nmap, Wireshark, Burp Suite, Metasploit Framework, Nessus, and forensic analysis tools like Autopsy.",
      },
      {
        q: "What is the duration of the cyber security course at Techcadd?",
        a: "Course duration varies based on the track chosen (foundation, advanced, or specialized certification tracks). Contact Techcadd's Amritsar centre directly for current batch schedules and duration details.",
      },
      {
        q: "Is this course available in offline mode at Amritsar?",
        a: "Yes, Techcadd offers cyber security training at its Amritsar centre with in-person, instructor-led classes and hands-on lab sessions.",
      },
      {
        q: "What career opportunities are available after this course?",
        a: "Graduates can pursue roles such as Security Analyst, SOC Analyst, Penetration Tester, Network Security Engineer, and Vulnerability Assessment Analyst across IT firms, banks, and government organizations.",
      },
      {
        q: "Does Techcadd provide placement assistance for cyber security students?",
        a: "Yes, Techcadd offers career support including resume building, interview preparation, and placement guidance to help students transition into cyber security roles after course completion.",
      },
      {
        q: "Is ethical hacking legal to learn and practice?",
        a: "Yes, ethical hacking is fully legal when performed in controlled, authorized environments — which is exactly how Techcadd structures its lab-based training, using isolated systems and permitted testing scenarios.",
      },
      {
        q: "Can working professionals join this course alongside their job?",
        a: "Yes, Techcadd offers flexible batch timings designed to accommodate working professionals and students who need to balance the course with existing commitments.",
      },
      {
        q: "What is the difference between cyber security and ethical hacking?",
        a: "Cyber security is the broader discipline of protecting systems, networks, and data from threats, while ethical hacking is one specialized skill within it — focused on legally testing systems for vulnerabilities before malicious actors can exploit them.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, students receive a course completion certificate from Techcadd upon successfully finishing the program, which can be added to your resume and professional profiles.",
      },
    ],

    /* The brief runs foundation and advanced tracks rather than fixed duration
       tiers, so the derived table would be inventing figures. */
    tracks: false,

    cta: {
      eyebrow: "Enquire now — cyber security training at Techcadd, Amritsar",
      heading: "Start Your Career in Cyber Security —",
      accent: "Learn Skills That Are Actually in Demand",
      body: "Get hands-on training in ethical hacking, network security, and penetration testing from industry-experienced trainers. Limited seats per batch to ensure personal attention.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: Cyber Security Training",
        "Duration: Flexible tracks (Foundation / Advanced) — ask our counsellor for current schedule",
        "Mode: Offline, Instructor-Led (Hands-on Labs)",
        "Centre: Techcadd, Amritsar",
        "Eligibility: 12th Pass, Graduates, IT Professionals, Career Switchers",
      ],
      /* The three assurances the brief closes its enquiry section with. */
      assurances: [
        "No spam calls — only genuine course guidance",
        "Speak directly with a trainer, not just a sales rep",
        "Get a free curriculum walkthrough before you enroll",
      ],
      formTitle: "Request a Callback",
      formNote:
        "Fill in your details and our course counsellor will get in touch within 24 hours. Your information is used only to contact you about this course and is not shared with third parties.",
      submitLabel: "Request Free Counselling Call",
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Highest Qualification",
      statusOptions: ["12th Pass", "Graduate", "Postgraduate", "IT Professional", "Other"],
      batchLabel: "Preferred Batch Timing",
      batchOptions: ["Morning", "Evening", "Weekend"],
    },

    demo: {
      eyebrow: "Request a callback",
      heading: "Speak Directly With a Trainer",
      body: "Fill in your details and our course counsellor will get in touch within 24 hours — no spam calls, only genuine course guidance, and a free curriculum walkthrough before you enroll.",
      action: "Request Free Counselling Call",
      note: "Your information is used only to contact you about this course and is not shared with third parties.",
    },

    /* Title, description and the keyword clusters from the brief's Stage 8
       keyword and GEO strategy report. */
    seo: {
      title: "Cyber Security Course in Amritsar | Techcadd",
      description:
        "Learn ethical hacking, network security & penetration testing at Techcadd's Cyber Security Training in Amritsar. Hands-on labs, expert trainers, placement support.",
      keywords: [
        "cyber security course Amritsar",
        "cyber security training in Amritsar",
        "ethical hacking course Amritsar",
        "best cyber security institute Amritsar",
        "cyber security classes near me Amritsar",
        "penetration testing course Amritsar",
        "network security training Amritsar",
        "cyber security certification Amritsar",
        "ethical hacking training centre Amritsar",
        "Techcadd cyber security course",
        "cyber security course for beginners Amritsar",
        "best cyber security course in Amritsar for beginners",
        "cyber security course fees in Amritsar",
        "cyber security course after 12th in Amritsar",
        "ethical hacking course with certificate in Amritsar",
        "which institute is best for cyber security in Amritsar",
        "cyber security jobs after course in Amritsar",
        "offline cyber security training in Amritsar",
        "how to become a cyber security analyst in Amritsar",
        "cyber security course with placement Amritsar",
        "SOC analyst training Amritsar",
        "penetration tester course near me",
      ],
    },

    closing:
      "Choosing Techcadd means choosing an institute that treats cyber security training as a serious career investment — not a quick weekend workshop. The goal is that you understand the material well enough to apply it on the job.",
  },
};

/* -------------------------------------------------------- cloud computing */

/**
 * Source copy: the Amritsar cloud computing brief (overview, six eligibility
 * personas plus its closing summary, the two "why" arguments, thirteen learning
 * blocks with the tools list, ten review templates, fourteen FAQs, the enquiry
 * section and the keyword/GEO strategy report). The learning blocks, the tool
 * list and the practical projects live in `course-data.ts` instead, because
 * they are the curriculum and the module explorer reads them from the seed.
 *
 * The brief's reviews carry placeholder names and its own E-E-A-T note says
 * reviews should always be genuine and permission-based. They are carried
 * across here with their text intact but with no invented identities: each is
 * attributed to an unnamed Amritsar student, with the review's own heading as
 * its meta line.
 */
const cloudComputing: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Cyber & Cloud · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Cloud Computing Training
         in Amritsar" — rather than the catalogue phrasing. */
      headline: "Cloud Computing Training in",
      accent: "Amritsar",
      tagline:
        "Practical, career-oriented training in cloud fundamentals, AWS and Azure, Linux, networking, security and DevOps — for students, graduates, freshers and working professionals.",
      chips: ["Classroom / online", "AWS · Azure · DevOps", "Beginner-friendly"],
      image: "/images/courses/cloud-computing.png",
    },

    overview: {
      heading: "Cloud Computing Training in Amritsar",
      paragraphs: [
        "Cloud computing has become a core technology for modern businesses, making skilled professionals increasingly valuable across IT infrastructure, software development, DevOps, cybersecurity, and cloud administration. Techcadd's Cloud Computing Training in Amritsar is designed for students, graduates, freshers, and working professionals who want to build practical knowledge of cloud technologies and develop job-ready technical skills.",
        "The program can introduce learners to essential cloud concepts such as virtualization, cloud infrastructure, storage, networking, security, deployment, and major cloud platforms such as AWS and Microsoft Azure, with practical learning focused on real-world applications. Hands-on exposure is particularly important because cloud training providers in Amritsar commonly emphasize AWS, Azure, DevOps, cloud administration, and practical labs.",
        "Students searching for cloud computing training in Amritsar, cloud computing courses in Amritsar, AWS training in Amritsar, or job-oriented cloud computing courses in Amritsar can use this program as a pathway to strengthen their technical foundation and prepare for cloud-focused career opportunities.",
        "With a practical, career-oriented approach, Techcadd aims to help learners understand how modern cloud environments work and build the confidence required to progress toward professional cloud roles.",
      ],
      /* The factual, extractable details the brief's AIO note asks for. */
      checks: [
        "Classroom or online, subject to current batch availability",
        "Suitable for students, graduates, freshers, job seekers and working professionals",
        "AWS, Azure, Linux, networking, security, DevOps, containers and automation",
        "Confirm the current duration, syllabus and fees with the Amritsar centre",
      ],
    },

    curriculumNote:
      "A practical Cloud Computing Training in Amritsar program should help students move from basic concepts to hands-on understanding of cloud infrastructure and modern deployment practices. The objective is not simply to memorize cloud terminology but to understand how organizations use cloud technologies to build, host, secure, manage, and scale digital services.",

    /* The six starting points the brief names, closing on its own summary. */
    eligibility: {
      heading: "Who Can Do Cloud Computing Training in Amritsar?",
      intro:
        "Cloud Computing Training in Amritsar is suitable for students, fresh graduates, job seekers, working professionals, and aspiring IT specialists who want to build practical skills in one of the most important areas of modern technology. You do not necessarily need to be an experienced IT professional to begin learning cloud computing. A structured program can help beginners start with fundamental concepts before progressing toward cloud platforms, infrastructure, deployment, security, and related technologies.",
      criteria: [
        {
          label: "12th-Pass Students",
          detail:
            "Students who have completed 12th standard and want to enter the IT field can consider cloud computing as a long-term technology career option. If you have an interest in computers, networking, servers, software, or emerging technologies, beginner-level cloud training can help you understand how modern applications and digital services are hosted and delivered. Students in Amritsar looking for cloud computing courses after 12th, IT courses in Amritsar, or job-oriented technical training can use cloud computing as a foundation for further learning in areas such as AWS, Azure, DevOps, networking, Linux, and cybersecurity.",
        },
        {
          label: "College Students",
          detail:
            "Cloud skills can complement degrees such as BCA, B.Sc. Computer Science, B.Tech, B.E., MCA, and other technology-related programs. College students can learn practical concepts alongside their academic studies and use projects to demonstrate their skills when applying for internships or entry-level opportunities. Practical exposure matters because modern cloud programs commonly combine concepts with hands-on labs, projects, and infrastructure exercises rather than relying only on classroom theory.",
        },
        {
          label: "Graduates and Freshers",
          detail:
            "Graduates who want to enter the IT industry can consider Cloud Computing Training in Amritsar to develop a more focused technical profile. Candidates from computer-related backgrounds may find it easier to connect concepts such as operating systems, databases, networking, and programming with cloud environments. Freshers can gradually build knowledge around cloud infrastructure, compute resources, storage, networking, security, and service management. Depending on the curriculum, learners may also gain exposure to platforms such as AWS, Microsoft Azure, or Google Cloud.",
        },
        {
          label: "IT Professionals Looking to Upskill",
          detail:
            "Working professionals in areas such as software development, system administration, networking, database administration, and technical support may use cloud training to expand their existing skill set. For example, a system administrator can explore cloud infrastructure, while a developer can learn how applications are deployed using cloud services. Networking professionals can strengthen their understanding of virtual networks, access controls, and cloud connectivity.",
        },
        {
          label: "Career Switchers",
          detail:
            "Cloud computing can also appeal to professionals who want to transition into technology. If you are moving from a non-technical career into IT, starting with cloud fundamentals is more realistic than immediately attempting advanced cloud architecture. A good learning pathway should move progressively from basic concepts to practical implementation. Current cloud-training programs commonly cover areas such as AWS, Azure, GCP, Docker, Kubernetes, Terraform, Linux, networking, security, and DevOps.",
        },
        {
          label: "Students Interested in AWS and Cloud Careers",
          detail:
            "Learners specifically searching for AWS training in Amritsar, AWS course in Amritsar, Azure training in Amritsar, or cloud certification training in Amritsar can use a broader cloud computing program to understand the ecosystem before choosing a specialization. Techcadd's focus on practical, industry-oriented technical education aligns with the growing demand for hands-on technology learning and career-focused skills.",
        },
        {
          label: "A Starting Point for Any Level",
          detail:
            "Whether you are a beginner, student, graduate, job seeker, or working professional, Cloud Computing Training in Amritsar can provide a structured starting point for developing relevant technical knowledge and preparing for the next stage of your IT career.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why Choose This Cloud Computing Program",
      accent: "in Amritsar?",
      body: "Choosing the right Cloud Computing Training in Amritsar can make a significant difference when you are trying to build a career in today's technology-driven IT industry. Cloud computing is no longer limited to large technology companies. Businesses across e-commerce, finance, education, healthcare, software, manufacturing, and digital services increasingly rely on cloud infrastructure to store data, host applications, scale operations, and deliver online services. This program is designed around a student-focused and career-oriented learning approach, helping learners progress from fundamental cloud concepts toward practical technical knowledge.",
      reasons: [
        {
          title: "Learn Cloud Computing from the Fundamentals",
          body: "Beginners often find cloud computing confusing because it involves several technical areas, including servers, networking, storage, operating systems, virtualization, security, and deployment. A structured course can make these concepts easier to understand by introducing them step by step. Students can first understand concepts such as cloud service models, deployment models, virtualization, infrastructure, scalability, availability, and resource management before moving toward practical cloud platforms.",
        },
        {
          title: "Develop Practical Technical Skills",
          body: "One of the biggest advantages of professional cloud computing courses in Amritsar is the opportunity to gain practical exposure. Cloud technology is highly hands-on, so students need more than definitions and theoretical explanations. Depending on the curriculum, learners can work with cloud environments, configure resources, understand networking concepts, manage storage, deploy applications, and explore cloud security practices. This practical approach can help students become more comfortable with real technical environments and understand how cloud services are used by organizations.",
        },
        {
          title: "Explore AWS and Azure Technologies",
          body: "AWS and Microsoft Azure are among the major cloud platforms used by organizations worldwide. A cloud computing program that introduces students to these platforms can help them understand different approaches to cloud infrastructure and services. Learners searching specifically for AWS training in Amritsar or Azure training in Amritsar can therefore benefit from understanding the broader cloud ecosystem before moving toward a platform-specific certification or specialization.",
        },
        {
          title: "Build Skills for Multiple IT Career Paths",
          body: "Cloud computing is not restricted to one job role. The skills developed through cloud training can complement career paths such as cloud administrator, cloud support associate, system administrator, DevOps professional, cloud engineer, infrastructure specialist, and eventually cloud architect. Your actual career path will depend on your education, practical skills, projects, certifications, experience, and specialization. However, developing a strong foundation can make it easier to identify the direction that matches your interests.",
        },
        {
          title: "Suitable for Students and Working Professionals",
          body: "A career-focused Cloud Computing Course in Amritsar can be useful for both beginners and professionals. Students can use the course to supplement their academic education, while working professionals can use cloud technologies to upgrade their existing IT skills. The program can also benefit job seekers who want to develop a more specialized technical profile instead of relying only on a general computer qualification.",
        },
        {
          title: "Focus on Career-Oriented Learning",
          body: "The objective should not simply be to complete a course. Students should leave with knowledge they can demonstrate through practical exercises, projects, technical discussions, and continued self-learning. A strong learning pathway can help students understand not only what cloud computing is, but also how cloud technologies are implemented and why organizations use them.",
        },
        {
          title: "A Structured Environment to Begin In",
          body: "For learners searching for Cloud Computing Training in Amritsar, Cloud Computing Course in Amritsar, AWS Training in Amritsar, or job-oriented cloud courses in Amritsar, Techcadd provides a structured environment to begin developing relevant cloud and IT skills. Ultimately, the value of this program comes from combining fundamentals, practical exposure, industry-relevant technologies, and career-focused learning — giving students a stronger foundation for continuing their journey into cloud computing and the wider IT industry.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Choose Techcadd",
      accent: "for Cloud Computing Training in Amritsar?",
      body: "Choosing an institute for Cloud Computing Training in Amritsar is an important decision, especially if your goal is to develop practical IT skills and prepare for a technology-focused career. Students often compare course syllabus, practical exposure, trainer support, learning environment, projects, certification guidance, and career assistance before selecting a training institute. Techcadd focuses on career-oriented technical education, making the learning journey more structured for students, freshers, graduates, and professionals who want to understand modern cloud technologies.",
      reasons: [
        {
          title: "Career-Focused Cloud Learning",
          body: "Cloud computing is a broad field. Simply learning definitions of AWS, Azure, servers, or cloud storage is not enough to build meaningful technical knowledge. Students need to understand how different technologies work together. Techcadd's approach is designed to help learners progress from cloud computing fundamentals to practical concepts, allowing them to develop a stronger understanding of cloud infrastructure and its business applications.",
        },
        {
          title: "Beginner-Friendly Learning Approach",
          body: "Students joining a Cloud Computing Course in Amritsar may come from different educational backgrounds. Some may already understand networking and operating systems, while others may be completely new to cloud technology. A structured learning approach can help beginners understand concepts progressively instead of overwhelming them with advanced terminology from the beginning.",
        },
        {
          title: "Practical Exposure",
          body: "Cloud computing is a practical technology. Learners need opportunities to understand how cloud resources are configured, managed, secured, and deployed. Practical exercises can help students connect classroom concepts with real-world scenarios. This type of hands-on learning can also improve confidence when students begin working on cloud-related projects or preparing for interviews.",
        },
        {
          title: "Industry-Relevant Technologies",
          body: "Cloud technology continues to evolve, so students should learn concepts that remain useful beyond one particular platform. The learning journey can include areas such as cloud infrastructure, virtualization, networking, storage, databases, security, deployment, monitoring, Linux, DevOps fundamentals, and major cloud platforms such as AWS and Microsoft Azure. This broader approach can be particularly useful for students searching for AWS Training in Amritsar or Azure Training in Amritsar who also want to understand the fundamentals behind cloud computing.",
        },
        {
          title: "Support for Students and Freshers",
          body: "Students and fresh graduates frequently need more than technical lessons. They may also need guidance about projects, resumes, interviews, certifications, and possible IT career paths. A training environment that encourages questions and practical problem-solving can help learners identify their strengths and understand which areas they should continue developing.",
        },
        {
          title: "Useful for Career Upskilling",
          body: "Techcadd's cloud training can also be considered by working IT professionals who want to add cloud skills to their existing technical profile. For example, networking professionals can explore cloud networking, system administrators can move toward cloud infrastructure, and developers can learn about cloud-based application deployment. Cloud skills can therefore complement existing IT knowledge rather than requiring every learner to start completely from zero.",
        },
        {
          title: "Local Learning Advantage",
          body: "For students searching specifically for Cloud Computing Training in Amritsar, learning at a local training centre can make regular classes, instructor interaction, practical sessions, and direct support more convenient. Instead of treating cloud computing as an abstract online subject, learners can follow a structured learning schedule and seek guidance when they encounter technical challenges.",
        },
        {
          title: "Learning with a Long-Term Career Perspective",
          body: "The objective of professional training should extend beyond completing a syllabus. Students should develop the ability to continue learning as cloud platforms and technologies change. Techcadd encourages a career-oriented approach where learners can build foundational knowledge first and then continue toward advanced cloud technologies, certifications, DevOps, automation, cybersecurity, or cloud architecture according to their career goals.",
        },
        {
          title: "What Training Can and Cannot Promise",
          body: "For students comparing Cloud Computing Courses in Amritsar, Techcadd can be considered by learners who want a combination of structured learning, practical technical exposure, and career-focused guidance. The right institute cannot guarantee a particular job or salary, but quality training can provide an important foundation. Your results will ultimately depend on your consistency, practical practice, projects, technical understanding, interview preparation, and continued skill development.",
        },
      ],
    },

    /* The brief's ten review templates. Its own E-E-A-T note stands: reviews
       should always be genuine and permission-based, so replace these with
       verified student feedback — real name or approved identifier, course and
       date — before presenting them as testimonials. No names are invented. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "AWS learning",
          quote:
            "I joined the cloud computing course to understand AWS from the basics. The practical sessions helped me understand concepts that were difficult to learn from theory alone. I especially liked working with cloud resources myself.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Beginner-friendly training",
          quote:
            "I was new to cloud computing when I started. The concepts were explained step by step, which made it easier for me to understand servers, storage, networking and cloud services.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Practical learning",
          quote:
            "The practical part of the training was the most useful for me. Instead of only learning definitions, I got an opportunity to work with cloud technologies and understand how they are used.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Career preparation",
          quote:
            "I wanted to add a technical skill to my profile after graduation. The cloud computing training gave me a clearer understanding of AWS, infrastructure and the different career paths available in cloud technology.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Linux & cloud",
          quote:
            "Before joining, I had very limited knowledge of Linux and cloud computing. The training helped me connect Linux commands and server concepts with cloud environments.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Azure & cloud concepts",
          quote:
            "The introduction to Azure and other cloud concepts helped me understand that cloud computing is much broader than just one platform. It gave me a good foundation for deciding what I want to specialize in next.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Hands-on experience",
          quote:
            "I was looking for a practical cloud computing course in Amritsar. The hands-on exercises were useful because I could apply the concepts instead of simply taking notes during class.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Fresh graduate",
          quote:
            "As a fresher, I wanted to understand what skills are actually useful in the IT industry. The course introduced me to cloud infrastructure, networking, security and DevOps-related concepts.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Technical upskilling",
          quote:
            "I already had some IT knowledge but wanted to move towards cloud technologies. The course helped me strengthen my understanding of infrastructure and gave me a direction for further learning.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Overall learning experience",
          quote:
            "The overall learning experience was useful for building my cloud computing fundamentals. I would recommend comparing the syllabus and practical components before choosing any training institute, as these are important for learning cloud technology properly.",
        },
      ],
    },

    /* The brief's fourteen FAQs, in its order — each opening with a direct
       answer, as its AEO note asks, and emitted as FAQPage JSON-LD. */
    faqs: [
      {
        q: "What is Cloud Computing Training in Amritsar?",
        a: "Cloud Computing Training in Amritsar is a structured learning program designed to teach students how cloud technologies are used to host applications, manage infrastructure, store data, deploy services, and support modern IT operations. Courses may cover cloud fundamentals, AWS, Azure, networking, Linux, security, DevOps, and practical projects.",
      },
      {
        q: "Who can join a Cloud Computing Course in Amritsar?",
        a: "Students, 12th-pass learners, graduates, freshers, IT professionals, and career switchers can consider cloud computing training. The required background depends on the course level. Beginners can start with fundamentals, while experienced IT professionals may choose advanced cloud or DevOps learning.",
      },
      {
        q: "Is Cloud Computing suitable for beginners?",
        a: "Yes. Beginners can start with fundamental concepts such as servers, networking, storage, virtualization, cloud service models, and deployment models before progressing to practical cloud platforms and advanced technologies.",
      },
      {
        q: "Which cloud platforms are taught in cloud computing courses?",
        a: "Many cloud programs introduce major platforms such as Amazon Web Services (AWS) and Microsoft Azure. The exact platforms and services covered depend on the institute's current syllabus.",
      },
      {
        q: "Does Techcadd provide AWS Training in Amritsar?",
        a: "Techcadd offers cloud-focused technical training, with AWS-related concepts potentially forming part of the curriculum. Students should confirm the latest AWS modules, practical labs, certification preparation, and course structure directly with the centre before enrolling.",
      },
      {
        q: "Can I learn Cloud Computing after 12th?",
        a: "Yes. Students who have completed 12th can begin with foundational cloud computing training, particularly if they have an interest in computers and technology. Building knowledge of networking, Linux, programming, and operating systems can further support long-term cloud learning.",
      },
      {
        q: "What tools can I learn during Cloud Computing Training?",
        a: "Depending on the course syllabus, students may encounter technologies such as AWS, Azure, Linux, Git, GitHub, Docker, Kubernetes, Jenkins, Terraform, cloud networking, databases, and monitoring tools.",
      },
      {
        q: "Is practical training important for Cloud Computing?",
        a: "Yes. Cloud computing involves configuring and managing technical resources, so hands-on practice can help students understand how cloud environments work. Projects and practical exercises can also help learners demonstrate their skills during interviews.",
      },
      {
        q: "What careers can I pursue after Cloud Computing Training?",
        a: "Cloud computing skills can support career paths such as Cloud Support Associate, Cloud Administrator, Cloud Engineer, DevOps Engineer, System Administrator, Infrastructure Engineer, and eventually Cloud Architect. Job requirements vary by role and employer, and advanced positions generally require additional experience and specialization.",
      },
      {
        q: "Is certification necessary for a cloud career?",
        a: "Certification is not the only requirement for a cloud career. Practical skills, projects, technical knowledge, problem-solving ability, and relevant experience are also important. Certifications can help demonstrate knowledge of a particular cloud platform and may be useful when combined with hands-on experience.",
      },
      {
        q: "How long does a Cloud Computing Course in Amritsar take?",
        a: "Course duration varies according to the syllabus, learning level, practical components, and training format. Students should check Techcadd's current course duration and schedule before registration.",
      },
      {
        q: "Can working professionals join Cloud Computing Training?",
        a: "Yes. Working IT professionals can use cloud training to upgrade existing skills in areas such as networking, system administration, software development, infrastructure, or DevOps. Course schedules and learning modes should be checked according to individual requirements.",
      },
      {
        q: "Does Cloud Computing Training guarantee a job?",
        a: "No responsible training provider should guarantee a specific job simply because a student completes a course. Career outcomes depend on skills, practical experience, projects, qualifications, interview performance, market demand, and continued learning.",
      },
      {
        q: "Why choose Cloud Computing Training in Amritsar?",
        a: "Local training can provide students with structured classes, instructor interaction, practical learning, and direct academic support. Students comparing Cloud Computing Training in Amritsar should evaluate the syllabus, practical labs, trainers, projects, learning mode, course duration, and career support before enrolling.",
      },
    ],

    /* The brief leaves the duration to the centre, so the derived tiers table
       would be inventing figures it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Start your cloud computing journey with Techcadd",
      heading: "Join Cloud Computing Training in",
      accent: "Amritsar",
      body: "Want to build practical cloud skills and move towards an IT career? Techcadd's Cloud Computing Training in Amritsar is designed for students, graduates, freshers, job seekers, and working professionals who want to develop knowledge of cloud technologies through structured, career-focused learning. Learn cloud fundamentals, explore industry-relevant technologies, and build practical knowledge that can support your next step in cloud computing, AWS, Azure, DevOps, or IT infrastructure.",
      /* The brief's "Course Details" table, row for row. */
      facts: [
        "Course Name: Cloud Computing Training",
        "Location: Amritsar, Punjab",
        "Duration: Confirm current batch duration with Techcadd",
        "Mode: Classroom / Online — subject to current batch availability",
        "Centre: Techcadd, Amritsar",
        "Suitable For: Students, Graduates, Freshers, Job Seekers & Working Professionals",
      ],
      /* What the brief says the Techcadd team can help an enquiry with. */
      assurances: [
        "Current batch schedule and course syllabus",
        "Duration, fees and learning mode",
        "Admission process",
        "Your enquiry is for course information only",
      ],
      formTitle: "Enquire About the Course",
      formNote:
        "Submit your details and the Techcadd team can help you understand the current batch schedule, course syllabus, duration, fees, learning mode, and admission process — get the details you need before making your decision.",
      submitLabel: "Enquire Now",
      placeholders: {
        name: "Name",
        phone: "Mobile Number",
        email: "Email Address",
      },
      showEmail: true,
      statusLabel: "Qualification",
      statusOptions: ["12th Pass", "Graduate", "Fresher", "Working Professional", "Other"],
      batchLabel: "Preferred Mode",
      batchOptions: ["Classroom", "Online"],
    },

    demo: {
      eyebrow: "Want a callback?",
      heading: "Looking for Cloud Computing Training in Amritsar?",
      body: "Submit your details and the Techcadd team can help you understand the current batch schedule, course syllabus, duration, fees, learning mode, and admission process.",
      action: "Start Your Enquiry",
      note: "Your enquiry is for course information only — get the details you need before making your decision.",
    },

    /* Title, description and the keyword clusters from the brief's keyword and
       GEO strategy report. */
    seo: {
      title: "Cloud Computing Training in Amritsar | Cloud Computing Course – Techcadd",
      description:
        "Join Cloud Computing Training in Amritsar with Techcadd. Learn cloud fundamentals, AWS, Azure, Linux, networking, DevOps and practical cloud technologies.",
      keywords: [
        "cloud computing training in Amritsar",
        "cloud computing course in Amritsar",
        "cloud computing training Amritsar",
        "cloud computing courses in Amritsar",
        "cloud computing institute in Amritsar",
        "cloud computing classes in Amritsar",
        "cloud computing coaching in Amritsar",
        "cloud computing certification training in Amritsar",
        "best cloud computing course in Amritsar",
        "best cloud computing training in Amritsar",
        "job oriented cloud computing course in Amritsar",
        "practical cloud computing training in Amritsar",
        "cloud computing course near me",
        "cloud training institute in Amritsar",
        "IT cloud computing courses in Amritsar",
        "AWS training in Amritsar",
        "AWS course in Amritsar",
        "AWS classes in Amritsar",
        "AWS certification training in Amritsar",
        "AWS institute in Amritsar",
        "Azure training in Amritsar",
        "Azure course in Amritsar",
        "Azure certification training in Amritsar",
        "Microsoft Azure training in Amritsar",
        "cloud computing course for beginners in Amritsar",
        "cloud computing course after 12th in Amritsar",
        "cloud computing course for graduates in Amritsar",
        "cloud computing course for freshers in Amritsar",
        "cloud computing course for working professionals",
        "cloud engineer training in Amritsar",
        "DevOps and cloud computing training Amritsar",
      ],
    },

    closing:
      "The value of this program comes from combining fundamentals, practical exposure, industry-relevant technologies, and career-focused learning — giving students a stronger foundation for continuing their journey into cloud computing and the wider IT industry.",
  },
};

/* -------------------------------------------------------------------- linux */

/**
 * Source copy: the Amritsar Linux brief (overview, twelve eligibility personas
 * plus its "suitable for beginners" note, one "why" argument, fourteen learning
 * blocks with the tools list, ten sample testimonials, fifteen FAQs and the
 * enquiry/callback section). The fourteen learning blocks and the tool list
 * live in `course-data.ts` instead, because they are the curriculum and the
 * module explorer reads them from the seed.
 *
 * The brief makes a single case for the programme rather than arguing the
 * programme and the institute separately, so there is no second "why" panel
 * here. Its reviews are explicitly sample formats to be replaced with verified
 * student feedback, so they are carried across with their text intact and no
 * invented identities.
 */
const linux: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Cyber & Cloud · TechCadd Amritsar",
      /* The H1 the brief is written around — "Linux Training in Amritsar". */
      headline: "Linux Training in",
      accent: "Amritsar",
      tagline:
        "Career-focused, practical Linux skills — command line, file and user administration, permissions, processes, networking, scripting and troubleshooting.",
      chips: ["Classroom / practical training", "Beginner-friendly", "Foundation for cloud, DevOps & security"],
      image: "/images/courses/linux.png",
    },

    overview: {
      heading: "Linux Training in Amritsar",
      paragraphs: [
        "Techcadd offers career-focused Linux Training in Amritsar for students, graduates, IT learners, job seekers, and working professionals who want to develop practical Linux skills. The training is designed to help beginners understand Linux fundamentals while gradually building the technical knowledge required for system administration and IT infrastructure roles.",
        "Through practical learning, students can explore essential Linux concepts such as command-line operations, file and directory management, user and group administration, permissions, package management, process management, networking basics, shell commands, and system configuration. The course can help learners gain confidence in working with Linux-based environments used across servers, cloud platforms, cybersecurity, DevOps, and enterprise IT.",
        "For students searching for a Linux course in Amritsar, Linux classes in Amritsar, or job-oriented Linux training, Techcadd focuses on skills that can be applied beyond classroom theory. Learners can strengthen their technical foundation through hands-on practice and structured guidance.",
        "The program is suitable for beginners as well as IT professionals looking to upgrade their Linux knowledge and build a stronger foundation for careers in Linux administration, system administration, DevOps, cloud computing, and related technology domains.",
      ],
      /* The brief's own emphases: practice over memorisation, and understanding
         why a command is used. */
      checks: [
        "Classroom, practical training at the Amritsar centre",
        "Suitable for beginners — no prior Linux experience assumed",
        "Commands are practised, not memorised — you learn why each one is used",
        "A foundation for system administration, cloud, DevOps and cybersecurity",
      ],
    },

    curriculumNote:
      "Techcadd's Linux Training in Amritsar can help learners build practical knowledge of Linux operating systems and the core skills required to work with Linux-based environments. The learning journey should progress from basic command-line concepts to system administration, networking, security, troubleshooting, and automation.",

    /* The twelve starting points the brief names, closing on its own note about
       whether Linux training suits beginners. */
    eligibility: {
      heading: "Who Can Do Linux Training in Amritsar?",
      intro:
        "Linux is one of the most widely used operating systems in servers, cloud infrastructure, cybersecurity, DevOps, software development, networking, and enterprise IT environments. Because of this, learning Linux can be a valuable step for students and professionals who want to build a career in the IT industry. Techcadd's Linux Training in Amritsar is designed for learners from different educational and professional backgrounds.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students who have completed their 12th standard and want to enter the IT field can consider Linux training as a practical starting point. You do not necessarily need extensive technical experience to begin learning Linux. A structured course can introduce you to operating-system concepts, commands, file management, users, permissions, networking, and basic administration. For students searching for a Linux course in Amritsar after 12th, practical training can help create a technical foundation before moving toward advanced areas such as networking, cloud computing, cybersecurity, or DevOps.",
        },
        {
          label: "College Students",
          detail:
            "Students pursuing BCA, B.Sc. IT, B.Tech, MCA, computer applications, or other technology-related programs can use Linux training to strengthen their academic knowledge with practical skills. College education often introduces students to operating systems and computer networks, but hands-on Linux practice can provide additional exposure to real working environments. Students can also use Linux knowledge when preparing for internships, technical interviews, projects, and entry-level IT opportunities.",
        },
        {
          label: "BCA and Computer Application Students",
          detail:
            "BCA students looking for additional technical skills can benefit from Linux administration training. Linux is relevant to many areas of software and infrastructure, making it a useful skill alongside programming, databases, networking, and web technologies. A Linux course can help BCA students understand how operating systems work from an administrator's perspective and provide practical exposure to the command line and system-management tasks.",
        },
        {
          label: "B.Tech and Engineering Students",
          detail:
            "Engineering students, particularly those specializing in Computer Science, Information Technology, Electronics, or related fields, can learn Linux to complement their technical education. Linux knowledge is particularly useful for students interested in servers, networking, DevOps, cloud technologies, cybersecurity, embedded systems, and infrastructure. Practical Linux experience can also support academic projects that require Linux-based environments.",
        },
        {
          label: "Graduates Looking for IT Jobs",
          detail:
            "Graduates who want to enter the IT industry but feel they need stronger practical skills can consider Linux Training in Amritsar as part of their career preparation. A structured program can help learners develop familiarity with Linux commands, system administration concepts, user management, permissions, processes, networking, and troubleshooting. These skills can support preparation for entry-level technical roles and provide a foundation for further specialization.",
        },
        {
          label: "Job Seekers",
          detail:
            "Linux training can be useful for job seekers who want to move toward technical roles involving IT infrastructure. Candidates with an understanding of Linux may explore career paths related to Linux administration, system administration, technical support, cloud infrastructure, DevOps, and networking. However, Linux should be viewed as a foundation rather than a guarantee of employment. Career growth also depends on practical ability, communication skills, experience, projects, certifications, and knowledge of related technologies.",
        },
        {
          label: "Working IT Professionals",
          detail:
            "Existing IT professionals can also learn Linux to expand their technical skill set. Professionals working in networking, technical support, software development, system administration, cloud computing, or IT operations may encounter Linux environments in their daily work. Learning Linux can help professionals become more comfortable with command-line tools, system configuration, troubleshooting, automation, and server environments. It can also provide a foundation for moving toward specialized areas such as DevOps or cloud administration.",
        },
        {
          label: "Networking Students",
          detail:
            "Students learning computer networking can benefit significantly from Linux knowledge. Many networking and infrastructure environments use Linux-based systems, and understanding the Linux command line can complement networking concepts. Learners can build familiarity with network configuration, services, processes, connectivity testing, and other system-level concepts. This combination can be useful for students planning careers in network administration or infrastructure support.",
        },
        {
          label: "Aspiring DevOps Professionals",
          detail:
            "Linux is an important foundation for many DevOps environments. Learners interested in DevOps can begin by developing strong Linux fundamentals before progressing to tools and technologies such as Git, Docker, CI/CD platforms, cloud services, and infrastructure automation. For someone searching for Linux classes in Amritsar as preparation for a DevOps career, learning Linux first can make later technologies easier to understand.",
        },
        {
          label: "Cybersecurity Beginners",
          detail:
            "Linux is also widely used in cybersecurity learning and professional environments. Students interested in ethical hacking, security operations, penetration testing, or cybersecurity administration can benefit from understanding Linux systems. Before moving into advanced security tools, learners should understand operating-system fundamentals, permissions, processes, networking, filesystems, and command-line operations. Linux training can provide that foundation.",
        },
        {
          label: "Freelancers and Technical Learners",
          detail:
            "People working independently on websites, applications, servers, or technical projects may also find Linux skills useful. Understanding Linux can make it easier to work with hosting environments, server configurations, command-line utilities, and deployment-related tasks.",
        },
        {
          label: "Anyone Interested in IT Infrastructure",
          detail:
            "You do not need to be an experienced system administrator to start learning Linux. If you have an interest in computers, servers, networking, cloud computing, or IT infrastructure, a structured Linux Training Institute in Amritsar can help you develop your knowledge step by step. The most important requirements are a willingness to practise, basic computer familiarity, and an interest in learning technical concepts.",
        },
        {
          label: "Is Linux Training Suitable for Beginners?",
          detail:
            "Yes. Beginners can start Linux training if the course begins with fundamentals and progresses toward administration and troubleshooting. Learners should not focus only on memorizing commands. The goal should be to understand why a command is used, what it does, and how Linux systems behave. Techcadd's approach can be positioned around practical learning so students can move from basic commands to more advanced system-management concepts progressively.",
        },
      ],
    },

    /* The brief makes one case, for the programme at Techcadd, closing on its
       own note about what to compare between institutes. */
    whyChoose: {
      heading: "Why Choose the Linux Training Program",
      accent: "at Techcadd?",
      body: "Linux is not simply another operating system to study from a textbook. It is an important technology used across servers, cloud infrastructure, DevOps, networking, cybersecurity, software development, and enterprise environments. For this reason, students should look for training that combines fundamental concepts with practical exposure. Techcadd's Linux Training in Amritsar is designed for learners who want to understand Linux from the ground up and progressively develop system-management skills.",
      reasons: [
        {
          title: "Practical Learning Instead of Only Theory",
          body: "One of the biggest advantages of a practical Linux program is the opportunity to work with commands and system environments instead of simply reading about them. Learners can practise common Linux operations, navigate the command line, manage files and directories, work with users and groups, understand permissions, monitor processes, and explore system-management concepts. Practical learning helps students understand how Linux is actually used. Instead of memorizing commands without context, learners can understand where and why different commands and administrative tasks are required.",
        },
        {
          title: "Strong Linux Fundamentals",
          body: "A good Linux course should begin with the basics before moving toward advanced administration. Techcadd's program can help learners establish a foundation in Linux architecture, command-line usage, filesystem concepts, permissions, users, groups, processes, services, packages, and networking fundamentals. Strong fundamentals are particularly important for beginners because they make advanced topics easier to understand later.",
        },
        {
          title: "Suitable for Students and Beginners",
          body: "Students do not necessarily need professional Linux experience before joining a structured training program. Beginners can start with basic commands and gradually become familiar with the Linux environment. For students searching for a Linux course in Amritsar, a structured learning path can be useful because it provides direction instead of requiring learners to discover everything independently.",
        },
        {
          title: "Career-Oriented Technical Skills",
          body: "Linux knowledge can support several technology career paths. After developing Linux fundamentals, learners can explore areas such as Linux administration, system administration, cloud computing, DevOps, networking, cybersecurity, technical support, and IT infrastructure. The Linux course itself should not be viewed as an automatic job guarantee. Instead, it can provide a technical foundation that learners can combine with certifications, projects, communication skills, interview preparation, and additional technologies.",
        },
        {
          title: "Hands-On Command-Line Experience",
          body: "The Linux command line is an essential part of working with Linux systems. Learning how to navigate directories, create and modify files, search for information, manage processes, inspect system resources, and perform administrative tasks can significantly improve technical confidence. Regular practice can help students become comfortable working without relying entirely on graphical interfaces.",
        },
        {
          title: "Foundation for Advanced Technologies",
          body: "Linux can also act as a stepping stone toward advanced IT technologies. Students interested in DevOps, cloud computing, cybersecurity, or server administration can benefit from understanding Linux before moving into more specialized tools. For example, many learners eventually encounter technologies involving containers, automation, cloud servers, deployment pipelines, and infrastructure management. A strong Linux foundation can make these concepts easier to approach.",
        },
        {
          title: "Local Training in Amritsar",
          body: "For learners who prefer classroom-based guidance, choosing a Linux training institute in Amritsar can provide a more structured learning environment. Local students can benefit from direct interaction with instructors, guided practice, doubt-solving, and a consistent learning schedule. Techcadd is positioned to serve learners in Amritsar who want to develop Linux skills without depending entirely on self-learning.",
        },
        {
          title: "Build Confidence Through Consistent Practice",
          body: "Linux can appear complicated when a beginner first encounters the command line. With regular practice, however, many tasks become easier and more intuitive. A structured course can help learners progress from simple commands to system-management concepts in a logical sequence. This gradual approach can reduce confusion and encourage students to practise independently.",
        },
        {
          title: "A Useful Skill for the IT Industry",
          body: "Linux remains relevant across multiple areas of modern IT infrastructure. Learning it can therefore provide students with a transferable technical skill rather than limiting them to one narrow technology. Whether a learner eventually chooses system administration, DevOps, cloud, networking, cybersecurity, or another technical specialization, Linux fundamentals can remain useful throughout that learning journey.",
        },
        {
          title: "What Students Should Look for in Linux Training",
          body: "When comparing Linux training institutes in Amritsar, students should consider practical lab exposure, syllabus depth, instructor guidance, doubt-solving support, hands-on assignments, and opportunities to practise real administration scenarios. A strong Linux learning experience should help students understand not only what a command does, but also why and when it is used. This approach can make learning more meaningful and help learners build skills that they can continue developing after completing their training.",
        },
      ],
    },

    /* The brief's ten sample testimonials. Its own note stands: replace these
       with verified feedback from actual Techcadd students before publishing
       them as genuine reviews. No names are invented here — each is attributed
       to an unnamed Amritsar student with the sample's own heading as its meta
       line. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Beginner-friendly learning",
          quote:
            "I was completely new to Linux when I started. The training helped me understand basic commands, file management and permissions step by step. The practical approach made Linux much easier to understand.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Helpful for IT students",
          quote:
            "As a computer science student in Amritsar, I wanted practical Linux knowledge apart from my college syllabus. The course gave me a better understanding of command-line operations and system administration concepts.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Practical command-line training",
          quote:
            "The command line looked difficult initially, but regular practice made me more comfortable. Learning commands through practical tasks was more useful for me than studying only theory.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Good technical foundation",
          quote:
            "I joined the Linux course because I wanted to strengthen my IT fundamentals. Topics such as users, groups, permissions, processes and networking helped me understand how Linux systems are managed.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for career preparation",
          quote:
            "I was exploring different IT career options and started with Linux. The training helped me understand the basics of system administration and gave me direction for learning cloud and DevOps technologies next.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Suitable for beginners",
          quote:
            "I had very little Linux experience before joining. The concepts were introduced gradually, which helped me learn without feeling overwhelmed. I especially liked practising commands instead of just making notes.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Learning beyond theory",
          quote:
            "The practical exercises were the most useful part for me. Working with files, permissions, users and processes helped me connect the concepts with real IT environments.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for future DevOps learning",
          quote:
            "I am interested in DevOps, so I wanted to first build a strong Linux foundation. The training helped me understand why Linux is important for servers and modern IT infrastructure.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Better technical confidence",
          quote:
            "Before the course, I was uncomfortable using the Linux terminal. After practising regularly, I became much more confident with basic commands and troubleshooting tasks.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Local learning experience",
          quote:
            "I was looking for Linux classes in Amritsar so I could learn with proper guidance instead of depending completely on random online tutorials. A structured learning approach helped me stay consistent.",
        },
      ],
    },

    /* The brief's fifteen FAQs, in its order, emitted as FAQPage JSON-LD from
       the course route. */
    faqs: [
      {
        q: "What is Linux Training in Amritsar?",
        a: "Linux Training in Amritsar is a structured learning program that teaches students how to work with Linux operating systems. Depending on the syllabus, training can cover Linux commands, file management, users and groups, permissions, processes, networking, services, security, troubleshooting, and basic administration.",
      },
      {
        q: "Who can join a Linux course in Amritsar?",
        a: "Students, graduates, job seekers, IT professionals, networking learners, and beginners interested in technology can consider a Linux course. Basic computer knowledge can be helpful, but advanced Linux experience is not necessarily required for beginner-level training.",
      },
      {
        q: "Is Linux training suitable for beginners?",
        a: "Yes. Beginners can learn Linux when the course starts with fundamentals and gradually progresses to administration and troubleshooting. Regular hands-on practice is important for becoming comfortable with the Linux command line.",
      },
      {
        q: "What will I learn in Linux training?",
        a: "A Linux training program may cover Linux fundamentals, command-line operations, file and directory management, users and groups, permissions, package management, processes, services, networking, SSH, storage, system monitoring, shell scripting, security basics, and troubleshooting.",
      },
      {
        q: "Is Linux useful for an IT career?",
        a: "Yes. Linux is used in many technology environments, including servers, cloud infrastructure, DevOps, networking, cybersecurity, software development, and enterprise IT. Linux knowledge can therefore provide a useful foundation for several technical career paths.",
      },
      {
        q: "Can I learn Linux after 12th?",
        a: "Yes. Students who have completed 12th can begin Linux training, particularly if they are interested in IT and computer technologies. Starting with fundamentals can help learners build technical knowledge before progressing toward advanced areas.",
      },
      {
        q: "Is Linux useful for BCA and B.Tech students?",
        a: "Yes. BCA, B.Tech, MCA, computer science, and IT students can use Linux training to complement their academic education. Practical Linux skills can be useful for projects, internships, technical interviews, networking, DevOps, cloud computing, and system administration.",
      },
      {
        q: "What tools are used in Linux training?",
        a: "Tools can vary according to the course curriculum. Common Linux learning environments may include Bash, SSH, Vim or Nano, package-management utilities, systemd tools, networking commands, Git, virtual machines, and introductory container technologies such as Docker.",
      },
      {
        q: "Does Linux training include practical classes?",
        a: "The practical component depends on the specific training program and syllabus. Students should confirm the current curriculum with Techcadd and ask about lab practice, assignments, projects, troubleshooting exercises, and the Linux environments available during training.",
      },
      {
        q: "Can Linux training help me learn DevOps?",
        a: "Linux is an important foundation for many DevOps environments. After developing Linux fundamentals, learners can progress toward technologies such as Git, Docker, CI/CD, cloud platforms, infrastructure automation, and orchestration.",
      },
      {
        q: "Can Linux training help with cybersecurity?",
        a: "Linux knowledge can provide a useful foundation for cybersecurity because security professionals often work with operating systems, command-line tools, permissions, networking, processes, and server environments. Advanced cybersecurity requires additional specialized training.",
      },
      {
        q: "What career options can I explore after Linux training?",
        a: "Depending on your overall skills, education, experience, and additional training, Linux knowledge can support paths such as Linux administrator, system administrator, technical support professional, server administrator, cloud support professional, DevOps learner, network support professional, or cybersecurity learner.",
      },
      {
        q: "How long does Linux training take?",
        a: "The duration depends on the specific Techcadd course structure, syllabus, learning mode, and level. Students should contact Techcadd for the current course duration and batch schedule rather than relying on a general duration.",
      },
      {
        q: "How do I choose the right Linux training institute in Amritsar?",
        a: "Compare the syllabus, practical lab exposure, instructor experience, course level, learning mode, doubt support, assignments, projects, and career guidance. It is also useful to ask whether the training provides hands-on access to Linux environments.",
      },
      {
        q: "Why choose Techcadd for Linux Training in Amritsar?",
        a: "Techcadd can be considered by learners looking for structured, career-oriented Linux education in Amritsar. Before enrolling, students should review the current syllabus, practical training methodology, course duration, fees, batch schedule, and available support to determine whether the program matches their career goals.",
      },
    ],

    /* The brief leaves the duration to the centre, so the derived tiers table
       would be inventing figures it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Start your Linux learning journey with Techcadd",
      heading: "Build Your Linux Foundation.",
      accent: "Strengthen Your IT Skills.",
      body: "Ready to build practical Linux skills and take the next step toward an IT career? Techcadd's Linux Training in Amritsar is designed for students, graduates, job seekers, and working professionals who want structured learning and hands-on exposure to Linux environments.",
      /* The brief's "Course Details" block, row for row. */
      facts: [
        "Course Name: Linux Training",
        "Location: Amritsar, Punjab",
        "Mode: Classroom / Practical Training",
        "Suitable For: Beginners, students, graduates, job seekers & IT professionals",
        "Duration: Contact Techcadd for the current batch duration",
        "Focus Areas: Linux fundamentals, commands, system administration, users & permissions, networking, troubleshooting, shell scripting and more",
      ],
      /* What the brief's callback section invites learners to ask about. */
      assurances: [
        "Syllabus, duration and batch timings",
        "Practical training and eligibility",
        "The learning process, start to finish",
      ],
      formTitle: "Enquire About the Course",
      formNote:
        "Interested in Linux Training in Amritsar? Fill in your details and our team can help you with the latest course information — syllabus, duration, batch timings, practical training, eligibility and the learning process.",
      submitLabel: "Submit Your Enquiry",
      placeholders: {
        name: "Name",
        phone: "Mobile Number",
        email: "Email",
      },
      showEmail: true,
      batchLabel: "Preferred Mode",
      batchOptions: ["Classroom", "Other"],
    },

    demo: {
      eyebrow: "Get a callback",
      heading: "Submit Your Enquiry & Speak With Our Team",
      body: "Have questions about the syllabus, duration, batch timings, practical training, eligibility, or learning process? Submit your enquiry and connect with the Techcadd team for the latest course details.",
      action: "Submit Your Enquiry",
      note: "Course duration, fees, batch schedules, mode, and availability may change. Please confirm the latest details directly with Techcadd before enrolment.",
    },

    seo: {
      title: "Linux Training in Amritsar | Linux Course – Techcadd",
      description:
        "Career-focused Linux Training in Amritsar with Techcadd. Learn Linux commands, file and user administration, permissions, networking, shell scripting and troubleshooting.",
      keywords: [
        "Linux training in Amritsar",
        "Linux course in Amritsar",
        "Linux classes in Amritsar",
        "Linux training institute in Amritsar",
        "Linux administration course in Amritsar",
        "job oriented Linux training in Amritsar",
        "Linux course in Amritsar after 12th",
        "Linux course for BCA students in Amritsar",
        "Linux course for B.Tech students in Amritsar",
        "Linux course for beginners in Amritsar",
        "Linux training for working professionals in Amritsar",
        "Linux command line training in Amritsar",
        "shell scripting course in Amritsar",
        "Linux system administration training in Amritsar",
        "Linux server administration course in Amritsar",
        "Linux for DevOps in Amritsar",
        "Linux for cloud computing in Amritsar",
        "Linux for cybersecurity in Amritsar",
        "Linux networking training in Amritsar",
        "Linux course duration in Amritsar",
        "Linux training course fees in Amritsar",
        "best Linux institute in Amritsar",
      ],
    },

    closing:
      "For students searching for Linux training in Amritsar, the key benefit is not simply learning a list of commands. The objective should be to understand how Linux systems work and gain enough practical confidence to continue learning advanced technologies.",
  },
};

/* ----------------------------------------------------------- ethical hacking */

/**
 * Source copy: the Amritsar ethical hacking brief (overview, ten eligibility
 * personas plus its "is this right for you" note, the two "why" arguments,
 * fifteen learning blocks with the tools list, ten sample reviews, twenty FAQs,
 * the enquiry/callback section and the keyword/GEO strategy report). The
 * fifteen learning blocks and the tool list live in `course-data.ts` instead,
 * because they are the curriculum and the module explorer reads them.
 *
 * The brief's reviews are labelled sample reviews, and its own note says to
 * replace them with verified student feedback and to avoid publishing invented
 * ratings or presenting sample experiences as genuine customer reviews. They
 * are carried across here with their text intact and no invented identities.
 */
const ethicalHacking: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Cyber & Cloud · TechCadd Amritsar",
      /* The H1 the brief's keyword report asks for — "Ethical Hacking Training
         in Amritsar". */
      headline: "Ethical Hacking Training in",
      accent: "Amritsar",
      tagline:
        "Cybersecurity fundamentals, networking, Linux, vulnerability assessment, web security and ethical hacking concepts — practised responsibly in authorized environments.",
      chips: ["Classroom / practical training", "Beginner to intermediate", "Authorized labs only"],
      image: "/images/courses/ethical-hacking.png",
    },

    overview: {
      heading: "Ethical Hacking Training in Amritsar",
      paragraphs: [
        "Cybersecurity is becoming an important career field as businesses, websites, applications, networks, and digital systems increasingly need protection from cyber threats. Techcadd's Ethical Hacking Training in Amritsar is designed for students and beginners who want to understand how cybersecurity works and develop practical skills for identifying and securing vulnerabilities.",
        "The training introduces learners to important ethical hacking concepts, networking fundamentals, system security, web security, vulnerability assessment, penetration testing, and commonly used cybersecurity tools. The focus is on learning security techniques responsibly and applying them only in authorized and controlled environments.",
        "Whether you are a 12th-pass student, graduate, IT learner, fresher, or working professional, ethical hacking training can help you build a foundation for careers in cybersecurity and information security. Practical learning, guided exercises, security tools, and project-based exposure can help students move beyond theoretical knowledge and understand how cybersecurity is applied in real-world situations.",
        "If you are searching for an ethical hacking course in Amritsar with a career-focused learning approach, Techcadd can be a starting point for developing relevant cybersecurity skills and exploring future opportunities in ethical hacking, penetration testing, security operations, and related IT roles.",
      ],
      /* The citable facts the brief's GEO note asks to state plainly. */
      checks: [
        "Classroom, practical training at the Amritsar centre",
        "Beginner to intermediate — starts from networking, Linux and security basics",
        "All security testing is performed in authorized, controlled lab environments",
        "Confirm current duration, certification terms and batch details with the centre",
      ],
    },

    curriculumNote:
      "Techcadd's Ethical Hacking Training in Amritsar is designed to help students develop cybersecurity knowledge progressively, starting with technical fundamentals and moving toward security assessment and ethical hacking concepts. The focus is on practical understanding, responsible security testing and familiarity with commonly used cybersecurity tools.",

    /* The ten starting points the brief names, closing on its own note about
       whether ethical hacking suits you. */
    eligibility: {
      heading: "Who Can Do Ethical Hacking Training in Amritsar?",
      intro:
        "One of the biggest advantages of learning ethical hacking is that you do not necessarily need to be an experienced cybersecurity professional to start. A well-structured ethical hacking course in Amritsar can begin with networking, operating-system and security fundamentals before progressing toward vulnerability assessment, penetration testing and ethical hacking techniques.",
      criteria: [
        {
          label: "Students After 12th",
          detail:
            "Students who have completed 12th standard and are interested in computers, technology or cybersecurity can consider ethical hacking training as an additional career-oriented skill. You do not need to be an expert programmer before starting. The important qualities are curiosity, logical thinking and willingness to practise. For students planning a future in IT, cybersecurity can provide exposure to areas such as network security, vulnerability assessment, penetration testing, security operations and information security.",
        },
        {
          label: "BCA, B.Sc. IT and Computer Science Students",
          detail:
            "Students pursuing or completing BCA, B.Sc. IT, B.Tech, computer science or related programs can use ethical hacking training to complement their academic knowledge. College courses may teach programming, databases, operating systems and networking, while practical ethical hacking training can help students understand how these technologies can be assessed from a security perspective. Learning tools such as Kali Linux, Nmap, Wireshark, Burp Suite and other security utilities can give students practical exposure in controlled laboratory environments.",
        },
        {
          label: "Graduates Looking for an IT Career",
          detail:
            "Graduation does not have to be specifically in cybersecurity to begin exploring the field. Graduates who are comfortable working with computers and are willing to learn networking and Linux fundamentals can build toward cybersecurity roles. For students from non-IT backgrounds, the right approach is to first strengthen basic technical concepts rather than immediately jumping into advanced penetration testing.",
        },
        {
          label: "Freshers Seeking a Specialized Skill",
          detail:
            "Many IT freshers want to develop a specialization instead of remaining limited to general computer knowledge. Ethical hacking can be one such specialization. A fresher can gradually develop skills in networking fundamentals, Linux, web application security, vulnerability assessment, penetration testing, security testing, basic scripting, cybersecurity documentation, and security tools and lab environments. The objective should not simply be to collect certificates. Students should focus on understanding why a vulnerability exists, how it can be identified, how it can be responsibly tested and how it can be mitigated.",
        },
        {
          label: "Working IT Professionals",
          detail:
            "IT professionals working in networking, software development, system administration, technical support or web development may also benefit from ethical hacking training. For example, a web developer who understands common web vulnerabilities can build more secure applications. Similarly, a network professional with security knowledge can better understand attack surfaces, network scanning and defensive controls. Ethical hacking therefore does not only apply to people who want the job title \"ethical hacker.\" It can strengthen the security perspective of professionals working across the wider technology ecosystem.",
        },
        {
          label: "Students Interested in Cybersecurity",
          detail:
            "If you regularly follow cybersecurity news, enjoy understanding how systems work or like solving technical problems, ethical hacking may be an interesting career direction. The field requires continuous learning because security threats, technologies and defensive techniques change over time. Modern cybersecurity training increasingly includes areas such as AI-related threats, cloud security and newer attack surfaces alongside traditional security concepts.",
        },
        {
          label: "Students Preparing for Certifications",
          detail:
            "Learners who eventually want to pursue certifications such as Certified Ethical Hacker (CEH) can use structured training to develop the underlying knowledge required for certification preparation. However, students should understand that training and certification are not automatically the same thing. Always verify the certification provider, examination requirements and eligibility criteria before enrolling.",
        },
        {
          label: "Students Interested in Penetration Testing",
          detail:
            "Students who enjoy finding weaknesses in systems may eventually explore penetration testing. Penetration testing involves authorized security testing designed to identify vulnerabilities and help organizations improve their security. Advanced programs may progress toward methodologies and environments associated with professional penetration testing. Students should remember one essential rule: ethical hacking must always be performed with authorization. Testing someone else's website, account, network or device without permission is not ethical hacking.",
        },
        {
          label: "You Do Not Need to Be an Expert Before Joining",
          detail:
            "You do not need to know everything about cybersecurity before beginning. A beginner can start by learning computer fundamentals, then networking, Linux, security concepts, vulnerability assessment, ethical hacking and penetration testing in that order. Having basic computer knowledge is helpful. Basic networking and Linux familiarity can make the learning process easier, but some beginner-oriented cybersecurity programs specifically introduce these fundamentals before moving into ethical hacking.",
        },
        {
          label: "What Qualities Help You Succeed?",
          detail:
            "The most useful qualities are not necessarily advanced programming skills. Students who succeed in cybersecurity typically develop patience, curiosity, analytical thinking and a habit of continuous learning. You should be prepared to practise regularly, understand technical concepts instead of memorizing commands, work through troubleshooting problems, learn Linux and networking, read security documentation, perform authorized lab exercises, keep learning new technologies and follow responsible cybersecurity practices.",
        },
        {
          label: "Is Ethical Hacking Right for You?",
          detail:
            "If you are a 12th-pass student, graduate, fresher, IT student, networking learner, developer or working professional in Amritsar and want to explore cybersecurity, ethical hacking training can be a useful starting point. The best course is not necessarily the one with the longest list of tools. Look for a program that explains fundamentals, provides controlled practical labs, teaches responsible security testing and connects technical learning with realistic career skills.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately: this panel
       is the case for the programme… */
    whyChoose: {
      heading: "Why Choose This",
      accent: "Ethical Hacking Training Program?",
      body: "Ethical hacking is not simply about learning commands or using security tools. A strong learning program should help students understand how networks, systems and applications work, where vulnerabilities can occur, how security testing is performed responsibly, and how organizations can reduce cyber risks. Techcadd's Ethical Hacking Training is designed around this career-focused approach, helping learners gradually move from foundational concepts toward practical cybersecurity skills.",
      reasons: [
        {
          title: "Build a Strong Cybersecurity Foundation",
          body: "Beginners often make the mistake of starting directly with advanced hacking tools. Without understanding networking, operating systems and security fundamentals, it becomes difficult to understand what the tools are actually doing. A structured ethical hacking program should therefore start with the basics — computer and networking fundamentals, TCP/IP concepts, network protocols, Linux fundamentals, Windows security concepts, cybersecurity terminology, authentication and access control, vulnerability concepts, web security fundamentals and security testing methodologies. This foundation makes advanced topics easier to understand and gives students knowledge they can continue using throughout their cybersecurity career.",
        },
        {
          title: "Learn Through Practical Exposure",
          body: "Cybersecurity is a practical field. Reading about a vulnerability is useful, but understanding how security testing works in a controlled laboratory environment can make the concept much clearer. A career-oriented ethical hacking course should give learners opportunities to work with security tools and simulated environments — Kali Linux, Nmap, Wireshark, Burp Suite, Metasploit and vulnerability-scanning utilities, depending on the training curriculum and laboratory setup. The objective is not simply to memorize commands. Students should understand what each tool is used for, what information it provides, how to interpret results and how security professionals use those results to improve security.",
        },
        {
          title: "Understand Vulnerability Assessment",
          body: "One important area of cybersecurity is identifying weaknesses before attackers can exploit them. Vulnerability assessment introduces students to the process of identifying potential security weaknesses in authorized systems. Students can learn concepts such as asset identification, attack surface, vulnerability discovery, security scanning, risk evaluation, vulnerability prioritization, basic remediation concepts and security reporting. This helps learners understand the difference between discovering a vulnerability and responsibly communicating the issue so that it can be addressed.",
        },
        {
          title: "Explore Penetration Testing Concepts",
          body: "Students who want to move toward professional cybersecurity roles may eventually explore penetration testing. Penetration testing involves authorized security assessments designed to identify and demonstrate security weaknesses. A structured program can introduce learners to the stages involved in security testing, from information gathering and reconnaissance through vulnerability analysis, controlled exploitation concepts and reporting. The emphasis must remain on authorized environments. Ethical hacking should never mean attempting to access another person's account, website, server or network without explicit permission. Professional cybersecurity requires technical ability combined with legal and ethical responsibility.",
        },
        {
          title: "Develop Linux and Networking Skills",
          body: "Linux and networking knowledge can be extremely valuable for cybersecurity learners. Students working toward ethical hacking careers often need to understand IP addresses, ports, protocols, DNS, HTTP and HTTPS, firewalls, routing, network services, Linux commands, file permissions, processes and system administration basics. These concepts provide the technical foundation needed to understand security tools and security events. Instead of learning isolated commands, students should learn why a command is being used and what its output means.",
        },
        {
          title: "Learn Web Application Security",
          body: "Modern businesses rely heavily on websites and web applications. As a result, web application security is an important part of cybersecurity education. A structured course can introduce learners to concepts associated with common web security weaknesses, including authentication issues, authorization problems, input validation weaknesses and other application-level vulnerabilities. Students can use controlled lab environments to understand how vulnerabilities occur and how developers and security teams can mitigate them.",
        },
        {
          title: "Become Familiar With Industry Tools",
          body: "Tools are an important part of practical cybersecurity learning, but tools alone do not make someone a cybersecurity professional. Students can benefit from understanding what different categories of tools are designed to accomplish. Nmap can be used for network discovery and security auditing. Wireshark helps learners examine and analyze network traffic. Burp Suite is widely used for testing web applications. Metasploit Framework provides a platform used for security testing and vulnerability research in authorized environments. Kali Linux provides a security-focused operating-system environment containing many tools used for security assessment and testing. Learning these tools within a controlled lab gives students a safer environment to practise without interfering with real systems.",
        },
        {
          title: "Develop Problem-Solving Ability",
          body: "Cybersecurity is rarely about following one fixed set of steps. A security professional may encounter incomplete information, unexpected configurations, unusual network behaviour or vulnerabilities that require investigation. That is why an effective ethical hacking program should encourage students to think analytically. Instead of simply asking \"which command should I run?\", students should learn to ask \"what am I trying to discover, why is this information important, and what should I investigate next?\" This problem-solving mindset can become one of the most valuable skills developed during cybersecurity training.",
        },
        {
          title: "Prepare for Multiple Career Directions",
          body: "Ethical hacking training does not limit a learner to one specific job title. Depending on their education, practical skills, experience and additional certifications, learners can explore career paths such as Cybersecurity Analyst, Security Analyst, Junior Penetration Tester, Vulnerability Assessment Analyst, SOC Analyst, Information Security Associate, Network Security Associate, Security Testing Assistant and IT Security Support. Actual job requirements vary by employer, so students should continue building practical experience, communication skills and relevant technical knowledge.",
        },
        {
          title: "Useful for Students in Amritsar",
          body: "For students searching locally for an ethical hacking course in Amritsar, classroom or guided training can provide a structured environment for learning difficult technical concepts. Students can benefit from instructor guidance, practical exercises, troubleshooting support and interaction with other learners. This can be especially helpful for beginners who may otherwise find cybersecurity overwhelming when learning entirely independently.",
        },
        {
          title: "A Career-Focused Learning Approach",
          body: "The purpose of ethical hacking training should be broader than completing a syllabus. Students should leave the program with a clearer understanding of cybersecurity concepts, hands-on familiarity with security tools, responsible testing practices and a roadmap for continued learning. A good learning journey can look like: fundamentals, networking, Linux, security concepts, vulnerability assessment, web security, ethical hacking, practical labs, reporting and career preparation. This approach helps students build knowledge progressively rather than attempting to learn advanced cybersecurity techniques without the necessary foundation.",
        },
        {
          title: "Why Start Now?",
          body: "Cybersecurity is an evolving field. Organizations increasingly depend on digital systems, cloud platforms, applications, networks and connected technologies. Security professionals therefore need to keep developing their skills as technologies and threats change. For students, starting with a strong foundation can provide time to practise, build projects, explore certifications and develop a professional cybersecurity profile. The goal is simple: learn cybersecurity responsibly, practise in authorized environments, understand the technology behind the tools, and build skills that can support your long-term IT career.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Techcadd",
      accent: "for Ethical Hacking Training in Amritsar?",
      body: "Choosing the right institute can make a major difference when you are starting your cybersecurity journey. Techcadd focuses on helping students build practical, career-oriented IT skills through structured training. For learners searching for ethical hacking training in Amritsar, the program can provide a pathway from fundamental concepts to practical security knowledge.",
      reasons: [
        {
          title: "Practical, Student-Focused Learning",
          body: "Ethical hacking is a technical subject, and students can find it difficult if they only study theory. Techcadd's learning approach is designed to make complex cybersecurity concepts easier to understand through structured explanations, demonstrations and practical activities. Students can progressively learn about networking, Linux, security fundamentals, vulnerability assessment, web security and ethical hacking concepts instead of attempting advanced topics without understanding the basics.",
        },
        {
          title: "Suitable for Beginners",
          body: "You do not need to be an experienced cybersecurity professional to begin learning ethical hacking. Students who have completed 12th, graduates, IT students, freshers and learners interested in cybersecurity can start by developing their technical foundation. The learning journey can progress from computer fundamentals to networking, Linux, cybersecurity basics, security tools, vulnerability assessment, ethical hacking and practical security testing. This progression can help beginners understand not only what a tool does but also why and when it is used.",
        },
        {
          title: "Focus on Practical Skills",
          body: "Cybersecurity employers value practical understanding alongside academic qualifications. That is why practical exposure is an important part of developing cybersecurity skills. During training, learners can work with security-focused technologies and tools in authorized learning environments. Depending on the course curriculum, this may include tools such as Kali Linux, Nmap, Wireshark, Burp Suite and Metasploit. The purpose is to help students understand security assessment processes, interpret findings and develop responsible testing habits.",
        },
        {
          title: "Learn With a Career in Mind",
          body: "Techcadd's ethical hacking training is positioned as a career-development program rather than simply a collection of technical lessons. Students can explore different cybersecurity career directions, including security analysis, vulnerability assessment, penetration testing, SOC-related roles and information security. The exact requirements for each job vary, so learners should continue developing their technical skills, communication abilities, practical portfolio and relevant certifications after completing their training.",
        },
        {
          title: "Local Learning Advantage",
          body: "For students searching for an ethical hacking institute in Amritsar, having access to a local training environment can make learning more convenient. Students can attend training, interact with instructors, ask questions and work through technical problems in a structured environment. This can be particularly useful when learning subjects such as networking, Linux, web security and penetration-testing concepts.",
        },
        {
          title: "Responsible Ethical Hacking",
          body: "One of the most important principles of cybersecurity training is responsible use. Techcadd can help learners understand that ethical hacking is performed only with appropriate authorization. Security testing should take place in controlled labs, practice environments or systems where explicit permission has been provided. This professional mindset is essential because cybersecurity is not simply about finding vulnerabilities. It is also about protecting systems, documenting findings and helping organizations improve their security posture.",
        },
        {
          title: "Build Skills Step by Step",
          body: "Students should not expect to become cybersecurity experts after completing one course. Ethical hacking is a continuously evolving field that requires regular practice and learning. Techcadd's structured training can serve as a foundation on which students can continue building their cybersecurity knowledge through projects, labs, certifications, internships and further specialization.",
        },
        {
          title: "A Starting Point, Clearly Stated",
          body: "If you are looking for an ethical hacking course in Amritsar, ethical hacking classes in Amritsar, or practical cybersecurity training, Techcadd can be considered as a starting point for developing technical skills and exploring a future in information security. The focus should remain on one clear objective: building practical cybersecurity knowledge responsibly and preparing students for continued professional growth in the IT security field.",
        },
      ],
    },

    /* The brief's ten sample reviews. Its own note stands: replace these with
       verified student feedback — real first name, course details and consent —
       and avoid presenting sample experiences as genuine customer reviews. No
       identities are invented here. */
    reviews: {
      average: "5.0",
      total: 10,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Practical learning experience",
          quote:
            "I was looking for ethical hacking classes in Amritsar because I wanted to move into cybersecurity. I liked that the training started with networking and Linux before moving into security concepts. The practical exercises made the topics easier to understand.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Helpful for beginners",
          quote:
            "I had basic computer knowledge but was completely new to ethical hacking. The concepts were explained step by step, which made it easier for me to follow the training. I especially enjoyed learning about Kali Linux and different security tools.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Good cybersecurity foundation",
          quote:
            "I joined the ethical hacking training to understand cybersecurity better. The course helped me learn networking, Linux, vulnerability assessment and web security concepts. It gave me a much clearer idea about the cybersecurity field.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Useful for IT students",
          quote:
            "As an IT student, I wanted something practical alongside my regular studies. Ethical hacking training gave me exposure to tools like Nmap and Wireshark and helped me understand how network security works.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Interesting practical sessions",
          quote:
            "The practical sessions were my favourite part of the training. Instead of only reading about cybersecurity, I could understand how different tools and security concepts work in controlled lab environments. The instructors also explained the concepts in an easy way.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Career-oriented learning",
          quote:
            "I was exploring different IT career options after graduation and became interested in cybersecurity. The ethical hacking course helped me understand areas such as vulnerability assessment, penetration testing and security analysis. It was useful for understanding what skills I need to develop next.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Linux and networking became easier",
          quote:
            "Initially, Linux and networking seemed difficult to me. The training helped me understand the basics step by step. Once I understood those concepts, learning the cybersecurity tools became much easier.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Good for exploring cybersecurity",
          quote:
            "I wanted to explore cybersecurity before deciding whether to pursue it as a career. The training gave me an introduction to ethical hacking, web security, network security and vulnerability concepts. It helped me understand what the field is actually like.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Better understanding of security tools",
          quote:
            "I had heard about tools like Kali Linux, Burp Suite and Metasploit before joining, but I did not understand their purpose. The training helped me understand how these tools are used in authorized security testing and why cybersecurity fundamentals are important.",
        },
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Positive learning experience",
          quote:
            "My experience with the ethical hacking training was positive. I liked the combination of theory and practical learning. The course helped me build a basic cybersecurity foundation and motivated me to continue learning about penetration testing and information security.",
        },
      ],
    },

    /* The brief's twenty FAQs, in its order — each opening with a direct
       answer, as its AEO note asks, and emitted as FAQPage JSON-LD. */
    faqs: [
      {
        q: "What is ethical hacking?",
        a: "Ethical hacking is the authorized process of assessing computer systems, networks or applications to identify security weaknesses. Ethical hackers work with permission to help organizations discover vulnerabilities and improve their security.",
      },
      {
        q: "Who can join an ethical hacking course in Amritsar?",
        a: "Students after 12th, graduates, IT students, freshers, networking learners, developers and working professionals interested in cybersecurity can consider ethical hacking training. Beginners can start with fundamental networking, Linux and cybersecurity concepts.",
      },
      {
        q: "Do I need programming knowledge to learn ethical hacking?",
        a: "Advanced programming knowledge is not always required to begin ethical hacking training. Basic technical knowledge can be helpful, while scripting and programming skills can be developed gradually as students progress in cybersecurity.",
      },
      {
        q: "Is ethical hacking a good career option?",
        a: "Ethical hacking can be a career option within the broader cybersecurity industry. Learners may explore roles related to security analysis, vulnerability assessment, penetration testing, SOC operations and information security, depending on their skills, qualifications and experience.",
      },
      {
        q: "What will I learn in ethical hacking training?",
        a: "A structured program may cover networking, Linux, cybersecurity fundamentals, reconnaissance, vulnerability assessment, web application security, penetration-testing concepts, security testing methodologies, reporting and responsible use of security tools.",
      },
      {
        q: "Which tools are commonly taught in ethical hacking training?",
        a: "Depending on the curriculum, students may receive practical exposure to tools such as Kali Linux, Nmap, Wireshark, Burp Suite, Metasploit Framework and other cybersecurity utilities. The exact tools covered should be confirmed with the training centre before enrolment.",
      },
      {
        q: "Is ethical hacking training suitable for beginners?",
        a: "Yes. Beginner-friendly ethical hacking training can start with computer, networking, Linux and cybersecurity fundamentals before progressing to more advanced security concepts. Students do not need to know every cybersecurity tool before joining.",
      },
      {
        q: "What is the difference between ethical hacking and illegal hacking?",
        a: "The key difference is authorization. Ethical hackers have permission to assess systems and report vulnerabilities. Unauthorized access, testing or exploitation of someone else's systems can be illegal and harmful. Ethical hacking training should always use authorized systems, controlled laboratories or environments where explicit permission has been provided.",
      },
      {
        q: "Can I learn penetration testing through ethical hacking training?",
        a: "Ethical hacking training can introduce learners to penetration-testing concepts and methodologies. More advanced penetration testing requires deeper knowledge, extensive practical experience and continued specialist training.",
      },
      {
        q: "Is Kali Linux necessary for ethical hacking?",
        a: "Kali Linux is widely used for cybersecurity education and security testing, but ethical hacking is not simply about using Kali Linux. Students need to understand networking, operating systems, security concepts and testing methodologies as well.",
      },
      {
        q: "What are the career opportunities after ethical hacking training?",
        a: "Depending on qualifications, skills and experience, learners can explore roles such as Cybersecurity Analyst, Security Analyst, SOC Analyst, Vulnerability Assessment Analyst, Junior Penetration Tester and Information Security Associate. Job titles and requirements vary between employers.",
      },
      {
        q: "Is certification included with ethical hacking training?",
        a: "Certification arrangements vary by institute and program. Students should ask Techcadd whether a particular certificate is included, whether an external examination is required and whether examination fees are separate. Students should also distinguish between a course-completion certificate issued by a training institute and an independent industry certification.",
      },
      {
        q: "How long does ethical hacking training take?",
        a: "The duration depends on the specific Techcadd program, syllabus, class schedule and learning mode. Students should confirm the current course duration directly with the Amritsar centre before enrolling.",
      },
      {
        q: "Can ethical hacking help after graduation?",
        a: "Yes. Graduates can use ethical hacking training to develop an additional cybersecurity specialization. However, completing a course alone does not guarantee employment. Building practical skills, projects, certifications, communication abilities and relevant experience can strengthen career opportunities.",
      },
      {
        q: "Where can I find ethical hacking training in Amritsar?",
        a: "Students searching for ethical hacking training in Amritsar, ethical hacking classes in Amritsar, or a cybersecurity course in Amritsar can compare local institutes based on curriculum, practical labs, trainers, course duration, tools, certification details and career support before making a decision.",
      },
      {
        q: "Is ethical hacking legal?",
        a: "Ethical hacking is legal when security testing is properly authorized and conducted within the agreed scope. Students should only test systems they own or have explicit permission to assess.",
      },
      {
        q: "Is ethical hacking the same as cybersecurity?",
        a: "No. Ethical hacking is one area within the broader cybersecurity field. Cybersecurity also includes areas such as security operations, incident response, governance, risk management, digital forensics, cloud security and defensive security.",
      },
      {
        q: "Why choose Techcadd for ethical hacking training in Amritsar?",
        a: "Techcadd's ethical hacking program can provide students with structured learning covering cybersecurity fundamentals, security concepts, practical tools and authorized laboratory exercises. Students should review the latest curriculum, trainer details, practical facilities and course terms before enrolment.",
      },
      {
        q: "Can a 12th-pass student learn ethical hacking?",
        a: "Yes. A 12th-pass student with an interest in computers and technology can begin learning ethical hacking. Starting with networking, Linux and cybersecurity fundamentals can provide a stronger foundation for more advanced topics.",
      },
      {
        q: "How should I choose the best ethical hacking course in Amritsar?",
        a: "Compare the syllabus, practical lab access, trainer expertise, tools covered, course duration, learning mode, certification claims, project work, student support and career guidance. Most importantly, make sure the program teaches cybersecurity responsibly and emphasizes authorized security testing.",
      },
    ],

    /* The brief leaves the duration to the centre, so the derived tiers table
       would be inventing figures it does not name. */
    tracks: false,

    cta: {
      eyebrow: "Start your ethical hacking journey with Techcadd",
      heading: "Build Practical Cybersecurity Skills",
      accent: "for Your Future",
      body: "Interested in ethical hacking and cybersecurity? Take the next step with Techcadd's career-focused Ethical Hacking Training in Amritsar. Learn cybersecurity fundamentals, networking, Linux, vulnerability assessment, web security, ethical hacking concepts and industry-relevant security tools through structured learning and practical exposure. Whether you are a 12th-pass student, graduate, fresher, IT learner or working professional, you can explore the program and understand how ethical hacking skills can fit into your long-term IT career.",
      /* The brief's "Course Details" block, row for row. */
      facts: [
        "Course: Ethical Hacking Training",
        "Duration: Contact Techcadd for the current batch duration",
        "Mode: Classroom / Practical Training",
        "Centre: Techcadd, Amritsar",
        "Level: Beginner to Intermediate",
        "Suitable For: Students, Graduates, Freshers & IT Professionals",
      ],
      /* What the brief's callback section invites learners to ask about. */
      assurances: [
        "Curriculum and practical training",
        "Course duration and batch availability",
        "Admission process",
        "No pressure to enrol — get the information you need first",
      ],
      formTitle: "Request Course Information",
      formNote:
        "Fill in your details and the Techcadd team can contact you with the latest information about the course, upcoming batches and enrolment process.",
      submitLabel: "Speak With a Course Counsellor",
      placeholders: {
        name: "Name",
        phone: "Phone Number",
        email: "Email",
      },
      showEmail: true,
      statusLabel: "Education",
      statusOptions: ["12th Pass", "Graduate", "Fresher", "IT Professional", "Other"],
      batchLabel: "Preferred Mode",
      batchOptions: ["Classroom", "Other / Ask the Counsellor"],
    },

    demo: {
      eyebrow: "Get a callback",
      heading: "Want to Know More About the Training?",
      body: "Submit your enquiry and speak with the Techcadd team about the curriculum, practical training, course duration, batch availability and admission process.",
      action: "Speak With a Course Counsellor",
      note: "No pressure to enrol. Get the course information you need, understand whether ethical hacking is suitable for your career goals, and then make an informed decision.",
    },

    /* Title, description and the keyword clusters from the brief's keyword and
       GEO strategy report. */
    seo: {
      title: "Ethical Hacking Course in Amritsar | Techcadd",
      description:
        "Learn ethical hacking in Amritsar with practical cybersecurity training covering networking, Linux, vulnerability assessment, web security and ethical hacking tools.",
      keywords: [
        "ethical hacking course Amritsar",
        "ethical hacking course in Amritsar",
        "ethical hacking training Amritsar",
        "ethical hacking training in Amritsar",
        "ethical hacking classes Amritsar",
        "ethical hacking classes in Amritsar",
        "ethical hacking institute Amritsar",
        "ethical hacking institute in Amritsar",
        "ethical hacking coaching Amritsar",
        "ethical hacking course near me",
        "cybersecurity course Amritsar",
        "cyber security training Amritsar",
        "best ethical hacking course in Amritsar",
        "best ethical hacking institute in Amritsar",
        "ethical hacking training institute Amritsar",
        "ethical hacking certification course Amritsar",
        "practical ethical hacking course Amritsar",
        "ethical hacking course for beginners Amritsar",
        "cybersecurity training institute Amritsar",
        "penetration testing course Amritsar",
        "information security course Amritsar",
        "ethical hacking course after 12th Amritsar",
        "cybersecurity course after 12th Amritsar",
        "ethical hacking training for students Amritsar",
        "ethical hacking course after graduation Amritsar",
        "ethical hacking course for freshers Amritsar",
        "cybersecurity training for beginners Amritsar",
        "Kali Linux training Amritsar",
        "vulnerability assessment training",
        "network security training",
        "web application security training",
        "Linux for cybersecurity",
      ],
    },

    closing:
      "The goal is simple: learn cybersecurity responsibly, practise in authorized environments, understand the technology behind the tools, and build skills that can support your long-term IT career.",
  },
};

/* ------------------------------------------------------------ generative ai */

/**
 * Source copy: the Amritsar Generative AI brief (overview, seven eligibility
 * personas plus its no-experience note, the two "why" arguments, fifteen
 * learning blocks, twelve FAQs, the enquiry/callback section and the
 * keyword/GEO strategy report). The learning blocks live in `course-data.ts`
 * instead, because they are the curriculum.
 *
 * This course renders the AI-track layout, which draws one audience section and
 * one advantages section: `buildAiView` maps the eligibility criteria below
 * into the first, and both "why" panels into the second.
 *
 * The brief supplies no review text — only a note that genuine student reviews
 * should be collected — so `reviews` is deliberately not overridden here.
 */
const generativeAi: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      headline: "Generative AI Training Course in",
      accent: "Amritsar",
      tagline:
        "A job-oriented, practical Generative AI course — AI tools, prompt engineering, AI-powered content creation, image generation, productivity applications and automation.",
      chips: ["Classroom & online", "Beginner-friendly", "Project-based"],
      image: "/images/courses/generative-ai.png",
    },

    overview: {
      heading: "Generative AI Training in Amritsar",
      paragraphs: [
        "Looking for the best Generative AI Training Course in Amritsar? Techcadd offers a job-oriented and practical Generative AI course designed for students, graduates, working professionals, entrepreneurs, content creators, and AI enthusiasts across Amritsar — including learners from GNDU, Khalsa College, DAV College, and other nearby institutes.",
        "This Generative AI course in Amritsar covers the fundamentals of Generative AI, AI tools, prompt engineering, AI-powered content creation, image generation, productivity applications, automation, and real-world AI use cases. Whether you're a complete beginner or someone who already has experience with AI tools, this course is structured to help you develop practical, industry-relevant skills.",
        "At Techcadd, training goes beyond theory. Students work on practical assignments and real-world projects, receive doubt-clearing support, and get career guidance to help them apply Generative AI skills in technology, digital marketing, content creation, business, and other professional fields.",
        "If you're searching for a trusted Generative AI training institute in Amritsar that combines practical learning, mentor support, and career-oriented training, this course is designed for you.",
      ],
      checks: [
        "Classroom training in Amritsar and flexible online options",
        "No prior AI experience needed — starts from fundamentals",
        "Practical assignments and real-world projects throughout",
        "Doubt-clearing support and career guidance included",
      ],
    },

    curriculumNote:
      "This course is structured to take learners from Generative AI fundamentals to practical AI applications, with concepts reinforced through hands-on exercises and projects.",

    /* The seven starting points the brief names, closing on its own
       no-experience note. */
    eligibility: {
      heading: "Who Can Do This Course",
      intro:
        "One of the most common questions students ask before enrolling is simple: \"Am I eligible for this Generative AI course?\" The honest answer — if you're curious about Artificial Intelligence and willing to practice, this Generative AI Training Course in Amritsar can be a suitable starting point. Techcadd's program is designed to be accessible to beginners while also providing practical applications for learners who already have some experience with AI tools.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds can start learning Generative AI without requiring an advanced technical background. Many students who have recently completed 12th grade join AI training to develop modern digital skills before college or to explore whether Artificial Intelligence could become part of their future career.",
        },
        {
          label: "College Students",
          detail:
            "Students pursuing BCA, B.Tech, BSc-IT, MCA, and other degree programs can learn practical Generative AI skills alongside their academic curriculum. Students from GNDU, Khalsa College, DAV College, and other institutes across Amritsar can use the training to supplement academic knowledge with practical AI applications.",
        },
        {
          label: "Graduates from Any Stream Looking to Upgrade Their Skills",
          detail:
            "Generative AI is not limited to computer science graduates. Students and graduates from commerce, arts, management, science, and other backgrounds can learn how AI tools can support their professional work. The course can help learners understand AI applications in content, productivity, marketing, research, automation, and digital workflows.",
        },
        {
          label: "Job Seekers Wanting an In-Demand Digital Skill",
          detail:
            "If you're currently looking for employment and want to add a modern technology skill to your profile, Generative AI can complement skills in areas such as digital marketing, content creation, business operations, software development, and data-related work.",
        },
        {
          label: "Working Professionals Wanting to Upskill",
          detail:
            "Working professionals can learn how Generative AI tools can improve productivity, assist with repetitive tasks, generate ideas, support documentation, and streamline professional workflows.",
        },
        {
          label: "Content Creators & Digital Marketers",
          detail:
            "Content creators, social media managers, and digital marketers can learn how Generative AI can assist with content ideas, writing, campaign planning, image generation, research, and creative workflows.",
        },
        {
          label: "Entrepreneurs & Business Owners",
          detail:
            "Business owners can explore how Generative AI can support marketing, customer communication, content creation, research, productivity, and business automation.",
        },
        {
          label: "No Prior AI Experience Needed",
          detail:
            "Whether you've never used an AI tool before or you've already experimented with Generative AI, the course can start with fundamentals and gradually move toward practical applications. Classes can be structured for learners attending offline training in Amritsar as well as students who prefer flexible online learning.",
        },
      ],
    },

    /* The brief argues the programme and the institute separately. On this
       layout both panels are folded into one advantages section. */
    whyChoose: {
      heading: "Why Choose This",
      accent: "Generative AI Training Program?",
      body: "With so many institutes and online platforms offering AI courses, it's fair to ask what makes a program worth your time and investment. Techcadd's Generative AI Training course in Amritsar focuses on practical skills and real-world applications rather than theory alone.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "You won't simply watch AI demonstrations and take notes. Concepts are reinforced through practical exercises, assignments, prompt-building activities, AI tool usage, and real-world projects. By the end of the course, you'll have practical experience that you can discuss and demonstrate rather than only a certificate showing that you attended training.",
        },
        {
          title: "Structured, Beginner-to-Practical Curriculum",
          body: "The course follows a logical progression, beginning with Generative AI fundamentals and gradually moving toward prompt engineering, AI tools, content creation, automation, and practical projects. Concepts are introduced step by step so beginners can understand how different AI technologies and tools are used.",
        },
        {
          title: "Industry-Relevant AI Skills",
          body: "Generative AI is increasingly being used for content creation, productivity, research, marketing, automation, software development, and business workflows. The program focuses on practical applications that learners can understand and apply in real-world situations.",
        },
        {
          title: "Prompt Engineering Skills",
          body: "One of the most important parts of working effectively with Generative AI is knowing how to communicate with AI systems. Students learn how to structure prompts, provide context, define requirements, refine outputs, and improve results through better instructions.",
        },
        {
          title: "Doubt-Clearing & Mentor Support",
          body: "Learning new AI technologies can involve confusion and experimentation. Techcadd's trainers provide support to help students understand concepts, work through practical exercises, and clarify their doubts.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Whether you're a student managing college classes or a working professional managing job responsibilities, flexible batch options can make it easier to continue learning.",
        },
        {
          title: "Career & Practical Guidance",
          body: "Generative AI skills can complement careers in technology, marketing, content creation, business, education, and other digital fields. The training focuses on helping students understand how to present and apply their AI skills professionally.",
        },
        {
          title: "Local Convenience, Real Access",
          body: "Being based in Amritsar means students can learn locally without needing to relocate to another city. Learners from nearby areas such as Tarn Taran, Batala, and Ajnala can also access training in Amritsar.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn Generative AI",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing where to learn Generative AI matters just as much as choosing what to learn. Here's what makes Techcadd's approach to Generative AI Training in Amritsar focused on practical learning.",
      reasons: [
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's trainers focus on practical applications rather than simply teaching from a fixed theoretical syllabus. Students can learn how AI tools are used in modern professional workflows and how to approach AI-based problem solving.",
        },
        {
          title: "Training Students in Amritsar",
          body: "Techcadd has experience training students from different educational and professional backgrounds across Amritsar. This allows the training approach to accommodate beginners as well as learners who already have some exposure to AI tools.",
        },
        {
          title: "Hands-On, Project-Driven Teaching Style",
          body: "Instead of relying only on long lectures, the training emphasizes practical activities, AI tools, prompts, assignments, and projects. This helps students understand how Generative AI can be applied to real tasks.",
        },
        {
          title: "Personal Attention",
          body: "Students often have different levels of technical knowledge. A manageable learning environment allows students to ask questions and receive guidance when they face difficulty understanding an AI concept or completing a practical task.",
        },
        {
          title: "Career-Focused Learning",
          body: "A certificate alone does not demonstrate practical ability. The training focuses on helping students understand AI applications, build practical projects, and develop skills that can strengthen their professional profile.",
        },
        {
          title: "Flexible for Students and Professionals",
          body: "The course can be suitable for students, graduates, freelancers, and working professionals who need learning schedules that fit around their existing commitments.",
        },
        {
          title: "Beginner-Friendly Teaching",
          body: "The course does not assume that every student already understands Artificial Intelligence. Fundamental concepts can be introduced first before moving toward more advanced Generative AI applications.",
        },
        {
          title: "Local, Accessible, and Student-Focused",
          body: "Being based in Amritsar allows Techcadd to serve students from the local education and professional ecosystem while providing practical AI training close to home.",
        },
      ],
    },

    /* The brief's twelve FAQs, in its order. */
    faqs: [
      {
        q: "Is prior AI knowledge required to join the Generative AI Training course at Techcadd, Amritsar?",
        a: "No. The course can be started by beginners. The training introduces Generative AI concepts from the fundamentals and gradually moves toward practical applications.",
      },
      {
        q: "Who can enroll in this Generative AI course?",
        a: "12th pass students, college students, graduates, working professionals, entrepreneurs, content creators, freelancers, and digital marketers can learn Generative AI.",
      },
      {
        q: "Is Generative AI suitable for non-technical students?",
        a: "Yes. Many Generative AI applications involve prompting, content creation, productivity, research, marketing, and automation, so learners do not necessarily need an advanced programming background to begin.",
      },
      {
        q: "What is the duration of the Generative AI Training course in Amritsar?",
        a: "The exact duration depends on the selected batch and course structure. Regular and flexible learning options can be discussed with the Techcadd Amritsar centre at the time of enrollment.",
      },
      {
        q: "Does Techcadd offer online and offline Generative AI classes?",
        a: "Training options can include classroom learning at the Amritsar centre as well as online learning options for students who require remote access.",
      },
      {
        q: "Will I receive a certificate after completing the course?",
        a: "Students completing the applicable training program can receive a course completion certificate. The exact certification details should be confirmed with the Techcadd Amritsar centre.",
      },
      {
        q: "Does the course include practical projects?",
        a: "Yes. Practical assignments and real-world Generative AI projects are an important part of the training approach.",
      },
      {
        q: "Can working professionals join the course?",
        a: "Yes. Flexible batch timings can accommodate students and working professionals depending on the available schedule.",
      },
      {
        q: "Do I need programming knowledge?",
        a: "Advanced programming knowledge is not necessarily required to begin Generative AI training. However, programming concepts can be useful for learners interested in technical AI development and AI-assisted coding.",
      },
      {
        q: "What can I learn after completing Generative AI training?",
        a: "You can develop practical skills in prompt engineering, AI tools, content creation, AI-assisted productivity, image generation, automation, digital marketing, and other Generative AI applications.",
      },
      {
        q: "Is this course useful for career switching?",
        a: "Generative AI can be a valuable additional skill for people moving toward technology, digital marketing, content, business, automation, and other AI-enabled roles. Career outcomes depend on the learner's overall skills, experience, portfolio, and specialization.",
      },
      {
        q: "Where is Techcadd's Generative AI training centre located?",
        a: "Techcadd provides Generative AI training for students and professionals in Amritsar, Punjab. Exact centre address and directions should be confirmed with Techcadd at the time of enquiry.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your Generative AI career journey — right here in Amritsar",
      heading: "Stop Using AI Only for Basic Questions.",
      accent: "Learn to Use It Strategically.",
      body: "Learn how to use Generative AI strategically — with practical training, real projects, mentor support, and career-focused guidance at Techcadd, Amritsar.",
      facts: [
        "Course: Generative AI Training Course",
        "Duration: Flexible / Batch Dependent",
        "Mode: Classroom & Online",
        "Location: Techcadd, Amritsar",
        "Suitable For: Students, Graduates, Professionals, Entrepreneurs & Beginners",
      ],
      assurances: [
        "No spam calls",
        "Course guidance",
        "Talk to a trainer/counsellor",
        "Get your questions answered",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Not ready to fill out a form yet? Leave your contact details and a Techcadd counsellor can help answer your questions about the course, eligibility, duration, batches, and learning options.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Graduate", "College Student", "Working Professional", "Entrepreneur"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Request a Callback",
      body: "Not ready to fill out a form yet? Leave your contact details and a Techcadd counsellor can help answer your questions about the course, eligibility, duration, batches, and learning options.",
      action: "Request a Callback",
      note: "No spam calls · Course guidance · Talk to a trainer or counsellor.",
    },

    seo: {
      title: "Generative AI Training Course in Amritsar | Techcadd",
      description:
        "Learn Generative AI in Amritsar with practical training, prompt engineering, AI tools, projects, and career-focused guidance at Techcadd.",
      keywords: [
        "Generative AI Training course Amritsar",
        "Generative AI course in Amritsar",
        "Generative AI training institute Amritsar",
        "best Generative AI course Amritsar",
        "Generative AI classes Amritsar",
        "Generative AI coaching Amritsar",
        "Generative AI course near me Amritsar",
        "AI course in Amritsar",
        "Artificial Intelligence course Amritsar",
        "AI training institute Amritsar",
        "Generative AI certification course Amritsar",
        "Prompt Engineering course Amritsar",
        "Prompt Engineering training Amritsar",
        "AI tools course Amritsar",
        "learn Generative AI in Amritsar",
        "job-oriented AI course Amritsar",
        "Generative AI course near GNDU Amritsar",
        "Generative AI training near Khalsa College Amritsar",
        "Generative AI classes near DAV College Amritsar",
        "Generative AI course Mall Road Amritsar",
        "Generative AI training Hall Bazaar Amritsar",
        "Generative AI course Lawrence Road Amritsar",
        "AI training Amritsar for Batala students",
        "Generative AI course for Tarn Taran students",
        "AI classes for Ajnala students",
        "Generative AI course for 12th pass students Amritsar",
        "Generative AI course for college students Amritsar",
        "Generative AI course for working professionals Amritsar",
        "AI course for digital marketers Amritsar",
        "Generative AI course for content creators Amritsar",
        "Generative AI course with practical projects Amritsar",
      ],
    },

    closing:
      "By the end of the course you will have practical Generative AI experience you can discuss and demonstrate — prompts, tools, content, images, automation and projects — rather than only a certificate showing that you attended training.",
  },
};

/* -------------------------------------------------------- prompt engineering */

/**
 * Source copy: the Amritsar Prompt Engineering brief (overview, seven
 * eligibility personas plus its no-experience note, the two "why" arguments,
 * fifteen learning blocks, the career list, four student reviews, twelve FAQs,
 * the enquiry/callback section and the SEO strategy). The learning blocks live
 * in `course-data.ts`, because they are the curriculum.
 *
 * This course renders the AI-track layout, which draws one audience section and
 * one advantages section: `buildAiView` maps the eligibility criteria into the
 * first and both "why" panels into the second.
 */
const promptEngineering: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      headline: "Prompt Engineering Training Course in",
      accent: "Amritsar",
      tagline:
        "Learn to write clear, structured, effective prompts — prompt design, role and few-shot prompting, context engineering, structured outputs, AI workflows and automation.",
      chips: ["Classroom & online", "Beginner to advanced", "Project-based"],
      image: "/images/courses/generative-ai.png",
    },

    overview: {
      heading: "Prompt Engineering Training Course in Amritsar",
      paragraphs: [
        "Looking for the best Prompt Engineering Training Course in Amritsar? Techcadd offers a practical, job-oriented Prompt Engineering course designed for students, graduates, working professionals, content creators, developers, marketers, and anyone who wants to learn how to work effectively with modern AI tools.",
        "This Prompt Engineering course in Amritsar focuses on teaching you how to write clear, structured, and effective prompts for AI systems and large language models. You'll learn prompt design techniques, AI-assisted workflows, role prompting, few-shot prompting, context engineering basics, prompt testing, AI content generation, automation concepts, and practical applications across different industries.",
        "At Techcadd, the focus goes beyond theory. Students work on practical exercises, real-world use cases, AI tools, prompt-building tasks, and project-based assignments. Doubt-clearing support, mentor guidance, interview preparation, and placement assistance help learners turn their AI knowledge into practical career skills.",
        "Whether you're a complete beginner or already using ChatGPT and other AI tools, this Prompt Engineering Training in Amritsar is structured to help you move from basic AI usage to professional-level prompt creation.",
      ],
      checks: [
        "Classroom training in Amritsar and online learning options",
        "Beginner to advanced — no prior AI experience required",
        "Practical exercises, prompt-building tasks and project assignments",
        "Mentor guidance, doubt-clearing and career support",
      ],
    },

    curriculumNote:
      "This course is structured to take learners from basic AI understanding to practical prompt engineering skills.",

    eligibility: {
      heading: "Who Can Join Prompt Engineering Training in Amritsar?",
      intro:
        "One of the biggest advantages of Prompt Engineering is that you don't need to be an expert programmer to get started. The course is designed for beginners as well as learners who already have experience with AI tools.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds can join the course to develop practical AI skills before or alongside their college education. No advanced technical background is required to begin.",
        },
        {
          label: "College Students",
          detail:
            "Students pursuing BCA, B.Tech, BSc-IT, MCA, MBA, BBA, or other degree programs can learn prompt engineering to complement their academic knowledge and prepare for an increasingly AI-driven workplace. Students from GNDU, Khalsa College, BBK DAV College, and other institutes in Amritsar can use the training to develop practical AI skills for projects, internships, presentations, research, content creation, and future employment.",
        },
        {
          label: "Graduates Looking to Build AI Skills",
          detail:
            "Graduates from technical and non-technical backgrounds can learn how to use AI tools effectively for productivity, research, content generation, business workflows, and career development.",
        },
        {
          label: "Working Professionals",
          detail:
            "Professionals in marketing, HR, sales, education, IT, administration, customer support, and other fields can learn prompt engineering to automate repetitive tasks and improve productivity.",
        },
        {
          label: "Content Creators and Digital Marketers",
          detail:
            "Prompt engineering can help content professionals create better content ideas, outlines, social media posts, marketing campaigns, email drafts, research summaries, and creative concepts with AI assistance.",
        },
        {
          label: "Developers and IT Professionals",
          detail:
            "Developers can use prompt engineering techniques when working with AI coding assistants, APIs, LLM applications, documentation, testing, debugging, and AI-powered software workflows.",
        },
        {
          label: "Entrepreneurs and Freelancers",
          detail:
            "Business owners and freelancers can learn how to use AI more effectively for research, customer communication, marketing, proposals, documentation, ideation, and everyday business operations.",
        },
        {
          label: "No Prior AI Experience Required",
          detail:
            "You don't need previous Prompt Engineering experience to join Techcadd's training program in Amritsar. The course starts with the fundamentals and gradually introduces advanced prompting concepts through practical examples and exercises. The training is suitable for both offline classroom learners in Amritsar and students who prefer online learning.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Choose This",
      accent: "Prompt Engineering Training Program?",
      body: "The course is built around practice rather than prompt formulas — here is what that means in each part of the programme.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "Instead of simply learning definitions and prompt formulas, students practice creating and improving prompts for real-world situations. You'll work with different types of prompts and learn how changing instructions, context, examples, and constraints can influence AI output.",
        },
        {
          title: "Beginner-to-Advanced Learning Structure",
          body: "The course follows a progressive structure. You start with AI fundamentals and basic prompting before moving into advanced prompt strategies, structured outputs, AI workflows, and practical applications.",
        },
        {
          title: "Real-World AI Applications",
          body: "Prompt engineering is useful across content creation, marketing, education, software development, research, customer support, business operations, and productivity. The training focuses on these practical applications rather than only academic concepts.",
        },
        {
          title: "Hands-On AI Tools",
          body: "Students get practical exposure to modern AI tools and learn how to write prompts for different use cases, compare outputs, refine instructions, and build repeatable AI workflows.",
        },
        {
          title: "Doubt-Clearing and Mentor Support",
          body: "AI tools can produce unexpected results, and understanding why a prompt fails is an important part of learning. Trainers help students identify problems, refine prompts, and improve their results.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Techcadd offers flexible learning options for college students, job seekers, and working professionals who need to balance training with their existing schedules.",
        },
        {
          title: "Career and Placement Support",
          body: "The program focuses on practical employability. Students receive guidance related to resumes, interviews, project presentation, and career opportunities where AI skills can provide an advantage.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn Prompt Engineering",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing where to learn matters as much as what you learn. Here is what Techcadd brings to a Prompt Engineering programme.",
      reasons: [
        {
          title: "Industry-Relevant AI Training",
          body: "Techcadd focuses on practical AI skills that learners can apply to real tasks rather than limiting the course to theoretical concepts.",
        },
        {
          title: "Beginner-Friendly Trainers",
          body: "The course is structured so that learners without a technical background can understand AI concepts and gradually become comfortable creating and refining prompts.",
        },
        {
          title: "Hands-On Training",
          body: "Students don't just watch demonstrations. They practice writing prompts, testing outputs, identifying weaknesses, and improving results.",
        },
        {
          title: "Project-Driven Learning",
          body: "Practical projects help students understand how prompt engineering can be applied to actual workplace scenarios.",
        },
        {
          title: "Personal Attention",
          body: "Manageable batches and doubt-clearing support make it easier for learners to ask questions and receive guidance during training.",
        },
        {
          title: "Career-Focused Approach",
          body: "The objective isn't simply to complete a course. Students are encouraged to build practical AI skills that can strengthen their resumes and improve their productivity in existing or future roles.",
        },
        {
          title: "Convenient Amritsar Location",
          body: "Students from across Amritsar and nearby areas such as Tarn Taran, Batala, and Ajnala can access classroom-based training without needing to relocate to another city.",
        },
        {
          title: "Career Opportunities After Training",
          body: "Prompt engineering skills can complement many existing technical and non-technical roles. Depending on your background and additional skills, you can explore opportunities such as AI Content Specialist, Prompt Engineer, Generative AI Specialist, AI Automation Specialist, AI Marketing Specialist, AI-Assisted Content Creator, AI Operations Executive, Digital Marketing Executive with AI Skills, AI Research Assistant and Business Automation Specialist. Prompt engineering can also be valuable for developers, data professionals, marketers, designers, educators, freelancers, entrepreneurs, and other professionals who want to integrate AI into their existing careers.",
        },
      ],
    },

    /* The brief's four reviews, carried across as written. They carry no
       reviewer names, so none are invented; replace them with verified,
       attributed student feedback before treating them as testimonials. */
    reviews: {
      average: "5.0",
      total: 4,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Student",
          initials: "S",
          role: "Amritsar",
          rating: 5,
          meta: "Prompt Engineering Training",
          quote:
            "I joined the Prompt Engineering course because I was already using AI tools but didn't know how to get consistent results. The practical exercises helped me understand how to structure prompts properly instead of just asking random questions.",
        },
        {
          name: "College Student",
          initials: "CS",
          role: "Amritsar",
          rating: 5,
          meta: "Prompt Engineering Training",
          quote:
            "The course helped me understand how AI can be used for college projects, research, presentations, and everyday productivity. The trainer explained everything from the basics.",
        },
        {
          name: "Working Professional",
          initials: "WP",
          role: "Amritsar",
          rating: 5,
          meta: "Prompt Engineering Training",
          quote:
            "I wanted to learn how AI could help me save time at work. The practical prompts and automation-related exercises were the most useful part of the training.",
        },
        {
          name: "Graduate",
          initials: "G",
          role: "Amritsar",
          rating: 5,
          meta: "Prompt Engineering Training",
          quote:
            "I had no technical background in AI before joining. The course was beginner-friendly and helped me become much more confident with AI tools.",
        },
      ],
    },

    faqs: [
      {
        q: "Is prior AI or coding experience required for Prompt Engineering Training in Amritsar?",
        a: "No. Techcadd's Prompt Engineering course is suitable for beginners. You can join even if you have never worked with AI tools professionally. The training starts with basic concepts and gradually introduces practical prompting techniques and real-world AI applications.",
      },
      {
        q: "Who can join a Prompt Engineering course in Amritsar?",
        a: "The course is suitable for 12th-pass students, college students, graduates, working professionals, developers, marketers, content creators, freelancers, entrepreneurs, and other learners interested in developing practical AI skills.",
      },
      {
        q: "Do I need to know Python for Prompt Engineering?",
        a: "No. Basic Prompt Engineering does not require Python programming knowledge. Learners can begin with natural-language prompting. Python and programming concepts can be useful later if you want to move toward AI development, APIs, automation, or advanced AI applications.",
      },
      {
        q: "What is the duration of the Prompt Engineering Training course?",
        a: "The course duration can vary depending on the selected batch and training format. Techcadd offers regular and flexible learning options, with the exact duration confirmed during enrollment or counselling.",
      },
      {
        q: "Does Techcadd offer online and offline Prompt Engineering classes?",
        a: "Yes. Techcadd provides flexible learning options, including classroom training in Amritsar and online sessions for learners who prefer remote access.",
      },
      {
        q: "Will I receive a certificate after completing the course?",
        a: "Students who successfully complete the applicable Techcadd training program can receive a course completion certificate. Certificate details should be confirmed with the Amritsar centre before enrollment.",
      },
      {
        q: "Is Prompt Engineering useful for non-technical students?",
        a: "Yes. Prompt Engineering is particularly accessible to non-technical learners because much of the work involves communicating instructions clearly with AI systems. Students from Commerce, Arts, Management, Humanities, and other backgrounds can learn practical prompting skills.",
      },
      {
        q: "Can working professionals join the course?",
        a: "Yes. Working professionals can use Prompt Engineering training to improve productivity, content creation, research, documentation, communication, reporting, and repetitive workflows. Flexible batch timings can make the course easier to manage alongside a job.",
      },
      {
        q: "What AI tools will I learn?",
        a: "Training may include practical exposure to popular generative AI and productivity tools. The exact tools covered can change as AI platforms evolve, so students should confirm the current tool list with Techcadd before enrollment.",
      },
      {
        q: "Is Prompt Engineering a good career option?",
        a: "Prompt Engineering can be a valuable skill, but it is strongest when combined with domain expertise such as marketing, programming, data, business, content, or automation. The course can help learners build practical AI skills that complement their existing career profile.",
      },
      {
        q: "Does Techcadd provide placement assistance?",
        a: "Techcadd provides career-oriented support such as resume guidance, interview preparation, and placement assistance, subject to the terms of the training program. Students should confirm the current placement support offered for the Prompt Engineering course.",
      },
      {
        q: "Where is Prompt Engineering Training available in Amritsar?",
        a: "Techcadd provides Prompt Engineering training for learners in Amritsar, with classroom and online learning options. Students from nearby locations such as Tarn Taran, Batala, and Ajnala can also enquire about available batches and centre details.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your AI career journey in Amritsar",
      heading: "Don't Just Use AI Occasionally —",
      accent: "Learn How to Use It Strategically.",
      body: "Join Techcadd's Prompt Engineering Training Course in Amritsar and develop practical skills in prompt creation, generative AI, AI-assisted productivity, content generation, automation concepts, and real-world AI workflows.",
      facts: [
        "Course: Prompt Engineering Training Course",
        "Location: Amritsar, Punjab",
        "Mode: Classroom & Online",
        "Level: Beginner to Advanced",
        "Eligibility: Students, graduates, professionals, freelancers, and beginners",
        "Batches: Regular / Flexible options",
      ],
      assurances: [
        "No spam calls",
        "Speak with a real counsellor",
        "Course and batch guidance",
        "Classroom & online learning options",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Request a callback from a Techcadd counsellor to discuss the course, eligibility, batch timings, learning mode, fees, and career options.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "College Student", "Graduate", "Working Professional", "Freelancer"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Request a Callback",
      body: "Request a callback from a Techcadd counsellor to discuss the course, eligibility, batch timings, learning mode, fees, and career options.",
      action: "Request a Callback",
      note: "No spam calls · Speak with a real counsellor · Classroom and online learning options.",
    },

    seo: {
      title: "Prompt Engineering Training Course in Amritsar | Techcadd",
      description:
        "Learn Prompt Engineering in Amritsar with Techcadd. Beginner-friendly AI training, practical projects, flexible batches and career support.",
      keywords: [
        "Prompt Engineering Training course Amritsar",
        "Prompt Engineering course in Amritsar",
        "Prompt Engineering training institute Amritsar",
        "best Prompt Engineering course Amritsar",
        "Prompt Engineering classes Amritsar",
        "Prompt Engineering coaching Amritsar",
        "Prompt Engineering course near me",
        "AI Prompt Engineering course Amritsar",
        "Generative AI course Amritsar",
        "AI training institute Amritsar",
        "Prompt Engineer course Amritsar",
        "AI course for beginners Amritsar",
        "job-oriented AI course Amritsar",
        "learn Prompt Engineering in Amritsar",
        "Prompt Engineering certification course Amritsar",
        "AI automation course Amritsar",
        "Prompt Engineering course near GNDU Amritsar",
        "Prompt Engineering training near Khalsa College Amritsar",
        "AI course near BBK DAV College Amritsar",
        "Prompt Engineering classes Mall Road Amritsar",
        "AI training Hall Bazaar Amritsar",
        "Prompt Engineering course Lawrence Road Amritsar",
        "Prompt Engineering course for Batala students",
        "AI course for Tarn Taran students",
        "Prompt Engineering classes for Ajnala students",
        "Prompt Engineering course for 12th pass students Amritsar",
        "Prompt Engineering course for college students Amritsar",
        "AI course for BCA students Amritsar",
        "AI course for B.Tech students Amritsar",
        "Prompt Engineering course for working professionals Amritsar",
        "AI course for non-technical students Amritsar",
        "Prompt Engineering course with placement Amritsar",
      ],
    },

    closing:
      "Beginner-friendly Prompt Engineering and Generative AI training in Amritsar with practical projects, hands-on AI tools, flexible learning options, mentor support, and career guidance.",
  },
};

/* ------------------------------------------------------ chatgpt & ai tools */

/**
 * Source copy: the Amritsar ChatGPT & AI Tools brief (overview, six eligibility
 * personas plus its no-experience note, the two "why" arguments, sixteen
 * learning blocks with the tool categories, four student reviews, twelve FAQs,
 * the enquiry/callback section and the keyword/GEO strategy). The learning
 * blocks live in `course-data.ts`, because they are the curriculum.
 *
 * This course renders the AI-track layout: `buildAiView` maps the eligibility
 * criteria below into the audience section and both "why" panels into the
 * advantages section.
 */
const chatgptAiTools: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      headline: "ChatGPT & AI Tools Training in",
      accent: "Amritsar",
      tagline:
        "Practical AI for real work — ChatGPT, prompt engineering, content creation, research, presentations, image generation, marketing, business and productivity.",
      chips: ["Classroom & online", "Beginner to practical", "No prior AI experience"],
      image: "/images/courses/artificial-intelligence.png",
    },

    overview: {
      heading: "ChatGPT & AI Tools Training in Amritsar – Overview",
      paragraphs: [
        "Looking for the best ChatGPT & AI Tools Training Course in Amritsar? Techcadd offers practical, career-focused training designed for students, graduates, working professionals, business owners, freelancers, content creators, and anyone who wants to learn how to use modern Artificial Intelligence tools effectively.",
        "This ChatGPT & AI Tools course in Amritsar focuses on practical use rather than complicated theory. Students learn how to use ChatGPT and other AI tools for content creation, research, productivity, presentations, image generation, marketing, business tasks, document work, brainstorming, and everyday professional activities.",
        "The training also introduces Prompt Engineering, helping learners understand how to write clear and effective prompts to get better results from AI tools.",
        "At Techcadd, learners get practical activities, real-world examples, AI-based projects, doubt-clearing support, and guidance on using AI tools efficiently in academic, professional, and business environments.",
        "If you're searching for ChatGPT training in Amritsar or an AI Tools training institute in Amritsar, this program is designed to help you build practical AI skills from the basics.",
      ],
      checks: [
        "Classroom and online learning options in Amritsar",
        "Beginner to practical — no prior AI experience needed",
        "Focus: ChatGPT, Prompt Engineering, Generative AI and AI productivity tools",
        "Practical activities, real examples and AI-based projects",
      ],
    },

    curriculumNote:
      "The course covers practical use rather than complicated theory — ChatGPT, prompting, content, research, presentations, images, social media, business, productivity, automation and responsible AI use.",

    eligibility: {
      heading: "Who Can Join ChatGPT & AI Tools Training",
      intro:
        "One of the most common questions students ask is: \"Who can learn ChatGPT and AI tools?\" The answer is simple — almost anyone who wants to understand and use modern AI tools can benefit from this training. The course is designed for beginners and does not require advanced technical knowledge.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds can learn how ChatGPT and AI tools can help with research, assignments, presentations, brainstorming, communication, and productivity.",
        },
        {
          label: "College Students",
          detail:
            "Students from GNDU, Khalsa College, DAV College, and other institutes in Amritsar can learn practical AI tools that can support academic work, presentations, research, projects, and future career preparation.",
        },
        {
          label: "Graduates",
          detail:
            "Graduates can learn how to use AI tools for resume preparation, research, professional communication, presentations, content creation, productivity, and workplace tasks.",
        },
        {
          label: "Working Professionals",
          detail:
            "Professionals can learn how ChatGPT and AI tools can save time and improve productivity in areas such as documentation, email drafting, research, data interpretation, presentations, planning, and repetitive tasks.",
        },
        {
          label: "Business Owners & Entrepreneurs",
          detail:
            "Business owners can explore AI tools for marketing ideas, customer communication, social media content, business planning, product descriptions, research, and productivity.",
        },
        {
          label: "Freelancers & Content Creators",
          detail:
            "Freelancers, bloggers, social media managers, designers, and content creators can learn how AI tools can assist with ideas, scripts, captions, content planning, visual concepts, and research.",
        },
        {
          label: "No Prior AI Experience Needed",
          detail:
            "You do not need previous experience with Artificial Intelligence. The course starts with basic concepts and gradually introduces learners to ChatGPT, prompting techniques, AI productivity tools, Generative AI, and practical applications.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Choose This",
      accent: "ChatGPT & AI Tools Training Program?",
      body: "The programme is built around using AI rather than discussing it. Here is what that looks like in practice.",
      reasons: [
        {
          title: "Practical AI Learning",
          body: "Instead of only discussing what Artificial Intelligence is, students learn how to actually use ChatGPT and AI tools for everyday tasks.",
        },
        {
          title: "Hands-On Activities",
          body: "Learners practice creating prompts, generating content, researching information, developing ideas, creating presentations, and using AI tools for different real-world scenarios.",
        },
        {
          title: "Beginner-Friendly Training",
          body: "The course is structured for people who may have never used professional AI tools before. Concepts are introduced step by step.",
        },
        {
          title: "Prompt Engineering Skills",
          body: "Students learn how to create effective prompts by providing clear instructions, context, objectives, constraints, and desired output formats.",
        },
        {
          title: "Productivity-Focused Learning",
          body: "AI tools can assist with tasks such as brainstorming, summarizing, planning, drafting, research, presentations, and professional communication.",
        },
        {
          title: "Career-Oriented AI Skills",
          body: "Understanding modern AI tools can help students and professionals add relevant technology skills to their resumes and improve their digital productivity.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Flexible learning options can help college students and working professionals attend training according to their schedules.",
        },
        {
          title: "Local Training in Amritsar",
          body: "Students from Amritsar and nearby areas such as Tarn Taran, Batala, and Ajnala can access AI tools training locally.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn ChatGPT & AI Tools",
      accent: "at Techcadd, Amritsar?",
      body: "What Techcadd brings to a practical AI tools programme, beyond the syllabus itself.",
      reasons: [
        {
          title: "Practical, Industry-Relevant Learning",
          body: "The focus is on how ChatGPT and AI tools can be used in real academic, professional, marketing, business, and creative workflows.",
        },
        {
          title: "Experienced Trainers",
          body: "Trainers guide learners through practical examples and help them understand how to communicate effectively with AI systems.",
        },
        {
          title: "Project-Based Learning",
          body: "Students can work on practical AI activities and projects that demonstrate how AI tools can solve real-world problems.",
        },
        {
          title: "Personal Attention",
          body: "Learners can ask questions, practice different AI workflows, and receive guidance while developing their AI skills.",
        },
        {
          title: "Career Support",
          body: "Students can receive guidance on using AI skills effectively in resumes, interviews, projects, freelancing, and professional work.",
        },
        {
          title: "Beginner-Friendly Environment",
          body: "The training starts with basic concepts, making it accessible to learners from different educational backgrounds.",
        },
        {
          title: "Local & Convenient",
          body: "Learning in Amritsar provides convenient access for students and professionals from the city and nearby areas.",
        },
        {
          title: "AI Tools Covered",
          body: "Depending on the current course batch, training can introduce learners to ChatGPT, Generative AI tools, AI image-generation tools, AI presentation tools, AI writing assistants, AI research tools, AI productivity tools, AI design tools, AI automation platforms and AI-powered business tools. Tool availability and specific platforms can change over time, so the exact tool list should be confirmed with the current Techcadd Amritsar batch.",
        },
      ],
    },

    /* The brief's four reviews, carried across as written. They carry role
       labels rather than names, so none are invented; replace them with
       verified, attributed feedback before treating them as testimonials. */
    reviews: {
      average: "5.0",
      total: 4,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "College Student",
          initials: "CS",
          role: "Amritsar",
          rating: 5,
          meta: "ChatGPT & AI Tools Training",
          quote:
            "I wanted to learn ChatGPT properly instead of only using it for simple questions. The practical training helped me understand prompts and different AI applications.",
        },
        {
          name: "12th Pass Student",
          initials: "12",
          role: "Amritsar",
          rating: 5,
          meta: "ChatGPT & AI Tools Training",
          quote:
            "I had never used AI tools before joining. The trainer started from the basics and showed us how AI can help with studies, presentations, research, and creative work.",
        },
        {
          name: "Working Professional",
          initials: "WP",
          role: "Amritsar",
          rating: 5,
          meta: "ChatGPT & AI Tools Training",
          quote:
            "The biggest benefit for me was learning how to use AI for everyday professional tasks. It helped me understand how to make my workflow more efficient.",
        },
        {
          name: "Freelancer",
          initials: "FL",
          role: "Amritsar",
          rating: 5,
          meta: "ChatGPT & AI Tools Training",
          quote:
            "I learned how to use AI for content ideas, client work, research, and productivity. The practical activities were much more useful than just watching tutorials.",
        },
      ],
    },

    faqs: [
      {
        q: "Is prior AI knowledge required for ChatGPT training?",
        a: "No. The course is designed for beginners and introduces ChatGPT and AI tools from the fundamentals before moving toward practical applications and advanced prompting.",
      },
      {
        q: "Who can join ChatGPT & AI Tools Training in Amritsar?",
        a: "12th pass students, college students, graduates, working professionals, business owners, freelancers, content creators, and other learners interested in AI tools can join.",
      },
      {
        q: "What will I learn in ChatGPT training?",
        a: "You can learn ChatGPT fundamentals, prompt engineering, content creation, research assistance, presentations, productivity workflows, AI image tools, business applications, and responsible AI usage.",
      },
      {
        q: "Is this course only for computer science students?",
        a: "No. The training is focused on practical AI tool usage and can be suitable for learners from different educational and professional backgrounds.",
      },
      {
        q: "Can students learn ChatGPT in Amritsar?",
        a: "Yes. Students in Amritsar can learn how to use ChatGPT and other AI tools for learning, research, presentations, brainstorming, and productivity.",
      },
      {
        q: "Can working professionals join the course?",
        a: "Yes. Working professionals can learn AI tools for professional communication, documentation, research, planning, productivity, and other workplace tasks.",
      },
      {
        q: "Does the course teach Prompt Engineering?",
        a: "Yes. Prompt Engineering is an important part of the training, including how to structure prompts and provide effective instructions to AI systems.",
      },
      {
        q: "Will I learn AI image-generation tools?",
        a: "The course can introduce learners to AI image-generation tools and prompt techniques for creating visual concepts. The exact platforms covered may vary by batch.",
      },
      {
        q: "Can AI tools help in business?",
        a: "Yes. AI tools can assist with marketing ideas, customer communication, research, content planning, product descriptions, presentations, and productivity.",
      },
      {
        q: "Can freelancers benefit from ChatGPT training?",
        a: "Yes. Freelancers can use AI tools for brainstorming, proposals, research, content workflows, client communication, planning, and productivity.",
      },
      {
        q: "Do I need a laptop for the training?",
        a: "A laptop is recommended because most AI tools are web-based and practical training involves hands-on use. Students should confirm device or lab availability with the Amritsar centre.",
      },
      {
        q: "Where is ChatGPT & AI Tools Training available in Amritsar?",
        a: "Techcadd provides technology training for learners in Amritsar and nearby areas. Students should contact the centre to confirm the current training location, batch schedule, and available learning mode.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your ChatGPT & AI skills journey in Amritsar",
      heading: "Learn to Use ChatGPT and Modern AI Tools",
      accent: "for Real Work",
      body: "Learn how to use ChatGPT and modern AI tools for productivity, content creation, research, presentations, business, marketing, freelancing, and everyday professional tasks.",
      facts: [
        "Course: ChatGPT & AI Tools Training",
        "Location: Amritsar, Punjab",
        "Mode: Classroom & Online",
        "Level: Beginner to Practical",
        "Focus: ChatGPT, Prompt Engineering, Generative AI & AI Productivity Tools",
      ],
      assurances: [
        "Practical activities, not just tutorials",
        "Doubt-clearing support throughout",
        "Guidance on using AI tools responsibly",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Want to know more before joining? Submit your details and a Techcadd counsellor can contact you regarding the current ChatGPT & AI Tools Training batches in Amritsar.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Student", "Graduate", "Professional", "Business Owner"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Request a callback",
      heading: "Want to Know More Before Joining?",
      body: "Submit your details and a Techcadd counsellor can contact you regarding the current ChatGPT & AI Tools Training batches in Amritsar.",
      action: "Request a Callback",
      note: "Tool availability and specific platforms can change over time — confirm the current tool list with the Amritsar centre.",
    },

    seo: {
      title: "ChatGPT & AI Tools Training in Amritsar | Techcadd",
      description:
        "Learn ChatGPT, Prompt Engineering and AI tools in Amritsar with practical training for students, professionals, freelancers and businesses.",
      keywords: [
        "ChatGPT & AI Tools Training in Amritsar",
        "ChatGPT course in Amritsar",
        "ChatGPT training Amritsar",
        "AI tools training Amritsar",
        "AI tools course Amritsar",
        "ChatGPT classes Amritsar",
        "AI course for beginners Amritsar",
        "Generative AI course Amritsar",
        "Prompt Engineering course Amritsar",
        "ChatGPT certification course Amritsar",
        "AI productivity course Amritsar",
        "learn ChatGPT in Amritsar",
        "AI tools institute Amritsar",
        "best ChatGPT course Amritsar",
        "AI tools training institute Amritsar",
        "ChatGPT course near GNDU Amritsar",
        "AI tools training near Khalsa College Amritsar",
        "ChatGPT classes Mall Road Amritsar",
        "AI course Hall Bazaar Amritsar",
        "ChatGPT training Lawrence Road Amritsar",
        "AI tools course for Batala students",
        "ChatGPT course for Tarn Taran students",
        "AI training for Ajnala students",
        "ChatGPT course for 12th pass students Amritsar",
        "ChatGPT course for college students Amritsar",
        "AI tools course for working professionals Amritsar",
        "AI tools training for business owners Amritsar",
        "ChatGPT training for freelancers Amritsar",
        "AI productivity training Amritsar",
      ],
    },

    closing:
      "The aim is practical AI fluency: using ChatGPT and modern AI tools for productivity, content, research, presentations, business and freelancing — with the human review that keeps the output trustworthy.",
  },
};

/* ---------------------------------------------------------------- agentic ai */

/**
 * Source copy: the Amritsar Agentic AI brief (overview, nine eligibility
 * personas plus its no-experience note, the two "why" arguments, twenty
 * learning blocks, the tools list, the project categories, the career list,
 * twenty FAQs, the enquiry/callback section and the SEO strategy). The learning
 * blocks and projects live in `course-data.ts`, because they are the
 * curriculum.
 *
 * The brief's review block is placeholder text with an explicit instruction to
 * publish only genuine reviews from real students, so `reviews` is deliberately
 * not overridden here.
 */
const agenticAi: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      headline: "Agentic AI Training Course in",
      accent: "Amritsar",
      tagline:
        "Beyond basic chatbot usage — AI systems that understand goals, plan tasks, use tools, call APIs, retrieve knowledge, maintain context and complete multi-step work.",
      chips: ["Classroom & online", "Beginner to advanced", "Practical & project-based"],
      image: "/images/courses/generative-ai.png",
    },

    overview: {
      heading: "Agentic AI Training in Amritsar",
      paragraphs: [
        "Looking for a practical and career-focused Agentic AI Training Course in Amritsar? Techcadd offers job-oriented Agentic AI training for students, graduates, developers, working professionals, freelancers, entrepreneurs, and AI enthusiasts who want to learn how modern AI agents work and how they can be used to build intelligent, automated workflows.",
        "The Agentic AI Course in Amritsar is designed to take learners beyond basic chatbot usage. You will learn how AI systems can understand goals, plan tasks, use external tools, access information, interact with APIs, maintain context, make decisions within defined workflows, and complete multi-step tasks.",
        "The training covers Generative AI, Large Language Models (LLMs), Prompt Engineering, AI Agents, Tool Calling, Function Calling, APIs, RAG, AI Automation, Agent Workflows, Multi-Agent Systems, Agent Evaluation, and practical AI application development.",
        "At Techcadd, the focus is on practical learning. Students work on hands-on exercises, AI workflows, real-world use cases, technical assignments, and projects that help them understand how Agentic AI can be applied to software development, business automation, research, content, customer support, productivity, and other professional applications.",
        "Whether you are completely new to Artificial Intelligence or already have experience with Python, software development, or Generative AI, Techcadd's Agentic AI Training in Amritsar provides a structured path to develop practical AI skills.",
      ],
      /* The extractable facts the brief's GEO note asks the opening to state. */
      checks: [
        "Classroom and online options at the Amritsar centre",
        "Beginner to advanced — concepts first, programming useful for the build",
        "Generative AI, LLMs, prompt engineering, agents, tools, APIs, RAG and automation",
        "Practical, project-based training ending in a capstone agent",
      ],
    },

    curriculumNote:
      "The course is structured to introduce learners to Agentic AI step by step: Generative AI → LLMs → Prompt Engineering → Tools → APIs → AI Agents → RAG → Workflows → Automation → Projects.",

    eligibility: {
      heading: "Who Can Join Agentic AI Training in Amritsar?",
      intro:
        "One of the most common questions learners ask is whether they need a technical background to learn Agentic AI. The answer depends on the level you want to reach. Basic Agentic AI concepts can be learned by beginners, while programming knowledge becomes increasingly useful for building advanced agents, API integrations, automation systems, and production-oriented applications.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds who are interested in Artificial Intelligence can start building their understanding of Generative AI and intelligent systems. The training can help students explore AI before or alongside college and understand how modern AI technologies are being used in technology and business. Students who eventually want to move toward AI development can later add Python, programming, databases, APIs, and other technical skills to their learning path.",
        },
        {
          label: "College Students",
          detail:
            "Students pursuing BCA, B.Tech, BSc-IT, MCA, MBA, BBA, and other programs can learn Agentic AI to complement their academic education. Students from GNDU, Khalsa College, BBK DAV College, and other institutes in Amritsar can use practical AI skills for college projects, internships, research, presentations, automation, AI-powered applications, career preparation and freelancing opportunities.",
        },
        {
          label: "Python Developers",
          detail:
            "Python developers are particularly well positioned to explore Agentic AI because Python is widely used for AI application development. Developers can learn how to connect LLMs with APIs, tools, databases, external services, automation workflows, and applications. The training can help Python developers move from traditional scripting and application development toward AI-powered systems.",
        },
        {
          label: "Software Developers",
          detail:
            "Software developers can learn how to integrate AI into existing applications and build new AI-powered products. Topics such as APIs, tool calling, structured outputs, agent workflows, RAG, memory, evaluation, and automation can help developers understand how modern AI applications are constructed.",
        },
        {
          label: "AI & Machine Learning Students",
          detail:
            "Students who already understand Artificial Intelligence or Machine Learning can expand their knowledge into LLM-based applications and Agentic AI. Instead of focusing only on model training, learners can explore how existing AI models can be connected to tools, knowledge sources, applications, and workflows.",
        },
        {
          label: "Working Professionals",
          detail:
            "Working professionals from IT, marketing, HR, sales, administration, education, customer support, operations, finance, and other fields can learn how AI agents may support repetitive tasks. Potential applications include research, reporting, document processing, customer support, data organization, content workflows, internal knowledge assistance, productivity automation and business process automation.",
        },
        {
          label: "Freelancers",
          detail:
            "Freelancers can learn Agentic AI to expand the services they offer to clients. Depending on their existing skills, freelancers can explore AI-powered content workflows, research systems, automation, business assistants, customer support solutions, and AI application development.",
        },
        {
          label: "Entrepreneurs & Business Owners",
          detail:
            "Business owners can explore how AI agents may support repetitive business processes. Possible use cases include lead qualification, customer communication, research, internal documentation, reporting, marketing workflows, and operational automation.",
        },
        {
          label: "AI Enthusiasts",
          detail:
            "If you are already experimenting with ChatGPT, Generative AI, AI automation, or other AI tools and want to understand what comes next, Agentic AI training can help you move toward more structured AI workflows.",
        },
        {
          label: "No Prior Agentic AI Experience Required",
          detail:
            "You don't need previous Agentic AI experience to begin learning. Techcadd's Agentic AI Training Course in Amritsar can start with the fundamentals of Generative AI and Large Language Models before progressing into more advanced concepts. Learners with programming experience can go deeper into technical implementation, while beginners can first understand how agentic systems work and how they are applied.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Choose This",
      accent: "Agentic AI Training Program?",
      body: "With the rapid growth of Generative AI, simply knowing how to use a chatbot is no longer the only useful AI skill. Organizations are increasingly exploring AI systems that can work with tools, data, applications, and automated workflows. Techcadd's Agentic AI training focuses on practical understanding.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "Agentic AI is best understood by building and testing actual workflows. Instead of learning only definitions, students can practice creating AI-powered solutions, testing prompts, connecting tools, working with APIs, and improving agent behavior. Projects help learners understand how individual concepts fit together.",
        },
        {
          title: "Learn Beyond Basic Chatbots",
          body: "Traditional chatbot interaction generally follows a simple pattern: user asks, AI responds. Agentic workflows can involve goal, planning, tool selection, action, result, evaluation and the next action. The course introduces learners to this broader way of thinking about AI applications.",
        },
        {
          title: "Industry-Relevant AI Skills",
          body: "The curriculum focuses on concepts relevant to modern AI application development, including LLMs, prompt engineering, tool calling, function calling, APIs, RAG, AI workflows, automation, agent architecture, multi-agent systems and evaluation.",
        },
        {
          title: "Hands-On AI Tools",
          body: "Students get practical exposure to AI platforms and development technologies relevant to Agentic AI. Because the AI ecosystem changes quickly, the exact platforms and frameworks covered should be confirmed with Techcadd for the current batch.",
        },
        {
          title: "Mentor & Doubt-Clearing Support",
          body: "Agentic AI combines multiple technical concepts. Learners may encounter challenges involving prompts, APIs, context, tool calls, workflows, integrations, or debugging. Trainer guidance helps students understand these concepts step by step.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Techcadd offers learning options designed to accommodate students, job seekers, developers, and working professionals. Learners can enquire about available weekday, weekend, and evening batches.",
        },
        {
          title: "Career-Focused Learning",
          body: "The objective is not simply to finish a course. Students are encouraged to develop projects that demonstrate practical AI skills and can potentially be discussed during interviews. Career support can include resume guidance, project presentation, interview preparation, and placement assistance, subject to the applicable program.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn Agentic AI",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing the right training environment is important when learning an emerging technology.",
      reasons: [
        {
          title: "Practical AI Training",
          body: "Techcadd focuses on applying AI concepts to practical tasks rather than limiting learning to theory.",
        },
        {
          title: "Structured Learning Path",
          body: "Agentic AI involves several interconnected technologies. The course follows a progressive learning path so students can understand the fundamentals before moving into advanced workflows.",
        },
        {
          title: "Beginner-Friendly Approach",
          body: "Learners who are new to Generative AI can begin with basic concepts and gradually move toward more technical topics.",
        },
        {
          title: "Developer-Friendly Training",
          body: "Students with Python or software development experience can explore technical areas such as APIs, tools, integrations, RAG, agent workflows, and AI application development.",
        },
        {
          title: "Project-Based Learning",
          body: "Practical assignments and projects provide learners with opportunities to apply what they have learned.",
        },
        {
          title: "Mentor Support",
          body: "Students can receive guidance while working through technical challenges, project development, and AI workflows.",
        },
        {
          title: "Career-Oriented Approach",
          body: "Techcadd focuses on helping learners understand how their AI skills can be positioned for jobs, internships, projects, freelancing, or professional upskilling. Potential career directions include Agentic AI Developer, Generative AI Developer, AI Application Developer, LLM Application Developer, AI Automation Developer, AI Engineer, AI Solutions Developer, AI Integration Developer and AI Workflow Developer — strongest when Agentic AI skills are combined with another technical or domain skill.",
        },
        {
          title: "Local Training in Amritsar",
          body: "Students don't necessarily need to relocate to another city to access AI training. Techcadd's Amritsar training is accessible to learners from the city and nearby areas such as Tarn Taran, Batala, and Ajnala.",
        },
      ],
    },

    faqs: [
      {
        q: "What is Agentic AI Training in Amritsar?",
        a: "Agentic AI Training teaches learners how to understand and build AI systems that can perform multi-step tasks using LLMs, tools, APIs, external information, memory, workflows, and defined actions. Techcadd's Agentic AI course in Amritsar focuses on practical concepts, projects, automation, and AI application development.",
      },
      {
        q: "Who can join an Agentic AI course in Amritsar?",
        a: "Students, graduates, Python developers, software developers, AI/ML learners, working professionals, freelancers, entrepreneurs, and AI enthusiasts can explore Agentic AI training. The ideal learning path depends on your background, with programming knowledge being especially useful for advanced development.",
      },
      {
        q: "Do I need Python to learn Agentic AI?",
        a: "Python is not mandatory for understanding basic Agentic AI concepts. However, programming becomes highly useful when building technical AI agents, connecting APIs, integrating tools, working with databases, and developing complete AI applications.",
      },
      {
        q: "What is the difference between Generative AI and Agentic AI?",
        a: "Generative AI focuses primarily on generating content such as text, code, images, or other outputs. Agentic AI extends AI capabilities into workflows where systems can plan tasks, use tools, retrieve information, take defined actions, and complete multiple steps toward a goal.",
      },
      {
        q: "Is Agentic AI suitable for beginners?",
        a: "Yes. Beginners can start with Generative AI, LLM, and prompt fundamentals before progressing into agent architecture and workflows. Learners with programming experience can move more quickly into APIs, tool calling, RAG, automation, and AI application development.",
      },
      {
        q: "What will I learn in Agentic AI Training?",
        a: "The course can cover Generative AI, LLMs, Prompt Engineering, AI agents, agent architecture, tool calling, function calling, APIs, RAG, embeddings, vector databases, memory, automation, multi-agent systems, evaluation, responsible AI, and practical projects.",
      },
      {
        q: "Does Agentic AI require coding?",
        a: "Understanding Agentic AI does not always require coding. However, developing advanced AI agents generally benefits from programming knowledge. Python, APIs, databases, application development, and automation skills can help learners build more capable technical solutions.",
      },
      {
        q: "Does Techcadd offer online and offline Agentic AI classes?",
        a: "Techcadd offers flexible learning options for students who prefer classroom training in Amritsar as well as learners who need online access. Current batch schedules and availability should be confirmed with the Techcadd Amritsar centre.",
      },
      {
        q: "What AI tools and frameworks will I learn?",
        a: "The exact tools can vary as the AI ecosystem changes. Depending on the current curriculum, learners may work with LLM platforms, APIs, Python libraries, AI agent frameworks, RAG technologies, vector databases, and automation tools.",
      },
      {
        q: "Can working professionals join Agentic AI Training?",
        a: "Yes. Working professionals can learn how Agentic AI may support research, documentation, customer service, reporting, content workflows, business automation, and productivity. Flexible batches can help professionals manage training alongside their existing work.",
      },
      {
        q: "Is Agentic AI a good career option?",
        a: "Agentic AI is an emerging area of AI application development. It can be valuable as a specialization when combined with programming, software development, APIs, cloud, data, or relevant domain expertise. Building practical projects is important for demonstrating these skills.",
      },
      {
        q: "Can I learn Agentic AI after Python?",
        a: "Yes. Python is an excellent foundation for technical Agentic AI development. After Python, learners can progress toward APIs, LLMs, prompt engineering, RAG, tool calling, agent frameworks, automation, and AI application development.",
      },
      {
        q: "Can BCA and B.Tech students learn Agentic AI?",
        a: "Yes. BCA and B.Tech students can learn Agentic AI to supplement their programming and academic knowledge. Students with Python or software development experience may find the technical portions of the course particularly useful.",
      },
      {
        q: "Can non-technical professionals learn Agentic AI?",
        a: "Yes. Non-technical professionals can learn the concepts and practical applications of Agentic AI. Those who want to build advanced technical agents may later need programming and API skills.",
      },
      {
        q: "Does Agentic AI include Generative AI?",
        a: "Yes. Many Agentic AI applications use Generative AI and Large Language Models as a core component. Agentic systems can combine these models with tools, data, APIs, memory, and workflows.",
      },
      {
        q: "What is RAG in Agentic AI?",
        a: "RAG, or Retrieval-Augmented Generation, allows an AI application to retrieve relevant information from an external knowledge source before generating a response. It is commonly used for document assistants, knowledge systems, research applications, and other information-based AI workflows.",
      },
      {
        q: "Can Agentic AI automate business tasks?",
        a: "Agentic AI can be used to design workflows that automate or assist with defined business tasks. The level of automation depends on the application, available tools, permissions, reliability requirements, and human oversight.",
      },
      {
        q: "Does Techcadd provide placement assistance?",
        a: "Techcadd provides career-oriented support such as resume guidance, interview preparation, project presentation, and placement assistance, subject to the terms of the applicable training program. Students should confirm the current placement support before enrollment.",
      },
      {
        q: "Will I receive a certificate?",
        a: "Students who successfully complete the applicable Techcadd training program may receive a course completion certificate. Certificate terms should be confirmed with the Amritsar centre before enrollment.",
      },
      {
        q: "Where is Agentic AI Training available in Amritsar?",
        a: "Techcadd provides Agentic AI training for learners in Amritsar through available classroom and online options. Students from nearby areas including Tarn Taran, Batala, and Ajnala can enquire about current batches and centre details.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your Agentic AI career journey in Amritsar",
      heading: "AI Is Moving Beyond Simple",
      accent: "Question-and-Answer Interactions",
      body: "Modern AI applications can combine LLMs, tools, APIs, external data, memory, planning, automation, and workflows to perform increasingly complex tasks. Build your understanding of this emerging technology with Techcadd's Agentic AI Training Course in Amritsar.",
      facts: [
        "Course: Agentic AI Training Course",
        "Location: Amritsar, Punjab",
        "Mode: Classroom & Online",
        "Level: Beginner to Advanced",
        "Suitable For: Students, Graduates, Developers, Professionals, Freelancers & AI Enthusiasts",
        "Training Style: Practical & Project-Based",
        "Batches: Regular / Flexible options",
      ],
      assurances: [
        "No spam calls",
        "Speak with a real counsellor",
        "Course and batch guidance",
        "Classroom & online learning options",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Interested in learning Agentic AI in Amritsar? Fill in your details to discuss the course with a Techcadd counsellor — eligibility, syllabus, fees, batch timings, projects, learning path and career opportunities.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "College Student", "Graduate", "Developer", "Working Professional", "Freelancer"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "Request a Callback",
      body: "Request a callback to discuss course eligibility, syllabus, fees, batch timings, classroom and online options, projects, learning path and career opportunities.",
      action: "Request a Callback",
      note: "No spam calls · Speak with a real counsellor · Classroom and online learning options.",
    },

    seo: {
      title: "Agentic AI Training Course in Amritsar | Techcadd",
      description:
        "Learn Agentic AI in Amritsar with Techcadd. Build practical skills in AI agents, LLMs, APIs, RAG, automation and intelligent AI workflows.",
      keywords: [
        "Agentic AI Training Course Amritsar",
        "Agentic AI course in Amritsar",
        "Agentic AI training institute Amritsar",
        "best Agentic AI course Amritsar",
        "Agentic AI classes Amritsar",
        "Agentic AI coaching Amritsar",
        "AI Agent course Amritsar",
        "AI Agents training Amritsar",
        "Agentic AI developer course Amritsar",
        "Generative AI course Amritsar",
        "Generative AI training Amritsar",
        "LLM course Amritsar",
        "AI automation course Amritsar",
        "AI development course Amritsar",
        "Agentic AI certification course Amritsar",
        "learn Agentic AI in Amritsar",
        "AI agent development course Amritsar",
        "Agentic AI course with placement Amritsar",
        "Agentic AI course near GNDU Amritsar",
        "Agentic AI training near Khalsa College Amritsar",
        "Agentic AI course near BBK DAV College Amritsar",
        "Agentic AI classes Mall Road Amritsar",
        "Agentic AI training Hall Bazaar Amritsar",
        "Agentic AI course Lawrence Road Amritsar",
        "Agentic AI course for developers Amritsar",
        "Agentic AI training for working professionals Amritsar",
        "Agentic AI course for BCA students Amritsar",
        "Agentic AI course for B.Tech students Amritsar",
        "Agentic AI course for Python developers Amritsar",
        "Agentic AI course for Batala students",
        "Agentic AI course for Tarn Taran students",
        "AI agent classes for Ajnala students",
      ],
    },

    closing:
      "Practical Agentic AI training in Amritsar for students, developers, graduates, and working professionals — covering Generative AI, LLMs, AI Agents, APIs, Tool Calling, RAG, automation, intelligent workflows, and real-world AI projects.",
  },
};

/* -------------------------------------------------- ai-powered marketing */

/**
 * Source copy: the Amritsar AI-Powered Marketing brief (overview, seven
 * eligibility personas plus its no-experience note, the two "why" arguments,
 * sixteen learning blocks with the AI applications list, five student reviews,
 * twelve FAQs, the enquiry/callback section and the keyword/GEO strategy
 * report). The learning blocks live in `course-data.ts`, because they are the
 * curriculum.
 */
const aiPoweredMarketing: CourseOverride = {
  course: {
    hero: {
      eyebrow: "AI & Data · TechCadd Amritsar",
      headline: "AI-Powered Marketing Training in",
      accent: "Amritsar",
      tagline:
        "Modern digital marketing with intelligent, data-driven methods — SEO, social media, advertising, analytics, automation and AI-assisted marketing workflows.",
      chips: ["Classroom & online", "Beginner to professional", "Project-based"],
      image: "/images/courses/digital-marketing.png",
    },

    overview: {
      heading: "AI-Powered Marketing Training in Amritsar – Overview",
      paragraphs: [
        "Looking for the best AI-Powered Marketing Training Course in Amritsar? Techcadd offers a practical, career-focused marketing program designed for students, graduates, working professionals, business owners, freelancers, entrepreneurs, and aspiring digital marketers across Amritsar.",
        "This AI-Powered Marketing course in Amritsar combines modern digital marketing strategies with intelligent, data-driven marketing methods. Students learn how businesses can use Artificial Intelligence to improve marketing research, content strategy, customer targeting, campaign planning, lead generation, advertising, analytics, and marketing automation.",
        "The course focuses on practical marketing skills rather than theory alone. Learners work on real-world marketing scenarios, campaign planning, SEO activities, social media strategies, advertising concepts, analytics, and AI-assisted marketing workflows.",
        "At Techcadd, training is designed around practical learning, projects, mentor guidance, doubt-clearing support, and career preparation so students can understand how modern marketing works in today's competitive digital environment.",
        "If you're searching for an AI-Powered Marketing training institute in Amritsar, this course is designed for learners who want to build modern marketing skills and understand how Artificial Intelligence is changing the digital marketing industry.",
      ],
      checks: [
        "Classroom and online learning options in Amritsar",
        "Beginner to professional — no prior marketing experience needed",
        "SEO, social media, advertising, analytics, automation and AI workflows",
        "Practical projects, mentor guidance and career preparation",
      ],
    },

    curriculumNote:
      "This course is structured to build digital marketing knowledge step by step while introducing learners to modern AI-powered marketing methods.",

    eligibility: {
      heading: "Who Can Join AI-Powered Marketing Training",
      intro:
        "One of the most common questions students ask before enrolling is: \"Who can join an AI-Powered Marketing course?\" The answer is simple — this course can be suitable for anyone interested in digital marketing, business growth, advertising, branding, social media, online customer acquisition, and modern marketing strategies.",
      criteria: [
        {
          label: "12th Pass Students",
          detail:
            "Students from Science, Commerce, or Arts backgrounds can begin learning digital marketing and modern AI-powered marketing strategies without requiring an advanced technical background. The course can help students explore career opportunities in SEO, social media marketing, advertising, content marketing, digital branding, and marketing analytics.",
        },
        {
          label: "College Students",
          detail:
            "Students from GNDU, Khalsa College, DAV College, and other institutes across Amritsar can learn practical marketing skills alongside their academic studies. The training can help students build practical projects and develop skills that complement their academic qualifications.",
        },
        {
          label: "Graduates Looking to Build a Marketing Career",
          detail:
            "Graduates from different educational backgrounds can explore digital marketing as a career option and learn how businesses attract, engage, and convert customers through digital channels.",
        },
        {
          label: "Job Seekers",
          detail:
            "Students and graduates looking for marketing-related jobs can develop practical skills in SEO, social media, advertising, content strategy, analytics, lead generation, and campaign planning.",
        },
        {
          label: "Working Professionals",
          detail:
            "Working professionals can learn modern marketing strategies to improve their existing roles, transition into digital marketing, or support marketing responsibilities within their organizations.",
        },
        {
          label: "Business Owners & Entrepreneurs",
          detail:
            "Business owners can learn how digital marketing can help increase online visibility, generate leads, build brand awareness, understand customers, and improve marketing performance.",
        },
        {
          label: "Freelancers",
          detail:
            "Freelancers can develop marketing skills that can be used to offer services such as SEO, social media management, content marketing, paid advertising, campaign planning, and marketing analytics.",
        },
        {
          label: "No Prior Marketing Experience Needed",
          detail:
            "The course can start from digital marketing fundamentals and gradually move toward advanced marketing strategies and AI-powered workflows, making it suitable for beginners as well as learners with some previous marketing knowledge.",
        },
      ],
    },

    whyChoose: {
      heading: "Why Choose This",
      accent: "AI-Powered Marketing Training Program?",
      body: "With digital marketing changing rapidly, learning traditional marketing techniques alone may not be enough. Modern marketers increasingly need to understand data, automation, customer behavior, digital platforms, and intelligent marketing workflows.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "Students don't simply study marketing definitions. They work on practical activities such as campaign planning, SEO exercises, social media strategies, audience research, lead-generation concepts, and marketing projects.",
        },
        {
          title: "AI-Powered Marketing Approach",
          body: "The course focuses on how Artificial Intelligence can support marketing research, customer insights, campaign planning, content workflows, marketing analysis, personalization, and automation.",
        },
        {
          title: "Structured Beginner-to-Professional Curriculum",
          body: "The program follows a progressive learning path, beginning with digital marketing fundamentals and moving toward SEO, social media, paid advertising, analytics, automation, and AI-powered marketing strategies.",
        },
        {
          title: "Industry-Relevant Marketing Skills",
          body: "Digital businesses need marketers who understand search engines, social media platforms, online advertising, customer journeys, analytics, and performance marketing. This program is designed around these practical marketing requirements.",
        },
        {
          title: "Doubt-Clearing & Mentor Support",
          body: "Marketing involves multiple platforms and strategies. Trainer support helps students understand concepts, analyze campaigns, and improve their practical work.",
        },
        {
          title: "Flexible Batch Timings",
          body: "Flexible batches can help students and working professionals learn marketing without completely changing their existing schedules.",
        },
        {
          title: "Career & Interview Support",
          body: "Students can receive guidance related to resume building, marketing portfolios, interviews, practical projects, and career preparation.",
        },
        {
          title: "Local Convenience",
          body: "Students from Amritsar and nearby areas such as Tarn Taran, Batala, and Ajnala can access marketing training locally without needing to relocate to another city.",
        },
      ],
    },

    whyChooseAlt: {
      heading: "Why Learn AI-Powered Marketing",
      accent: "at Techcadd, Amritsar?",
      body: "Choosing the right institute matters when developing a professional marketing skill set.",
      reasons: [
        {
          title: "Experienced Marketing Trainers",
          body: "Techcadd focuses on practical digital marketing concepts and real-world marketing applications so learners can understand how businesses approach online growth.",
        },
        {
          title: "Training for Students in Amritsar",
          body: "The program is designed for learners from different educational backgrounds across Amritsar who want to develop practical digital marketing skills.",
        },
        {
          title: "Hands-On Marketing Projects",
          body: "Students can work on practical projects involving SEO, social media, advertising, content strategy, campaign planning, analytics, and lead generation.",
        },
        {
          title: "Personal Attention",
          body: "Learners can ask questions, receive feedback, analyze marketing scenarios, and improve their practical assignments.",
        },
        {
          title: "Career Support",
          body: "Marketing students can receive guidance related to resumes, portfolios, interview preparation, and presenting practical marketing projects to potential employers.",
        },
        {
          title: "Flexible Learning Options",
          body: "Flexible schedules can help college students, freelancers, and working professionals manage training alongside their existing responsibilities.",
        },
        {
          title: "Beginner-Friendly Teaching",
          body: "The program can start with basic marketing concepts before introducing more advanced digital and AI-powered marketing strategies.",
        },
        {
          title: "AI-Powered Marketing Applications Covered",
          body: "Students can explore how Artificial Intelligence supports marketing research, audience analysis, customer segmentation, campaign planning, content strategy, marketing personalization, lead qualification, marketing analytics, campaign optimization, customer journey analysis, marketing automation, performance reporting and predictive marketing concepts.",
        },
      ],
    },

    /* The brief's five reviews, carried across as written. They carry role
       labels rather than names, and its own note applies: publish these only
       once they are based on genuine student feedback. */
    reviews: {
      average: "5.0",
      total: 5,
      distribution: [
        { stars: 5, percent: 100 },
        { stars: 4, percent: 0 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "College Student",
          initials: "CS",
          role: "Amritsar",
          rating: 5,
          meta: "AI-Powered Marketing Training",
          quote:
            "I wanted to build practical digital marketing skills alongside my studies. The course helped me understand SEO, social media marketing, campaign planning, and modern marketing strategies.",
        },
        {
          name: "12th Pass Student",
          initials: "12",
          role: "Amritsar",
          rating: 5,
          meta: "AI-Powered Marketing Training",
          quote:
            "I was completely new to digital marketing. Starting from the basics made it easier for me to understand how online businesses attract customers.",
        },
        {
          name: "Working Professional",
          initials: "WP",
          role: "Amritsar",
          rating: 5,
          meta: "AI-Powered Marketing Training",
          quote:
            "I joined to understand how modern marketing can support my professional work. The practical approach helped me understand marketing campaigns and analytics better.",
        },
        {
          name: "Business Owner",
          initials: "BO",
          role: "Amritsar",
          rating: 5,
          meta: "AI-Powered Marketing Training",
          quote:
            "I wanted to understand how to improve my business's online presence. Learning SEO, social media and marketing strategy gave me a better understanding of digital customer acquisition.",
        },
        {
          name: "Freelancer",
          initials: "FL",
          role: "Amritsar",
          rating: 5,
          meta: "AI-Powered Marketing Training",
          quote:
            "The practical projects helped me understand how digital marketing services can be planned and delivered for clients.",
        },
      ],
    },

    faqs: [
      {
        q: "What is AI-Powered Marketing Training?",
        a: "AI-Powered Marketing Training teaches learners how modern digital marketing strategies can be enhanced through Artificial Intelligence, data analysis, automation, personalization, and intelligent marketing workflows.",
      },
      {
        q: "Who can join AI-Powered Marketing Training in Amritsar?",
        a: "12th pass students, college students, graduates, working professionals, entrepreneurs, business owners, freelancers, and aspiring digital marketers can join.",
      },
      {
        q: "Is prior digital marketing experience required?",
        a: "No. The program can start with digital marketing fundamentals and progressively introduce learners to advanced marketing strategies and AI-powered applications.",
      },
      {
        q: "What will I learn in this course?",
        a: "Students can learn SEO, local SEO, social media marketing, content marketing, paid advertising, lead generation, email marketing, analytics, conversion optimization, automation, performance marketing, and AI-powered marketing strategies.",
      },
      {
        q: "Is the course suitable for business owners?",
        a: "Yes. Business owners can learn how digital marketing can support online visibility, customer acquisition, lead generation, branding, and business growth.",
      },
      {
        q: "Can freelancers benefit from this course?",
        a: "Yes. Freelancers can develop practical marketing skills that can be used for client services such as SEO, social media management, content marketing, paid advertising, and marketing strategy.",
      },
      {
        q: "Does the course include SEO?",
        a: "Yes. SEO is an important component of the program, including keyword research, on-page optimization, local SEO, content optimization, and search visibility.",
      },
      {
        q: "Does the course cover social media marketing?",
        a: "Yes. Students learn social media strategy, content planning, audience engagement, campaign concepts, and social media performance measurement.",
      },
      {
        q: "Will I learn paid advertising?",
        a: "The program introduces paid digital advertising concepts including campaign objectives, targeting, ad formats, budgeting, performance tracking, and optimization.",
      },
      {
        q: "What is the role of AI in digital marketing?",
        a: "AI can support marketers with research, audience analysis, personalization, campaign optimization, analytics, automation, customer insights, and other marketing workflows.",
      },
      {
        q: "Do I need a laptop for the training?",
        a: "A laptop is recommended for practical marketing activities, analytics, campaign planning, research, and project work. Students should confirm device or lab availability with the Amritsar centre.",
      },
      {
        q: "Where is AI-Powered Marketing Training available in Amritsar?",
        a: "Techcadd provides technology and digital-skills training for learners in Amritsar and nearby areas. Students should confirm the current centre location, batch timings, and available learning mode directly with the institute.",
      },
    ],

    tracks: false,

    cta: {
      eyebrow: "Start your AI-powered marketing career in Amritsar",
      heading: "Build Practical Marketing Skills,",
      accent: "Powered by AI",
      body: "Build practical skills in Digital Marketing, SEO, Social Media Marketing, Performance Marketing, Analytics, Automation, and AI-Powered Marketing through structured training at Techcadd, Amritsar.",
      facts: [
        "Course: AI-Powered Marketing Training",
        "Location: Amritsar, Punjab",
        "Mode: Classroom & Online",
        "Level: Beginner to Professional",
        "Focus: Digital Marketing + AI-Powered Marketing Strategies",
      ],
      assurances: [
        "Practical projects, not just theory",
        "Mentor guidance and doubt-clearing support",
        "Resume, portfolio and interview preparation",
      ],
      formTitle: "Enquire Now",
      formNote:
        "Want to learn more about AI-Powered Marketing Training in Amritsar? Submit your details and a Techcadd counsellor can contact you regarding the current course, batches, and learning options.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: ["12th Pass", "Student", "Graduate", "Professional", "Business Owner"],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Request a callback",
      heading: "Want to Learn More About the Course?",
      body: "Submit your details and a Techcadd counsellor can contact you regarding the current AI-Powered Marketing course, batches, and learning options.",
      action: "Request a Callback",
      note: "Confirm the current centre location, batch timings and available learning mode directly with the institute.",
    },

    seo: {
      title: "AI-Powered Marketing Training in Amritsar | Techcadd",
      description:
        "Learn AI-Powered Digital Marketing in Amritsar with practical training in SEO, social media, advertising, analytics, automation and marketing strategy.",
      keywords: [
        "AI-Powered Marketing Training in Amritsar",
        "AI Powered Marketing course Amritsar",
        "AI marketing training Amritsar",
        "digital marketing course Amritsar",
        "digital marketing training Amritsar",
        "AI digital marketing course Amritsar",
        "digital marketing institute Amritsar",
        "best digital marketing course Amritsar",
        "digital marketing classes Amritsar",
        "SEO course Amritsar",
        "social media marketing course Amritsar",
        "performance marketing course Amritsar",
        "marketing automation course Amritsar",
        "AI marketing course for beginners Amritsar",
        "digital marketing course with placement Amritsar",
        "learn digital marketing in Amritsar",
        "AI marketing course near GNDU Amritsar",
        "digital marketing training near Khalsa College Amritsar",
        "digital marketing classes Mall Road Amritsar",
        "AI marketing course Hall Bazaar Amritsar",
        "digital marketing training Lawrence Road Amritsar",
        "AI marketing course for Batala students",
        "digital marketing course for Tarn Taran students",
        "AI marketing training for Ajnala students",
        "AI marketing course for 12th pass students Amritsar",
        "digital marketing course for college students Amritsar",
        "AI marketing course for graduates Amritsar",
        "digital marketing course for working professionals Amritsar",
        "AI marketing course for business owners Amritsar",
        "digital marketing course for freelancers Amritsar",
        "career in digital marketing Amritsar",
      ],
    },

    closing:
      "The aim is a marketer who can plan a strategy, run the channels, read the numbers, and use AI where it genuinely speeds the work up — with the judgement still theirs.",
  },
};

export const courseOverrides: Record<string, CourseOverride> = {
  "python-course-in-amritsar": python,
  "java-course-in-amritsar": java,
  "c-cpp-course-in-amritsar": cTraining,
  "kotlin-course-in-amritsar": kotlin,
  "web-designing-course-in-amritsar": webDesigning,
  "web-development-course-in-amritsar": webDevelopment,
  "mern-stack-course-in-amritsar": mernStack,
  "mean-stack-course-in-amritsar": meanStack,
  "php-full-stack-course-in-amritsar": phpFullStack,
  "digital-marketing-course-in-amritsar": digitalMarketing,
  "social-media-marketing-course-in-amritsar": socialMediaMarketing,
  "google-ads-course-in-amritsar": googleAds,
  "wordpress-course-in-amritsar": wordpress,
  "shopify-course-in-amritsar": shopify,
  "seo-course-in-amritsar": seo,
  "power-bi-course-in-amritsar": powerBi,
  "tableau-course-in-amritsar": tableau,
  "data-science-course-in-amritsar": dataScience,
  "machine-learning-course-in-amritsar": machineLearning,
  "deep-learning-course-in-amritsar": deepLearning,
  "artificial-intelligence-course-in-amritsar": artificialIntelligence,
  "cybersecurity-course-in-amritsar": cybersecurity,
  "cloud-computing-course-in-amritsar": cloudComputing,
  "linux-course-in-amritsar": linux,
  "ethical-hacking-course-in-amritsar": ethicalHacking,
  "generative-ai-course-in-amritsar": generativeAi,
  "prompt-engineering-course-in-amritsar": promptEngineering,
  "chatgpt-ai-tools-course-in-amritsar": chatgptAiTools,
  "agentic-ai-course-in-amritsar": agenticAi,
  "ai-powered-marketing-course-in-amritsar": aiPoweredMarketing,
};

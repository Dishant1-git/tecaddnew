/**
 * Seed data for every slug under /courses/[slug].
 *
 * Each entry is deliberately compact: it carries only what is *specific* to the
 * course. Everything shared across courses — eligibility personas, FAQ shell,
 * hero stat rail, module blurbs — is composed in `courses.ts` from these seeds,
 * so adding a course means adding one object here and nothing else.
 *
 * Copy is placeholder marketing content for the Amritsar site. Swap the strings;
 * no component needs touching.
 */

/**
 * The four catalogue categories, plus three that exist only in the after-12th
 * registry (`after-12th-data.ts`) and one that exists only in the training
 * registry (`training-data.ts`) — both of which reuse this seed shape. Keeping
 * them in one union means every registry builds through the same `Course`
 * model; `courses.ts` decides which of them the /courses index renders.
 */
export type CourseCategory =
  | "Programming"
  | "AI & Data"
  | "Digital Marketing"
  | "Cyber & Cloud"
  | "Graphics & Media"
  | "Design & Drafting"
  | "Business & Office"
  | "Internship & Training";

/** One curriculum unit: a title plus the concrete skills it leaves behind. */
export type Topic = {
  t: string;
  s: string[];
  /** Optional bespoke deliverable; generated from `s` when omitted. */
  d?: string;
  /** Optional bespoke module blurb; rotated boilerplate is used when omitted. */
  b?: string;
};

export type CourseSeed = {
  slug: string;
  title: string;
  category: CourseCategory;
  /** One line under the hero headline. */
  tagline: string;
  /** Sentence that opens the overview — what the course is really about. */
  focus: string;
  duration: string;
  level: string;
  topics: Topic[];
  tools: string[];
  roles: string[];
  projects: Array<{ title: string; body: string }>;
  badge?: "Hot" | "Trending" | "New";
  /** Surfaced on the /courses index as a large card. */
  featured?: boolean;
};

export const courseSeeds: CourseSeed[] = [
  /* ------------------------------------------------------------ programming */
  {
    slug: "python",
    title: "Python Programming",
    category: "Programming",
    tagline:
      "A job-oriented Python course in Amritsar for students, graduates and job seekers — from core fundamentals to automation, Django and the basics of data analysis.",
    focus:
      "Looking for the best Python Programming Training Course in Amritsar? Techcadd offers a job-oriented Python course designed for students, graduates, and job seekers across Amritsar — including those studying at GNDU, Khalsa College, DAV College, and other nearby institutes.",
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    /* The twelve blocks of "What You'll Learn in Techcadd's Python Programming
       Training", in the order the course teaches them. `b` carries the copy
       written for each block, so the module panel reads as the course's own
       prose rather than the rotated boilerplate every other seed falls back to. */
    topics: [
      {
        t: "Python Fundamentals",
        s: ["Variables and data types", "Operators", "Python's core syntax"],
        b: "You'll start with the building blocks: variables, data types, operators, and Python's core syntax. This stage focuses on writing clean, correct code and understanding exactly what your code is doing — not just copying examples.",
        d: "Clean, correct code you can read back and explain, rather than examples copied from a screen.",
      },
      {
        t: "Control Flow & Logic Building",
        s: ["Conditional statements (if-else)", "Loops (for, while)", "Structuring logic to solve real problems"],
        b: "Next, you'll learn conditional statements (if-else), loops (for, while), and how to structure logic to solve real problems. This is where \"knowing Python\" starts turning into \"thinking like a programmer\" — breaking a problem down into steps a computer can execute.",
        d: "A working program that breaks a real problem down into steps a computer can execute.",
      },
      {
        t: "Functions & Reusable Code",
        s: ["Writing functions", "Arguments and return values", "Organising code so it is reusable"],
        b: "You'll learn how to write functions, pass arguments, return values, and organize your code so it's reusable and easier to debug — a habit that separates beginner code from professional code.",
        d: "Code organised into reusable, debuggable functions — the habit that separates beginner code from professional code.",
      },
      {
        t: "Data Structures",
        s: ["Lists, tuples, dictionaries and sets", "When and why to use each one", "Choosing the right structure"],
        b: "A major part of the course covers Python's core data structures — lists, tuples, dictionaries, and sets. You'll learn when and why to use each one, since choosing the right data structure is often what makes real-world code efficient rather than clunky.",
        d: "Real-world code that stays efficient rather than clunky, because the right data structure was chosen.",
      },
      {
        t: "String Manipulation & Text Processing",
        s: ["String operations", "Formatting", "Text processing techniques"],
        b: "Since so much real-world programming involves working with text data, you'll get hands-on practice with string operations, formatting, and text processing techniques.",
        d: "Hands-on practice handling the text data almost every real program has to work with.",
      },
      {
        t: "File Handling",
        s: ["Reading from files", "Writing to files", "From automation scripts to data-processing tools"],
        b: "You'll learn to read from and write to files — a practical skill needed for almost any real application, from simple automation scripts to data-processing tools.",
        d: "A script that reads and writes files — the skill almost every real application needs.",
      },
      {
        t: "Error & Exception Handling",
        s: ["Anticipating errors", "Catching exceptions", "Handling failures gracefully"],
        b: "Bugs and errors are a normal part of programming, not a sign you're doing something wrong. You'll learn how to anticipate, catch, and handle errors gracefully, so your programs don't just crash when something unexpected happens.",
        d: "A program that handles the unexpected gracefully instead of crashing.",
      },
      {
        t: "Object-Oriented Programming (OOP)",
        s: ["Classes and objects", "Inheritance", "Structuring larger applications"],
        b: "You'll be introduced to classes, objects, inheritance, and other OOP concepts — the foundation for writing larger, well-structured Python applications and a concept that comes up in almost every technical interview.",
        d: "The foundation for larger, well-structured Python applications — and for the OOP questions almost every technical interview asks.",
      },
      {
        t: "Working with Modules & Libraries",
        s: ["Python's built-in modules", "Popular third-party libraries", "Extending what your code can do"],
        b: "You'll learn how to use Python's built-in modules and popular third-party libraries to extend what your code can do, rather than building everything from scratch.",
        d: "Working code built on Python's modules and libraries instead of written from scratch.",
      },
      {
        t: "Introduction to Automation",
        s: ["Automating repetitive tasks", "Writing scripts that save time", "A skill valued in every industry"],
        b: "One of Python's biggest real-world strengths is automating repetitive tasks. You'll get a practical introduction to writing scripts that save time — a skill valued in almost every industry, tech or otherwise.",
        d: "A script that automates a repetitive task and gives you the time back.",
      },
      {
        t: "Basics of Data Handling",
        s: ["Working with structured data", "A foundation for data analysis", "Groundwork for backend and automation roles"],
        b: "You'll get an introduction to working with structured data, giving you a foundation that's useful whether you eventually move toward data analysis, backend development, or automation-focused roles.",
        d: "A foundation in structured data that carries into data analysis, backend development or automation roles.",
      },
      {
        t: "Real-World Mini Projects",
        s: ["Applying every concept in practice", "Small, practical projects", "Work you can talk about in interviews"],
        b: "Throughout the course, you'll apply what you've learned to small, practical projects rather than isolated exercises — giving you a portfolio of actual work you can talk about in interviews.",
        d: "A portfolio of actual work you can talk about in interviews, not a folder of isolated exercises.",
      },
    ],
    tools: ["Python 3", "VS Code", "Jupyter", "pip & venv", "Git", "SQLite", "MySQL", "requests", "pytest", "Django", "Flask"],
    roles: ["Python Developer", "Automation Engineer", "Data Analyst", "Backend Developer", "QA Automation Engineer"],
    projects: [
      { title: "Inventory Automation Tool", body: "A command-line tool that reads supplier spreadsheets, reconciles stock and emails a daily exception report." },
      { title: "REST API for a Booking App", body: "A Flask service with authentication, validation and a relational schema behind it." },
      { title: "Web Scraper & Data Pipeline", body: "A scheduled scraper that cleans, de-duplicates and writes structured records into a database." },
    ],
  },
  {
    slug: "java",
    title: "Java Development",
    category: "Programming",
    tagline:
      "Techcadd's Java Training Course in Amritsar is designed for students, graduates, and job seekers who want to master one of the world's most in-demand programming languages.",
    focus:
      "Looking to build a career in software development? Techcadd's Java Training Course in Amritsar is designed for students, graduates, and job seekers who want to master one of the world's most in-demand programming languages. Java powers everything from Android apps to enterprise banking systems, making it a top skill for anyone entering the IT industry.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    /* The ten blocks of "What You'll Learn in Techcadd's Java Training
       (Amritsar)", in the order the course teaches them. `b` carries the copy
       written for each block, so the module panel reads as the course's own
       prose rather than the rotated boilerplate every other seed falls back to. */
    topics: [
      {
        t: "Java Fundamentals & Environment Setup",
        s: ["Installing and configuring the JDK", "The JVM (Java Virtual Machine)", "Variables, data types and operators"],
        b: "You'll start with the basics — installing and configuring the Java Development Kit (JDK), understanding the JVM (Java Virtual Machine), and writing your first Java programs. You'll learn about variables, data types, operators, and how Java code is compiled and executed.",
        d: "A configured JDK and your first Java programs, compiled and running.",
      },
      {
        t: "Control Statements & Loops",
        s: ["if-else statements", "switch-case constructs", "Loops (for, while, do-while)"],
        b: "Master decision-making and repetition in programming through if-else statements, switch-case constructs, and loops (for, while, do-while). These fundamentals form the logical backbone of every program you'll write going forward.",
        d: "The logical backbone every program you write from here on depends on.",
      },
      {
        t: "Object-Oriented Programming (OOPs) Concepts",
        s: ["Classes, objects and constructors", "Inheritance and polymorphism", "Encapsulation and abstraction"],
        b: "Java is built around OOP principles, and this module goes deep into classes, objects, constructors, inheritance, polymorphism, encapsulation, and abstraction. Understanding OOPs thoroughly is essential — it's one of the most frequently tested areas in technical interviews.",
        d: "Real depth in the one area technical interviews test most frequently.",
      },
      {
        t: "Arrays & Strings",
        s: ["Single and multi-dimensional arrays", "The String class and its methods", "Array and string logic problems"],
        b: "Learn how to work with single and multi-dimensional arrays, along with Java's String class and its commonly used methods. You'll practice solving array and string-based logic problems, a staple of coding interviews and assessments.",
        d: "Practised solutions to the array and string problems coding assessments are built on.",
      },
      {
        t: "Exception Handling",
        s: ["try-catch blocks", "Custom exceptions", "Writing error-resistant code"],
        b: "Real-world applications must handle errors gracefully. You'll learn try-catch blocks, custom exceptions, and best practices for writing robust, error-resistant Java code that doesn't crash unexpectedly in production environments.",
        d: "Robust Java code that fails gracefully instead of crashing in production.",
      },
      {
        t: "Collections Framework",
        s: ["ArrayList and LinkedList", "HashMap, HashSet and TreeMap", "Choosing the right data structure"],
        b: "Dive into Java's Collections Framework — ArrayList, LinkedList, HashMap, HashSet, TreeMap, and more. You'll understand when and why to use each data structure, a critical skill for writing efficient, scalable applications.",
        d: "Efficient, scalable code that uses the right collection for the job.",
      },
      {
        t: "Multithreading & Concurrency Basics",
        s: ["Thread creation", "Synchronisation", "Basics of concurrent programming"],
        b: "Learn how Java handles multiple tasks simultaneously through threads. This module introduces thread creation, synchronization, and the basics of concurrent programming — concepts increasingly important in modern, performance-focused applications.",
        d: "A working grasp of the concurrency modern, performance-focused applications depend on.",
      },
      {
        t: "File Handling & I/O Operations",
        s: ["Reading from files", "Writing to files", "Java's I/O streams"],
        b: "Understand how Java reads from and writes to files, along with Java's I/O streams, giving you the ability to build programs that interact with external data sources.",
        d: "Programs that read and write real external data rather than hard-coded values.",
      },
      {
        t: "JDBC (Java Database Connectivity)",
        s: ["Connecting Java to a database", "Running queries from application code", "Building data-driven applications"],
        b: "You'll learn how Java applications connect to and interact with databases using JDBC — a foundational skill for building real-world, data-driven applications like inventory systems, student portals, or business tools.",
        d: "A data-driven application — inventory system, student portal or business tool — talking to a live database.",
      },
      {
        t: "Introduction to Java-Based Frameworks",
        s: ["How frameworks extend the language", "Enterprise and web application development", "Groundwork for framework-based learning"],
        b: "Once core Java is solid, you'll get an introduction to how frameworks built on Java (used in enterprise and web application development) extend the language's capabilities — preparing you for more advanced, framework-based learning down the line.",
        d: "A running start on the framework-based learning that follows core Java.",
      },
    ],
    /* "Tools & Technologies You'll Work With", exactly as the course brief
       lists them — the everyday toolchain, not the full enterprise stack. */
    tools: [
      "JDK (Java Development Kit)",
      "Eclipse / IntelliJ IDEA",
      "Git & GitHub (basics)",
      "MySQL",
      "Command Line / Terminal",
    ],
    roles: ["Java Developer", "Backend Engineer", "Spring Boot Developer", "Software Engineer", "API Developer"],
    projects: [
      { title: "Banking Transactions Service", body: "A Spring Boot API handling accounts, transfers and statement generation with transactional integrity." },
      { title: "Library Management System", body: "A layered application with JPA entities, role-based access and reporting screens." },
      { title: "Concurrent Order Processor", body: "A multithreaded worker that drains an order queue safely under load." },
    ],
  },
  {
    /* The URL segment stays `c-cpp-course-in-amritsar` so every existing link
       and index entry keeps working; the copy behind it is the C brief. */
    slug: "c-cpp",
    title: "C Programming",
    category: "Programming",
    tagline:
      "C Training is a beginner-friendly and career-focused program designed for students, graduates, job seekers, and freshers who want to start their journey in the IT field by understanding core programming concepts.",
    focus:
      "If you are searching for C Training in Amritsar or want to build a strong foundation in programming, this program helps you develop essential logic-building and problem-solving skills.",
    /* The brief gives the duration as "As per the current Techcadd course
       schedule" rather than a fixed span, so nothing here claims months. */
    duration: "Flexible batches",
    level: "Beginner to advanced",
    /* The twelve blocks of "What You Will Learn and Tools Covered in C
       Training in Amritsar", in the order the course teaches them. `b` carries
       the copy written for each block, so the module panel reads as the
       course's own prose rather than the rotated boilerplate every other seed
       falls back to. */
    topics: [
      {
        t: "C Programming Fundamentals",
        s: ["Program structure and syntax", "Keywords, identifiers and comments", "Variables and constants"],
        b: "Students begin by understanding the fundamentals of C programming, including program structure, syntax, keywords, identifiers, variables, constants, and comments. These concepts create the foundation required for writing simple and efficient C programs.",
        d: "The foundation required for writing simple, efficient C programs.",
      },
      {
        t: "Data Types and Variables",
        s: ["Variable declaration and constants", "Type conversion", "Memory requirements of each type"],
        b: "Learners understand different data types, variable declaration, constants, type conversion, and memory requirements. Students practise using integer, floating-point, character, and other commonly used data types in practical programs.",
        d: "Practical use of integer, floating-point and character types in real programs.",
      },
      {
        t: "Operators and Expressions",
        s: ["Arithmetic, relational and logical operators", "Assignment, increment and decrement", "Conditional and bitwise operators"],
        b: "The course covers arithmetic, relational, logical, assignment, increment, decrement, conditional, and bitwise operators. Students learn how operators are combined to create expressions and implement programming logic.",
        d: "Expressions that carry real programming logic, not just syntax.",
      },
      {
        t: "Conditional Statements and Loops",
        s: ["if, if-else and nested if", "switch statements", "for, while and do-while loops"],
        b: "Students learn how programs make decisions using if, if-else, nested if, and switch statements. Looping concepts such as for, while, and do-while help learners create programs that perform repetitive tasks efficiently.",
        d: "Programs that make decisions and repeat work efficiently.",
      },
      {
        t: "Functions",
        s: ["Function declaration and definition", "Parameters and return values", "Organising programs into reusable sections"],
        b: "Functions are an important part of structured programming. Learners understand function declaration, definition, parameters, return values, function calls, and different approaches to organizing programs into reusable sections.",
        d: "Programs organised into reusable sections rather than one long block.",
      },
      {
        t: "Arrays and Strings",
        s: ["One-dimensional and multidimensional arrays", "Character arrays and strings", "Sorting, searching and counting"],
        b: "The training introduces one-dimensional and multidimensional arrays, followed by character arrays and strings. Students can practise sorting, searching, counting, and manipulating data using arrays and string functions.",
        d: "Practised sorting, searching and data manipulation using arrays and strings.",
      },
      {
        t: "Pointers and Memory Concepts",
        s: ["Pointer declaration and address operators", "Pointer arithmetic", "Pointers with arrays and functions"],
        b: "Pointers are one of the most important concepts in C. Students learn pointer declaration, address operators, pointer arithmetic, pointers with arrays, and pointers with functions. These concepts can provide a stronger understanding of memory and low-level programming.",
        d: "A stronger understanding of memory and low-level programming.",
      },
      {
        t: "Structures and User-Defined Data Types",
        s: ["Structures and user-defined types", "Organising related information", "Simple database-style programs"],
        b: "Learners are introduced to structures and other user-defined data types to organize related information. Practical examples can include student records, employee details, product information, and simple database-style programs.",
        d: "Record-based programs — student, employee and product data — built from your own types.",
      },
      {
        t: "File Handling",
        s: ["Creating, opening and closing files", "Reading, writing and appending", "Storing data outside the program"],
        b: "Students learn how C programs can work with files. Topics can include creating, opening, reading, writing, appending, and closing files. File-handling exercises help learners understand how information can be stored and retrieved outside the program's immediate execution.",
        d: "Information stored and retrieved outside the program's own execution.",
      },
      {
        t: "Debugging and Error Handling",
        s: ["Syntax errors", "Logical errors", "Runtime issues and systematic testing"],
        b: "Programming involves identifying and correcting errors. Students can practise finding syntax errors, logical errors, and runtime-related issues while learning how to test programs systematically.",
        d: "A systematic way to find and fix errors instead of guessing at them.",
      },
      {
        t: "Data Structures and Problem Solving",
        s: ["Stacks and queues", "Linked lists", "Searching and sorting"],
        b: "Basic exposure to data structures can help students understand how information is organized and processed. Depending on the training level, learners may work with concepts such as arrays, stacks, queues, linked lists, searching, and sorting.",
        d: "An understanding of how information is organised and processed in code.",
      },
      {
        t: "Practical Projects",
        s: ["Student management and billing systems", "Employee record and inventory programs", "File-management applications"],
        b: "Hands-on projects can help learners apply programming concepts instead of studying them only theoretically. Practice projects may include a student management system, calculator, billing application, number-based program, employee record system, inventory program, or file-management application. By completing coding exercises and projects, learners can improve logical thinking, debugging ability, programming confidence, and problem-solving skills.",
        d: "Completed projects that show logical thinking, debugging ability and problem-solving.",
      },
    ],
    /* "Tools Used for C Programming", exactly as the course brief lists them —
       the brief notes the exact tools may vary with the training setup. */
    tools: [
      "Visual Studio Code",
      "Code::Blocks",
      "Dev-C++",
      "GCC / GNU Compiler Collection",
      "Online C compilers",
      "Debugging & testing practices",
    ],
    roles: ["Junior Programmer", "Software Developer", "Embedded Systems Developer", "System Programmer", "Application Developer", "Technical Support Executive"],
    projects: [
      { title: "Student Management System", body: "A record-based program built on structures and file handling, covering add, search, update and delete." },
      { title: "Billing & Inventory Application", body: "A calculator-and-billing program that tracks stock and totals using arrays, functions and file storage." },
      { title: "Employee Record & File Manager", body: "A file-management application that stores, retrieves and updates employee details outside the program's own execution." },
    ],
  },
  {
    slug: "kotlin",
    title: "Kotlin & Android Development",
    category: "Programming",
    tagline:
      "A Kotlin training course in Amritsar that helps you build strong Android development and modern programming skills, designed for 12th-pass students, graduates, job seekers and working professionals.",
    focus:
      "Kotlin has become one of the most preferred programming languages for Android development, widely used by startups, IT companies, and app development agencies.",
    /* The brief gives the duration as "Confirm the current batch duration with
       Techcadd before enrolment" rather than a fixed span, so nothing here
       claims months. */
    duration: "Flexible batches",
    level: "Beginner to advanced",
    badge: "Trending",
    /* The twelve blocks of "What You Will Learn and Tools You Can Use in a
       Kotlin Training", in the order the course teaches them. `b` carries the
       copy written for each block, so the module panel reads as the course's
       own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "Programming Fundamentals",
        s: ["Variables, data types and operators", "Loops, conditions and functions", "Object-oriented programming basics"],
        b: "Students first need to understand core programming concepts. This includes variables, data types, operators, loops, conditions, functions, and object-oriented programming basics. You will learn how software logic is built and how programming languages help solve real-world problems in a structured way.",
        d: "An understanding of how software logic is built to solve real problems.",
      },
      {
        t: "Kotlin Basics",
        s: ["Syntax, null safety and data classes", "Control flow, functions and lambdas", "Collections and extension functions"],
        b: "Kotlin is a modern programming language widely used for Android development. You can learn Kotlin syntax, null safety, data classes, control flow, functions, lambdas, collections, and extension functions. Students should also understand how Kotlin is more concise and safer compared to older languages like Java.",
        d: "Concise, null-safe Kotlin — and a clear sense of why it beats the older way.",
      },
      {
        t: "Object-Oriented Programming (OOP)",
        s: ["Classes and objects", "Inheritance and polymorphism", "Encapsulation and abstraction"],
        b: "OOP is a key concept in Kotlin development. Students can learn classes, objects, inheritance, polymorphism, encapsulation, and abstraction. These concepts help in building scalable and maintainable applications.",
        d: "The structure that keeps an application scalable and maintainable.",
      },
      {
        t: "Android App Development Basics",
        s: ["Activities and layouts", "UI components and navigation", "User interaction and screen flow"],
        b: "Kotlin is widely used for Android development. Students can learn how Android apps are structured, including activities, layouts, UI components, navigation, and user interaction. You will also understand how apps respond to user actions and how screens are connected.",
        d: "An app that responds to real user actions across connected screens.",
      },
      {
        t: "UI/UX Basics for Apps",
        s: ["Layout structure and responsiveness", "Colour usage and typography", "User experience flow"],
        b: "A good application is not only functional but also user-friendly. Students can learn basic UI design principles such as layout structure, responsiveness, color usage, typography, and user experience flow. This helps in creating apps that are easy to use and visually clean.",
        d: "Apps that are easy to use and visually clean, not just functional.",
      },
      {
        t: "APIs and Networking",
        s: ["How APIs work", "Sending and receiving data", "JSON handling and networking basics"],
        b: "Modern applications often connect to external services. Students can learn how APIs work, how data is sent and received, and how apps communicate with servers. You will also understand JSON data handling and basic networking concepts.",
        d: "An app that talks to a real server instead of hard-coded data.",
      },
      {
        t: "Database Integration",
        s: ["Local databases and SQLite", "Room Database", "Saving user data and offline information"],
        b: "Applications often need to store and retrieve data. Students can learn about local databases like SQLite and modern solutions like Room Database. This helps in building apps that can save user data, preferences, and offline information.",
        d: "Apps that remember user data, preferences and offline state.",
      },
      {
        t: "Debugging and Problem Solving",
        s: ["Identifying errors", "Fixing bugs", "Improving code performance"],
        b: "Debugging is an essential skill for every developer. Students can learn how to identify errors, fix bugs, and improve code performance. You will also develop logical thinking and problem-solving skills through coding practice.",
        d: "The logical thinking and debugging habit every developer is judged on.",
      },
      {
        t: "Tools Used in Kotlin Development",
        s: ["Android Studio and the Kotlin compiler", "Git & GitHub for version control", "Emulators, debugging tools and Gradle"],
        b: "Students will get exposure to industry-standard tools such as Android Studio, the Kotlin compiler, Git and GitHub for version control, emulator tools for testing apps, debugging tools, and the Gradle build system. These tools help in building, testing, and managing applications efficiently.",
        d: "Fluency with the toolchain used to build, test and manage real apps.",
      },
      {
        t: "Real-Time Projects",
        s: ["Calculator and to-do applications", "Login and registration system", "Weather app using an API"],
        b: "Practical learning is the most important part of Kotlin training. Students should work on real projects such as a basic calculator app, a to-do list application, a login and registration system, a weather app using an API, and a simple e-commerce app UI. These projects help students understand how real applications are built from scratch.",
        d: "Finished apps that show how real applications are built from scratch.",
      },
      {
        t: "Version Control with Git",
        s: ["Creating repositories", "Committing and tracking versions", "Collaborating on projects"],
        b: "Students can learn how to manage code using Git and GitHub. This includes creating repositories, committing changes, tracking versions, and collaborating on projects. Version control is an important skill for professional software development.",
        d: "A GitHub history that shows how you actually work, not just what you finished.",
      },
      {
        t: "Career and Industry Readiness",
        s: ["Android and app developer roles", "Portfolio and project practice", "Continuous learning habits"],
        b: "After completing Kotlin training, students can explore career paths such as Android Developer, Junior Software Developer, App Developer Intern, or Backend Developer (entry-level roles). The software development field is constantly evolving, so continuous practice and learning are essential. For students searching for a Kotlin training course in Amritsar, the main focus should not only be theory but also hands-on coding, real projects, and problem-solving ability.",
        d: "A portfolio and a practice habit you can carry into an interview.",
      },
    ],
    /* "Tools Used in Kotlin Development", as the brief lists them, plus the
       JDK the FAQ names alongside them. */
    tools: [
      "Android Studio",
      "Kotlin Compiler",
      "Java Development Kit (JDK)",
      "Git & GitHub",
      "Android emulator & devices",
      "Debugging tools",
      "Gradle build system",
    ],
    roles: ["Android Developer", "Mobile App Developer", "Junior Software Developer", "App Developer Intern", "Backend Developer"],
    projects: [
      { title: "Basic Calculator App", body: "A first Android build in Kotlin, wiring layout, UI components and user interaction together." },
      { title: "To-Do List Application", body: "A task app backed by a local Room database, so entries survive closing the app." },
      { title: "Login and Registration System", body: "Screen navigation, input validation and user state handled across a real app flow." },
      { title: "Weather App Using an API", body: "A networked app that calls an external service and renders the JSON it returns." },
      { title: "Simple E-Commerce App UI", body: "A catalogue interface built to real UI/UX principles — layout, responsiveness and typography." },
    ],
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    category: "Programming",
    tagline:
      "Techcadd's Web Designing Training course in Amritsar is designed for students, graduates and job seekers who want to master the art and science of creating stunning, functional websites.",
    focus:
      "Amritsar's growing IT and freelancing ecosystem makes web designing one of the most in-demand skills right now — for agencies, startups, and freelance clients alike.",
    /* The brief states the duration as "2–3 Months" in its course-details
       table, so the page carries that rather than the catalogue default. */
    duration: "2 – 3 months",
    level: "Beginner",
    /* The thirteen blocks of "What You'll Learn in Techcadd's Web Designing
       Training Course, Amritsar", in the order the course teaches them. `b`
       carries the copy written for each block, so the module panel reads as
       the course's own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "Web Design Fundamentals",
        s: ["How websites actually work", "Front-end vs. back-end", "UX and UI design principles"],
        b: "You'll start with the building blocks of the web — understanding how websites work, the role of front-end vs. back-end, and the basics of user experience (UX) and user interface (UI) design principles that guide every good website.",
        d: "The principles that guide every good website, before a line of code is written.",
      },
      {
        t: "HTML5 – Structuring Web Pages",
        s: ["Semantic tags", "Forms, tables and multimedia", "Accessibility best practices"],
        b: "Learn to structure web content using HTML5, including semantic tags, forms, tables, multimedia embedding, and accessibility best practices that make websites usable for everyone.",
        d: "Well-structured pages that are usable by everyone, not just some visitors.",
      },
      {
        t: "CSS3 – Styling and Layout",
        s: ["Colour, typography and spacing", "Flexbox and CSS Grid", "Animations and transitions"],
        b: "Master CSS3 to bring your designs to life — colors, typography, spacing, positioning, Flexbox, and CSS Grid for building modern, well-organized layouts. You'll also learn animations and transitions to add polish and interactivity.",
        d: "Modern, well-organised layouts with the polish that separates them from templates.",
      },
      {
        t: "Responsive Web Design",
        s: ["Media queries", "Mobile-first design", "Desktop, tablet and phone layouts"],
        b: "With most web traffic coming from mobile devices, you'll learn to design websites that adapt seamlessly across desktops, tablets, and smartphones using media queries and mobile-first design principles.",
        d: "Sites that hold up on a phone, which is where most of the traffic actually is.",
      },
      {
        t: "JavaScript Basics for Interactivity",
        s: ["Variables and functions", "DOM manipulation", "Event handling"],
        b: "Get introduced to JavaScript fundamentals — variables, functions, DOM manipulation, and event handling — so you can add interactive elements like sliders, forms, and dynamic content to your websites.",
        d: "Sliders, forms and dynamic content you wired up yourself.",
      },
      {
        t: "Bootstrap Framework",
        s: ["Pre-built responsive components", "The grid system", "Faster professional builds"],
        b: "Learn to use Bootstrap to speed up development with pre-built, responsive components and grid systems, allowing you to build professional-looking websites faster and more efficiently.",
        d: "Professional-looking builds in a fraction of the time, using the framework agencies reach for.",
      },
      {
        t: "UI/UX Design Principles",
        s: ["Colour theory and typography", "Whitespace and visual hierarchy", "User flow"],
        b: "Understand the psychology of good design — color theory, typography choices, whitespace, visual hierarchy, and user flow — so your websites aren't just functional but genuinely engaging and easy to navigate.",
        d: "Websites that are genuinely engaging to use, not merely functional.",
      },
      {
        t: "Figma and Adobe XD",
        s: ["Wireframes and mockups", "Interactive prototypes", "Client presentation and collaboration"],
        b: "Get hands-on with industry-standard design and prototyping tools. You'll learn to create wireframes, mockups, and interactive prototypes before writing a single line of code — a crucial skill for client presentations and team collaboration.",
        d: "A prototype you can walk a client through before any code is written.",
      },
      {
        t: "WordPress – CMS Website Building",
        s: ["Themes and plugins", "Page builders", "Customisation for clients"],
        b: "Learn to build and customize websites using WordPress, one of the most widely used content management systems globally. This includes themes, plugins, page builders, and basic customization — a highly valuable skill for freelance and agency work.",
        d: "The CMS skill freelance and agency work asks for most often.",
      },
      {
        t: "Website Hosting and Domain Basics",
        s: ["Purchasing domains", "Setting up hosting", "Deploying a site live"],
        b: "Understand how to purchase domains, set up hosting, and actually deploy a website live on the internet — taking your projects from local files to real, accessible websites.",
        d: "Projects that live on the real internet instead of on your laptop.",
      },
      {
        t: "Basic SEO for Web Designers",
        s: ["Page speed optimisation", "Heading structure and image optimisation", "Mobile-friendliness"],
        b: "Learn foundational SEO principles — page speed optimization, proper heading structures, image optimization, and mobile-friendliness — so the websites you design are also built to perform well in search results.",
        d: "Sites built to be found, not just to look right.",
      },
      {
        t: "Version Control Basics (Git/GitHub)",
        s: ["Version control concepts", "Tracking design and code changes", "Collaborating on projects"],
        b: "Get introduced to version control concepts, useful for collaborating on projects and maintaining organized, trackable design and code changes.",
        d: "Organised, trackable work — the habit collaborative projects depend on.",
      },
      {
        t: "Portfolio Building",
        s: ["Selecting your best project work", "Presenting real builds", "A portfolio for jobs or freelance clients"],
        b: "Throughout the course, you'll compile your best project work into a professional portfolio — one of the most important assets for landing jobs or attracting freelance clients.",
        d: "A professional portfolio — the asset that actually lands the job or the client.",
      },
    ],
    /* "Tools You'll Master", exactly as the course brief lists them. */
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Figma",
      "Adobe XD",
      "WordPress",
      "Canva",
      "Chrome DevTools",
      "Git & GitHub",
    ],
    roles: ["Web Designer", "UI/UX Designer", "Frontend Developer", "WordPress Developer", "Freelance Web Designer"],
    projects: [
      { title: "Responsive Business Website", body: "A multi-page site built from a Figma mockup in HTML, CSS and Bootstrap, adapting cleanly from desktop to phone." },
      { title: "WordPress Client Site", body: "A CMS build with a customised theme, plugins and a page builder — then deployed live on real hosting and a domain." },
      { title: "Personal Portfolio Website", body: "Your best project work presented as a professional portfolio, optimised for page speed, headings and mobile-friendliness." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Programming",
    tagline:
      "Techcadd's Web Development Training in Amritsar is designed for students, graduates and job seekers who want hands-on, industry-relevant skills in HTML, CSS, JavaScript and modern frameworks.",
    focus:
      "With growing demand for web developers across Amritsar and Punjab's IT and business sectors, this is the right time to start — the course covers everything from coding fundamentals to deployment.",
    /* The centre runs this one as a 3-month and a 6-month track, which is what
       `tracks` in the override names; the span is written to match. */
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    /* The ten blocks of "What You'll Learn & Tools" from the Amritsar Web
       Development brief, in the order the course teaches them. `b` carries the
       copy written for each block, so the module panel reads as the course's
       own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "Foundations of Web Development",
        s: ["How the web works", "How browsers render pages", "Client-server architecture"],
        b: "You'll start with the building blocks: how the web works, how browsers render pages, and the fundamentals of client-server architecture. This foundation ensures you understand why things work the way they do, not just how to copy syntax — a critical difference between a real developer and someone who's just memorized code.",
        d: "An understanding of why the web works as it does, not just how to copy syntax.",
      },
      {
        t: "HTML – Structuring the Web",
        s: ["Semantic tags and page structure", "Forms, tables and multimedia", "Accessibility best practices"],
        b: "You'll learn HTML5 in depth — from semantic tags and page structure to forms, tables, multimedia embedding, and accessibility best practices. This is where you learn to build the skeleton of every website: clean, well-organized, and search-engine friendly markup that forms the foundation for everything else you build.",
        d: "Clean, search-engine-friendly markup underneath everything else you build.",
      },
      {
        t: "CSS – Styling and Layout",
        s: ["Flexbox and CSS Grid", "Responsive design across devices", "Animations and transitions"],
        b: "Next, you'll master CSS3, covering everything from basic styling to advanced layout systems like Flexbox and CSS Grid. You'll learn how to create responsive designs that adapt seamlessly across desktops, tablets, and mobile devices — a non-negotiable skill in today's mobile-first web. Topics also include animations, transitions, and modern design principles that make websites visually engaging.",
        d: "Layouts that adapt across every device, with the polish that keeps people on them.",
      },
      {
        t: "JavaScript – Making Websites Interactive",
        s: ["Variables, functions, loops and conditionals", "DOM manipulation and event handling", "Forms, sliders and dynamic content"],
        b: "JavaScript is where your websites come to life. You'll learn core programming concepts — variables, functions, loops, and conditionals — before moving into DOM manipulation, event handling, and interactive features like forms, sliders, and dynamic content updates. This module builds real programming logic, not just web-specific tricks.",
        d: "Real programming logic, not a bag of web-specific tricks.",
      },
      {
        t: "Responsive Web Design",
        s: ["Media queries", "Mobile-first design principles", "Responsive frameworks"],
        b: "You'll learn to build websites that work flawlessly across every screen size using media queries, mobile-first design principles, and responsive frameworks. In a world where most web traffic comes from mobile devices, this skill is essential for any developer entering the job market.",
        d: "Sites that hold up on every screen size, which is what the job market assumes.",
      },
      {
        t: "Modern Frontend Frameworks",
        s: ["Component-driven development", "Faster, scalable builds", "Maintainable project structure"],
        b: "Beyond core fundamentals, you'll get hands-on exposure to modern frameworks and libraries used in real-world development — helping you build faster, more scalable, and more maintainable websites, in line with what today's employers expect from front-end developers.",
        d: "The framework fluency employers now assume a front-end developer has.",
      },
      {
        t: "Version Control with Git & GitHub",
        s: ["Git for version control", "Hosting code on GitHub", "Collaborating on a shared codebase"],
        b: "You'll learn how to use Git for version control and GitHub for hosting and collaborating on code — an essential skill for working in any real development team, and a strong addition to your professional portfolio.",
        d: "A public GitHub history that shows how you work, not just what you finished.",
      },
      {
        t: "Introduction to Backend Concepts",
        s: ["How servers work", "Databases", "APIs and the front-end connection"],
        b: "To round out your understanding of how full websites function, you'll get introduced to backend basics — how servers, databases, and APIs work together with the front end to create complete web applications.",
        d: "A working picture of the whole application, not just the half you can see.",
      },
      {
        t: "Deployment and Hosting",
        s: ["Hosting platforms", "Domain basics", "Deployment workflows"],
        b: "Finally, you'll learn how to actually publish your websites — covering hosting platforms, domain basics, and deployment workflows, so you leave the course knowing how to take a project from your local machine to a live, working website.",
        d: "Projects taken from your local machine to a live, working website.",
      },
      {
        t: "Tools & Technologies Covered",
        s: ["VS Code", "Browser developer tools", "Git & GitHub and modern layout tools"],
        b: "Throughout the course, you'll get hands-on practice with industry-standard tools including code editors like VS Code, browser developer tools for debugging, Git & GitHub for version control, and modern design and layout tools used in professional web development workflows.",
        d: "Hands-on time with the exact tools professional workflows are built on.",
      },
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "VS Code", "Chrome DevTools", "Git", "GitHub", "React", "Node.js", "Vercel"],
    roles: ["Web Developer", "Front-End Developer", "Junior Full Stack Developer", "Freelance Web Developer", "Backend Developer"],
    projects: [
      { title: "Responsive Multi-Page Website", body: "A complete site built from scratch in HTML, CSS and JavaScript, adapting cleanly from desktop to phone." },
      { title: "Interactive Web Application", body: "Forms, sliders and dynamic content driven by DOM manipulation and event handling in a modern framework." },
      { title: "Deployed Portfolio Project", body: "Version-controlled on GitHub and published live on real hosting with its own domain." },
    ],
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    category: "Programming",
    tagline:
      "A job-ready, hands-on MERN Stack Development program for students, graduates and working professionals who want to break into full-stack web development.",
    focus:
      "MERN — MongoDB, Express.js, React.js and Node.js — is one of the most in-demand tech stacks powering modern web applications, and companies across India and abroad are actively hiring developers skilled in this ecosystem.",
    duration: "6 months",
    /* The brief is explicit that no prior coding experience is required and
       that the syllabus opens on HTML, CSS and JavaScript before React, so the
       level is written from where the course actually starts. */
    level: "Beginner to advanced",
    badge: "Hot",
    featured: true,
    /* The eight blocks of "What You'll Learn & Tools Covered" from the Amritsar
       MERN Stack brief, in the order the course teaches them. `b` carries the
       copy written for each block, so the module panel reads as the course's
       own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "Web Development Foundations",
        s: ["HTML5, CSS3, Flexbox and Grid", "Responsive design principles", "JavaScript, DOM, ES6+ and async"],
        b: "You'll start with the building blocks of the web: HTML5 for structuring content, CSS3 for styling and layouts (including Flexbox and Grid), and responsive design principles to ensure your applications work seamlessly across devices. Alongside this, you'll build a strong foundation in JavaScript — covering variables, functions, DOM manipulation, ES6+ syntax, asynchronous programming, and API handling — all essential before moving into React.",
        d: "The JavaScript and layout foundation React assumes you already have.",
      },
      {
        t: "Frontend Development with React.js",
        s: ["Components, JSX, props and state", "Hooks, conditional rendering and events", "Routing with React Router"],
        b: "React.js is the “R” in MERN and one of the most in-demand frontend libraries in the industry. You'll learn component-based architecture, JSX syntax, props and state management, React Hooks (useState, useEffect, and more), conditional rendering, event handling, and routing with React Router. You'll also explore state management approaches and how to structure scalable, reusable components — skills directly applicable to building modern, interactive user interfaces.",
        d: "Modern, interactive interfaces built from scalable, reusable components.",
      },
      {
        t: "Backend Development with Node.js and Express.js",
        s: ["Event-driven, non-blocking Node.js", "RESTful APIs, routing and middleware", "JWT authentication and error handling"],
        b: "On the backend, you'll learn how to build server-side applications using Node.js, understanding its event-driven, non-blocking architecture. With Express.js, you'll create RESTful APIs, handle routing, manage middleware, implement authentication and authorization (including JWT-based systems), and handle error management — the core skills needed to power any modern web application's backend logic.",
        d: "The core backend logic that powers any modern web application.",
      },
      {
        t: "Database Management with MongoDB",
        s: ["Document-based data modelling", "CRUD operations", "Mongoose schemas and validation"],
        b: "You'll get hands-on with MongoDB, a NoSQL database widely used in modern web development. This includes understanding document-based data modeling, performing CRUD operations, working with Mongoose for schema definition and validation, and structuring databases efficiently to support real-world application needs.",
        d: "Databases structured efficiently around real-world application needs.",
      },
      {
        t: "Full-Stack Integration",
        s: ["React wired to a Node/Express backend", "Data flow across the whole stack", "Debugging across front end, API and database"],
        b: "Perhaps the most valuable part of the course is learning how to connect all these pieces together — integrating your React frontend with your Node.js/Express backend and MongoDB database to build complete, functioning web applications from scratch. You'll understand how data flows through a full-stack application and how to debug issues across the entire stack.",
        d: "Complete, functioning web applications built end to end from scratch.",
      },
      {
        t: "Version Control and Deployment",
        s: ["Git and GitHub for version control", "Collaborating on a shared codebase", "Hosting platforms and basic DevOps"],
        b: "No developer works in isolation from industry tools. You'll learn Git and GitHub for version control and collaboration, along with deployment practices to take your applications live — understanding hosting platforms and the basic DevOps concepts needed to publish real, working projects.",
        d: "Real, working projects published live rather than left on your laptop.",
      },
      {
        t: "Tools and Technologies Covered",
        s: ["Frontend: React.js, React Router, Tailwind CSS/Bootstrap", "Backend & database: Node.js, Express.js, MongoDB, Mongoose", "JWT, bcrypt, Git, GitHub, VS Code, Postman, npm"],
        b: "Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, React Router, Tailwind CSS/Bootstrap. Backend: Node.js, Express.js, RESTful API design. Database: MongoDB, Mongoose. Authentication: JWT, bcrypt. Version Control: Git, GitHub. Development Tools: VS Code, Postman, npm. Deployment: Basic hosting and deployment workflows.",
        d: "Hands-on time with the exact toolchain a working MERN team uses.",
      },
      {
        t: "Real Project Portfolio",
        s: ["E-commerce platforms", "Social media-style applications", "Dashboard-based tools and a capstone"],
        b: "Throughout the course, you'll build multiple real-world projects — such as e-commerce platforms, social media-style applications, or dashboard-based tools — culminating in a capstone project that demonstrates your full-stack capabilities to potential employers.",
        d: "A capstone project that demonstrates your full-stack capabilities to employers.",
      },
    ],
    /* The toolchain the brief names, in its own order: the frontend first, then
       the backend, database and auth layer, then the tools the work ships
       through — which is also how the three tool rails read on the page. */
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "Tailwind CSS / Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
    ],
    roles: ["MERN Stack Developer", "Full-Stack Engineer", "React Developer", "Node.js Developer", "Product Engineer"],
    /* The project types the brief names, ending on the capstone it says the
       course culminates in. */
    projects: [
      { title: "E-Commerce Platform", body: "Catalogue, cart and orders on a React front end, an Express API and a MongoDB store." },
      { title: "Social Media-Style Application", body: "Accounts, JWT authentication, posts and feeds wired end to end across the stack." },
      { title: "Dashboard-Based Tool", body: "Aggregated data, role-based access and an admin view built on the same MERN stack." },
      { title: "Capstone Full-Stack Project", body: "A complete application built, integrated and deployed independently — the piece that demonstrates your full-stack capabilities to employers." },
    ],
  },
  {
    slug: "mean-stack",
    title: "MEAN Stack Development",
    category: "Programming",
    tagline:
      "Hands-on, industry-relevant MEAN Stack training in Amritsar for students, graduates and job seekers — MongoDB, Express.js, Angular and Node.js.",
    focus:
      "This course takes you from the fundamentals of front-end and back-end development to building complete, real-world web applications using a single JavaScript-based technology stack.",
    duration: "6 months",
    /* The brief is explicit that no prior coding experience is mandatory and
       that the syllabus opens on HTML, CSS and core JavaScript before Angular,
       so the level is written from where the course actually starts. */
    level: "Beginner to advanced",
    /* The nine blocks of "What You'll Learn & Tools Covered" from the Amritsar
       MEAN Stack brief, in the order the course teaches them. `b` carries the
       copy written for each block, so the module panel reads as the course's
       own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "Web Development Fundamentals",
        s: ["HTML5 and CSS3", "Core JavaScript and DOM manipulation", "ES6+, promises, async/await and OOP concepts"],
        b: "Before diving into the MEAN stack itself, you'll build a solid foundation in HTML5, CSS3, and core JavaScript — including DOM manipulation, ES6+ syntax, asynchronous programming (promises, async/await), and JavaScript object-oriented concepts. This ensures you're fully prepared for the more advanced frameworks ahead.",
        d: "The JavaScript and layout foundation the frameworks ahead assume you have.",
      },
      {
        t: "Angular (Front-End Framework)",
        s: ["Components, modules, templates and data binding", "Services, dependency injection and routing", "Reactive forms, HTTP client and state management basics"],
        b: "You'll learn to build dynamic, single-page applications using Angular, covering components, modules, and templates; data binding and directives; Angular services and dependency injection; routing and navigation between views; forms handling (template-driven and reactive forms); HTTP client for API integration; and state management basics.",
        d: "Dynamic, single-page interfaces wired to real APIs.",
      },
      {
        t: "Node.js (Server-Side Runtime)",
        s: ["Core modules and event-driven architecture", "Structuring a Node.js server", "File handling, async I/O, npm and environment config"],
        b: "You'll learn how to build server-side applications using Node.js, including core Node.js modules and the event-driven architecture, building and structuring a Node.js server, file handling and asynchronous I/O, package management using npm, and working with environment variables and configuration.",
        d: "A structured, configurable Node.js server you built yourself.",
      },
      {
        t: "Express.js (Back-End Framework)",
        s: ["RESTful API design and routing", "Middleware functions and error handling", "JWT authentication, database connections and endpoint testing"],
        b: "Using Express.js, you'll learn to build robust APIs and back-end logic, covering RESTful API design and routing, middleware functions and error handling, authentication and authorization (JWT-based), connecting Express applications to databases, and building and testing API endpoints.",
        d: "Robust, authenticated APIs tested endpoint by endpoint.",
      },
      {
        t: "MongoDB (NoSQL Database)",
        s: ["NoSQL concepts vs relational databases", "Collections, documents and CRUD operations", "Mongoose schemas, queries, aggregation and indexing"],
        b: "You'll gain hands-on experience with MongoDB, including NoSQL database concepts vs. traditional relational databases, creating and managing collections and documents, CRUD operations (Create, Read, Update, Delete), Mongoose ODM for schema design and validation, and database queries, aggregation, and indexing basics.",
        d: "A validated, queryable data layer behind your application.",
      },
      {
        t: "Full-Stack Integration",
        s: ["Angular front end connected to Express/Node via REST", "State managed across front end and back end", "End-to-end authentication and deployment"],
        b: "Perhaps the most valuable part of the course — you'll learn how to connect all four technologies into a single, functioning application: connecting the Angular front-end to the Express/Node.js back-end via REST APIs, managing application state across front-end and back-end, handling user authentication end-to-end, and deploying a complete MEAN stack application.",
        d: "One complete MEAN stack application, built and deployed end to end.",
      },
      {
        t: "Tools & Technologies You'll Work With",
        s: ["VS Code, Git and GitHub, npm", "Postman for API testing, MongoDB Compass", "Chrome DevTools and terminal/CLI proficiency"],
        b: "Code Editor: Visual Studio Code. Version Control: Git and GitHub. API Testing: Postman. Package Manager: npm. Database Tools: MongoDB Compass. Browser Dev Tools: Chrome DevTools for debugging. Command Line: Terminal/CLI proficiency for running builds and servers.",
        d: "Hands-on time with the exact toolchain a working MEAN team uses.",
      },
      {
        t: "Real-World Project Work",
        s: ["A CRUD app with full front-end/back-end integration", "User authentication and login systems", "A database-driven web app deployed as a portfolio piece"],
        b: "Throughout the course, you'll apply these skills to build practical projects such as a CRUD-based web application with full front-end/back-end integration, user authentication and login systems, and a dynamic, database-driven web app deployed and demoed as a portfolio piece.",
        d: "Portfolio-ready projects you can demo, not just describe.",
      },
      {
        t: "Soft Skills for Developer Roles",
        s: ["Debugging methodology", "Reading documentation", "Version control workflows and collaborative coding"],
        b: "Alongside technical training, you'll also build practical workplace skills — debugging methodology, reading documentation, version control workflows, and collaborative coding practices — all essential for functioning in a real development team.",
        d: "The working habits a real development team expects on day one.",
      },
    ],
    /* The toolchain the brief names: the stack itself first, then the tools the
       work actually ships through — which is also how the tool rails read on
       the page. */
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "npm",
      "MongoDB Compass",
      "Chrome DevTools",
    ],
    roles: ["Angular Developer", "MEAN Stack Developer", "Frontend Engineer", "Enterprise Application Developer", "Full-Stack Developer"],
    /* The three project types the brief names under "Real-World Project Work". */
    projects: [
      { title: "CRUD-Based Web Application", body: "A working application with full front-end and back-end integration across Angular, Express and MongoDB." },
      { title: "User Authentication & Login System", body: "End-to-end sign-up, login and JWT-based authorization handled across the whole stack." },
      { title: "Database-Driven Web App", body: "A dynamic, database-backed application deployed and demoed as a portfolio piece." },
    ],
  },
  {
    slug: "php-full-stack",
    title: "PHP Full Stack Development",
    category: "Programming",
    tagline:
      "Frontend, PHP backend and MySQL together — a structured path from web fundamentals to complete, database-driven applications.",
    focus:
      "Full-stack development covers both the front end that users interact with and the back end that powers application logic, databases, authentication, and server-side functionality.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    /* The sixteen blocks of "What You Will Learn and Tools Covered" from the
       Amritsar PHP Full Stack brief, in the order the course teaches them. `b`
       carries the copy written for each block, so the module panel reads as the
       course's own prose rather than the rotated boilerplate. */
    topics: [
      {
        t: "HTML – Building Webpage Structure",
        s: ["Headings, paragraphs, links, images", "Lists, tables and forms", "Semantic elements and page structure"],
        b: "Students begin with HTML, the foundation of webpages. They can learn headings, paragraphs, links, images, lists, tables, forms, semantic elements, and page structure. Understanding HTML properly helps learners create accessible and well-organised webpages before adding styling and functionality.",
        d: "Accessible, well-organised webpages built before any styling is added.",
      },
      {
        t: "CSS – Designing Responsive Websites",
        s: ["Selectors, properties and layouts", "Positioning, spacing and typography", "Flexbox, responsive design and media queries"],
        b: "CSS is used to control the visual appearance of websites. Students can learn selectors, properties, layouts, positioning, spacing, typography, Flexbox, responsive design, and media queries. Responsive design is particularly important because websites need to work across desktops, tablets, and smartphones.",
        d: "Layouts that hold up across desktops, tablets and smartphones.",
      },
      {
        t: "JavaScript – Adding Interactivity",
        s: ["Variables, functions, conditions and loops", "Arrays, objects and events", "DOM manipulation, form validation and async basics"],
        b: "JavaScript introduces programming and browser-side functionality. Students can learn variables, functions, conditions, loops, arrays, objects, events, DOM manipulation, form validation, and basic asynchronous functionality. These skills allow learners to create more interactive and user-friendly websites.",
        d: "Interactive, user-friendly pages driven from the browser side.",
      },
      {
        t: "PHP – Server-Side Programming",
        s: ["Syntax, variables, operators, conditions and loops", "Functions, arrays and forms", "Sessions, cookies, file handling and database connectivity"],
        b: "PHP is the core backend technology in this training pathway. Students can learn PHP syntax, variables, operators, conditions, loops, functions, arrays, forms, sessions, cookies, file handling, and database connectivity. The focus should be on understanding how PHP processes requests and generates dynamic web content.",
        d: "A clear grasp of how PHP processes requests and generates dynamic content.",
      },
      {
        t: "MySQL – Database Development",
        s: ["Database creation, tables and primary keys", "Relationships, SQL queries and joins", "Inserting, updating, deleting and filtering records"],
        b: "Students can learn how applications store and retrieve information using MySQL. Topics can include database creation, tables, primary keys, relationships, SQL queries, inserting records, updating data, deleting records, filtering results, and joins. Connecting PHP with MySQL helps learners develop database-driven applications instead of static webpages.",
        d: "Database-driven applications in place of static webpages.",
      },
      {
        t: "CRUD Application Development",
        s: ["Create and read records", "Update existing data", "Delete records through PHP and MySQL"],
        b: "CRUD stands for Create, Read, Update, and Delete. These operations form the foundation of many business applications. Students can practise creating systems where users can add information, view records, edit existing data, and remove records. This provides practical experience with PHP and MySQL integration.",
        d: "A working system where users add, view, edit and remove records.",
      },
      {
        t: "Forms and Validation",
        s: ["Registration and login forms", "Contact, search and data-entry forms", "Basic validation techniques"],
        b: "Forms are common in websites and applications. Learners can understand how registration forms, login forms, contact forms, search forms, and data-entry forms work. They can also learn basic validation techniques to ensure that submitted information is processed correctly.",
        d: "Forms that collect and process submitted information correctly.",
      },
      {
        t: "Authentication and Sessions",
        s: ["Login and logout functionality", "Sessions and user access", "Basic authentication concepts"],
        b: "Students can explore login and logout functionality, sessions, user access, and basic authentication concepts. These skills can help learners understand how applications identify users and manage protected areas.",
        d: "Protected areas of an application, with users identified and managed.",
      },
      {
        t: "APIs and Data Integration",
        s: ["Requests and responses", "JSON and endpoints", "Integrating external data into applications"],
        b: "Modern web applications frequently communicate with external services. Students can be introduced to APIs and understand concepts such as requests, responses, JSON, endpoints, and integrating external data into applications. This can help learners understand how different systems communicate with each other.",
        d: "External data pulled into an application over a real API.",
      },
      {
        t: "WordPress and PHP Concepts",
        s: ["Themes and plugins", "Templates", "Basic customisation concepts"],
        b: "Students interested in CMS development can benefit from understanding the relationship between PHP and WordPress. They can explore themes, plugins, templates, and basic customisation concepts. PHP knowledge can provide a stronger technical foundation for learners who want to move beyond basic WordPress administration.",
        d: "The technical footing to move beyond basic WordPress administration.",
      },
      {
        t: "Git and Version Control",
        s: ["Repositories and commits", "Branches", "Tracking changes"],
        b: "Version control is an important development practice. Students can be introduced to Git and understand concepts such as repositories, commits, branches, and tracking changes. Git can help developers manage projects and collaborate more effectively.",
        d: "Project history you can manage and collaborate through.",
      },
      {
        t: "Development Tools and Editors",
        s: ["Visual Studio Code", "Browser developer tools", "Local development environments and database interfaces"],
        b: "Depending on the learning environment, students may work with development tools such as Visual Studio Code, browser developer tools, local development environments, PHP runtime tools, and database management interfaces. Learning how to use these tools efficiently can make everyday development and debugging easier.",
        d: "Fluency with the tools everyday development and debugging run through.",
      },
      {
        t: "Debugging and Error Handling",
        s: ["Syntax errors", "Logical errors", "Database and application issues"],
        b: "Errors are a normal part of programming. Students can learn how to identify syntax errors, logical errors, database errors, and application issues. Developing debugging habits can be one of the most valuable skills for an aspiring developer because real-world applications frequently require troubleshooting.",
        d: "Debugging habits that hold up against real application troubleshooting.",
      },
      {
        t: "Responsive and User-Friendly Development",
        s: ["Responsive layouts and navigation", "Clear forms and validation", "Logical application flows"],
        b: "Students can learn how frontend design and backend functionality come together to create usable web applications. Responsive layouts, clear forms, navigation, validation, and logical application flows can all contribute to a better user experience.",
        d: "Applications that are usable, not just functional.",
      },
      {
        t: "Real-World Projects",
        s: ["Business websites and blogs", "Registration, authentication and inventory systems", "Dashboards and e-commerce concepts"],
        b: "Projects allow learners to bring multiple technologies together. A training program may include projects such as business websites, registration systems, inventory applications, dashboards, blogs, authentication systems, or e-commerce concepts. Projects can help students understand how separate technologies work together within one application.",
        d: "Separate technologies brought together inside one working application.",
      },
      {
        t: "Deployment Fundamentals",
        s: ["Hosting and domains", "Databases and server configuration", "File management and deployment workflows"],
        b: "Students can also be introduced to the basic concepts involved in putting a website or application online. This may include hosting, domains, databases, server configuration, file management, and deployment workflows. Understanding deployment gives learners a more complete picture of the development lifecycle.",
        d: "A complete picture of the development lifecycle, ending online.",
      },
    ],
    /* The "Key Technologies and Tools" list the brief names, in its own order. */
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Git",
      "Visual Studio Code",
      "Browser Developer Tools",
      "APIs and JSON",
      "WordPress",
      "Local development environments",
      "Database management tools",
    ],
    /* The roles the brief names under "What career options can I explore". */
    roles: ["Junior PHP Developer", "Web Developer", "Backend Developer", "WordPress Developer", "Web Application Developer"],
    /* The project types the brief names under "Real-World Projects". */
    projects: [
      { title: "Business Website", body: "A responsive, content-driven site built on HTML, CSS and PHP templates." },
      { title: "Registration & Authentication System", body: "Sign-up, login, sessions and protected pages handled end to end." },
      { title: "Inventory or Dashboard Application", body: "Full CRUD over a MySQL database, with filtering and record management." },
      { title: "Blog or E-Commerce Concept", body: "A database-driven application that brings the frontend, PHP backend and MySQL together." },
    ],
  },
  {
    slug: "it-courses",
    title: "IT Foundation Programme",
    category: "Programming",
    tagline:
      "A structured entry route into IT for students who are still deciding which specialisation fits them.",
    focus:
      "Most people pick a specialisation before they know what the work feels like — this programme lets you sample the main tracks before committing.",
    duration: "3 months",
    level: "Beginner",
    topics: [
      { t: "Computer & Network Basics", s: ["Hardware and OS", "IP and DNS", "Troubleshooting method"] },
      { t: "Office Productivity & Excel", s: ["Formulas and lookups", "Pivot tables", "Charting"] },
      { t: "Programming Logic", s: ["Flowcharts", "Pseudocode", "First scripts in Python"] },
      { t: "Web Basics", s: ["HTML and CSS", "How the browser works", "Publishing a page"] },
      { t: "Databases 101", s: ["Tables and keys", "Basic SQL", "Reading a schema"] },
      { t: "Cloud & Cybersecurity Overview", s: ["Cloud service models", "Password and device hygiene", "Common attack types"] },
      { t: "AI Tools for Everyday Work", s: ["Prompting basics", "Document and data assistance", "Verifying output"] },
      { t: "Career Mapping", s: ["Track comparison", "Skill gap plan", "Resume foundation"] },
    ],
    tools: ["Windows & Linux", "MS Excel", "Google Workspace", "Python", "HTML/CSS", "MySQL", "ChatGPT", "Canva", "Git", "VS Code"],
    roles: ["IT Support Executive", "Junior Analyst", "Operations Associate", "Trainee Developer", "Documentation Assistant"],
    projects: [
      { title: "Departmental Excel Dashboard", body: "A cleaned dataset turned into a filterable summary sheet with charts." },
      { title: "Static Business Website", body: "A three-page responsive site published to a live URL." },
      { title: "Career Track Report", body: "A researched comparison of two IT specialisations with a personal 12-month plan." },
    ],
  },

  /* --------------------------------------------------------------- ai & data */
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "AI & Data",
    tagline:
      "AI fundamentals, machine learning concepts, generative AI, intelligent automation and data-driven decision-making — taught through practical activities and projects.",
    focus:
      "Techcadd offers a career-focused Artificial Intelligence course designed for students, graduates, professionals, and aspiring AI enthusiasts across Amritsar.",
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    badge: "Hot",
    featured: true,
    /* The twelve learning blocks of the Amritsar Artificial Intelligence
       brief's "What You'll Learn", in its order, with its own prose carried
       into the module explorer. */
    topics: [
      {
        t: "Artificial Intelligence Fundamentals",
        s: ["What Artificial Intelligence is", "How intelligent systems work", "Where AI is used in everyday life and business"],
        b: "Students begin by understanding what Artificial Intelligence is, how intelligent systems work, and where AI is used in everyday life and business.",
        d: "A working definition of AI you can explain to someone else, with real examples.",
      },
      {
        t: "Machine Learning Concepts",
        s: ["How systems identify patterns", "Making predictions from data", "The ideas behind modern models"],
        b: "Learners are introduced to the basic ideas behind machine learning, including how systems can identify patterns and make predictions from data.",
        d: "An understanding of how a model learns, without needing to build one from scratch.",
      },
      {
        t: "Generative AI",
        s: ["Text, images and ideas", "Summaries and content generation", "How modern generative systems work"],
        b: "Students explore Generative AI and understand how modern AI systems can generate text, images, ideas, summaries, and other forms of content.",
        d: "Content generated and evaluated across several formats.",
      },
      {
        t: "AI Tools & Applications",
        s: ["Productivity and research", "Content workflows", "Analysis and everyday tasks"],
        b: "The course introduces learners to practical AI tools and demonstrates how they can be used for productivity, research, content workflows, analysis, and other everyday tasks.",
        d: "A practical toolkit applied to tasks you actually do.",
      },
      {
        t: "Prompt Engineering Basics",
        s: ["Clear, structured prompts", "Communicating with AI systems", "Improving AI-generated results"],
        b: "Students learn how to communicate effectively with AI systems by creating clear, structured prompts and improving AI-generated results.",
        d: "Prompts that get you the answer you were actually looking for.",
      },
      {
        t: "AI for Automation",
        s: ["Repetitive workflows", "Intelligent automation", "Productivity improvements"],
        b: "Learners explore how Artificial Intelligence can support repetitive workflows and improve productivity through intelligent automation.",
        d: "A repetitive task handed to an AI-assisted workflow.",
      },
      {
        t: "Data & AI",
        s: ["How data connects to AI", "Why data quality matters", "Data behind AI-driven applications"],
        b: "Students gain an introductory understanding of how data is connected with Artificial Intelligence and why high-quality data is important for AI-driven applications.",
        d: "An appreciation of why bad data produces confident, wrong answers.",
      },
      {
        t: "AI Ethics & Responsible AI",
        s: ["Privacy and reliability", "Bias awareness", "The role of human judgment"],
        b: "The course introduces important topics such as responsible AI use, privacy, reliability, bias, and the importance of human judgment when working with AI systems.",
        d: "A review habit applied to AI output before it is used or shared.",
      },
      {
        t: "AI in Business",
        s: ["Customer support and marketing", "Research and productivity", "Decision-making and process improvement"],
        b: "Students explore how businesses can use Artificial Intelligence for customer support, marketing, research, productivity, decision-making, and process improvement.",
        d: "An AI use case mapped to a real business process.",
      },
      {
        t: "AI for Content Creation",
        s: ["Content ideation and drafting", "Summarization and visual concepts", "Creative workflows with human review"],
        b: "Learners discover how AI can assist with content ideation, drafting, summarization, visual concepts, and other creative workflows while maintaining appropriate human review.",
        d: "A content piece taken from idea to finished draft with AI assistance.",
      },
      {
        t: "Real-World AI Use Cases",
        s: ["Practical examples across industries", "From experimentation to production", "How AI is actually deployed"],
        b: "Students examine practical examples of Artificial Intelligence across different industries to understand how AI is moving from experimentation into real business applications.",
        d: "Case studies you can cite in an interview, with the mechanics understood.",
      },
      {
        t: "Real-World AI Projects",
        s: ["Applied project work", "Demonstrating understanding", "Portfolio building"],
        b: "Throughout the course, learners can apply their knowledge through practical AI projects and activities that help demonstrate their understanding and build a useful portfolio.",
        d: "A portfolio of AI projects and activities you can walk someone through.",
      },
    ],
    tools: ["ChatGPT", "Generative AI tools", "AI productivity tools", "AI content tools", "AI research tools", "AI automation tools", "Prompt engineering", "Data & analytics basics"],
    roles: ["AI Specialist", "Generative AI Specialist", "AI Automation Associate", "AI-Assisted Content Specialist", "Digital Professional with AI Skills"],
    projects: [
      { title: "Generative AI Project", body: "Text, images and summaries produced to a brief, with the outputs reviewed and refined." },
      { title: "AI Automation Workflow", body: "A repetitive workflow rebuilt with AI assistance and measured against the manual version." },
      { title: "AI for Business Use Case", body: "An AI application mapped to a real business process — support, marketing, research or productivity." },
      { title: "AI Portfolio Project", body: "A capstone activity that demonstrates practical understanding rather than course attendance." },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    category: "AI & Data",
    tagline:
      "Learn the algorithms, then learn what they get wrong — modelling, evaluation and deployment on real, messy data.",
    focus:
      "Most machine learning courses stop at model.fit(); this one spends as much time on data quality, evaluation and deployment, because that is where projects actually fail.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    badge: "Hot",
    featured: true,
    /* The ten learning blocks of the Amritsar machine learning brief's "What
       You'll Learn & Tools Covered", in its order, with its own prose carried
       into the module explorer. */
    topics: [
      {
        t: "Python Programming for Machine Learning",
        s: ["Syntax, data structures and functions", "File handling", "NumPy and Pandas for data work"],
        b: "Since Python is the backbone of almost all ML work, the course begins here — covering syntax, data structures, functions, and file handling, along with Python libraries essential for data work like NumPy and Pandas.",
        d: "Working Python you wrote yourself, plus the two libraries every later module depends on.",
      },
      {
        t: "Statistics and Mathematics for ML",
        s: ["Probability and distributions", "Mean, median and variance", "Hypothesis testing and linear algebra basics"],
        b: "You'll build a solid understanding of the statistical concepts that power machine learning — including probability, distributions, mean/median/variance, hypothesis testing, and linear algebra basics — explained in a practical, applied way rather than pure theory.",
        d: "The statistics behind a model, applied to a dataset rather than left on the whiteboard.",
      },
      {
        t: "Data Preprocessing and Exploratory Data Analysis (EDA)",
        s: ["Cleaning data and handling missing values", "Outlier detection and categorical encoding", "Pandas, Matplotlib and Seaborn"],
        b: "Real-world data is messy. You'll learn how to clean datasets, handle missing values, detect outliers, encode categorical variables, and perform exploratory analysis using Pandas, Matplotlib, and Seaborn to visualize patterns and trends.",
        d: "A messy dataset cleaned, encoded and explored, with the patterns you found written down.",
      },
      {
        t: "Supervised Learning Algorithms",
        s: ["Linear and Logistic Regression", "Decision Trees and Random Forests", "SVM and K-Nearest Neighbors"],
        b: "This includes hands-on training in Linear Regression, Logistic Regression, Decision Trees, Random Forests, Support Vector Machines (SVM), and K-Nearest Neighbors (KNN) — covering both regression and classification problems.",
        d: "Regression and classification models trained and compared on the same problem.",
      },
      {
        t: "Unsupervised Learning Algorithms",
        s: ["K-Means clustering", "Hierarchical clustering", "Principal Component Analysis (PCA)"],
        b: "You'll explore clustering techniques like K-Means and Hierarchical Clustering, along with dimensionality reduction methods such as Principal Component Analysis (PCA), used for pattern discovery in unlabeled data.",
        d: "Structure found in unlabelled data — clusters described, dimensions reduced with a reason.",
      },
      {
        t: "Model Evaluation and Optimization",
        s: ["Accuracy, precision, recall and F1-score", "Confusion matrices and cross-validation", "Hyperparameter tuning, overfitting and underfitting"],
        b: "Learn how to properly evaluate model performance using metrics like accuracy, precision, recall, F1-score, and confusion matrices, along with techniques like cross-validation, hyperparameter tuning, and handling overfitting/underfitting.",
        d: "A tuned, cross-validated model with an honest account of where it fails.",
      },
      {
        t: "Introduction to Deep Learning",
        s: ["How neural networks are structured", "How networks are trained", "TensorFlow and Keras basics"],
        b: "The course introduces the basics of Neural Networks, including how they're structured and trained, giving you a foundational understanding of deep learning concepts using frameworks like TensorFlow or Keras.",
        d: "A first neural network built and trained, with the training behaviour understood.",
      },
      {
        t: "Natural Language Processing (NLP) Basics",
        s: ["Tokenization", "Text cleaning", "Basic sentiment analysis"],
        b: "You'll get an introduction to text data processing — covering tokenization, text cleaning, and basic sentiment analysis — a skill increasingly relevant across chatbot, recommendation, and automation projects.",
        d: "A sentiment classifier over real text, from raw strings to a working prediction.",
      },
      {
        t: "Model Deployment Basics",
        s: ["Preparing a trained model", "Serving it in a real application", "The step most courses skip"],
        b: "Beyond just building models, you'll learn how to prepare and deploy a trained model so it can be used in a real application — an often-overlooked but highly valued skill by employers.",
        d: "A trained model deployed where something other than a notebook can call it.",
      },
      {
        t: "Real-World Projects and Case Studies",
        s: ["Price prediction models", "Customer segmentation", "Sentiment analysis and classification systems"],
        b: "Throughout the course, you'll apply everything you learn to real datasets — building projects like price prediction models, customer segmentation, sentiment analysis, and classification systems — giving you a strong portfolio to showcase.",
        d: "A portfolio of finished ML projects you can talk through in an interview.",
      },
    ],
    /* The tools the brief lists under "Tools & Technologies Covered". */
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "Jupyter Notebook", "SQL", "Git/GitHub"],
    roles: ["Machine Learning Engineer", "Data Scientist", "ML Analyst", "AI Developer", "Applied Research Associate"],
    /* The four projects the brief names under "Real-World Projects and Case
       Studies". */
    projects: [
      { title: "Price Prediction Model", body: "A regression model over a real dataset — features engineered, validated and tuned, with its error understood." },
      { title: "Customer Segmentation", body: "Clustering applied to unlabelled customer data, with the segments described in business terms." },
      { title: "Sentiment Analysis", body: "Text tokenised and cleaned, then classified — an NLP pipeline taken from raw text to prediction." },
      { title: "Classification System", body: "A classifier evaluated on precision, recall and F1, then prepared for deployment in a real application." },
    ],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning",
    category: "AI & Data",
    tagline:
      "Neural networks, computer vision, NLP and Transformers — built, trained and deployed on real datasets with TensorFlow, PyTorch and Keras.",
    focus:
      "The Deep Learning Training in Amritsar at Techcadd is designed for students, graduates, and working professionals who want hands-on expertise in neural networks, computer vision, NLP, and real-world AI model deployment.",
    duration: "4 – 6 months",
    /* The brief starts from Python fundamentals and states that no prior coding
       experience is required, so the entry level is beginner. */
    level: "Beginner to advanced",
    /* The nine learning blocks of the Amritsar deep learning brief's "What
       You'll Learn & Tools", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Python Programming for AI & Deep Learning",
        s: ["Data structures and functions", "NumPy for numerical computation", "Pandas for data manipulation"],
        b: "The course begins with Python fundamentals tailored specifically for AI development — data structures, functions, and essential libraries like NumPy and Pandas for numerical computation and data manipulation. This foundation ensures every student, regardless of prior coding experience, is ready to work with deep learning frameworks confidently.",
        d: "Working Python and the two libraries every framework in this course sits on top of.",
      },
      {
        t: "Mathematics & Statistics for Deep Learning",
        s: ["Linear algebra and matrices", "Probability, statistics and calculus basics", "Gradients and optimization intuition"],
        b: "A strong grasp of linear algebra, probability, calculus basics, and statistics is essential for truly understanding how neural networks learn. Rather than treating math as an afterthought, this module builds intuition around concepts like gradients, matrices, and optimization — the backbone of every deep learning model.",
        d: "An intuition for what a gradient is actually doing, not a memorised formula.",
      },
      {
        t: "Machine Learning Fundamentals",
        s: ["Supervised and unsupervised learning", "Regression, classification and decision trees", "Model evaluation metrics"],
        b: "Before diving into neural networks, students cover core machine learning concepts — supervised and unsupervised learning, regression, classification, decision trees, and model evaluation metrics. This bridges the gap between traditional ML and deep learning, giving learners a complete picture of the AI landscape.",
        d: "Classical models trained and evaluated, so you can say when a network is not the answer.",
      },
      {
        t: "Neural Networks & Deep Learning Fundamentals",
        s: ["Perceptrons and activation functions", "Forward and backward propagation", "Loss functions and gradient descent"],
        b: "This is where the real journey into deep learning begins — understanding perceptrons, activation functions, forward and backward propagation, loss functions, and optimization techniques like gradient descent. Students learn to build neural networks from scratch before moving to framework-based development.",
        d: "A neural network written from scratch, before a framework does any of it for you.",
      },
      {
        t: "Convolutional Neural Networks (CNNs)",
        s: ["Image classification and object detection", "Building image classifiers", "Facial recognition and medical imaging use cases"],
        b: "Students learn how CNNs power computer vision applications — from image classification to object detection. Practical projects include building image classifiers and exploring real-world use cases like facial recognition and medical image analysis.",
        d: "A trained image classifier, with its errors examined rather than averaged away.",
      },
      {
        t: "Recurrent Neural Networks (RNNs) & LSTMs",
        s: ["Sequence data and dependencies", "RNN and LSTM architectures", "Language modeling and time-series prediction"],
        b: "For sequence-based data like text and time series, students explore RNNs and LSTMs, understanding how these architectures handle sequential dependencies — essential for applications like language modeling and stock price prediction.",
        d: "A sequence model that holds context across time, and an account of where it loses it.",
      },
      {
        t: "Natural Language Processing (NLP) with Deep Learning",
        s: ["Text preprocessing and word embeddings", "Sentiment analysis and text classification", "Chatbot development"],
        b: "This module covers text preprocessing, word embeddings, and building models for sentiment analysis, text classification, and chatbot development — highly relevant given the current industry demand for NLP-based AI applications.",
        d: "An NLP application taken from raw text through embeddings to a working prediction.",
      },
      {
        t: "Transformers & Modern Architectures",
        s: ["Attention mechanisms", "BERT and GPT-style models", "How Transformers redefined NLP and generative AI"],
        b: "Students get introduced to Transformer-based models — the architecture behind modern breakthroughs like BERT and GPT — understanding attention mechanisms and how these models have redefined NLP and generative AI capabilities.",
        d: "A working understanding of attention, tested against a Transformer you have actually run.",
      },
      {
        t: "Model Deployment & Real-World Application",
        s: ["Flask and Streamlit basics", "From notebook to application", "Serving a trained model"],
        b: "Building a model is only half the job — students also learn how to deploy deep learning models using tools like Flask or Streamlit, understanding the basics of taking a model from a notebook environment into a usable application.",
        d: "A model deployed out of the notebook and into something a person can use.",
      },
    ],
    /* The tools the brief lists under "Key Tools & Frameworks Covered". */
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "SpaCy", "Jupyter Notebook", "Google Colab", "Flask", "Streamlit"],
    /* The roles the brief's FAQ names. */
    roles: ["AI Engineer", "Machine Learning Engineer", "Deep Learning Engineer", "Data Scientist", "NLP Engineer"],
    /* The capstone projects the brief names. */
    projects: [
      { title: "Image Classification System", body: "A CNN trained on a real image dataset — built, evaluated and explained, not just fitted." },
      { title: "Sentiment Analysis Tool", body: "Text preprocessed and embedded, then classified — an NLP pipeline from raw text to prediction." },
      { title: "Chatbot", body: "A conversational application built on the NLP module, from intent handling to a usable interface." },
      { title: "Predictive Model on Real Data", body: "A deep learning model deployed with Flask or Streamlit, taken out of the notebook into an application." },
    ],
  },
  {
    slug: "data-science",
    title: "Data Science",
    category: "AI & Data",
    tagline:
      "Statistics, modelling and storytelling — turning raw data into decisions people actually act on.",
    focus:
      "A data scientist's real output is a decision someone trusts, so the course weights communication and rigour as heavily as modelling.",
    duration: "6 – 9 months",
    level: "Beginner to advanced",
    featured: true,
    /* The twelve learning blocks of the Amritsar data science brief's "What You
       Will Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Python for Data Science",
        s: ["Variables, data types, operators and loops", "Functions, lists, dictionaries, tuples and sets", "Files, modules and error handling"],
        b: "Python is one of the most widely used programming languages in data science. Students begin by understanding Python fundamentals such as variables, data types, operators, conditional statements, loops, functions, lists, dictionaries, tuples, and sets. As learners progress, they can work with files, functions, modules, error handling, and programming logic. These fundamentals create the base required for working with data science libraries and building analytical solutions.",
        d: "Working Python you wrote yourself — the base every library in this course is built on.",
      },
      {
        t: "NumPy",
        s: ["How arrays work", "Efficient numerical operations", "The foundation for other data libraries"],
        b: "NumPy provides powerful capabilities for numerical computing in Python. Students learn how arrays work and how numerical operations can be performed efficiently. Understanding NumPy helps learners work with mathematical calculations and forms a foundation for using other Python-based data science libraries.",
        d: "Numerical work done in arrays rather than loops, and an understanding of why that matters.",
      },
      {
        t: "Pandas and Data Analysis",
        s: ["Importing, inspecting, selecting and filtering", "Manipulating columns and handling missing values", "Grouping, sorting, merging and summarising"],
        b: "Pandas is an essential tool for working with structured data. Students learn how to import datasets, inspect information, select and filter records, manipulate columns, handle missing values, and perform data transformations. Learners can also practice grouping, sorting, merging, and summarizing data. These skills are important because real-world datasets often require considerable preparation before meaningful analysis can begin.",
        d: "A dataset imported, reshaped and summarised in Pandas, ready for analysis.",
      },
      {
        t: "Data Cleaning and Preparation",
        s: ["Missing values, duplicates and inconsistent formats", "Identifying data-quality problems", "Transforming variables for analysis"],
        b: "Raw data is rarely perfect. It may contain missing values, duplicate records, inconsistent formats, incorrect entries, or unnecessary information. Students learn the importance of preparing data before analysis. They can practice identifying data-quality problems, cleaning datasets, transforming variables, and preparing information for visualization or machine learning. This stage helps learners understand a crucial part of the data science workflow: reliable analysis depends on reliable data.",
        d: "A messy dataset cleaned, with every data-quality decision documented and defensible.",
      },
      {
        t: "Statistics for Data Science",
        s: ["Mean, median, mode, variance and standard deviation", "Probability and distributions", "Correlation and foundational measures"],
        b: "Statistics helps data professionals understand patterns and make informed conclusions. The course introduces learners to important statistical concepts that support data analysis and machine learning. Students can learn about measures such as mean, median, mode, variance, standard deviation, probability, distributions, correlation, and other foundational concepts. The objective is to help learners understand statistics from a practical perspective rather than treating it as purely theoretical mathematics.",
        d: "Statistical measures applied to a real dataset, and read for what they actually say.",
      },
      {
        t: "SQL and Database Skills",
        s: ["Selecting, filtering and sorting", "Grouping and aggregate functions", "Joins and subqueries"],
        b: "A large amount of business information is stored in databases, making SQL an important skill for data professionals. Students learn how to retrieve and analyze information using SQL queries. Topics can include selecting data, filtering records, sorting results, grouping information, aggregate functions, joins, subqueries, and other database concepts. Combining SQL with Python gives learners a stronger foundation for handling data from different sources.",
        d: "Queries that pull the data an analysis needs, straight from the database.",
      },
      {
        t: "Exploratory Data Analysis",
        s: ["Trends, relationships and distributions", "Unusual values and data-quality issues", "Asking the right questions before modelling"],
        b: "Exploratory Data Analysis, or EDA, helps learners investigate a dataset before building predictive models. Students learn how to identify trends, relationships, unusual values, distributions, and potential data-quality issues. They can use Python libraries to explore datasets and generate meaningful observations. EDA encourages students to ask the right questions before jumping into machine learning.",
        d: "An exploratory pass over a dataset that ends in observations worth acting on.",
      },
      {
        t: "Data Visualization",
        s: ["Bar charts, line graphs and histograms", "Scatter plots and other representations", "Choosing a visual and explaining what it shows"],
        b: "Data becomes more useful when people can understand it easily. Students learn how visualization can communicate patterns and insights more effectively. Depending on the curriculum, learners can work with Python visualization libraries and create charts such as bar charts, line graphs, histograms, scatter plots, and other visual representations. The emphasis is on selecting suitable visualizations and explaining what the data is showing rather than creating charts simply for appearance.",
        d: "Charts chosen for what they explain, each one accompanied by the point it makes.",
      },
      {
        t: "Machine Learning Fundamentals",
        s: ["Supervised and unsupervised learning", "Classification, regression and clustering", "Training data, testing data and evaluation"],
        b: "Machine learning is an important component of modern data science. Students are introduced to the basic concepts behind machine learning and how algorithms learn patterns from data. The course can cover areas such as supervised learning, unsupervised learning, classification, regression, clustering, training data, testing data, and model evaluation. Learners gain an understanding of how machine learning can be applied to problems such as prediction, classification, and pattern discovery.",
        d: "A first model trained and tested, with an honest read of what it learned.",
      },
      {
        t: "Regression and Classification",
        s: ["Predicting numerical outcomes", "Assigning data to categories", "Feature selection, training and interpretation"],
        b: "Students can explore common machine learning approaches through practical examples. Regression is used when the goal is to predict numerical outcomes, while classification is used to assign data to categories. Learners can understand the workflow of preparing data, selecting features, training a model, evaluating performance, and interpreting results.",
        d: "A regression and a classification model taken end to end, from features to interpretation.",
      },
      {
        t: "Clustering",
        s: ["Unsupervised learning", "Finding groups without predefined labels", "Customer segmentation and pattern discovery"],
        b: "Clustering introduces students to unsupervised learning. Instead of using predefined labels, algorithms can identify groups or patterns within data. This can be useful for applications such as customer segmentation, pattern discovery, and exploratory analysis.",
        d: "Segments found in unlabelled data, described in terms a business would recognise.",
      },
      {
        t: "Model Evaluation",
        s: ["Training and testing datasets", "Accuracy, precision and recall", "Confusion matrices and evaluation approaches"],
        b: "Building a model is only one part of machine learning. Students also need to understand whether a model performs effectively. Learners are introduced to concepts such as training and testing datasets, accuracy, precision, recall, confusion matrices, and other evaluation approaches depending on the machine learning problem. This helps students understand why blindly relying on a model's output can be misleading.",
        d: "An evaluation that says where a model can be trusted and where it cannot.",
      },
    ],
    /* The tools the brief lists under "Data Science Tools". */
    tools: ["Python", "NumPy", "Pandas", "SQL", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook", "Excel"],
    /* The roles the brief names under "Career-Ready Data Skills". */
    roles: ["Data Analyst", "Junior Data Scientist", "Business Intelligence Analyst", "Reporting Analyst"],
    /* The project examples the brief names under "Real-World Projects". */
    projects: [
      { title: "Sales Analysis", body: "A dataset cleaned, explored and visualised into a read of sales performance, with the findings written up." },
      { title: "Customer Segmentation", body: "Clustering applied to customer data, with the segments described in terms a business can act on." },
      { title: "Prediction Problem", body: "A regression or classification model built end to end — features, training, evaluation and interpretation." },
      { title: "Business Performance Analysis", body: "An end-to-end study combining SQL, Pandas, statistics and visualisation, presented as conclusions rather than charts." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "AI & Data",
    tagline:
      "Excel, SQL, Power BI and Python — the practical analyst toolkit, taught in the order a business actually uses it.",
    focus:
      "Analytics work is 70% getting the data right and 30% presenting it well, and this course is structured in exactly those proportions.",
    duration: "4 – 6 months",
    level: "Beginner to intermediate",
    badge: "Trending",
    topics: [
      { t: "Advanced Excel", s: ["Lookup and dynamic arrays", "Pivot modelling", "Power Query"] },
      { t: "SQL for Analysts", s: ["Joins and aggregation", "Subqueries and CTEs", "Window functions"] },
      { t: "Data Cleaning", s: ["Deduplication", "Type and unit fixes", "Validation rules"] },
      { t: "Descriptive Statistics", s: ["Central tendency", "Variance and outliers", "Trend and seasonality"] },
      { t: "Power BI Modelling", s: ["Star schema", "DAX measures", "Row-level security"] },
      { t: "Dashboard Design", s: ["Layout hierarchy", "Chart choice", "Interaction patterns"] },
      { t: "Python for Analytics", s: ["Pandas workflows", "Automated reporting", "Chart generation"] },
      { t: "Business Case Capstone", s: ["KPI definition", "Insight write-up", "Presentation"] },
    ],
    tools: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Pandas", "Power Query", "DAX", "Google Analytics", "Git"],
    roles: ["Data Analyst", "Business Analyst", "MIS Executive", "Reporting Analyst", "Operations Analyst"],
    projects: [
      { title: "Sales Performance Dashboard", body: "A modelled Power BI report with drill-through by region, product and rep." },
      { title: "Customer Cohort Analysis", body: "Retention curves built in SQL and visualised with a written interpretation." },
      { title: "Automated Weekly Report", body: "A Python script that refreshes, formats and distributes a recurring report." },
    ],
  },
  {
    slug: "power-bi",
    title: "Power BI",
    category: "AI & Data",
    tagline:
      "Data modelling, DAX and dashboard design for reports that survive contact with a real business.",
    focus:
      "Most Power BI problems are modelling problems, so the course spends its first half on relationships and DAX before any visual is placed.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    /* The nine learning blocks of the Amritsar Power BI brief's "What You'll
       Learn & Tools Covered", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Power BI Fundamentals",
        s: ["What Power BI is and where it fits", "The business intelligence ecosystem", "Power BI Desktop ribbon, panes and views"],
        b: "You'll begin with the basics — understanding what Power BI is, how it fits into the broader business intelligence ecosystem, and getting comfortable with the Power BI Desktop interface. This includes navigating the ribbon, panes, and views, so you build a solid foundation before moving to more advanced topics.",
        d: "Confident navigation of Power BI Desktop, with the workflow ahead of you mapped out.",
      },
      {
        t: "Data Import and Connectivity",
        s: ["Excel, CSV, SQL and web sources", "Bringing multiple formats together", "A single, unified workspace"],
        b: "Learn how to connect Power BI to multiple data sources — Excel spreadsheets, CSV files, SQL databases, web sources, and more. You'll understand how to bring data from different formats and systems into a single, unified workspace, a critical skill for real-world business reporting.",
        d: "Several sources connected into one workspace, ready to be shaped.",
      },
      {
        t: "Power Query and Data Transformation",
        s: ["Cleaning, duplicates and missing values", "Merging and appending queries", "Splitting columns and reshaping datasets"],
        b: "This is where raw, messy data becomes usable. You'll learn Power Query Editor techniques including data cleaning, removing duplicates, handling missing values, merging and appending queries, splitting columns, and reshaping datasets so they're ready for analysis.",
        d: "A messy dataset cleaned and reshaped in Power Query, with every step repeatable on refresh.",
      },
      {
        t: "Data Modeling",
        s: ["Relationships between tables", "Star schema design", "Models that stay fast and accurate"],
        b: "Understand how to build relationships between multiple tables, create a proper data model, and structure your data using best practices like star schema design. This module is key to building dashboards that are fast, accurate, and scalable.",
        d: "A star-schema model with working relationships — the foundation everything else is built on.",
      },
      {
        t: "DAX (Data Analysis Expressions)",
        s: ["Calculated columns and measures", "SUM, CALCULATE and FILTER", "Time-intelligence functions"],
        b: "DAX is the formula language that powers advanced calculations in Power BI. You'll learn to write calculated columns and measures, work with functions like SUM, CALCULATE, FILTER, and time-intelligence functions, and build the kind of dynamic calculations that make dashboards genuinely insightful rather than just decorative.",
        d: "A measure set that answers real business questions, time intelligence included.",
      },
      {
        t: "Data Visualization Techniques",
        s: ["Choosing the right visual for the data", "Bar, line, pie, maps and KPI cards", "Design principles for readable dashboards"],
        b: "Learn how to choose and design the right visuals for different types of data — bar charts, line graphs, pie charts, maps, KPI cards, and more. You'll also learn design principles for creating dashboards that are clean, readable, and genuinely useful for decision-makers.",
        d: "A report page a decision-maker can read at a glance, with each visual chosen on purpose.",
      },
      {
        t: "Interactive Dashboard Creation",
        s: ["Slicers and filters", "Drill-downs", "Cross-filtering between visuals"],
        b: "Bring everything together by building fully interactive dashboards with slicers, filters, drill-downs, and cross-filtering between visuals — giving end-users the ability to explore data dynamically rather than viewing static reports.",
        d: "A dashboard users can explore themselves — slicers, drill-downs and cross-filtering all working.",
      },
      {
        t: "Power BI Service and Publishing",
        s: ["Publishing reports to the cloud", "Scheduled data refreshes", "Sharing securely with teams and stakeholders"],
        b: "Learn how to publish your reports and dashboards to the Power BI Service (cloud platform), set up scheduled data refreshes, and share dashboards securely with teams or stakeholders.",
        d: "A published report on the Power BI Service with a working refresh schedule and shared access.",
      },
      {
        t: "Real-World Project Work",
        s: ["Sales performance dashboards", "Financial reporting tools", "HR and marketing analytics dashboards"],
        b: "Throughout the course, you'll apply these skills to real, business-style datasets — building projects such as sales performance dashboards, financial reporting tools, and HR or marketing analytics dashboards — giving you a practical portfolio by the time you finish.",
        d: "A portfolio of business-style dashboards built end to end from raw data.",
      },
    ],
    /* The tools the brief lists under "Tools and Technologies Covered". */
    tools: ["Power BI Desktop", "Power BI Service", "Power Query Editor", "DAX", "Excel", "SQL"],
    /* The roles the brief's FAQ names. */
    roles: ["Data Analyst", "Power BI Developer", "Business Intelligence Analyst", "MIS Executive", "Reporting Analyst"],
    /* The three business-style dashboards the brief names as its project work. */
    projects: [
      { title: "Sales Performance Dashboard", body: "A sales dashboard built from raw data — cleaned in Power Query, modelled, measured in DAX and made interactive." },
      { title: "Financial Reporting Dashboard", body: "A finance report with time-intelligence measures and visuals a decision-maker can read at a glance." },
      { title: "HR & Marketing Analytics Dashboard", body: "A people or campaign analytics dashboard published to the Power BI Service with a scheduled refresh." },
    ],
  },
  {
    slug: "tableau",
    title: "Tableau",
    category: "AI & Data",
    tagline:
      "Visual analytics that make a pattern obvious in three seconds instead of three slides.",
    focus:
      "Tableau rewards people who understand visual perception, so the course pairs tool mechanics with the principles behind good chart design.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    /* The eight learning blocks of the Amritsar Tableau brief's "What You'll
       Learn & Tools Covered", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Data Fundamentals & Preparation",
        s: ["Data types, structures and sources", "Connecting to Excel, CSVs and databases", "Cleaning, missing values, joins, unions and blends"],
        b: "You'll start by understanding different data types, data structures, and sources — including Excel files, CSVs, and databases. You'll learn how to connect Tableau to these sources, clean messy data, handle missing values, and shape data using joins, unions, and blends so it's ready for analysis.",
        d: "A messy dataset connected, cleaned and shaped into something ready to analyse.",
      },
      {
        t: "Tableau Interface & Core Navigation",
        s: ["Sheets, dashboards and stories", "Data pane, Rows/Columns shelves and Marks card", "How dimensions and measures work together"],
        b: "Before building anything complex, you'll get comfortable with Tableau's workspace — sheets, dashboards, stories, the Data pane, Rows/Columns shelves, Marks card, and how dimensions and measures work together. This foundation makes everything that follows far easier to grasp.",
        d: "Confident navigation of the Tableau workspace, with dimensions and measures used deliberately.",
      },
      {
        t: "Building Charts & Visualizations",
        s: ["Bar, line, pie and scatter plots", "Heat maps, treemaps and geographic maps", "Choosing the chart the story needs"],
        b: "You'll learn to create the core chart types used in real business reporting — bar charts, line charts, pie charts, scatter plots, heat maps, treemaps, and geographic maps — and, more importantly, when to use each one based on the story your data needs to tell.",
        d: "A set of charts where every choice of form is defensible against the question being asked.",
      },
      {
        t: "Calculated Fields & Table Calculations",
        s: ["Logical and aggregate functions", "Running totals and percent-of-total", "Year-over-year comparisons"],
        b: "This is where Tableau moves from \"pretty charts\" to real analytics. You'll learn to write calculated fields, use logical and aggregate functions, and apply table calculations for running totals, percent-of-total, and year-over-year comparisons — skills directly tested in analyst interviews.",
        d: "Calculated fields and table calculations that answer the questions a chart alone cannot.",
      },
      {
        t: "Filters, Parameters & Interactivity",
        s: ["Dimension, measure, context and top-N filters", "Parameters for dynamic control", "Dashboards users can explore themselves"],
        b: "You'll master different filter types (dimension, measure, context, and top-N filters) and learn to use parameters to build dynamic, user-controlled dashboards — letting end users explore data themselves instead of viewing static charts.",
        d: "A parameter-driven dashboard the end user steers, rather than a static report they read.",
      },
      {
        t: "Dashboard Design & Storytelling",
        s: ["Containers, actions and tooltips", "Layout, colour and clarity", "Dashboards that communicate insight"],
        b: "A major focus of the course is combining multiple visualizations into cohesive, interactive dashboards using containers, actions, and tooltips — plus applying dashboard design best practices around layout, color, and clarity so your dashboards actually communicate insight, not just data.",
        d: "A cohesive dashboard that reads as one argument, not a wall of charts.",
      },
      {
        t: "Advanced Visual Analytics",
        s: ["Trend lines and forecasting", "Clustering", "Reference lines"],
        b: "You'll explore trend lines, forecasting, clustering, and reference lines to add analytical depth to your dashboards — moving beyond basic reporting into insight generation.",
        d: "Analysis with depth behind it — trends, clusters and references that say something the raw bars do not.",
      },
      {
        t: "Working with Real Business Use Cases",
        s: ["Sales performance dashboards", "Marketing campaign analysis", "HR/attendance reporting and customer segmentation"],
        b: "Throughout the course, concepts are applied to practical scenarios: sales performance dashboards, marketing campaign analysis, HR/attendance reporting, and customer segmentation — so you finish with a portfolio that mirrors real job tasks.",
        d: "A portfolio of dashboards that mirrors the work an analyst is actually handed.",
      },
    ],
    /* The tools the brief lists under "Key Tools & Platform Covered". */
    tools: ["Tableau Desktop", "Tableau Public", "MS Excel", "SQL", "Tableau Prep"],
    /* The roles the brief's FAQ names. */
    roles: ["Data Analyst", "Business Intelligence (BI) Executive", "Reporting Analyst", "MIS Executive", "Data Visualization Specialist"],
    /* The business use cases the brief names as its project work. */
    projects: [
      { title: "Sales Performance Dashboard", body: "An interactive sales dashboard built from a messy source — cleaned, calculated and filterable by the people who use it." },
      { title: "Marketing Campaign Analysis", body: "Campaign performance analysed with calculated fields and table calculations, presented as one readable dashboard." },
      { title: "HR & Attendance Report", body: "A people-reporting dashboard with parameters and actions, designed for a manager rather than an analyst." },
      { title: "Customer Segmentation Story", body: "Clustering and trend analysis published as a Tableau Public story you can show in an interview." },
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Data",
    tagline:
      "Generative AI fundamentals, AI tools, prompt engineering, AI-powered content creation, image generation, productivity and automation — taught practically.",
    focus:
      "Techcadd offers a job-oriented and practical Generative AI course designed for students, graduates, working professionals, entrepreneurs, content creators, and AI enthusiasts across Amritsar.",
    duration: "3 – 6 months",
    /* The brief states no prior AI experience is needed and starts from
       fundamentals. */
    level: "Beginner to intermediate",
    badge: "Hot",
    featured: true,
    /* The fifteen learning blocks of the Amritsar Generative AI brief's "What
       You'll Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Introduction to Artificial Intelligence",
        s: ["AI and Machine Learning basics", "What Generative AI is", "How modern AI systems are used"],
        b: "Understand the basics of Artificial Intelligence, Machine Learning, Generative AI, and how modern AI systems are used in real-world applications.",
        d: "A clear picture of where Generative AI sits inside the wider AI landscape.",
      },
      {
        t: "Understanding Generative AI",
        s: ["How it differs from traditional AI", "Generating and transforming content", "Where it fits in real work"],
        b: "Learn what Generative AI is, how it differs from traditional AI systems, and how it can generate or transform different types of content.",
        d: "The ability to explain what a generative model can and cannot do.",
      },
      {
        t: "Generative AI Tools",
        s: ["Writing, research and productivity tools", "Content, images and presentations", "Choosing the right tool for a task"],
        b: "Explore modern AI tools and understand their practical applications for writing, research, productivity, content, images, presentations, and other digital tasks.",
        d: "A working toolkit, with each tool matched to the job it actually does well.",
      },
      {
        t: "Prompt Engineering",
        s: ["Clear instructions and context", "Desired output formats", "Examples and constraints"],
        b: "Learn how to write effective prompts by providing clear instructions, context, desired output formats, examples, and constraints.",
        d: "Prompts that produce the output you intended on the first or second try.",
      },
      {
        t: "Advanced Prompting Techniques",
        s: ["Structured and role-based prompting", "Iterative prompting and refinement", "Improving AI-generated results"],
        b: "Explore structured prompting, role-based instructions, iterative prompting, refinement, and methods for improving AI-generated results.",
        d: "A refinement loop you can run when the first answer is not good enough.",
      },
      {
        t: "AI for Content Creation",
        s: ["Brainstorming and writing", "Rewriting and summarization", "Content planning workflows"],
        b: "Learn how Generative AI can support brainstorming, writing, rewriting, summarization, content planning, and other content-related workflows.",
        d: "A content workflow where AI drafts and you edit, not the other way round.",
      },
      {
        t: "AI Image Generation",
        s: ["Prompts for AI-generated images", "Visual content fundamentals", "Style, composition and iteration"],
        b: "Understand the fundamentals of creating effective prompts for AI-generated images and visual content.",
        d: "Generated visuals that match a brief rather than a lucky prompt.",
      },
      {
        t: "AI for Presentations",
        s: ["Presentation ideas and structure", "Content generation", "Visual planning"],
        b: "Learn how AI tools can assist with presentation ideas, structure, content generation, and visual planning.",
        d: "A presentation drafted end to end with AI assistance and human judgement.",
      },
      {
        t: "AI for Digital Marketing",
        s: ["Social media and marketing content", "Campaign planning", "Customer communication and research"],
        b: "Explore practical AI applications for social media ideas, marketing content, campaign planning, customer communication, and research.",
        d: "Marketing assets produced faster, with the strategy still yours.",
      },
      {
        t: "AI Productivity Tools",
        s: ["Brainstorming and summarizing", "Organizing ideas and drafting", "Everyday research tasks"],
        b: "Learn how Generative AI can assist with everyday professional tasks such as brainstorming, summarizing information, organizing ideas, drafting content, and research.",
        d: "A set of repeatable AI habits for the work you do every week.",
      },
      {
        t: "AI Automation",
        s: ["Repetitive digital workflows", "Efficiency improvements", "Reducing manual work"],
        b: "Understand how AI can be incorporated into repetitive digital workflows to improve efficiency and reduce manual work.",
        d: "One repetitive workflow automated, measured against how long it used to take.",
      },
      {
        t: "AI for Business",
        s: ["Business operations and communication", "Marketing and research", "Productivity use cases"],
        b: "Explore practical use cases of Generative AI in business operations, customer communication, marketing, research, and productivity.",
        d: "AI applied to a real business task, with the limits of the output understood.",
      },
      {
        t: "AI-Assisted Coding",
        s: ["Code generation and debugging", "Explanation and documentation", "Learning programming concepts"],
        b: "Understand how Generative AI can assist programmers with code generation, debugging, explanation, documentation, and learning programming concepts.",
        d: "Code written with an AI assistant, reviewed by you before it ships.",
      },
      {
        t: "Responsible Use of Generative AI",
        s: ["Reviewing AI outputs", "Protecting sensitive information", "Checking accuracy"],
        b: "Learn the importance of reviewing AI outputs, protecting sensitive information, checking accuracy, and using AI responsibly.",
        d: "A review habit that catches what the model got confidently wrong.",
      },
      {
        t: "Real-World Generative AI Projects",
        s: ["Applied project work", "Solving real problems", "Useful digital workflows"],
        b: "Throughout the course, learners apply their knowledge through practical projects rather than isolated exercises. Projects can help students understand how Generative AI can be used to solve real-world problems and create useful digital workflows.",
        d: "Finished AI projects you can demonstrate rather than describe.",
      },
    ],
    /* The practical AI toolset the brief's modules work through. */
    tools: ["ChatGPT", "AI writing assistants", "AI image generation", "AI presentation tools", "AI research tools", "AI productivity tools", "AI automation tools", "AI coding assistants"],
    roles: ["Generative AI Specialist", "AI Content Creator", "Prompt Engineer", "AI Productivity Specialist", "AI Automation Associate"],
    projects: [
      { title: "AI Content Workflow", body: "Research, drafting, rewriting and summarisation run as one AI-assisted workflow with human review." },
      { title: "AI Image & Presentation Set", body: "Generated visuals and a full presentation built to a brief, from prompt to finished deck." },
      { title: "Marketing & Business Use Case", body: "A campaign or business task completed with AI assistance, with the output verified before use." },
      { title: "AI Automation Project", body: "A repetitive digital workflow automated with AI, measured against the manual version." },
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    category: "AI & Data",
    tagline:
      "Prompt design, role and few-shot prompting, context engineering, structured outputs and AI workflows — from basic AI usage to professional-level prompting.",
    focus:
      "Techcadd offers a practical, job-oriented Prompt Engineering course for students, graduates, working professionals, content creators, developers, marketers, and anyone who wants to work effectively with modern AI tools.",
    duration: "6 weeks – 3 months",
    level: "Beginner to advanced",
    /* The fifteen learning blocks of the Amritsar Prompt Engineering brief's
       "What You'll Learn", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Introduction to Generative AI",
        s: ["What generative AI is", "How modern AI models work at a high level", "How users interact with LLMs"],
        b: "Understand what generative AI is, how modern AI models work at a high level, and how users interact with large language models.",
        d: "A working mental model of what happens when you send a prompt.",
      },
      {
        t: "Prompt Engineering Fundamentals",
        s: ["What makes a prompt effective", "Communicating instructions clearly", "Common prompt failures"],
        b: "Learn what makes a prompt effective and how to communicate instructions clearly to an AI model.",
        d: "The difference between a question and an instruction, applied.",
      },
      {
        t: "Prompt Structure",
        s: ["Instructions, context and goals", "Constraints and examples", "Tone and expected output formats"],
        b: "Understand the importance of instructions, context, goals, constraints, examples, tone, and expected output formats.",
        d: "A reusable prompt template with every part of the structure accounted for.",
      },
      {
        t: "Role-Based Prompting",
        s: ["Assigning a role or perspective", "Structuring responses for a task", "Writing for a specific audience"],
        b: "Learn how assigning an appropriate role or perspective can help structure AI responses for specific tasks and audiences.",
        d: "Role prompts that change the output in the way you intended.",
      },
      {
        t: "Zero-Shot and Few-Shot Prompting",
        s: ["Instructing without examples", "Providing examples for consistency", "When each approach fits"],
        b: "Understand how to instruct AI without examples and how to provide examples when more consistent outputs are required.",
        d: "A few-shot prompt that produces consistent output across repeated runs.",
      },
      {
        t: "Chain-of-Thought and Structured Reasoning Concepts",
        s: ["Breaking complex tasks into steps", "Encouraging structured responses", "Avoiding vague prompts"],
        b: "Learn practical approaches for breaking complex tasks into manageable instructions and encouraging structured responses without relying on vague prompts.",
        d: "A complex task decomposed into instructions the model can follow reliably.",
      },
      {
        t: "Context Engineering Basics",
        s: ["Relevant information and background", "Documents and constraints", "Organising context to improve responses"],
        b: "Learn how relevant information, background context, documents, constraints, and instructions can be organized to improve AI responses.",
        d: "A context block that raises answer quality measurably.",
      },
      {
        t: "Prompt Refinement and Optimization",
        s: ["Analyzing poor AI responses", "Identifying the reason for failure", "Modifying and testing improved versions"],
        b: "Learn how to analyze poor AI responses, identify the reason for failure, modify prompts, and test improved versions.",
        d: "A failing prompt diagnosed, rewritten and re-tested against the same task.",
      },
      {
        t: "Structured Output Prompting",
        s: ["Tables, bullet points and templates", "Structured text formats", "Consistent, reusable outputs"],
        b: "Learn how to request information in useful formats such as tables, bullet points, templates, structured text, and other consistent output formats.",
        d: "Output that arrives in the format your workflow needs, every time.",
      },
      {
        t: "AI for Content Creation",
        s: ["Blogs, social media and emails", "Product descriptions and creative writing", "Content planning and research assistance"],
        b: "Practice using AI for blogs, social media content, emails, product descriptions, creative writing, content planning, and research assistance.",
        d: "A content set produced with AI and edited to a publishable standard.",
      },
      {
        t: "AI for Marketing and Business",
        s: ["Market research and customer personas", "Campaign ideas and business communication", "Sales support and competitor analysis"],
        b: "Learn prompts for market research, customer personas, campaign ideas, business communication, sales support, competitor analysis, and business documentation.",
        d: "A prompt library for the marketing and business tasks you repeat.",
      },
      {
        t: "AI for Developers",
        s: ["Coding and debugging", "Documentation and code explanation", "Testing and AI-assisted development"],
        b: "Understand how prompt engineering can support coding, debugging, documentation, code explanation, testing, and AI-assisted development workflows.",
        d: "Development prompts that speed up work without producing code you cannot explain.",
      },
      {
        t: "Prompting for Data and Research",
        s: ["Information organization and summarization", "Classification and research planning", "Extracting insights from provided information"],
        b: "Learn how AI can assist with information organization, summarization, classification, research planning, and extracting insights from provided information.",
        d: "Research output structured well enough to act on.",
      },
      {
        t: "AI Automation Concepts",
        s: ["Combining prompts with workflows", "Automation tools", "Reducing repetitive manual tasks"],
        b: "Get an introduction to combining prompts with AI-powered workflows and automation tools to reduce repetitive manual tasks.",
        d: "A prompt wired into a workflow rather than pasted by hand each time.",
      },
      {
        t: "Practical Prompt Engineering Projects",
        s: ["Real-world assignments", "Applying prompting to practical problems", "Portfolio-ready outputs"],
        b: "Apply your learning through real-world projects and assignments that demonstrate how AI prompting can solve practical problems.",
        d: "Finished prompt projects that show the problem, the prompt and the result.",
      },
    ],
    tools: ["ChatGPT", "Generative AI tools", "AI writing assistants", "AI research tools", "AI productivity tools", "AI coding assistants", "AI automation tools", "Structured output formats"],
    /* The career directions the brief names. */
    roles: ["Prompt Engineer", "AI Content Specialist", "Generative AI Specialist", "AI Automation Specialist", "AI Marketing Specialist"],
    projects: [
      { title: "Prompt Library", body: "A tested set of role, few-shot and structured-output prompts for the tasks you repeat most." },
      { title: "AI Content Workflow", body: "Blogs, emails and social content produced through a documented prompting workflow." },
      { title: "Business & Marketing Prompt Set", body: "Research, personas, campaign ideas and business communication built on repeatable prompts." },
      { title: "Prompt Refinement Case Study", body: "A failing prompt diagnosed, refined and re-tested, with the before-and-after documented." },
    ],
  },
  {
    slug: "chatgpt-ai-tools",
    title: "ChatGPT & AI Tools",
    category: "AI & Data",
    tagline:
      "Practical AI for real work — ChatGPT, prompt engineering, content, research, presentations, image generation, business and productivity workflows.",
    focus:
      "Techcadd offers practical, career-focused ChatGPT and AI tools training designed for students, graduates, working professionals, business owners, freelancers, and content creators in Amritsar.",
    duration: "6 weeks",
    level: "Beginner",
    badge: "Hot",
    /* The sixteen learning blocks of the Amritsar ChatGPT & AI Tools brief's
       "What You'll Learn", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Introduction to Artificial Intelligence",
        s: ["AI and Generative AI basics", "Large Language Models", "How modern AI systems are used"],
        b: "Understand the basic concept of Artificial Intelligence, Generative AI, Large Language Models, and how modern AI systems are used.",
        d: "A plain-language account of what an AI tool is doing when you use it.",
      },
      {
        t: "ChatGPT Fundamentals",
        s: ["Questions, brainstorming and writing", "Research support and planning", "Learning and productivity"],
        b: "Learn how to use ChatGPT effectively for questions, brainstorming, writing assistance, research support, planning, learning, and productivity.",
        d: "Confident everyday use of ChatGPT for real tasks, not just trivia.",
      },
      {
        t: "Prompt Engineering",
        s: ["Clear, structured prompts", "Quality and relevance of responses", "Consistency across runs"],
        b: "Learn how to create clear and structured prompts to improve the quality, relevance, and consistency of AI-generated responses.",
        d: "Prompts that return what you needed the first time.",
      },
      {
        t: "Advanced Prompting Techniques",
        s: ["Role prompting and context", "Step-by-step instructions", "Examples, constraints and structured outputs"],
        b: "Explore techniques such as role prompting, context-based prompts, step-by-step instructions, examples, constraints, and structured outputs.",
        d: "A prompt toolkit for the tasks you repeat most.",
      },
      {
        t: "AI for Content Creation",
        s: ["Blog ideas, captions and scripts", "Product descriptions and marketing content", "Content calendars and brainstorming"],
        b: "Learn how AI can assist with blog ideas, social media content, captions, scripts, product descriptions, marketing content, content calendars, and creative brainstorming.",
        d: "A content set drafted with AI and finished by you.",
      },
      {
        t: "AI for Research",
        s: ["Information organization", "Summaries and brainstorming", "Human verification of AI output"],
        b: "Learn how AI tools can assist with research, information organization, summaries, brainstorming, and generating research questions while maintaining human verification.",
        d: "A researched brief with its claims checked rather than assumed.",
      },
      {
        t: "AI for Presentations",
        s: ["Presentation ideas and outlines", "Slide content and speaker notes", "Visual concepts"],
        b: "Explore how AI can help generate presentation ideas, outlines, slide content, speaker notes, and visual concepts.",
        d: "A presentation built end to end with AI assistance.",
      },
      {
        t: "AI Image Generation Tools",
        s: ["Prompts for image generation", "Visual concepts for marketing and education", "Creative and social media projects"],
        b: "Learn the fundamentals of creating effective prompts for AI image-generation tools and developing visual concepts for marketing, education, social media, and creative projects.",
        d: "Generated visuals that match a brief rather than a lucky prompt.",
      },
      {
        t: "AI for Social Media",
        s: ["Content planning and captions", "Post and campaign ideas", "Hashtags and audience ideas"],
        b: "Use AI tools for content planning, captions, post ideas, campaign concepts, hashtags, audience ideas, and social media workflows.",
        d: "A social plan produced in a fraction of the usual time.",
      },
      {
        t: "AI for Business",
        s: ["Business communication and marketing ideas", "Customer support and research", "Product descriptions and planning"],
        b: "Explore AI applications for business communication, marketing ideas, customer support, business research, product descriptions, planning, and productivity.",
        d: "An AI workflow applied to a real business task.",
      },
      {
        t: "AI for Students",
        s: ["Explanations and study planning", "Revision and presentation preparation", "Academic integrity"],
        b: "Learn how AI can support learning through explanations, brainstorming, study planning, revision assistance, presentation preparation, and project organization while maintaining academic integrity.",
        d: "A study workflow that helps you learn rather than skip the learning.",
      },
      {
        t: "AI for Productivity",
        s: ["Emails, summaries and meeting notes", "Planning and task organization", "Document drafting"],
        b: "Discover how AI tools can assist with emails, summaries, meeting notes, planning, task organization, document drafting, brainstorming, and everyday professional workflows.",
        d: "A week of routine work reorganised around AI assistance.",
      },
      {
        t: "AI Automation Basics",
        s: ["Repetitive workflows", "Reducing manual effort", "Practical productivity gains"],
        b: "Understand how AI can be incorporated into repetitive workflows to reduce manual effort and improve productivity.",
        d: "One repetitive task automated and measured.",
      },
      {
        t: "AI Tools for Freelancers",
        s: ["Proposals and content ideas", "Research and client communication", "Planning and creative workflows"],
        b: "Learn how freelancers can use AI for proposals, content ideas, research, client communication, planning, and creative workflows.",
        d: "A freelance workflow — pitch to delivery — supported by AI.",
      },
      {
        t: "Responsible AI Usage",
        s: ["Privacy and misinformation", "Copyright awareness and fact-checking", "Bias and human review"],
        b: "Understand important concepts such as privacy, misinformation, copyright awareness, fact-checking, bias, and the importance of human review.",
        d: "A review habit applied before AI output leaves your desk.",
      },
      {
        t: "Real-World AI Projects",
        s: ["Education and business use cases", "Marketing and content creation", "Productivity and professional use"],
        b: "Apply the skills learned during training through practical AI projects based on education, business, marketing, content creation, productivity, and professional use cases.",
        d: "Finished AI projects you can show and explain.",
      },
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Canva AI", "Notion AI", "Zapier", "Make", "Excel Copilot", "Midjourney"],
    roles: ["AI-Enabled Professional", "Operations Executive", "Content Specialist", "Executive Assistant", "Freelance Consultant"],
    projects: [
      { title: "Role Automation Audit", body: "A documented before-and-after of one job role's weekly tasks with measured time savings." },
      { title: "AI-Assisted Research Brief", body: "A verified, sourced brief produced in a fraction of the usual time." },
      { title: "Team Prompt Playbook", body: "A shared library of tested prompts for a specific department." },
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "AI & Data",
    tagline:
      "AI systems that understand goals, plan tasks, call tools, use APIs, retrieve knowledge and complete multi-step work — built and evaluated hands-on.",
    focus:
      "Techcadd offers job-oriented Agentic AI training for students, graduates, developers, working professionals, freelancers, entrepreneurs, and AI enthusiasts who want to learn how modern AI agents work.",
    duration: "3 months",
    /* The brief states the level as beginner to advanced: concepts first, with
       programming becoming useful for the technical build. */
    level: "Beginner to advanced",
    badge: "Hot",
    /* The twenty learning blocks of the Amritsar Agentic AI brief's "What
       You'll Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Introduction to Artificial Intelligence",
        s: ["AI fundamentals", "From rule-based systems to Generative AI", "Where agent-based applications fit"],
        b: "Learn the fundamentals of Artificial Intelligence and understand how AI has evolved from traditional rule-based systems to modern Generative AI and agent-based applications.",
        d: "A clear account of how agents differ from everything that came before them.",
      },
      {
        t: "Generative AI Fundamentals",
        s: ["Text, code, summaries and ideas", "Traditional automation vs generative workflows", "What generative systems can produce"],
        b: "Understand Generative AI and how it can produce text, code, summaries, ideas, images, and other types of content. Learn the difference between traditional automation and generative AI-based workflows.",
        d: "The line between deterministic automation and generative output, drawn correctly.",
      },
      {
        t: "Large Language Models",
        s: ["Capabilities, context and tokens", "Instructions and outputs", "Model limitations"],
        b: "Understand the role of Large Language Models in modern AI applications. You will learn concepts related to LLM capabilities, context, instructions, tokens, model limitations, model outputs, and AI application workflows.",
        d: "An understanding of what a model can hold, and what it will get wrong.",
      },
      {
        t: "Prompt Engineering",
        s: ["Role prompting, context and constraints", "Few-shot and structured prompts", "Refinement, formatting and testing"],
        b: "Learn how to create better instructions for AI models. Topics can include role prompting, context, constraints, examples, structured prompts, few-shot prompting, prompt refinement, output formatting and prompt testing.",
        d: "Prompts written as specifications, then tested rather than trusted.",
      },
      {
        t: "What Is Agentic AI?",
        s: ["Chatbots vs AI assistants", "AI workflows vs AI agents", "Autonomous and multi-agent systems"],
        b: "Understand what makes an AI system \"agentic.\" Learn the difference between chatbots, AI assistants, AI workflows, AI agents, autonomous workflows and multi-agent systems.",
        d: "The vocabulary to say precisely what kind of system you are building.",
      },
      {
        t: "AI Agent Architecture",
        s: ["Model, instructions and tools", "Memory, context and planning", "Execution, evaluation and external data"],
        b: "Understand the components that can make up an AI agent. These can include the AI model, instructions, tools, memory, context, planning, execution, evaluation and external data.",
        d: "An agent design sketched component by component before any code is written.",
      },
      {
        t: "Tool Calling",
        s: ["Using external tools", "Calculators, databases and search", "Actions beyond generating text"],
        b: "Learn how AI systems can use external tools to perform actions beyond generating text. For example, an AI system could potentially interact with a calculator, database, API, search service, or business application through defined tools.",
        d: "An agent that calls a real tool and uses what comes back.",
      },
      {
        t: "Function Calling",
        s: ["Selecting predefined functions", "Schemas and structured calls", "Building AI-powered applications"],
        b: "Understand how AI models can select and use predefined functions as part of an application workflow. This is an important concept for developers building AI-powered applications.",
        d: "Functions defined and called reliably from within an AI workflow.",
      },
      {
        t: "API Integration",
        s: ["Connecting AI to external services", "Retrieving information", "Triggering defined actions"],
        b: "Learn the fundamentals of connecting AI systems with external services through APIs. This can allow AI applications to retrieve information or trigger defined actions.",
        d: "A live API wired into an agent, with failures handled rather than ignored.",
      },
      {
        t: "Agent Planning",
        s: ["Task decomposition", "Planning and execution", "Workflow management"],
        b: "Learn how complex goals can be divided into smaller tasks. The course introduces concepts around task decomposition, planning, execution, and workflow management.",
        d: "A complex goal broken into steps an agent can actually complete.",
      },
      {
        t: "Memory & Context Management",
        s: ["Maintaining relevant information", "Multi-step interactions", "Why context management matters"],
        b: "Understand how AI applications can maintain relevant information during multi-step interactions. You will learn why context management is important for building useful AI assistants and agents.",
        d: "An agent that remembers what matters and forgets what does not.",
      },
      {
        t: "Retrieval-Augmented Generation",
        s: ["Retrieving from external knowledge", "Document Q&A and knowledge assistants", "Research and support systems"],
        b: "Learn the fundamentals of RAG, a technique that allows AI applications to retrieve relevant information from external knowledge sources before generating a response. Possible applications include company knowledge assistants, document Q&A, internal knowledge systems, research assistants and customer support systems.",
        d: "A grounded answer that cites the document it came from.",
      },
      {
        t: "Vector Databases",
        s: ["Embeddings and semantic search", "Storage and retrieval", "Depth according to your background"],
        b: "Understand the basic role of vector databases and embeddings in AI applications that need semantic search and retrieval. Technical depth can depend on the learner's background and selected training level.",
        d: "Semantic search working over your own documents.",
      },
      {
        t: "AI Workflow Automation",
        s: ["Input, processing and tools", "Data and decisions", "Structured, repeatable outputs"],
        b: "Learn how AI can be incorporated into structured workflows. Examples may include input, AI processing, tool use, data, decision and output stages chained into one repeatable flow.",
        d: "A workflow that runs end to end without a human pasting between steps.",
      },
      {
        t: "Multi-Agent Systems",
        s: ["Specialized agents", "Dividing responsibilities", "Collaboration on a larger task"],
        b: "Explore the concept of multiple specialized AI agents collaborating on a larger task. For example, one agent may handle research while another handles analysis and another prepares a final output.",
        d: "A task split across agents, with the handoffs defined.",
      },
      {
        t: "Agent Evaluation",
        s: ["Testing workflows", "Identifying errors and evaluating responses", "Improving prompts and monitoring performance"],
        b: "AI systems don't always produce perfect results. Learn how to test workflows, identify errors, evaluate responses, improve prompts, and monitor agent performance.",
        d: "An evaluation harness that tells you when the agent has regressed.",
      },
      {
        t: "Human-in-the-Loop AI",
        s: ["Approval and validation", "Permissions and monitoring", "Escalation and human review"],
        b: "Understand why human review can be important when AI agents are performing actions. Learn concepts such as approval, validation, permissions, monitoring, escalation and human review.",
        d: "An approval checkpoint placed where an autonomous action would otherwise be risky.",
      },
      {
        t: "Responsible AI",
        s: ["Reliability and privacy", "Security and permissions", "Hallucinations and responsible deployment"],
        b: "Understand important considerations around reliability, privacy, security, permissions, hallucinations, and responsible deployment.",
        d: "A deployment checklist covering what the agent is allowed to do.",
      },
      {
        t: "AI Automation Projects",
        s: ["Practical agent builds", "Real-world tasks", "Demonstrable outcomes"],
        b: "Build practical projects that demonstrate how Agentic AI can be used for real-world tasks.",
        d: "Working agents applied to tasks someone actually needs done.",
      },
      {
        t: "Capstone Agentic AI Project",
        s: ["Model, instructions and tools", "Workflows and data", "Evaluation of the finished system"],
        b: "Apply multiple concepts together to create a larger project involving an AI model, instructions, tools, workflows, data, and evaluation.",
        d: "One substantial agent, built and evaluated, that you can demo end to end.",
      },
    ],
    tools: ["LangGraph", "LangChain", "OpenAI API", "Claude API", "Python", "FastAPI", "Redis", "Postgres", "LangSmith", "Docker"],
    roles: ["Agentic AI Developer", "Generative AI Developer", "AI Application Developer", "LLM Application Developer", "AI Automation Developer"],
    /* The project categories the brief names under "Practical Agentic AI
       Projects". */
    projects: [
      { title: "AI Research Agent", body: "A workflow that assists with research tasks, organises information and produces structured outputs." },
      { title: "Document Q&A Assistant", body: "A RAG application that retrieves information from provided documents and answers questions from the relevant content." },
      { title: "Customer Support Agent", body: "A workflow that understands customer queries and provides structured responses from available information." },
      { title: "Business Automation Agent", body: "An agent that assists with repetitive business tasks using defined tools and actions, with a human approval step." },
    ],
  },
  {
    slug: "rag-development",
    title: "RAG Development",
    category: "AI & Data",
    tagline:
      "Retrieval-augmented generation done properly — chunking, ranking, grounding and evaluation.",
    focus:
      "RAG looks trivial in a demo and gets hard in production, where retrieval quality, not the model, decides whether the answer is right.",
    duration: "6 weeks – 3 months",
    level: "Intermediate to advanced",
    topics: [
      { t: "Retrieval Fundamentals", s: ["Lexical vs semantic search", "Embeddings", "Relevance intuition"] },
      { t: "Document Processing", s: ["Parsing PDFs and HTML", "Chunking strategy", "Metadata design"] },
      { t: "Vector Databases", s: ["Index types", "Filtering", "Scaling and cost"] },
      { t: "Hybrid Search & Reranking", s: ["BM25 plus vectors", "Cross-encoder reranking", "Query rewriting"] },
      { t: "Grounded Generation", s: ["Context assembly", "Citation formats", "Refusal behaviour"] },
      { t: "Evaluation", s: ["Retrieval recall", "Answer faithfulness", "Golden question sets"] },
      { t: "Advanced Patterns", s: ["Multi-hop retrieval", "Graph RAG", "Agentic retrieval"] },
      { t: "Production Concerns", s: ["Incremental indexing", "Access control", "Latency budgets"] },
    ],
    tools: ["LangChain", "LlamaIndex", "Pinecone", "Chroma", "Weaviate", "OpenAI Embeddings", "Elasticsearch", "Python", "FastAPI", "Ragas"],
    roles: ["RAG Engineer", "LLM Application Developer", "Search Engineer", "AI Engineer", "Knowledge Systems Consultant"],
    projects: [
      { title: "Enterprise Policy Assistant", body: "A permissioned assistant over internal policy documents with source citations." },
      { title: "Technical Documentation Search", body: "Hybrid retrieval with reranking, benchmarked against a golden question set." },
      { title: "Multi-Source Research Tool", body: "A multi-hop pipeline that synthesises across several document collections." },
    ],
  },
  {
    slug: "ai-powered-marketing",
    title: "AI-Powered Marketing",
    category: "AI & Data",
    tagline:
      "Digital marketing strategy, SEO, social media, paid advertising, analytics and automation — with AI supporting research, personalization and campaign decisions.",
    focus:
      "Techcadd offers a practical, career-focused marketing program combining modern digital marketing strategies with intelligent, data-driven marketing methods.",
    duration: "3 – 6 months",
    level: "Beginner to intermediate",
    badge: "Hot",
    /* The sixteen learning blocks of the Amritsar AI-Powered Marketing brief's
       "What You'll Learn", in its order, with its own prose carried into the
       module explorer. */
    topics: [
      {
        t: "Digital Marketing Fundamentals",
        s: ["Online customer journeys", "Digital channels and objectives", "Audience targeting and campaign planning"],
        b: "Understand the fundamentals of digital marketing, online customer journeys, digital channels, marketing objectives, audience targeting, and campaign planning.",
        d: "A map of the channels and the journey a customer actually takes through them.",
      },
      {
        t: "Marketing Strategy",
        s: ["Business objectives and target audiences", "Competition and positioning", "Measurable goals"],
        b: "Learn how to develop marketing strategies based on business objectives, target audiences, customer needs, competition, positioning, and measurable goals.",
        d: "A written strategy with goals someone could hold you to.",
      },
      {
        t: "Search Engine Optimization (SEO)",
        s: ["Keyword research and on-page optimization", "Technical concepts and content optimization", "Local SEO and search visibility"],
        b: "Learn the fundamentals of SEO, keyword research, on-page optimization, technical concepts, content optimization, local SEO, and search visibility.",
        d: "Pages optimised on evidence rather than guesswork.",
      },
      {
        t: "Local SEO",
        s: ["Local search visibility", "Location-based customers", "Amritsar and surrounding areas"],
        b: "Understand how businesses can improve their visibility in local search results and attract customers from specific locations such as Amritsar and surrounding areas.",
        d: "A local presence built for a business that serves one city.",
      },
      {
        t: "Social Media Marketing",
        s: ["Brand awareness and engagement", "Community building", "Content distribution and lead generation"],
        b: "Learn how businesses use social media platforms for brand awareness, audience engagement, community building, content distribution, and lead generation.",
        d: "A social plan tied to a business objective, not to posting frequency.",
      },
      {
        t: "Content Marketing",
        s: ["Websites, blogs and social content", "Campaign content", "Content for each journey stage"],
        b: "Understand how to plan useful marketing content for websites, blogs, social media, campaigns, and different stages of the customer journey.",
        d: "A content plan mapped to the stage of the journey each piece serves.",
      },
      {
        t: "Paid Advertising",
        s: ["Campaign objectives and targeting", "Ad formats and budgeting", "Performance measurement and optimization"],
        b: "Get introduced to paid digital advertising concepts, campaign objectives, audience targeting, ad formats, budgeting, performance measurement, and campaign optimization.",
        d: "A paid campaign planned around an objective and a measurable outcome.",
      },
      {
        t: "Lead Generation",
        s: ["Landing pages and forms", "Advertisements and content", "Social media and other channels"],
        b: "Learn how businesses attract potential customers through landing pages, forms, advertisements, content, social media, and other digital marketing channels.",
        d: "A lead path from first click to captured enquiry.",
      },
      {
        t: "Marketing Analytics",
        s: ["Traffic and engagement", "Conversions and campaign performance", "Customer behaviour"],
        b: "Understand important marketing metrics and how businesses evaluate website traffic, engagement, conversions, campaign performance, and customer behavior.",
        d: "A performance read that separates activity from results.",
      },
      {
        t: "Conversion Rate Optimization",
        s: ["Landing pages and calls-to-action", "Customer journeys", "Improving digital experiences"],
        b: "Learn the basics of improving landing pages, calls-to-action, customer journeys, and digital experiences to increase the percentage of visitors who take desired actions.",
        d: "A page improved on a hypothesis, with the change measured.",
      },
      {
        t: "Email Marketing",
        s: ["Audience segmentation", "Campaign planning and newsletters", "Customer communication and tracking"],
        b: "Explore email marketing fundamentals, audience segmentation, campaign planning, newsletters, customer communication, and performance tracking.",
        d: "A segmented email campaign with its performance reported honestly.",
      },
      {
        t: "Marketing Automation",
        s: ["Repetitive marketing activities", "Customer journeys and lead nurturing", "Campaign workflows"],
        b: "Understand how automation can help businesses manage repetitive marketing activities, customer journeys, lead nurturing, and campaign workflows.",
        d: "A nurture workflow that runs without someone sending each message.",
      },
      {
        t: "AI-Powered Marketing Strategy",
        s: ["Research and audience analysis", "Campaign planning and personalization", "Performance analysis and decision-making"],
        b: "Learn how Artificial Intelligence can support marketing research, audience analysis, campaign planning, personalization, performance analysis, and marketing decision-making.",
        d: "AI used where it speeds up the work, with the judgement still yours.",
      },
      {
        t: "Customer & Audience Analysis",
        s: ["Target audiences and customer needs", "Buyer behaviour and market trends", "Stages of the customer journey"],
        b: "Understand how marketers identify target audiences, customer needs, buyer behavior, market trends, and different stages of the customer journey.",
        d: "Personas built from evidence rather than assumption.",
      },
      {
        t: "Performance Marketing",
        s: ["Leads, conversions and engagement", "Customer acquisition", "Return on advertising spend"],
        b: "Learn how marketers measure marketing activities based on measurable outcomes such as leads, conversions, engagement, customer acquisition, and return on advertising spend.",
        d: "Campaigns judged on outcomes, with the cost of each one known.",
      },
      {
        t: "Real-World Marketing Projects",
        s: ["Strategy, SEO and social media", "Advertising and analytics", "Lead generation and AI-powered workflows"],
        b: "Students apply their knowledge through practical projects involving marketing strategy, SEO, social media, advertising, analytics, lead generation, and AI-powered marketing workflows.",
        d: "A marketing portfolio built from real, reviewed campaign work.",
      },
    ],
    tools: ["ChatGPT", "Meta Ads Manager", "Google Ads", "GA4", "Canva AI", "HubSpot", "SEMrush", "Zapier", "Looker Studio", "Midjourney"],
    roles: ["AI Marketing Specialist", "Performance Marketer", "Content Strategist", "Growth Executive", "Marketing Automation Analyst"],
    projects: [
      { title: "Full Funnel Campaign", body: "A live campaign from audience research to creative testing and a performance readout." },
      { title: "AI Content Engine", body: "A repeatable production system turning one pillar asset into a month of channel content." },
      { title: "Automated Lead Nurture", body: "A scored, segmented lifecycle sequence with measured conversion lift." },
    ],
  },
  {
    slug: "ai-powered-courses",
    title: "AI-Powered Career Track",
    category: "AI & Data",
    tagline:
      "A guided pathway that layers AI capability on top of whichever core discipline you choose.",
    focus:
      "Every discipline is being rewritten by AI, so this track pairs a core specialisation with the AI layer that now sits on top of it.",
    duration: "6 – 9 months",
    level: "Beginner to advanced",
    topics: [
      { t: "Choosing Your Core Track", s: ["Aptitude mapping", "Market demand review", "Commitment planning"] },
      { t: "AI Literacy Foundation", s: ["How models behave", "Prompting discipline", "Verification habits"] },
      { t: "Core Discipline Block", s: ["Development, data or marketing", "Fundamentals first", "Weekly lab work"] },
      { t: "AI Layer for Your Track", s: ["Track-specific tooling", "Workflow redesign", "Quality control"] },
      { t: "Data Fluency", s: ["Reading a dataset", "Basic modelling", "Measurement thinking"] },
      { t: "Automation & Integration", s: ["Connecting tools", "Trigger design", "Failure handling"] },
      { t: "Portfolio Development", s: ["Project selection", "Documentation", "Public presentation"] },
      { t: "Career Launch", s: ["Resume and profile", "Interview drills", "Placement preparation"] },
    ],
    tools: ["Python", "ChatGPT", "GitHub", "Power BI", "React", "Zapier", "Figma", "Notion", "Google Cloud", "Docker"],
    roles: ["AI-Enabled Developer", "AI Analyst", "AI Marketing Executive", "Automation Specialist", "Technology Generalist"],
    projects: [
      { title: "Track Capstone", body: "A substantial project in your chosen discipline with an AI-assisted workflow documented end to end." },
      { title: "Automation Case Study", body: "A real manual process rebuilt as an automated pipeline with measured savings." },
      { title: "Public Portfolio", body: "Three written case studies published with code or campaign evidence." },
    ],
  },

  /* -------------------------------------------------------- digital marketing */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital Marketing",
    tagline:
      "SEO, Google Ads, social media, content, email and analytics — practical, career-oriented training for students, graduates, job seekers and aspiring digital professionals in Amritsar.",
    focus:
      "If you are searching for digital marketing training in Amritsar that focuses on practical skills and real career outcomes, Techcadd provides a structured learning experience designed for students, graduates, job seekers, and aspiring digital professionals.",
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    /* The fourteen blocks of "What You Will Learn in a Digital Marketing
       Training in Amritsar" from the Amritsar digital marketing brief, in the
       order the brief teaches them. `b` carries the copy written for each
       block, so the module panel reads as the course's own prose rather than
       the rotated boilerplate every other seed falls back to. */
    topics: [
      {
        t: "Digital Marketing Fundamentals",
        s: ["Customer journeys and marketing funnels", "Target audiences, organic and paid marketing", "Lead generation, conversions, branding and campaign objectives"],
        b: "Students begin by understanding the fundamentals of digital marketing and how different online channels work together. Topics can include customer journeys, marketing funnels, target audiences, organic and paid marketing, lead generation, conversions, branding, and campaign objectives. This foundation helps students understand why a business chooses a particular digital channel before learning how to operate the platform.",
        d: "A reasoned choice of digital channel, made before any platform is opened.",
      },
      {
        t: "Search Engine Optimization (SEO)",
        s: ["Keyword research, search intent and on-page optimisation", "Content optimisation, internal linking and off-page SEO", "Technical SEO, local SEO and performance measurement"],
        b: "SEO is one of the most important areas for students interested in organic website visibility. Learners can develop an understanding of keyword research, search intent, on-page optimisation, content optimisation, internal linking, off-page SEO, technical SEO, local SEO, and SEO performance measurement. Students can also learn how to optimise content for users and search engines while understanding the importance of helpful, relevant, and trustworthy information. For learners targeting local businesses, local SEO in Amritsar is particularly valuable. It can include location-focused keyword research, Google Business Profile optimisation, local citations, reviews, and location-based content strategies.",
        d: "Pages optimised for users and search engines, with local SEO worked for Amritsar businesses.",
      },
      {
        t: "Google Search Console and Google Analytics",
        s: ["Website traffic and user behaviour", "Search visibility and website search performance", "Conversions and campaign outcomes"],
        b: "Data is an essential part of modern digital marketing. Students should learn how to use analytics platforms to understand website traffic, user behaviour, search performance, conversions, and campaign outcomes. Google Search Console can help marketers understand search visibility and website search performance, while Google Analytics 4 can be used to analyse website and user activity. Learning these tools helps students move from assumptions to evidence-based marketing decisions.",
        d: "Marketing decisions made on evidence rather than on assumptions.",
      },
      {
        t: "Google Ads and PPC",
        s: ["Keyword targeting, search intent and ad copy", "Campaign structures, bidding, budgets and negative keywords", "Conversion tracking, audience targeting, remarketing and reporting"],
        b: "Students can explore paid search marketing through Google Ads. Key concepts include keyword targeting, search intent, ad copy, campaign structures, bidding, budgets, conversion tracking, negative keywords, audience targeting, remarketing, and performance reporting. The objective is not simply to create an advertisement. Students should understand how to connect the campaign objective, audience, keyword, advertisement, landing page, conversion action, and measurement system.",
        d: "A campaign whose objective, audience, keyword, ad, landing page and measurement all connect.",
      },
      {
        t: "Social Media Marketing",
        s: ["Organic content strategy and content calendars", "Audience engagement and community building", "Platform-specific communication and social media analytics"],
        b: "Social media marketing introduces students to organic content strategy, audience engagement, content calendars, platform-specific communication, community building, and social media analytics. Students can learn how brands use platforms such as Instagram, Facebook, LinkedIn, and YouTube to build awareness, generate engagement, support lead generation, and communicate with customers.",
        d: "A content plan that builds awareness, engagement and lead generation on the right platform.",
      },
      {
        t: "Meta Ads",
        s: ["Campaign objectives, audience selection and placements", "Creatives, ad copy and budgets", "Lead, traffic and conversion campaigns, remarketing and analysis"],
        b: "Paid social advertising can be explored through Meta's advertising ecosystem. Students can learn concepts such as campaign objectives, audience selection, creatives, ad copy, placements, budgets, lead campaigns, traffic campaigns, conversion campaigns, remarketing, and performance analysis. This provides useful exposure for learners interested in social media marketing jobs in Amritsar and performance marketing.",
        d: "Paid social campaigns planned, run and analysed end to end.",
      },
      {
        t: "Content Marketing and Copywriting",
        s: ["Topic research, audience intent and content briefs", "SEO-friendly content and social media captions", "Marketing messages aligned to the customer journey"],
        b: "Content is at the centre of many digital marketing activities. Students can learn how to research topics, understand audience intent, create content briefs, write SEO-friendly content, develop social media captions, create marketing messages, and align content with different stages of the customer journey. The focus should be on creating useful content rather than simply producing large quantities of text.",
        d: "Useful content written to a brief, rather than bulk text.",
      },
      {
        t: "Website and WordPress Basics",
        s: ["Domains, hosting and website structure", "Landing pages, navigation and calls to action", "Basic conversion optimisation and content management with WordPress"],
        b: "A digital marketer benefits from understanding how websites work. Students may learn about domains, hosting, website structure, landing pages, navigation, calls to action, basic conversion optimisation, and content management systems such as WordPress. This knowledge can make collaboration with developers and designers easier and can help marketers identify common website and SEO issues.",
        d: "Common website and SEO issues identified without waiting on a developer.",
      },
      {
        t: "Email and Lead-Nurturing Marketing",
        s: ["List building, segmentation and campaign planning", "Email content, calls to action and automation concepts", "Open rates, click-through rates and conversion measurement"],
        b: "Students can also explore email marketing fundamentals, including list building, segmentation, campaign planning, email content, calls to action, automation concepts, open rates, click-through rates, and conversion measurement. The broader objective is understanding how businesses can maintain relationships with prospects and customers after the initial interaction.",
        d: "A sequence that keeps the relationship going after the first interaction.",
      },
      {
        t: "YouTube and Video Marketing",
        s: ["Channel optimisation, titles, descriptions and thumbnails", "Audience research and video SEO", "Content planning and video advertising"],
        b: "Video has become an important digital content format. Students can learn the fundamentals of YouTube channel optimisation, video titles, descriptions, thumbnails, audience research, video SEO, content planning, and video advertising. These skills can complement social media and content marketing capabilities.",
        d: "Video work that complements the social media and content plan.",
      },
      {
        t: "Canva and Creative Marketing Tools",
        s: ["Social media creatives and banners", "Presentations, advertisements and thumbnails", "Design principles for basic marketing assets"],
        b: "Digital marketers frequently work with visual content. Tools such as Canva can help learners understand basic social media creatives, presentations, banners, advertisements, thumbnails, and other marketing assets. Students do not necessarily need to become professional graphic designers, but understanding design principles and creating basic marketing assets can be useful in entry-level roles.",
        d: "Marketing assets you can produce yourself in an entry-level role.",
      },
      {
        t: "SEO Research and Competitive Analysis Tools",
        s: ["Google Keyword Planner and keyword research", "Competitor research platforms", "Interpreting the information rather than the tool score"],
        b: "Students can also become familiar with keyword and competitor research platforms such as Google Keyword Planner and other commonly used SEO tools. Depending on the training environment, learners may encounter platforms such as Semrush, Ahrefs, Moz, or Ubersuggest. The important skill is learning how to interpret the information rather than relying blindly on tool-generated scores.",
        d: "Research read and interpreted, not taken on trust from a tool-generated score.",
      },
      {
        t: "AI Tools for Digital Marketing",
        s: ["Content ideation, keyword clustering and research assistance", "Campaign concepts, ad-copy variations and summaries", "Reporting and workflow efficiency"],
        b: "AI is increasingly becoming part of modern marketing workflows. Students can learn how generative AI can support brainstorming, content ideation, keyword clustering, research assistance, campaign concepts, ad-copy variations, summaries, reporting, and workflow efficiency. AI should be treated as an assistant rather than a replacement for marketing expertise. Human review, factual checking, originality, brand understanding, audience insight, and strategic judgement remain important.",
        d: "AI used as an assistant, with human review, originality and judgement still applied.",
      },
      {
        t: "Reporting and Performance Analysis",
        s: ["Impressions, clicks, click-through rate and cost per click", "Conversions, conversion rate and engagement", "Organic traffic and return on advertising spend"],
        b: "A career-ready marketer needs to understand results. Students can learn metrics such as impressions, clicks, click-through rate, cost per click, conversions, conversion rate, engagement, organic traffic, and return on advertising spend. They can also learn how to prepare simple performance reports and explain what the numbers mean.",
        d: "A simple performance report you can present and explain.",
      },
    ],
    /* The tools the brief names under "Which tools are used in digital
       marketing training?" and in the research-platform block. */
    tools: ["Google Search Console", "GA4", "Google Ads", "Google Keyword Planner", "Meta Ads Manager", "WordPress", "Canva", "Google Business Profile", "Semrush", "Ahrefs", "Ubersuggest", "ChatGPT"],
    roles: ["Digital Marketing Executive", "SEO Executive", "Social Media Executive", "PPC Specialist", "Content Marketing Executive", "Email Marketing Executive", "Performance Marketing Assistant"],
    /* The portfolio the brief asks a student to leave with — "Practical
       Projects and Portfolio Development", plus the "Portfolio-Based Learning"
       list under Why Techcadd. */
    projects: [
      { title: "Keyword Research & Competitor Analysis", body: "A keyword research project for a real business, with the competitor research behind it — the information interpreted rather than taken from tool-generated scores." },
      { title: "SEO Audit & Optimised Pages", body: "An SEO audit and a set of optimised website pages, worked for users and search engines rather than for keyword density." },
      { title: "Local SEO Exercise for an Amritsar Business", body: "Location-focused keyword research, Google Business Profile optimisation, local citations, reviews and location-based content for a business in Amritsar." },
      { title: "Content Calendar & Social Media Campaign", body: "A content calendar and a social media campaign plan, with blog content samples and captions written to a brief." },
      { title: "Google Ads & Meta Ads Campaign Structures", body: "A Google Ads campaign structure and a Meta Ads campaign plan, each connecting objective, audience, ad, landing page and conversion action." },
      { title: "Analytics Report & Strategy Presentation", body: "A landing-page analysis and an analytics report, presented as a digital marketing strategy with the numbers explained." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Digital Marketing",
    tagline:
      "Content that earns attention and paid social that converts it — the creative and the media side together.",
    focus:
      "Social results come from creative volume plus disciplined testing, so the course makes you produce and measure at a real cadence.",
    /* The brief runs this programme at 2 to 3 months on regular and weekend
       tracks, which is what the FAQ and the enquiry fast-facts both state. */
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    badge: "Trending",
    /* The five "Comprehensive Learning Modules" the Amritsar brief names, with
       its own prose carried into the module explorer. */
    topics: [
      {
        t: "Brand Strategy & Audience Psychology",
        s: ["Consumer behaviour and target demographics", "Brand voice and positioning", "Social media content calendars"],
        b: "Before touching any software, you must understand who you are talking to. You will learn how to analyze consumer behavior, define ideal target demographics for local Amritsar businesses, and construct a cohesive brand voice. We teach you how to design comprehensive social media calendars that balance promotional, educational, and viral content formats.",
        d: "A comprehensive social media calendar balancing promotional, educational and viral content for a real brand.",
      },
      {
        t: "Organic Growth & Content Engineering",
        s: ["Instagram, Facebook and YouTube algorithms", "High-conversion hooks and storytelling", "Watch time and viral discovery"],
        b: "Algorithms can seem unpredictable, but they follow structural patterns. You will master the exact parameters that drive the Instagram, Facebook, and TikTok/YouTube algorithms. This module focuses heavily on structural storytelling, writing high-conversion hooks, maximizing viewer retention, and optimizing video watch time to push your organic content directly to viral discovery pages.",
        d: "Organic content built around scripted hooks and retention, measured against reach and watch time.",
      },
      {
        t: "High-ROI Paid Advertising (Performance Marketing)",
        s: ["Meta Ads Manager campaign setup", "Custom and lookalike audiences", "Budgets and A/B split testing"],
        b: "Organic reach is only half the battle. To scale a business fast, you need to understand paid traffic. You will dive deep into Meta Ads Manager, learning how to configure advanced audience targeting, set up custom and lookalike audiences, manage daily ad spending, and execute A/B split testing to pinpoint the most profitable creative assets.",
        d: "Live campaigns run on a real budget, with the split test that identified the winning creative.",
      },
      {
        t: "Influencer Marketing & Community Building",
        s: ["Sourcing and vetting micro-influencers", "Collaborative campaign briefs", "Community management tactics"],
        b: "Modern consumers trust real people over corporate ads. You will learn how to source, vet, and collaborate with local micro-influencers in Punjab to launch collaborative campaigns. Additionally, we teach you community management tactics to build a loyal fanbase around a brand, turning casual followers into repetitive buyers.",
        d: "An influencer collaboration plan and a community playbook for turning followers into repeat buyers.",
      },
      {
        t: "Advanced Data Analytics & Reporting",
        s: ["CPC, CTR and ROAS tracking", "Customer conversion funnels", "Client-facing data reports"],
        b: "A marketer is only as good as their data tracking. You will learn to bypass vanity metrics like basic likes and views to track real business performance metrics. We train you to analyze Cost Per Click (CPC), Click-Through Rates (CTR), Return on Ad Spend (ROAS), and customer conversion funnels, teaching you exactly how to present these technical data reports to corporate clients.",
        d: "A performance report a corporate client can read — CPC, CTR, ROAS and the funnel behind them.",
      },
    ],
    /* The tools the brief lists under "Tools Mastered", plus the platforms the
       overview names. */
    tools: ["Meta Ads Manager", "Meta Business Suite", "Canva Pro", "CapCut", "Hootsuite", "Buffer", "Google Analytics 4", "Instagram", "Facebook", "LinkedIn", "YouTube"],
    roles: ["Social Media Manager", "Content Creator", "Paid Social Specialist", "Community Manager", "Brand Executive"],
    projects: [
      { title: "30-Day Brand Takeover", body: "A month of produced content for one brand with engagement and reach analysis." },
      { title: "Paid Social Test Programme", body: "A structured creative test across audiences with a scaling recommendation." },
      { title: "UGC Campaign", body: "A creator brief, sourcing process and performance comparison against studio content." },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    category: "Digital Marketing",
    tagline:
      "Practical paid search training — campaign planning, keyword research, ad copy, bidding, conversion tracking and optimization for students, job seekers, freelancers and business owners in Amritsar.",
    focus:
      "A Google Ads training course in Amritsar can help students, graduates, job seekers, freelancers, and business owners learn how to create, manage, and optimize paid advertising campaigns on Google.",
    duration: "2 months",
    level: "Beginner to intermediate",
    /* The twelve learning blocks the Amritsar Google Ads brief names, in its
       order, with its own prose carried into the module explorer. */
    topics: [
      {
        t: "Introduction to Google Ads",
        s: ["Paid search advertising and campaign objectives", "Search intent and the role of PPC", "How advertising differs from organic search"],
        b: "Students begin by understanding Google Ads, paid search advertising, campaign objectives, search intent, and the role of PPC in digital marketing. This foundation helps beginners understand why businesses invest in paid search and how advertising differs from organic search.",
        d: "A written explanation of why a business would invest in paid search, and where it sits beside organic results.",
      },
      {
        t: "Google Ads Account Structure",
        s: ["Campaigns, ad groups and keywords", "Advertisements and targeting settings", "Budgets and bidding"],
        b: "Learners can understand the basic structure of a Google Ads account, including campaigns, ad groups, keywords, advertisements, targeting settings, budgets, and bidding. Understanding this structure is essential before creating and managing campaigns.",
        d: "A mapped account structure — campaigns and ad groups organised before a single keyword is added.",
      },
      {
        t: "Keyword Research",
        s: ["Search intent", "Keyword relevance", "Search volume", "Competition", "Match types", "Negative keywords", "Commercial and transactional queries"],
        b: "Keyword research is a core part of search advertising. Students can learn how to identify relevant search terms based on user intent and business objectives. They can also understand concepts such as search intent, keyword relevance, search volume, competition, match types, negative keywords, and commercial and transactional queries. The focus is on selecting keywords that are relevant to the audience and campaign objective rather than simply choosing high-volume terms.",
        d: "A keyword set chosen on relevance and intent, with match types and an opening negative list.",
      },
      {
        t: "Search Campaign Creation",
        s: ["Campaign objectives and locations", "Budgets and bidding approaches", "Ad groups, keywords and advertisements"],
        b: "Students can learn the process of planning and creating search campaigns. This includes campaign objectives, locations, budgets, bidding approaches, ad groups, keywords, and advertisements. Practical campaign planning can help learners understand how different settings affect potential campaign performance.",
        d: "A planned search campaign, with each setting justified against the objective it serves.",
      },
      {
        t: "Ad Copywriting",
        s: ["Headlines and descriptions", "Calls to action and relevance", "Query, ad and landing-page consistency"],
        b: "Writing relevant advertisements is an important Google Ads skill. Learners can explore how to create concise, relevant ad messaging that aligns with the search query and landing page. They can learn about headlines, descriptions, calls to action, relevance, and messaging consistency.",
        d: "Ad variants written to a keyword theme, checked for message match against the landing page.",
      },
      {
        t: "Bidding and Budget Management",
        s: ["Bidding strategies by campaign goal", "Cost per click and cost per conversion", "Conversion value and return on ad spend"],
        b: "Students can develop an understanding of advertising budgets and bidding strategies. They can learn why advertisers select different bidding approaches depending on campaign goals such as traffic, leads, conversions, or visibility. The course can also introduce important concepts such as cost per click, cost per conversion, conversion value, and return on advertising spend.",
        d: "A budget and bidding plan matched to a stated campaign goal, with the cost metrics that judge it.",
      },
      {
        t: "Location and Audience Targeting",
        s: ["How location targeting works", "Planning for specific geographical markets", "Local campaigns for Amritsar and Punjab"],
        b: "Local businesses require accurate targeting. Learners can understand how location targeting works and how campaigns can be planned for specific geographical markets. This can be particularly useful for businesses targeting customers in Amritsar, Punjab, or other local markets.",
        d: "A location and audience targeting plan for a business serving Amritsar and nearby areas.",
      },
      {
        t: "Conversion Tracking",
        s: ["Enquiries, purchases and calls", "Registrations and other business actions", "Judging spend against business objectives"],
        b: "Traffic alone does not always indicate advertising success. Students can learn the importance of tracking meaningful actions such as enquiries, purchases, calls, registrations, or other business conversions. Understanding conversion tracking helps advertisers evaluate whether campaign spending is contributing to actual business objectives.",
        d: "A defined set of conversion actions, each tied to the business outcome it is meant to represent.",
      },
      {
        t: "Google Analytics and Measurement Concepts",
        s: ["Reading website and advertising data", "Google Ads reporting and conversion data", "Performance measurement concepts"],
        b: "Learners can understand how website and advertising data can be interpreted through analytics and reporting tools. Depending on the training setup, students may explore concepts related to Google Analytics, Google Ads reporting, conversion data, and performance measurement.",
        d: "A read of campaign and site data that explains what the numbers say, not just what they are.",
      },
      {
        t: "Campaign Optimization",
        s: ["Reviewing keywords, ads and bids", "Targeting, budgets and landing pages", "Acting on conversion performance"],
        b: "Google Ads requires continuous monitoring. Students can learn how advertisers review campaign data and identify opportunities for improvement. Optimization may involve reviewing keywords, search terms, advertisements, bids, targeting, budgets, landing pages, and conversion performance.",
        d: "An optimization pass on a campaign, with each change argued from the data behind it.",
      },
      {
        t: "Search Terms and Negative Keywords",
        s: ["Search-term analysis", "Identifying irrelevant queries", "Improving traffic quality"],
        b: "Search-term analysis helps advertisers understand the actual queries that trigger advertisements. Learners can understand how irrelevant searches can affect campaign efficiency and how negative keywords can help improve traffic quality.",
        d: "A search-term review with the negative keyword list it produced, and the reasoning for each exclusion.",
      },
      {
        t: "Remarketing Concepts",
        s: ["Reconnecting with previous visitors", "Audience lists and website interaction", "Remarketing within performance marketing"],
        b: "Students can also explore remarketing and how businesses can reconnect with users who have previously interacted with their website or digital presence. This introduces learners to another important area of performance marketing.",
        d: "A remarketing plan describing who is being re-approached, and on what evidence of interest.",
      },
    ],
    /* The tools the brief lists under "Tools and Platforms You Can Learn". */
    tools: ["Google Ads", "Google Keyword Planner", "Google Analytics", "Google Tag Manager", "Google Search Console", "Google Trends", "Looker Studio", "Canva", "Google Sheets", "Excel"],
    /* The roles the brief names under "From Learning to Career Skills". */
    roles: ["PPC Executive", "Google Ads Executive", "Digital Marketing Executive", "Paid Media Associate", "Performance Marketing Executive"],
    projects: [
      { title: "Local Search Campaign Plan", body: "A planned search campaign for an Amritsar business — objective, location targeting, keywords, ad groups, budget and the conversions it would be judged on." },
      { title: "Keyword Research & Negative Keyword List", body: "A keyword set built on search intent and relevance, with match types, commercial and transactional queries separated, and a negative keyword list from search-term analysis." },
      { title: "Ad Copy & Landing Page Message Match", body: "Search advertisements written to a keyword theme, checked for consistency between the query, the ad and the landing page." },
      { title: "Campaign Performance & Optimization Report", body: "A performance review reading clicks, cost, conversions and search terms, ending in a prioritised list of campaign adjustments." },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    category: "Digital Marketing",
    tagline:
      "Technical, on-page and content SEO — plus the answer-engine work that search has moved towards.",
    focus:
      "Search now includes AI answers as well as blue links, so the course covers classic SEO and the emerging answer-engine layer together.",
    duration: "3 months",
    level: "Beginner to intermediate",
    /* The ten learning blocks of the Amritsar SEO brief's "What You'll Learn &
       Tools Covered", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "SEO Fundamentals",
        s: ["How Google crawls, indexes and ranks", "Ranking factors and search intent", "Where SEO sits in digital marketing"],
        b: "You'll start with the basics — how search engines like Google crawl, index, and rank web pages. You'll understand ranking factors, search intent, and how SEO fits into the broader digital marketing ecosystem.",
        d: "A written account of how a page gets found, indexed and ranked — in your own words, not a definition list.",
      },
      {
        t: "Keyword Research",
        s: ["Google Keyword Planner, Ahrefs, SEMrush and Ubersuggest", "Search volume, difficulty and long-tail keywords", "Local keyword research for Amritsar businesses"],
        b: "Learn how to find profitable, relevant keywords using tools like Google Keyword Planner, Ahrefs, SEMrush, and Ubersuggest. You'll understand search volume, keyword difficulty, long-tail keywords, and how to map keywords to content strategy — including local keyword research specific to Amritsar-based businesses.",
        d: "A keyword set mapped to a content plan, with difficulty and intent judged for each term.",
      },
      {
        t: "On-Page SEO",
        s: ["Title tags, meta descriptions and headers", "URL optimization and internal linking", "Image alt text and content optimization"],
        b: "Master title tags, meta descriptions, header structuring, URL optimization, internal linking, image optimization (alt text), and content optimization techniques that help pages rank higher while remaining genuinely useful to readers.",
        d: "A set of pages optimised end to end — titles, headings, links and images — without losing readability.",
      },
      {
        t: "Off-Page SEO & Link Building",
        s: ["Backlink strategies and outreach", "Guest posting and domain authority", "Building a natural profile within Google's guidelines"],
        b: "Understand backlink strategies, guest posting, outreach techniques, domain authority, and how to build a natural, effective backlink profile without violating Google's guidelines.",
        d: "An outreach plan and the links it earned, each one defensible under Google's guidelines.",
      },
      {
        t: "Technical SEO",
        s: ["Site speed, mobile-friendliness and crawlability", "XML sitemaps, robots.txt and canonical tags", "Structured data and crawl-error fixes in Search Console"],
        b: "Dive into website speed optimization, mobile-friendliness, crawlability, XML sitemaps, robots.txt, canonical tags, structured data/schema markup, and fixing crawl errors using Google Search Console.",
        d: "A technical audit with the crawl errors closed and the fixes verified in Search Console.",
      },
      {
        t: "Local SEO",
        s: ["Google Business Profile optimization", "Local citations and NAP consistency", "Map packs and \"near me\" searches"],
        b: "A dedicated module on ranking for local searches — critical for Amritsar-based businesses. You'll learn Google Business Profile optimization, local citations, NAP consistency, and how to help businesses appear in local map packs and \"near me\" searches.",
        d: "A local presence built out for a real Amritsar business — profile, citations and consistent NAP.",
      },
      {
        t: "Content Optimization & Content Strategy",
        s: ["Content structure and readability", "E-E-A-T signals", "Content calendars around keyword clusters"],
        b: "Learn how to create SEO-friendly content that satisfies both search engines and readers — covering content structure, readability, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), and how to plan content calendars around keyword clusters.",
        d: "A content calendar built on keyword clusters, with one piece written to it and reviewed.",
      },
      {
        t: "GEO (Generative Engine Optimization)",
        s: ["Optimizing to be referenced by AI tools", "ChatGPT, Google AI Overviews and Perplexity", "Writing for AI-powered search"],
        b: "A forward-looking module covering how to optimize content so it gets referenced by AI tools like ChatGPT, Google AI Overviews, and Perplexity — an increasingly important skill as AI-powered search grows.",
        d: "Content restructured so an answer engine can quote it, with the citation behaviour checked.",
      },
      {
        t: "AEO (Answer Engine Optimization)",
        s: ["Structuring content and FAQs as direct answers", "Voice assistants and answer engines", "FAQ and How-To schema markup"],
        b: "Learn how to structure content and FAQs so they get picked up as direct answers by voice assistants and answer engines — including schema markup best practices for FAQ and How-To content.",
        d: "An FAQ block written for direct extraction and marked up with valid FAQ schema.",
      },
      {
        t: "Analytics & Performance Tracking",
        s: ["Google Analytics (GA4) and Search Console", "Traffic, rankings and conversions", "Data-driven optimization decisions"],
        b: "Get hands-on with Google Analytics (GA4) and Google Search Console to track traffic, monitor keyword rankings, measure conversions, and make data-driven optimization decisions.",
        d: "A performance report from GA4 and Search Console, ending in the optimizations the data supports.",
      },
    ],
    /* The tools the brief lists under "Tools Covered". */
    tools: ["Google Search Console", "Google Analytics (GA4)", "Google Keyword Planner", "Ahrefs", "SEMrush", "Ubersuggest", "Google Business Profile", "Screaming Frog", "Schema markup generators", "Canva"],
    /* The roles the brief's FAQ names. */
    roles: ["SEO Executive", "SEO Analyst", "Digital Marketing Specialist", "Freelance SEO Consultant"],
    projects: [
      { title: "Full Site Audit", body: "A technical and content audit with a scored, prioritised remediation plan." },
      { title: "Topic Cluster Build", body: "A pillar page plus supporting articles with internal linking and ranking tracking." },
      { title: "Local SEO Campaign", body: "Profile optimisation, citation cleanup and a measured visibility improvement." },
    ],
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    category: "Digital Marketing",
    tagline:
      "Design, build, customize and manage professional websites — themes, Elementor, plugins, WooCommerce and on-page SEO, with no coding background required.",
    focus:
      "Techcadd's WordPress Training in Amritsar is designed for students, graduates, and job seekers who want practical, industry-ready skills in the world's most popular content management system — powering over 40% of websites globally.",
    /* The brief runs this programme at 6 to 8 weeks on weekday and weekend
       batches, which is what the FAQ and the enquiry course details both state. */
    duration: "6 – 8 weeks",
    level: "Beginner",
    /* The eight learning blocks of the brief's "What You'll Learn & Tools
       Covered", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Core WordPress Fundamentals",
        s: ["WordPress.com vs self-hosted WordPress.org", "Domain, hosting and installation via cPanel", "Dashboard, posts, pages, media, categories and tags"],
        b: "You'll start with the foundations — understanding how WordPress works, the difference between WordPress.com and self-hosted WordPress.org, domain and hosting setup, and installing WordPress from scratch (including via cPanel and one-click installers). You'll learn how the WordPress dashboard is structured, how posts differ from pages, and how to manage media, categories, and tags effectively.",
        d: "A WordPress install set up from scratch on real hosting, with content structured the way it will be maintained.",
      },
      {
        t: "Themes & Customization",
        s: ["Selecting, installing and customizing themes", "Customizer, child themes and theme editing basics", "Mobile-responsive layouts"],
        b: "A major part of the course is learning how to select, install, and customize themes to match a brand's identity. You'll work with the WordPress Customizer, child themes, and theme editing basics — learning how to change colors, fonts, headers, footers, and layouts without breaking site functionality. You'll also learn how to make websites mobile-responsive, since most traffic today comes from phones.",
        d: "A theme customized to a brand — colours, fonts, header and footer — that holds together on a phone.",
      },
      {
        t: "Page Building with Elementor",
        s: ["Homepages, landing, about and contact pages", "Sections, columns, widgets and templates", "Professional layouts without writing code"],
        b: "Elementor is one of the most in-demand WordPress skills, and you'll get hands-on practice building complete pages — homepages, landing pages, about pages, contact pages — using drag-and-drop sections, columns, widgets, and pre-built templates. You'll learn to design visually appealing, professional layouts without writing code.",
        d: "A full set of pages built in Elementor, from homepage to contact page.",
      },
      {
        t: "Essential Plugins",
        s: ["Contact forms — WPForms or Contact Form 7", "SEO plugins — Yoast SEO or Rank Math", "Caching, security and backup plugins"],
        b: "You'll be introduced to the plugin ecosystem that powers most WordPress functionality: contact form plugins (like WPForms or Contact Form 7), SEO plugins (Yoast SEO or Rank Math), caching and performance plugins, security plugins, and backup solutions. You'll learn how to evaluate, install, configure, and troubleshoot plugins — a skill that separates a confident WordPress user from a beginner clicking around blindly.",
        d: "A working plugin stack you chose, configured and troubleshot yourself — forms, SEO, caching, security and backups.",
      },
      {
        t: "WooCommerce & E-commerce Setup",
        s: ["Products, payment gateways and shipping rules", "Inventory management", "Cart and checkout customization"],
        b: "For students interested in e-commerce, the course covers setting up an online store using WooCommerce — adding products, configuring payment gateways, setting shipping rules, managing inventory, and customizing the shopping cart and checkout experience. This is a highly valuable skill given the growing number of small businesses moving to online sales.",
        d: "A working WooCommerce store — products, payments, shipping and a checkout you have tested end to end.",
      },
      {
        t: "On-Page SEO Basics",
        s: ["Titles, meta descriptions and headings", "Image alt text, URL structure and internal linking", "Google Search Console and keyword placement"],
        b: "Since a website is only useful if people can find it, you'll learn foundational on-page SEO: optimizing titles, meta descriptions, headings, image alt text, URL structures, and internal linking. You'll also get an introduction to Google Search Console and basic keyword placement — skills that make you more valuable to any employer or client.",
        d: "A site optimised page by page and connected to Search Console, not left to be found by accident.",
      },
      {
        t: "Website Speed & Performance",
        s: ["Image optimization", "Caching setup", "Lightweight themes and plugins"],
        b: "You'll learn practical techniques to improve website loading speed — image optimization, caching setup, and choosing lightweight themes and plugins — since site speed affects both user experience and search rankings.",
        d: "A measured speed improvement on a real site, with the changes that produced it documented.",
      },
      {
        t: "Basic Security & Maintenance",
        s: ["Strong login protocols", "Regular updates and backup strategies", "Recognising common vulnerabilities"],
        b: "The course covers essential WordPress security practices: strong login protocols, regular updates, backup strategies, and recognizing common vulnerabilities — knowledge that's critical for anyone managing live client websites.",
        d: "A maintenance routine for a live site — logins hardened, updates scheduled and backups proven to restore.",
      },
    ],
    /* The tools the brief lists under "Tools You'll Work With". */
    tools: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO", "Rank Math", "cPanel", "WPForms", "Contact Form 7", "Google Search Console", "TinyPNG", "ShortPixel"],
    /* The roles the brief's FAQ names, plus the freelance route it describes. */
    roles: ["WordPress Developer", "Web Developer Trainee", "Website Executive", "Digital Content Manager", "Freelance Web Developer"],
    /* The client-style builds the brief names as its project work. */
    projects: [
      { title: "Business Website", body: "A complete business site — homepage, about, services and contact — built on a customized theme and made mobile-responsive." },
      { title: "Online Store", body: "A WooCommerce store with product listings, payment gateways, shipping rules and a tested cart and checkout." },
      { title: "Blog Build", body: "A content site with posts, categories, tags and media organised for maintenance, optimised with on-page SEO." },
      { title: "Portfolio Site", body: "A personal or client portfolio built in Elementor, tuned for loading speed and handed over ready to launch." },
    ],
  },
  {
    slug: "shopify",
    title: "Shopify Development",
    category: "Digital Marketing",
    tagline:
      "Build, customize and manage a complete online store — setup, themes, products, payments, shipping, SEO and marketing, with no coding required.",
    focus:
      "The Shopify Training Course in Amritsar by Techcadd is designed for students, graduates, and entrepreneurs who want hands-on, practical skills in one of the world's most in-demand e-commerce platforms.",
    /* The brief runs flexible weekday and weekend batches and states the span
       as a few weeks to a couple of months rather than a fixed figure. */
    duration: "Few weeks to 2 months",
    level: "Beginner",
    /* The eleven learning blocks of the brief's "What You'll Learn & Tools
       Covered", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "E-commerce & Shopify Fundamentals",
        s: ["What e-commerce is and how it works", "Own-product selling, dropshipping and print-on-demand", "Choosing the model that fits the business goal"],
        b: "Understand what e-commerce is, how it works, and why Shopify has become one of the most popular platforms for building online stores. You'll learn the difference between business models — own-product selling, dropshipping, and print-on-demand — and understand which approach fits different business goals.",
        d: "A chosen business model for your store, argued against the goal it is meant to serve.",
      },
      {
        t: "Store Setup From Scratch",
        s: ["Shopify account and plan selection", "Buying and connecting a custom domain", "Currency, timezone and business settings"],
        b: "Learn to create a Shopify account, choose the right plan, set up your domain (buying and connecting a custom domain), and configure your store's basic settings — currency, timezone, and business information — so your store is professional and functional from day one.",
        d: "A live store on your own domain, configured and ready to take content.",
      },
      {
        t: "Theme Selection & Customization",
        s: ["Choosing a theme for your product category", "Colors, fonts, layout, homepage sections and branding", "An introduction to basic theme code edits"],
        b: "Explore Shopify's theme library, learn how to select a theme suited to your product category, and customize it — colors, fonts, layout, homepage sections, and branding elements — without needing to write code. You'll also get an introduction to basic theme code edits for more advanced customization.",
        d: "A branded storefront built on a customized theme, matched to what you are selling.",
      },
      {
        t: "Product & Inventory Management",
        s: ["Titles, descriptions, images, pricing and variants", "Organising products into collections", "Stock levels and inventory tracking"],
        b: "Learn to add products with proper titles, descriptions, images, pricing, and variants (size, color, etc.), organize products into collections, manage stock levels, and set up inventory tracking so your store runs smoothly as it scales.",
        d: "A populated catalogue — variants, collections and inventory tracking that hold up as the store grows.",
      },
      {
        t: "Payment Gateway Integration",
        s: ["Payment options for Indian customers", "Popular gateways", "Cash on Delivery (COD) setup"],
        b: "Understand how to set up and configure payment options for Indian customers, including popular gateways and Cash on Delivery (COD) — a critical feature for many businesses in the Amritsar and Punjab market.",
        d: "Working checkout payments, COD included, tested the way a customer would use them.",
      },
      {
        t: "Shipping & Tax Configuration",
        s: ["Shipping zones, rates and delivery options", "Taxes for Indian e-commerce compliance", "Configuration a real store can operate on"],
        b: "Learn to set up shipping zones, rates, and delivery options, along with configuring taxes correctly for Indian e-commerce compliance — an often-overlooked but essential part of running a legitimate online store.",
        d: "Shipping zones, rates and tax settings configured for a store selling in India.",
      },
      {
        t: "Order & Sales Channel Management",
        s: ["Managing incoming orders", "Refunds and exchanges", "Instagram and Facebook Shops"],
        b: "Get hands-on with managing incoming orders, processing refunds and exchanges, and connecting additional sales channels like Instagram and Facebook Shops to expand your store's reach beyond just the website.",
        d: "An order workflow you have run end to end, plus a connected social sales channel.",
      },
      {
        t: "Shopify SEO Basics",
        s: ["Product page optimization", "Meta titles, descriptions and URLs", "Organic traffic fundamentals"],
        b: "Learn how to optimize product pages, meta titles, descriptions, and URLs so your store has a better chance of ranking on search engines — a foundational skill for driving free, organic traffic to any store.",
        d: "Product and collection pages optimised so the store can be found without paying for every visit.",
      },
      {
        t: "Marketing & Traffic Fundamentals",
        s: ["Basic marketing campaigns", "Discount codes and promotions", "Social media and ads as traffic sources"],
        b: "Get introduced to running basic marketing campaigns, using discount codes and promotions, and understanding how social media and ads can be used to drive traffic and sales to your Shopify store.",
        d: "A promotion set up and launched, with the traffic sources it depends on identified.",
      },
      {
        t: "Apps & Store Optimization",
        s: ["Navigating the Shopify App Store", "Reviews, upselling and email marketing apps", "Apps that improve store performance"],
        b: "Explore the Shopify App Store and learn how to identify and integrate useful apps for reviews, upselling, email marketing, and store performance — tools that help scale a store beyond the basics.",
        d: "A small, deliberate app stack — each one justified by what it does for the store.",
      },
      {
        t: "Analytics & Store Performance Tracking",
        s: ["Visitors and conversion rates", "Sales performance", "Making informed improvements"],
        b: "Learn to read Shopify's built-in analytics dashboard to track visitors, conversion rates, and sales performance, helping you make informed decisions to improve your store over time.",
        d: "A read of your own store's analytics, ending in the changes the numbers actually support.",
      },
    ],
    /* The tools the brief lists under "Tools & Platforms Covered". */
    tools: ["Shopify", "Shopify Theme Editor", "Shopify Payments", "COD & third-party gateways", "Shopify App Store", "Meta (Facebook & Instagram) Shops", "HTML/CSS", "Shopify Analytics"],
    /* The roles the brief names under career options. */
    roles: ["Shopify Store Manager", "E-Commerce Executive", "Digital Operations Associate", "Freelance Shopify Store Builder", "E-Commerce Entrepreneur"],
    /* The store the brief has every student build, broken into the pieces it is
       assembled from. */
    projects: [
      { title: "Live Shopify Store", body: "Your own store built from scratch — account, plan, custom domain and base settings — customized on a theme chosen for the product category." },
      { title: "Product Catalogue & Inventory", body: "Products added with titles, descriptions, images, pricing and variants, organised into collections with stock tracking configured." },
      { title: "Payments, Shipping & Tax Setup", body: "Payment gateways and COD configured for Indian customers, with shipping zones, rates and tax settings a real store can operate on." },
      { title: "Store SEO & Marketing Launch", body: "Product pages, meta titles and URLs optimised, a promotion set up, and a social sales channel connected to bring in traffic." },
    ],
  },

  /* ------------------------------------------------------------ cyber & cloud */
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cyber & Cloud",
    tagline:
      "Ethical hacking, network security, penetration testing and digital forensics — learned in hands-on labs, not on slides.",
    focus:
      "Techcadd's Cyber Security Training in Amritsar bridges the gap between college theory and real-world security operations, giving you hands-on exposure to tools and techniques used by working security analysts.",
    duration: "6 months",
    level: "Beginner to advanced",
    featured: true,
    /* The eight learning blocks of the Amritsar cyber security brief's "What
       You'll Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Networking & Systems Fundamentals",
        s: ["TCP/IP, OSI model, DNS", "Routing, switching and firewalls", "Windows and Linux fundamentals"],
        b: "Before you can secure a system, you need to understand how it works. The course starts with core networking concepts — TCP/IP, OSI model, DNS, routing, switching, and firewalls — along with operating system fundamentals across Windows and Linux environments. This foundation is essential because most real-world vulnerabilities exist at the network and system level.",
        d: "A working command of the network and OS layer most vulnerabilities actually live at.",
      },
      {
        t: "Cyber Security Fundamentals",
        s: ["The CIA triad", "Security policies and risk assessment", "Compliance basics"],
        b: "You'll learn the core principles of information security — confidentiality, integrity, and availability (the CIA triad) — along with security policies, risk assessment, and compliance basics. This module builds the conceptual framework you'll apply throughout the rest of the course.",
        d: "A risk assessment written against a real system, framed by the CIA triad.",
      },
      {
        t: "Ethical Hacking & Penetration Testing",
        s: ["Footprinting, reconnaissance and scanning", "Vulnerability assessment and enumeration", "Exploitation, privilege escalation and password cracking"],
        b: "This is where the course gets hands-on. You'll learn the methodology used by ethical hackers: reconnaissance, scanning, gaining access, maintaining access, and covering tracks — all performed in legal, controlled lab environments. Topics include footprinting and reconnaissance techniques, network scanning and enumeration, vulnerability assessment, exploitation techniques and privilege escalation, and password cracking and social engineering awareness.",
        d: "A full penetration-testing methodology run end to end in a controlled lab.",
      },
      {
        t: "Web Application Security",
        s: ["SQL Injection and XSS", "CSRF and broken authentication", "The OWASP Top 10"],
        b: "Since most modern attacks target web applications, you'll dive into common vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and broken authentication — aligned with the OWASP Top 10 framework used industry-wide.",
        d: "An OWASP-aligned review of a vulnerable application, with each finding proven.",
      },
      {
        t: "Network Security",
        s: ["Firewalls and VPNs", "IDS/IPS", "Secure network architecture"],
        b: "You'll learn how to configure and secure network infrastructure using firewalls, VPNs, Intrusion Detection/Prevention Systems (IDS/IPS), and secure network architecture principles that prevent unauthorized access.",
        d: "A network segment secured and tested — firewall rules, detection and all.",
      },
      {
        t: "Digital Forensics Basics",
        s: ["Evidence collection", "Log analysis", "Incident investigation techniques"],
        b: "Understanding how to investigate a security incident after it happens is a critical skill. You'll get an introduction to digital forensics — evidence collection, log analysis, and incident investigation techniques.",
        d: "An incident reconstructed from evidence and logs, written up as findings.",
      },
      {
        t: "Malware Analysis & Threat Intelligence",
        s: ["How malware works", "Indicators of compromise", "Anticipating emerging attacks"],
        b: "You'll learn how malware works at a fundamental level, how to identify indicators of compromise, and how threat intelligence is used to anticipate and respond to emerging attacks.",
        d: "Indicators of compromise identified and mapped to the threat behind them.",
      },
      {
        t: "Cloud Security Basics",
        s: ["Securing cloud environments", "AWS, Azure and Google Cloud exposure", "Shared-responsibility fundamentals"],
        b: "As more infrastructure moves to the cloud, you'll get an introduction to securing cloud environments — an increasingly important skill given how many organizations now run on AWS, Azure, or Google Cloud.",
        d: "A cloud environment reviewed for the misconfigurations attackers look for first.",
      },
    ],
    /* The tools the brief lists under "Tools You'll Work With". */
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "John the Ripper", "Hashcat", "Nessus", "OpenVAS", "Autopsy", "FTK", "tcpdump"],
    /* The roles the brief's FAQ names. */
    roles: ["Security Analyst", "SOC Analyst", "Penetration Tester", "Network Security Engineer", "Vulnerability Assessment Analyst"],
    projects: [
      { title: "SOC Simulation", body: "A week of simulated alerts triaged, escalated and written up as incident reports." },
      { title: "Hardening Assessment", body: "A baseline audit of a vulnerable system with a remediation plan and re-test." },
      { title: "Web App Security Review", body: "A structured OWASP review of a deliberately vulnerable application." },
    ],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    category: "Cyber & Cloud",
    tagline:
      "Networking, Linux, vulnerability assessment, web security and penetration-testing concepts — practised responsibly in authorized labs.",
    focus:
      "Techcadd's Ethical Hacking Training in Amritsar is designed for students and beginners who want to understand how cybersecurity works and develop practical skills for identifying and securing vulnerabilities.",
    duration: "4 – 6 months",
    /* The brief positions the programme as beginner-to-intermediate and starts
       from networking, Linux and security fundamentals. */
    level: "Beginner to intermediate",
    badge: "Trending",
    /* The fifteen learning blocks of the Amritsar ethical hacking brief's "What
       You Will Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Cybersecurity Fundamentals",
        s: ["Threats, vulnerabilities and risks", "Authentication and authorization", "Security controls"],
        b: "Students begin by understanding the basic concepts behind cybersecurity, including information security, cyber threats, vulnerabilities, risks, authentication, authorization and security controls. This foundation helps learners understand why organizations need to protect systems, applications, networks and data.",
        d: "The vocabulary and the threat model everything later in the course is judged against.",
      },
      {
        t: "Networking Fundamentals",
        s: ["IP and MAC addresses, TCP/IP", "Ports, protocols and DNS", "HTTP/HTTPS, routers and firewalls"],
        b: "Networking knowledge is essential for cybersecurity. Students can learn about IP addresses, MAC addresses, TCP/IP, ports, protocols, DNS, HTTP/HTTPS, routers, firewalls and common network services. Understanding how devices communicate makes it easier to recognize potential security weaknesses and interpret network information during authorized security assessments.",
        d: "A working understanding of how devices talk, and where that conversation can be attacked.",
      },
      {
        t: "Linux Fundamentals",
        s: ["Terminal commands, files and permissions", "Users, groups and processes", "Package management and networking commands"],
        b: "Linux is widely used in cybersecurity environments, making basic Linux knowledge valuable for ethical hacking students. Learners can become familiar with Linux terminal commands, files and directories, permissions, users and groups, processes, package management, networking commands and basic system administration. Students can practise these concepts within controlled environments and security labs.",
        d: "Enough Linux to run a security assessment without fighting the operating system.",
      },
      {
        t: "Kali Linux",
        s: ["Navigating the environment", "Understanding its security tools", "Authorized laboratory exercises"],
        b: "Kali Linux is a popular security-focused Linux distribution containing numerous tools used for penetration testing, digital forensics, vulnerability research and security assessments. Students can learn how to navigate the environment, understand its security tools and use appropriate utilities in authorized laboratory exercises.",
        d: "A working Kali environment, used deliberately rather than tool by tool at random.",
      },
      {
        t: "Reconnaissance and Information Gathering",
        s: ["Domains, IP addresses and DNS information", "Network services", "Publicly available information"],
        b: "Students can learn the fundamentals of reconnaissance and information gathering as part of an ethical security assessment. Topics can include understanding domains, IP addresses, DNS information, network services and publicly available information. The objective is to understand how security professionals map an authorized target's attack surface before conducting further testing.",
        d: "An attack surface mapped for an authorized target, documented as findings.",
      },
      {
        t: "Nmap",
        s: ["Host discovery", "Service identification", "Interpreting network exposure"],
        b: "Nmap is a widely used network discovery and security auditing tool. Students can learn how Nmap can assist with discovering hosts, identifying services and understanding network exposure within an authorized environment. Learning Nmap is useful because it teaches students how to interpret technical information rather than simply execute commands.",
        d: "Scan output you can read and explain, not just run.",
      },
      {
        t: "Wireshark",
        s: ["Packets and protocols", "Traffic analysis", "Recognising unusual traffic patterns"],
        b: "Wireshark is a network protocol analyzer that allows users to inspect network traffic. Students can learn how packets and protocols work and how traffic can be analyzed during legitimate troubleshooting and security investigations. This can improve their understanding of network communication and help them recognize unusual or unexpected traffic patterns.",
        d: "A capture read down to the protocol level, with the anomaly identified.",
      },
      {
        t: "Vulnerability Assessment",
        s: ["Vulnerability discovery and risk concepts", "Security scanning and prioritization", "Basic remediation principles"],
        b: "Vulnerability assessment introduces students to the process of identifying potential security weaknesses. Learners can study vulnerability discovery, risk concepts, security scanning, prioritization and basic remediation principles. The emphasis is on understanding vulnerabilities and helping organizations address them rather than exploiting systems without permission.",
        d: "A prioritised list of weaknesses in an authorized system, with remediation suggested.",
      },
      {
        t: "Web Application Security",
        s: ["Authentication, authorization and session security", "Input validation", "Common application vulnerabilities"],
        b: "Websites and applications are important components of modern digital businesses. Students can therefore learn fundamental concepts related to web application security. Topics may include authentication security, authorization, input validation, session security, common application vulnerabilities, secure configuration and security testing concepts. Students can practise these concepts using deliberately vulnerable applications and controlled laboratories.",
        d: "Findings from a deliberately vulnerable application, each one explained and mitigated.",
      },
      {
        t: "Burp Suite",
        s: ["Inspecting requests and responses", "Understanding application behaviour", "Identifying issues in authorized environments"],
        b: "Burp Suite is commonly used for web application security testing. Students can learn how the tool can help security testers inspect requests and responses, understand application behaviour and identify potential security issues in authorized environments. This provides useful exposure for learners interested in web security and penetration testing.",
        d: "A web request traced, modified and understood — the core loop of web testing.",
      },
      {
        t: "Metasploit Framework",
        s: ["Exploitation concepts", "Responsible use in authorized labs", "Validating findings"],
        b: "Students may also be introduced to the Metasploit Framework, a security-testing platform used by professionals and researchers. The training should focus on understanding exploitation concepts and using the framework responsibly within authorized labs. Students can learn how vulnerabilities are assessed and how security professionals validate findings in controlled environments.",
        d: "A finding validated in a controlled lab, with the scope and permission documented.",
      },
      {
        t: "Password and Authentication Security",
        s: ["Password security", "Authentication mechanisms", "Access controls and credential weaknesses"],
        b: "Authentication is another important cybersecurity topic. Students can learn about password security, authentication mechanisms, access controls and common weaknesses associated with poor credential practices. The goal is to understand how organizations can strengthen authentication and protect user accounts.",
        d: "An authentication review that ends in stronger controls, not a stolen password.",
      },
      {
        t: "Security Testing Methodology",
        s: ["Planning, reconnaissance and scanning", "Vulnerability analysis and controlled testing", "Documentation, reporting and remediation"],
        b: "Ethical hacking is more effective when students understand a structured methodology. Learners can study a typical security assessment workflow: planning, reconnaissance, scanning, vulnerability analysis, controlled testing, documentation, reporting and remediation. This helps students develop a professional approach instead of treating ethical hacking as random experimentation.",
        d: "An assessment run to a methodology, from scoping through to remediation advice.",
      },
      {
        t: "Security Reporting",
        s: ["What was identified and where", "Impact and evidence from authorized testing", "Recommended remediation and severity"],
        b: "Finding a vulnerability is only part of a security professional's responsibility. Students should also learn how security findings are documented. A useful security report can explain what was identified, where the issue exists, why it matters, potential impact, evidence from authorized testing, recommended remediation, and risk or severity considerations. Good reporting helps technical teams understand problems and take corrective action.",
        d: "A report a technical team could act on — evidence, impact, severity and a fix.",
      },
      {
        t: "Practical Labs and Projects",
        s: ["Networking, Linux and reconnaissance practice", "Vulnerability assessment and web security", "Portfolio-building project work"],
        b: "Practical exercises can help students connect theory with real cybersecurity workflows. A controlled laboratory may allow learners to practise networking, Linux, reconnaissance, vulnerability assessment, web security and security-tool usage without targeting real systems without permission. Project-based learning can also help students demonstrate what they have learned when building a cybersecurity portfolio.",
        d: "A cybersecurity portfolio built entirely inside authorized lab environments.",
      },
    ],
    /* The tools the brief lists under "Tools You May Learn". */
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit Framework", "Vulnerability scanners", "Linux security utilities", "Web security testing tools"],
    /* The career directions the brief names. */
    roles: ["Cybersecurity Analyst", "Security Analyst", "Junior Penetration Tester", "Vulnerability Assessment Analyst", "SOC Analyst"],
    projects: [
      { title: "Full Lab Penetration Test", body: "A scoped test of a lab network delivered as a professional report with severities." },
      { title: "Web Application Assessment", body: "A structured assessment of a vulnerable app with reproducible proof-of-concept steps." },
      { title: "Vulnerability Assessment Report", body: "An authorized system assessed and documented — findings, impact, evidence and remediation." },
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps",
    category: "Cyber & Cloud",
    tagline:
      "Cloud fundamentals, AWS and Azure, Linux, networking, security, DevOps, containers and automation — learned through practical labs.",
    focus:
      "Techcadd's Cloud Computing Training in Amritsar is designed for students, graduates, freshers, and working professionals who want to build practical knowledge of cloud technologies and develop job-ready technical skills.",
    duration: "6 months",
    level: "Beginner to advanced",
    featured: true,
    /* The thirteen learning blocks of the Amritsar cloud computing brief's
       "What You Will Learn", in its order, with its own prose carried into the
       module explorer. Its "Practical Projects" block is the projects list
       below. */
    topics: [
      {
        t: "Cloud Computing Fundamentals",
        s: ["IaaS, PaaS and SaaS", "Deployment models and elasticity", "Data centres vs cloud environments"],
        b: "Students begin by understanding what cloud computing means and why businesses use it. Topics can include cloud characteristics, benefits, limitations, deployment models, service models such as IaaS, PaaS, and SaaS, scalability, elasticity, availability, and pay-as-you-go infrastructure. Learners also explore how traditional data centres differ from cloud-based environments and why organizations migrate workloads to cloud platforms.",
        d: "A clear account of what the cloud actually changes, in service and deployment terms.",
      },
      {
        t: "Virtualization and Infrastructure",
        s: ["Virtual machines and hypervisors", "Compute, servers and storage", "Resource allocation"],
        b: "Virtualization is an important foundation for understanding cloud infrastructure. Students can learn about virtual machines, hypervisors, compute resources, servers, storage, and resource allocation. This knowledge helps learners understand what happens behind cloud services and how virtual infrastructure can be created and managed.",
        d: "Virtual infrastructure created and managed, so the abstraction stops being a black box.",
      },
      {
        t: "AWS Cloud Platform",
        s: ["EC2, S3 and RDS", "VPC and IAM", "CloudWatch and Lambda"],
        b: "Amazon Web Services (AWS) is a major cloud platform and an important technology for learners interested in cloud careers. Depending on the course curriculum, students can gain exposure to services such as Amazon EC2 for cloud computing, Amazon S3 for object storage, Amazon RDS for managed databases, Amazon VPC for networking, AWS IAM for identity and access management, Amazon CloudWatch for monitoring, and AWS Lambda for serverless computing. Students can practise creating and managing cloud resources while learning why different services are used in different business scenarios.",
        d: "AWS resources created and managed by you, each chosen for the scenario it fits.",
      },
      {
        t: "Microsoft Azure",
        s: ["Azure virtual machines and storage", "Networking and identity", "Databases, monitoring and resource management"],
        b: "Students can also explore Microsoft Azure, another major cloud platform used by organizations worldwide. Learning may include Azure virtual machines, storage, networking, identity, databases, monitoring, and resource management. Understanding Azure alongside AWS can help learners develop broader cloud-platform awareness.",
        d: "The same workload approached on a second platform — the difference is the lesson.",
      },
      {
        t: "Cloud Networking",
        s: ["IP addresses, subnets and routing", "DNS, firewalls and ports", "Virtual networks and security groups"],
        b: "Networking knowledge is essential for cloud professionals. Students can learn about IP addresses, subnets, routing, DNS, firewalls, virtual networks, security groups, ports, and connectivity. These concepts help learners understand how applications and services communicate securely inside cloud environments.",
        d: "A virtual network built and secured, with connectivity proven rather than assumed.",
      },
      {
        t: "Cloud Storage and Databases",
        s: ["Object, block and file storage", "Backups and application data", "Managed database services"],
        b: "Cloud platforms provide multiple approaches to storing files, application data, backups, and databases. Students can learn the differences between object, block, and file storage and understand how managed database services can reduce infrastructure-management requirements.",
        d: "Storage and a managed database chosen for the workload, not out of habit.",
      },
      {
        t: "Linux and Command-Line Skills",
        s: ["Files, permissions and processes", "Users, networking and packages", "System monitoring from the shell"],
        b: "Linux is widely used in cloud environments, so basic Linux knowledge can be highly valuable. Students can practise commands for file management, permissions, processes, users, networking, package management, and system monitoring. Command-line familiarity can make it easier to manage cloud-based servers.",
        d: "Enough shell fluency to administer a cloud server without a graphical console.",
      },
      {
        t: "Cloud Security",
        s: ["Authentication, authorization and IAM", "Least privilege and encryption", "Network security, backups and monitoring"],
        b: "Security is a critical part of cloud computing. Learners can understand concepts such as authentication, authorization, IAM, least privilege, encryption, network security, access controls, backups, and monitoring. The goal is to help students understand that cloud security is a shared responsibility between the cloud provider and the customer.",
        d: "Access controls applied on the least-privilege principle, and explained as shared responsibility.",
      },
      {
        t: "DevOps and Automation Fundamentals",
        s: ["Continuous integration and delivery", "Version control and automation", "Containers and infrastructure management"],
        b: "Modern cloud environments frequently connect with DevOps practices. Students can therefore benefit from an introduction to continuous integration, continuous delivery, version control, automation, containers, and infrastructure management. Tools commonly associated with cloud and DevOps learning can include Git, GitHub, Docker, Kubernetes, Jenkins, and Terraform, depending on the institute's syllabus and course level.",
        d: "A pipeline that builds and deploys without anyone doing it by hand.",
      },
      {
        t: "Containers and Docker",
        s: ["Images, containers and registries", "Dockerfiles", "Container lifecycle management"],
        b: "Containers provide a lightweight way to package applications and their dependencies. Students can learn basic Docker concepts, including images, containers, registries, Dockerfiles, and container lifecycle management. This creates a useful foundation for understanding more advanced container orchestration technologies.",
        d: "An application containerised from a Dockerfile you wrote and pushed to a registry.",
      },
      {
        t: "Kubernetes",
        s: ["Clusters, pods and deployments", "Services and namespaces", "Configuration and scaling"],
        b: "Students progressing toward advanced cloud and DevOps concepts can explore Kubernetes for managing containerized applications. Basic learning may cover clusters, pods, deployments, services, namespaces, configuration, and scaling. Kubernetes can be especially useful for learners interested in DevOps or cloud engineering.",
        d: "A containerised application running on a cluster, scaled and reachable through a service.",
      },
      {
        t: "Terraform and Infrastructure as Code",
        s: ["Defining infrastructure in configuration", "Provisioning and modifying resources", "Consistent, repeatable environments"],
        b: "Infrastructure as Code allows cloud infrastructure to be defined and managed using configuration files rather than relying entirely on manual setup. Students can receive introductory exposure to Terraform, learning how infrastructure resources can be provisioned, modified, and managed more consistently.",
        d: "An environment defined in Terraform and rebuilt from the file, not from memory.",
      },
      {
        t: "Monitoring and Troubleshooting",
        s: ["Logs, alerts and resource utilization", "Performance indicators", "Troubleshooting workflows"],
        b: "Cloud professionals need to understand what happens when an application or infrastructure component stops working. Students can learn basic monitoring concepts, logs, alerts, resource utilization, performance indicators, and troubleshooting workflows. This helps develop the problem-solving mindset required for real-world IT environments.",
        d: "A fault diagnosed from logs and metrics, then fixed — the loop an on-call engineer runs.",
      },
    ],
    /* The tools the brief lists under "Tools and Technologies You May
       Encounter". */
    tools: ["AWS", "Microsoft Azure", "Linux", "Windows Server", "Git", "GitHub", "Jenkins", "Docker", "Kubernetes", "Terraform", "CloudWatch"],
    /* The career paths the brief names. */
    roles: ["Cloud Support Associate", "Cloud Administrator", "Cloud Engineer", "DevOps Engineer", "Infrastructure Engineer"],
    /* The brief's "Practical Projects" block, broken into the pieces it
       describes. */
    projects: [
      { title: "Application Deployed on a Cloud Server", body: "A website or application deployed on cloud infrastructure, with storage configured and network connectivity established." },
      { title: "Secured and Monitored Environment", body: "Access controls applied on the least-privilege principle, with monitoring and alerting wired around the running service." },
      { title: "Documented Implementation", body: "The whole build written up — what was provisioned, why, and how it would be rebuilt — the document an interview question is answered from." },
    ],
  },
  {
    slug: "linux",
    title: "Linux Administration",
    category: "Cyber & Cloud",
    tagline:
      "Command line, filesystem, users and permissions, services, networking, scripting and troubleshooting — the operating system every server runs on.",
    focus:
      "Techcadd offers career-focused Linux Training in Amritsar for students, graduates, IT learners, job seekers, and working professionals who want to develop practical Linux skills.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    /* The fourteen learning blocks of the Amritsar Linux brief's "What You Will
       Learn", in its order, with its own prose carried into the module
       explorer. */
    topics: [
      {
        t: "Linux Fundamentals",
        s: ["Purpose, features and distributions", "Filesystem structure", "Terminal, shell and common environments"],
        b: "Learners begin with the basics of Linux, including its purpose, features, distributions, filesystem structure, terminal, shell, and common Linux environments. Understanding these fundamentals gives beginners a clear starting point before moving into administration.",
        d: "A clear mental model of how a Linux system is laid out before you start changing it.",
      },
      {
        t: "Linux Command Line",
        s: ["ls, cd, pwd, cp, mv, rm and mkdir", "cat, grep and find", "Everyday administrative operations"],
        b: "The command line is one of the most important skills in Linux. Students learn how to navigate the filesystem, create and manage files and directories, copy and move data, search for information, view files, and perform everyday administrative operations. Commands such as ls, cd, pwd, cp, mv, rm, mkdir, cat, grep, find, and other essential utilities can become part of regular practice.",
        d: "Fluent movement around a system from the terminal, without reaching for a GUI.",
      },
      {
        t: "File and Directory Management",
        s: ["Absolute and relative paths", "Permissions, ownership and links", "Compression, archiving and storage concepts"],
        b: "Students learn how Linux organizes data and how to manage files and directories efficiently. Topics can include absolute and relative paths, permissions, ownership, links, file types, compression, archiving, and storage-related concepts.",
        d: "Data organised, archived and permissioned the way a server expects it to be.",
      },
      {
        t: "Users and Groups",
        s: ["Creating and managing users", "Configuring groups", "Controlling access to system resources"],
        b: "User and group management is an important part of Linux administration. Learners can understand how to create and manage users, configure groups, modify account settings, and control access to system resources.",
        d: "A working account and group structure with access granted deliberately.",
      },
      {
        t: "Linux Permissions",
        s: ["Read, write and execute", "chmod, chown and umask", "Permission-related troubleshooting"],
        b: "Students learn how Linux permissions work and how access can be controlled for users and groups. Topics may include read, write, and execute permissions, ownership, chmod, chown, umask, and permission-related troubleshooting. Understanding permissions is essential because incorrect access settings can create both operational and security problems.",
        d: "A permissions problem diagnosed and fixed — the everyday task that trips beginners up.",
      },
      {
        t: "Package Management",
        s: ["Installing and updating software", "Removing and maintaining packages", "Package tools across distributions"],
        b: "Linux systems use package managers to install, update, remove, and maintain software. Learners can explore package-management concepts and become familiar with the package tools relevant to commonly used Linux distributions.",
        d: "Software installed, updated and removed cleanly on more than one distribution.",
      },
      {
        t: "Process Management",
        s: ["Process identification", "Foreground and background jobs", "Priorities and resource monitoring"],
        b: "Students can learn how Linux handles running processes and how administrators monitor and manage them. Training may cover process identification, foreground and background jobs, process priorities, terminating processes, and system resource monitoring.",
        d: "A misbehaving process found, understood and dealt with rather than rebooted around.",
      },
      {
        t: "Services and System Management",
        s: ["Starting, stopping and restarting services", "Enabling and disabling at boot", "Inspecting service state"],
        b: "Learners can understand how Linux services operate and how administrators start, stop, restart, enable, disable, and inspect system services. This provides useful preparation for server and infrastructure environments.",
        d: "Services managed the way they are on a real server, including across a reboot.",
      },
      {
        t: "Shell Scripting Basics",
        s: ["Variables, conditions and loops", "Command execution and input/output", "Automating repetitive tasks"],
        b: "Shell scripting can help automate repetitive Linux tasks. Students can be introduced to variables, conditions, loops, command execution, input/output, and basic scripting logic. Even introductory scripting knowledge can help learners become more efficient when managing systems.",
        d: "A script that does a job you would otherwise repeat by hand every week.",
      },
      {
        t: "Linux Networking",
        s: ["IP addressing, interfaces and routing", "DNS concepts and ports", "ping, ip, ss, curl and traceroute"],
        b: "Networking is an important component of system administration. Students can learn Linux networking fundamentals, including IP addressing, interfaces, connectivity testing, DNS concepts, routing basics, ports, and network troubleshooting. Tools such as ping, ip, ss, curl, traceroute, and related utilities can be introduced through practical exercises.",
        d: "A connectivity problem traced from interface to port with the standard tools.",
      },
      {
        t: "SSH and Remote Administration",
        s: ["Secure Shell and remote connections", "Authentication and key-based access", "Basic remote administration practices"],
        b: "Remote server management is a major use case for Linux. Learners can understand Secure Shell (SSH), remote connections, authentication concepts, key-based access, and basic remote administration practices. This knowledge can be particularly valuable for students interested in server administration and cloud technologies.",
        d: "Key-based access configured and a server administered entirely over SSH.",
      },
      {
        t: "Storage and Filesystems",
        s: ["Filesystems and mounting", "Partitions and disk usage", "Storage monitoring"],
        b: "The course can introduce learners to Linux storage concepts, filesystems, mounting, partitions, disk usage, and storage monitoring. Understanding storage helps administrators identify capacity issues and manage server resources.",
        d: "Storage mounted, measured and monitored before it becomes an outage.",
      },
      {
        t: "System Monitoring and Troubleshooting",
        s: ["Processes, services and logs", "Disk space, memory and CPU", "Finding the cause, not just the symptom"],
        b: "Students can learn how to investigate common Linux issues by checking processes, services, logs, disk space, memory, CPU usage, and network connectivity. Troubleshooting practice is particularly important because system administrators often need to identify the cause of problems rather than simply restart a service.",
        d: "A broken system diagnosed from evidence, with the cause written down.",
      },
      {
        t: "Linux Security Fundamentals",
        s: ["User permissions and secure authentication", "Access control and system updates", "Firewall concepts"],
        b: "Basic security concepts can include user permissions, secure authentication, access control, system updates, firewall concepts, and responsible administration practices. These fundamentals can also provide useful preparation for learners who later want to specialize in cybersecurity.",
        d: "A system hardened on the basics — accounts, access, updates and firewall.",
      },
    ],
    /* The tools the brief lists under "Tools and Technologies You Can Learn". */
    tools: ["Bash", "SSH", "Vim", "Nano", "Git", "systemd", "cron", "Package managers", "Networking utilities", "Firewall utilities", "Virtual machines", "Docker"],
    /* The career paths the brief's FAQ names. */
    roles: ["Linux Administrator", "System Administrator", "Technical Support Professional", "Server Administrator", "Cloud Support Professional"],
    projects: [
      { title: "Hardened Web Server", body: "A provisioned server running a real site with TLS, firewall rules and a backup job." },
      { title: "Automation Script Suite", body: "A set of scheduled scripts covering log rotation, health checks and reporting." },
      { title: "Recovery Exercise", body: "A deliberately broken system diagnosed and restored with a written incident log." },
    ],
  },
];

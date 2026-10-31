export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  role: string;
  constraints: string[];
  whatIBuilt: string[];
  technicalImplementation: string[];
  featuresDelivered: string[];
  /** Distinguish prototype, functional release, concept, or ongoing R&D */
  currentStatus: "Working Prototype" | "Active Build" | "Hardware Concept" | "Functional Project" | "Ongoing Experiments";
  /** Verified outcome or metric if genuinely available. Omit or leave undefined if not verified. */
  verifiedOutcome?: string;
}

export interface ProjectPhoto {
  url: string;
  title: string;
  tag?: string;
  caption: string;
}

export interface ProjectImageConfig {
  aspectRatio?: "16/9" | "16/10" | "4/3" | "9/16" | "auto";
  orientation?: "landscape" | "portrait" | "auto";
  fit?: "contain" | "cover";
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI + Hardware" | "Full-Stack Web" | "AI + Web" | "IoT & Automation" | "Embedded Systems";
  shortDescription: string;
  /** Pass an image path (e.g. '/projects/eden.png') or null if screenshot is pending */
  screenshot: string | null;
  /** Image path alias */
  image?: string | null;
  /** Presentation configuration for the project image showcase */
  imageConfig?: ProjectImageConfig;
  /** Editorial layout composition for this project's showcase card */
  cardLayout?: "hero-top" | "split-image-right" | "split-image-left";
  /** Photo series or interface walkthrough screenshots */
  photoSeries?: ProjectPhoto[];
  gallery?: ProjectPhoto[];
  technologies: string[];
  year?: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  status: "Working Prototype" | "Active Build" | "Hardware Concept" | "Functional Project" | "Ongoing Experiments";
  featured: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  description: string;
  /** Only technologies explicitly listed here will display as badges */
  technologies: string[];
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  category: string;
  description: string;
  progressPercent: number;
  statusLabel: string;
  tags: string[];
}

export interface EducationItem {
  degreeOrField: string;
  institution: string;
  timeline: string;
  description: string;
  isPlaceholderNote?: string;
}

export interface MilestoneItem {
  title: string;
  category: string;
  date: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email" | "X / Twitter" | "Discord";
  url: string;
  label: string;
  isAvailable: boolean;
}

export interface CinematicIntroConfig {
  scene1: {
    name: string;
    tagline: string;
    telemetry: string;
  };
  scene2: {
    pillars: Array<{ id: string; label: string; description: string }>;
    connector: string;
  };
  scene3: {
    title: string;
    nodes: string[];
    convergenceText: string;
  };
  scene4: {
    projects: Array<{ name: string; tag: string }>;
    ethos: string;
  };
  scene5: {
    statement: string;
    subtext: string;
  };
}

export interface PortfolioConfig {
  brand: {
    displayedPhraseFirstLine: string;
    displayedPhraseSecondLine: string;
    subBrand: string;
  };
  developer: {
    name: string;
    title: string;
    role: string;
    headline: string;
    shortBio: string;
    status: {
      isAvailable: boolean;
      statusText: string;
    };
    location: string;
    resumeUrl?: string | null;
    /** Image path or null for honest technical visual placeholder */
    portraitUrl?: string | null;
  };
  cinematicIntro: CinematicIntroConfig;
  about: {
    primaryNarrative: string[];
    interestAreas: Array<{
      title: string;
      description: string;
      tech: string[];
    }>;
  };
  currentlyBuilding: CurrentlyBuildingItem[];
  education: EducationItem[];
  milestones: MilestoneItem[];
  skills: SkillCategory[];
  projects: Project[];
  contact: {
    headline: string;
    subheadline: string;
    email: string;
    socials: SocialLink[];
  };
  seo: {
    siteName: string;
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * =========================================================================
 * BISHAL BISWAS — PERSONAL PORTFOLIO CONFIGURATION
 * =========================================================================
 * Single source of truth for the entire website.
 * No fake companies, no fake awards, no fake statistics.
 * Reflects genuine builder identity across software, AI, and hardware.
 */
export const portfolioData: PortfolioConfig = {
  brand: {
    displayedPhraseFirstLine: "I BUILD THINGS",
    displayedPhraseSecondLine: "JUST TO SEE IF I CAN.",
    subBrand: "Bishal Biswas — student who likes making things",
  },
  developer: {
    name: "Bishal Biswas",
    title: "student who likes making things",
    role: "Software • AI • Hardware",
    headline: "I had an idea, so I built it.",
    shortBio:
      "Software, AI, hardware, electronics — I'll probably try building it if the idea sounds fun enough. Powered by curiosity, hands-on experimentation, and too much late-night caffeine.",
    status: {
      isAvailable: true,
      statusText: "building random stuff & open to cool projects",
    },
    location: "India // Open to collaboration",
    resumeUrl: null, // Set to '/resume.pdf' when ready
    portraitUrl: null, // Set to '/images/bishal.webp' when ready; otherwise honest builder badge renders
  },
  cinematicIntro: {
    scene1: {
      name: "BISHAL BISWAS",
      tagline: "I like making things across software, AI & hardware.",
      telemetry: "BISHAL'S WORKBENCH",
    },
    scene2: {
      pillars: [
        {
          id: "software",
          label: "SOFTWARE",
          description: "Web apps, Supabase databases, and responsive UI that feels fast",
        },
        {
          id: "ai",
          label: "AI",
          description: "Local Whisper speech models, LLM routing, and Gemini Vision",
        },
        {
          id: "hardware",
          label: "HARDWARE",
          description: "ESP32 microcontrollers, I2S audio, sensors, and physical relays",
        },
      ],
      connector: "I build across all three because staying in one lane is boring.",
    },
    scene3: {
      title: "MY TOOLBOX",
      nodes: ["Next.js", "Python", "ESP32", "Supabase", "Whisper", "C/C++", "Arduino", "Tailwind"],
      convergenceText: "Tools I use to write software, wire breadboards, and build real projects.",
    },
    scene4: {
      projects: [
        { name: "EDEN", tag: "ESP32 Voice Assistant" },
        { name: "ATTENDER", tag: "AI Classroom Attendance" },
        { name: "CraveAI", tag: "Pantry Recipe Platform" },
        { name: "SmartShut", tag: "Smart Biometric Door System" },
      ],
      ethos: "The best way to learn is to build the thing from scratch.",
    },
    scene5: {
      statement: "I BUILD THINGS JUST TO SEE IF I CAN.",
      subtext: "Trying dumb ideas, breaking things, and turning the good ones into real projects.",
    },
  },
  about: {
    primaryNarrative: [
      "I like figuring out how things work.",
      "Sometimes that means writing a web app with Next.js and Supabase. Sometimes it means connecting an ESP32 to a microphone at 2AM because I wanted to see if I could make my own voice assistant with local AI models.",
      "I learn mostly by building, breaking things, fixing them, and then immediately getting another idea. I don't care much for corporate buzzwords or collecting certificates — I just care about making things that actually do something in the real world.",
    ],
    interestAreas: [
      {
        title: "Voice Assistants & Local AI",
        description:
          "Running Whisper locally, streaming audio over Wi-Fi, and connecting LLMs to actual physical speakers so I have a custom assistant on my desk.",
        tech: ["Whisper", "Local LLMs", "Python", "Speech Recognition", "Flask"],
      },
      {
        title: "Microcontrollers & Circuits",
        description:
          "Wiring ESP32 and Arduino boards to biometric fingerprint scanners, PIR motion sensors, OLEDs, and relays. Soldering, frying a couple resistors, and building physical devices.",
        tech: ["ESP32", "Arduino", "I2S Audio", "Sensors", "Relays", "C/C++"],
      },
      {
        title: "Full-Stack Web Development",
        description:
          "Building real web apps with Next.js, Supabase, and PostgreSQL. Role-based auth for classrooms, pantry search engines, and interfaces that feel fast.",
        tech: ["Next.js", "React", "JavaScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      },
      {
        title: "Automation & Weird Experiments",
        description:
          "If a repetitive task can be automated with Python, a microcontroller, or a webhook, I'll probably try to build a script for it.",
        tech: ["REST APIs", "Python", "Flask", "JSON Pipelines", "Webhooks"],
      },
    ],
  },
  currentlyBuilding: [
    {
      id: "eden-v2",
      title: "EDEN Edge Voice Engine",
      category: "AI + Hardware",
      description:
        "Tuning the I2S microphone ring buffer and streaming directly into Faster-Whisper to get total speech turnaround under 500ms without buffer overflows.",
      progressPercent: 70,
      statusLabel: "Late-night breadboard testing",
      tags: ["ESP32", "Whisper", "Flask", "I2S Audio"],
    },
    {
      id: "attender-sync",
      title: "Attender Face Verification Concept",
      category: "Full-Stack Software",
      description:
        "Polishing student enrollment requests, teacher approvals, and subject-wise attendance aggregation queries in Supabase PostgreSQL.",
      progressPercent: 85,
      statusLabel: "Active testing",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Auth"],
    },
    {
      id: "smartshut-logic",
      title: "SmartShut Energy Automation Firmware",
      category: "IoT & Hardware",
      description:
        "Testing state machines that verify zero room occupancy before triggering appliance relay shutoffs, ensuring zero false-positive shutoffs.",
      progressPercent: 65,
      statusLabel: "Schematic & logic checks",
      tags: ["ESP32 / Arduino", "PIR Motion", "Relays", "State Machine"],
    },
  ],
  education: [
    {
      degreeOrField: "Student Developer / Computer & Engineering Interests",
      institution: "Higher Education / University (Editable Placeholder)",
      timeline: "Ongoing",
      description:
        "Actively studying computer science fundamentals, self-learning software architecture, AI application development, and hands-on embedded systems engineering.",
      isPlaceholderNote:
        "Replace this entry in src/data/portfolio.ts with your current school/college name and graduation year.",
    },
  ],
  milestones: [
    {
      title: "Built EDEN Voice Assistant Prototype",
      category: "Hardware + AI",
      date: "Recent Milestone",
      description:
        "Successfully connected ESP32 microphone capture over local network to local speech recognition and speech synthesis backend.",
    },
    {
      title: "Developed ATTENDER Full-Stack Platform",
      category: "Full Stack",
      date: "Recent Milestone",
      description:
        "Engineered multi-role authentication, subject-wise attendance tracking, and dashboard workflows using Next.js and Supabase.",
    },
    {
      title: "Created CraveAI Recipe & Discovery Platform",
      category: "Web & AI",
      date: "Recent Milestone",
      description:
        "Built full-text ingredient search and AI-assisted meal generation powered by PostgreSQL and Next.js.",
    },
  ],
  skills: [
    {
      title: "LANGUAGES",
      subtitle: "Core Programming",
      description:
        "Core languages used for scripting, web interfaces, backend utilities, and microcontroller firmware.",
      technologies: ["Python", "JavaScript", "C / C++", "HTML5", "CSS3"],
    },
    {
      title: "WEB DEVELOPMENT",
      subtitle: "Frontend Architecture",
      description:
        "Modern frontend frameworks and component systems built for responsive, accessible, and fast web experiences.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Modern JavaScript", "Component Architecture"],
    },
    {
      title: "BACKEND & DATABASE",
      subtitle: "Data & Service Layer",
      description:
        "Relational databases, authentication security, role-based access controls, and lightweight API backends.",
      technologies: ["Supabase", "PostgreSQL", "REST APIs", "Flask", "Authentication & RLS"],
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      subtitle: "Machine Intelligence & Speech",
      description:
        "Speech recognition pipelines, LLM prompt engineering, local model execution, and AI API integrations.",
      technologies: ["LLMs", "Whisper", "Local AI Models", "AI APIs", "Speech-to-Text / TTS"],
    },
    {
      title: "HARDWARE & EMBEDDED",
      subtitle: "Physical Computing & IoT",
      description:
        "Microcontrollers, sensor communication protocols, audio hardware pipelines, and electrical relay automation.",
      technologies: [
        "ESP32",
        "Arduino",
        "ESP8266",
        "Sensors (PIR, Temp, Optical)",
        "I2S Audio",
        "Displays (OLED/LCD)",
        "Embedded Systems",
      ],
    },
  ],
  projects: [
    {
      slug: "eden",
      title: "EDEN",
      tagline: "Custom Voice Assistant Powered by ESP32 & Local AI",
      category: "AI + Hardware",
      shortDescription:
        "A personal voice assistant system integrating custom ESP32 hardware, microphone input, audio streaming, speech recognition, local AI models, and Flask backend infrastructure.",
      screenshot: "/projects/eden.png",
      image: "/projects/eden.png",
      imageConfig: {
        aspectRatio: "16/10",
        orientation: "landscape",
        fit: "contain",
        caption: "EDEN voice assistant interface & local AI bridge.",
      },
      cardLayout: "hero-top",
      technologies: ["ESP32", "Python", "Flask", "Whisper", "Local AI Models", "I2S Audio", "C/C++"],
      year: "2024",
      status: "Working Prototype",
      liveUrl: null, // Local hardware build
      githubUrl: null,
      featured: true,
      caseStudy: {
        currentStatus: "Working Prototype",
        overview:
          "EDEN is an experimental personal voice-assistant project that bridges physical microcontroller hardware with local artificial intelligence. Instead of relying on proprietary commercial smart speakers, EDEN processes audio locally through an ESP32 hardware client connected to a dedicated Python/Flask backend.",
        problem:
          "Commercial voice assistants are closed black boxes that lock users into corporate ecosystems, stream private audio to the cloud, and provide zero hardware hackability or custom sensor extensions.",
        role: "Solo Creator — responsible for circuit wiring, ESP32 audio capture firmware, Flask API bridge, Whisper transcription setup, and local LLM response routing.",
        constraints: [
          "Streaming uncompressed I2S microphone audio over Wi-Fi from an ESP32 without memory buffer overflows.",
          "Minimizing turnaround latency between speech input, transcription, local LLM generation, and audio playback.",
          "Operating on local compute without mandatory paid third-party cloud voice APIs.",
        ],
        whatIBuilt: [
          "Configured ESP32 microcontroller with an I2S digital microphone (INMP441) and I2S DAC amplifier for audio playback.",
          "Wrote C++ firmware on the ESP32 to stream buffered PCM audio chunks over UDP/HTTP to a local Flask server.",
          "Implemented automated audio endpoint detection and transcription using OpenAI's Whisper model running locally.",
          "Connected transcription output to a local LLM runner to formulate context-aware conversational replies.",
          "Generated synthesized speech responses sent back to the ESP32 speaker.",
        ],
        technicalImplementation: [
          "I2S audio protocol configuration for 16kHz 16-bit mono voice capture.",
          "Flask REST & socket endpoints for streaming audio buffer ingestion.",
          "Local Whisper model integration for speech-to-text conversion.",
          "Text-to-speech synthesis pipeline streaming audio back to microcontroller.",
        ],
        featuresDelivered: [
          "Physical standalone microphone & speaker hardware unit.",
          "Voice activation and live speech recording pipeline.",
          "Local speech-to-text and AI response generation.",
          "Audible voice response through connected speaker.",
        ],
        verifiedOutcome:
          "Built a functional end-to-end voice loop from ESP32 physical microphone capture to spoken audio reply through local machine inference.",
      },
    },
    {
      slug: "attender",
      title: "ATTENDER",
      tagline: "Comprehensive Role-Based Attendance Management Platform",
      category: "Full-Stack Web",
      shortDescription:
        "A full-stack attendance management system featuring Next.js, Supabase, role-based workflows for teachers and students, subject-wise tracking, and photo-assisted verification concepts.",
      screenshot: "/projects/attender/attender-landing.png",
      image: "/projects/attender/attender-landing.png",
      imageConfig: {
        aspectRatio: "auto",
        orientation: "landscape",
        fit: "contain",
        caption: "ATTENDER smart attendance portal & rapid classroom scan workflow.",
      },
      cardLayout: "hero-top",
      photoSeries: [
        {
          url: "/projects/attender/attender-landing.png",
          title: "Smart Attendance Landing & Fast Workflow",
          tag: "01 // ENTRY POINT",
          caption:
            "Public landing interface introducing ATTENDER's 60-second AI classroom roll-call workflow, instant camera scan action, and step-by-step pipeline (Open Class → Snap Classroom → Review Faces → Confirm & Save).",
        },
        {
          url: "/projects/attender/attender-class-management.png",
          title: "Class Management & Active Rosters",
          tag: "02 // ROSTER DASHBOARD",
          caption:
            "Management console displaying academic classes and sections (e.g. first year - D, jimmy - A), active rosters, enrolled student counts, and live Supabase synchronization.",
        },
        {
          url: "/projects/attender/attender-ai-assistant.png",
          title: "ATTENDER AI — Natural Language Query Agent",
          tag: "03 // GEMINI ASSISTANT",
          caption:
            "Conversational Gemini AI assistant enabling educators to query attendance anomalies ('Who has attendance below 75%?', 'Summarize October attendance') through a controlled data access architecture.",
        },
        {
          url: "/projects/attender/attender-admin-security.png",
          title: "Admin & Security Control Center",
          tag: "04 // SECURITY & AUDIT",
          caption:
            "Institutional administration center managing cryptographically signed single-use invitations with 7-day expiration, educator role assignments, student portal links, and immutable security audit logs.",
        },
      ],
      technologies: ["Next.js", "JavaScript", "Supabase", "PostgreSQL", "Gemini AI", "Tailwind CSS", "Row Level Security"],
      year: "2024",
      status: "Active Build",
      liveUrl: null,
      githubUrl: "https://github.com/bishalbiswas08-rgb/attender",
      featured: true,
      caseStudy: {
        currentStatus: "Active Build",
        overview:
          "ATTENDER is a multi-role web platform engineered to eliminate paper attendance sheets and fragmented spreadsheets in educational environments. Built on Next.js and Supabase, it provides real-time attendance recording, subject-wise analytics, and exploratory face/photo verification concepts.",
        problem:
          "Traditional classroom attendance is slow, prone to proxy attendance, and gives students zero immediate visibility into their attendance percentages until end-of-semester warnings.",
        role: "Full-Stack Developer — built the database schema, Supabase authentication, role-based routing, student/teacher dashboards, and attendance calculation logic.",
        constraints: [
          "Ensuring strict role separation: students can only view their own attendance records, while teachers can mark and edit their specific classes.",
          "Designing an intuitive mobile-friendly UI so teachers can mark an entire class of 60 students in under a minute.",
          "Managing dynamic subject timetables and calculating accurate attendance percentages automatically.",
        ],
        whatIBuilt: [
          "Architected PostgreSQL relational schema with tables for users, roles, subjects, classes, and daily attendance records.",
          "Implemented Supabase Auth with custom user metadata and Row-Level Security (RLS) policies to safeguard records.",
          "Created role-specific dashboards: Admin portal for subject/user creation, Teacher portal for 1-click marking, and Student portal for progress analytics.",
          "Integrated ATTENDER AI: a Gemini-powered natural-language assistant querying attendance anomalies and summaries through a controlled data access architecture.",
          "Engineered single-use cryptographically signed invitation system with 7-day expiration and immutable security audit logs.",
          "Designed subject-wise percentage counters with low-attendance visual alerts and rapid classroom snapshot workflow.",
        ],
        technicalImplementation: [
          "Next.js App Router with client and server components for fast rendering.",
          "Supabase Row-Level Security (RLS) rules verifying user JWT against class teacher IDs.",
          "Gemini Vision & LLM APIs for classroom photo processing and conversational query answering.",
          "Optimistic UI state updates for quick checkbox attendance marking.",
          "Subject-wise aggregation queries calculating percentage attendance in real-time.",
        ],
        featuresDelivered: [
          "Multi-role authentication (Admin, Teacher, Student).",
          "One-click rapid attendance entry grid and 60-second classroom scan flow.",
          "ATTENDER AI natural-language assistant for instant attendance queries.",
          "Admin & Security control center with signed educator invitations and audit trails.",
          "Subject-wise attendance tracking, warning thresholds, and exportable records.",
        ],
      },
    },
    {
      slug: "craveai",
      title: "CraveAI",
      tagline: "Smart Food Discovery & Pantry-Driven Recipe Platform",
      category: "AI + Web",
      shortDescription:
        "A food discovery and recipe application powered by Next.js, Supabase PostgreSQL, full-text ingredient search, bookmarking, and AI-assisted recipe suggestions.",
      screenshot: "/projects/craveai.png",
      image: "/projects/craveai.png",
      imageConfig: {
        aspectRatio: "16/10",
        orientation: "landscape",
        fit: "contain",
        caption: "CraveAI culinary discovery engine & pantry search interface.",
      },
      cardLayout: "split-image-left",
      technologies: ["Next.js", "JavaScript", "Supabase", "PostgreSQL", "Tailwind CSS", "AI APIs"],
      year: "2024",
      status: "Functional Project",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      caseStudy: {
        currentStatus: "Functional Project",
        overview:
          "CraveAI is an interactive culinary discovery platform that helps users find and generate recipes based on the exact ingredients currently in their kitchen, minimizing household food waste.",
        problem:
          "Most recipe websites are overloaded with ad banners, lengthy biographical backstories, and require strict grocery lists rather than helping people cook with whatever ingredients they already have.",
        role: "Solo Creator — designed the UI, configured Supabase PostgreSQL full-text search, wrote AI recipe generation prompts, and implemented bookmarking functionality.",
        constraints: [
          "Handling fuzzy and multi-ingredient search queries across recipe ingredient arrays.",
          "Generating structured, readable cooking steps from AI responses without hallucinated or unsafe cooking steps.",
        ],
        whatIBuilt: [
          "Next.js frontend featuring an interactive pantry ingredient selector with multi-tag filtering.",
          "Supabase backend utilizing PostgreSQL full-text search across title, tags, and ingredient vectors.",
          "AI prompt orchestration layer transforming raw ingredient lists into formatted step-by-step cooking instructions.",
          "Personal saved recipes collection and favorite toggles saved to user profiles.",
        ],
        technicalImplementation: [
          "PostgreSQL full-text search indexes on recipe names and ingredients.",
          "Supabase client-side authentication with session persistence.",
          "Structured JSON generation from AI APIs for consistent recipe rendering.",
          "Responsive mobile-first cards with calorie and prep-time metadata.",
        ],
        featuresDelivered: [
          "Pantry ingredient search engine.",
          "AI-powered custom recipe creator.",
          "Saved recipes and personal culinary collection.",
          "Clean, ad-free step-by-step reading mode.",
        ],
      },
    },
    {
      slug: "smartshut",
      title: "SmartShut",
      tagline: "Smart Biometric Security & Energy-Conservation System",
      category: "IoT & Automation",
      shortDescription:
        "A smart security and energy-saving concept combining biometric fingerprint locking, optical motion detection, automated appliance relay shutoff, and manual safety overrides.",
      screenshot: "/projects/smartshut.png",
      image: "/projects/smartshut.png",
      imageConfig: {
        aspectRatio: "16/9",
        orientation: "landscape",
        fit: "contain",
        caption: "SmartShut biometric security architecture & room energy management.",
      },
      cardLayout: "split-image-right",
      technologies: ["ESP32 / Arduino", "Fingerprint Sensor", "PIR Motion", "Relays", "C/C++", "Electronics"],
      year: "2023",
      status: "Hardware Concept",
      liveUrl: null,
      githubUrl: "https://github.com/bishalbiswas08-rgb/SmartShut",
      featured: true,
      caseStudy: {
        currentStatus: "Hardware Concept",
        overview:
          "SmartShut is an integrated hardware concept designed to solve two common room problems simultaneously: unauthorized physical access and wasted electrical energy caused by lights, fans, and appliances left running when rooms are vacated.",
        problem:
          "Traditional door locks provide no correlation with electrical consumption. People regularly leave rooms locked with active air cooling or lighting running for hours.",
        role: "Hardware & Firmware Prototyper — drafted the circuit schematics, programmed microcontroller state logic, and interfaced the biometric sensor with relay modules.",
        constraints: [
          "Failsafe operation: ensuring power relay cutoffs never lock an occupant inside or prevent manual egress.",
          "Reliable sensor polling without false triggering from ambient light shifts.",
        ],
        whatIBuilt: [
          "Designed circuit interconnecting an optical fingerprint sensor (R307/AS608), PIR motion detector, status OLED display, and high-voltage optocoupler relays.",
          "Wrote embedded C++ state machine managing lock states, enrollment modes, and vacancy countdown timers.",
          "Configured automatic appliance power-down when room occupancy sensors detect zero movement for a defined duration.",
          "Added physical push-button emergency override for immediate door unlock.",
        ],
        technicalImplementation: [
          "Hardware UART serial communication with optical fingerprint scanner module.",
          "Non-blocking millis() countdown timer for vacancy detection logic.",
          "Active-low relay switching with optical isolation to protect microcontroller pins.",
          "I2C protocol communication for status feedback display.",
        ],
        featuresDelivered: [
          "Biometric fingerprint authentication with multi-user enrollment.",
          "Occupancy detection with automatic relay power cutoff.",
          "Visual status display showing lock state and countdown.",
          "Manual safety override logic.",
        ],
      },
    },
    {
      slug: "embedded-lab",
      title: "Embedded & Hardware Experiments",
      tagline: "Microcontroller Workflows, Sensor Nodes & Custom Circuits",
      category: "Embedded Systems",
      shortDescription:
        "An ongoing collection of hardware experiments, sensor networks, wireless ESP-NOW nodes, I2S audio pipelines, and bench-tested electronic circuits.",
      screenshot: null,
      image: null,
      imageConfig: {
        aspectRatio: "auto",
        orientation: "auto",
        fit: "contain",
        caption: "Embedded microcontroller workbench & sensor network testing log.",
      },
      cardLayout: "split-image-right",
      technologies: ["ESP32", "Arduino", "ESP8266", "I2C / SPI", "Sensors", "I2S Audio", "C++", "Circuits"],
      year: "2023 - Present",
      status: "Ongoing Experiments",
      liveUrl: null,
      githubUrl: null,
      featured: true,
      caseStudy: {
        currentStatus: "Ongoing Experiments",
        overview:
          "A laboratory log and collection of physical computing experiments exploring how software interacts with tangible physical environments. This ongoing workbench initiative includes microcontroller communication, sensor data acquisition, audio generation, and home automation nodes.",
        problem:
          "Software running solely in web browsers is insulated from the physical world. Understanding low-level hardware timing, serial buses, and electrical constraints provides a deeper, more comprehensive understanding of computing.",
        role: "Experimenter & Circuit Builder — assembling breadboard prototypes, testing sensor calibration, writing peripheral drivers, and measuring electrical signals.",
        constraints: [
          "Working within microcontroller RAM limits (e.g., 320KB on standard ESP32).",
          "Handling electrical noise, bounce on physical switches, and level shifting between 3.3V and 5V components.",
        ],
        whatIBuilt: [
          "Multi-node wireless communication network using ESP-NOW for zero-router microcontroller telemetry.",
          "Environmental monitor logging temperature, humidity, and atmospheric data to an OLED screen.",
          "I2S audio generation and DAC experiment testing custom tone synthesis and voice playback.",
          "Motor and relay control drivers with flyback diode protection circuits.",
        ],
        technicalImplementation: [
          "SPI and I2C peripheral bus debugging for sensors and graphic displays.",
          "ESP-NOW peer-to-peer 2.4GHz wireless packet transmission.",
          "Analog-to-digital converter (ADC) sampling and signal filtering in firmware.",
          "GPIO interrupt handling for responsive hardware button debouncing.",
        ],
        featuresDelivered: [
          "Working sensor telemetry nodes.",
          "Audio synthesis and playback prototypes.",
          "Reusable C++ microcontroller utility modules.",
          "Documented breadboard schematics.",
        ],
      },
    },
  ],
  contact: {
    headline: "HAVE AN IDEA WORTH BUILDING?",
    subheadline:
      "Whether it's software, AI, hardware, or something weird enough to be interesting — I'd like to hear about it.",
    email: "bishalbiswas08@gmail.com",
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/bishalbiswas08-rgb",
        label: "github.com/bishalbiswas08-rgb",
        isAvailable: true,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        label: "LinkedIn Profile",
        isAvailable: true,
      },
    ],
  },
  seo: {
    siteName: "Bishal Biswas — Student Developer & Builder",
    siteUrl: "https://bishalbiswas.dev",
    title: "Bishal Biswas — Software, AI & Hardware Builder",
    description:
      "Portfolio of Bishal Biswas. Student developer and builder creating projects across software, AI, embedded systems, and electronics.",
    keywords: [
      "Bishal Biswas",
      "Student Developer",
      "Builder",
      "AI Developer",
      "Embedded Systems",
      "ESP32",
      "Next.js",
      "Software Engineer",
      "Arduino",
      "Portfolio",
    ],
  },
};

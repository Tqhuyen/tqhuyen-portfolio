/**
 * Everything the site says about Huyên lives here.
 *
 * Sources: the newest CV (Everfit, M.Sc. by Research, Oct 2026) first, then
 * the older CVs in Documents/Career/CV/CV, the certificates in
 * Documents/Personal/hồ sơ thành tích, and the IEEE records of both papers.
 * Deliberately left out: phone number, date of birth, ID card, transcripts
 * and certificate scans.
 */

export type Link = { label: string; href: string };

export const profile = {
  name: "Trần Quang Huyên",
  role: "AI Research Scientist & AI Engineer",
  location: "Da Nang, Vietnam",
  summary:
    "I bridge machine learning research and production systems. M.Sc. by Research (Distinction, thesis defended) with first-author IEEE papers in quantum ML and medical imaging, and 4+ years in industry at Everfit and Hekate: R&D, GenAI and computer vision architectures, and complex models turned into low-latency, cost-effective products for enterprise and healthcare.",
  email: "huyenquangtran2002@gmail.com",
  interests: [
    "Quantum machine learning",
    "Medical image analysis",
    "LLM and RAG systems",
    "Vision-language models",
    "Voice AI",
    "AI for healthcare",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Tqhuyen" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tqhuyen/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=QnXbPGgAAAAJ" },
    { label: "Kaggle", href: "https://www.kaggle.com/tqhuyen" },
    { label: "Substack", href: "https://tqhuyen.substack.com/" },
  ] satisfies Link[],
};

export type Experience = {
  role: string;
  org: string;
  place?: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    org: "Everfit",
    period: "Sep 2025 – Sep 2026",
    points: [
      "AI Profile Builder & AI Interviewer: led end-to-end development of AI-generated seller profiles, from prompt engineering and internal tooling to the voice-interviewer API; ran field-level evaluations, optimised Instagram crawling and fixed critical pre-launch issues for seller onboarding.",
      "AI Nutrition & Food Recognition: built evaluation and improvement pipelines for production AI, with analytics dashboards, synonym-to-canonical mapping and a multi-tier nutrition cascade; benchmarked 39 VLM configurations, designed the Gold-300 dataset, optimised a compact scan-type classifier and routed A/B tests with Statsig.",
      "Wake word & Voice2JSON: led R&D and the end-to-end PoC for hands-free, voice-to-JSON workout logging, with a custom wake-word pipeline, under 2 s latency at about $0.00036 per request, API migration, conversational logging and the iOS handover.",
    ],
    tags: ["LLMs", "VLMs", "Voice AI", "Evaluation", "A/B testing"],
  },
  {
    role: "Research Student",
    org: "CIS Lab, National Chung Cheng University",
    place: "Chiayi, Taiwan",
    period: "Dec 2024 – Mar 2025",
    points: [
      "Researched quantum machine learning and quantum self-attention under Prof. Van-Linh Nguyen, implementing classifiers in Python and PennyLane.",
      "Designed efficient circuit classifiers for quantum self-attention in Vision Transformers, published as a first-author paper at IEEE Globecom Workshops 2025.",
      "Completed the 2025 International Intern Research Program with an “Excellent” rating.",
    ],
    tags: ["Quantum ML", "PennyLane", "Vision Transformers"],
  },
  {
    role: "AI Engineer",
    org: "Hekate",
    period: "Nov 2021 – Dec 2024",
    points: [
      "R&D on computer vision, NLP, GenAI and LLMs (GPT, Llama, Qwen, Claude) to customer requirements.",
      "Cerebral artery disease classification: designed, trained and deployed cerebral artery segmentation and disease prediction models in PyTorch (85% accuracy).",
      "MedNow: built a medical chatbot on SOLAR with RAG over ChromaDB; RAG raised answer accuracy by 20%.",
      "Milk-advertisement violation detection: led a team of 5 engineers covering Lao and Mongolian, reaching 93% accuracy and cutting processing time by 30%.",
      "Sumi: maintained and optimised an LLM chatbot, raising user engagement by 30%.",
    ],
    tags: ["PyTorch", "TensorFlow", "LLMs", "RAG", "AWS"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  points: string[];
};

export const education: Education[] = [
  {
    degree: "M.Sc. (by Research) in Electronics Engineering",
    school: "University of Science and Technology – The University of Da Nang",
    period: "2025 – Mar 2027 (expected)",
    points: [
      "GPA 3.7 / 4.0 (Distinction).",
      "Thesis: A Deep Learning Model for Glaucoma Classification Using Optical Coherence Tomography Images of the Retinal Nerve Fiber Layer.",
      "Supervisor: Prof. Dr. Phan Tran Dang Khoa.",
      "Research and thesis defense completed; awaiting degree conferral.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "University of Science and Technology – The University of Da Nang",
    period: "2020 – 2025",
    points: [
      "GPA 3.58 / 4.0, 2nd in the major.",
      "180 credits, Vietnam Qualifications Framework level 7 (master's-equivalent).",
      "Projects: Quantum Self-Attention; replicating the Transformer model.",
      "Coursework: machine learning, computer vision, data structures and algorithms, electronic circuits, digital logic design, probability and statistics, linear algebra.",
    ],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  note?: string;
  links: Link[];
};

export const publications: Publication[] = [
  {
    title: "Efficient Circuit Classifier Design for Enhancing Quantum Self-Attention in Vision Transformers",
    authors: "Huyen Quang Tran, Yu-Han Lin, Hanh Thi Minh Tran, Duy-Tuan Dao, Van-Linh Nguyen",
    venue: "IEEE Globecom Workshops (GC Wkshps), Taipei, Taiwan, pp. 170–175",
    year: 2025,
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11591004" },
      { label: "Code", href: "https://github.com/Tqhuyen/Quantum-Self-Attention" },
    ],
  },
  {
    title: "Comparative Analysis of Deep Learning Architectures for Brain Tumor Segmentation",
    authors: "Huyen Quang Tran, Hieu Pham, Phuc Ho, Hanh Thi Minh Tran",
    venue: "International Conference on Advanced Technologies for Communications (ATC), Hanoi, Vietnam",
    year: 2025,
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11268774" },
      {
        label: "Code",
        href: "https://github.com/PhamDoanMinhHieu/Comparative-Analysis-of-Deep-Learning-Architectures-for-Brain-Tumor-Segmentation",
      },
    ],
  },
];

/** Student research conference papers (University of Science and Technology). */
export const studentResearch: Publication[] = [
  {
    title: "Research and Enhancement of the Quantum Self-Attention Model",
    authors: "Huyen Quang Tran (sole author)",
    venue: "Faculty-level Student Scientific Research Conference",
    year: 2025,
    note: "Third Prize (faculty)",
    links: [],
  },
  {
    title: "Student Support Chatbot for the University of Science and Technology",
    authors: "Huyen Quang Tran (sole author)",
    venue: "Faculty-level Student Scientific Research Conference",
    year: 2023,
    note: "Second Prize (faculty)",
    links: [],
  },
  {
    title: "Research on the GaitBase Model Applied to Gait-Based Identity Recognition",
    authors: "Huyen Quang Tran, Van Phuc Thai · advisor Dr. Hanh Thi Minh Tran",
    venue: "Student Scientific Research Conference",
    year: 2022,
    note: "First Prize (faculty), Encouragement Prize (university)",
    links: [],
  },
  {
    title: "Shoplifting Detection in Retail Stores Using Computer Vision",
    authors: "Hai Ton That, Huyen Quang Tran, Loc Hoang Ngoc, Tam Nguyen Tue · advisor Dr. Hanh Thi Minh Tran",
    venue: "Student Scientific Research Conference",
    year: 2022,
    links: [],
  },
];

export type ProjectKind = "Research" | "Industry" | "Personal";

export type Project = {
  title: string;
  kind: ProjectKind;
  /** Company shown on industry cards. */
  org?: string;
  /** Omitted when the CVs give no dates. */
  period?: string;
  summary: string;
  highlight?: string;
  tags: string[];
  links: Link[];
};

export const projects: Project[] = [
  {
    title: "Quantum self-attention for Vision Transformers",
    kind: "Research",
    period: "2024 – 2025",
    summary:
      "Circuit-centric quantum classifiers that strengthen quantum self-attention, simulated in PennyLane on downscaled MNIST and the MC language task.",
    highlight: "First author · IEEE GC Wkshps 2025",
    tags: ["Quantum ML", "PennyLane", "ViT"],
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11591004" },
      { label: "Code", href: "https://github.com/Tqhuyen/Quantum-Self-Attention" },
    ],
  },
  {
    title: "Brain tumor segmentation benchmark",
    kind: "Research",
    period: "2025",
    summary:
      "Six U-Net-family models (U-Net, ResUNet, DeepResUNet, DRU, SRU, DUCK-Net) retrained and compared on 3,064 MRI slices; DUCK-Net led with a test Dice of 0.8575.",
    highlight: "First author · IEEE ATC 2025",
    tags: ["Medical imaging", "Segmentation", "PyTorch"],
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/document/11268774" },
      {
        label: "Code",
        href: "https://github.com/PhamDoanMinhHieu/Comparative-Analysis-of-Deep-Learning-Architectures-for-Brain-Tumor-Segmentation",
      },
    ],
  },
  {
    title: "Glaucoma classification from OCT",
    kind: "Research",
    period: "2025 – 2026",
    summary:
      "Master's thesis: a deep learning model that classifies glaucoma from OCT images of the retinal nerve fiber layer, with a 3D CNN on raw 200³ volumes trained by one PyTorch pipeline from Colab to a multi-node SLURM cluster.",
    highlight: "M.Sc. thesis · defended",
    tags: ["3D CNN", "PyTorch DDP", "SLURM"],
    links: [{ label: "Code", href: "https://github.com/Tqhuyen/glaucoma-thesis" }],
  },
  {
    title: "Gait-based identity recognition",
    kind: "Research",
    period: "2022 – 2023",
    summary:
      "Identifies people by the way they walk using the GaitBase model, wrapped in a Flask web app. Built with a teammate; I also presented the papers we built on.",
    highlight: "First Prize (faculty) · Encouragement Prize (university)",
    tags: ["GaitBase", "Computer vision", "Flask"],
    links: [],
  },
  {
    title: "Student support chatbot",
    kind: "Research",
    period: "Sep – Dec 2023",
    summary:
      "Answers students' questions from the university's own documents through a ChromaDB vector store, after comparing GPT-3, GPT-4, T5, Phi and BLOOM.",
    highlight: "Second Prize, faculty research conference",
    tags: ["RAG", "ChromaDB", "LLMs"],
    links: [],
  },
  {
    title: "Shoplifting detection in retail stores",
    kind: "Research",
    period: "2022 – 2023",
    summary: "Computer vision that spots shoplifting in store camera footage; a four-person student research project.",
    tags: ["Computer vision", "Video"],
    links: [],
  },
  {
    title: "AI Profile Builder & AI Interviewer",
    kind: "Industry",
    org: "Everfit",
    period: "2025 – 2026",
    summary:
      "AI-generated seller profiles for onboarding: prompt engineering, internal tooling and a voice-interviewer API, checked by field-level evaluations and fed by an optimised Instagram crawler.",
    highlight: "Led end to end, through launch",
    tags: ["LLMs", "Prompt engineering", "Voice AI", "Crawling"],
    links: [],
  },
  {
    title: "AI Nutrition & Food Recognition",
    kind: "Industry",
    org: "Everfit",
    period: "2025 – 2026",
    summary:
      "Evaluation and improvement pipelines for production food recognition: analytics dashboards, synonym-to-canonical mapping, a multi-tier nutrition cascade, a compact scan-type classifier and Statsig A/B routing.",
    highlight: "39 VLM configs benchmarked · Gold-300 dataset",
    tags: ["VLMs", "Evaluation", "A/B testing", "Dashboards"],
    links: [],
  },
  {
    title: "Wake word & Voice2JSON",
    kind: "Industry",
    org: "Everfit",
    period: "2025 – 2026",
    summary:
      "Hands-free workout logging: a custom wake-word pipeline and a voice-to-JSON model, taken from R&D to an end-to-end PoC handed over to iOS.",
    highlight: "< 2 s latency · ~$0.00036 per request",
    tags: ["Wake word", "Speech", "iOS", "APIs"],
    links: [],
  },
  {
    title: "Alive & Thrive (UNICEF) ad-violation assistant",
    kind: "Industry",
    org: "Hekate",
    summary:
      "Finds milk ads that break the marketing rules for products for pregnant women and children under 24 months, across Facebook, Instagram and websites, in 5 countries.",
    highlight: "Led 5 engineers · 93% accuracy",
    tags: ["Object detection", "OCR", "LLMs", "Image captioning", "AWS EC2"],
    links: [],
  },
  {
    title: "Cerebrovascular disease recognition",
    kind: "Industry",
    org: "Hekate",
    period: "Jan 2022 – Feb 2023",
    summary:
      "3D segmentation of cerebral arteries with nnU-Net plus a disease classifier, trained on imbalanced medical scans and delivered as a web platform.",
    highlight: "85% accuracy",
    tags: ["nnU-Net", "3D segmentation", "PyTorch"],
    links: [],
  },
  {
    title: "MedNow medical chatbot",
    kind: "Industry",
    org: "Hekate",
    period: "2024",
    summary:
      "Gives medical guidance with the SOLAR LLM and RAG over WHO documents, and reads uploaded prescriptions with OCR.",
    highlight: "+20% accuracy with RAG",
    tags: ["RAG", "LangChain", "ChromaDB", "SOLAR"],
    links: [{ label: "Code", href: "https://github.com/Tqhuyen/mednow" }],
  },
  {
    title: "Virtual expert",
    kind: "Industry",
    org: "Hekate",
    period: "Apr – May 2023",
    summary: "A fine-tuned LLM with embedding search that answers questions about a user's specialised documents in real time.",
    tags: ["LLM fine-tuning", "Embeddings"],
    links: [],
  },
  {
    title: "Virtual Friend VR game",
    kind: "Industry",
    org: "Hekate",
    period: "Nov 2021 – Feb 2022",
    summary: "A virtual-reality companion for Oculus Quest 2, built in Unity with the XR toolkit and pre-trained NLP models.",
    tags: ["Unity", "Oculus", "NLP"],
    links: [],
  },
  {
    title: "Virtual QC platform",
    kind: "Personal",
    period: "Jun – Jul 2023",
    summary:
      "Transcribes customer–employee calls with speech separation and speech-to-text, then scores sentiment so teams can review service quality.",
    tags: ["Speech-to-text", "Sentiment", "React", "Python"],
    links: [],
  },
  {
    title: "H.266/VVC compression for 4K CCTV",
    kind: "Personal",
    period: "Nov 2022 – Dec 2023",
    summary:
      "Studied the H.266 (VVC) standard and machine-learning approaches for compressing 4K CCTV video, tested open-source implementations and built a web demo.",
    tags: ["H.266 / VVC", "Video"],
    links: [],
  },
  {
    title: "Vietnamese license plate recognition",
    kind: "Personal",
    period: "Jan – Feb 2023",
    summary: "Fine-tuned YOLOv8 to find Vietnamese plates in CCTV video and read them with OCR, on a dataset I collected.",
    tags: ["YOLOv8", "OCR"],
    links: [],
  },
  {
    title: "Store demand forecasting",
    kind: "Personal",
    period: "Jun – Jul 2023",
    summary: "Time-series models, LSTM among them, that forecast store demand.",
    tags: ["Time series", "LSTM"],
    links: [],
  },
  {
    title: "PhD search agent",
    kind: "Personal",
    period: "2026",
    summary:
      "Agent workflows that find PhD positions and labs, score the fit and draft applications, with tested OpenAlex and Bluesky CLIs.",
    tags: ["AI agents", "OpenAlex"],
    links: [{ label: "Code", href: "https://github.com/Tqhuyen/phd-search-agent" }],
  },
  {
    title: "Learning platform for students with disabilities",
    kind: "Personal",
    period: "2026",
    summary:
      "Lessons, sign-language guides and games for Vietnamese students with speech and language disabilities.",
    tags: ["Next.js", "TypeScript", "Accessibility"],
    links: [
      { label: "Live", href: "https://educational-platform-for-disabiliti.vercel.app" },
      { label: "Code", href: "https://github.com/Tqhuyen/educational-platform-for-disabilities" },
    ],
  },
];

export type AwardYear = { year: number; items: string[] };

export const awards: AwardYear[] = [
  {
    year: 2025,
    items: [
      "“Excellent” rating, International Intern Research Program, National Chung Cheng University",
      "Third Prize, Faculty-level Student Scientific Research Conference",
    ],
  },
  {
    year: 2024,
    items: [
      "Second Prize, Faculty-level Student Scientific Research Conference",
      "Outstanding Student in Academics and Activities, Faculty of Electronics & Telecommunications",
    ],
  },
  {
    year: 2023,
    items: [
      "First Prize, FISICO 2023: CYBERA, physics competition for university students",
      "First Prize, Faculty-level Student Scientific Research Conference",
      "Encouragement Prize, University-level Student Scientific Research Conference",
      "Outstanding Student in Academics and Activities, Faculty of Electronics & Telecommunications",
      "Faculty commendation for contributions to the Faculty of Electronics & Telecommunications",
      "Excellent Student of the academic year",
      "PIONEER Student Research Club certificate for strong competition results",
    ],
  },
  {
    year: 2022,
    items: [
      "Second Prize, ETE Code Contest",
      "Semi-finalist, AWS Build On Vietnam 2022",
      "Certificate for the Faculty of Electronics & Telecommunications booth at BK Techshow 2022",
    ],
  },
  { year: 2021, items: ["Excellent Student of the academic year"] },
  {
    year: 2020,
    items: [
      "Merit-based entrance scholarship, University of Science and Technology",
      "Second Prize in Physics, Da Nang city-level gifted student exam",
    ],
  },
  { year: 2019, items: ["Encouragement Prize in Mathematics, high school gifted student exam"] },
  { year: 2018, items: ["Encouragement Prize in Physics, high school gifted student exam"] },
  {
    year: 2017,
    items: [
      "Third Prize in Physics, Da Nang city-level gifted student exam (grade 9)",
      "Second Prize, district-level online physics contest",
    ],
  },
  { year: 2016, items: ["Second Prize in Physics, district-level gifted student exam (grade 8)"] },
];

export type Role = { title: string; org: string; period: string; detail: string };

export const leadership: Role[] = [
  {
    title: "Tutor, Hekate Summer Camp (seasons 1 & 2)",
    org: "Hekate Academy",
    period: "Aug 2023, Aug 2024",
    detail: "Taught 10–15 students a week deep learning and computer vision (YOLO, R-CNN, OCR) plus machine learning basics.",
  },
  {
    title: "Python tutor",
    org: "Faculty of Electronics & Telecommunications, University of Science and Technology",
    period: "Mar – Apr 2023",
    detail: "Tutored 20–25 engineering students a week in Python.",
  },
  {
    title: "Head of AI Expertise",
    org: "PIONEER Student Research Club, Faculty of Electronics & Telecommunications",
    period: "Jan 2022 – Nov 2024",
    detail: "Trained members in AI and organised competitions; recognised for the club board's work in 2022–2023.",
  },
  {
    title: "Technical tutor",
    org: "ROBODNIC 2022, robot contest for Da Nang high school students",
    period: "Aug 2022",
    detail: "Guided a team through Arduino, mechanical and electrical design.",
  },
  {
    title: "Head of Expertise",
    org: "STEAM for Youth (S4Y)",
    period: "Oct 2021 – Aug 2022",
    detail: "Owned the quality of all STEAM content.",
  },
  {
    title: "Founder & President",
    org: "HHT Coder and Scientist, Hoang Hoa Tham High School",
    period: "Jan 2019 – May 2021",
    detail: "Started and ran the school's science and technology club.",
  },
];

export const certifications: string[] = [
  "TOEIC 880",
  "AI for Medical Diagnosis (DeepLearning.AI)",
  "Custom Models, Layers, and Loss Functions with TensorFlow",
  "Python for Data Science",
  "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI & machine learning",
    items: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "LangChain", "LlamaIndex", "OpenCV", "vLLM"],
  },
  {
    title: "Research domains",
    items: ["Quantum machine learning", "Medical image analysis", "LLM RAG architectures"],
  },
  { title: "Programming", items: ["Python (expert)", "C++", "SQL", "JavaScript"] },
  {
    title: "MLOps & cloud",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "MLflow", "Weights & Biases", "CI/CD (Jenkins, GitLab)"],
  },
  { title: "Data & backend", items: ["PostgreSQL", "MongoDB", "Redis", "FastAPI", "Apache Kafka"] },
];

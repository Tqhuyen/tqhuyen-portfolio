/**
 * Everything the site says about Huyên lives here.
 *
 * Sources: the CVs in Documents/Career/CV/CV (PhD, Industry, master, AI
 * Engineer, Academic), the certificates in Documents/Personal/hồ sơ thành
 * tích, and the IEEE records of both papers. Deliberately left out: phone
 * number, date of birth, ID card, transcripts and certificate scans.
 */

export type Link = { label: string; href: string };

export const profile = {
  name: "Trần Quang Huyên",
  role: "AI Engineer & Researcher",
  location: "Da Nang, Vietnam",
  summary:
    "AI engineer with three years of shipping computer vision, NLP and LLM systems at Hekate, an AI-for-good startup. First author of two 2025 IEEE papers, on quantum self-attention for Vision Transformers and on brain tumor segmentation. I build AI for healthcare and education, and I keep a soft spot for quantum computing and physics.",
  email: "huyenquangtran2002@gmail.com",
  interests: [
    "Medical image analysis",
    "Quantum machine learning",
    "Computer vision",
    "Large language models",
    "AI for healthcare",
    "Robotics",
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
    role: "Research Intern",
    org: "CIS Lab, National Chung Cheng University",
    place: "Chiayi, Taiwan",
    period: "Dec 2024 – Mar 2025",
    points: [
      "Studied quantum machine learning under Prof. Van-Linh Nguyen and implemented classifiers in Python and PennyLane.",
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
      "Researched and shipped computer vision, NLP, GenAI and LLM systems for clients (GPT, Llama, Qwen, Claude), served as APIs on AWS.",
      "Led a team of 5 engineers on an ad-violation detector for Alive & Thrive (UNICEF) covering Lao and Mongolian: 93% accuracy, 30% less processing time.",
      "Designed, trained and deployed cerebral artery segmentation and cerebrovascular disease prediction models in PyTorch (85% accuracy).",
      "Built MedNow, a medical chatbot on SOLAR with RAG over ChromaDB; RAG raised answer accuracy by 20%.",
      "Set up an MLOps workflow (MLflow, RabbitMQ, Kafka, CI/CD, test-driven development) that made model deployment 40% faster.",
      "Maintained an LLM chatbot product and raised user engagement by 30%.",
    ],
    tags: ["PyTorch", "TensorFlow", "LLMs", "AWS", "MLOps"],
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
    degree: "M.Sc. in Electronics Engineering (in progress)",
    school: "University of Science and Technology – The University of Da Nang",
    period: "2025 – present",
    points: ["Thesis: 3D CNN for glaucoma detection from OCT scans."],
  },
  {
    degree: "Engineer's degree in Computer Engineering",
    school: "University of Science and Technology – The University of Da Nang",
    period: "2020 – 2025",
    points: [
      "GPA 3.53 / 4.0, top 5% of the class.",
      "180 credits, Vietnam Qualifications Framework level 7 (master's-equivalent).",
      "Capstone: improving quantum self-attention for quantum classifiers.",
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
    venue: "IEEE Globecom Workshops (GC Wkshps), Taipei, Taiwan",
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
    title: "Research and implement some Quantum Machine Learning algorithms",
    authors: "Huyen Quang Tran (sole author)",
    venue: "Faculty-level Student Scientific Research Conference",
    year: 2025,
    note: "Third Prize",
    links: [],
  },
  {
    title: "Chatbot based on LLMs and RAG with the university's dataset",
    authors: "Huyen Quang Tran (sole author)",
    venue: "Faculty-level Student Scientific Research Conference",
    year: 2024,
    note: "Second Prize",
    links: [],
  },
  {
    title: "Gait recognition with the GaitBase model",
    authors: "Huyen Quang Tran, Van Phuc Thai · advisor Dr. Hanh Thi Minh Tran",
    venue: "Student Scientific Research Conference",
    year: 2023,
    note: "First Prize (faculty), Encouragement Prize (university)",
    links: [],
  },
  {
    title: "Shoplifting detection in stores with computer vision",
    authors: "Hai Ton That, Huyen Quang Tran, Loc Hoang Ngoc, Tam Nguyen Tue · advisor Dr. Hanh Thi Minh Tran",
    venue: "Student Scientific Research Conference",
    year: 2023,
    links: [],
  },
];

export type ProjectKind = "Research" | "Industry" | "Personal";

export type Project = {
  title: string;
  kind: ProjectKind;
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
    title: "Glaucoma detection from OCT",
    kind: "Research",
    period: "2025 – present",
    summary:
      "Master's thesis: a 3D CNN on raw 200³ OCT volumes, trained by one PyTorch pipeline that runs unchanged from Colab to a multi-node SLURM cluster.",
    tags: ["3D CNN", "PyTorch DDP", "SLURM"],
    links: [{ label: "Code", href: "https://github.com/Tqhuyen/glaucoma-thesis" }],
  },
  {
    title: "Gait recognition system",
    kind: "Research",
    period: "Jan – Jun 2023",
    summary:
      "Identifies people by the way they walk using the GaitBase model, wrapped in a Flask web app. Built with a teammate; I also presented the papers we built on.",
    highlight: "First Prize, faculty research conference",
    tags: ["GaitBase", "Computer vision", "Flask"],
    links: [],
  },
  {
    title: "University chatbot with LLMs and RAG",
    kind: "Research",
    period: "Sep – Dec 2023",
    summary:
      "Answers students' questions from the university's own documents through a ChromaDB vector store, after comparing GPT-3, GPT-4, T5, Phi and BLOOM.",
    highlight: "Second Prize, faculty research conference",
    tags: ["RAG", "ChromaDB", "LLMs"],
    links: [],
  },
  {
    title: "Shoplifting detection",
    kind: "Research",
    period: "2022 – 2023",
    summary: "Computer vision that spots shoplifting in store camera footage; a four-person student research project.",
    tags: ["Computer vision", "Video"],
    links: [],
  },
  {
    title: "Alive & Thrive (UNICEF) ad-violation assistant",
    kind: "Industry",
    summary:
      "Finds milk ads that break the marketing rules for products for pregnant women and children under 24 months, across Facebook, Instagram and websites, in 5 countries.",
    highlight: "Led 5 engineers · 93% accuracy",
    tags: ["Object detection", "OCR", "LLMs", "Image captioning", "AWS EC2"],
    links: [],
  },
  {
    title: "Cerebrovascular disease recognition",
    kind: "Industry",
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
    period: "Apr – May 2023",
    summary: "A fine-tuned LLM with embedding search that answers questions about a user's specialised documents in real time.",
    tags: ["LLM fine-tuning", "Embeddings"],
    links: [],
  },
  {
    title: "Virtual Friend VR game",
    kind: "Industry",
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
    ],
  },
  {
    year: 2022,
    items: ["Second Prize, ETE Code Contest", "Semi-finalist, AWS Build On Vietnam 2022"],
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
  "AI for Medical Diagnosis (DeepLearning.AI, Coursera)",
  "Custom Models, Layers, and Loss Functions with TensorFlow (Coursera)",
  "Introduction to TensorFlow for AI, ML and Deep Learning (Coursera)",
  "Python for Data Science, AI & Development (Coursera)",
  "AWS Fundamentals: Building Serverless Applications (AWS)",
  "MongoDB Basics (MongoDB University)",
  "Data Science Summer School (VIASM)",
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI & research",
    items: ["PyTorch", "TensorFlow", "PennyLane", "nnU-Net", "YOLO", "OCR", "LangChain", "RAG", "ChromaDB", "NumPy", "Pandas", "LaTeX"],
  },
  {
    title: "MLOps & backend",
    items: ["Docker", "MLflow", "Kafka", "RabbitMQ", "Jenkins", "FastAPI", "Flask", "Nginx", "Git", "CI/CD"],
  },
  {
    title: "Cloud & data",
    items: ["AWS", "Google Cloud", "MongoDB", "PostgreSQL", "SQL Server", "Redis", "Ubuntu", "Windows Server"],
  },
  {
    title: "Languages & web",
    items: ["Python", "C / C++", "JavaScript", "TypeScript", "C#", "Dart", "PHP", "React", "Next.js", "Node.js"],
  },
  {
    title: "Hardware",
    items: ["Arduino", "STM32", "ESP32", "Raspberry Pi", "MSP430", "FPGA / Verilog", "Altium Designer", "Proteus"],
  },
];

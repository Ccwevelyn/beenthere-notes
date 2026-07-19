export type Lang = "zh" | "en";
export type GradeId = "year-1" | "year-2" | "year-3" | "year-4";
export type SemesterId = "fall" | "spring";

export const languages: Lang[] = ["zh", "en"];

/** Smaller order first; same order → newer date first. */
export function sortNotesByDisplayOrder<
  T extends { data: { order?: number; date: Date } }
>(a: T, b: T) {
  const orderA = a.data.order ?? 100;
  const orderB = b.data.order ?? 100;
  if (orderA !== orderB) return orderA - orderB;
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export const copy = {
  zh: {
    navYears: "按年级浏览",
    author: "作者的话",
    contribute: "投稿",
    console: "控制台",
    chooseYear: "先选择一个年级",
    chooseYearHint: "再按学期和课程找到需要的资料。",
    chooseSemester: "选择学期",
    courses: "课程",
    notes: "笔记",
    tips: "Tips",
    noContent: "内容正在整理中",
    backHome: "返回首页",
    allMaterials: "本课程资料",
    views: "次浏览",
    read: "阅读",
    language: "EN"
  },
  en: {
    navYears: "Browse by year",
    author: "From the author",
    contribute: "Contribute",
    console: "Console",
    chooseYear: "Start with your year",
    chooseYearHint: "Then narrow it down by semester and course.",
    chooseSemester: "Choose a semester",
    courses: "Courses",
    notes: "Notes",
    tips: "Tips",
    noContent: "More materials are on the way",
    backHome: "Back home",
    allMaterials: "Course materials",
    views: "views",
    read: "Read",
    language: "中文"
  }
} as const;

export const grades: {
  id: GradeId;
  label: { zh: string; en: string };
  description: { zh: string; en: string };
  message?: { zh: string; en: string };
}[] = [
  {
    id: "year-1",
    label: { zh: "大一", en: "Year 1" },
    description: { zh: "基础课程与适应大学学习", en: "Foundations and settling into university study" },
    message: {
      zh: '不好意思~ 我大一的时候没有好好学习，所以可能没有经验可以分享给大家！但是也欢迎其他厉害的同学多多<a href="/zh/contribute/">投稿</a>~ 不过，如果一定要说一句话，我希望弟弟妹妹们可以从大一开始就关注自己的GPA，尽早确定未来的方向和需要达到的GPA，把选择权握在自己手里。不要像我一样，一直在还之前的债~ 大一下的难度比起大一上学期会直线上升！所以，一定要提前打好预防针~ 一起加油！',
      en: 'Sorry~ I didn\'t study hard enough in Year 1, so there may not be much experience to share! Classmates who did well are very welcome to <a href="/en/contribute/">contribute</a>~ Still, if I have to say one thing: start watching your GPA from Year 1, figure out your direction early and the GPA you\'ll need, and keep the choice in your own hands. Don\'t be like me, always paying off old debts~ Spring of Year 1 gets much harder than fall! So get prepared early~ Let\'s go!'
    }
  },
  {
    id: "year-2",
    label: { zh: "大二", en: "Year 2" },
    description: { zh: "核心课程与专业能力", en: "Core courses and subject skills" }
  },
  {
    id: "year-3",
    label: { zh: "大三", en: "Year 3" },
    description: { zh: "进阶课程与升学准备", en: "Advanced topics and postgraduate preparation" }
  },
  {
    id: "year-4",
    label: { zh: "大四", en: "Year 4" },
    description: { zh: "毕业设计与升学就业", en: "Capstone, further study, and careers" },
    message: {
      zh: "我将于2026年8月成为一名大四学生~ 这里的内容后续会慢慢补充起来！我们一起加油！",
      en: "I will become a Year 4 student in August 2026~ Content here will be added gradually. Let's keep going together!"
    }
  }
];

export const semesters = [
  { id: "fall" as const, label: { zh: "上学期", en: "Fall semester" } },
  { id: "spring" as const, label: { zh: "下学期", en: "Spring semester" } }
];

export const courses = [
  {
    slug: "calculus",
    grade: "year-1" as const,
    semester: "fall" as const,
    code: "MATH 101",
    title: { zh: "微积分", en: "Calculus" },
    description: { zh: "概念梳理、题型总结与考试提醒。", en: "Concepts, problem patterns, and exam reminders." }
  },
  {
    slug: "programming",
    grade: "year-1" as const,
    semester: "fall" as const,
    code: "CS 101",
    title: { zh: "程序设计基础", en: "Programming Fundamentals" },
    description: { zh: "从语法基础到调试与考试策略。", en: "From syntax basics to debugging and exam strategy." }
  },
  {
    slug: "database-design",
    grade: "year-2" as const,
    semester: "fall" as const,
    code: "COMP2111",
    title: { zh: "数据库设计", en: "Database Design" },
    description: { zh: "数据库建模、设计与基本应用。", en: "Database modelling, design, and core applications." }
  },
  {
    slug: "data-structures-algorithms",
    grade: "year-2" as const,
    semester: "fall" as const,
    code: "COMP2112",
    title: { zh: "数据结构与算法", en: "Data Structures and Algorithms" },
    description: { zh: "常用数据结构、算法与复杂度分析。", en: "Common data structures, algorithms, and complexity analysis." }
  },
  {
    slug: "operating-systems",
    grade: "year-2" as const,
    semester: "fall" as const,
    code: "COMP2113",
    title: { zh: "操作系统", en: "Operating Systems" },
    description: { zh: "操作系统原理、进程调度与资源管理。", en: "Operating system principles, scheduling, and resource management." }
  },
  {
    slug: "ethics-professional-issues",
    grade: "year-2" as const,
    semester: "spring" as const,
    code: "COMP2114",
    title: { zh: "电脑专业道德概论", en: "Ethics and Professional Issues in Computing" },
    description: { zh: "计算机专业伦理与职业责任。", en: "Professional ethics and responsibilities in computing." }
  },
  {
    slug: "web-design-development",
    grade: "year-2" as const,
    semester: "spring" as const,
    code: "COMP2115",
    title: { zh: "网页设计与开发", en: "Web Design and Development" },
    description: { zh: "网页结构、样式与基础开发。", en: "Web structure, styling, and foundational development." }
  },
  {
    slug: "software-engineering",
    grade: "year-2" as const,
    semester: "spring" as const,
    code: "COMP2116",
    title: { zh: "软件工程", en: "Software Engineering" },
    description: { zh: "软件工程流程、方法与实践。", en: "Software engineering processes, methods, and practice." }
  },
  {
    slug: "computer-networks",
    grade: "year-2" as const,
    semester: "spring" as const,
    code: "COMP2117",
    title: { zh: "电脑网络", en: "Computer Networks" },
    description: { zh: "网络协议、体系结构与基础应用。", en: "Network protocols, architecture, and core applications." }
  },
  {
    slug: "project-management",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "COMP3112",
    title: { zh: "项目管理", en: "Project Management" },
    description: { zh: "项目规划、执行与管理方法。", en: "Project planning, execution, and management methods." }
  },
  {
    slug: "human-factors-user-interfaces",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "COMP3115",
    title: { zh: "人机接口技术", en: "Human Factors and User Interfaces" },
    description: { zh: "人机交互原理、界面设计与可用性。", en: "Human-computer interaction, interface design, and usability." }
  },
  {
    slug: "science-communications",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "MENG3111",
    title: { zh: "科学传播", en: "Science Communications" },
    description: { zh: "面向不同受众的科学与技术传播。", en: "Communicating scientific and technical information to diverse audiences." }
  },
  {
    slug: "advanced-web-development",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "COMP3122",
    title: { zh: "进阶网页应用开发", en: "Advanced Web Development" },
    description: { zh: "现代网页应用、交互界面与后端开发。", en: "Modern web applications, interactive interfaces, and backend development." }
  },
  {
    slug: "data-driven-business-management",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "COMP3116",
    title: { zh: "数据驱动商业管理", en: "Data Driven Business Management" },
    description: { zh: "运用数据支持商业管理与决策。", en: "Using data to support business management and decision-making." }
  },
  {
    slug: "risk-management-business",
    grade: "year-3" as const,
    semester: "fall" as const,
    code: "MSEL3109",
    title: { zh: "商业危机管理导论", en: "Risk Management in Business" },
    description: { zh: "商业与金融风险的识别、分析及管理。", en: "Identifying, analysing, and managing business and financial risks." }
  },
  {
    slug: "artificial-intelligence",
    grade: "year-3" as const,
    semester: "spring" as const,
    code: "COMP3113",
    title: { zh: "人工智能", en: "Artificial Intelligence" },
    description: { zh: "人工智能的理论、方法与实际应用。", en: "Theories, methods, and practical applications of artificial intelligence." }
  },
  {
    slug: "information-system-project",
    grade: "year-3" as const,
    semester: "spring" as const,
    code: "COMP3114",
    title: { zh: "信息系统项目", en: "Information System Project" },
    description: { zh: "以团队协作完成信息系统的设计与实现。", en: "Designing and implementing an information system in a team." }
  },
  {
    slug: "analytical-data-design-applications",
    grade: "year-3" as const,
    semester: "spring" as const,
    code: "COMP3117",
    title: { zh: "分析数据设计与应用", en: "Analytical Data Design and Applications" },
    description: { zh: "分析型数据的设计方法与实际应用。", en: "Design methods and applications for analytical data." }
  },
  {
    slug: "data-science-business-analytics",
    grade: "year-3" as const,
    semester: "spring" as const,
    code: "COMP3118",
    title: { zh: "数据科学与商业分析", en: "Data Science and Business Analytics" },
    description: { zh: "数据科学方法及其商业分析应用。", en: "Data science methods and their applications in business analytics." }
  },
  {
    slug: "interpersonal-relations",
    grade: "year-3" as const,
    semester: "spring" as const,
    code: "MSEL3107",
    title: { zh: "人际关系", en: "Interpersonal Relations" },
    description: { zh: "人际沟通、团队互动与关系管理。", en: "Interpersonal communication, group dynamics, and relationship skills." }
  }
];

export function localize<T extends { zh: string; en: string }>(value: T, lang: Lang) {
  return value[lang];
}

export function alternatePath(pathname: string, lang: Lang) {
  const target = lang === "zh" ? "en" : "zh";
  return pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${target}`);
}

export default {
  translation: {
    site: {
      name: 'Bilingual Science Lab',
      tagline: 'A Chinese–English bilingual science learning platform for middle and high school students',
      intro:
        'Every knowledge point comes with an interactive simulation, bilingual explanations and a gradable quiz, and is tagged with both PEP textbook chapters and Cambridge IGCSE syllabus topics for cross-curriculum study.',
    },
    nav: {
      home: 'Home',
    },
    lang: {
      switch: '中文',
    },
    subjects: {
      physics: { name: 'Physics', desc: 'Motion, forces, energy, electricity, waves' },
      chemistry: { name: 'Chemistry', desc: 'Structure of matter, reactions, acids and bases' },
      biology: { name: 'Biology', desc: 'Cells, genetics, physiology, ecology' },
    },
    gradeTier: {
      all: 'All',
      middle: 'Middle School',
      senior: 'High School',
      both: 'Middle & High School',
    },
    home: {
      subjectsTitle: 'Choose a Subject',
      searchPlaceholder: 'Search knowledge points (title / summary / keywords)…',
      filterIgcse: 'IGCSE Syllabus',
      filterPep: 'PEP Textbook',
      filterAll: 'All',
      resultCount: '{{count}} knowledge points',
      empty: 'No matching knowledge points. Try adjusting the filters.',
      knowledgePointsTitle: 'Knowledge Points',
    },
    kp: {
      theory: 'Theory',
      formulas: 'Formula in Action',
      simulation: 'Interactive Simulation',
      params: 'Parameters',
      presets: 'Real-life Scenarios',
      quiz: 'Quiz',
      syllabusTags: 'Syllabus & Textbook',
    },
    quiz: {
      submit: 'Submit Answers',
      retry: 'Try Again',
      correct: 'Correct',
      wrong: 'Incorrect',
      explanation: 'Explanation',
      score: 'Score: {{score}} / {{total}}',
      unanswered: 'Please answer all questions before submitting.',
    },
    progress: {
      completed: 'Completed',
      bestScore: 'Best score {{score}} / {{total}}',
    },
    notFound: {
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist or has been moved.',
      backHome: 'Back to Home',
    },
  },
} as const;

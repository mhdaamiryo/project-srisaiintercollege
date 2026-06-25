import { 
  FaHistory, 
  FaBook, 
  FaUserGraduate, 
  FaMicroscope,
  FaChalkboardTeacher,
  FaFlask,
  FaDesktop,
  FaBookReader,
  FaBasketballBall,
  FaBus
} from 'react-icons/fa';

export const schoolData = {
  name: "Sri Sai Inter College",
  location: "Barabanki, Uttar Pradesh",
  tagline: "Shaping Futures Since 2006",
  
  hero: {
    badge: "Established in 2006",
    headingMain: "Shaping Futures.",
    headingSub: "Since 2006.",
    description: "A premier educational institution in Barabanki providing UP Board curriculum from Classes 6 to 12, along with dedicated IIT-JEE and NEET preparation.",
    highlights: [
      { id: 1, title: "Established 2006", subtitle: "Quality Education" },
      { id: 2, title: "Classes 6–12", subtitle: "UP Board Curriculum" },
      { id: 3, title: "IIT-JEE & NEET", subtitle: "Competitive Preparation" }
    ]
  },

  stats: [
    {
      id: 1,
      icon: FaHistory,
      value: 'Since 2006',
      label: 'Established',
      description: 'Delivering trusted and quality education in Barabanki.',
    },
    {
      id: 2,
      icon: FaBook,
      value: 'UP Board',
      label: 'Curriculum',
      description: 'Strictly aligned with the Uttar Pradesh State Board syllabus.',
    },
    {
      id: 3,
      icon: FaUserGraduate,
      value: 'Classes 6–12',
      label: 'Education Level',
      description: 'Comprehensive secondary and senior secondary schooling.',
    },
    {
      id: 4,
      icon: FaMicroscope,
      value: 'IIT & NEET',
      label: 'Coaching',
      description: 'Integrated preparation for premier engineering and medical exams.',
    },
  ],

  about: {
    heading: "About Sri Sai Inter College",
    description: "Established in 2006, Sri Sai Inter College is committed to academic excellence, character development, and comprehensive student growth. We provide a disciplined yet nurturing environment where students build a strong foundation for UP Board examinations while simultaneously preparing for highly competitive entrance exams like IIT-JEE and NEET.",
    mission: "To provide quality education that nurtures knowledge, discipline, and values, empowering students to excel in board and competitive examinations.",
    vision: "To be a leading institution in Barabanki that shapes confident, responsible, and successful citizens through holistic development."
  },

  facilities: [
    {
      id: 1,
      title: 'Smart Classrooms',
      description: 'Technology-enabled classrooms designed for an interactive, engaging, and modern learning experience.',
      icon: FaChalkboardTeacher,
    },
    {
      id: 2,
      title: 'Science Laboratory',
      description: 'Well-equipped Physics, Chemistry, and Biology labs fostering practical knowledge and scientific inquiry.',
      icon: FaFlask,
    },
    {
      id: 3,
      title: 'Computer Laboratory',
      description: 'Advanced computing facilities aimed at enhancing digital literacy and technical skills.',
      icon: FaDesktop,
    },
    {
      id: 4,
      title: 'Library',
      description: 'A quiet, comprehensive resource center featuring UP Board texts, competitive exam materials, and literature.',
      icon: FaBookReader,
    },
    {
      id: 5,
      title: 'Sports Activities',
      description: 'Ample space and facilities dedicated to physical education, teamwork, and athletic excellence.',
      icon: FaBasketballBall,
    },
    {
      id: 6,
      title: 'Transportation',
      description: 'Safe, reliable, and comfortable bus services connecting students across Barabanki safely.',
      icon: FaBus,
    },
  ],

  contact: {
    address: "Sri Sai Inter College, Barabanki, Uttar Pradesh",
    phone1: "+91 88746 67588",
    phone2: "+91 99368 16482",
    email: "ssic.nsd@gmail.com"
  }
};
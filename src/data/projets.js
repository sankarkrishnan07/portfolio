export const filterOptions = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "React", value: "react" },
  { label: "Vanilla Js", value: "vanilla-js" },
];

export const projects = [
  {
    title: "The Wild Oasis",
    year: "2024",
    img: "the-wild-oasis",
    tags: [
      "Supabase",
      "React",
      "React Query",
      "React Router",
      "Styled Components",
      "Compound Component Pattern",
      "Recharts",
    ],
    desc: "An in-house hotel management app, built with React, efficiently manages bookings, cabins, and users, with robust authentication. It uses React Query for data fetching, React Router for navigation, and Styled Components for styling. Recharts provides interactive data visualization, while Supabase powers the backend with a scalable, real-time database. This tech stack ensures a user-friendly and efficient application. Please view it in desktop mode. Future updates may include mobile responsiveness to enhance usability.",
    code: "the-wild-oasis",
    app: "sk-the-wild-oasis",
    key: "fullstack",
  },
  {
    title: "WorlWise",
    year: "2024",
    img: "worldwise",
    tags: ["React", "React Router", "React Leaflet", "context API"],
    desc: "An app that allows users to track their footsteps around the world. Built with React Router for seamless navigation and React Leaflet for interactive mapping, it offers an intuitive way to visualize and explore your journeys.  Future updates may include mobile responsiveness to enhance usability.",
    code: "worldwise",
    app: "sk-worldwise",
    key: "react",
  },
  {
    title: "Fast Pizza",
    year: "2024",
    img: "fast-pizza",
    tags: [
      "React",
      "Redux",
      "React Router",
      " Redux Toolkit",
      "thunks",
      "Tailwind CSS",
    ],
    desc: "An interactive web application allowing users to browse and order pizzas,adding them to cart, and tracking orders post-purchase. Developed using React Router for routing and data loading, Redux for state management. Styling is done using Tailwind. Future updates may include mobile responsiveness to enhance usability.",
    code: "fast-pizza",
    app: "sk-fast-pizza",
    key: "react",
  },
  {
    title: "usePopcorn",
    year: "2024",
    img: "usepopcorn",
    tags: ["React", "OMDb API"],
    desc: "This app lets users search for movies, rate them, and keep track of watched movies. It integrates with the OMDb API to provide comprehensive movie data. Built with React and utilizing local storage for data persistence, it ensures a seamless and responsive user experience. Users can easily find information about their favorite movies, leave ratings, and maintain a personalized watchlist, even after closing the app, enhancing their movie-watching experience.Future updates may include mobile responsiveness to enhance usability.",
    code: "usepopcorn",
    app: "sk-usepopcorn",
    key: "react",
  },
  {
    title: "React Quiz",
    year: "2024",
    img: "react-quiz",
    tags: ["React", "Context API"],
    desc: "This React quiz app challenges users with timed quizzes while keeping track of their high scores. Built using React Context for efficient state management, the app updates high scores after each attempt, providing a dynamic and engaging user experience. The built-in timer adds an extra layer of excitement, encouraging users to think quickly and accurately.Future updates may include mobile responsiveness to enhance usability.",
    code: "react-quiz-context-api",
    app: "sk-react-quiz",
    key: "react",
  },
  {
    title: "Redux Bank",
    year: "2024",
    img: "redux-bank-rtk",
    tags: ["React", "Redux Toolkit"],
    desc: "A small application that mimics bank functionality like money deposit, withdrawl, requesting and paying loans.It is built using modern React Toolkit.Future updates may include mobile responsiveness to enhance usability.",
    code: "redux-bank-rtk",
    app: "sk-redux-bank-rtk",
    key: "react",
  },
  {
    title: "Pig Game",
    year: "2023",
    img: "pig-game",
    tags: ["Vanilla JS"],
    desc: 'A digital rendition of the classic dice game "Pig" where players take turns rolling a dice to accumulate points without rolling a 1. Player to reach 20 points first wins the game. Features include interactive dice rolling, turn-based gameplay, score tracking, and win detection. Built using HTML, CSS, and JavaScript for a fun and engaging user experience.Future updates may include mobile responsiveness to enhance usability.',
    code: "pig-game",
    app: "sk-game",
    key: "vanilla-js",
  },
  {
    title: "Mapty",
    year: "2023",
    img: "mapty",
    tags: ["Vanilla JS"],
    desc: "Mapty is a vanilla JavaScript web application for tracking running and cycling exercises. It features interactive maps powered by the Leaflet library, allowing users to log activities, visualize exercise routes, and monitor workout statistics with ease.Future updates may include mobile responsiveness to enhance usability.",
    code: "mapty",
    app: "sk-mapty",
    key: "vanilla-js",
  },
  {
    title: "Minionese",
    year: "2022",
    img: "minionese",
    tags: ["Vanilla JS", "Fun translations API"],
    desc: "The Minion Translator is a fun web application built with vanilla JavaScript that converts English text into Minion language using the FunTranslations API. Users can enter phrases, which are then translated into whimsical Minion-speak instantly. Ideal for fans of the Despicable Me series looking to add a playful twist to their conversations.",
    code: "translate-to-minionese",
    app: "sk-minionese",
    key: "vanilla-js",
  },
];

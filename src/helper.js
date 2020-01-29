import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaJava,
  FaAndroid,
  FaNpm,
  FaMicrosoft,
  FaPython,
  FaDatabase,
  FaCode,
  FaBootstrap,
  FaGithubSquare,
  FaPhp,
  FaGithub,
  FaEnvelope,
  FaMobile,
  FaTwitter
} from "react-icons/fa";

export const contentText = {
  about:
    "I am a Junior Software Developer. I have experience in Web and Mobile development. I am currently doing random projects with JavaScript, React and Node and all other tools that are needed. My favourite programming language is JavaScript which I am still learning, I have also used Java a lot mainly in school projects. I am an open person who values cooperation and teamwork and I would like to participate in interesting projects to deliver precisely customer's expectations.",
  skills: {
    heading1: "Skill level Good",
    heading2: "Skill level Intermediate/Basic",
    good: [
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaReact />, name: "Reactjs" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <FaSass />, name: "SASS" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaAndroid />, name: "Android" }
    ],
    intern: [
      { icon: <FaDatabase />, name: "MySQL" },
      { icon: <FaDatabase />, name: "MongoDB" },
      { icon: <FaBootstrap />, name: "Bootrap" },
      { icon: <FaGithubSquare />, name: "Git/GitHub" },
      { icon: <FaCode />, name: "Material-UI" },
      { icon: <FaNpm />, name: "Expressjs" },
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <FaMicrosoft />, name: "C#" },
      { icon: <FaCode />, name: "C++" },
      { icon: <FaPython />, name: "Python" }
    ]
  },
  projects: [
    {
      name: "client website",
      description:
        "A client project. Used Reactjs Frontend, PHP backend and MySQL database.",
      link: "http://pohjoissomalialainen.com/"
    },
    {
      name: "shopping list",
      description:
        "A simple console application in Java. You can add a new item, update an existing one, delete, check if an item is available and show all items.",
      link: "https://github.com/WaryaWaxbaro/shoppingList"
    },
    {
      name: "share a joke",
      description:
        "Share a Joke is a MERN stack application that display's current weather in any city in the world by searching and shows list a of jokes that were submitted. Jokes can be edited and removed.",
      link: "https://joke-weather-api.herokuapp.com/"
    },
    {
      name: "word educator",
      description:
        "Baro word educator is an application that displays images and it's corresponding names in different languages. Used React and Material-UI.",
      link: "https://waryawaxbaro.github.io/Baro-word-educator/#/"
    },
    {
      name: "jar game",
      description:
        "Jar Kabood is a game that the player moves over its opponent's objects. The player gets a point if it moves over and the opponent loses a soldier. Used HTML, CSS and JavaScript ES5.",
      link: "https://waryawaxbaro.github.io/portofolio/jarkabood.html"
    },
    {
      name: "my city",
      description:
        "MyCity is a web application where a user can submit their favourite image of their city. Used Nodejs, Express, MongoDB, Passportjs and Bootstrap.",
      link: "https://stormy-dawn-25100.herokuapp.com/cities"
    },
    {
      name: "cibada",
      description:
        "A client project that displays daily timetables. Used JavaScript ES6, SASS, HTML and JSON.",
      link: "http://cibada.com/"
    },
    {
      name: "lights out",
      description:
        "Lights Out is a game that toggles patterns resembling light on and light off states. Used Reactjs and CSS.",
      link: "https://waryawaxbaro.github.io/lightsout/"
    },
    {
      name: "menu & weather",
      description:
        "A mobile application that displays OAMK's daily menu and weather forecast for that day. Android with Java.",
      link: "https://github.com/WaryaWaxbaro/menuweather"
    },
    {
      name: "bluetooth app",
      description:
        "Bluetooth photo-sharing app is an application that helps to send and receive images through Bluetooth. This was a school project and we did as a group. Used Android with Java.",
      link: "https://github.com/WaryaWaxbaro/bt-image-app-code"
    },
    {
      name: "door sensor",
      description:
        "This is a Raspberry PI project that detects movement around the main door of a house, it captures images and sends via Telegram.",
      link: "https://github.com/WaryaWaxbaro/DoorBell"
    }
  ],
  contact: [
    { icon: <FaEnvelope />, name: "t5haab00@students.oamk.fi" },
    { icon: <FaMobile />, name: "O458937270" },
    { icon: <FaGithub />, name: "https://github.com/WaryaWaxbaro" },
    { icon: <FaTwitter />, name: "shakurHssn" }
  ]
};

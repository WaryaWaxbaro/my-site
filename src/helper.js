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
  FaPhp,
  FaGithub,
  FaEnvelope,
  FaMobile,
  FaTwitter,
  FaVuejs,
  FaLaravel,
  FaCircle,
} from "react-icons/fa";

export const contentText = {
  about: [
    "I am a Full Stack Web Developer. I have experience in Ruby on Rails, JavaScript, React, Vue, Bootstrap, Tailwind, CSS and HTML. Currently working in Motor Vehicle Industry as a Web Developer. I manage several applications, including legacy apps and other apps that I have built from scratch.",
    "This website is built with React and CSS/SCSS. This is one of my first websites that I have built at the start of my career. Although I have gained much experience over the years, I like the simplicity of this website and I have decided to keep it as it is. It shows how far I have come as a developer.",
  ],
  skills: {
    heading1: "Currently Using",
    heading2: "Used before / Little Usage",
    good: [
      { icon: <FaCircle />, name: "Ruby on Rails" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaCircle />, name: "Nextjs" },
      { icon: <FaReact />, name: "Reactjs" },
      { icon: <FaVuejs />, name: "Vuejs" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaBootstrap />, name: "Bootsrap" },
      { icon: <FaCircle />, name: "Tailwind" },
      { icon: <FaCss3 />, name: "CSS" },
      { icon: <FaSass />, name: "SASS" },
      { icon: <FaDatabase />, name: "PostgreSQL" },
      { icon: <FaDatabase />, name: "Firebase/Firestore" },
    ],
    intern: [
      { icon: <FaLaravel />, name: "Laravel" },
      { icon: <FaPhp />, name: "PHP" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaAndroid />, name: "Android" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaDatabase />, name: "MySQL" },
      { icon: <FaDatabase />, name: "MongoDB" },
      { icon: <FaCode />, name: "Material-UI" },
      { icon: <FaNpm />, name: "Expressjs" },
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaMicrosoft />, name: "C#" },
      { icon: <FaPython />, name: "Python" },
    ],
  },
  projects: [
    {
      name: "Travel Agency website",
      description:
        "Client project. SPA website. Used Vuejs, Tailwind, HTML and CSS.",
      link: "https://trans-globaltravel.com/",
    },
    {
      name: "Property website",
      description:
        "Client project. Used Nextjs, Reactjs, Bootstrap, HTML and CSS. Firebase/Firestore for database and authentication.",
      link: "https://www.gurikiro.com/",
    },
    {
      name: "Real Estate website",
      description: "A client project. Used Ruby on Rails, Vuejs, Bootstrap.",
      link: "https://www.kodishamlango.com/",
    },
    {
      name: "client website",
      description:
        "A client project. Used Reactjs Frontend, PHP backend and MySQL database.",
      link: "http://pohjoissomalialainen.com/",
    },
    {
      name: "shopping list",
      description:
        "A simple console application in Java. You can add a new item, update an existing one, delete, check if an item is available and show all items.",
      link: "https://github.com/WaryaWaxbaro/shoppingList",
    },
    {
      name: "share a joke",
      description:
        "Share a Joke is a MERN stack application that display's current weather in any city in the world by searching and shows list a of jokes that were submitted. Jokes can be edited and removed.",
      link: "https://joke-weather-api.herokuapp.com/",
    },
    {
      name: "word educator",
      description:
        "Baro word educator is an application that displays images and it's corresponding names in different languages. Used React and Material-UI.",
      link: "https://waryawaxbaro.github.io/Baro-word-educator/#/",
    },
    {
      name: "jar game",
      description:
        "Jar Kabood is a game that the player moves over its opponent's objects. The player gets a point if it moves over and the opponent loses a soldier. Used HTML, CSS and JavaScript ES5.",
      link: "https://waryawaxbaro.github.io/portofolio/jarkabood.html",
    },
    {
      name: "my city",
      description:
        "MyCity is a web application where a user can submit their favourite image of their city. Used Nodejs, Express, MongoDB, Passportjs and Bootstrap.",
      link: "https://stormy-dawn-25100.herokuapp.com/cities",
    },
    {
      name: "cibada",
      description:
        "A client project that displays daily timetables. Used JavaScript ES6, SASS, HTML and JSON.",
      link: "http://cibada.com/",
    },
    {
      name: "lights out",
      description:
        "Lights Out is a game that toggles patterns resembling light on and light off states. Used Reactjs and CSS.",
      link: "https://waryawaxbaro.github.io/lightsout/",
    },
    {
      name: "menu & weather",
      description:
        "A mobile application that displays OAMK's daily menu and weather forecast for that day. Android with Java.",
      link: "https://github.com/WaryaWaxbaro/menuweather",
    },
    {
      name: "bluetooth app",
      description:
        "Bluetooth photo-sharing app is an application that helps to send and receive images through Bluetooth. This was a school project and we did as a group. Used Android with Java.",
      link: "https://github.com/WaryaWaxbaro/bt-image-app-code",
    },
    {
      name: "door sensor",
      description:
        "This is a Raspberry PI project that detects movement around the main door of a house, it captures images and sends via Telegram.",
      link: "https://github.com/WaryaWaxbaro/DoorBell",
    },
  ],
  contact: [
    { icon: <FaEnvelope />, name: "contact@shakurhassan.com" },
    { icon: <FaMobile />, name: "O458******" },
    { icon: <FaGithub />, name: "https://github.com/WaryaWaxbaro" },
    { icon: <FaTwitter />, name: "shakurHssn" },
  ],
};

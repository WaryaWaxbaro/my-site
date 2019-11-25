import React from 'react';
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
  FaEnvelope,
  FaMobile,
  FaTwitter
} from 'react-icons/fa';

export const contentText = {
  about: 'I am a junior Software Developer. I have experience in Web and Mobile development. I am currently doing random projects with JavaScript, React and Node. My favourite programming language is JavaScript which I am still learning. I like using React for my personal projects because it is straight forward, I just need to close every open tag of a Component, or I will get a warning for not doing so.',
  skills: {
    heading1: 'Skill level Good',
    heading2: 'Skill level Intermediate/Basic',
    good: [
      {icon: <FaJsSquare />, name: 'JavaScript'},
      {icon: <FaReact />, name: 'Reactjs'},
      {icon: <FaNodeJs />, name: 'Node.js'},
      {icon: <FaHtml5 />, name: 'HTML'},
      {icon: <FaCss3 />, name: 'CSS'},
      {icon: <FaSass />, name: 'SASS'},
      {icon: <FaJava />, name: 'Java'},
      {icon: <FaAndroid />, name: 'Android'}
    ],
    intern: [
      {icon: <FaNpm />, name: 'Expressjs'},
      {icon: <FaMicrosoft/>, name: 'C#'},
      {icon: <FaCode/>, name: 'C++'},
      {icon: <FaPython/>, name: 'Python'},
      {icon: <FaDatabase/>, name: 'MySQL'},
      {icon: <FaDatabase/>, name: 'MongoDB'},
      {icon: <FaBootstrap/>, name: 'Bootrap'},
      {icon: <FaGithubSquare/>, name: 'Git/GitHub'},
      {icon: <FaCode/>, name: 'Material-UI'}
    ]
  },
  projects: [
    {name: 'Share a joke', description: 'Share a Joke a MERN stack application that display\'s current weather of a specific city and shows list of jokes that was submitted.', link: 'https://joke-weather-api.herokuapp.com/'},
    {name: 'my city', description: 'MyCity is a web application where a user can submit their favourite image of their city.', link: 'https://stormy-dawn-25100.herokuapp.com/cities'},
    {name: 'cibada', description: 'A client project that displays daily timetables.', link: 'http://cibada.com/'},
    {name: 'lights out', description: 'Lights Out is a game that toggles patterns resembling light on and light off states.', link: 'https://waryawaxbaro.github.io/lightsout/'},
    {name: 'menu & weather', description: 'A mobile application that displays OAMK\'s daily menu and weather forecast for that day.', link: 'https://github.com/WaryaWaxbaro/menuweather'},
    {name: 'Bluetooth app', description: 'Bluetooth photo-sharing app is an application that helps to send and receive images through Bluetooth. This was a school project and we did as a group.', link: 'https://github.com/WaryaWaxbaro/bt-image-app-code'},
    {name: 'Door sensor', description: 'This is a Raspberry PI project that detects movement around the main door of a house, it captures images and sends via Telegram.', link: 'https://github.com/WaryaWaxbaro/DoorBell'},
  ],
  contact: [
    {icon: <FaEnvelope/>, name: 't5haab00@students.oamk.fi'},
    {icon: <FaMobile/>, name: 'O458937270'},
    {icon: <FaTwitter/>, name: 'shakurHssn'}
  ]
};
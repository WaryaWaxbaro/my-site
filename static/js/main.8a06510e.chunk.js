(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/profile.4a669a4b.png"},24:function(e,a,t){e.exports=t(46)},29:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),i=t(9),m=(t(29),t(10)),o=["about","skills","project","contact"];var s=function(e){var a=e.active?{transform:"translate(0, -50%)"}:{transform:"translate(100%, -50%)"};return l.a.createElement("ul",{className:"Nav__list",style:a},o.map((function(e,a){return l.a.createElement("li",{className:"Nav__list--item",key:a},l.a.createElement(i.b,{activeClassName:"Nav__list--item-active",className:"Nav__list--item-link",to:"/".concat(e)},e))})))},u=function(e){var a=Object(n.useState)(e),t=Object(m.a)(a,2),l=t[0],c=t[1];return[l,function(){c(!l)}]},d=t(1);function p(){var e=u(!1),a=Object(m.a)(e,2),t=a[0],n=a[1];return l.a.createElement("nav",{className:"Nav"},l.a.createElement("div",{className:"Nav__content"},l.a.createElement("div",{className:"Nav__icon"},l.a.createElement("span",{onClick:n},t?l.a.createElement(d.s,null):l.a.createElement(d.b,null))),l.a.createElement(s,{active:t})))}var E=t(22),h=t.n(E);function v(){return l.a.createElement("div",{className:"Info"},l.a.createElement("div",{className:"Info__content"},l.a.createElement("div",{className:"Info__content--img"},l.a.createElement("img",{className:"Info__content--img-1",src:h.a,alt:"profile"})),l.a.createElement("div",{className:"Info__content--text"},l.a.createElement("h1",{className:"Info__content--text-heading-1"},"Abdishakur Hassan"),l.a.createElement("h1",{className:"Info__content--text-heading-2"},"Web & mobile developer"))))}var g={about:"I am a junior Software Developer. I have experience in Web and Mobile development. I am currently doing random projects with JavaScript, React and Node. My favourite programming language is JavaScript which I am still learning. I like using React for my personal projects because it is straight forward, I just need to close every open tag of a Component, or I will get a warning for not doing so.",skills:{heading1:"Skill level Good",heading2:"Skill level Intermediate/Basic",good:[{icon:l.a.createElement(d.k,null),name:"JavaScript"},{icon:l.a.createElement(d.q,null),name:"Reactjs"},{icon:l.a.createElement(d.n,null),name:"Node.js"},{icon:l.a.createElement(d.i,null),name:"HTML"},{icon:l.a.createElement(d.e,null),name:"CSS"},{icon:l.a.createElement(d.r,null),name:"SASS"},{icon:l.a.createElement(d.j,null),name:"Java"},{icon:l.a.createElement(d.a,null),name:"Android"}],intern:[{icon:l.a.createElement(d.o,null),name:"Expressjs"},{icon:l.a.createElement(d.l,null),name:"C#"},{icon:l.a.createElement(d.d,null),name:"C++"},{icon:l.a.createElement(d.p,null),name:"Python"},{icon:l.a.createElement(d.f,null),name:"MySQL"},{icon:l.a.createElement(d.f,null),name:"MongoDB"},{icon:l.a.createElement(d.c,null),name:"Bootrap"},{icon:l.a.createElement(d.h,null),name:"Git/GitHub"},{icon:l.a.createElement(d.d,null),name:"Material-UI"}]},projects:[{name:"my city",description:"MyCity is a web application where a user can submit their favourite image of their city.",link:"https://stormy-dawn-25100.herokuapp.com/cities"},{name:"cibada",description:"A client project that displays daily timetables.",link:"http://cibada.com/"},{name:"lights out",description:"Lights Out is a game that toggles patterns resembling light on and light off states.",link:"https://waryawaxbaro.github.io/lightsout/"},{name:"menu & weather",description:"A mobile application that displays OAMK's daily menu and weather forecast for that day.",link:"https://github.com/WaryaWaxbaro/menuweather"},{name:"Bluetooth app",description:"Bluetooth photo-sharing app is an application that helps to send and receive images through Bluetooth. This was a school project and we did as a group.",link:"https://github.com/WaryaWaxbaro/bt-image-app-code"},{name:"Door sensor",description:"This is a Raspberry PI project that detects movement around the main door of a house, it captures images and sends via Telegram.",link:"https://github.com/WaryaWaxbaro/DoorBell"}],contact:[{icon:l.a.createElement(d.g,null),name:"t5haab00@students.oamk.fi"},{icon:l.a.createElement(d.m,null),name:"O458937270"},{icon:l.a.createElement(d.t,null),name:"shakurHssn"}]};function f(){var e=g.about;return l.a.createElement("div",{className:"About"},l.a.createElement("h1",{className:"heading"},"About me"),l.a.createElement("p",{className:"paragraph"},e))}var N=function(e){var a=e.list;return l.a.createElement("ul",{className:"list"},a.map((function(e,a){return l.a.createElement("li",{className:"list__item",key:a},l.a.createElement("div",{className:"list__item-icon"},e.icon),l.a.createElement("div",{className:"list__item-skill"},e.name))})))};function _(){var e=g.skills,a=e.heading1,t=e.heading2,n=e.good,c=e.intern;return l.a.createElement("div",{className:"Skills"},l.a.createElement("h1",{className:"heading"},"skills"),l.a.createElement("div",null,l.a.createElement("h2",{className:"heading-sub"},a),l.a.createElement(N,{list:n}),l.a.createElement("h2",{className:"heading-sub"},t),l.a.createElement(N,{list:c})))}function b(){var e=g.projects;return l.a.createElement("div",{className:"Project"},l.a.createElement("h1",{className:"heading"},"projects"),l.a.createElement("div",{className:"Project__item"},e.map((function(e,a){return l.a.createElement("div",{className:"Project__item--content",key:a},l.a.createElement("h1",{className:"Project__item--content-h1"},e.name),l.a.createElement("p",{className:"Project__item--content-p"},e.description),l.a.createElement("a",{className:"Project__item--content-a",href:e.link,target:"blank"},"View"))}))))}function k(){var e=g.contact;return l.a.createElement("div",{className:"Contact"},l.a.createElement("h1",{className:"heading"},"Contact"),l.a.createElement(N,{list:e}))}var y=t(23),j=t.n(y);function w(e){var a=e.name,t=(e.location,e.children,"about"===a?l.a.createElement(f,{key:1}):"skills"===a?l.a.createElement(_,{key:4}):"project"===a?l.a.createElement(b,{key:2}):"contact"===a?l.a.createElement(k,{key:3}):l.a.createElement(f,null));return l.a.createElement("div",{className:"Pages"},l.a.createElement(j.a,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},t))}var I=function(e){var a=e.name;return l.a.createElement("div",{className:"Scrollable"},l.a.createElement(w,{name:a}))};function x(e){var a=e.match.params.name;return l.a.createElement("div",{className:"Container"},l.a.createElement(v,null),l.a.createElement(I,{name:a}))}function S(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",{className:"Footer__text"},l.a.createElement("span",{className:"Footer__text--copyright"},"\xa9")," ",(new Date).getFullYear(),". all rights reserved"))}var C=t(7);var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(C.c,null,l.a.createElement(C.a,{exact:!0,path:["/","/:name"],render:function(e){return l.a.createElement(x,e)}})),l.a.createElement(S,null))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(A,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8a06510e.chunk.js.map
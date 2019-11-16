import React from 'react';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

export default function Pages({name}){
    const currentPage = (name) => {
        switch(name){
            case 'about':
                return <About />
            case 'skills':
                return <Skills />
            case 'project':
                return <Project />
            case 'contact':
                return <Contact />
            default:
                return <About />
        }
    }
    return(
        <div className='Pages'>
            {currentPage(name)}
        </div>
    );
}
import React from 'react';
import {NavLink} from 'react-router-dom';

const linkNames = ['about', 'skills', 'project', 'contact'];

export default function Nav(){
    return(
        <nav className='Nav'>
            <ul className='Nav__list'>
                {linkNames.map((name, index) => (
                    <li className='Nav__list--item' key={index}>
                        <NavLink activeClassName='Nav__list--item-active' className='Nav__list--item-link' to={`/${name}`}>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
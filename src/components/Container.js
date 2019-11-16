import React from 'react';
import Info from './Info';
import Pages from './Pages';

export default function Container(props){
    let name = props.match.params.name;
    return(
        <div className='Container'>
            <Info />
            <Pages name={name} />
        </div>
    )
}
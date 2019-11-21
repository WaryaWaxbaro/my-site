import React from 'react';
import Info from './Info';
import Scrollable from './Scrollable';

export default function Container(props){
    let name = props.match.params.name;
    return(
        <div className='Container'>
            <Info />
            <Scrollable name={name} />
        </div>
    )
}
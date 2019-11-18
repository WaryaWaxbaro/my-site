import React from 'react';
import List from "./List";
import { contentText } from "../helper";

export default function Contact(){
    const {contact} = contentText;
    return(
        <div className='Contact'>
            <h1 className="heading">Contact</h1>
            <List list={contact} />
        </div>
    );
}
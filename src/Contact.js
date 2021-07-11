import React from 'react';
import './App.css';
import Details from './Details';

function Contact(){
    return(
        <div className="contact">
            <div className="left"><a href="https://www.facebook.com/minions/" target="_blank"><img src="minionContact.png" alt="Minion" className="homeImg"></img></a></div>
            <div className="right"><h1 className="headingText">Contact</h1>
            <Details name="Neha A" id='20181CCE0061' section="6CCE2"/>
            <h3>Email : <a className="email" href="mailto:201810102117@presidencyuniversity.in">neha@presidencyuniversity</a></h3>
            <h3>School : School Of Engineering</h3>
            <h3>Course : Computer And Communication</h3>
            <h3>Subject : Front-End Web Development With React</h3>
            <h3>React App 1</h3>
            </div>
           
        </div>
    )
}

export default Contact;
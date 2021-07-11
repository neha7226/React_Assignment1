import React from 'react';
import './App.css';
import MinionNames from './MinionNames';

function Home(){
    return(
        <div className="home">
            <div className="left"><a href="https://www.youtube.com/watch?v=PjfP2tmjtQM" target="_blank"><img src="minionHome.png" alt="Minion" className="homeImg"></img></a></div>
            <div className="right"><h1 className="headingText">Home</h1>
            <p className="para">
            Minions Kevin, Stuart and Bob decide to find a new master. They embark on a global trip and meet Scarlett Overkill, a female super-villain who recruits them and hatches a plan to take over the world.

            </p>
            <h2>Characters:</h2>
                <MinionNames name="Bob" id='M01'/>
              <MinionNames name="Kevin" id='M02'/>
                <MinionNames name="Stuart" id='M03'/>
                <MinionNames name="Dave" id='M04'/>
                <MinionNames name="Phil" id='M05'/>
                <MinionNames name="Tim" id='M06'/>                
            </div>
        </div>
    )
}

export default Home;
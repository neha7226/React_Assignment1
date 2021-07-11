import React from 'react';
import './App.css';

function About(){
    return(
        <div className="about">
            <div className="rightA"><a href="https://www.minionsmovie.com/" target="_blank"><img src="minionAbout.png" alt="Minion" className="homeImg"></img></a></div>
            <div className="leftA" >< h2 className="headingText">About</h2>
            < p className="para">
            Minions (/ˈmɪnjənz/) are fictional yellow creatures that appear in the Despicable Me franchise, which started with Despicable Me (2010). They are characterized by their childlike behavior and unique language, which is almost intelligible at times.
            </p>
            <br></br>
            <p className="para">
            Following Comcast's purchase of NBCUniversal, they have been described as being a corporate icon for Universal and Comcast, on par with The Walt Disney Company's Mickey Mouse and Donald Duck, ViacomCBS' SpongeBob SquarePants, and WarnerMedia's Bugs Bunny and the Warner Siblings, although Woody Woodpecker is still considered a mascot for Universal Studios.
            </p>

            <p className="para">Click Here For More Details!! <a className="more"
            href="https://en.wikipedia.org/wiki/Minions_(Despicable_Me)" target="_blank">More Minions :) </a></p>
            </div>
        </div>
    )
}

export default About;
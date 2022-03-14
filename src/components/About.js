import React from 'react';

export function About() {
    return(
        <main>
            <h1 className="aboutHeader">Who are we?</h1>
            <p className="aboutText">We are INFO 340 Group 9: Quang, Vivian, Winni and Kaarina.</p>
            <figure>
                <img src="./img/cats.png" alt="four small kittens" aria-label="four small kittens that represent the group" width="325" height="250" className="catImg"/>
                <figcaption>Note: We are not actually cats, this is just a representation of our group.</figcaption>
            </figure>
            <h2 className="aboutHeader">Why sustainability?</h2>
            <p className="aboutText"> We wanted to make a sustainability focused website because we think that climate change is a pressing issue in our day and age.</p>
            <h3 className="aboutHeader">What can I do on your website?</h3>
            <p className="aboutText">Our app allows you to track your daily habits and provides a score for how environmentally friendly you are. You can also take quizzes on environmental trivia and test your knowledge!</p>
        </main>
    )
}
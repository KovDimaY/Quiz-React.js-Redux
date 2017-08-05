// Node modules import
import React, { Component } from 'react';

// About page
export default class AboutPage extends Component {
  render() {
    return (
      <div className='about-page'>
        <h1 className='title'>Rules of the "game"</h1>

        <p>
          The idea of the game is to answer random questions, composing them
          from a set of characters. Every question has a certain amount of
          points and the goal is to collect as many points as the user can. The
          game is not limited by time, lives or other kinds of limitation (yet),
          but my idea for the future is to limit one session by 5 minutes or so.
        </p>

        <p>
          The user can make as many guesses as he wants without any punishment
          until the moment when the answer will be correct. But in case if the
          user will decide to skip a question, he will lose a certain amount
          of points. Note, that the number of points cannot be negative -
          I am not so cruel :)
        </p>

        <p>
          During the answer generation, the user should use all the characters
          from the lower area, there are no "wrong" ones. If after moving
          (by clicking on a character) of all the characters the user sees
          green colors and positive message - then the answer is correct and
          it is possible to move forward. If colors are red and message is not
          so optimistic - the user can move some characters back and try again
          until the answer will be correct.
        </p>

        <p>
          Actually, this is it. Play the "game", good luck and have a
          lot of pleasure! :D
        </p>

        <h1 className='title2'>Technical side</h1>

        <p>
          This project was created to practice my knowledge about react,
          node and express. But more importantly, I wanted to learn and
          understand better the principles of redux with its actions and
          reducers. Also, this is my first full stack project, that I
          am going to deploy on production (I think it will
          be <a target="_blank" href="https://www.heroku.com/">Heroku</a>, but
          I am not sure yet). So if you read this,
          I am glad that everything finally happened! :D
        </p>

        <h3>API</h3>

        <p>
          To get the question I am using the API of
          the <a target="_blank" href="http://jservice.io/">jService</a>. It is
          about 156,800 Trivia Questions on different topics and of different
          complexity levels. For the moment I am using only <b>/random</b> part,
          that gives me one random question from random category and of random
          difficulty. But I had an idea to create a possibility for
          the user to choose a category (from 4 random options for example)
          first and then it will give the question from this category. Note,
          that all the questions created by different people, with different
          intelligence, mood, knowledge, tidiness etc. So sometimes, questions
          and answers look pretty strange. But in general, it is really fun
          at least for some little time :)
        </p>

        <h3>Backend</h3>

        <p>
          Backend part of this project was created with Node.js and web
          application framework Express. It does not have any complex
          computations, validations or databases, so backend part is
          pretty simple in this project. Even routing handles more by React
          Router than by backend.
        </p>

        <h3 className=''>Frontend</h3>

        <p>
          This part was created using a combination of Redux and React.
          Redux is a predictable state container for JavaScript app and React
          is one of the most popular frameworks nowadays to create front end.
          Also to practice possibility of using different pages of the application
          was used React Router with a handling of 404 error page.
          For styling was used preprocessor SASS.
        </p>

        <div className='row'>
          <div className='col-xs-6'>
            <div className='logo back'>

            </div>
          </div>
          <div className='col-xs-6'>
            <div className='logo front'>

            </div>
          </div>
        </div>

        <h1 className='title2'>Aknowledgments</h1>

        <p>
          I created the base of this project following a tutorial
          of <a target="_blank" href="https://github.com/AlexPurhalo">Alex Purhalo</a>.
          His video lessons helped me a lot to understand how redux works and
          to put together all my knowledge about node, express, react, sass
          and work with APIs. I want to say thanks to him and to wish him a
          big success in his career.
        </p>

      </div>
    )
  }
}

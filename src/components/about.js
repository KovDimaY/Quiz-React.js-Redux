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
          I was born on May 20, 1992, in Verchniodniprovsk, Ukraine. Almost
          all my relatives were teachers at that time. My father was teacher
          of arts in a kinder garden, mother and her father were teachers of
          music, two grannies were teachers of math and English.
        </p>

        <h1 className='title'>Rules of the "game"</h1>

        <p>
          I was born on May 20, 1992, in Verchniodniprovsk, Ukraine. Almost
          all my relatives were teachers at that time. My father was teacher
          of arts in a kinder garden, mother and her father were teachers of
          music, two grannies were teachers of math and English.
        </p>

        <h1 className='title'>Rules of the "game"</h1>

        <p>
          I was born on May 20, 1992, in Verchniodniprovsk, Ukraine. Almost
          all my relatives were teachers at that time. My father was teacher
          of arts in a kinder garden, mother and her father were teachers of
          music, two grannies were teachers of math and English.
        </p>


      </div>
    )
  }
}

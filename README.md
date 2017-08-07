# Quiz-React.js

This project was created to practice my knowledge about **React**, **Node** and **Express**. But more importantly, I wanted to learn and understand better the principles of **Redux** with its *actions* and *reducers*. Also, this is my first full stack project, that is deployed on production at Heroku. 

Check it out here: https://vast-thicket-75327.herokuapp.com/


### Rules
The idea of the game is to answer random questions, composing them from a set of characters. Every question has a certain amount of points and the goal is to collect as many points as the user can. The game is not limited by time, lives or other kinds of limitation (yet), but my idea for the future is to limit one session by 5 minutes or so.

The user can make as many guesses as he wants without any punishment until the moment when the answer will be correct. But in case if the user will decide to skip a question, he will lose a certain amount of points. Note, that the number of points cannot be negative - I am not so cruel :)

During the answer generation, the user should use all the characters from the lower area, there are no "wrong" ones. If after moving (by clicking on a character) of all the characters the user sees green colors and positive message - then the answer is correct and it is possible to move forward. If colors are red and message is not so optimistic - the user can move some characters back and try again until the answer will be correct.


### Screenshots

1) Main page:
![screenshot at aug 03 00-52-25](https://user-images.githubusercontent.com/26466644/28918120-6bd5ef98-7848-11e7-8b55-d5c003d577ed.png)
![screenshot at aug 03 00-52-52](https://user-images.githubusercontent.com/26466644/28918126-6e4491b2-7848-11e7-814b-dae92fab7815.png)
![screenshot at aug 03 00-53-15](https://user-images.githubusercontent.com/26466644/28918129-700c8d10-7848-11e7-91e8-72428ea46162.png)

2) 404 - Page Not Found
![image](https://user-images.githubusercontent.com/26466644/28918251-de1ccc2a-7848-11e7-96bc-638ca3cd839c.png)


### Setup

```
$ git clone https://github.com/KovDimaY/Quiz-React.js-Redux.git
$ cd Quiz-React.js-Redux
$ npm install
```


### Run Development Environment
```
$ npm run dev
```


### Build bundle.js File and Start the Server
```
$ npm run postinstall
$ npm run start
```


### Deployment to Heroku

Make sure you have Node.js and the Heroku CLI installed amd write the next commands:
```
$ git clone git@github.com:###-your app-###
$ cd ###-your app-###
$ npm install
$ npm start
```

After this step your app should be running locally, it means that everything is ok and the app is ready for deployment. So to deploy it to Heroku, write the next commands:

```
$ heroku create
$ git push heroku master
$ heroku open
```
Congratulations, your app is deployed! :D 

For more details, visit https://devcenter.heroku.com/articles/getting-started-with-nodejs

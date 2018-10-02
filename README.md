# fullstack-website
upload full-stack website with Heroku + mongodb + mLab

# Previous knowledge and Preparation
 * knowledge: html, css (bootstrap), javascript, jquery and basics of node.js.
 * installitions: [node.js](https://nodejs.org/en/), [GitHub desktop](https://desktop.github.com/), [git](https://git-scm.com/) and code editor ([VS Code](https://code.visualstudio.com/) / [Sublime 3](https://www.sublimetext.com/)).
 * sign up: [Heroku](https://www.heroku.com/) + [mLab](https://mlab.com/).

# Instructions:
### initialization:
- [ ] clone this repo.
- [ ] run "npm install" on the repo folder.
- [ ] initialize PORT.
- [ ] run "npm start" and check all working => (http://localhost:8080/)
  
### work with Heroku:
- [ ] sign up to [Heroku](https://www.heroku.com/).
- [ ] create new app.
- [ ] connect to github repo.
- [ ] enable automatic deploy.
- [ ] initialize PORT.
- [ ] commit & push the code to GitHub -.then() check on Heroku app.

### work with mLab:
- [ ] sign up to [mLab](https://mlab.com/).
- [ ] create new DB. ('alerts')
- [ ] create new collection ('messages') with some documents ('{"id": 1, "msg": "Hello World", "counter": 0}').
- [ ] copy the MongoDB URI to 'index.js' file.
- [ ] add new user to the DB. (user: admin, password: myFirstWebinar1)
- [ ] modify the MongoDB - assign username + password.
- [ ] copy the MongoDB URI to 'Config Vars' in Heroku (MONGODB_URI : 'mongodb://admin:myFirstWebinar1@ds161112.mlab.com:61112/alerts')
- [ ] use nodemon - run "nodemon index.js"
- [ ] example 0 - alert Hello + {name} .
- [ ] example 1 - simple connection to mongoDB.
- [ ] example 2 - get the count of documents and return random msg.
- [ ] example 3 - create new doc.
- [ ] example 4 - update counter.

# fullstack-website
upload full-stack website with Heroku + mongodb + mLab

# Previous knowledge and Preparation
 * knowledge: html, css (bootsttrap), javascript, jquery and basics of node.js.
 * installitions: node.js, GitHub desktop, git and code editor (VS Code / Sublime 3).

# Instructions:
### initialization:
- [ ] clone this repo.
- [ ] run "npm install" on the repo folder.
- [ ] initialize PORT.
- [ ] run "npm start" and check all working => (http://localhost:8080/)
  
### work with Heroku:
- [ ] sign up to Heroku.
- [ ] create new app.
- [ ] connect to github repo.
- [ ] enable automatic deploy.
- [ ] commit & push the code to GitHub -.then() check on Heroku app.

### work with mLab:
- [ ] sign up to mLab.
- [ ] create new DB. ('alerts')
- [ ] create new collection ('messages') with some documents ('{"id": 1, "msg": "Hello World", "counter": 0}').
- [ ] add new user to the DB. (user: admin, password: myFirstWebinar1)
- [ ] modify the MongoDB - assign username + password.
- [ ] copy the MongoDB URI to 'index.js' file.
- [ ] copy the MongoDB URI to 'Config Vars' in Heroku (MONGODB_URI : mongodb://admin:myFirstWebinar1@ds161112.mlab.com:61112/alerts)
- [ ] example 0 - alert Hello + {name} .
- [ ] example 1 - simple connection to mongoDB.
- [ ] example 2 - get the count of documents and return random msg.
- [ ] example 3 - create new doc.
- [ ] example 4 - update counter.

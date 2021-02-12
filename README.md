# Code Challenge 10: The API Resume 

## Heroku link 
https://a4ayad-resume.herokuapp.com/

## Github repo
https://github.com/a4ayad/a4ayad-resume


## Description of my work:

In Code Challenge 9 I made a command-line version of my resume. In this Code Challenge I build the API version of my resume with express. 

'express' is a dependency in package.json file. It allows us to build our own backend
express is node framework for the backend

Added a `server` file [server.mjs] that brings in express and serves a route 
    (named the route the same name I gave your npx command. 

Added a home route ("/"). It gives instructions on how to use my API and promote my command-line resume. 

Exported my postman collection and saved it to my project. 

    Downloaded Postman app from postman.com 

Pushed my project into Github

Deployed my app to Heroku 


Starting point of the project which creates your package.json file. 

$ node --version
v15.3.0

$ npm --version
6.14.11


The npm command below updates package.json file:

$ npm init 
package name: (ahmed-resume) a4ayad-resume


$ yarn add express 

The above command creates node_modules/ folder if it doesn’t exist and adds express to package.json file. 


The node command below will display the content of console.log() from index.mjs. 

$ node index.mjs 



### Heroku

Downloaded and installed Heroku


$ heroku local web
    1:13:54 PM web.1 |  > node server.mjs
    1:13:55 PM web.1 |  App is starting now on 5000



Run heroku app locally
  Start the application specified by a Procfile (defaults to ./Procfile)

$ heroku local web
    web = PROCESSNAME

heroku login

To creates a new app
$ heroku create

git add . && git commit -m "<youMessage>" && git push && git push heroku main

git push heroku HEAD:master
heroku open

## JSON Resume
https://jsonresume.org/getting-started/



JSON Resume Exporter 
 Chrome extension to import your LinkedIn Profile.

 www.npmjs.com
www.npmjs.com/package/lodash
another way to import packages into API
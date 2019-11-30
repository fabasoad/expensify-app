# Expensify app
![](https://github.com/fabasoad/expensify-app/workflows/CI/badge.svg) ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_message=online&url=https%3A%2F%2Ffabasoad-expensify.herokuapp.com%2F) ![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Ffabasoad-expensify.herokuapp.com%2F)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/expensify-app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/expensify-app/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/expensify-app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/expensify-app/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/f383919b86a2fde12017/maintainability)](https://codeclimate.com/github/fabasoad/expensify-app/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)
![Code Climate issues](https://img.shields.io/codeclimate/issues/fabasoad/expensify-app) ![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/fabasoad/expensify-app) ![GitHub repo size](https://img.shields.io/github/repo-size/fabasoad/expensify-app)
## Description
Expensify app that is developed in scope of Udemy [The Complete React Developer Course (w/ Hooks and Redux)](https://www.udemy.com/course/react-2nd-edition/) course.
## Technologies

1. React 16.11.0
2. Redux 4.0.4
3. Webpack 4.41.2
4. Jest 24.9
5. Babel 7.6.4
6. Firebase 7.4.0
7. SCSS 8.0.0
## How to test and run app locally
```bash
git clone git@github.com:fabasoad/expensify-app.git
cd expensify-app
yarn install
yarn test
yarn run dev-server
```
Go to http://localhost:8080/ and be sure that app is running.
## How to connect to the Firebase
1. Create 2 new applications in Firebase (test and development).
2. Turn on Google Authentication in each project.
3. Create a Realtime-Database with the following rules in each project:
```javascript
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        /* Insert project specific fields validations here */
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```
4. Create 2 files in a root of a project with the following names:
    1. `.env.test` - contains database settings for automation tests purposes.
    2. `.env.development` - contains database settings for development purposes.

Example of `.env.*` file: 
```bash
FIREBASE_API_KEY="some-key"
FIREBASE_AUTH_DOMAIN="project-id.firebaseapp.com"
FIREBASE_DATABASE_URL="https://project-id.firebaseio.com"
FIREBASE_PROJECT_ID="project-id"
FIREBASE_STORAGE_BUCKET="project-id.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="1234567890"
FIREBASE_APP_ID="app-id"
FIREBASE_MEASUREMENT_ID="some-id"
```
## How to deploy to Heroku
1. Install Heroku CLI.
2. Run the following commands:
```bash
git clone git@github.com:fabasoad/expensify-app.git
cd expensify-app
heroku login
git remote add heroku https://git.heroku.com/fabasoad-expensify.git
git push heroku master
```
3. Go to https://fabasoad-expensify.herokuapp.com/ and be sure that up-to-date version of an app is deployed.

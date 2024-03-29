# Expensify app

> ⚠️ This project is archived and no longer supported. Associated Heroku deployment and Firebase DB have been removed.

![CI](https://github.com/fabasoad/expensify-app/workflows/CI/badge.svg) ![Security Tests](https://github.com/fabasoad/expensify-app/workflows/Security%20Tests/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/expensify-app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/expensify-app/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/expensify-app.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/expensify-app/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/f383919b86a2fde12017/maintainability)](https://codeclimate.com/github/fabasoad/expensify-app/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage) ![Code Climate issues](https://img.shields.io/codeclimate/issues/fabasoad/expensify-app) ![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/fabasoad/expensify-app) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/expensify-app/badge.svg)](https://snyk.io/test/github/fabasoad/expensify-app) ![GitHub repo size](https://img.shields.io/github/repo-size/fabasoad/expensify-app)

## Description

Expensify app that is developed in scope of Udemy [The Complete React Developer Course (w/ Hooks and Redux)](https://www.udemy.com/course/react-2nd-edition/) course.

## Technologies

1. React
2. Redux
3. Webpack
4. Jest
5. Babel
6. Firebase
7. SCSS

## How to test and run app locally

```bash
git clone git@github.com:fabasoad/expensify-app.git
cd expensify-app
yarn install
yarn test
yarn run start:dev
```

Go to <http://localhost:8080/> and be sure that app is running.

## How to connect to the Firebase

- Create 2 new applications in Firebase (test and development).
- Turn on Google Authentication in each project.
- Create a Realtime-Database with the following rules in each project:

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

- Create 2 files in a root of a project with the following names:
  - `.env.test` - contains database settings for automation tests purposes.
  - `.env.development` - contains database settings for development purposes.

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

- Install Heroku CLI.
- Run the following commands:

```bash
git clone git@github.com:fabasoad/expensify-app.git
cd expensify-app
heroku login
git remote add heroku https://git.heroku.com/fabasoad-expensify.git
git push heroku master
```

- Go to <https://fabasoad-expensify.herokuapp.com/> and be sure that up-to-date version of an app is deployed.

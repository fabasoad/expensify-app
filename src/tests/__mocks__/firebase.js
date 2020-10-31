const firebase = jest.requireActual('firebase');

export default class FirebaseMock {
  static analytics() {}
  static auth = firebase.auth;
  static database = firebase.database;
  static initializeApp = firebase.initializeApp;
}

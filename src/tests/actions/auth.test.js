import firebase from 'firebase';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

let signInWithPopupSpy, signOutSpy;

beforeEach(() => {
  signInWithPopupSpy = jest.fn();
  signOutSpy = jest.fn();
  jest.spyOn(firebase, 'auth').mockImplementation(() => ({
    signInWithPopup: signInWithPopupSpy,
    signOut: signOutSpy
  }));
});

test('should generate login action object', () => {
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should start login with popup', () => {
  startLogin()();
  expect(signInWithPopupSpy).toHaveBeenLastCalledWith(
    expect.objectContaining({
      providerId: 'google.com'
    }));
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});

test('should start log out process', () => {
  startLogout()();
  expect(signOutSpy).toHaveBeenCalledTimes(1);
});
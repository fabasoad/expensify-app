import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});

test('should return the same state in case of invalid action type', () => {
    const action = {
        type: 'abc123'
    };
    const expectedState = { uid: 'anything' };
    const actualState = authReducer(expectedState, action);
    expect(expectedState).toEqual(actualState);
});
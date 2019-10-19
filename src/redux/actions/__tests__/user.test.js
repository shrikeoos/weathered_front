import { loginUserAction, logoutUserAction, updateUserAction } from '../user';
import { LOG_USER_IN, LOG_USER_OUT, USER_UPDATE } from '../../actionTypes';

describe('user action', () => {
  describe('loginUserAction', () => {
    it('should return an action with the id, the username and the email of the successfully logged in user', () => {
      expect(loginUserAction({ id: 0, username: 'test', email: 'email' })).toEqual({
        type: LOG_USER_IN,
        payload: { id: 0, username: 'test', email: 'email' },
      });
    });
  });

  describe('logoutUserAction', () => {
    it('should return an action that will reset the state of user', () => {
      expect(logoutUserAction()).toEqual({
        type: LOG_USER_OUT,
        payload: { email: '', username: '', id: -1 },
      });
    });
  });

  describe('updateUserAction', () => {
    it('should return an action with the new user information', () => {
      expect(updateUserAction({ id: 0, username: 'newUsername', email: 'email' })).toEqual({
        type: USER_UPDATE,
        payload: { id: 0, username: 'newUsername', email: 'email' },
      });
    });
  });
});

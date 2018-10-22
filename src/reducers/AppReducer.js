import immutable from 'seamless-immutable';
import { Type as AuthActions } from '../actions/AuthActions';


export const INITIAL_STATE = immutable({
    token: null,
    logInFailed: false,
    checkingCredentials: false,
    loginSuccess: false,
    user: {},
});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case AuthActions.SET_INITIAL_STATE: {
            let componentToSetInitialState = {};
            let value = INITIAL_STATE[action.data];
            componentToSetInitialState[action.data] = value;
            return state.merge({ ...componentToSetInitialState });
            break;
        }

        case AuthActions.LOGOUT:
            localStorage.clear();
            window.location.replace(window.location.origin);
            return INITIAL_STATE;
            break;

        case AuthActions.LOGIN_REST_CALL:
            let checkingCredentials = true;
            return state.merge({ checkingCredentials });
            break;

        case AuthActions.LOGIN_SUCCESS: {
            let token = action.data.token;
            let user = action.data.korisnik;
            let checkingCredentials = false;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            let loginSuccess = true;
            return state.merge({ token, loginSuccess, user, checkingCredentials });
            break;
        }

        case AuthActions.LOGIN_FAILED:
            let logInFailed = true;
            return state.merge({ logInFailed });
            break;


        default:
            return state;
    }
}

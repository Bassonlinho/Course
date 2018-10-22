import axios from 'axios';

export const Type = {
    SET_INITIAL_STATE: 'SET_INITIAL_STATE',

    LOGIN_CALL: 'LOGIN_CALL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT: 'LOGOUT',
};

export function setInitialState(component) {
    return (dispatch) => {
        dispatch({
            type: Type.SET_INITIAL_STATE,
            data: component
        });
    }
}

export function login(username, password) {
    return (dispatch) => {

        dispatch({
            type: Type.LOGIN_CALL
        });
        return axios.post('http://212.200.189.147/login', {
            username: username,
            password: password
        })
            .then(function (response) {
                dispatch({
                    type: Type.LOGIN_SUCCESS,
                    data: response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: Type.LOGIN_FAILED,
                    error: error.message
                });
            });
    }
}

export function logout() {
    return (dispatch) => {
        dispatch({
            type: Type.LOGOUT
        });
    }
}
import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';


const initialState = {
    user: null,
    login: (userData: any) => { },
    logout: () => { }
};

if (localStorage.getItem('authToken')) {

    const decodedToken: string = jwtDecode(localStorage.getItem('authToken')!);

    // convert to json
    const JWT = JSON.parse(JSON.stringify(decodedToken));

    if (JWT.exp * 1000 < Date.now()) {
        localStorage.removeItem('authToken');
    } else {
        initialState.user = JWT;
    }

}


const AuthContext = createContext(initialState);

function authReducer(state: any, action: any) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

function AuthProvider(props: any) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function login(userData: any) {
        localStorage.setItem('authToken', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData
        });
    }

    function logout() {
        localStorage.removeItem('authToken');
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    );
}

export { AuthContext, AuthProvider };
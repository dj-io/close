import { useState, useEffect } from 'react';
import { store } from '../../index.js'

export const useAuth = () => {
    const [token, setToken] = useState();
    const state = store.getState();

    const newToken = state.AuthState.token;

    useEffect(() => {
        setToken(newToken)
    }, [token])
    const user = { loggedIn: !!token };

    return user && user.loggedIn;
}
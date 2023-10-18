import { useState, useEffect } from 'react';
import { store } from '../../index.js'

export const useAuth = () => {
    const state = store.getState();
    const token = state.AuthState.token;

    const user = { loggedIn: !!token };
    return user && user.loggedIn;
}
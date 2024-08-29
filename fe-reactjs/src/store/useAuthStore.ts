import { create } from "zustand";

const TOKEN_EXPIRATION_TIME = 3600 * 1000;

const useAuthStore = create((set) => {
    const isTokenExpired = () => {
        const expirationTime = localStorage.getItem('token_expiration_time');
        return expirationTime ? Date.now() > parseInt(expirationTime, 10) : true;
    };

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token && !isTokenExpired();
    };

    if (isTokenExpired()) {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiration_time');
        localStorage.removeItem('user');
        set({ token: null, user: null });
    }

    return {
        token: localStorage.getItem('token'),
        user: (() => {
            const user = localStorage.getItem('user');
            try {
                return user ? JSON.parse(user) : null;
            } catch (error) {
                console.error("Error parsing user data", error);
                return null;
            }
        })(),
        setToken: (token) => {
            const expirationDate = Date.now() + TOKEN_EXPIRATION_TIME;
            localStorage.setItem('token', token);
            localStorage.setItem('token_expiration_time', expirationDate.toString());
            set({ token });
        },
        setUser: (user) => {
            localStorage.setItem('user', JSON.stringify(user));
            set({ user });
        },
        login: (token, user) => {
            const expirationDate = Date.now() + TOKEN_EXPIRATION_TIME;
            localStorage.setItem('token', token);
            localStorage.setItem('token_expiration_time', expirationDate.toString());
            localStorage.setItem('user', JSON.stringify(user));
            set({ token, user });
        },
        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('token_expiration_time');
            localStorage.removeItem('user');
            set({ token: null, user: null });
        },
        isTokenExpired,
        isAuthenticated,
    };
});

export default useAuthStore;

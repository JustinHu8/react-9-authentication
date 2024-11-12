import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from '../context/AuthContext';
import { login, logout } from '../features/auth/authSlice';
import { RootState } from '../types';
import { AppDispatch } from '../store/store';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { isAuthenticated, login, logout } = useAuth();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate input
        if (!username || !password) {
            alert('Please enter username and password');
            return;
        }
        try {
            // await login(username, password);
            dispatch(login({ username, password }));
        } catch (error: any) {
            error.response ? alert(error.response.data.message) :
            alert('Login failed');
        }
    };

    return (
        <div>
            {isAuthenticated ?
            <>
                <h2>You are already logged in</h2>
                <button onClick={() => dispatch(logout())}>Logout</button>
            </>
            :
            <>
                <h2>Please log in to continue</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </>
            }
        </div>
    )
};

export default LoginPage;
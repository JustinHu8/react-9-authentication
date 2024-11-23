import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import { RootState } from '../types';
import { AppDispatch } from '../store/store';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const status = useSelector((state: RootState) => state.auth.status);
    const error = useSelector((state: RootState) => state.auth.error);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate input
        if (!username || !password) {
            alert('Please enter username and password');
            return;
        }
        dispatch(login({ username, password }));
    };

    const renderStatusMessage = () => {
        switch (status) {
            case 'loading':
                return <p>Authenticating... Please wait.</p>;
            case 'failed':
                return <p style={{ color: 'red' }}>Error: {error}</p>;
            default:
                return null;
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
                <div>{renderStatusMessage()}</div>
            </>
            }
        </div>
    )
};

export default LoginPage;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';
import { RootState } from '../types';
import { AppDispatch } from '../store/store';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const status = useSelector((state: RootState) => state.auth.status);
    const error = useSelector((state: RootState) => state.auth.error);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate input
        if (validateInputs()) {
            dispatch(login({ username, password }));
        }
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

    // Function to validate the input fields
    const validateInputs = (): boolean => {
        const newErrors: { username?: string; password?: string } = {};

        if (!username.trim()) {
            newErrors.username = 'Username is required.';
        } else if (username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters long.';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={status === 'loading'}
                        />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={status === 'loading'}
                        />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    </div>
                    <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div>{renderStatusMessage()}</div>
            </>
            }
        </div>
    )
};

export default LoginPage;
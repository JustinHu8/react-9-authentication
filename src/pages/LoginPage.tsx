import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, login, logout } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate input
        if (!username || !password) {
            alert('Please enter username and password');
            return;
        }
        // Simulate an API call
        const fakeToken = 'fakeTokenAbc123';
        login(fakeToken);
    };

    return (
        <div>
            {isAuthenticated ?
            <>
                <h2>You are already logged in</h2>
                <button onClick={() => logout()}>Logout</button>
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
interface WelcomeMessageProps {
isAuthenticated: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isAuthenticated }) => {
return (
    <div>
    {isAuthenticated ? (
        <p>Welcome back, user! You are logged in.</p>
    ) : (
        <p>Please log in to access more features.</p>
    )}
    </div>
);
};

export default WelcomeMessage;
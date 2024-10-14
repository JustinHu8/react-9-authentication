import { useUser } from "../../context/UserContext";

const WelcomeMessage = () => {
    const { isAuthenticated } = useUser();

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
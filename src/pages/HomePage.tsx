import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

interface HomePageProps {
    isAuthenticated: boolean;
  }

const HomePage = ({isAuthenticated}: HomePageProps) => {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio pariatur ab quisquam cupiditate obcaecati odit impedit error! Laborum ipsum itaque repellendus quo asperiores quaerat in culpa autem doloribus reprehenderit!</p>
            <WelcomeMessage isAuthenticated={isAuthenticated} />
        </div>
    );
};
export default HomePage;
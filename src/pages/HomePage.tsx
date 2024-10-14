import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import { Course } from '../types/course';
import CoursePillList from '../components/CoursePillList/CoursePillList.tsx';
interface HomePageProps {
    courses: Course[];
}

const HomePage = ({ courses } : HomePageProps) => {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio pariatur ab quisquam cupiditate obcaecati odit impedit error! Laborum ipsum itaque repellendus quo asperiores quaerat in culpa autem doloribus reprehenderit!</p>
            <WelcomeMessage />
            <CoursePillList courses={courses} />
        </div>
    );
};
export default HomePage;
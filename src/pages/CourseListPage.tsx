import CourseCard from '../components/CourseCard/CourseCard'
import { Course } from '../types/course'
interface HomePageProps {
    courses: Course[];
}

const CourseListPage = ({ courses } : HomePageProps) => {

    return (
        <div className="course-list">
        {courses.map(course => (
            <CourseCard key={course.id} {...course} />
        ))}
        </div>
    );
}
export default CourseListPage;
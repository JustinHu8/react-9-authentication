import CoursePill from '../CoursePill/CoursePill';
import { Course } from '../../types/course';

interface CoursePillListProps {
  courses: Course[];
}

const CoursePillList = ({ courses }: CoursePillListProps) => {
  return (
    <div className="course-pill-list" style={{ display: 'flex', gap: '10px', overflowX: 'scroll' }}>
      {courses.map((course) => (
        <CoursePill key={course.id} title={course.title} />
      ))}
    </div>
  );
};

export default CoursePillList;
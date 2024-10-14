import { Course } from './course';

export interface RootState {
    coursesState: {
        courses: Course[];
        loading: boolean;
        error: string | null;
    };
}
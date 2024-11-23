import { Course } from './course';

export interface RootState {
    coursesState: {
        courses: Course[];
        loading: boolean;
        error: string | null;
    };
    auth: {
        status: string;
        error: string;
        isAuthenticated: boolean;
    };
}
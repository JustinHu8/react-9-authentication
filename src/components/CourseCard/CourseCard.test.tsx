import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch } from 'react-redux';
import CourseCard from './CourseCard';
import { toggleEnrollment } from '../../features/courses/courseSlice';

// Mock useDispatch from react-redux
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

// Mock toggleEnrollment action
jest.mock('../../features/courses/courseSlice', () => ({
  toggleEnrollment: jest.fn(),
}));

describe('CourseCard', () => {
  const mockDispatch = jest.fn();
  const courseProps = {
    id: 1,
    title: 'Test Course',
    description: 'This is a test course',
    lessons: 10,
    isEnrolled: false,
  };

  beforeEach(() => {
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders course details correctly', () => {
    render(<CourseCard {...courseProps} />);

    expect(screen.getByText('Test Course')).toBeInTheDocument();
    expect(screen.getByText('This is a test course')).toBeInTheDocument();
    expect(screen.getByText('Lessons: 10')).toBeInTheDocument();
    expect(screen.getByText('Enroll Now')).toBeInTheDocument();
  });

  it('dispatches toggleEnrollment action with correct ID on button click', () => {
    render(<CourseCard {...courseProps} />);

    fireEvent.click(screen.getByText('Enroll Now'));

    expect(mockDispatch).toHaveBeenCalledWith(toggleEnrollment('1'));
  });

  it('shows "Unenroll" when isEnrolled is true', () => {
    render(<CourseCard {...courseProps} isEnrolled={true} />);

    expect(screen.getByText('Unenroll')).toBeInTheDocument();
  });
});
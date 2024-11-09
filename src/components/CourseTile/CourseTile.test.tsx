import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseTile from './CourseTile';

describe('CourseTile Component', () => {
    test('calls handleEnrollToggle when enroll button is clicked', () => {
        // Create a mock function for handleEnrollToggle
        const mockHandleEnrollToggle = jest.fn();

        const course = {
            id: 1,
            title: 'React for Beginners',
            description: 'Learn the basics of React.',
            lessons: 10,
            isEnrolled: false,
        };

        // Render the component with the mock function passed as a prop
        render(<CourseTile {...course} handleEnrollToggle={mockHandleEnrollToggle} />);

        // Find the enroll button
        const button = screen.getByText(/Enroll Now/i);

        // Click the enroll button
        fireEvent.click(button);

        // Assert that the mock function was called once
        expect(mockHandleEnrollToggle).toHaveBeenCalledTimes(1);
    });

    test('displays "Unenroll" when isEnrolled is true', () => {
        const mockHandleEnrollToggle = jest.fn();
    
        const course = {
          id: 2,
          title: 'Advanced React',
          description: 'Deep dive into React.',
          lessons: 20,
          isEnrolled: true,
        };
    
        render(<CourseTile {...course} handleEnrollToggle={mockHandleEnrollToggle} />);
    
        // Verify that the button displays "Unenroll" when the course is already enrolled
        const button = screen.getByText(/Unenroll/i);
        expect(button).toBeInTheDocument();
    });

})
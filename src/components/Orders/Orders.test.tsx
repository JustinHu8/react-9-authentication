// Import necessary modules
import { render, screen } from '@testing-library/react';
import Orders from './Orders';

// Write the first test

// use 'describe' to group tests
// use 'test' to group and define individual test cases.
describe('Orders Component', () => {
    test('renders Order History heading', () => {
        render(<Orders />);
        const headingElement = screen.getByText(/Order History/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders order description', () => {
        render(<Orders />);
        const paragraphElement = screen.getByText(/Here you can see a list of your previous orders/i);
        expect(paragraphElement).toBeInTheDocument();
    });
});
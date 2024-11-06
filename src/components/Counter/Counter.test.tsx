import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders with initial count', () => {
        render(<Counter initialCount={5} />);
        const countValue = screen.getByTestId('count-value');
        expect(countValue).toHaveTextContent('Count: 5');
    });

    test('increments the count when the Increment button is clicked', () => {
        render(<Counter initialCount={0} />);
        const countValue = screen.getByTestId('count-value');
        const incrementButton = screen.getByText('Increment');

        // Click the increment button
        fireEvent.click(incrementButton);

        // Verify the count has incremented
        expect(countValue).toHaveTextContent('Count: 1');
    });

    test('decrements the count when the Decremnet button is clicked', () => {
        render(<Counter initialCount={0} />);
        const countValue = screen.getByTestId('count-value');
        const decrementButton = screen.getByText('Decrement');

        // Click the decrement button
        fireEvent.click(decrementButton);

        // Verify the count has decremented
        expect(countValue).toHaveTextContent('Count: -1');
    });

    test('handles multiple increments and decrements', () => {
        render(<Counter initialCount={10} />);
        const countValue = screen.getByTestId('count-value');
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');

        // Perform multiple increments and decrements
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);

        // Expected count: 10 + 1 + 1 - 1 = 11 
        expect(countValue).toHaveTextContent('Count: 11');
    })
})
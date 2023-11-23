import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index.js';

describe(Home, () => {
    test('should have heading "Travel itinerary"', () => {
        render(<Home/>);
        const testElement = screen.getByRole('heading', {
            name: 'Travel itinerary'
        });
        expect(testElement).toBeInTheDocument();
    })
    
    test('should contain "Sweden"', () => {
        render(<Home/>);
        const testElement = screen.getByText('Sweden');
        expect(testElement).toBeInTheDocument();
    })
});
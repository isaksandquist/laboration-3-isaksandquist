import { render, screen } from '@testing-library/react';
import Footer from '../src/pages/footer.js';

describe(Footer, () => {
    test('Footer renders without crashing', () => {
        render(<Footer />);
    });

    test('should contain "Back to home page"', () => {
        render(<Footer />);
        const testElement = screen.getByText('Back to home page');
        expect(testElement).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // No olvides esta importación, es crucial para .toBeInTheDocument()
import Heading from './Heading';


describe('Heading', () => {
    test('renders with the correct text and is in the document', () => {

        render(<Heading children={'Hola Mundo'}/>);
        const titulo = screen.getByRole('heading',{ level: 1 });
        expect(titulo).toHaveTextContent('Hola Mundo')
        expect(titulo).toBeInTheDocument();
    })
})
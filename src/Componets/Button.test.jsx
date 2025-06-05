// src/components/Button/Button.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // No olvides esta importación, es crucial para .toBeInTheDocument()
import Button from './Button';


describe('Button', () => {
    test('renders with the correct text and is in the document', () => {
        // 1. Renderiza el componente Button
        // 2. Encuentra el botón por su rol y por su texto
        // 3. Afirma que el botón está en el documento
        // 4. Afirma que el botón tiene el contenido de texto correcto
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click Me');
    });
    test('calls onClick handler when clicked', async () => { // Usamos 'async' porque userEvent es asíncrono
        // 1. Crea una función mock (simulada) con jest.fn()
        // 2. Renderiza el componente Button, pasándole el texto y la función mock como prop onClick
        // 3. Encuentra el botón
        // 4. Simula un click en el botón usando userEvent.click()
        // 5. Afirma que la función mock fue llamada
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Click Me</Button>);
        
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
});

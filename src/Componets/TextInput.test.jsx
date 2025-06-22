import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TextInput from './TextInput';

describe('TextInput', () => {
  test('renders with a label and calls onChange on type', async () => {
    const mockOnChange = jest.fn();
    const testLabel = 'Nombre:';
    const initialValue = 'Juan';

    render(<TextInput label={testLabel} onChange={mockOnChange} value={initialValue}/>);

    const input = screen.getByLabelText(testLabel);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(initialValue);

    // Simula que el usuario escribe un nuevo texto en el input
    await userEvent.type(input, 'JohnDoe');

    // Afirma que la función mockOnChange fue llamada el número correcto de veces
    expect(mockOnChange).toHaveBeenCalledTimes(7); // 'JohnDoe' tiene 7 caracteres

    // Accede a la última llamada de mockOnChange para verificar el valor final
   // const lastCallArgs = mockOnChange.mock.calls[mockOnChange.mock.calls.length - 1];
    //const lastEvent = lastCallArgs[0];
    //expect(lastEvent.target.value).toBe('JuanJohnDoe'); // Asume que 'JohnDoe' se añade a 'Juan'
  });
});
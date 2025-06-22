// src/componets/Checkbox.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  // Prueba 1: Verificar el estado inicial y el cambio al hacer click
  test('renders correctly and changes state on click', async () => {
    const mockOnChange = jest.fn();
    const testLabel = 'Aceptar términos y condiciones';
    const initialChecked = false;


    // Queremos que empiece desmarcado

    // 1. Renderiza el componente Checkbox con las props iniciales
    //    (label, checked, onChange)
    render(<Checkbox label={testLabel} onChange={mockOnChange} checked={initialChecked} />)

    // 2. Encuentra el checkbox por su label (getByLabelText)
    const checkbox = screen.getByLabelText(testLabel);

    // 3. Afirma que el checkbox está en el documento
    expect(checkbox).toBeInTheDocument();

    // 4. Afirma que el checkbox está inicialmente desmarcado (toBeChecked / not.toBeChecked)
    //    Pista: expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeChecked();


    // 5. Simula un click en el checkbox (userEvent.click)
    //    Recuerda que userEvent.click es asíncrono
    await userEvent.click(checkbox);

    // 6. Afirma que mockOnChange fue llamado
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    // 7. Afirma que mockOnChange fue llamado con el evento correcto (es decir, que el checkbox está ahora marcado)
    const eventObject = mockOnChange.mock.calls[0][0];
    expect(eventObject.target.checked).toBe(true);
    
    //    Pista: mockOnChange.mock.calls[0][0].target.checked.to...
    //    El evento de un checkbox en `onChange` tiene `event.target.checked` como un booleano.
  });
});
// src/componets/ToggleContent.test.jsx
import { render, screen, waitFor } from '@testing-library/react'; // No olvides importar 'waitFor'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ToggleContent from './ToggleContent';

describe('ToggleContent', () => {
  test('hides and shows content on button click', async () => {
    // 1. Renderiza el componente ToggleContent.
     render(<ToggleContent/>)
    // 2. Afirma que el contenido está inicialmente oculto.
    //    Usa una query que no falle si el elemento no está presente.
    //    Pista: expect(screen.queryByText('Este es el contenido ocultable')).not.toBeInTheDocument();
    expect(screen.queryByText('Este es el contenido ocultable')).not.toBeInTheDocument();
    // 3. Encuentra el botón y simula un clic.
    const button = screen.getByText('Mostrar/ocultar');
    //    Pista: usa userEvent.click()
    userEvent.click(button);

    // 4. Afirma que el contenido ahora es visible.
    //    Pista: Usa findByText para esperar a que aparezca.
    //    Por ejemplo: const content = await screen.findByText('Este es el contenido ocultable');
    const content = await screen.findByText('Este es el contenido ocultable');
    //    Y luego: expect(content).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    // 5. Simula otro clic en el botón.
    userEvent.click(button)

    // 6. Afirma que el contenido se ha ocultado de nuevo.
    //    Pista: Usa waitFor para esperar que la condición se cumpla.
    //    Por ejemplo: await waitFor(() => {
    //                   expect(screen.queryByText('Este es el contenido ocultable')).not.toBeInTheDocument();
    //                 });
    await waitFor(() => {  expect(screen.queryByText('Este es el contenido ocultable')).not.toBeInTheDocument();
             });
  });
});
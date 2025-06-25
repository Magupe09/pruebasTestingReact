import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Componets/Button';
import Heading from './componets/Heading';
import Checkbox from './componets/Checkbox';
import ToggleContent from './componets/ToggleContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading children={'Hola Mundo'}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={() => alert('¡Haz clic en el botón personalizado!')}>
          Haz clic en Mí
        </Button>
        <Checkbox>
        </Checkbox>
        <ToggleContent />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

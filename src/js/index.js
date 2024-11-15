// Importa React y ReactDOM
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Incluye los estilos en el paquete de webpack
import "../styles/index.css";

// Importa el componente SecondsCounter
import SecondsCounter from './component/secondscounter.jsx';

function App() {
  const [seconds, setSeconds] = useState(0);

  // Incrementa el contador de segundos cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

// Renderiza el componente App en el contenedor con id 'app'
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

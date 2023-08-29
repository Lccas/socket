import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[messageReceived, setMessageReceived] = useState("");
  const [presets, setpresets] = useState("");

  useEffect(() => {
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          setMessageReceived("Permissão ativa");
        } else {
          setMessageReceived("Permissão inativa");
        }
      })
      .catch(console.error);
  } else {
    setMessageReceived("Não foi possível");
  }
  
  window.addEventListener('deviceorientation', handleOrientationChange);
}, [])

const handleOrientationChange = event => {
  const { alpha, beta, gamma } = event;
  console.log(alpha, beta, gamma);

  setpresets({
    alpha: alpha,
    beta: beta,
    gamma: gamma
  })
};

  return (
    <div className="App">
      <h1>Alpha: {presets.alpha}</h1>
      <h1>Beta: {presets.beta}</h1>
      <h1>Gamma: {presets.gamma}</h1>
    </div>
  );
}

export default App;

import Home from './components/home/home';
import Envelope from './components/envelope/envelope';
import './App.css';
import { useState } from 'react';
import Valentine from './components/valentine/valentine';

function App() {

  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showValentine, setShowValentine] = useState(true);


  return (
    <div className="App">
      <Envelope 
        showEnvelope={showEnvelope}
        setShowEnvelope={setShowEnvelope}
        setShowHome={setShowHome}
      />
      <Home 
        showEnvelope={showEnvelope}
        showHome={showHome}
        setShowHome={setShowHome}
        setShowValentine={setShowValentine}
      />
      <Valentine
        showValentine={showValentine}
        setShowValentine={setShowValentine}
      />
    </div>
  );
}

export default App;

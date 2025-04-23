import { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const fahrenheit = celsius !== '' ? (parseFloat(celsius) * 9/5 + 32).toFixed(2) : '';

  return (
    <div>
      <input 
        type="number" 
        value={celsius} 
        onChange={(e) => setCelsius(e.target.value)} 
        placeholder="°C"
      />
      <p>{celsius !== '' && `${fahrenheit} °F`}</p>
    </div>
  );
}

export default TemperatureConverter;
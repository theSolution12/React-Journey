import { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <p>Hello, I'm visible!</p>}
    </div>
  );
}

export default ToggleText;
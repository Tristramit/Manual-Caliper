import React from 'react';

function App() {
  let audio = new Audio("../assets/sounds/bell.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default App;
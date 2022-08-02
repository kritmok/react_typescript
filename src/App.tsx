import React from 'react';
import TextField from './TextField';

function App() {
  return (
    <div className="App">
      <TextField text="Hello, World!" person={{firstName: "k", lastName: "m"}} />
    </div>
  );
}

export default App;

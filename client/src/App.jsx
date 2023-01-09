import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
<div>
  <h1>Liste de course</h1>
  <HomePage />
  </div>

  )
}

function HomePage(){
  return( <div>
    <ul>
      <li> Schtroumpf 1<input type = "checkbox"/></li>
      <li> Schtroumpf 2<input type = "checkbox"/></li>
      <li> Schtroumpf 3<input type = "checkbox"/></li>
    </ul>
  </div>
  )
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [advice, setadvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  });

  const fetchAdvice = async ()=>{
    const responce = await axios.get('https://api.adviceslip.com/advice');
    setadvice(responce.data.slip.advice);
    // console.log(advice);
  }

  return (
    <div className="App">
      <div className='header'>
        <h2 className='heading'>Have some advices for free</h2> 
      </div>
      <div className='card'>
        <h1>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>
            GIVE ME ADVICE!
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;

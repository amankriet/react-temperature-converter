import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const inputFahrenheit = useRef(null);
  const inputCelcius = useRef(null);

  const [temp, setTemp] = useState({ c: '', f: '' });

  var toFahrenheit = (celcius) => {
    return +((celcius * 9 / 5) + 32).toFixed(2);
  }

  var toCelcius = (fahrenheit) => {
    return +((fahrenheit - 32) * 5 / 9).toFixed(2);
  }

  var handleFahrenheit = (e) => {
    setTemp({ c: toCelcius(e.target.value), f: e.target.value });
  }

  var handleCelcius = (e) => {
    setTemp({ c: e.target.value, f: toFahrenheit(e.target.value) });
  }

  useEffect(() => {
    if (temp.c === '' || temp.f === '') {
      inputFahrenheit.current.value = '';
      inputCelcius.current.value = '';
    }

    return () => {
      console.log("use effect return");
    }
  }, [temp]);


  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Temperature Conversion
        </h2>
      </header>
      <section className='App-body'>
        <div>
          <input type="number" name='fahrenheit' id='fahrenheit' onChange={handleFahrenheit} value={temp.f} ref={inputFahrenheit} />
          <br />
          <label htmlFor="fahrenheit">Fahrenheit</label>
        </div>
        <div>
          <input type="number" name='celcius' id='celcius' onChange={handleCelcius} value={temp.c} ref={inputCelcius} />
          <br />
          <label htmlFor="celcius">Celcius</label>
        </div>
      </section>
    </div>
  );
}

export default App;

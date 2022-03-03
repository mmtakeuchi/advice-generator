import React, { useState, useEffect } from 'react';
import { fetchApi } from './utils/api';
import Card from './components/Card/Card.component';
import Attribution from './components/Attribution/Attribution.component';
import { GlobalStyle } from './styles/global';

const App = () => {
  const [advice, setAdvice] = useState({});
  console.log(advice);

  const fetchAdvice = async () => {
    try {
      const data = await fetchApi('https://api.adviceslip.com/advice');

      if (data) {
        return setAdvice(data);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    (async () => {
      await fetchAdvice();
    })();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Card />
      <Attribution />
    </div>
  );
};

export default App;

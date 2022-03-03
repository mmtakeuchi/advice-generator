import React, { useState, useEffect } from 'react';
import AdviceProvider from './context/adviceContext';
import { fetchApi } from './utils/api';
import Card from './components/Card/Card.component';
import Attribution from './components/Attribution/Attribution.component';
import { GlobalStyle } from './styles/global';
import { IAdvice } from './utils/interfaces';
import { Main } from './App.styles';

const App = () => {
  const [advice, setAdvice] = useState<IAdvice>();

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
    <AdviceProvider>
      <Main>
        <GlobalStyle />
        <Card />
        <Attribution />
      </Main>
    </AdviceProvider>
  );
};

export default App;

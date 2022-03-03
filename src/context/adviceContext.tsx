import * as React from 'react';
import { IAdvice, ICardAdvice, IDiceAdvice } from '../utils/interfaces';
import { fetchApi } from '../utils/api';

export const AdviceContext = React.createContext<ICardAdvice | null>(null);

const AdviceProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [slip, setSlip] = React.useState<IAdvice>({
    id: '2',
    advice:
      "Smile and the world smiles with you. Frown and you're on your own.",
  });

  const getAdvice = async () => {
    try {
      const data = await fetchApi('https://api.adviceslip.com/advice');

      if (data) {
        return setSlip(data);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <AdviceContext.Provider value={{ slip, getAdvice }}>
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceProvider;

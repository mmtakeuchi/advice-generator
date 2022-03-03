import { IAdvice } from './interfaces';

export const fetchApi = async (url: string): Promise<IAdvice> => {
  const advice = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.slip)
    .catch((error) => error);

  return advice;
};

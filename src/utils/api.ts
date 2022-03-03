import { IAdivce } from './interfaces';

export const fetchApi = async (url: string): Promise<IAdivce> => {
  const advice = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);

  return advice;
};

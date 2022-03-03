export interface IAdvice {
  id: string;
  advice: string;
}

export interface ICardAdvice {
  slip: IAdvice;
  getAdvice: () => void;
}

export interface IDiceAdvice {
  getAdvice: () => void;
}

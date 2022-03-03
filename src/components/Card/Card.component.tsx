import React, { useContext } from 'react';
import { ICardAdvice, IAdvice } from '../../utils/interfaces';
import { AdviceContext } from '../../context/adviceContext';
import { Container, CardNumber, Divider, Quote } from './Card.styles';
import DiceIcon from '../DiceIcon/DiceIcon.component';
import dividerDesk from '../../assets/images/pattern-divider-desktop.svg';

const Card = () => {
  const { slip } = useContext(AdviceContext) as ICardAdvice;

  return (
    <Container>
      <CardNumber>ADVICE #{slip?.id}</CardNumber>
      <Quote>{slip?.advice}</Quote>
      <Divider />
      <DiceIcon />
    </Container>
  );
};

export default Card;

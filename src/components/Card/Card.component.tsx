import React from 'react';
import { Container } from './Card.styles';
import DiceIcon from '../DiceIcon/DiceIcon.component';
import { IAdivce } from '../../utils/interfaces';

const Card = () => {
  return (
    <Container>
      Advice #Card
      <DiceIcon />
    </Container>
  );
};

export default Card;

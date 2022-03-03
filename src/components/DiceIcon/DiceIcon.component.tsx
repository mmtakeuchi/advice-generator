import React from 'react';
import { DiceContainer, DiceImg } from './DiceIcon.styles';
import IconDice from '../../assets/images/icon-dice.svg';

const DiceIcon = () => {
  return (
    <DiceContainer>
      <DiceImg src={IconDice} alt="dice icon" />
    </DiceContainer>
  );
};

export default DiceIcon;

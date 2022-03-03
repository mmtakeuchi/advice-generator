import React, { useContext } from 'react';
import { IDiceAdvice } from '../../utils/interfaces';
import { AdviceContext } from '../../context/adviceContext';
import { DiceContainer, DiceImg } from './DiceIcon.styles';
import IconDice from '../../assets/images/icon-dice.svg';

const DiceIcon = () => {
  const { getAdvice } = useContext(AdviceContext) as IDiceAdvice;

  return (
    <DiceContainer onClick={getAdvice}>
      <DiceImg src={IconDice} alt="dice icon" />
    </DiceContainer>
  );
};

export default DiceIcon;

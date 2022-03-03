import styled from 'styled-components';

export const DiceContainer = styled.div`
  position: absolute;
  top: 92%;
  background: hsl(150, 100%, 66%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 15px hsl(150, 100%, 66%);
  }
`;

export const DiceImg = styled.img`
  background: hsl(150, 100%, 66%);
  width: 18px;
`;

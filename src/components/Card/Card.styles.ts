import styled from 'styled-components';
import dividerDesk from '../../assets/images/pattern-divider-desktop.svg';
import dividerMobile from '../../assets/images/pattern-divider-mobile.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0 auto;
  width: 35%;
  min-height: 33vh;
  background: hsl(217, 19%, 24%);
  color: hsl(193, 38%, 86%);
  border-radius: 10px;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 800px) {
    width: 65%;
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 375px) {
    width: 85%;
    padding: 1rem;
  }
`;

export const CardNumber = styled.div`
  color: hsl(150, 100%, 66%);
  margin: 0.5rem;
`;

export const Quote = styled.blockquote`
  font-size: 28px;
  text-align: center;
  margin: 0.5rem;

  :before {
    content: open-quote;
  }

  :after {
    content: close-quote;
  }
`;

export const Divider = styled.div`
  margin: 0.5rem;
  width: 90%;
  height: 0.8em;
  background-image: url(${dividerDesk});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-height: 800px) {
    background-image: url(${dividerMobile});
  }
`;

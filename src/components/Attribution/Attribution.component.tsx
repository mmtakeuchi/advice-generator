import React from 'react';
import { FooterContaier } from './Attribution.styles';

const Attribution = () => {
  return (
    <FooterContaier>
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by Michael Takeuchi.
    </FooterContaier>
  );
};

export default Attribution;

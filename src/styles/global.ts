import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Manrope','Open Sans', sans-serif; 
        font-weight: 800;
    }
    
    body {
        background: hsl(218, 23%, 16%)
    }
 `;

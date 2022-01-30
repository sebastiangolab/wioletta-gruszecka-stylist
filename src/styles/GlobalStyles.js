import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif !important;
        color: ${theme.colors.black};
        font-size: ${theme.fontSizes.s};
        font-weight: ${theme.fontWeights.light};

        @media (max-width: 1199px) {
            font-size: 15px;
        }
    }

    a {
        text-decoration: none;
    }
`;

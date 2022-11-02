import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: default;
    }
    body {
        overflow:  ${({ theme }) => theme.overflow}
    }
    a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    button{
        font: inherit;
        border: none;
        cursor: pointer;
    }
    svg{
        cursor: pointer; 
        *{
            cursor: pointer;
        }
    }
`;

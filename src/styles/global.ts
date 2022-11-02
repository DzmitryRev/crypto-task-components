import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: default;
        font-family: 'Montserrat', sans-serif;    
    }
    body {
        overflow:  ${(props) => props.theme.overflow}
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

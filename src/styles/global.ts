import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.colors.WHITE_BACKGROUND};

        -webkit-font-smoothing: antialiiased;

        font-family: 'Exo', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        outline: none;
    }

    button {
        cursor: pointer;
        trasition: filter 0.2s;
    }

    button:hover {
        filter: brightness(1s);
    }
`

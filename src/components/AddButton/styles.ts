import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    grid-area: button;    
    align-self: center;

    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.colors.GREEN_BUTTON};

    heigth: 4rem;
    width: 19rem;

    border: none;
    border-radius: 3rem;
    
    margin-left: 5rem;
    padding: 0.7rem 2.6rem 0.7rem 2.6rem;

    > svg {
        color: ${({ theme }) => theme.colors.GRAY_TEXT};
        font-size: 1.6rem;
        font-weight: 700;
    }

    > h2 { 
        color: ${({ theme }) => theme.colors.GRAY_TEXT};
        font-size: 1.5rem;
        font-weight: 700;
    }
`

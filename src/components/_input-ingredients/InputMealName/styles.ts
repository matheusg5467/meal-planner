import styled from "styled-components";

export const Container = styled.input`
    border: none;

    display: flex;
    align-items: center;

    height : 8rem;
    width: 40rem;

    padding-left: 3rem;

    background-color: ${({ theme }) => theme.colors.WHITE_BACKGROUND};
    color; ${({ theme }) => theme.colors.GRAY_TEXT};

    font-size: 3rem;

    border-radius: 5rem; 
`

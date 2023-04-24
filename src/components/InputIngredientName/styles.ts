import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;

    height : 4rem;
    width: 20rem;

    background-color: ${({ theme }) => theme.colors.RED_ELEMENT};
    color; ${({ theme }) => theme.colors.GRAY_TEXT};

    border-radius: 3rem; 
`

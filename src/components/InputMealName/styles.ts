import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    align-items: center;

    height : 8rem;
    width: 40rem;

    background-color: ${({ theme }) => theme.colors.BLUE_ELEMENT};
    color; ${({ theme }) => theme.colors.GRAY_TEXT};

    border-radius: 5rem; 
`

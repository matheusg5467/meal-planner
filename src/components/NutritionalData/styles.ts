import styled from "styled-components";

export const Container = styled.h3`
    height: 4rem;
    width: 15rem;

    background-color: ${({ theme }) => theme.colors.BLUE_ELEMENT};
    color: ${({ theme }) => theme.colors.GRAY_TEXT};

    font-size: 1.6rem;

    vertical-align: middle;
    text-align: center;
    
    border-radius: 3rem;

    padding: 0.8rem 0.5rem;
`

import styled from "styled-components";

export const Container = styled.h3`
    
    background-color: ${({ theme }) => theme.colors.BLUE_ELEMENT};
    color: ${({ theme }) => theme.colors.GRAY_TEXT};
    
    font-size: 1.5rem;
    font-weight: 700;

    height: 4rem;
    width: 12rem;

    vertical-align: middle;
    text-align: center;

    border-radius: 3rem;
    
    padding: 1rem;
`

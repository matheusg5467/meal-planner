import styled from "styled-components";

export const Container = styled.h1`
    grid-area: ${({ isHeader }) => isHeader && "header"}; 
    background-color: ${({ theme }) => theme.colors.BLUE_TITLE};
    color: ${({ theme }) => theme.colors.GRAY_TEXT};


    font-size:  ${({ isHeader }) => isHeader ? "6rem" : "2rem"};
    font-weight: 700;

    height: ${({ isHeader }) => isHeader ? "11.5rem" : "5rem"};
    width:  ${({ isHeader }) => isHeader ? "50rem" : "15rem"};
    
    vertical-align: middle;
    text-align: center;

    border-radius: 5rem;

    padding: ${({ isHeader }) => isHeader ? "2rem" : "1rem"};
`

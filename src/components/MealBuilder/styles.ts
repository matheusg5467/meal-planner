import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.colors.YELLOW_ELEMENT};
    height: 45rem;
    width: 90rem;

    border-radius: 3rem;

    padding: 2.5rem 2rem 0rem;
` 

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.colors.YELLOW_ELEMENT};

    height: 50rem;
    width: 40rem;

    border-radius: 3rem;

    padding: 2.5rem 2rem 0rem;
`

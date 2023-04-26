import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    background-color: ${({ theme }) => theme.colors.WHITE_BACKGROUND};

    padding: 6rem 6rem 10rem 11rem;
`

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    background-color: none;

    height: 6rem;
    width: 100%;

    > .name {
        background-color: ${({ theme }) => theme.colors.RED_ELEMENT};
        color: ${({ theme }) => theme.colors.GRAY_TEXT};

        font-size: 1.5rem;
        font-weight: 700;

        height: 4rem;
        width: 30rem;

        vertical-align: middle;
        text-align: center;

        border-radius: 3rem;

        padding: 1rem;
    }

    > .amount {
        background-color: ${({ theme }) => theme.colors.BLUE_ELEMENT};
        color: ${({ theme }) => theme.colors.GRAY_TEXT};

        font-size: 1.5rem;
        font-weight: 700;

        height: 4rem;
        width: 15rem;

        vertical-align: middle;
        text-align: center;

        border-radius: 3rem;

        padding: 1rem;
    }
`

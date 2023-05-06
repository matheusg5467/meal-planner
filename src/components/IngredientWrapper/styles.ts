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

    > .button-delete-ingredient {
        display: flex;
        align-items: center;
        justify-items: center;

        background: ${({ theme }) => theme.colors.RED_ELEMENT};

        heigth: 4rem;
        width: 4rem;

        border: none;
        border-radius: 1rem;

        padding: 0.7rem;

        > svg {
            color: ${({ theme }) => theme.colors.GRAY_TEXT};
            font-size: 2.6rem;
            font-weight: 700;
        }
    }
`

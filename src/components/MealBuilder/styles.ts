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

    > .confirm-meal-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        background: ${({ theme }) => theme.colors.GREEN_BUTTON};
        color: ${({ theme }) => theme.colors.GRAY_TEXT};

        font-size: 1.4rem;

        heigth: 8rem;
        width: 16rem;

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

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    height: 7rem;
    width: 80rem;
    border: 1px solid red;

    > .input-name {
        display: flex;
        align-items: center;

        height : 4rem;
        width: 30rem;

        border: none;

        background-color: ${({ theme }) => theme.colors.RED_ELEMENT};
        color; ${({ theme }) => theme.colors.GRAY_TEXT};

        border-radius: 3rem; 
    }

    > .input-amount {
        display: flex;
        align-items: center;

        height: 4rem;
        width: 15rem;

        border: none;

        background-color: ${({ theme }) => theme.colors.BLUE_ELEMENT};
        color; ${({ theme }) => theme.colors.GRAY_TEXT};

        border-radius: 3rem; 
    }

    > .button-add-meal {
        display: flex;
        align-items: center;
        justify-items: center;

        background: ${({ theme }) => theme.colors.GREEN_BUTTON};

        heigth: 7rem;
        width: 4.3rem;

        border: none;
        border-radius: 3rem;

        padding: 0.7rem;

        > svg {
            color: ${({ theme }) => theme.colors.GRAY_TEXT};
            font-size: 2.6rem;
            font-weight: 700;
        }
    }
    `

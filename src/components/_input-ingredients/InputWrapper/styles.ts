import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.GRAY_ELEMENT};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 7rem;
    width: 65rem;

    border-radius: 2rem;

    > .input-name {
        display: flex;
        align-items: center;

        height : 4rem;
        width: 30rem;

        padding-left: 2rem;

        border: none;

        background-color: ${({ theme }) => theme.colors.WHITE_ELEMENT};
        color; ${({ theme }) => theme.colors.GRAY_TEXT};

        border-radius: 1rem; 
    }

    > .input-amount {
        display: flex;
        align-items: center;

        height: 4rem;
        width: 15rem;

        padding-left: 2rem;

        border: none;

        background-color: ${({ theme }) => theme.colors.WHITE_ELEMENT};
        color; ${({ theme }) => theme.colors.GRAY_TEXT};

        border-radius: 1rem; 
    }

    > .button-add-ingredient {
        display: flex;
        align-items: center;
        justify-items: center;

        background: ${({ theme }) => theme.colors.GREEN_BUTTON};

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

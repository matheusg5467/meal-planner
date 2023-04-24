import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-columns: auto 37rem;
    grid-template-rows: 11.5rem 7rem auto;
    grid-template-areas:
        "header staples"
        "button staples"
        "content staples"; 

    padding: 6rem 6rem 10rem 11rem; 
`

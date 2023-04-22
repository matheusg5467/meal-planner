import { Container } from "./styles";

export function NutritionalData({ protein=0, carbohydrates=0, fat=0 }) {
    return (
        <Container>
            { protein } P |    
            { " " + carbohydrates } C | 
            { " " + fat } F
        </Container>
    );
}

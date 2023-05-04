import { Container } from "./styles";

type IngredientAmountProps = {
    ingredientAmount: string;
}

export function IngredientAmount({ ingredientAmount }: IngredientAmountProps) {
    return (
        <Container>
           { ingredientAmount } 
        </Container>
    )
}

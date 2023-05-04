import { Container } from "./styles";

type IngredientNameProps = {
    ingredientName: string;
}

export function IngredientName({ ingredientName }: IngredientNameProps) {
    return (
        <Container>
           { ingredientName } 
        </Container>
    )
}

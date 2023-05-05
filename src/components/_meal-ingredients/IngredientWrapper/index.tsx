import { Container } from "./styles";

type IngredientWrapperProps = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
};

export function IngredientWrapper({ id, ingredientName, ingredientAmount }: IngredientWrapperProps) {
    return (
        <Container>
            <h3 className="name">
                { ingredientName }
            </h3>
            <h3 className="amount">
                { ingredientAmount }
            </h3>
        </Container>
    )
}

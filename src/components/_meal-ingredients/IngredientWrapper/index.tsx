import { Container } from "./styles";
import { IngredientName } from "../IngredientName"; 
import { IngredientAmount } from "../IngredientAmount";

type IngredientWrapperProps = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
};

export function IngredientWrapper({ id, ingredientName, ingredientAmount }: IngredientWrapperProps) {
    return (
        <Container>
            <IngredientName ingredientName={ingredientName}/>
            <IngredientAmount ingredientAmount={ingredientAmount}/>
        </Container>
    )
}

import { Container } from "./styles";
import { IngredientName } from "../IngredientName"; 
import { IngredientAmount } from "../IngredientAmount";

export function IngredientWrapper({ ingredientName, ingredientAmount }) {
    return (
        <Container>
            <IngredientName ingredientName={ingredientName}/>
            <IngredientAmount ingredientAmount={ingredientAmount}/>
        </Container>
    )
}

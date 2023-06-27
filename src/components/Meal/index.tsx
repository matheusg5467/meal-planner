import { Container } from "./styles";
import { IngredientWrapper } from "../IngredientWrapper";

export function Meal({ meal }) {
    return (
        <Container>
            {meal.map((ingredient) => {
                    return (
                        <IngredientWrapper
                            id={ingredient.id}
                            ingredientName={ingredient.ingredientName}
                            ingredientAmount={ingredient.ingredientAmount}
                        />
                        );
                })
            }
        </Container>
    );
}

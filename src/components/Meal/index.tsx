import { Container } from "./styles";
import { IngredientWrapper } from "../IngredientWrapper";

type ingredientProps = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
}

type mealProps = {
    meal: Array<ingredientProps> 
}

export function Meal({ meal }: mealProps) {
    return (
        <Container>
            {meal.map((ingredient: ingredientProps) => {
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

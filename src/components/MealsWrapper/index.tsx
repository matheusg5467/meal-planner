import { Meal } from "../Meal";
import { Container } from "./styles";

import { useContext } from "react";
import { MealsListContext } from "../../context/MealsListContext";
import { IngredientWrapper } from "../IngredientWrapper";

export function MealsWrapper() {
    const { mealsList } = useContext(MealsListContext)
    return (
        <Container>
           {mealsList.map((meal) => {
               return (meal.map((ingredient) => {
                    return (
                        <IngredientWrapper
                            id={ingredient.id}
                            ingredientName={ingredient.ingredientName}
                            ingredientAmount={ingredient.ingredientAmount}
                        />
                        );
                    }));
            })};
        </Container>
    )
}

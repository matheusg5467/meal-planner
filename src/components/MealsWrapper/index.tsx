import { Meal } from "../Meal";
import { Container } from "./styles";

import { useContext } from "react";
import { MealsListContext } from "../../context/MealsListContext";
import { IngredientWrapper } from "../IngredientWrapper";

export function MealsWrapper() {
    const { mealsList } = useContext(MealsListContext)
    return (
        <Container>
        </Container>
    )
}

import { Meal } from "../Meal";
import { Container } from "./styles";

import { useContext } from "react";
import { MealsListContext } from "../../context/MealsListContext";

export function MealsWrapper() {
    const { mealsList } = useContext(MealsListContext)
    return (
        <Container>
           {mealsList.map((meal) => {
               return (
                    <Meal meal={meal} />
                );
            })}
        </Container>
    )
}

import { Container } from "./styles";
import { Title } from "../Title";
import { IngredientWrapper } from "../_meal-ingredients/IngredientWrapper";
import { NutritionalData } from "../NutritionalData";

export function Meal() {
    return (
        <Container>
            <Title>
                Meal
            </Title>
            <NutritionalData protein={10} carbohydrates={10} fat={10}/>
            <IngredientWrapper id={0} ingredientName={"Broccoli"} ingredientAmount={500}/>
        </Container>
    );
}

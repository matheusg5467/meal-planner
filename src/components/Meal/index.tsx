import { Container } from "./styles";
import { Title } from "../Title";
import { IngredientWrapper } from "../IngredientWrapper";
import { NutritionalData } from "../NutritionalData";

export function Meal() {
    return (
        <Container>
            <Title>
                Meal
            </Title>
            <NutritionalData protein={10} carbohydrates={10} fat={10}/>
            <IngredientWrapper ingredientName={"Broccoli"} ingredientAmount={500 + "g"}/>
        </Container>
    );
}

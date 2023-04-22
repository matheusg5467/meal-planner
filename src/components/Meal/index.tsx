import { Container } from "./styles";
import { Title } from "../Title";
import { Ingredient } from "../Ingredient";
import { NutritionalData } from "../NutritionalData";

export function Meal() {
    return (
        <Container>
            <Title>
                Meal
            </Title>
                <NutritionalData protein={10} carbohydrates={10} fat={10}/>
            <Ingredient ingredientName={"Chicken"}/>
        </Container>
    );
}

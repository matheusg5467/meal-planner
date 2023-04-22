import { Container } from "./styles";

import { AddButton } from "../../components/AddButton";
import { Title } from "../../components/Title";
import { Ingredient } from "../../components/Ingredient";
import { Meal } from "../../components/Meal";
import { NutritionalData } from "../../components/NutritionalData";

export function MainPage() {
    return (
        <Container>
            <Title isHeader>
                Meal Planner
            </Title>
            <AddButton>
                { "Add New Meal" }
            </AddButton>
            <Meal />
        </Container>
    )
}

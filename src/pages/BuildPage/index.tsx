import { Container } from "./styles";
import { Title } from "../../components/Title";
import { MealBuilder } from "../../components/MealBuilder";

export function BuildPage() {
    return (
        <Container>
            <Title isHeader>
                Build-a-Meal!
            </Title>
            <MealBuilder/>
        </Container>
    )
}

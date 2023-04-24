import { Container } from "./styles";
import { AddButton } from "../../components/AddButton";
import { Title } from "../../components/Title";
import { MealsWrapper } from "../../components/MealsWrapper";

export function MainPage() {
    return (
        <Container>
            <Title isHeader>
                Meal Planner
            </Title>
            <AddButton>
                { "Add New Meal" }
            </AddButton>
            <MealsWrapper />
        </Container>
    )
}

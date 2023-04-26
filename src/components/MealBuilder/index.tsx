import { Container } from "./styles";
import { InputMealName } from "../input-ingredients/InputMealName"; 
import { InputWrapper } from "../input-ingredients/InputWrapper";

export function MealBuilder() {
    return (
        <Container>
            <InputMealName/>
            <InputWrapper/>
        </Container>
    );
}

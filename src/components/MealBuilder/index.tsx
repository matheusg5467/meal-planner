import { Container } from "./styles";
import { InputMealName } from "../InputMealName"; 
import { InputWrapper } from "../InputWrapper";

export function MealBuilder() {
    return (
        <Container>
            <InputMealName/>
            <InputWrapper/>
        </Container>
    );
}

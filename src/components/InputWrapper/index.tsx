import { Container } from "./styles";
import { InputIngredientName } from "../InputIngredientName";
import { InputAmount } from "../InputAmount";
import { InputAddButton } from "../InputAddButton";

export function InputWrapper() {
    return (
        <Container>
            <InputIngredientName/>
            <InputAmount/>
            <InputAddButton/>
        </Container>
    )
}

import { ChangeEvent } from "react";
import { FiPlus } from "react-icons/fi";
import { Container } from "./styles";

type InputWrapperProps = {
    handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
    addIngredient: () => void;
}

export function InputWrapper({ handleNameChange, handleAmountChange, addIngredient }: InputWrapperProps) {
    return (
        <Container>
            <input className="input-name" placeholder="Insert Ingredient Name" onChange={handleNameChange}/>
            <input className="input-amount" placeholder="Insert Amount" onChange={handleAmountChange}/>
            <button className="button-add-ingredient" onClick={addIngredient}>
               <FiPlus /> 
            </button>
        </Container>
    ) 
}

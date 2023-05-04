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
            <input className="input-name" onChange={handleNameChange}/>
            <input className="input-amount" onChange={handleAmountChange}/>
            <button className="button-add-meal" onClick={addIngredient}>
               <FiPlus /> 
            </button>
        </Container>
    ) 
}

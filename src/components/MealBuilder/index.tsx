import { Container } from "./styles";
import { useState, ChangeEvent } from "react";
import { InputMealName } from "../_input-ingredients/InputMealName"; 
import { InputWrapper } from "../_input-ingredients/InputWrapper";
import { IngredientWrapper } from "../_meal-ingredients/IngredientWrapper";

type ingredientType = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
}

export function MealBuilder() {
    const [ingredientsList, setIngredientsList] = useState<ingredientType[]>([]);
    const [newIngredientName, setNewIngredientName] = useState<string>("");
    const [newIngredientAmount, setNewIngredientAmount] = useState<string>("");
    
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewIngredientName(event.target.value);
    }

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewIngredientAmount(event.target.value);
    }

    const addIngredient = () => {
        const ingredient = {
            id: ingredientsList.length == 0 ? 1 : ingredientsList[ingredientsList.length - 1].id + 1,
            ingredientName: newIngredientName,
            ingredientAmount: newIngredientAmount,
        };
    setIngredientsList(ingredient.ingredientName !== "" ? [...ingredientsList, ingredient] : ingredientsList);
};

    /*const deleteIngredient = (id) => {
        setIngredientsList(ingredientsList.filter((ingredient) => ingredient.id !== ingredient));
    };*/

    return (
        <Container>
            <InputMealName/>
            <InputWrapper
                handleNameChange={handleNameChange}
                handleAmountChange={handleAmountChange}
                addIngredient={addIngredient} 
            />
            <IngredientWrapper id={0} ingredientName={"Broccoli"} ingredientAmount={"500"}/>
            <div className="list">
                {ingredientsList.map((ingredient) => {
                    return (
                        <IngredientWrapper
                            id={ingredient.id}
                            ingredientName={ingredient.ingredientName}
                            ingredientAmount={ingredient.ingredientAmount}
                        />
                    );
                })}        
            </div>
        </Container>
    );
}

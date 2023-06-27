import { Container } from "./styles";
import { useState, ChangeEvent, useContext } from "react";
import { InputMealName } from "../_input-ingredients/InputMealName"; 
import { InputWrapper } from "../_input-ingredients/InputWrapper";
import { IngredientWrapper } from "../IngredientWrapper";
import { FiCheck, FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { MealsListContext } from "../../context/MealsListContext";

type ingredientType = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
}

export function MealBuilder() {
    const {mealsList, newMeal, setNewMeal, addMeal} = useContext(MealsListContext)

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
        setNewMeal(ingredient.ingredientName !== "" ? [...ingredientsList, ingredient] : ingredientsList)
    };

    const deleteIngredient = (id: number) => {
        setIngredientsList(ingredientsList.filter((ingredient) => ingredient.id !== id));
    };

    const handleConfirmClick = () => {
        addMeal();
    }

    return (
        <Container>
            <InputWrapper
                handleNameChange={handleNameChange}
                handleAmountChange={handleAmountChange}
                addIngredient={addIngredient} 
            />
            <div className="list">
                {ingredientsList.map((ingredient) => {
                    return (
                        <IngredientWrapper
                            id={ingredient.id}
                            ingredientName={ingredient.ingredientName}
                            ingredientAmount={ingredient.ingredientAmount}
                            deleteIngredient={deleteIngredient}
                        />
                    );
                })}        
            </div>
            <button className="confirm-meal-button" onClick={handleConfirmClick}> 
                CONFIRM MEAL
                <FiCheck/>
            </button>
            <Link to="/">
                <FiArrowUpLeft />
            </Link>
        </Container>
    );
}

import { createContext, useState, useEffect, ReactNode } from "react";

export const MealsListContext = createContext<contextType>({mealsList: null, newMeal: null, setNewMeal: null, addMeal: null});

type MealsListProviderProps = {
    children: ReactNode
}

type IngredientType = {
    id: number; 
    ingredientName: string; 
    ingredientAmount: string;
    }

type contextType = {
    mealsList: any;
    newMeal: any;
    setNewMeal: any;
    addMeal: any;
}

export const MealsListProvider = ({ children }: MealsListProviderProps)  => {
    const [mealsList, setMealsList] = useState<Array<Array<{Ingredient: IngredientType}>>>([]);
    const [newMeal, setNewMeal] = useState([]);

    const addMeal = () => {
        console.log("This is mealsList:")
        console.log(mealsList)
        console.log("This is newMeal:")
        console.log(newMeal)
        setMealsList([...mealsList, newMeal]);
    }

    useEffect(() => {
        console.log("useEffect from mealsList: ", mealsList);
    }, [mealsList])

    return (
        <MealsListContext.Provider value={{mealsList, newMeal, setNewMeal, addMeal}}>
            {children}
        </MealsListContext.Provider>
    );
};

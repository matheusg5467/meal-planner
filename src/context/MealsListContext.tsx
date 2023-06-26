import { createContext, useState } from "react";

export const MealsListContext = createContext([]);

export const MealsListProvider = ({ children })  => {
    const [mealsList, setMealsList] = useState([]);
    const [newMeal, setNewMeal] = useState([]);

    const addMeal = () => {
        setMealsList([...mealsList, newMeal]);
    }

    return (
        <MealsListContext.Provider value={{mealsList, newMeal, setNewMeal, addMeal}}>
            {children}
        </MealsListContext.Provider>
    );
};

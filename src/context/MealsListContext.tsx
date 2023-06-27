import { createContext, useState, useEffect } from "react";

export const MealsListContext = createContext([]);

export const MealsListProvider = ({ children })  => {
    const [mealsList, setMealsList] = useState([]);
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

import { FiX } from "react-icons/fi";
import { Container } from "./styles";

type IngredientWrapperProps = {
    id: number;
    ingredientName: string;
    ingredientAmount: string;
    deleteIngredient?: (id: number) => void;
};

export function IngredientWrapper({ id, ingredientName, ingredientAmount, deleteIngredient }: IngredientWrapperProps) {
    return (
        <Container>
            <h3 className="name">
                { ingredientName }
            </h3>
            <h3 className="amount">
                { ingredientAmount }
            </h3>
            <button className="button-delete-ingredient" onClick={()=>deleteIngredient(id)}> 
               <FiX /> 
            </button>
        </Container>
    )
}

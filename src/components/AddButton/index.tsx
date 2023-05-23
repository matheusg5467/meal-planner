import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'

type AddButtonProps = {
    children: string;
}

export function AddButton({ children }: AddButtonProps) {
    return (
        <Container to="/build">
            <FiPlus />
            <h2>
                { children }
            </h2>
        </Container>
    )
}

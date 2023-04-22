import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'

export function AddButton({ children }) {
    return (
        <Container>
            <FiPlus />
            <h2>
                { children }
            </h2>
        </Container>
    )
}
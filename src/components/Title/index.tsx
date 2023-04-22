import { Container } from "./styles";

export function Title({ children, isHeader = false }) {
    return (
        <Container isHeader={isHeader}>
            { children }
        </Container>
    )
}

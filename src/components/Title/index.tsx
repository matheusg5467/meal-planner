import { Container } from "./styles";

export type TitleProps = {
    children: string;
    isHeader?: boolean;
}

export function Title({ children, isHeader = false }: TitleProps) {
    return (
        <Container isHeader={isHeader}>
            { children }
        </Container>
    )
}

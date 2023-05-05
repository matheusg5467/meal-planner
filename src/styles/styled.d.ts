import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            WHITE_BACKGROUND: string;         

            BLUE_TITLE: string;

            GRAY_TEXT: string;

            GREEN_BUTTON: string;
            GRAY_BUTTON: string;

            WHITE_ELEMENT: string;
            GRAY_ELEMENT: string;
            YELLOW_ELEMENT: string;
            RED_ELEMENT: string; 
            BLUE_ELEMENT: string; 
        }
    }
}

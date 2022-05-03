// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    export interface Palette {
        secondaryTextGrey: string;
        primaryTextGrey: string;
        thirdTextGrey: string;
        fourthTextGrey: string;
        primaryTextBlue: string;
    }

    export interface PaletteOptions {
        secondaryTextGrey: string;
        primaryTextGrey: string;
        thirdTextGrey: string;
        fourthTextGrey: string;
        primaryTextBlue: string;
    }
}

declare module '@material-ui/core/styles/createTheme' {
    export interface Theme {
        decoration: {
            boxShadow: string;
            borderRadius: string;
            strokeGrey: string;
        };
    }

    export interface ThemeOptions {
        decoration: {
            boxShadow: string;
            borderRadius: string;
            strokeGrey: string;
        };
    }
}

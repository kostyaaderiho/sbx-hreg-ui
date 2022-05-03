import { createTheme } from '@material-ui/core/styles';

export const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#30b6dd',
            contrastText: '#fff'
        },

        secondary: {
            main: '#30b6dd',
            contrastText: '#fff'
        },

        primaryTextGrey: '#525462',
        secondaryTextGrey: '#868996',
        thirdTextGrey: '#9fa1ae',
        fourthTextGrey: '#c0c3ce',
        primaryTextBlue: '#30b6dd'
    },

    decoration: {
        boxShadow: '0 1px 24px 0 rgba(0, 0, 0, .04)',
        borderRadius: '6px',
        strokeGrey: '#f2f3f7'
    },

    typography: {
        fontFamily: ['Source Sans Pro', 'Verdana', 'Arial', 'sans-serif'].join(
            ','
        ),
        button: {
            textTransform: 'none',
            fontWeight: 600
        }
    },

    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: "Arial, Helvetica, Arial, 'sans-serif'",
                    backgroundColor: '#f1f1f1',
                    fontSize: '14px',
                    lineHeight: '20px',
                    height: '100vh'
                },
                html: {
                    height: '100vh'
                },
                '#app': {
                    height: '100vh',
                    overflow: 'auto'
                }
            }
        }
    }
});

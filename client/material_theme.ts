import { blueGrey } from '@material-ui/core/colors';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
// A custom theme for this app
const theme = {
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: blueGrey.A400,
        },
        background: {
            default: '#fff',
        },
    },
    sidebarWidth: 240
} as const;
type CustomTheme = {
    [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@material-ui/core/styles/createTheme' {
    interface Theme extends CustomTheme { }
    interface ThemeOptions extends CustomTheme { }
}
export default createTheme(theme);
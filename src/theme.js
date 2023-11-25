import { createTheme } from '@mui/material/styles';
import { blue, lightBlue , grey } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[400]
//         },
//         secondary: {
//            main: lightBlue[300] ,
//            midNightBlue: "#E4F1FF"
//         }
//     }
// });
export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: blue[400],
                    white: "#fff"
                },
                secondary: {
                    main: lightBlue[300],
                    midNightBlue: "#E4F1FF"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: "#003366",
                    white: "#003366"
                },
                secondary: {
                    main: blue[500],
                    midNightBlue: "#2196f3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[600],
                },
            }),
    },
});



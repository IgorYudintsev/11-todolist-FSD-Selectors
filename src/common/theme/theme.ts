import { createTheme } from '@mui/material/styles'
import { ThemeMode } from '../../app/app-reducer'
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";


export const getTheme = (themeMode:ThemeMode) => {

    return createTheme({
        palette: {
            mode: themeMode === 'light' ? 'light' : 'dark',
            primary: {
                main: '#087EA4',
            },
        },
    })
}

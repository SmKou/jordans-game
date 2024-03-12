import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/bangers'
import '@fontsource/press-start-2p'
import '@fontsource/sirin-stencil'
import '@fontsource/monda'
import '@fontsource/mononoki'
import '@fontsource/swanky-and-moo-moo'
import App from './App.jsx';

const theme = createTheme({
    typography: {
        start: { 
            optA: { fontFamily: 'Bangers, system-ui' },
            optB: { fontFamily: 'Press Start 2P, system-ui' },
            optC: { fontFamily: 'Sirin Stencil, system-ui'}
        },
        dialog: {
            optA: { fontFamily: 'Monda, monospace'},
            optB: { fontFamily: 'Mononoki, monospace' }
        },
        hand: { fontFamily: 'Swanky and Moo Moo, cursive' }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}><App /></ThemeProvider>
    </React.StrictMode>,
)

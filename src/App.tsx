
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';


const dark = createTheme({
  palette:{
    mode: 'dark',
  }
})



function App(){  

  
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <h1>TODO LIST</h1>

      
    </ThemeProvider>
  )
}

export default App

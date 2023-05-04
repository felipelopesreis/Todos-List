
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, useTheme, Grid, TextField, Container, Button } from '../node_modules/@mui/material/index';


const dark = createTheme({
  palette:{
    mode: 'dark',
  }
})



function App(){  

  const theme =useTheme();
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AppBar positiopn="static">
        <Toolbar sx={{
          paddingTop:theme.space(2),
          paddingBottom:theme.space(2),
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          '@media all':{
              minHeight:200,
          }
        }}>
            <Typography variant='h5' component="h1">todo</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
        <Grid container spacing={theme.spacing(0.5)}>
            <Grid item xl={10} sm={12}>
                <TextField name="task"/>
            </Grid>
            <Grid item xl={2} sm={12}>
                  <Button variant="contained" fullWidth>Criar</Button>
            </Grid>
        </Grid>
        </Container>
      </main>
     

      
    </ThemeProvider>
  )
}

export default App

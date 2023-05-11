
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  CssBaseline  from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, useTheme, Grid, TextField, Container, Button, colors, Badge, Card } from '../node_modules/@mui/material/index';
import { ClipboardText, PlusCircle } from '../node_modules/@phosphor-icons/react/dist/index';
import CheckFat from '../node_modules/@phosphor-icons/react/dist/icons/CheckFat';


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
      <AppBar position='static'>
        <Toolbar sx={{
          paddingTop:theme.spacing(2),
          paddingBottom:theme.spacing(2),
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          '@media all':{
              minHeight:200,
          }
        }}>
            <Typography variant='h5' component="h1" sx={{
              display:'flex',
              alignItems:'center',
              gap:theme.spacing(2),
              color:theme.palette.primary.light
            }}>
               <CheckFat size={32} weight='fill' />Lista de Tarefas
              </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{
          position: 'relative',
          paddingTop: '50px'
        }}>
        <Grid container spacing={theme.spacing(0.5)} sx={{
          position:'absolute',
          top:'-27px'
        }}>
            <Grid item xl={10} sm={12}>
                <TextField name="task" fullWidth sx={{
                  backgroundColor:colors.grey[800]
                }}/>
            </Grid>
            <Grid item xl={2} sm={12}>
                  <Button variant="contained" fullWidth sx={{
                    height:'100%'
                  }}>
                    <span>Criar</span><PlusCircle size={32} />
                    </Button>
            </Grid>
        </Grid>
        <Grid container spacing={theme.spacing(1)} sx={{
          marginTop:'10px',
        }}>
           <Grid item sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    padding:'20px',
                    width:'100%',
                    marginTop:'45px'

                  }}>
                    <Typography >
                      <span>Tarefas criadas</span>
                     <Badge color='primary' badgeContent={0} showZero></Badge>
                    </Typography>
                    <Typography>
                    <span>Concluidas</span>
                     <Badge color='primary' badgeContent={0} showZero></Badge>
                     </Typography>
                 </Grid>
                 <Grid item sx={{
                    borderTop:'2px solid'
                  }}>
                       <Card sx={{ width: '100%',
                      display:'flex',
                      alignItems:'center',
                      flexDirection:'column',
                      padding:'18px',
                       }}>
                       <ClipboardText size={32} weight="fill" />

                       <Typography>
                      <span>Você ainda não tem tarefas cadastradas</span>    
                    </Typography>

                    <Typography>
                      <span>Crie tarefas e organize seus itens as fazer</span>    
                    </Typography>

                       </Card>
                  </Grid>
        </Grid>
        </Container>
      </main>
     

      
    </ThemeProvider>

  )
}

export default App

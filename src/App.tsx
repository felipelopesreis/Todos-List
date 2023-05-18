


import { AppBar, Toolbar, Typography, Grid, TextField, Container, Button, colors, Badge, Card, CssBaseline, } from '../node_modules/@mui/material/index';
import { ClipboardText, PlusCircle } from '../node_modules/@phosphor-icons/react/dist/index';
import CheckFat from '../node_modules/@phosphor-icons/react/dist/icons/CheckFat';
import { useEffect, useState } from 'react';
import { Task } from './Types/index';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { BuscandoBanco } from './BuscandoBanco/index';



const dark = createTheme({
  palette:{
    mode: 'dark',
  }
})


function App(){

  const theme =useTheme();
  const [tasks,setTasks] = useState<Task[]>()

  useEffect(()=>{
async function tarefasMostrar(){
  setTasks(await get())

}
tarefasMostrar()
  },[])
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
                    {
                       tasks.map(novaTask =>(
                        <BuscandoBanco tarefaData={novaTask}/>
                       ))
}
                  </Grid>
        </Grid>
        </Container>
      </main>
     

      
    </ThemeProvider>

  )
}

export default App

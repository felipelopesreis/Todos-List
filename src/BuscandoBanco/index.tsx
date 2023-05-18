import { Card, Typography } from "../../node_modules/@mui/material/index"
import { Task } from "../Types/index"

type adicionarTarefa = {
    tarefaData: Task
  }
  
export function BuscandoBanco({tarefaData}:adicionarTarefa){
    const {description, done}= tarefaData
    return(  
    <Card sx={{ width: '100%',
                      display:'flex',
                      alignItems:'center',
                      flexDirection:'column',
                      padding:'18px',
                       }}>
                       <Typography>
                        <span>{description}</span>
                        <span>{done}</span>
                        
                       </Typography>

                       </Card>
)
}

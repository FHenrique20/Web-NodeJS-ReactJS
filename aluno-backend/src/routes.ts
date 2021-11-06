import { Router, request, response, Request, Response} from 'express'
 
import { getTasks } from './controller/CadastroController';
import { saveTask } from './controller/CadastroController';
import { getTask } from './controller/CadastroController';
import { updateTask } from './controller/CadastroController';
import { deleteTask } from './controller/CadastroController';
import { finishedTask } from './controller/CadastroController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ API: 'Cadastro de Alunos' })
})
 
routes.get('/cadastro', getTasks)
routes.post('/cadastro', saveTask)
routes.get('/cadastro/:id', getTask)
routes.put('/cadastro/:id', updateTask)
routes.delete('/cadastro/:id', deleteTask)
routes.patch('/cadastro/:id', finishedTask)
 
export default routes
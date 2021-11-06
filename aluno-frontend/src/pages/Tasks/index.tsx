import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';
 
interface ITask{
    id: number;
    name: string;
    ra: string;
    birthday: string;
    age: string;
    matricula:boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Tasks: React.FC = () => {
 
    const [tasks, setTasks] = useState<ITask[]>([])
    const history = useHistory()
 
    useEffect(() => {
        loadTasks()
    }, [])
 
    async function loadTasks() {
        const response = await api.get('/tasks')
        console.log(response);
        setTasks(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
 
    function newTask(){
        history.push('/tarefas_cadastro')
    }
 
    function editTask(id: number){
        history.push(`/tarefas_cadastro/${id}`)
    }
 
    function viewTask(id: number){
        history.push(`/tarefas/${id}`)
    }
 
    async function finishedTask(id: number){
        await api.patch(`/tasks/${id}`)
        loadTasks()
    }
 
    async function deleteTask(id: number){
        await api.delete(`/tasks/${id}`)
        loadTasks()
    }
 
    return (
        
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Tarefas</h1>
                <Button variant="dark" size="sm" onClick={newTask}>Nova Tarefa</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Aniversário</th>
                    <th>Data de Atualização</th>
                    <th>Matricula</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.age}</td>
                                <td>{task.birthday}</td>
                                <td>{formatDate(task.updated_at)}</td>
                                <td>{task.matricula ? "Finalizado" : "Pendente"}</td>
                                <td>
                                    <Button size="sm" disabled={task.matricula} variant="primary" onClick={() => editTask(task.id)}>Editar</Button>{' '}
                                    <Button size="sm" disabled={task.matricula} variant="success" onClick={() => finishedTask(task.id)}>Finalizar</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewTask(task.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}>Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Tasks;
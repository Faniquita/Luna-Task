import {Request, Response, response} from 'express'
import {DeleteTarefaService} from '../../services/tarefas/DeleteTarefasService'

class DeleteTarefaController{
    async handle(req:Request, res:Response){

        const {tareId} = req.body

        const deleteTarefasService =  new DeleteTarefaService()

        const tarefa = await deleteTarefasService.execute({
            tareId
        })

        return res.json(tarefa)         
    }
   
}

export{DeleteTarefaController}
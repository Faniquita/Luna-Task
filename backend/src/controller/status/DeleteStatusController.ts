import {Request, Response, response} from 'express'
import {DeleteStatusService} from '../../services/status/DeleteStatusService'

class DeleteStatusController{
    async handle(req:Request, res:Response){

        const {stat} = req.body

        const deleteStatusService =  new DeleteStatusService()
        const status = await deleteStatusService.execute({
            stat
        })

        return res.json(status)         
    }
   
}

export{DeleteStatusController}
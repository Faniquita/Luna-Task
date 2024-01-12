import {Request, Response, response} from 'express'
import {CreateStatusService} from '../../services/status/CreateStatusService'

class CreateStatusController{
    async handle(req:Request, res:Response){

        const {status} = req.body

        const createStatusService =  new CreateStatusService()
        const status_result = await createStatusService.execute({
            status
        })

        return res.status(201).json(status_result)        
    }
   
}

export{CreateStatusController}
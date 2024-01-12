import prisma from "../../imports/prisma/prisma";

interface TarefaRequest{
    tareId: number;
}

class DeleteTarefaService{
    async execute({tareId}:TarefaRequest){       
         
        //Excluir
        await prisma.tarefas.delete({
            where:{
                tare_id: tareId
            }            
        })  
        return {MessageEvent: "Status Excluido com sucesso!"}    
        
    }
}


export{DeleteTarefaService}
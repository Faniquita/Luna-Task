import prisma from "../../imports/prisma/prisma";

interface StatusRequest{
    stat: string;
}

class DeleteStatusService{
    async execute({stat}:StatusRequest){       
        //Procurar tarefa utilizando esse status        
        const tarefaStatusOn = await prisma.tarefas.findFirst({
            where:{
                tare_stat_nome:stat
            }
        })
        if(tarefaStatusOn){
            throw new Error("Status esta sendo utilizado. Não é possivel exclui-lo")
            //return response.status(400).json({MessageEvent:"Status já cadastrado"})
        }
           
        
        //Excluir
        await prisma.status.delete({
            where:{
                stat_nome: stat
            }            
        })  
        return {MessageEvent: "Status Excluido com sucesso!"}    
        
    }
}


export{DeleteStatusService}
import prisma from "../../imports/prisma/prisma";

interface TarefaRequest{
    tareId: number;
    titulo: string;
    descricao: string;
    status: string;
}

class UpdateTarefaService{
    async execute({tareId, titulo, descricao, status}:TarefaRequest){   
        
        //Verificar se a tarefa esta com status de cancelada, concluida ou encerrada
         //Procurar tarefa com o mesmo titulo já cadastrado
         const statusUpdate = await prisma.tarefas.findFirst({
            where:{
                tare_id: tareId,
                OR: [
                    {
                        tare_stat_nome: 'Concluido'     
                    },
                    {
                        tare_stat_nome: 'Concluído'     
                    },
                    {
                        tare_stat_nome: 'Encerrado'
                    },
                    {
                        tare_stat_nome: 'Cancelado'
                    }
                ]
            }
        })
        if(statusUpdate){
            throw new Error("Não é possivel alterar tarefa com status de Concluído, Encerrado ou Cancelado")
            //return response.status(400).json({MessageEvent:"Tarefa com esse título já cadastrado"})
        }

         
        //Excluir
        await prisma.tarefas.update({
            where:{
                tare_id: tareId
            },
            data:{
                tare_titulo: titulo,
                tare_descricao: descricao,
                tare_stat_nome: status,
            }   
        })  
        return {MessageEvent: "Tarefa alterada com sucesso!"}    
        
    }
}


export{UpdateTarefaService}
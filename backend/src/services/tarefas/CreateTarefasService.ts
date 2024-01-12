import { response } from "express";
import prisma from "../../imports/prisma/prisma";

interface TarefaRequest{
    titulo: string;
    descricao: string;
    status: string;
}

class CreateTarefasService{
    async execute({titulo, descricao, status}:TarefaRequest){

        //Tratamento de Data do dia
        const dataReq = new Date()

        if(!titulo || !descricao || !status){
            throw new Error("Todos os Dados para preencher são obrigatórios!")
            //return response.status(400).json({MessageEvent:"Todos os Dados para preencher são obrigatórios!"})
        }
        
        //Procurar tarefa com o mesmo titulo já cadastrado
        const tituloExists = await prisma.tarefas.findFirst({
            where:{
                tare_titulo:titulo
            }
        })
        if(tituloExists){
            throw new Error("Tarefa com esse título já cadastrado")
            //return response.status(400).json({MessageEvent:"Tarefa com esse título já cadastrado"})
        }

        //Gravar
        await prisma.tarefas.create({
            data:{
                tare_titulo: titulo,
                tare_descricao: descricao,
                tare_data: dataReq,
                tare_stat_nome: status
            }            
        })
        return {MessageEvent: "Tarefa Cadastrada com Sucesso!"}
    }
}


export{CreateTarefasService}
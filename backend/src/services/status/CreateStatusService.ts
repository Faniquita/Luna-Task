import { response } from "express";
import prisma from "../../imports/prisma/prisma";

interface StatusRequest{
    status: string;
}

class CreateStatusService{
    async execute({status}:StatusRequest){       
        if(!status){
            //return response.status(400).json({MessageEvent:"Descrição do Status obrigatório!"})
            throw new Error("Descrição do Status obrigatório!")
        }

        //Procurar status com o mesmo nome já cadastrado
        const statusExists = await prisma.status.findFirst({
            where:{
                stat_nome:status
            }
        })
        if(statusExists){
            throw new Error("Status já cadastrado")
            //return response.status(400).json({MessageEvent:"Status já cadastrado"})
        }
           
        //Gravar
        await prisma.status.create({
            data:{
                stat_nome: status
            }            
        })    
        return {MessageEvent: "Status Cadastrada com Sucesso!"}    
        
    }
}


export{CreateStatusService}
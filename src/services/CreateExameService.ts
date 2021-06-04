import {  getRepository } from 'typeorm';
import Exame from '../models/Exame';

interface Request {
    nome_id: string;
    Name:string;
    tipo: string,
    status: string;
}

class CreateExameService{
   public async execute({nome_id, Name, status, tipo}:Request): Promise <Exame>{
        const examesRepository = getRepository(Exame)

        const  exame = examesRepository.create({
            nome_id,
            Name,
            tipo,
            status,
        });
    
        await examesRepository.save(exame)

        return exame;
   }
}

export default CreateExameService;
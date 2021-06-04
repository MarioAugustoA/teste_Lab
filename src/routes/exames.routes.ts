import {Router} from 'express';
import { getRepository } from 'typeorm';

import Exame from '../models/Exame';

const examesRouter = Router();

import CreateExameService from '../services/CreateExameService';

examesRouter.get('/', async (request, response)=>  {
    const examesRepository =  getRepository(Exame); 
    const exames = await examesRepository.find();

   return response.json(exames)
});


examesRouter.post('/', async (request, response) => {
    try {
        const {nome_id,Name, tipo, status} = request.body;

        const createExame = new CreateExameService();

        const exame = await createExame.execute({
            nome_id,
            Name,
            tipo,
            status
        })

        return response.json(exame);
    } catch (err){
        return response.status(400).json({error: err.message});
    }
});

export default examesRouter;
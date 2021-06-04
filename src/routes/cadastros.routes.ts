import {Router} from 'express';
import { getCustomRepository } from 'typeorm';
import {  parseISO} from 'date-fns';

import Cadastro from "../models/Cadastro";

import CadastrosRepository from '../repositories/CadastrosRepository';
import CreateCadastroService from '../services/CreateCadastroService';

const cadastrosRouter = Router();


cadastrosRouter.get('/', async (request, response)=> {
    const cadastrosRepository =  getCustomRepository(CadastrosRepository); 
    const cadastros = await cadastrosRepository.find();

   return response.json(cadastros)
});

cadastrosRouter.delete("/cadastros/:id", async (request, response) => {
    // here we will have logic to delete a user by a given user id
    const cadastrosRepository = getCustomRepository(CadastrosRepository)
    const results = await cadastrosRepository.delete(request.params.id);
        return response.send(results);
});

cadastrosRouter.post('/', async (request, response) => {
    try {
        const {Laboratorio, endereco,date,status} = request.body;

    const parseDate = parseISO(date);

    const createCadastro = new CreateCadastroService();

    const cadastro = await createCadastro.execute({date: parseDate, Laboratorio, status, endereco});
    
        return response.json(cadastro);
    } catch (err){
        return response.status(400).json({error: err.message});
    }
});

export default cadastrosRouter;
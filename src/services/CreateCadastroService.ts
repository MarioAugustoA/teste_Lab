import { startOfHour} from 'date-fns';
import { getCustomRepository} from 'typeorm';

import Cadastro from '../models/Cadastro';
import CadastrosRepository from '../repositories/CadastrosRepository';

interface Request {
    Laboratorio:string;
    endereco:string;
    status:string;
    date:Date;
}

class CreateCadastroService{
    public async execute({Laboratorio,endereco,status,date }:Request): Promise<Cadastro> {
        const cadastrosRepository = getCustomRepository(CadastrosRepository)

        const cadastroDate = startOfHour(date);

        

    const  cadastro = cadastrosRepository.create({
        Laboratorio,
        endereco,
        status,
        date:cadastroDate,
    });

    await cadastrosRepository.save(cadastro)

    return cadastro
    }
}

export default CreateCadastroService;
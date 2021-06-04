import Cadastro from '../models/Cadastro';
import  {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Cadastro)
class CadastrosRepository  extends Repository<Cadastro> {
    

}

export default CadastrosRepository;
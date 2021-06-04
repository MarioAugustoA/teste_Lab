import {Router} from 'express';
import cadastrosRouter from './cadastros.routes';
import examesRouter from './exames.routes';

const routes = Router();

routes.use('/cadastros', cadastrosRouter);
routes.use('/exames', examesRouter);

export default routes;
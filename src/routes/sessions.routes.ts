import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  // #swagger.tags = ['Sessions']
  // #swagger.summary = 'Criação de sessão do usuario'
  // #swagger.description = 'Endpoint para criação de sessão do usuarios da aplicação.'
  /* #swagger.parameters.body['email'] = {
          description: 'Email do usuario que deseja se autenticar',
          type: 'string'
      } */
  /* #swagger.parameters['password'] = {
        description: 'Senha do usuario que deseja se autenticar',
        type: 'string'
      } */
  /* #swagger.responses[200] = {
        description: 'O resultado da soma'
      } */
  /* #swagger.responses[401] = {
        description: 'Email ou senha inválida'
      } */
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({ email, password });

  return response.json({ user, token });
});

export default sessionsRouter;

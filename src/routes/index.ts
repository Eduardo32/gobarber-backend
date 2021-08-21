import { Router } from 'express';
import swagger from 'swagger-ui-express';

import swaggerOutput from '../docs/swagger_output.json';
import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/docs', swagger.serve, swagger.setup(swaggerOutput));

export default routes;

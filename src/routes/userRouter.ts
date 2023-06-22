import * as express from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = express.Router();
userRouter.post('/users/register', async (request, response) => {
    response.json(await userController.register(request.body))
});

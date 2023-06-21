import * as express from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.post('/users/register', (request, response) => {
    response.json(userController.register)
});

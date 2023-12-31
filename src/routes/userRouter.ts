import * as express from 'express';
import { userController } from '../controllers/user.controller';
import { routeHandler } from '../handlers/errorhandler';

export const userRouter = express.Router();
userRouter.post('/users/register', routeHandler(async (req) => {
    return await userController.register(req.body)
}));

userRouter.post('/users/login', routeHandler(async (req) => {
    return await userController.login(req.body)
}));

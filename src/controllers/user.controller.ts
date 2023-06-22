import { userService } from '../services/user.service';

export class UserController {
    register({ username, email, password }) {
        return userService.register(username, email, password);
    }

    login({ email, password }) {
        return userService.login(email, password);
    }
}

export const userController = new UserController();

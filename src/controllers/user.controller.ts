import { userService } from '../services/user.service';

export class UserController {
    register({ email, password }) {
        return userService.register(email, password);
    }

    login() {
        return userService.login();
    }
}

export const userController = new UserController();

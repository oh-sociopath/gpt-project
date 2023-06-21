import { userService } from '../services/user.service';

export class UserController {
    register() {
        return userService.register();
    }

    login() {
        return userService.login();
    }
}

export const userController = new UserController();

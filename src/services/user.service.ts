import { UserEntity } from '../entity/User.entity';
import { database } from '../config/database';
import * as bcrypt from 'bcrypt';

class UserService {
    private salt_count = Number(process.env.SALT_COUNT);

    async register(email, password) {
        const userRepository = database.getRepository(UserEntity);
        const user = new UserEntity();
        const passwordHash = await bcrypt.hash(password, this.salt_count);

        user.email = email;
        user.password = passwordHash;

        await userRepository.save(user);

        return 'User created';
    }

    login() {
        return 'login';
    }
}

export const userService = new UserService();

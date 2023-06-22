import { UserEntity } from '../entity/User.entity';
import { database } from '../config/database';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { IUser, IUserTokenData } from './types/user.interface';
import { Exception } from '../handlers/Exception';
import { error_message, error_status } from '../handlers/error.info';

class UserService {
    private salt_count = Number(process.env.SALT_COUNT);

    async register(username: string, email: string, password: string) {
        const userRepository = database.getRepository(UserEntity);
        const user: UserEntity = new UserEntity();
        const passwordHash: string = await bcrypt.hash(password, this.salt_count);

        user.username = username;
        user.email = email.toLowerCase();
        user.password = passwordHash;

        await userRepository.save(user);

        return user.id;
    }

    async login(email: string, password: string) {
        const current_user: IUser = await database.getRepository(UserEntity)
            .createQueryBuilder('user')
            .where("user.email = :email", {email: email})
            .getOne();

        const current_user_email = current_user.email.toLowerCase();

        if (current_user_email !== email) {
            throw new Exception(error_message.wrong_email, error_status.not_found);
        }

        const match: boolean = await bcrypt.compare(password, current_user.password);

        if (!match) {
            throw new Exception(error_message.wrong_password, error_status.not_found);
        }

        const user: IUserTokenData = {
            id: current_user.id,
            email,
            username: current_user.username
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1m'});
        return { accessToken }
    }
}

export const userService = new UserService();

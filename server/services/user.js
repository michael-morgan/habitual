import UserModel from '../models/user.js';

import sql from '../database/index.js';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

class UserService {
    constructor() {
        this.userModel = new UserModel(sql);
    }

    async register(user) {
        user.uid = uuid();

        const saltRounds = 10;
        const plainTextPassword = user.password;
        user.password = await bcrypt.hash(plainTextPassword, saltRounds);

        return this.userModel.create(user);
    }

    async verify(user) {
        const storedUser = await this.userModel.read(user);
        const match = await bcrypt.compare(user.password, storedUser.password);

        return match && storedUser.uid;
    }
}

export default new UserService();
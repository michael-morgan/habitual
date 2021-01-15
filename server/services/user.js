import UserModel from '../models/user.js';

import sql from '../database/index.js';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

class UserService {
    constructor() {
        this.userModel = new UserModel(sql);
    }

    async register(properties) {
        properties.uid = uuid();

        const saltRounds = 10;
        const plainTextPassword = properties.password;
        properties.password = await bcrypt.hash(plainTextPassword, saltRounds);
        
        return this.userModel.create(properties);
    }
}

export default new UserService();
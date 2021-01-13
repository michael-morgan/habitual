import UserModel from '../models/user.js';

import sql from '../database/index.js';
import { v4 as uuid } from 'uuid';

class UserService {
    constructor() {
        this.userModel = new UserModel(sql);
    }

    register(properties) {
        properties.uid = uuid();
        return this.userModel.create(properties);
    }
}

export default new UserService();
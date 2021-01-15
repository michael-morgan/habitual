import BaseModel from './base.js';

export default class UserModel extends BaseModel {
    async create(properties) {
        const createResult = await this.sql.query('INSERT INTO users SET ?', properties);

        return createResult.values.uid;
    }
}
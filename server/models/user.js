import BaseModel from './base.js';

export default class UserModel extends BaseModel {
    
    async create(properties) {
        await this.sql.query('INSERT INTO users SET ?', properties);
        
        return properties.uid;
    }
    
    async read({ email }) {
        if (typeof email !== 'undefined') {
            const readResult = await this.sql.query('SELECT * FROM users WHERE email = ?', email);

            return readResult[0];
        }
    }
}
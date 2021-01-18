import BaseModel from './base.js';

export default class HabitModel extends BaseModel {

    async create(properties) {
        await this.sql.query('INSERT INTO habits SET ?', properties);
        
        return properties.uid;
    }
    
    async readAll({ userId }) {
        const readAllResult = await this.sql.query('SELECT * FROM habits WHERE user_uid = ?', userId);

        return readAllResult;
    }
}
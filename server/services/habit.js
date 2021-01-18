import HabitModel from '../models/habit.js';

import sql from '../database/index.js';
import { v4 as uuid } from 'uuid';

class HabitService {

    constructor() {
        this.habitModel = new HabitModel(sql);
    }

    async register(habit) {
        habit.uid = uuid();

        return this.habitModel.create(habit);
    }

    async fetch(habit) {
        return this.habitModel.readAll(habit);
    }
}

export default new HabitService();
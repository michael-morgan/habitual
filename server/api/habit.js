import HabitService from '../services/habit.js';

import logRouter from './log.js';

import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    const userId = req.userId;
    const response = await HabitService.fetch({ userId });

    res.json(response);
});

router.get('/:habitId', (req, res) => {
    const userId = req.userId;
});

router.post('/', async (req, res) => {
    const userId = req.userId;
    const response = await HabitService.register({
        'user_uid': userId,
        'name': req.body.name,
        'description': req.body.description
    });

    res.json(response);
});

router.use('/:habitId/logs', (req, res, next) => {
    req.habitId = req.params.habitId;
    next();
}, logRouter);

export default router;

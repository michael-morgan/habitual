import logRouter from './log.js';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const USER_ID = req.userId;
});

router.get('/:habitId', (req, res) => {
    const USER_ID = req.userId;
});

router.use('/:habitId/logs', (req, res, next) => {
    req.habitId = req.params.habitId;
    next();
}, logRouter);

export default router;

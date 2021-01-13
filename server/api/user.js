import UserService from '../services/user.js';

import habitRouter from './habit.js';

import express from 'express';
const router = express.Router();

router.use('/:userId/habits', (req, res, next) => {
    req.userId = req.params.userId;
    next();
}, habitRouter);

router.post('/', async (req, res) => {
    const response = await UserService.register({
        'first_name': req.body.firstName,
        'last_name': req.body.lastName,
        'email': req.body.email
    });

    res.json(response);
});

export default router;

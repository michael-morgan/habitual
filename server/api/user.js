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
        'email': req.body.email,
        'password': req.body.password,
        'first_name': req.body.firstName,
        'last_name': req.body.lastName
    });

    res.json(response);
});

export default router;

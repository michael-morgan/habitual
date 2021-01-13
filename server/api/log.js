import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    const HABIT_ID = req.habitId;
});

export default router;

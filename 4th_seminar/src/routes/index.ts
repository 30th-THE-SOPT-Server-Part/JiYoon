//router index file
import { Router } from 'express';
import UserRouter from './UserRouter';
import BlogRouter from './BlogRouter';
import ReviewRouter from './ReviewRouter';
import MovieRouter from './MovieRouter';
const router = Router();

router.use('/user', UserRouter);
router.use('/blog', BlogRouter);
router.use('/review', ReviewRouter);
router.use('/movie', MovieRouter);
export default router;

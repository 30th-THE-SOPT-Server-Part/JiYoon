//router index file
import { Router } from 'express';
import UserRouter from './UserRouter';
import BlogRouter from './BlogRouter';
import ReviewRouter from './ReviewRouter';
const router = Router();

router.use('/user', UserRouter);
router.use('/blog', BlogRouter);
router.use('/review', ReviewRouter);
export default router;

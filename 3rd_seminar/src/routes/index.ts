//router index file
import { Router } from 'express';
import UserRouter from './UserRouter';
import BlogRouter from './BlogRouter';
const router = Router();

router.use('/user', UserRouter);
router.use('/blog', BlogRouter);
export default router;

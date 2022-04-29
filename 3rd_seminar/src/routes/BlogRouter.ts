import { Router } from 'express';
import { BlogController } from '../controllers';
const router: Router = Router();

router.post('/', BlogController.postBlog);

export default router;

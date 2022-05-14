import { Router } from 'express';
import { check } from 'express-validator';
import { BlogController } from '../controllers';
const router: Router = Router();

router.post('/', [check('title').notEmpty(), check('desc').notEmpty()], BlogController.postBlog);
router.put('/:blogId', BlogController.updateBlog);
router.get('/:blogId', BlogController.findBlogById);
router.delete('/:blogId', BlogController.deleteBlog);
export default router;

import { Router } from 'express';
import { check } from 'express-validator';
import { BlogController } from '../controllers';
const router: Router = Router();
const { validatorErrorChecker } = require('../middlewares/validator');

router.post('/', [check('title').notEmpty(), check('desc').notEmpty()], validatorErrorChecker, BlogController.postBlog);
router.put('/:blogId', BlogController.updateBlog);
router.get('/:blogId', BlogController.findBlogById);
router.delete('/:blogId', BlogController.deleteBlog);
export default router;

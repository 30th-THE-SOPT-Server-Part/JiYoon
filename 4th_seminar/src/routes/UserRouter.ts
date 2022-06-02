import { Router } from 'express';
import { check } from 'express-validator';
import { UserController } from '../controllers';
const router: Router = Router();

router.post('/', [check('password').isLength({ min: 6 }), check('name').notEmpty(), check('phone').notEmpty(), check('email').notEmpty().isEmail()], UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUser);

router.post('/signin', UserController.signInUser);

export default router;

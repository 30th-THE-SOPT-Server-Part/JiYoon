import { Router } from 'express';
import { check } from 'express-validator';
import { UserController } from '../controllers';
const router: Router = Router();
const { validatorErrorChecker } = require('../middlewares/validator');

router.post('/', [check('name').notEmpty(), check('phone').notEmpty(), check('email').notEmpty().isEmail()], validatorErrorChecker, UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.delete('/:userId', UserController.deleteUser);

export default router;

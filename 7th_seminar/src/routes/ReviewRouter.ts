import { Router } from 'express';
import ReviewController from '../controllers/ReviewController';
import { body } from 'express-validator';
import auth from '../middlewares/auth';
const router: Router = Router();
const { validatorErrorChecker } = require('../middlewares/validator');
router.post(
  '/movies/:movieId',
  [
    //검증
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('writer').notEmpty(),
    body('movieId').notEmpty(),
  ],
  validatorErrorChecker,
  ReviewController.createReview,
);

router.get('/movies/:movieId', ReviewController.getReviews);
export default router;

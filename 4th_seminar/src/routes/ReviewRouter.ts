import { Router } from 'express';
import ReviewController from '../controllers/ReviewController';
import { body } from 'express-validator';
import auth from '../middlewares/auth';

const router: Router = Router();

router.post(
  '/movies/:movieId',
  [
    //검증
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('writer').notEmpty(),
    body('movieId').notEmpty(),
  ],
  ReviewController.createReview,
);

router.get('/movies/:movieId', auth, ReviewController.getReviews);
export default router;

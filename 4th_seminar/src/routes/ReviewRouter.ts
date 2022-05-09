import { Router } from 'express';
import ReviewController from '../controllers/ReviewController';
import { body } from 'express-validator';

const router: Router = Router();

router.post(
  '/movies/:movieId',
  [
    //검증
    body('title').notEmpty(),
    body('content').notEmpty(),
    body('writer').notEmpty(),
  ],
  ReviewController.createReview,
);

router.get('/movies/:movieId', ReviewController.getReviews);
export default router;

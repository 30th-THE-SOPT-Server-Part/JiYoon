import { Router } from 'express';
import { body } from 'express-validator';
import MovieController from '../controllers/MovieController';
import auth from '../middlewares/auth';

const router: Router = Router();

router.post(
  '/',
  [
    //검증
    body('title').notEmpty(),
    body('director').notEmpty(),
  ],
  MovieController.postMovie,
);
router.post('/:movieId/comment', MovieController.createMovieComment);
router.get('/:movieId', MovieController.findMovieById);
router.put('/:movieId', MovieController.updateMovie);
router.delete('/:movieId', MovieController.deleteMovie);

router.put('/:movieId/comments/:commentId', auth, MovieController.updateMovieComment);
export default router;

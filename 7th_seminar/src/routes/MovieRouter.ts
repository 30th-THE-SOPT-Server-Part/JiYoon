import { Router } from 'express';
import { body } from 'express-validator';
import MovieController from '../controllers/MovieController';
import auth from '../middlewares/auth';
const router: Router = Router();
const { validatorErrorChecker } = require('../middlewares/validator');

router.post(
  '/',
  [
    //검증
    body('title').notEmpty(),
    body('director').notEmpty(),
    body('startDate').notEmpty(),
    body('thumbnail').notEmpty(),
    body('story').notEmpty(),
  ],
  validatorErrorChecker,
  MovieController.postMovie,
);

router.get('/:movieId', MovieController.findMovieById);
router.put('/:movieId', auth, MovieController.updateMovie);
router.delete('/:movieId', MovieController.deleteMovie);
router.get('/', MovieController.getMoviesBySearch);
export default router;

import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { MovieCreateDTO, MovieUpdateDTO } from '../DTO/movieDTO';
import MovieService from '../services/MovieService';
import { MovieOptionType } from '../interfaces/IMovie';

const postMovie = async (req: Request, res: Response) => {
  const movieCreateDTO: MovieCreateDTO = req.body;

  try {
    const data = await MovieService.postMovie(movieCreateDTO);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_MOVIE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const updateMovie = async (req: Request, res: Response) => {
  const movieUpdateDTO: MovieUpdateDTO = req.body;
  const { movieId } = req.params;
  try {
    await MovieService.updateMovie(movieId, movieUpdateDTO);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const findMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const data = await MovieService.findMovieById(movieId);
    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MOVIE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};
const deleteMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    await MovieService.deleteMovie(movieId);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const getMoviesBySearch = async (req: Request, res: Response) => {
  const { search, option } = req.query;
  const page: number = Number(req.query.page || 1);

  try {
    let data;
    if (search && option) {
      const isOptionType = (option: string): option is MovieOptionType => {
        return ['title', 'director', 'title_director'].indexOf(option) !== -1;
      };
      if (!isOptionType(option as string)) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
      }
      data = await MovieService.getMoviesBySearch(page, search as string, option as MovieOptionType);
    } else if (!search && !option) {
      data = await MovieService.getMoviesByPage(page);
    } else {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { postMovie, updateMovie, findMovieById, deleteMovie, getMoviesBySearch };

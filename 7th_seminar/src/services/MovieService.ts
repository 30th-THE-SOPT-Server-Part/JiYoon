import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { MovieCreateDTO, MovieUpdateDTO, MovieResponseDTO, MoviesResponseDTO } from '../DTO/movieDTO';
import { MovieInfo, MovieOptionType } from '../interfaces/IMovie';
import Movie from '../models/Movie';

const postMovie = async (movieCreateDTO: MovieCreateDTO): Promise<PostBaseResponseDTO> => {
  try {
    //const user = new User(userCreateDto) 일케해도 됨
    const movie = new Movie(movieCreateDTO);
    await movie.save();

    const data = {
      _id: movie.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateMovie = async (movieId: string, movieUpdateDTO: MovieUpdateDTO) => {
  try {
    //const user = new User(userCreateDto) 일케해도 됨
    await Movie.findByIdAndUpdate(movieId, movieUpdateDTO);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findMovieById = async (movieId: string): Promise<MovieResponseDTO | null> => {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return null;
    }
    return movie;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteMovie = async (movieId: string): Promise<void> => {
  try {
    await Movie.findByIdAndDelete(movieId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMoviesBySearch = async (search: string, option: MovieOptionType, page: number): Promise<MoviesResponseDTO> => {
  const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);
  let movies: MovieResponseDTO[] = [];
  const perPage: number = 2;
  try {
    const titleRegex = regex(search);
    if (option === 'title') {
      movies = await Movie.find({ title: { $regex: titleRegex } })
        .sort({ createAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage);
    } else if (option === 'director') {
      movies = await Movie.find({ director: { $regex: titleRegex } })
        .sort({ createAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage);
    } else {
      movies = await Movie.find({
        $or: [{ director: { $regex: titleRegex } }, { title: { $regex: titleRegex } }],
      })
        .sort({ createAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage);
    }
    const total: number = await Movie.countDocuments({});
    const lastPage: number = Math.ceil(total / perPage);
    const data = {
      movies,
      lastPage,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default {
  postMovie,
  updateMovie,
  findMovieById,
  deleteMovie,
  getMoviesBySearch,
};

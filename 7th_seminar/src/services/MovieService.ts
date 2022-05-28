import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { MovieCreateDTO, MovieUpdateDTO, MovieResponseDTO } from '../DTO/movieDTO';
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
export default {
  postMovie,
  updateMovie,
  findMovieById,
  deleteMovie,
};

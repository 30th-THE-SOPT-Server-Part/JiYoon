import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { MovieCreateDTO, MovieUpdateDTO, MovieResponseDTO, MovieCommentCreateDTO, MovieCommentUpdateDTO } from '../DTO/movieDTO';
import { MovieCommentInfo, MovieInfo } from '../interfaces/IMovie';
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

const createMovieComment = async (movieId: string, movieCommentCreateDTO: MovieCommentCreateDTO) => {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) return null;
    const newComments: MovieCommentInfo[] = [...movie.comments, movieCommentCreateDTO];

    const updateMovie = await Movie.findOneAndUpdate({ _id: movieId }, { comments: newComments }, { new: true }); //newtrue는 업데이트된 데이터 불러온다는 듯
    if (!updateMovie) return null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateMovieComment = async (movieId: string, commentId: string, userId: string, commentUpdateDTO: MovieCommentUpdateDTO): Promise<MovieInfo | null> => {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) return null;

    const data = await Movie.findOneAndUpdate(
      {
        _id: movieId,
        comments: {
          $elemMatch: { _id: commentId, writer: userId }, //여기서 매치시키는거임
        },
      },
      {
        $set: {
          'comments.$.writer': userId,
          'comments.$.comment': commentUpdateDTO.comment,
        },
      },
      { new: true },
    );

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
  createMovieComment,
  updateMovieComment,
};

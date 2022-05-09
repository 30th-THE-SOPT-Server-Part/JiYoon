import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { ReviewCreateDTO, ReviewResponseDTO } from '../DTO/reviewDTO';
import Review from '../models/Review';

const createReview = async (movieId: string, reviewCreateDTO: ReviewCreateDTO): Promise<PostBaseResponseDTO> => {
  try {
    //const user = new User(userCreateDto) 일케해도 됨
    const review = new Review({
      writer: reviewCreateDTO.writer,
      title: reviewCreateDTO.title,
      content: reviewCreateDTO.content,
      movie: movieId,
    });
    await review.save();

    const data = {
      _id: review.id,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getReviews = async (movieId: string): Promise<ReviewResponseDTO[]> => {
  try {
    const reviews = await Review.find({
      movie: movieId,
    })
      .populate('writer', 'name')
      .populate('movie'); //(String path, select) 리뷰 콘솔 찍어보셈ㅋㅋ
    const data = await Promise.all(
      reviews.map(async (review: any) => {
        const result = {
          writer: review.writer.name,
          movie: review.movie,
          title: review.title,
          content: review.content,
        };
        return result;
      }),
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createReview,
  getReviews,
};

import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { ReviewCreateDTO, ReviewOptionType, ReviewResponseDTO, ReviewsResponseDTO } from '../DTO/reviewDTO';
import { ReviewInfo } from '../interfaces/IReview';
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

const getReviews = async (movieId: string, search: string, option: ReviewOptionType, page: number): Promise<ReviewsResponseDTO> => {
  const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);
  let reviews: ReviewInfo[] = [];
  const perPage: number = 2;
  try {
    const reviewRegex = regex(search);

    if (option === 'title') {
      reviews = await Review.find({ title: { $regex: reviewRegex } })
        .where('movie')
        .equals(movieId)
        .sort({ createAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .populate('writer', 'name')
        .populate('movie');
    } else if (option === 'content') {
      reviews = await Review.find({ content: { $regex: reviewRegex } })
        .where('movie')
        .equals(movieId)
        .sort({ createAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .populate('writer', 'name')
        .populate('movie');
    }

    // const data = await Promise.all(
    //   reviews.map(async (review: any) => {
    //     const result = {
    //       writer: review.writer.name,
    //       movie: review.movie,
    //       title: review.title,
    //       content: review.content,
    //     };
    //     return result;
    //   }),
    // );
    const total: number = await Review.countDocuments({ movie: movieId });
    const lastPage: number = Math.ceil(total / perPage);
    const data = {
      reviews,
      lastPage,
    };
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

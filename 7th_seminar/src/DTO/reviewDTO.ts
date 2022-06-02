import mongoose from 'mongoose';
import { ReviewInfo } from '../interfaces/IReview';

export interface ReviewCreateDTO {
  writer: mongoose.Types.ObjectId;
  title: string;
  content: string;
}
export interface ReviewResponseDTO {
  writer: string;
  movie: string;
  title: string;
  content: string;
}

export type ReviewOptionType = 'title' | 'content';

export interface ReviewsResponseDTO {
  reviews: ReviewInfo[];
  lastPage: number;
}

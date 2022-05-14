import mongoose from 'mongoose';
import { ReviewInfo } from '../interfaces/IReview';

const ReviewSchema = new mongoose.Schema({
  writer: {
    type: mongoose.Types.ObjectId,
    required: true,
    //레퍼런스 지정
    ref: 'user',
  },
  movie: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Movie',
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ReviewInfo & mongoose.Document>('Review', ReviewSchema);

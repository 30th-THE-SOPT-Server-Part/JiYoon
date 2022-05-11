import mongoose from 'mongoose';
import { MovieInfo } from '../interfaces/IMovie';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  startDate: {
    type: Date,
  },
  thumbnail: {
    type: String,
  },
  story: {
    type: String,
  },
});

export default mongoose.model<MovieInfo & mongoose.Document>('Movie', MovieSchema);

import mongoose from 'mongoose';

export interface MovieInfo {
  title: string;
  director: mongoose.Types.ObjectId;
  startDate: Date;
  thumbnail: string;
  story: string;
}

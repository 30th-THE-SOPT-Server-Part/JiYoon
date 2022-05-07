import mongoose from 'mongoose';
import { BlogInfo } from '../interfaces/IBlog';
import { UserSchema } from './User';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  author: {
    UserSchema,
  },
});

export default mongoose.model<BlogInfo & mongoose.Document>('blog', BlogSchema);

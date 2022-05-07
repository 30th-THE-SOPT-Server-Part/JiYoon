import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/IUser';

export interface BlogPostDTO {
  title: String;
  desc: String;
  author?: UserInfo;
}

export interface BlogResponseDTO extends BlogPostDTO {
  _id: mongoose.Schema.Types.ObjectId;
}

export interface BlogUpdateDTO {
  title?: String;
  desc?: String;
  author?: UserInfo;
}
//test
import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/IUser';

export interface BlogPostDTO {
  title: String;
  desc: String;
  author?: UserInfo;
}

export interface BlogResponseDTO extends BlogPostDTO {
  //여기에만 gender 넣고싶으면
  //gender: string;
  //걍하면 됨
  _id: mongoose.Schema.Types.ObjectId;
}

export interface BlogUpdateDTO {
  title?: String;
  desc?: String;
  author?: UserInfo;
}

import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/IUser';

export interface BlogPostDTO {
  title: String;
  desc: String;
  author?: UserInfo;
}

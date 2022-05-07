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

export interface BlogUpdateDTO {https://github.com/30th-THE-SOPT-Server-Part/JiYoon/blob/main/3rd_seminar/src/DTO/BlogDTO.ts
  title?: String;
  desc?: String;
  author?: UserInfo;
}
//test

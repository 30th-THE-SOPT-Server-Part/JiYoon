//userCreateDto와 동일 -> 확장

import { UserCreateDto } from './UserCreateDto';
import mongoose from 'mongoose';

export interface UserResponseDto extends UserCreateDto {
  //여기에만 gender 넣고싶으면
  //gender: string;
  //걍하면 됨
  _id: mongoose.Schema.Types.ObjectId;
}

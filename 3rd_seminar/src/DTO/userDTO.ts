import mongoose from 'mongoose';
import { SchoolInfoDTO } from './SchoolDTO';

export interface UserCreateDTO {
  name: string;
  phone: string;
  email: string;
  age?: number;
  school?: SchoolInfoDTO;
}

export interface UserResponseDTO extends UserCreateDTO {
  //여기에만 gender 넣고싶으면
  //gender: string;
  //걍하면 됨
  _id: mongoose.Schema.Types.ObjectId;
}

export interface UserUpdateDTO {
  name?: string;
  phone?: string;
  email?: string;
  age?: number;
  school?: SchoolInfoDTO;
}

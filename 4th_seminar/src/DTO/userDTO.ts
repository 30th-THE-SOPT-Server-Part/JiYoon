import mongoose from 'mongoose';
import { SchoolInfo } from '../interfaces/ISchool';

export interface UserCreateDTO {
  name: string;
  phone: string;
  email: string;
  password: string;
  age?: number;
  school?: SchoolInfo;
}

export interface UserSignInDTO {
  email: string;
  password: string;
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
  school?: SchoolInfo;
}

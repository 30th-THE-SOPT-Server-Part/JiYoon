import mongoose from 'mongoose';

export interface MovieCreateDTO {
  title: String;
  director: mongoose.Types.ObjectId;
  startDate: Date;
  thumbnail: String;
  story: String;
}
export interface MovieUpdateDTO {
  title?: String;
  director?: String;
  startDate?: Date;
  thumbnail?: String;
  story?: String;
}

export interface MovieResponseDTO extends MovieCreateDTO {
  _id: mongoose.Schema.Types.ObjectId;
}

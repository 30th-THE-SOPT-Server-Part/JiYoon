import mongoose from 'mongoose';

export interface FileResponseDTO {
  _id: mongoose.Schema.Types.ObjectId;
  link: string;
}

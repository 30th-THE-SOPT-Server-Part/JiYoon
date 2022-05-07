import mongoose from 'mongoose';

export interface ReviewCreateDTO {
    writer: mongoose.Types.ObjectId
    title: string;
    content: string
}
export interface ReviewResponseDTO {
    writer: string;
    movie: string;
    title: string;
    content: string
}
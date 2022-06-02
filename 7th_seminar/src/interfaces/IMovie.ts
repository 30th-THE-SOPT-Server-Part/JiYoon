import mongoose from 'mongoose';

export interface MovieInfo {
  title: string;
  director: string;
  startDate: Date;
  thumbnail: string;
  story: string;
}

export type MovieOptionType = 'title' | 'director' | 'title_director';

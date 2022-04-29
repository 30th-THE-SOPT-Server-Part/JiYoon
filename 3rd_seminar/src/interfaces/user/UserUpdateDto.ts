import { SchoolInfo } from '../school/SchoolInfo';

export interface UserUpdateDto {
  name?: string;
  phone?: string;
  email?: string;
  age?: number;
  school?: SchoolInfo;
}

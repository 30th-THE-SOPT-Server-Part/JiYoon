import { SchoolInfo } from './ISchool';

export interface UserInfo {
  name: string;
  phone: string;
  email: string;
  password: string;
  age: number;
  school: SchoolInfo;
}

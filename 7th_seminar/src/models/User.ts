import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/IUser';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  school: {
    name: {
      type: String,
    },
    major: {
      type: String,
    },
  },
});

export default mongoose.model<UserInfo & mongoose.Document>('user', UserSchema);
//몽구스를 통해 export, 타입이 유저인포랑 몽구스 도큐먼트 묶어서 모델로 내보내겠다, 유저라는 이름으로 유저 스키마 내보낸다

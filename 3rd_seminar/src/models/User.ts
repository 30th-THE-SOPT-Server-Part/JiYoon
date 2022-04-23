import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/user/UserInfo';

const UserSchema = new mongoose.Schema({
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
//타입이 유저인포 몽구스 도큐먼트, 유저라는 이름으로 유저 스키마 내보낸다

import { UserInfo } from './IUser';

export interface BlogInfo {
  title: String;
  desc: String;
  author?: UserInfo;
}

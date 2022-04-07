import { Member } from './IMember';

export interface Dinner {
  member: Member[];
  shuffle(array: Member[]): Member[];
  organize(array: Member[]): void;
}

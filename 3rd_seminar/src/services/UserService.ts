import { UserCreateDto } from '../interfaces/user/UserCreateDto';
import User from '../models/User';

const createUser = async (userCreateDto: UserCreateDto) => {
  try {
    //const user = new User(userCreateDto) 일케해도 됨
    const user = new User({
      name: userCreateDto.name,
      phone: userCreateDto.phone,
      email: userCreateDto.email,
      age: userCreateDto.age,
      school: userCreateDto.school,
    });
    await user.save();

    const data = {
      _id: user.id,
    };
  } catch (error) {
    console.log(error);
  }
};

export default {
  createUser,
};

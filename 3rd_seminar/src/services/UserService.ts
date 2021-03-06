import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { UserCreateDTO, UserResponseDTO, UserUpdateDTO } from '../DTO/userDTO';

import User from '../models/User';

const createUser = async (userCreateDto: UserCreateDTO): Promise<PostBaseResponseDTO> => {
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
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (userId: string, userUpdateDTO: UserUpdateDTO): Promise<void> => {
  try {
    //findByIdAndUpdate
    await User.findByIdAndUpdate(userId, userUpdateDTO);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findUserById = async (userId: string): Promise<UserResponseDTO | null> => {
  try {
    //findByIdAndUpdate
    const user = await User.findById(userId);
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUser = async (userId: string): Promise<void> => {
  try {
    //findByIdAndDelete
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createUser,
  updateUser,
  findUserById,
  deleteUser,
};

import { PostBaseResponseDTO } from '../DTO/commonDTO';
import { UserCreateDTO, UserResponseDTO, UserSignInDTO, UserUpdateDTO } from '../DTO/userDTO';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const createUser = async (userCreateDTO: UserCreateDTO): Promise<PostBaseResponseDTO | null> => {
  try {
    const existUser = await User.findOne({
      email: userCreateDTO.email,
    });
    if (existUser) return null;
    //const user = new User(userCreateDTO) 일케해도 됨
    const user = new User({
      name: userCreateDTO.name,
      phone: userCreateDTO.phone,
      email: userCreateDTO.email,
      password: userCreateDTO.password,
      age: userCreateDTO.age,
      school: userCreateDTO.school,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(userCreateDTO.password, salt);

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

const signInUser = async (userSignInDTO: UserSignInDTO): Promise<PostBaseResponseDTO | null | number> => {
  try {
    const user = await User.findOne({
      email: userSignInDTO.email,
    });
    if (!user) return null;

    const isMatch = await bcrypt.compare(userSignInDTO.password, user.password);
    if (!isMatch) return 401;

    const data = {
      _id: user._id,
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
  signInUser,
};

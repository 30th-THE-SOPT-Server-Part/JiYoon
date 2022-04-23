import express, { Request, Response } from 'express';
import { UserCreateDto } from '../interfaces/user/UserCreateDto';
//import { UserService } from '../services/UserService';

const createUser = async (req: Request, res: Response) => {
  const userCreateDto: UserCreateDto = req.body;
  try {
    const data = await UserService.createUser(userCreateDto);
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export default {
  createUser,
};

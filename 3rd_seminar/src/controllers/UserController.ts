import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';

import UserService from '../services/UserService';
import { UserUpdateDTO, UserCreateDTO } from '../DTO/userDTO';

const createUser = async (req: Request, res: Response) => {
  const userCreateDTO: UserCreateDTO = req.body;
  try {
    const data = await UserService.createUser(userCreateDTO);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const updateUser = async (req: Request, res: Response) => {
  const userUpdateDTO: UserUpdateDTO = req.body;
  const { userId } = req.params;
  try {
    await UserService.updateUser(userId, userUpdateDTO);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const findUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const data = await UserService.findUserById(userId);
    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_USER_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    await UserService.deleteUser(userId);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createUser,
  updateUser,
  findUserById,
  deleteUser,
};

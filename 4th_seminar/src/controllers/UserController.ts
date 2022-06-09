import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';

import UserService from '../services/UserService';
import { UserUpdateDTO, UserCreateDTO, UserSignInDTO } from '../DTO/userDTO';
import { validationResult } from 'express-validator';
import getToken from '../modules/jwtHandler';
import { PostBaseResponseDTO } from '../DTO/commonDTO';

const createUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const userCreateDTO: UserCreateDTO = req.body;
  try {
    const data = await UserService.createUser(userCreateDTO);
    if (!data) return res.status(statusCode.CONFLICT).send(util.fail(statusCode.CONFLICT, message.DUPLICATED));

    const accessToken = getToken(data._id);

    const result = {
      _id: data._id,
      accesstoken: accessToken,
    };
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, result));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const userSignInDTO: UserSignInDTO = req.body;

  try {
    const result = await UserService.signInUser(userSignInDTO);

    if (!result) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    else if (result === 401) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NOT_FOUND));

    const accessToken = getToken((result as PostBaseResponseDTO)._id);

    const data = {
      _id: (result as PostBaseResponseDTO)._id,
      accessToken,
    };

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.SUCCESS, data));
  } catch (e) {
    console.log(error);
    // 서버 내부에서 오류 발생
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
  signInUser,
};

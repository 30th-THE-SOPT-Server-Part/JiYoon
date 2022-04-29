import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { BlogPostDTO } from '../DTO/blogDTO';
import BlogService from '../services/BlogService';

const postBlog = async (req: Request, res: Response) => {
  const blogPostDTO: BlogPostDTO = req.body;
  try {
    const data = await BlogService.postBlog(blogPostDTO);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_USER_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  postBlog,
};

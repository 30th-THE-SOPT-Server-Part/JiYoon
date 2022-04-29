import express, { Request, Response } from 'express';
import statusCode from '../modules/statusCode';
import message from '../modules/responseMessage';
import util from '../modules/util';
import { BlogPostDTO, BlogUpdateDTO } from '../DTO/blogDTO';
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

const updateBlog = async (req: Request, res: Response) => {
  const blogUpdateDTO: BlogUpdateDTO = req.body;
  const { blogId } = req.params;
  try {
    await BlogService.updateBlog(blogId, blogUpdateDTO);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const findBlogById = async (req: Request, res: Response) => {
  const { blogId } = req.params;
  try {
    const data = await BlogService.findBlogById(blogId);
    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_BLOG_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  const { blogId } = req.params;
  try {
    await BlogService.deleteBlog(blogId);
    res.status(statusCode.NO_CONTENT).send();
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  postBlog,
  updateBlog,
  findBlogById,
  deleteBlog,
};

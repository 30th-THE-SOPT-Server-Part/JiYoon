import { BlogPostDTO, BlogUpdateDTO, BlogResponseDTO } from '../DTO/blogDTO';
import { PostBaseResponseDTO } from '../DTO/commonDTO';
import Blog from '../models/Blog';

const postBlog = async (blogPostDTO: BlogPostDTO): Promise<PostBaseResponseDTO> => {
  try {
    //const user = new User(userCreateDto) 일케해도 됨
    const user = new Blog(blogPostDTO);
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

const updateBlog = async (blogId: string, blogUpdateDTO: BlogUpdateDTO): Promise<void> => {
  try {
    //findByIdAndUpdate
    await Blog.findByIdAndUpdate(blogId, blogUpdateDTO);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const findBlogById = async (blogId: string): Promise<BlogResponseDTO | null> => {
  try {
    //findByIdAndUpdate
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return null;
    }
    return blog;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteBlog = async (blogId: string): Promise<void> => {
  try {
    //findByIdAndDelete
    await Blog.findByIdAndDelete(blogId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { postBlog, updateBlog, findBlogById, deleteBlog };

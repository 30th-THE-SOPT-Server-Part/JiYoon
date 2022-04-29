import { BlogPostDTO } from '../DTO/blogDTO';
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

export default { postBlog };

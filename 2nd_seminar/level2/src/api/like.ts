import { Request, Response } from 'express';

module.exports = async (req: Request, res: Response) => {
  const { blogId } = req.params;
  return res.status(200).json({
    status: 200,
    message: '좋아요 성공ㅋㅋ 취소 불가',
    data: { blogId: blogId },
  });
};

import { Request, Response } from 'express';

module.exports = async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: '유저 조회 성공ㅋㅋ 유저는 남준표 하나뿐',
    data: {
      name: '남준표',
    },
  });
};

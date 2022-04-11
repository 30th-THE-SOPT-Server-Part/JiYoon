import { Request, Response } from 'express';

module.exports = async (req: Request, res: Response) => {
  const { title, desc } = req.body;
  return res.status(200).json({
    status: 200,
    message: '성공',
    data: { title, desc },
  });
};

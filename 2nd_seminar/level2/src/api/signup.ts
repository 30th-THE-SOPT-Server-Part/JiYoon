import { Request, Response } from 'express';

module.exports = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  return res.status(200).json({
    status: 200,
    message: '회원가입 성공ㅋㅋ 탈퇴 불가',
    data: { email, name, password },
  });
};

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // 成功した場合
    return res.status(200).json({ message: '送信成功しました' });
  }

  // POST以外のメソッドが送られた場合
  res.status(405).json({ message: 'メソッドが許可されていません' });
}
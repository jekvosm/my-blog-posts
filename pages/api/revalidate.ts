'http://localhost:3000/api/revalidate?path=/&secret=JekKoutaStudiesCode'

import { NextApiResponse, NextApiRequest } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const path = req.query.path as string

  await res.revalidate(path)

  return res.json({ revalidated: true })
}

export default handler

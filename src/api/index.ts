import { UmiApiRequest, UmiApiResponse } from "umi";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  res.status(200).json({
    posts_url: req.headers.host + '/api/posts',
    post_url: req.headers.host + "/api/posts/{post_id}",
    users_url: req.headers.host + '/api/users',
    user_url: req.headers.host + "/api/users/{user_id}",
  })
}
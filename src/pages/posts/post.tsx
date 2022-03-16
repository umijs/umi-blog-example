import React, { useEffect, useState } from "react";
// @ts-ignore
import { useParams } from 'umi';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>()

  async function refresh() {
    try {
      const res = await fetch('/api/posts/' + params.postId)
      const post = await res.json()
      if (res.status === 200) {
        setPost(post)
      } else {
        setPost(null);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    refresh();
  }, [])

  if (post === undefined) {
    return <div>Loading...</div>
  }

  if (post === null) {
    return <div>Post with ID {params.postId} not found.</div>
  }

  return <div>
    {post.content.split('\n').map((line: string, i: number) => <p
      key={i}>{line}</p>)}
  </div>
}

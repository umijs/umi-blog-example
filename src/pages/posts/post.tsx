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

  if (post === null) {
    return <div>Post with ID {params.postId} not found.</div>
  }

  return <div className="max-w-screen overflow-x-hidden">
    {post === undefined && <div
        className="fixed w-screen h-screen flex justify-center items-center">
        <p className="animate-pulse">Loading...</p>
    </div>}
    {post && <>
        <div
            className="w-full lg:h-[46rem] h-[36rem] overflow-hidden relative flex justify-center">
            <img src={post.imageUrl}
                 className="absolute top-0 w-full h-full object-cover" alt="" />
            <div
                className="w-full h-full absolute top-0 right-0 bg-black bg-opacity-60" />
            <div
                className="w-full absolute lg:bottom-24 bottom-12 container lg:px-64 px-8">
                <p className="text-white text-4xl font-extrabold">{post.title}</p>
                <div className="flex flex-row mt-8 align-bottom">
                    <img src={post.author.avatarUrl}
                         className="rounded-full h-8 w-8 mr-4"
                         alt="" />
                    <p
                        className="text-white text-xl font-extrabold opacity-80">{post.author.name}</p>
                    <p
                        className="text-white text-xl ml-8 opacity-60">{post.createdAt.split('T')[0]}</p>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center my-24">
            <div className="w-full container lg:px-64 px-8">
              {post.content.split('\n').map((line: string, i: number) => {
                if (line.startsWith('# ')) return <p
                  key={i}
                  className="text-3xl font-extrabold mt-24 mb-12">
                  {line.split('# ')[1]}
                </p>
                if (line.startsWith('## ')) return <p
                  key={i}
                  className="text-2xl font-extrabold mt-24 mb-12">
                  {line.split('## ')[1]}
                </p>;
                if (line.startsWith('### ')) return <p
                  key={i}
                  className="text-xl font-extrabold mt-24 mb-12">
                  {line.split('### ')[1]}
                </p>;
                if (line.startsWith('![](')) return <img
                  src={line.split('![](')[1].split(')')[0]}
                  className="w-full h-auto mb-12 mt-8 shadow-xl rounded"
                  alt="" key={i} />
                if (line.startsWith('<')) return <div
                  key={i}
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="mt-8 mb-12" />;
                return <p key={i} className="text-zinc-600 mt-2">{line}</p>
              })}
            </div>
        </div>
    </>}
  </div>
}

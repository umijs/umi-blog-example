import React from 'react';
// @ts-ignore
import { Link, Outlet } from 'umi';

export default function Layout() {
  return (
    <div className="relative">
      <div
        className="fixed w-72 bottom-8 right-8 py-4 z-50 flex transition-all
        justify-end flex-col p-4 bg-white shadow hover:shadow-xl rounded">
        <p className="text-right text-xs">
          这个博客是使用 <a href="https://next.umijs.org/zh-CN">Umi.js 框架</a><br />
          搭配 <a href="https://planetscale.com/">PlanetScale</a> + <a
          href="https://www.prisma.io/">Prisma </a>+
          <a href="https://tailwindcss.com/">Tailwindcss</a> <br />
          并且部署在 <a href="https://vercel.com/">Vercel</a> 的一个示例！
        </p>
        <p className="text-right mt-2">
          <a className="text-xs"
             href="https://next.umijs.org/zh-CN/docs/tutorials/blog">
            马上自己做一个 ➡️
          </a>
        </p>
      </div>
      <Outlet />
    </div>
  );
}

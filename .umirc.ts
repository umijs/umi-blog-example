export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '/posts/:postId', component: 'posts/post' },
  ],
};

import React from 'react';
// @ts-ignore
import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

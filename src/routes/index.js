import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout'; // 確保導入的是 index.js
import PostList from '../components/forum/PostList';
import TransferGuide from '../pages/TransferGuide';
import TransferDiscussion from '../pages/TransferDiscussion';

/**
 * 路由配置
 * 
 * 定義了應用的路由結構：
 * 1. 使用Layout作為根路由的元素
 * 2. 為每個討論區分類設置對應的路由
 * 3. 設置首頁重定向到一般討論區
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'general',
        element: <PostList />,
      },
      {
        path: 'transfer-guide',
        element: <TransferGuide />,
      },
      {
        path: 'transfer-discussion',
        element: <TransferDiscussion />,
      },
    ],
  },
]);
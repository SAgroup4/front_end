import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PostList from '../components/forum/PostList';

// 討論區頁面
const GeneralDiscussion = () => <PostList />;
const TransferDiscussion = () => <div>轉學生討論區</div>;
const ProfessionalDiscussion = () => <div>專業討論群組</div>;
const LanguageExchange = () => <div>語言交換區</div>;

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
        index: true,
        element: <GeneralDiscussion />
      },
      {
        path: 'general',
        element: <GeneralDiscussion />
      },
      {
        path: 'transfer',
        element: <TransferDiscussion />
      },
      {
        path: 'professional',
        element: <ProfessionalDiscussion />
      },
      {
        path: 'language',
        element: <LanguageExchange />
      }
    ]
  }
]);
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './App.css';

/**
 * App組件 - 應用程序的根組件
 * 
 * 功能：
 * 1. 作為應用程序的入口點
 * 2. 配置路由系統，使用RouterProvider提供路由功能
 * 3. 整合全局樣式
 * 
 * @component
 * @returns {JSX.Element} 返回配置了路由的應用程序根組件
 */
function App() {
  return <RouterProvider router={router} />
}

export default App;

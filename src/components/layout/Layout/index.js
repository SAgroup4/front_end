import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './styles.css';

/**
 * Layout組件 - 網站主要布局結構
 * 
 * 功能：
 * 1. 整合Header和Sidebar組件
 * 2. 提供主要內容區域的布局結構
 * 3. 實現響應式布局
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - 主要內容區域的子組件
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-main">
        <Sidebar />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
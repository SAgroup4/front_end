import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header'; // 確保 Header 路徑正確
import Sidebar from '../Sidebar'; // 確保 Sidebar 路徑正確
import './styles.css'; // 確保樣式檔案路徑正確

const Layout = () => {
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
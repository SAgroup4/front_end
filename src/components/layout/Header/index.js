import React from 'react';
import './styles.css';
import logo from './輔大logo.png'; // 使用 import 導入圖片

/**
 * Header組件 - 網站頂部導航欄
 * 
 * 功能：
 * 1. 顯示網站標題
 * 2. 提供搜索功能
 * 3. 顯示用戶頭像和相關操作
 * 
 * @component
 */
const Header = () => {
  /**
   * 處理搜索提交事件
   * @param {Event} e - 表單提交事件對象
   */
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: 實現搜索邏輯
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="輔仁大學 Logo" className="logo-image" />
        <h1>輔仁大學學生交流平台</h1>
      </div>
      
      <div className="header-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="搜尋討論話題..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            搜尋
          </button>
        </form>
      </div>

      <div className="header-user">
        <div className="user-avatar">
          <img src="/default-avatar.png" alt="用戶頭像" />
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

/**
 * Sidebar組件 - 網站左側導航欄
 * 
 * 功能：
 * 1. 顯示討論區分類列表
 * 2. 提供分類導航功能
 * 
 * @component
 */
const Sidebar = () => {
  /**
   * 討論區分類數據
   * @type {Array<{id: string, title: string}>}
   */
  const categories = [
    { id: 'general', title: '一般討論區' },
    { id: 'transfer', title: '轉學生討論區' },
    { id: 'professional', title: '專業討論群組' },
    { id: 'language', title: '語言交換區' }
  ];

  /**
   * 處理分類點擊事件
   * @param {string} categoryId - 被點擊的分類ID
   */
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (categoryId) => {
    navigate(`/${categoryId}`);
  };

  const isActive = (categoryId) => {
    return location.pathname === `/${categoryId}` || 
           (location.pathname === '/' && categoryId === 'general');
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <h2 className="sidebar-title">討論區分類</h2>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category.id} className="category-item">
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`category-button ${isActive(category.id) ? 'active' : ''}`}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
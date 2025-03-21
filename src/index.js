import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * React應用程序的入口文件
 * 
 * 功能：
 * 1. 初始化React應用
 * 2. 將根組件App渲染到DOM
 * 3. 配置性能監測
 * 
 * 技術說明：
 * - 使用React 18的createRoot API進行渲染
 * - 啟用嚴格模式(StrictMode)進行開發時的額外檢查
 * - 集成了性能監測工具reportWebVitals
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

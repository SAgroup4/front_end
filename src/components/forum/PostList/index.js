import React, { useState } from 'react';
import './styles.css';

const PostList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTitle('');
    setContent('');
    setSpecialRequest('');
    setPeopleCount(1);
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('請填寫標題和內文');
      return;
    }

    // 提交邏輯（例如新增到帖子列表）
    console.log({
      title,
      content,
      specialRequest,
      peopleCount,
    });

    handleCloseModal();
  };

  return (
    <div className="post-list-container">
      <h2 className="sidebar-title">有什麼樣的學習目標...？</h2>
      <div className="post-form">
        <input
          type="text"
          placeholder="點擊輸入標題..."
          className="post-input-short"
          onClick={handleOpenModal}
          readOnly
        />
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>新增學習目標</h3>
            <div className="modal-field">
              <label>標題：</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="輸入標題"
              />
            </div>
            <div className="modal-field">
              <label>內文：</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="輸入內文"
              />
            </div>
            <div className="modal-field">
              <label>特殊要求：</label>
              <input
                type="text"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="輸入特殊要求"
              />
            </div>
            <div className="modal-field">
              <label>需求人數：</label>
              <div className="people-counter">
                <button onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}>-</button>
                <span>{peopleCount}</span>
                <button onClick={() => setPeopleCount(peopleCount + 1)}>+</button>
              </div>
            </div>
            <div className="modal-actions">
              <button onClick={handleSubmit} className="submit-button">提交</button>
              <button onClick={handleCloseModal} className="cancel-button">取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
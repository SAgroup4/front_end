import React, { useState } from 'react';
import './styles.css';
import { IoChatbubblesOutline } from "react-icons/io5";


const Post = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={() => onClick(post)}>
      <h3 className="post-title">#{post.title}</h3>
      <p className="post-people">需求人數：{post.peopleCount}</p>
    </div>
  );
};

const PostList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [peopleCount, setPeopleCount] = useState(1);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

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

    const newPost = {
      title,
      content,
      specialRequest,
      peopleCount,
      currentPeople: 0, // 預設目前人數為 0
      author: '匿名用戶', // 假設的發布者
    };

    setPosts([...posts, newPost]);
    handleCloseModal();
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedPost(null);
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

      <div className="post-list">
        {posts.map((post, index) => (
          <Post key={index} post={post} onClick={handlePostClick} />
        ))}
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

      {isDetailModalOpen && selectedPost && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedPost.title}</h3>
            <p><strong>內文：</strong> {selectedPost.content}</p>
            <p><strong>特殊要求：</strong> {selectedPost.specialRequest}</p>
            <p>
              <strong>發布者：</strong> {selectedPost.author}
              <span className="chat-icon">
                <IoChatbubblesOutline />
              </span>
            </p>
            <p><strong>目前人數：</strong> {selectedPost.currentPeople}/{selectedPost.peopleCount}</p>
            <div className="modal-actions">
              <button onClick={handleCloseDetailModal} className="cancel-button">關閉</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
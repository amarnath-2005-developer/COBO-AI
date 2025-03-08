import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    navigate(path);
    toggleSidebar(); // Close sidebar after navigation
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li onClick={() => handleOptionClick('/option1')}>Option 1</li>
        <li onClick={() => handleOptionClick('/option2')}>Option 2</li>
        <li onClick={() => handleOptionClick('/option3')}>Option 3</li>
      </ul>
    </div>
  );
}

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <button className="settings-button">🏠</button>
        <div className="logo" onClick={toggleSidebar}>
          Cobo
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="App">
        <main className="main">
          <h1>What do you want help with?</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Ask away"
              value={inputValue}
              onChange={handleInputChange}
            />
            <span className="search-icon">🔍</span>
            <div className="inline-button-group">
              <button className="icon-button">+</button>
              <button className="icon-button">📎</button>
              <button className="text-button">Realm</button>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>Cobo ai is theoretical and is still in beta phase</p>
        </footer>
      </div>
    </>
  );
}

function OptionPage({ option }) {
  return (
    <div className="App">
      <header className="header">
        <button className="settings-button" onClick={() => window.history.back()}>🏠</button>
        <div className="logo">Cobo</div>
      </header>
      <main className="main">
        <h1> Realm {option} </h1>
        <p>the graph view for realm is still to be developed</p>
      </main>
      <footer className="footer">
        <p>Cobo ai is theoretical</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option1" element={<OptionPage option="Option 1" />} />
        <Route path="/option2" element={<OptionPage option="Option 2" />} />
        <Route path="/option3" element={<OptionPage option="Option 3" />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import './styles.css';
import 'katex/dist/katex.min.css';
import { renderMathInElement } from 'katex/contrib/auto-render.min.js';

class English extends React.Component {
  componentDidMount() {
    renderMathInElement(document.body);
  }

  render() {
    return (
      <div>
        <header className="h-header">
          <img src="logo.jpeg" alt="Math Prints Logo" className="logo" />
          <a href="index.html" className="link">
            <h1 className="header-title">Math and English Prints</h1>
          </a>
          <nav>
            <ul>
              <li className="dropdown">
                <a href="index.html" className="dropbtn">Menu</a>
                <div className="dropdown-content">
                  <a href="index.html">Home</a>
                  <a href="prints_math.html">Math Prints</a>
                  <a href="prints_english.html">English Prints</a>
                  <a href="math.html">Math</a>
                  <a href="english.html">English</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="intro">
            <h2>英語の解説ページ</h2>
            <p>ここでは英語の解説記事を掲載しています。</p>
          </section>
          <section className="message-board">
            <h2>管理人からのメッセージ</h2>
            <p>7/10 数と式の記事を更新しました</p>
          </section>
          <section className="featured">
            <h2>最近追加されたプリント</h2>
            <div className="horizontal-items">
              <div className="print-item">
                <a href="prints/関数_場合の数.pdf" target="_blank">テスト対策プリント1</a>
              </div>
              <div className="print-item">
                <a href="prints/geometry1.pdf" target="_blank">Geometry Print 1</a>
              </div>
              <div className="print-item">
                <a href="prints/calculus1.pdf" target="_blank">Calculus Print 1</a>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Math Prints. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default English;
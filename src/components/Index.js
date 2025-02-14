import React from 'react';
import './styles.css';
import 'katex/dist/katex.min.css';
import { renderMathInElement } from 'katex/contrib/auto-render.min.js';

class Index extends React.Component {
  componentDidMount() {
    renderMathInElement(document.body);
  }

  render() {
    return (
      <div>
        <header className="h-header">
          <img src="logo.jpeg" alt="Math Prints Logo" className="logo" />
          <a href="/" className="link">
            <h1 className="header-title">Math and English Prints</h1>
          </a>
          <nav>
            <ul>
              <li className="dropdown">
                <a href="/" className="dropbtn">Menu</a>
                <div className="dropdown-content">
                  <a href="/">Home</a>
                  <a href="/prints_math">Math Prints</a>
                  <a href="/prints_english">English Prints</a>
                  <a href="/math">Math</a>
                  <a href="/english">English</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="intro">
            <h2>学びをもっと楽しく、効率的に！</h2>
            <p>数学と英語の解説記事とプリントを多数用意しています。</p>
          </section>
          <section className="message-board">
            <h2>管理人からのメッセージ</h2>
            <p>7/10 数と式の記事を更新しました</p>
          </section>
          <section className="featured">
            <h2>最近追加されたプリント</h2>
            <div className="horizontal-items">
              <div className="print-item">
                <a href="/prints/関数_場合の数.pdf" target="_blank">テスト対策プリント1</a>
              </div>
              <div className="print-item">
                <a href="/prints/math_1/math_1_01_1.pdf" target="_blank">数と式①</a>
              </div>
              <div className="print-item">
                <a href="/prints/math_1/math_1_01_2.pdf" target="_blank">数と式②</a>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="grid">
            <div className="grid-item">
              <p className="footer__navi-heading">ABOUT US</p>
              <ul className="footer__navi">
                <li><a href="#">サイトマップ</a></li>
              </ul>
            </div>
            <div className="grid-item">
              <p className="footer__navi-heading">MATH</p>
              <ul className="footer__navi">
                <li><a href="#">数Ⅰの解説記事一覧</a></li>
                <li><a href="#">数Ⅱの解説記事一覧</a></li>
                <li><a href="#">数Aの解説記事一覧</a></li>
                <li><a href="#">数Bの解説記事一覧</a></li>
              </ul>
            </div>
            <div className="grid-item">
              <p className="footer__navi-heading">ENGLISH</p>
              <ul className="footer__navi">
                <li><a href="#">英文法の解説記事一覧①</a></li>
                <li><a href="#">英文法の解説記事一覧②</a></li>
                <li><a href="#">英文読解の解説記事一覧</a></li>
              </ul>
            </div>
            <div className="grid-item">
              <p className="footer__navi-heading">MATH PRINT</p>
              <ul className="footer__navi">
                <li><a href="#">数と式</a></li>
                <li><a href="#">方程式と不等式</a></li>
                <li><a href="#">2次関数</a></li>
                <li><a href="#">場合の数</a></li>
              </ul>
            </div>
            <div className="grid-item">
              <p className="footer__navi-heading">ENGLISH PRINT</p>
              <ul className="footer__navi">
                <li><a href="#">時制(現在・過去・未来・進行形)</a></li>
                <li><a href="#">完了形</a></li>
                <li><a href="#">助動詞</a></li>
                <li><a href="#">仮定法</a></li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">
            © 2023 <a href="https://jajaaan.co.jp/">Math and English Prints.</a> All Rights Reserved.
          </p>
        </footer>
      </div>
    );
  }
}

export default Index;
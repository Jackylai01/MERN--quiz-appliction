import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/reducer/result";

const Main = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="title text-alight ">MERN 測驗系統</h1>
        <ol>
          <li>測驗系統測試-題庫持續更新中</li>
          <li>MERN是指MongoDB、Eexpress、React、Node.js</li>
          <li>本次題目更5題，一題25分</li>
          <li>每題有三個選項。 您只能選擇一個選項</li>
          <li>您可以在測驗完成前查看和更改答案</li>
          <li>測驗結束後將公佈到最後一頁</li>
          <li>
            之後將在每一個選擇題底下，設計一個問答填寫，測驗者可以根據題目的內容，提出您對於這題的看法與優缺點
          </li>
          <li>
            未來會根據系統使用人數，加入問答填寫的投票功能，票選出最佳的題目解析，並獲得獎品
          </li>
        </ol>
        <form id="form">
          <input
            ref={inputRef}
            type="text"
            className="userid"
            placeholder="Username"
            required
          />
        </form>
        <div className="start">
          <Link className="btn" to="/quiz" onClick={startQuiz}>
            開始測驗
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;

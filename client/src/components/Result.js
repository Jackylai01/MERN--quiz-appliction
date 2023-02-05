import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/reducer/questions";
import { resetResultAction } from "../redux/reducer/result";
import {
  attemps_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { usePublishResult } from "../hook/setResult";

const Result = () => {
  const dispatch = useDispatch();
  //獲得後端的題庫與答案的狀態
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  //總分數
  const totalPoints = queue.length * 10;

  //總答題數
  const attempts = attemps_Number(result);

  //獲得的分數
  const earnPoints = earnPoints_Number(result, answers, 10);

  //總分數*50/100
  const flag = flagResult(totalPoints, earnPoints);

  //儲存使用者測驗結果到資料庫
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  //重新測驗-測驗結束導回測驗題庫頁面
  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <>
      <div className="container">
        <h2 className="text-alight">Quit Application Result</h2>
        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">{userId || ""}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Poins : </span>
            <span className="bold">{totalPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">{queue.length || 0}</span>
          </div>
          <div className="flex">
            <span>Total Attempts</span>
            <span className="bold">{attempts || 0}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">{earnPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span
              className="bold"
              style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
            >
              {flag ? "Passed" : "Failed"}
            </span>
          </div>
        </div>
        <div className="start">
          <Link className="btn" to={`/`} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div>
          <ResultTable />
        </div>
      </div>
    </>
  );
};

export default Result;

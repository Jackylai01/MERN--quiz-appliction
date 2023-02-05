import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { MoveNextQuestion, MovePrevQuestion } from "../hook/FetchQuestion";
import { PushAnswer } from "../hook/setResult";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const [check, setChecked] = useState(undefined);
  const dispatch = useDispatch();

  /*下一個問題*/
  const onNext = () => {
    //更新 trace 的值
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  };

  /*上一個問題*/
  const onPrev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  };

  //抓取答案的狀態，放入一個state裡面
  const onChecked = (check) => {
    setChecked(check);
  };

  //判斷作答是否完畢，直接導回result route
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;

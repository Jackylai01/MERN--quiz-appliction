import React, { useState, useEffect } from "react";
import { useFetchQestion } from "../hook/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hook/setResult";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const { getData } = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  console.log(getData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked, dispatch, trace]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  };

  if (getData.isLoading) return <h3 className="text-light">isLoading</h3>;
  if (getData.serverError)
    return (
      <h3 className="text-light">{getData.serverError || "Unknown Error"}</h3>
    );

  /*答案的排序是固定不變，所以questions.map 的key 直接採用index*/
  return (
    <>
      <div className="questions">
        <h2 className="text-light">{questions?.question}</h2>
        <ul key={questions?.id}>
          {questions?.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />

              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div
                className={`check ${result[trace] === i ? "checked" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Questions;

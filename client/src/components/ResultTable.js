import React, { useState, useEffect } from "react";
import { getServerData } from "../helper/helper";

const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(`https://mern-quiz-appliction.onrender.com/api/result`, (res) => {
      setData(res);
    });
  }, []);

  console.log(data);
  return (
    <>
      <div className="container">
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <td>姓名</td>
              <td>答題數</td>
              <td>獲得分數</td>
              <td>測驗結果</td>
            </tr>
          </thead>
          <tbody>
            {!data ?? <div>No Data Found </div>}
            {data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultTable;

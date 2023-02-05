import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const attemps_Number = (result) => {
  return result.filter((r) => r !== undefined).length;
};

export const earnPoints_Number = (result, answers, point) => {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
};

export const flagResult = (totalPoints, earnPoints) => {
  return (totalPoints * 50) / 100 < earnPoints;
};

/**檢查使用者的 auth */
export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace={true}></Navigate>;
}

/**獲得資料*/
export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
}

/** 新增題庫 */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}

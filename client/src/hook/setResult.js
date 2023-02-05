import * as Action from "../redux/reducer/result";
import { postServerData } from "../helper/helper";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (err) {
    console.log(err);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (err) {
    console.log(err);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("無法存取答案");
      await postServerData(
        "http://localhost:8080/api/result",
        resultData,
        (data) => data
      );
    } catch (err) {
      console.log(err);
    }
  })();
};

// Action value
const ADD_LOTTO = "ADD_LOTTO";

// Action Creator
export const addLotto = (payload) => {
  // *action creator마다 payload 콘솔 찍으면 다 다른 값이 출력됨(잊지말자)
  return {
    type: ADD_LOTTO,
    payload,
  };
};

// 초기값

const initialState = ["?", "?", "?", "?", "?", "?", "?"];
// Reducer
const lotto = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOTTO:
      const newLotto = [...action.payload];
      return newLotto;

    default:
      return state;
  }
};

export default lotto;

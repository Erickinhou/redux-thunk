export const withdrawnMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'withdrawn',
      payload: amount,
    });
  };
};

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

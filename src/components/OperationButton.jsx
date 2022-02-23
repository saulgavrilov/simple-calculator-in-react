import { ACTIONS } from '../actions';

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERAION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;

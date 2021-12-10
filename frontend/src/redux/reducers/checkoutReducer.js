import actions from '../actions/actionTypes';

export default function Reducer(initial = [], action) {
  const render = initial;
  if (action.type === actions.RENDER) {
    checkout = action.data;
  }
  return render;
}

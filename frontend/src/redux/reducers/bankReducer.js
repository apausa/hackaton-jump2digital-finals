import actions from '../actions/actionTypes';

export default function Reducer(initial = [], action) {
  let render = initial;
  if (action.type === actions.RENDER) {
    render = action.data;
  }
  return render;
}

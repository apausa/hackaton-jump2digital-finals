import actions from '../actions/checkoutTypes';

export default function Reducer(initial, action) {
  let checkout = initial;
  if (action.type === actions.DEFAULT) checkout = action.data;
  return checkout;
}

import {
  ENTITY_CREATE,
  ENTITY_UPDATE,
  ENTITY_FETCH,
  SELECT_ENTITY_ITEM,
  ENTITY_DELETE,
  CLEAR_ENTITY_LIST,
} from '../constants/actionType';

let initialState = {
  products: [],
  selectedItem: {
    product: {},
  },
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state: any, action: any) {
  state = state || initialState;
  let newState;

  switch (action.type) {
    case ENTITY_CREATE:
      // @ts-expect-error TS(2454): Variable 'newState' is used before being assigned.
      newState[action.entity] = Object.assign({}, state, action.data);
      
return newState;

    case ENTITY_UPDATE:
      // @ts-expect-error TS(2454): Variable 'newState' is used before being assigned.
      newState[action.entity] = Object.assign({}, state, action.data);
      
return newState;

    case ENTITY_FETCH:
      // @ts-expect-error TS(2454): Variable 'newState' is used before being assigned.
      newState[action.entity] = Object.assign({}, state, action.data);
      
return newState;

    case ENTITY_DELETE:
      const data = Object.assign({}, state);
      // @ts-expect-error TS(2454): Variable 'newState' is used before being assigned.
      newState[action.entity] = data.filter((data: any) => data.id !== action.data.id);
      
return newState;

    case SELECT_ENTITY_ITEM:
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      newState.selectedItem[action.entity] = Object.assign({}, state, action.data);
      
return newState;

    case CLEAR_ENTITY_LIST:
      // @ts-expect-error TS(2454): Variable 'newState' is used before being assigned.
      newState[action.entity] = {};
      
return newState;

    default:
      return state;
  }
}

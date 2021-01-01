import { AnyAction, Reducer, ReducersMapObject } from 'redux';
import { ReduxReducer } from './redux-reducer';

describe('tests for redux reducer class', () => {
  let reduxReducer: ReduxReducer;

  beforeAll(() => {
    reduxReducer = ReduxReducer.getInstance();
  });

  test('getInstance method of redux reducer should return an Instance of ReduxReducer class', () => {
    expect(reduxReducer).toBeDefined();
  });

  test('getReducer method should return an empty object at first', () => {
    expect(Object.keys(reduxReducer.getReducers()).length).toBe(0);
  });

  test('setReducer method should add a reducer to reducers object', () => {
    const reducer: Reducer = (state: any, action: AnyAction): any => {
      return state;
    };

    const reducerObject: ReducersMapObject = { reducer };
    reduxReducer.setReducer(reducerObject);

    expect(reduxReducer.getReducers().reducer).toBeDefined();
  });
});

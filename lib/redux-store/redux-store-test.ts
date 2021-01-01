import { AnyAction, ReducersMapObject, Store } from "redux";
import { ReduxStore } from "./redux-store";
import { IRegisterComponent } from "./register-component-interface";

describe("initial tests for ReduxStore class", () => {
  let reduxStore: ReduxStore;
  let store: Store;
  let reducer: ReducersMapObject;
  const action: AnyAction = {
    type: "Test_Action",
    data: {
      testKey: "afterDispatch"
    }
  };

  beforeAll(() => {
    reducer = {
      testData: (state = { testKey: "beforeDispatch" }, action: AnyAction) => {
        switch (action.type) {
          case "Test_Action":
            return { ...action.data };
          default:
            return state;
        }
      }
    };
    reduxStore = ReduxStore.getInstance(reducer);
    store = reduxStore.getStore();
  });

  test("store should be defined", () => {
    expect(store).toBeDefined();
  });

  test('store.getState() of testData should be an object with testKey and "beforeDispatch value"', () => {
    expect(store.getState().testData.testKey).toBe("beforeDispatch");
  });

  test('store.getState() of testData after dispatching should be an object with testKey and "afterDispatch value"', () => {
    store.dispatch(action);
    expect(store.getState().testData.testKey).toBe("afterDispatch");
  });

  test("register component should be defined", () => {
    expect(reduxStore.registerComponent).toBeDefined();
  });

  test("register component should register a component", () => {
    const registerComponent: IRegisterComponent = {
      name: "Test",
      setState: () => {}
    };
    reduxStore.registerComponent(registerComponent);
    const registeredComponents = reduxStore.getRegisteredComponents();
    expect(
      Object.keys(registeredComponents).findIndex(rck => rck === "Test")
    ).toBe(0);
  });
});

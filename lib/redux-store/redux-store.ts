import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Dispatch,
  Reducer,
  ReducersMapObject,
  Store
} from "redux";
import { IRegisterComponent } from "./register-component-interface";

export class ReduxStore {
  private static instance: ReduxStore;
  private store: Store;
  private reducer: Reducer;
  private registeredComponents: object = {};

  constructor(reducers: ReducersMapObject) {
    this.reducer = this.combineReducers(reducers);
    this.store = createStore(
      this.reducer,
      applyMiddleware(this.stateUpdater.bind(this))
    );
  }

  public static getInstance(reducers: ReducersMapObject): ReduxStore {
    if (!this.instance) {
      this.instance = new ReduxStore(reducers);
    }
    return this.instance;
  }

  public getStore(): Store {
    return this.store;
  }

  public registerComponent(registeredComponent: IRegisterComponent): void {
    this.registeredComponents = {
      ...this.registeredComponents,
      [registeredComponent.name]: registeredComponent.setState
    };
  }

  public getRegisteredComponents(): object {
    return this.registeredComponents;
  }

  private combineReducers(reducers: ReducersMapObject): Reducer {
    return combineReducers(reducers);
  }

  private stateUpdater(
    store: Store
  ): (dispatch: Dispatch<AnyAction>) => (action: AnyAction) => AnyAction {
    return (dispatch: Dispatch<AnyAction>) => {
      return (action: AnyAction) => {
        const result: AnyAction = dispatch(action);
        action.componentName &&
          action.componentName.map((value: string) => {
            this.registeredComponents[value] &&
              this.registeredComponents[value]({});
          });
        return result;
      };
    };
  }
}

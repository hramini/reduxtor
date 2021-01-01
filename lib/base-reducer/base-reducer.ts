import { ReducersMapObject } from "redux";
import { ReduxReducer } from "../redux-store/redux-reducer";

export abstract class BaseReducer {
  private reduxReducer: ReduxReducer = ReduxReducer.getInstance();

  constructor() {
    this.reduxReducer.setReducer(this.registerReducer());
  }

  protected abstract registerReducer(): ReducersMapObject;
}

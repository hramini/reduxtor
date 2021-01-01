import { ReducersMapObject } from 'redux';

export class ReduxReducer {
  private static instance: ReduxReducer;
  private reducers: ReducersMapObject = {};

  public setReducer(reducer: ReducersMapObject): void {
    this.reducers = { ...this.reducers, ...reducer };
  }

  public static getInstance(): ReduxReducer {
    if (!this.instance) {
      this.instance = new ReduxReducer();
    }
    return this.instance;
  }

  public getReducers(): ReducersMapObject {
    return this.reducers;
  }
}

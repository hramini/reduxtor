import { AnyAction } from 'redux';

export interface IAction extends AnyAction {
  componentName?: string[];
}

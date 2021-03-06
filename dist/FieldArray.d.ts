import * as React from 'react';
import { SharedRenderProps, FormikProps } from './types';
export declare type FieldArrayRenderProps = ArrayHelpers & {
  form: FormikProps<any>;
  name: string;
};
export declare type FieldArrayConfig = {
  name: string;
  validateOnChange?: boolean;
} & SharedRenderProps<FieldArrayRenderProps>;
export interface ArrayHelpers {
  push: (obj: any) => void;
  handlePush: (obj: any) => () => void;
  swap: (indexA: number, indexB: number) => void;
  handleSwap: (indexA: number, indexB: number) => () => void;
  move: (from: number, to: number) => void;
  handleMove: (from: number, to: number) => () => void;
  insert: (index: number, value: any) => void;
  handleInsert: (index: number, value: any) => () => void;
  replace: (index: number, value: any) => void;
  handleReplace: (index: number, value: any) => () => void;
  unshift: (value: any) => number;
  handleUnshift: (value: any) => () => void;
  handleRemove: (index: number) => () => void;
  handlePop: () => () => void;
  remove<T>(index: number): T | undefined;
  pop<T>(): T | undefined;
}
export declare const move: (
  array: any[],
  from: number,
  to: number
) => unknown[];
export declare const swap: (
  arrayLike: ArrayLike<any>,
  indexA: number,
  indexB: number
) => unknown[];
export declare const insert: (
  arrayLike: ArrayLike<any>,
  index: number,
  value: any
) => unknown[];
export declare const replace: (
  arrayLike: ArrayLike<any>,
  index: number,
  value: any
) => unknown[];
export declare const FieldArray: React.ComponentType<FieldArrayConfig>;

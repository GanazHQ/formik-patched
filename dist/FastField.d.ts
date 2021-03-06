import * as React from 'react';
import {
  FormikProps,
  GenericFieldHTMLAttributes,
  FormikContextType,
  FieldMetaProps,
  FieldInputProps,
} from './types';
import { FieldConfig } from './Field';
export interface FastFieldProps<V = any> {
  field: FieldInputProps<V>;
  meta: FieldMetaProps<V>;
  form: FormikProps<V>;
}
export declare type FastFieldConfig<T> = FieldConfig & {
  shouldUpdate?: (
    nextProps: T & GenericFieldHTMLAttributes,
    props: {}
  ) => boolean;
};
export declare type FastFieldAttributes<T> = GenericFieldHTMLAttributes &
  FastFieldConfig<T> &
  T;
export declare class FastField<Values = {}, Props = {}> extends React.Component<
  FastFieldAttributes<Props>,
  {}
> {
  static contextType: React.Context<FormikContextType<any>>;
  constructor(props: FastFieldAttributes<Props>);
  shouldComponentUpdate(
    props: FastFieldAttributes<Props>,
    _state: {},
    context: FormikContextType<Values>
  ): boolean;
  componentDidMount(): void;
  componentDidUpdate(prevProps: FastFieldAttributes<Props>): void;
  componentWillUnmount(): void;
  render(): any;
}

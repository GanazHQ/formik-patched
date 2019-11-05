import * as React from 'react';
import {
  FormikProps,
  GenericFieldHTMLAttributes,
  FieldMetaProps,
  FieldInputProps,
  FieldValidator,
} from './types';
export interface FieldProps<V = any> {
  field: FieldInputProps<V>;
  form: FormikProps<V>;
  meta: FieldMetaProps<V>;
}
export interface FieldConfig {
  component?:
    | keyof JSX.IntrinsicElements
    | React.ComponentType<FieldProps<any>>
    | React.ComponentType;
  as?:
    | React.ComponentType<FieldProps<any>['field']>
    | keyof JSX.IntrinsicElements
    | React.ComponentType;
  render?: (props: FieldProps<any>) => React.ReactNode;
  children?: ((props: FieldProps<any>) => React.ReactNode) | React.ReactNode;
  validate?: FieldValidator;
  name: string;
  type?: string;
  value?: any;
  innerRef?: (instance: any) => void;
}
export declare type FieldAttributes<T> = GenericFieldHTMLAttributes &
  FieldConfig &
  T & {
    name: string;
  };
export declare function useField<Val = any>(
  propsOrFieldName: string | FieldAttributes<Val>
): [FieldInputProps<Val>, FieldMetaProps<Val>];
export declare function Field({
  validate,
  name,
  render,
  children,
  as: is,
  component,
  ...props
}: FieldAttributes<any>): any;

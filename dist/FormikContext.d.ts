import * as React from 'react';
import { FormikContextType } from './types';
export declare const FormikContext: React.Context<FormikContextType<any>>;
export declare const FormikProvider: React.ProviderExoticComponent<
  React.ProviderProps<FormikContextType<any>>
>;
export declare const FormikConsumer: React.ExoticComponent<
  React.ConsumerProps<FormikContextType<any>>
>;
export declare function useFormikContext<Values>(): FormikContextType<Values>;

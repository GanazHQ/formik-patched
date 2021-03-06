import * as React from 'react';
import { FormikContextType } from './types';
export declare function connect<OuterProps, Values = {}>(
  Comp: React.ComponentType<
    OuterProps & {
      formik: FormikContextType<Values>;
    }
  >
): React.ComponentType<OuterProps>;

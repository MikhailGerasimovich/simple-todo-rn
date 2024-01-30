import { PropsWithChildren } from 'react';

export type ButtonType = PropsWithChildren<{
  onPress: () => void;
}>;

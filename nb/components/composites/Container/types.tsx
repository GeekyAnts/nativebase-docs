import type { IBoxProps } from '../../primitives';

export type IContainerProps = IBoxProps<IContainerProps> & {
  centerContent?: boolean;
};

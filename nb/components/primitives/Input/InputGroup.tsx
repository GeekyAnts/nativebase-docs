import React, { memo, forwardRef } from 'react';
import type { IInputGroupProps } from './types';
import { getAttachedChildren } from '../../../utils';
import Flex from '../Flex';
import { themeTools } from '../../../theme';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const supplyPropsToChildren = (children: any, props: any) => {
  return React.Children.map(children, (child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const InputGroup = memo(
  forwardRef(({ children, ...props }: IInputGroupProps, ref: any) => {
    let [layoutProps, remProps] = themeTools.extractInObject(props, [
      'w',
      'width',
      'm',
      'mr',
      'ml',
      'mt',
      'mb',
      'mx',
      'my',
    ]);
    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(props)) {
      return null;
    }
    return (
      <Flex direction="row" {...layoutProps} ref={ref}>
        {supplyPropsToChildren(getAttachedChildren(children), remProps)}
      </Flex>
    );
  })
);

import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { Center } from '../../composites/Center';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import type { IRadioProps } from './types';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';
import { useFocusRing } from '@react-native-aria/focus';
import { CircleIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { combineContextAndProps, isEmptyObj } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';

const Radio = (
  { icon, children, wrapperRef, ...props }: IRadioProps,
  ref: any
) => {
  const contextState = React.useContext(RadioContext);

  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(contextState, props);

  const inputRef = React.useRef(null);
  const { inputProps } = useRadio(
    { ...props, 'aria-label': props.accessibilityLabel, children },
    contextState.state ?? {},
    inputRef
  );
  const { disabled: isDisabled, checked: isChecked } = inputProps;

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);
  const mergedRefs = mergeRefs([_ref, wrapperRef]);
  const { focusProps, isFocusVisible } = useFocusRing();

  // only calling below function when icon exist.
  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      ..._icon,
    });

  const { _interactionBox, _icon, ...resolvedProps } = usePropsResolution(
    'Radio',
    combinedProps,
    {
      isInvalid,
      isReadOnly,
      isFocusVisible,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered,
    }
  );

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    '_text',
  ]);

  const component = (
    <Box
      flexDirection="row"
      alignItems="center"
      {...layoutProps}
      opacity={isDisabled ? 0.4 : 1}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
    >
      <Center>
        {/* Interaction Box */}
        <Box
          {..._interactionBox}
          style={{
            // @ts-ignore - only for web"
            transition: 'height 200ms, width 200ms',
          }}
          h={isFocusVisible || isHovered ? '200%' : '100%'}
          w={isFocusVisible || isHovered ? '200%' : '100%'}
        />
        {/* Radio */}
        <Center {...nonLayoutProps}>
          {icon && sizedIcon && isChecked ? (
            sizedIcon()
          ) : (
            <CircleIcon {..._icon} opacity={isChecked ? 1 : 0} />
          )}
        </Center>
      </Center>
      {children}
    </Box>
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (isEmptyObj(contextState)) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
    return <></>;
  }

  return (
    <Box
      // @ts-ignore - RN web supports accessibilityRole="label"
      accessibilityRole="label"
      ref={mergedRefs}
    >
      <VisuallyHidden>
        <input {...inputProps} ref={ref} {...focusProps} />
      </VisuallyHidden>
      {component}
    </Box>
  );
};

export default memo(forwardRef(Radio));

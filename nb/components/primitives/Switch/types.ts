import type { SwitchProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';

import type { ResponsiveValue } from '../../../components/types';
import type { ISizes } from '../../../theme/base/sizes';
import type { IColors } from '../../../theme/base/colors';

export interface ISwitchProps
  extends Omit<SwitchProps, 'tintColor'>,
    StyledProps {
  /**
   * The size (width and height) of the switch.
   * @default md
   */
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  /**
   * If true, set the disabled to the invalid state.
   */
  isDisabled?: boolean;
  /**
   * The input name of the Switch when used in a form.
   */
  name?: string;
  /**
   * Function called when the state of the Switch changes.
   */
  onToggle?: () => any;
  /**
   * If true, set the Switch to the checked state.
   */
  isChecked?: boolean;
  /**
   * If true, the checkbox will be initially checked.
   */
  defaultIsChecked?: boolean;
  /**
   * If true, set the switch to the invalid state.
   */
  isInvalid?: boolean;
  /**
   * The track color of the Switch when on.
   */
  onTrackColor?: ResponsiveValue<IColors | (string & {})>;
  /**
   * The track color of the Switch when off.
   */
  offTrackColor?: ResponsiveValue<IColors | (string & {})>;
  /**
   * The thumb color of the Switch when on.
   */
  onThumbColor?: ResponsiveValue<IColors | (string & {})>;
  /**
   * The thumb color of the Switch when off.
   */
  offThumbColor?: ResponsiveValue<IColors | (string & {})>;
  /**
   * Color scheme to be used for the Switch
   */
  colorScheme?: string;
  /**
   * Props when Switch is hovered. Accepts all the Switch props.
   */
  _hover?: Omit<ISwitchProps, '_hover'>;
}

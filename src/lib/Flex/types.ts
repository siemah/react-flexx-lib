/**
 * @author siemah
 * @version 1.0.0
 * @package dayenio.ml.web.react
 */

 // justify content className
export enum JustifyContent {
  START = 'justify-content_start',
  END = 'justify-content_end',
  CENTER = 'justify-content_center',
  FLEX_START = 'justify-content_flex-start',
  FLEX_END = 'justify-content_flex-end',
  LEFT = 'justify-content_left',
  RIGHT = 'justify-content_right',
  STRETCH = 'justify-content_stretch',
  SPACE_BETWEEN = 'justify-content_space-between',
  SPACE_ARROUND = 'justify-content_space-around',
  SPACE_EVENTLY = 'justify-content_space-evenly',
}

// justify content className
export enum Direction {
  ROW = 'flex-direction_row',
  ROW_REVERSE = 'flex-direction_row-reverse',
  COLUMN = 'flex-direction_column',
  COLUMN_REVERSE = 'flex-direction_column-reverse',
}

// Flex props types
export interface FlexProps {
  className?: string;
  children?: React.ReactNode;
  style?: object;
  justifyContent?: JustifyContent;
  direction?: Direction;
}
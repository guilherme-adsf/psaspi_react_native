import React from 'react';
import styled from 'styled-components/native';
import {COLOR_LIGHT_BLACK} from '~/theme/colors';
import {
  FONT_SIZE_8PX,
  FONT_SIZE_10PX,
  FONT_SIZE_12PX,
  FONT_SIZE_13PX,
  FONT_SIZE_15PX,
  FONT_SIZE_20PX,
  FONT_SIZE_30PX,
} from '~/theme/text-styles';

export default ({...props}) => {
  return <Text {...props}>{props.children}</Text>;
};

const Text = styled.Text`
  color: ${(props) => props.color ?? COLOR_LIGHT_BLACK};
  ${({
    FONTSIZE8,
    FONTSIZE10,
    FONTSIZE12,
    FONTSIZE13,
    FONTSIZE15,
    FONTSIZE20,
    FONTSIZE30,
  }) => {
    switch (true) {
      case FONTSIZE8:
        return `font-size: ${FONT_SIZE_8PX}`;
      case FONTSIZE10:
        return `font-size: ${FONT_SIZE_10PX}`;
      case FONTSIZE12:
        return `font-size: ${FONT_SIZE_12PX}`;
      case FONTSIZE13:
        return `font-size: ${FONT_SIZE_13PX}`;
      case FONTSIZE15:
        return `font-size: ${FONT_SIZE_15PX}`;
      case FONTSIZE20:
        return `font-size: ${FONT_SIZE_20PX}`;
      case FONTSIZE30:
        return `font-size: ${FONT_SIZE_30PX}`;
      default:
        return `font-size: ${FONT_SIZE_20PX}`;
    }
  }};
  ${({POPPINS400, POPPINS500, POPPINS700, RALEWAY700}) => {
    switch (true) {
      case POPPINS400:
        return 'font-family: poppins-regular';
      case POPPINS500:
        return 'font-family: poppins-medium';
      case POPPINS700:
        return 'font-family: poppins-bold';
      case RALEWAY700:
        return 'font-family: raleway-bold';
      default:
        return 'font-family: poppins-regular';
    }
  }}
`;

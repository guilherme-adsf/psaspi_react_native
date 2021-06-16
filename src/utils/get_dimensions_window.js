import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';

export const get_percent_height = (percent) => `${hdp(percent)}px`;

export const get_percent_width = (percent) => `${wdp(percent)}px`;

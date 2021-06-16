import {Toast} from 'native-base';

export const show_toast_bottom = ({
  text,
  type = 'warning',
  duration = 4000,
}) => {
  Toast.show({
    text,
    duration,
    type,
  });
};

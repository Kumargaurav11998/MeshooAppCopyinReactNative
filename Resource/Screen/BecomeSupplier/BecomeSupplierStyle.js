import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
  },
  loadingtext: {
    color: colors.white,
    fontSize: fontSize.Splash,
  },
});

import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  btn: {
    position: 'absolute',
    bottom: 0,
  },

  txtinpute: {
    width: width - 20,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '5%',
  },
});

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
    left: 0,
    right: 0,
  },

  txtinpute: {
    width: width - 20,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '1%',
  },
  checkedtxtstyle: {
    color: colors.txtgrey,
    fontWeight: '400',
  },
  checkedstyle: {
    marginTop: '5%',
  },
  flexWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerKey: {
    flex: 1,
    backgroundColor: colors.black,
  },
  stateView: {
    marginTop: '5%',
  },
  loadingtext: {
    fontSize: fontSize.Splash,
    color: colors.white,
  },
});

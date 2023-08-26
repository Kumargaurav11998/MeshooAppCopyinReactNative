import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subheadertxt: {
    color: colors.txtgrey,
    marginLeft: '3%',
    marginTop: '2%',
    fontSize: fontSize.lable,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
  },
  main: {marginTop: '0%'},
  txtinpute: {
    width: width - 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '2%',
  },
  passtxt: {
    color: colors.txtgrey,
    marginTop: '4%',
  },
  flexWithJustify: {flexDirection: 'row', justifyContent: 'space-between'},
  flexWithoutJustify: {
    flexDirection: 'row',
  },
  txtterm: {
    color: colors.txtgrey,
    fontSize: 12,
  },
  genderview: {
    marginTop: '5%',
  },
});

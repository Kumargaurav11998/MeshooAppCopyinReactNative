import {StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topindicator: {
    alignSelf: 'center',
    width: width,
    marginTop: '3%',
  },
  subhead: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  flexjustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: fontSize.lable,
    fontWeight: '700',
    color: colors.black,
    marginLeft: '5%',
  },
  txtinpute: {
    backgroundColor: colors.white,
    marginTop: '5%',
  },
  Divider: {
    width: width,
    color: colors.grey,
    marginTop: '5%',
  },
  flexrow: {
    flexDirection: 'row',
  },
  mainview: {
    width: width - 20,
    alignSelf: 'center',
  },
  label: {
    color: colors.black,
    marginTop: '1%',
    fontSize: 18,
  },
});

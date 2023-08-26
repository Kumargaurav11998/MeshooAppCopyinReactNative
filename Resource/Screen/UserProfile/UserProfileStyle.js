import {Dimensions, StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatarconatner: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  addpictxt: {
    textAlign: 'center',
    marginTop: '5%',
    color: colors.AppDefaultColor,
    fontSize: fontSize.lable,
    fontWeight: '600',
  },
  txtinpute: {
    width: width - 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '2%',
  },
  genderview: {
    marginTop: '5%',
  },
  btnstyle: {
    marginTop: '5%',
    width: width - 10,
    alignSelf: 'center',
    marginBottom: '1%',
  },
  loadingtext: {
    color: colors.white,
    fontSize: fontSize.Splash,
  },
});

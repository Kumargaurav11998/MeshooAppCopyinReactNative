import {fonts} from '@rneui/base';
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  HeaderView: {
    width: width,
    backgroundColor: colors.AppDefaultColor,
    //  height: height / 12,
  },
  FlexDirectionWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FlexDirectionWithoutJustify: {
    flexDirection: 'row',
  },
  SplacepingHorizontalkfive: {
    paddingHorizontal: '5%',
  },
  headertxt: {
    paddingTop: '2%',
    color: colors.white,
    fontSize: fontSize.lable,
  },
  spacingtopmargin: {
    marginTop: '3%',
  },
  topAccountstyle: {
    backgroundColor: colors.white,
  },
  spacingvertical: {
    paddingVertical: '5%',
  },
  useravtarconatner: {marginLeft: '5%'},
  usernametxt: {
    color: colors.black,
    paddingTop: '6%',
    paddingLeft: '5%',
    fontSize: fontSize.lable,
    fontWeight: '600',
  },
  rightarrowiconcontaner: {
    marginTop: '8%',
  },
  helpcentertxt: {
    color: colors.black,
    marginTop: '2%',
    marginLeft: '5%',
    fontSize: fontSize.lable,
  },
  Dividerstyle: {marginTop: '2%'},
  Bottom: {
    height: 100,
  },
  dailytxt: {
    textAlign: 'center',
    marginTop: '8%',
    color: colors.AppDefaultColor,
    fontSize: fontSize.Splash,
    fontWeight: '600',
  },
  versiontxt: {
    textAlign: 'center',
    color: colors.grey,
  },
  bottomsheetstyle: {
    backgroundColor: colors.AppDefaultColor,
    height: height,
  },

  BottomSheetView: {
    width: width,
    height: height / 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: radious.borderradious,
    borderTopRightRadius: radious.borderradious,
  },
  PhoneContner: {
    alignSelf: 'center',
    marginTop: '5%',
    width: width - 20,
    borderRadius: radious.borderradious,
  },
  textinputecontner: {
    borderRadius: radious.borderradious,
    backgroundColor: colors.white,
  },

  logotxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.Splash,
    marginBottom: '50%',
    fontWeight: '600',
  },
  optstyle: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    width: width - 10,
  },
  sublogo: {
    textAlign: 'center',
    color: colors.AppDefaultColor,
    fontSize: fontSize.lable,
    paddingVertical: '2%',
  },
  optinputestyle: {
    borderColor: colors.txtgrey,
    borderRadius: radious.borderradious,
    color: colors.AppDefaultColor,
  },
  otpinputehilight: {
    borderColor: colors.AppDefaultColor,
    borderWidth: 2,
  },
  loadingtext: {
    color: colors.white,
    fontSize: fontSize.Splash,
  },
});

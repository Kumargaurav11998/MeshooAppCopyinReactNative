import {fonts} from '@rneui/base';
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';
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
    paddingTop: '1%',
    paddingLeft: '2%',
    color: colors.white,
    fontSize: fontSize.lable,
  },
  spacingtopmargin: {
    marginTop: '3%',
  },
  notes: {
    backgroundColor: colors.lightygrey,
  },
  spacingvertical: {
    paddingVertical: '5%',
  },
  notestxtx: {marginHorizontal: '3%', textAlign: 'left'},
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
  txtinpute: {
    width: width - 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '2%',
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
});

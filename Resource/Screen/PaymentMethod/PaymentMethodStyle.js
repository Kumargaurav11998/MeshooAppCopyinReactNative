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
    color: colors.txtgrey,
    marginTop: '3%',
  },
  flexjustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: fontSize.lable,
    color: colors.black,
    fontWeight: '500',
    marginLeft: '5%',
  },
  Dividersub: {
    marginTop: '3%',
    color: colors.grey,
  },

  flexrow: {
    flexDirection: 'row',
  },
  mainview: {
    width: width - 30,
    alignSelf: 'center',
    marginTop: '5%',
  },
  imgavatar: {
    resizeMode: 'contain',
  },
  contanerimg: {
    // backgroundColor: colors.AppDefaultColor,
    width: 110,
    height: 20,
  },
  txt: {
    color: colors.txtgrey,
  },
  Subtitletxt: {
    color: colors.black,
    fontSize: fontSize.txt,
    fontWeight: '400',
  },
  bottomview: {
    position: 'absolute',
    bottom: 0,
    left: '0%',
    right: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
    height: 60,
  },
  totalprice: {
    color: colors.black,
    marginTop: '3%',
    fontSize: fontSize.Splash,
    fontWeight: '600',
  },
  divider: {
    width: width,
    marginLeft: '2%',
    marginBottom: '2.5%',
  },
  upitxt: {
    color: colors.black,
    borderWidth: 2,
    paddingHorizontal: '1%',
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: '0.5%',
  },
  logoimg: {
    width: 60,
    height: 30,
    //  marginLeft: '5%',
  },
  loadingtext: {
    fontSize: fontSize.Splash,
    color: colors.AppDefaultColor,
  },
  simmer: {
    opacity: 1,
  },
  txtinpute: {
    width: width - 50,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '5%',
  },
});

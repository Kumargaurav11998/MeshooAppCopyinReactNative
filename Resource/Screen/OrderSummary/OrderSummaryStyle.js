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
    marginVertical: '5%',
  },
  flexjustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: fontSize.lable,
    color: colors.black,
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
  },
  imgavatar: {
    resizeMode: 'cover',
    borderRadius: radious.radiousfive,
  },
  contanerimg: {
    marginTop: '5%',
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
});

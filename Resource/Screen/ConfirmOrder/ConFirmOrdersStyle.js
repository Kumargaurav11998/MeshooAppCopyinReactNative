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

  titletxt: {
    fontSize: fontSize.lable,
    color: colors.black,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '10%',
  },
  header: {
    fontSize: fontSize.lable,
    backgroundColor: colors.AppDefaultColor,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: '4%',
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
    alignSelf: 'center',
    marginTop: '15%',
  },
});

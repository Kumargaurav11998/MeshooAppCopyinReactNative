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
    marginTop: '5%',
  },
  cardstyle: {
    borderWidth: 0.5,
    borderColor: colors.lightygrey,
    borderRadius: radious.borderradious,
    width: width - 25,
    alignSelf: 'center',
    padding: '3%',
    marginVertical: '1%',
  },
  flexjustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletxt: {
    fontSize: fontSize.lable,
    fontWeight: '700',
    color: colors.black,
  },
  txt: {
    color: colors.grey,
  },
  edtTxt: {
    color: colors.AppDefaultColor,
    fontSize: fontSize.lable,
    marginVertical: '5%',
  },
});

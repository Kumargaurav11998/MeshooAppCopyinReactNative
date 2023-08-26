import {StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ViewStyle: {
    width: width - 30,
    alignSelf: 'center',
  },
  labeltxt: {
    fontSize: fontSize.lable,
    color: colors.AppDefaultColor,
    marginTop: '5%',
    left: '1%',
    marginBottom: '2%',
  },
  txtinpute: {
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  txtinputeDes: {
    backgroundColor: colors.white,
    height: 120,
    textAlignVertical: 'top',
  },
  slectscreensshotview: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    right: 20,
    marginTop: '5%',

    borderRadius: 5,
  },
});

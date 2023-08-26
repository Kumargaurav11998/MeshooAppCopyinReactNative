import {StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cardview: {
    borderWidth: 0.5,
    borderColor: colors.lightygrey,
    borderRadius: radious.borderradious,
    width: width - 30,
    alignSelf: 'center',
    marginTop: '2%',
  },
  justifyWith: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginTop: '2%',
  },
  Labeltxt: {
    color: colors.AppDefaultColor,
    fontSize: fontSize.lable,
  },
  txt: {
    color: colors.black,
    fontSize: fontSize.lable,
  },
  hlistheader: {
    width: width - 30,
    alignSelf: 'center',
    marginVertical: '5%',
  },
  TicketHistorytxtx: {
    paddingTop: '3%',
    fontSize: fontSize.Splash,
    color: colors.txtgrey,
  },
});

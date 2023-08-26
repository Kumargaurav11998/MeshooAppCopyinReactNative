import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subheading: {
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.lable,
    marginLeft: '7%',
    marginTop: '2%',
  },
  flexDirectionWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.black,
    fontSize: fontSize.lable,
    paddingLeft: '5%',
    marginTop: '1%',
  },
  cardstyle: {
    width: Dimensions.get('window').width - 10,
    alignSelf: 'center',
    marginTop: '5%',
    borderWidth: 1,
    paddingVertical: '5%',
    borderColor: colors.lightygrey,
    borderRadius: radious.radiousfive,
    zIndex: 1000,
  },
  switchstyle: {
    color: colors.AppDefaultColor,
    marginRight: '3%',
  },
  labelchnage: {
    color: colors.black,
    fontSize: fontSize.lable,
    textAlign: 'center',
  },

  txtinpute: {
    width: width - 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: '2%',
  },
});

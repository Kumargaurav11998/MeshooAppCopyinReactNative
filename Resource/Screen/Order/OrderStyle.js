import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flexDirectionWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirectionWithoutJustify: {
    flexDirection: 'row',
  },
  headertxt: {
    fontSize: fontSize.lable,
    margin: '2%',
    color: colors.white,
  },
  headerview: {
    backgroundColor: colors.AppDefaultColor,
  },
  spacing: {
    paddingHorizontal: '2%',
  },
  profuctlistcard: {
    borderRadius: radious.borderradious,
    padding: 2,
  },
  productlistimg: {
    borderRadius: radious.radiousfive,
  },
  producttitle: {
    marginTop: '3%',
    color: colors.black,
    fontSize: fontSize.lable,
  },
  spacingForDeatils: {
    paddingHorizontal: '5%',
    marginVertical: '1%',
  },
  TrackOrdertxt: {
    color: colors.AppDefaultColor,
  },
  rightxt: {
    color: colors.black,
  },
});

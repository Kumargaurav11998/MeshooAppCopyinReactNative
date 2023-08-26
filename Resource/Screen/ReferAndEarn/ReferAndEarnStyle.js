import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  containerStyle: {
    width: width,
    height: height / 3,
  },
  avatarStyle: {
    resizeMode: 'cover',
  },
  FlexDirectionWithoutJustify: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SplacepingHorizontalkfive: {
    paddingHorizontal: '5%',
  },
  btn: {
    backgroundColor: colors.AppDefaultColor,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  btntitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize.lable,
  },
  termtxt: {
    color: colors.AppDefaultColor,
    marginTop: '5%',
  },
});

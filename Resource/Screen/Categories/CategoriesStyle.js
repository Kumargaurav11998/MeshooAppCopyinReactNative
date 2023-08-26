import {StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainview: {
    alignSelf: 'center',
    margin: 10,
  },
  avatarimg: {
    resizeMode: 'contain',
    borderRadius: radious.borderradious,
  },
  FlatListstyle: {
    width: width,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
  conterimg: {
    height: 100,
    width: width / 3.8,
    alignSelf: 'center',
  },

  contnerthumbnail: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: radious.borderradious,
  },
  thumbmainview: {margin: 10, marginBottom: 5},
  flexDirectionWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirectionWithoutJustify: {
    flexDirection: 'row',
  },
  headertxt: {
    fontSize: fontSize.lable,
    color: colors.white,
  },
  headerview: {
    backgroundColor: colors.AppDefaultColor,
    width: width,
  },
  spacing: {
    paddingHorizontal: '2%',
  },
  subitemtxt: {
    textAlign: 'center',
    color: colors.txtgrey,
    fontSize: fontSize.lable,
  },
  categoryname: {
    color: colors.AppDefaultColor,
    textAlign: 'center',
    marginBottom: -5,
  },
  emtysubcategory: {
    color: colors.black,
    textAlign: 'center',
    marginTop: '50%',
  },
});

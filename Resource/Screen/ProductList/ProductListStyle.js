import {StyleSheet} from 'react-native';
import {width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flewithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subheaderview: {
    flexDirection: 'row',
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 0.5,
    height: 40,
    borderColor: colors.lightygrey,
  },
  subheader: {
    alignSelf: 'center',
    alignItems: 'center',
    width: width,
  },
  subheadertxt: {
    fontSize: fontSize.lable,
    color: colors.black,
  },
  productimg: {
    resizeMode: 'contain',
    padding: 5,
    margin: 5,
  },
  imgcateogycontainer: {
    alignSelf: 'center',
  },
  categorycard: {
    borderRadius: 10,
    margin: 10,
  },
  txtcategory: {
    textAlign: 'center',
    color: colors.AppDefaultColor,
  },
  bannerstyle: {
    borderRadius: radious.borderradious,
    width: '97%',
    marginTop: 5,
  },
  label: {
    color: colors.AppDefaultColor,
    alignSelf: 'flex-start',
    fontSize: fontSize.lable,
  },
  itemcard: {
    alignSelf: 'center',
    width: width / 2.05,
    borderRadius: radious.borderradious,
    padding: 5,
  },
  Cardsty: {
    padding: 0,
    alignSelf: 'center',
    width: width / 2,
  },
  itemavatar: {alignSelf: 'center'},
  des: {textAlign: 'center', color: colors.grey},
  rS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inrtxt: {
    color: colors.black,
    fontSize: fontSize.txt,
    alignSelf: 'flex-start',
    marginLeft: '15%',
  },
  wishlisticon: {
    color: colors.black,
    fontSize: fontSize.lable,
    position: 'absolute',
    right: '0%',
  },
  pricecut: {
    position: 'relative',
    bottom: '40%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  ratingview: {
    backgroundColor: colors.AppDefaultColor,
    flexDirection: 'row',
    height: 21,
    borderRadius: radious.borderradious,
  },
  ratingtxt: {
    color: colors.white,
    paddingRight: '5%',
    fontSize: fontSize.txt,
  },
  priceview: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: '5%',
  },
  ruppeiconconatner: {
    marginTop: '8%',
  },
  subcategoryavatar: {
    borderWidth: 1,
    marginHorizontal: '2%',
    backgroundColor: colors.black,
    borderColor: colors.lightygrey,
  },
  divider: {
    marginVertical: '2%',
  },
  sortlisttxt: {
    color: colors.txtgrey,
    paddingTop: '2%',
    fontSize: fontSize.txt,
  },
  checkboccategorycontainer: {
    alignSelf: 'flex-start',
  },
  checkboxtitlecategory: {
    fontSize: fontSize.txt,
    fontWeight: '500',
    color: colors.txtgrey,
  },
});

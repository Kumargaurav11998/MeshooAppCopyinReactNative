import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  Header: {
    width: width,

    backgroundColor: colors.AppDefaultColor,
  },
  HeaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    backgroundColor: colors.AppDefaultColor,
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  usericon: {
    borderColor: colors.white,
    margin: '5%',
    backgroundColor: colors.white,
    marginTop: '10%',
  },
  usericonleft: {
    marginTop: '10%',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  subheader: {flexDirection: 'row', alignSelf: 'flex-end'},
  subheaderLeft: {
    flexDirection: 'row',
  },
  username: {
    marginTop: '14%',
    color: colors.white,
    // textAlign: 'center',
  },
  searchcontainer: {
    backgroundColor: colors.AppDefaultColor,
    borderColor: colors.AppDefaultColor,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchinputecontainer: {
    backgroundColor: colors.white,
  },
  categoryimg: {
    borderRadius: 10,
    padding: 0,
    margin: 0,
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
    fontSize: fontSize.txt,
  },
  itemcard: {
    alignSelf: 'center',
    width: width / 2.05,
    borderRadius: radious.borderradious,
    padding: 5,
    height: height / 3,
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
    // marginTop: '5%',
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
  },
});

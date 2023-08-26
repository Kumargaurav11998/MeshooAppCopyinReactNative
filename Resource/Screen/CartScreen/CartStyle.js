import {fonts} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {height, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.AppDefaultColor,
    backfaceVisibility: 'hidden',
  },
  subheader: {flexDirection: 'row'},
  headertxt: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 18,
    color: colors.white,
  },
  bottomview: {
    position: 'absolute',
    bottom: 0,
    left: '0%',
    right: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
    height: 60,
  },
  topindicator: {
    alignSelf: 'center',
    width: width,
    marginTop: '5%',
  },
  totalprice: {
    color: colors.black,
    marginTop: '3%',
    fontSize: fontSize.Splash,
    fontWeight: '600',
  },
  cardwrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
  },
  quntystyle: {
    borderWidth: 1,
    marginTop: '3%',
    marginRight: '5%',
    borderRadius: radious.borderradious,
    borderColor: colors.grey,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  counertxt: {
    color: colors.black,
    paddingVertical: '3%',
  },
  flexwithoutjustify: {
    flexDirection: 'row',
  },
  pricetxt: {
    color: colors.black,
    paddingVertical: '4%',
    fontSize: fontSize.lable,
  },
  cardconatner: {
    elevation: 5,
    borderRadius: radious.borderradious,
    padding: 0,
    paddingBottom: 5,
    paddingHorizontal: 2,
    marginBottom: 5,
  },
  cardbottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dividerstyle: {
    marginVertical: '5%',
  },
  cardsecondview: {
    marginLeft: '5%',
  },
  imagecontner: {
    borderRadius: radious.borderradious,
    marginTop: '5%',
  },
  producttitle: {
    color: colors.txtgrey,
    fontSize: fontSize.lable,
    marginTop: '5%',
  },
  ActivityIndicator: {
    marginTop: height / 2.5,
  },
  emptycontner: {
    alignSelf: 'center',
    marginTop: '50%',
  },
});

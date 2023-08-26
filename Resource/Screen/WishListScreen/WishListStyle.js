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
  Cardsty: {
    padding: 0,
    alignSelf: 'center',
    width: width / 2,
  },
  itemcard: {
    alignSelf: 'center',
    width: width / 2.05,
    borderRadius: radious.borderradious,
    padding: 5,
    height: height / 3,
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
  emptycontner: {
    alignSelf: 'center',
    marginTop: '50%',
  },
  emptylabel: {
    textAlign: 'center',
    fontSize: fontSize.lable,
    color: colors.black,
  },
  lottie: {
    alignSelf: 'center',
    marginTop: '70%',
  },
});

import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Utils/Colors';
import {fontSize, paddview, radious} from '../../Utils/Size';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //  backgroundColor: colors.white,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.AppDefaultColor,
    backfaceVisibility: 'hidden',
  },
  subheader: {flexDirection: 'row'},
  bannerstyle: {
    //  borderRadius: radious.borderradious,
    width: width - 100,
    marginTop: 5,
    backgroundColor: colors.white,
  },
  dotstyle: {},
  priceview: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  priceshareView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    alignSelf: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: paddview.s,
  },
  flexrowwithoutjus: {
    flexDirection: 'row',
    height: 20,
  },
  wishsharetxt: {
    color: colors.grey,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  titlestyle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.grey,
    paddingLeft: '2%',
  },
  pricetxtx: {
    fontSize: fontSize.lable,
    fontWeight: '600',
    marginTop: -6,
  },
  offerview: {
    borderRadius: radious.radiousfive,
    paddingHorizontal: 5,
    backgroundColor: colors.Brikcolor,
  },
  offertxt: {color: colors.white, fontSize: 18, paddingVertical: '2%'},
  deliverytxt: {
    color: colors.txtgrey,
    marginLeft: '2%',
  },
  startxt: {
    color: colors.white,
    left: 3,
    fontSize: 13,
    top: 1,
  },
  sizeview: {
    backgroundColor: colors.white,
    marginTop: '3%',
    paddingBottom: '3%',
    paddingHorizontal: paddview.s,
    width: width,
  },
  Sizeheight: {
    height: 35,
    marginTop: '3%',
  },
  sizeindise: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: radious.borderradious,
    width: 40,
  },
  sizetxt: {
    padding: 5,
    color: colors.black,

    // marginVertical: 10,
    textAlign: 'center',
  },
  flexrowWitjSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: paddview.s,
  },
  flexrow: {
    flexDirection: 'row',
  },
  counertxt: {
    color: colors.black,
    paddingTop: '2%',
    fontWeight: '600',
  },
  cardcounter: {
    borderWidth: 1,
    marginTop: '3%',
    marginRight: '5%',
    borderRadius: radious.borderradious,
    borderColor: colors.grey,
    alignSelf: 'flex-start',
  },
  label: {
    fontWeight: '500',
    fontSize: 15,
    color: colors.black,
  },
  Sublabel: {
    color: colors.grey,
    fontWeight: '500',
  },
  BottomTab: {
    height: 50,
    backgroundColor: colors.white,
  },
  btncart: {
    height: 40,
    borderWidth: 1,
    marginVertical: '2%',
    borderRadius: radious.radiousfive,
    width: width / 2.5,
    alignSelf: 'center',
  },
  addtocarttxt: {
    paddingTop: '5%',
    color: colors.black,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  buynowbtn: {
    height: 40,
    backgroundColor: colors.AppDefaultColor,
    marginVertical: '2%',
    width: width / 2.5,
    borderRadius: radious.radiousfive,
    alignSelf: 'center',
    paddingHorizontal: '10%',
  },
  buynowtxt: {
    paddingTop: '12%',
    color: colors.white,
    //   paddingHorizontal: 10,
    textAlign: 'center',
  },
  fakebottom: {
    height: 55,
    backgroundColor: colors.black,
    marginTop: '3%',
  },
  simlerProductImgConatner: {
    borderRadius: radious.borderradious,
  },
  similerproductTuch: {
    margin: 5,
    width: width / 3,

    elevation: 5,
  },
  simmlerproductTxt: {
    textAlign: 'center',
    color: colors.black,
  },
  rS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  priceview: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  pricecut: {
    position: 'relative',

    bottom: '40%',
  },
  bottomsheet: {
    backgroundColor: colors.white,
    marginTop: 5,
  },
  sliderview: {
    width: width - 100,
    alignSelf: 'center',

    backgroundColor: colors.white,
  },
  starAndratingview: {
    borderRadius: radious.borderradious,
    paddingHorizontal: 2,
    backgroundColor: colors.Brikcolor,
  },
  headertxt: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 18,
    color: colors.white,
  },
  bottomsheetstyle: {backgroundColor: 'rgba(0, 0, 0, 0.8)'},
  bottomSheetScroll: {
    height: height / 1.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: radious.borderradious,
    borderTopRightRadius: radious.borderradious,
    alignSelf: 'center',
    width: width - 10,
  },
  reviewheaderview: {
    backgroundColor: colors.AppDefaultColor,
    alignSelf: 'center',
    borderTopLeftRadius: radious.borderradious,
    borderTopRightRadius: radious.borderradious,
    width: '100%',
    height: 30,
  },
  Dividerstyle: {
    position: 'relative',

    marginVertical: '3%',
  },
  bottomSheetheadertxt: {
    color: colors.white,
    textAlign: 'center',
    marginTop: 5,
  },
  bottmsheetusericon: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  loadingtext: {
    textAlign: 'center',
    fontSize: fontSize.Splash,
    color: colors.AppDefaultColor,
  },
  simmer: {
    marginTop: '60%',
    alignSelf: 'center',
  },
  noreviewtxtx: {
    textAlign: 'center',
    color: colors.txtgrey,
    marginTop: '10%',
  },
  discountprice: {
    top: -13,
    width: 70,
  },
  activesize: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: radious.borderradious,
    textAlign: 'center',
    paddingTop: '2%',
    paddingHorizontal: '5%',
    color: colors.black,
  },
});

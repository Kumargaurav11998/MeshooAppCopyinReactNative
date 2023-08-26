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
  mainView: {width: width - 20, alignSelf: 'center'},
  justifyspacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headTitle: {
    fontSize: 22,
    color: colors.AppDefaultColor,
    marginTop: '5%',
  },
  contaneravtar: {
    marginTop: '2%',
    width: 60,
    height: 70,
  },
  avatarStyle: {
    resizeMode: 'cover',
    borderRadius: radious.radiousfive,
  },
  divider: {
    marginVertical: '5%',
  },
  indicatorstyle: {
    height: height / 2,
    marginLeft: '2%',
    margin: 0,
    padding: 0,
  },
  txttckinhdetails: {
    position: 'absolute',
    top: '16%',
    width: width - 100,
    left: '10%',
    color: colors.black,
  },
  txttckseemore: {
    position: 'absolute',
    top: '91%',
    width: width - 100,
    left: '11%',
    color: colors.black,
    fontSize: fontSize.lable,
    color: colors.AppDefaultColor,
  },
  label: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
  },
  sublabel: {
    marginTop: 5,
    fontSize: fontSize.lable,
    color: colors.txtgrey,
    marginTop: '2%',
  },
  justifyrow: {
    flexDirection: 'row',
  },
  verticaldivder: {
    marginLeft: '10%',
    color: colors.txtgrey,
  },
  subdetails: {
    marginTop: '5%',
  },
  txt: {
    color: colors.txtgrey,
  },
  cancellbtn: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: colors.grey,
  },
  canceltxt: {
    marginVertical: '4%',
    textAlign: 'center',
    fontSize: fontSize.lable,
    color: colors.black,
  },
  cardview: {
    borderWidth: 0.5,
    borderColor: colors.lightygrey,
    borderRadius: radious.radiousfive,
  },
  modelstyle: {
    backgroundColor: colors.white,
    width: width - 30,
    alignSelf: 'center',
    borderRadius: radious.borderradious,
  },
  reviewheading: {
    textAlign: 'center',
    color: colors.Brikcolor,
    fontSize: fontSize.lable,
  },
  txtinpute: {
    backgroundColor: colors.white,
    height: 150,
    margin: '5%',
    textAlignVertical: 'top',
    padding: 0,
    //color: colors.black,
  },
});

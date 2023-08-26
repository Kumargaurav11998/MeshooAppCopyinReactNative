import {Avatar, CheckBox} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {
  Pressable,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {AddressAction} from '../../Action/AddressAction';
import CustomDropdownComponent from '../../Component/CustomDropDownComponent';
import TouchComponent from '../../Component/TouchComponent';
import {states} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {styles} from './PickUpAddressStyle';
const {width, height} = Dimensions.get('window');
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
import {useEffect} from 'react';
export default PickUpAddressScreen = props => {
  const [Alias, setAlias] = useState('');
  const [isStoreName, setisStoreName] = useState('');
  const [isStreetname, SetStreetName] = useState('');
  const [isLandMark, setlandmark] = useState('');
  const [pincode, setpincode] = useState('');
  const [isDistrict, setDistrict] = useState('');
  const [iscity, setcity] = useState('');
  const [istate, setstate] = useState('');
  const [spinner, setspinner] = useState(false);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.pop()}>
          <Avatar
            size={35}
            icon={{
              name: 'left',
              type: 'antdesign',
              color: colors.white,
            }}
            containerStyle={{marginTop: '5%'}}
          />
        </Pressable>
      ),
    });
  }, [props.navigation]);
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const SellerID = useSelector(state => state.SellerReducer.SellerId[0]);
  const token = useSelector(
    state => state.GoSwiftReducer.GetAccesToken[0].access_token,
  );
  console.log(token, '---------');

  useEffect(() => {
    // PickUpGoSwiftAddress(token);
  }, []);
  const dispatch = useDispatch();

  const AddPickUpAddress = () => {
    if (!Alias) {
      Toast.show({
        type: 'error',
        text1: 'Enter Alias Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isStoreName) {
      Toast.show({
        type: 'error',
        text1: 'Enter Store name or number ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isStreetname) {
      Toast.show({
        type: 'error',
        text1: 'Enter Street or Road Name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isLandMark) {
      Toast.show({
        type: 'error',
        text1: 'Enter pickup Landmark ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!pincode) {
      Toast.show({
        type: 'error',
        text1: 'Enter Pincode ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!iscity) {
      Toast.show({
        type: 'error',
        text1: 'Enter Store city ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isDistrict) {
      Toast.show({
        type: 'error',
        text1: 'Enter District name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!states) {
      Toast.show({
        type: 'error',
        text1: 'Enter state ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      setspinner(true);
      let Data = new FormData();
      Data.append('seller_id', SellerID[0].seller_id);
      Data.append('store_name', isStoreName);
      Data.append('road_name', isStreetname);
      Data.append('landmark', isLandMark);
      Data.append('pin', pincode);
      Data.append('city', iscity);
      Data.append('district', isDistrict);
      Data.append('state', istate);
      dispatch(AddressAction.AddSellerpickUpAddressAction(Data)).then(
        async data => {
          if (data) {
            if (data.sucess) {
              PickUpGoSwiftAddress();
              //
            } else {
              setspinner(false);
              // props.navigation.push('SellerBankDetailsScreen');
              Toast.show({
                text1: data.message,
                position: 'bottom',
                visibilityTime: 2000,
                autoHide: true,
              });
            }
          }
          //  props.navigation.push('SellerBankDetailsScreen')
        },
      );
    }
  };

  //-------------------- add goswift pickup supplier addres -*--------------------------//

  const PickUpGoSwiftAddress = () => {
    var Data = JSON.stringify({
      alias: Alias,
      phone: parseInt(userdetails[0].mobile_no),
      address_line1: isStoreName + isStreetname + isLandMark + isDistrict,
      pincode: parseInt(pincode),
      city: iscity,
      state: istate,
      country: 'IN',
    });
    dispatch(Go_Swift_Action.AddPickUpGoSwiftAddressAction(Data, token)).then(
      async data => {
        if (data) {
          if (data.status) {
            props.navigation.push('SellerBankDetailsScreen');
            Toast.show({
              text1: data.name,
              text2: data.remark,
              position: 'bottom',
              visibilityTime: 3000,
              autoHide: true,
            });
          }
        } else {
          Toast.show({
            text1: 'Something Went Wrong',
            position: 'bottom',
            visibilityTime: 3000,
            autoHide: true,
            type: 'error',
          });
        }

        //
        console.log(data, 'data77777');
      },
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={{marginBottom: '10%'}}>
          <CheckBox
            title="Same as GSTIN address"
            textStyle={[styles.checkedtxtstyle]}
            containerStyle={[styles.checkedstyle]}
          />
          {/* Store name */}
          <TextInput
            label="Alias name"
            placeholder="Enter alias name"
            value={Alias}
            onChangeText={text => setAlias(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            autoCapitalize={true}
          />
          {/* main view text inpute */}
          {/* Store name */}
          <TextInput
            label="Store name / number"
            placeholder="Enter store name or number"
            value={isStoreName}
            onChangeText={text => setisStoreName(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            autoCapitalize={true}
          />
          {/* Street name */}
          <TextInput
            label="Street name"
            placeholder="Street name"
            value={isStreetname}
            onChangeText={text => SetStreetName(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            autoCapitalize={true}
          />

          {/* LAndmark name */}
          <TextInput
            label="Landmark"
            placeholder="Landmark"
            value={isLandMark}
            onChangeText={text => setlandmark(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            autoCapitalize={true}
          />

          {/* Pincode name */}
          <View style={[styles.flexWithJustify, {paddingHorizontal: '2%'}]}>
            <TextInput
              label="Pincode"
              placeholder="Pincode number"
              value={pincode}
              onChangeText={text => setpincode(text)}
              selectionColor={colors.black}
              style={[styles.txtinpute, {width: width / 2.2}]}
              underlineColor={colors.Brikcolor}
              activeUnderlineColor={colors.AppDefaultColor}
              placeholderTextColor={colors.grey}
              autoCapitalize={true}
            />
            <TextInput
              label="City"
              placeholder="City"
              value={iscity}
              onChangeText={text => setcity(text)}
              selectionColor={colors.black}
              style={[styles.txtinpute, {width: width / 2.2}]}
              underlineColor={colors.Brikcolor}
              activeUnderlineColor={colors.AppDefaultColor}
              placeholderTextColor={colors.grey}
              autoCapitalize={true}
            />
          </View>

          {/* District name */}
          <TextInput
            label="District"
            placeholder="District"
            value={isDistrict}
            onChangeText={text => setDistrict(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            autoCapitalize={true}
          />
          <View style={[styles.stateView]}>
            <CustomDropdownComponent
              data={states}
              label="State"
              placeholder="State"
              height={height / 2}
              SelectedValue={istate}
              Getvalue={v => setstate(v)}
              bottomWidth={1.2}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={[styles.btn]}>
        <TouchComponent
          title="Continue"
          titlecolor={colors.white}
          backgroundColor={colors.AppDefaultColor}
          width={width}
          alignSelf="center"
          paddingVertical="3.5%"
          // borderRadius={radious.borderradious}
          marginTop={'15%'}
          press={() => PickUpGoSwiftAddress()}
        />
      </View>

      {spinner && (
        <Spinner
          visible={true}
          overlayColor={'rgba(0, 0, 0, 0.6)'}
          customIndicator={
            <Shimmer style={[styles.simmer]}>
              <Text style={[styles.loadingtext]}>Daily Housing</Text>
            </Shimmer>
          }
          textStyle={styles.spinnerTextStyle}
        />
      )}
    </SafeAreaView>
  );
};

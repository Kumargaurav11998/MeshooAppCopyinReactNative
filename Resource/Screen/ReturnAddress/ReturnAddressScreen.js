import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, ToastAndroid, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, labels, Retunlabels, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {Avatar, Divider} from '@rneui/base';
import {TextInput, RadioButton} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {AddressAction} from '../../Action/AddressAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import {styles} from './ReturnAddressStyle';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';

export const ReturnAddressScreen = props => {
  const [isAddress, setAddress] = useState();
  const [spinner, setspinner] = useState(false);
  const [isName, setName] = useState(isAddress && isAddress.name);
  const [isphone, setphone] = useState(isAddress && isAddress.phone);
  const [isHouse, setHouse] = useState(isAddress && isAddress.house_no);
  const [Isroad, setRoad] = useState(isAddress && isAddress.road_name);
  const [landmark, setlandmark] = useState(isAddress && isAddress.landmark);
  const [isPincode, setPincode] = useState(isAddress && isAddress.pin);
  const [isCity, setCity] = useState(isAddress && isAddress.city);
  const [isState, SetState] = useState('');
  const [isAddressType, SetAddressType] = useState(
    isAddress ? isAddress.address_type : 'Home',
  );
  const [pincodestatus, setpincodestatus] = useState(false);
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const token = useSelector(
    state => state.GoSwiftReducer.GetAccesToken[0].access_token,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    GetAddress();
  }, []);

  const GetAddress = id => {
    dispatch(AddressAction.GetAdressAction(userdetails[0].id, 'Deliver')).then(
      async data => {
        if (data) {
          if (data.length > 0) {
            setAddress(data);
            setspinner(false);
          } else {
            setAddress([]);
          }
        }
      },
    );
  };

  const ReturnGoSwiftAddress = () => {
    if (!isName || (isName && !isName.trim())) {
      Toast.show({
        text1: 'Please,Enter Returning Name',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!isphone || (isphone && !isphone.trim())) {
      Toast.show({
        text1: 'Please,Enter Phone Number',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!isHouse || (isHouse && !isHouse.trim())) {
      Toast.show({
        text1: 'Please,Enter Home Name And Number',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!Isroad || (Isroad && !Isroad.trim())) {
      Toast.show({
        text1: 'Please,Enter Road Name And Number',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!isPincode || (isPincode && !isPincode.trim())) {
      Toast.show({
        text1: 'Please,Enter Pincode',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!isCity || (isCity && !isCity.trim())) {
      Toast.show({
        text1: 'Please,Enter City Name',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (!isState || (isState && !isState.trim())) {
      Toast.show({
        text1: 'Please,Enter State Name',
        type: 'error',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    } else {
      setspinner(true);
      const Data = new FormData();
      Data.append('user_id', userdetails[0].id);
      Data.append('alias ', isName);
      Data.append('address_type', isAddressType);
      Data.append('name', isName);
      Data.append('phone', isphone);
      Data.append('house_no', isHouse);
      Data.append('road_name', Isroad);
      Data.append('landmark', landmark);
      Data.append('pin', isPincode);
      Data.append('city', isCity);
      Data.append('address_category', 'Return');
      dispatch(AddressAction.AddAdressAction(Data)).then(async data => {
        if (data) {
          if (data.success) {
            ToastAndroid.show(data.message, ToastAndroid.SHORT);
            var DataGoswift = JSON.stringify({
              alias: isName,
              phone: parseInt(userdetails[0].mobile_no),
              address_line1:
                isHouse + ' ' + Isroad + ' ' + landmark + ' ' + isAddressType,
              pincode: parseInt(isPincode),
              city: isCity,
              state: isState,
              country: 'IN',
            });
            dispatch(
              Go_Swift_Action.AddPickUpGoSwiftAddressAction(DataGoswift, token),
            ).then(async data => {
              if (data) {
                if (data.status) {
                  props.navigation.replace('OrderSummaryScreen', {
                    Address: isAddress[0],
                    alias: isName,
                  });
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
            });
            //   props.navigation.replace('ReturnAddressScreen', {data: ''});
          } else {
            ToastAndroid.show(data.message, ToastAndroid.SHORT);
          }
        }
        setspinner(false);
      });
    }
  };

  //-------------------- Check pincode -----------------------------//
  const CheckPincode = isPincode => {
    dispatch(
      Go_Swift_Action.Check_Pincode_Go_Swift_Action(isPincode, token),
    ).then(async data => {
      if (data) {
        if (!data.status) {
          setpincodestatus(true);
        } else {
          setpincodestatus(false);
        }
      }
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.topindicator]}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={1}
          labels={Retunlabels}
        />
      </View>

      <ScrollView>
        {/*--------------------------------- Address type ----------------------*/}
        <View style={[styles.flexrow, styles.subhead]}>
          <Avatar
            size={25}
            icon={{
              name: 'map-marker-alt',
              type: 'fontisto',
              color: colors.black,
              size: 22,
            }}
          />
          <Text style={[styles.titletxt]}>Return Address Type</Text>
        </View>
        <View style={[styles.flexrow, styles.subhead]}>
          <RadioButton
            value="Home"
            status={isAddressType === 'Home' ? 'checked' : 'unchecked'}
            onPress={() => SetAddressType('Home')}
            color={colors.AppDefaultColor}
          />
          <Text style={[styles.label]}>Daily House Address</Text>
        </View>
        <View style={[styles.flexrow, styles.subhead, {marginVertical: '0%'}]}>
          <RadioButton
            value="Office"
            status={isAddressType === 'Office' ? 'checked' : 'unchecked'}
            onPress={() => SetAddressType('Office')}
            color={colors.AppDefaultColor}
          />
          <Text style={[styles.label]}>Your Warehouse Address</Text>
        </View>
        <View style={[styles.flexrow, styles.subhead]}>
          <Avatar
            size={25}
            icon={{
              name: 'call',
              type: 'ionicon',
              color: colors.black,
              size: 22,
            }}
          />
          <Text style={[styles.titletxt]}>Contact Details</Text>
        </View>
        <View style={[styles.mainview]}>
          <TextInput
            label="Name"
            value={isName}
            onChangeText={text => setName(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
          />
          <TextInput
            label="Phone Number"
            value={isphone}
            onChangeText={text => setphone(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
            keyboardType={'phone-pad'}
          />
        </View>

        {/* Address */}

        <View style={[styles.flexrow, styles.subhead]}>
          <Avatar
            size={25}
            icon={{
              name: 'map-marker-alt',
              type: 'fontisto',
              color: colors.black,
              size: 22,
            }}
          />
          <Text style={[styles.titletxt]}>Address</Text>
        </View>

        <View style={[styles.mainview]}>
          <TextInput
            label="House no / Flat no / Building name"
            value={isHouse}
            onChangeText={text => setHouse(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
          />
          <TextInput
            label="Road name/ Area / Colony"
            value={Isroad}
            onChangeText={text => setRoad(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
          />
          <TextInput
            label="Landmark"
            value={landmark}
            onChangeText={text => setlandmark(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
          />
          <View style={[styles.flexjustify]}>
            <TextInput
              label="Pincode"
              placeholder="Pincode number"
              value={isPincode}
              onChangeText={text => setPincode(text)}
              selectionColor={colors.black}
              style={[styles.txtinpute, {width: width / 2.3}]}
              underlineColor={colors.grey}
              activeUnderlineColor={colors.AppDefaultColor}
              placeholderTextColor={colors.grey}
              autoCapitalize={true}
              onSubmitEditing={() => CheckPincode(isPincode)}
              keyboardType={'numeric'}
              error={pincodestatus}
            />
            <TextInput
              label="City"
              placeholder="City"
              value={isCity}
              onChangeText={text => setCity(text)}
              selectionColor={colors.black}
              style={[styles.txtinpute, {width: width / 2.2}]}
              underlineColor={colors.grey}
              activeUnderlineColor={colors.AppDefaultColor}
              placeholderTextColor={colors.grey}
              autoCapitalize={true}
            />
          </View>
          <TextInput
            label="State"
            value={isState}
            onChangeText={text => SetState(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.grey}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.AppDefaultColor}
          />
        </View>

        <View style={[styles.mainview]}>
          <TouchComponent
            title="Save Address And Continue"
            titlecolor={colors.white}
            backgroundColor={colors.AppDefaultColor}
            fontSize={fontSize.lable}
            paddingVertical={'3%'}
            borderRadius={radious.borderradious}
            marginTop={'5%'}
            marginBottom={'5%'}
            press={() => {
              ReturnGoSwiftAddress();
            }}
          />
        </View>
      </ScrollView>

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

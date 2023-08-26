import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, ToastAndroid, View} from 'react-native';
import {styles} from './AddNewAddressStyle';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, labels, width} from '../../Helper/Constant';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {Avatar, Divider} from '@rneui/base';
import {TextInput, RadioButton} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {AddressAction} from '../../Action/AddressAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
function AddNewAddressScreen(props) {
  const [isAddress, setAddress] = useState(
    props.route.params.data && props.route.params.data,
  );
  const [spinner, setspinner] = useState(false);
  const [isName, setName] = useState(isAddress && isAddress.name);
  const [isphone, setphone] = useState(isAddress && isAddress.phone);
  const [isHouse, setHouse] = useState(isAddress && isAddress.house_no);
  const [Isroad, setRoad] = useState(isAddress && isAddress.road_name);
  const [landmark, setlandmark] = useState(isAddress && isAddress.landmark);
  const [isPincode, setPincode] = useState(isAddress && isAddress.pin);
  const [isCity, setCity] = useState(isAddress && isAddress.city);
  const [isState, SetState] = useState('');
  const [pincodestatus, setpincodestatus] = useState(false);
  const [isAddressType, SetAddressType] = useState(
    isAddress ? isAddress.address_type : 'Home',
  );
  const [ReturnAddress, SetReturnAddress] = useState([]);
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const dispatch = useDispatch();
  const token = useSelector(
    state => state.GoSwiftReducer.GetAccesToken[0].access_token,
  );

  useEffect(() => {
    GetAddressReturn();
  }, []);

  const GetAddressReturn = id => {
    dispatch(AddressAction.GetAdressAction(userdetails[0].id, 'Return')).then(
      async data => {
        if (data) {
          if (data.length > 0) {
            SetReturnAddress(data);
          } else {
            setAddress([]);
          }
        }
      },
    );
  };
  //----------------------------Add address --------------------------//

  const Address = () => {
    if (!isName) {
      ToastAndroid.show('Enter name', ToastAndroid.SHORT);
    } else if (!isphone) {
      ToastAndroid.show('Enter Phone', ToastAndroid.SHORT);
    } else if (!isHouse) {
      ToastAndroid.show('Enter House/Flat/ Building name', ToastAndroid.SHORT);
    } else if (!Isroad) {
      ToastAndroid.show('Enter Road name / area', ToastAndroid.SHORT);
    } else if (!landmark) {
      ToastAndroid.show('Enter Colony', ToastAndroid.SHORT);
    } else if (!isPincode) {
      ToastAndroid.show('Enter Pincode', ToastAndroid.SHORT);
    } else if (!isCity) {
      ToastAndroid.show('Enter City', ToastAndroid.SHORT);
    } else if (!isState) {
      ToastAndroid.show('Enter State', ToastAndroid.SHORT);
    } else {
      setspinner(true);
      const Data = new FormData();
      Data.append('user_id', userdetails[0].id);
      Data.append('address_type', isAddressType);
      Data.append('name', isName);
      Data.append('phone', isphone);
      Data.append('house_no', isHouse);
      Data.append('road_name', Isroad);
      Data.append('landmark', landmark);
      Data.append('pin', isPincode);
      Data.append('city', isCity);
      Data.append('address_category', 'Deliver');
      dispatch(AddressAction.AddAdressAction(Data)).then(async data => {
        if (data) {
          if (data.success) {
            if (ReturnAddress.length == 0) {
              ToastAndroid.show(data.message, ToastAndroid.SHORT);
              props.navigation.replace('ReturnAddressScreen', {data: ''});
            } else {
              props.navigation.pop();
            }
          } else {
            ToastAndroid.show(data.message, ToastAndroid.SHORT);
          }
        }
        setspinner(false);
      });
    }
  };

  //---------------------------UPDATE NEW ADDRESS --------------------------------------------//

  const UpdateAddress = () => {
    // console.log(props.navigation.reset());
    // return false;
    if (!isName) {
      Toast.show({
        type: 'error',
        text1: 'Enter Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isphone) {
      Toast.show({
        type: 'error',
        text1: 'Enter phone number ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isHouse) {
      Toast.show({
        type: 'error',
        text1: 'Enter house no / flat no / building name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!Isroad) {
      Toast.show({
        type: 'error',
        text1: 'Enter road no / area / calony name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!landmark) {
      Toast.show({
        type: 'error',
        text1: 'Enter landmark',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isPincode) {
      Toast.show({
        type: 'error',
        text1: 'Enter pincode',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isCity) {
      Toast.show({
        type: 'error',
        text1: 'Enter city name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isAddressType) {
      Toast.show({
        type: 'error',
        text1: 'select address type',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      var Data = new FormData();
      Data.append('id', props.route.params.data.id);
      Data.append('user_id', userdetails[0].id);
      Data.append('address_type', isAddressType);
      Data.append('name', isName);
      Data.append('phone', isphone);
      Data.append('house_no', isHouse);
      Data.append('road_name', Isroad);
      Data.append('landmark', landmark);
      Data.append('pin', isPincode);
      Data.append('city', isCity);
      dispatch(AddressAction.UPDATEAdressAction(Data)).then(async data => {
        if (data) {
          if (data.success) {
            Toast.show({
              type: 'success',
              text1: data.message,
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
            props.navigation.replace('AddressScreen', {data: ''});
          } else {
            Toast.show({
              type: 'error',
              text1: data.message,
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
          }
        }
      });
    }
  };

  //---------------------SaveBotton Click --------------------------//
  const BottonClick = () => {
    if (pincodestatus) {
      Toast.show({
        type: 'error',
        text1: 'Service not available',
        text2: 'Please, enter diffrent pincode',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      if (props.route.params.data == '') {
        Address();
      } else {
        UpdateAddress();
      }
    }
  };

  //-------------------------------- check pin code -------------------//

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
          labels={labels}
        />
      </View>
      <ScrollView>
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
              label={pincodestatus ? 'Not seviceable' : 'Pincode'}
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
          <Text style={[styles.titletxt]}>Address Type</Text>
        </View>
        <View style={[styles.flexrow, styles.subhead]}>
          <RadioButton
            value="Home"
            status={isAddressType === 'Home' ? 'checked' : 'unchecked'}
            onPress={() => SetAddressType('Home')}
            color={colors.AppDefaultColor}
          />
          <Text style={[styles.label]}>Home</Text>
        </View>
        <View style={[styles.flexrow, styles.subhead, {marginVertical: '0%'}]}>
          <RadioButton
            value="Office"
            status={isAddressType === 'Office' ? 'checked' : 'unchecked'}
            onPress={() => SetAddressType('Office')}
            color={colors.AppDefaultColor}
          />
          <Text style={[styles.label]}>Office</Text>
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
              BottonClick();
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
}

export default AddNewAddressScreen;

import {Avatar} from '@rneui/base';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import GenderDropdownComponent from '../../Component/GenderDropDown';
import CustomDropdownComponent from '../../Component/CustomDropDownComponent';
import {colors} from '../../Utils/Colors';
import {styles} from './UserProfileStyle';
import {height, states, width} from '../../Helper/Constant';
import TouchComponent from '../../Component/TouchComponent';
import {fontSize} from '../../Utils/Size';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileAction} from '../../Action/ProfileAction';
import moment from 'moment';
import {AuthAction} from '../../Action/AuthAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
function UserProfileScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [isName, setname] = useState(userdetails[0].name);
  const [isphone, setphone] = useState(userdetails[0].mobile_no);
  const [isEmailId, setEmailId] = useState(userdetails[0].email);
  const [IsGender, SetGender] = useState(userdetails[0].gender);
  const [iscity, setcity] = useState(userdetails[0].city);
  const [isState, setState] = useState(userdetails[0].state);
  const [isPincode, setPincode] = useState(userdetails[0].pincode);
  const [spinner, setspinner] = useState(false);
  const [isStreetName, setisStreetName] = useState(userdetails[0].street);
  const [isGSTIN, setisGSTIN] = useState(userdetails[0].gst);
  const [isHSN, setisHSN] = useState(userdetails[0].hsn);
  const dispatch = useDispatch();

  //----------------------Update Profile------------------------------------//
  console.log(isName, '--------');
  const UpdateProfile = () => {
    if (isName && isName.trim() && !isName) {
      Toast.show({
        type: 'error',
        text1: 'Enter Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isEmailId && isEmailId.trim() && !isEmailId) {
      Toast.show({
        type: 'error',
        text1: 'Enter Email ID',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (IsGender && IsGender.trim() && !IsGender) {
      Toast.show({
        type: 'error',
        text1: 'Enter Gender',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isStreetName && isStreetName.trim() && !isStreetName) {
      Toast.show({
        type: 'error',
        text1: 'Enter Street Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (iscity && iscity.trim() && !iscity) {
      Toast.show({
        type: 'error',
        text1: 'Enter City Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isState && isState.trim() && !isState) {
      Toast.show({
        type: 'error',
        text1: 'Enter State Name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isPincode && isPincode.trim() && !isPincode) {
      Toast.show({
        type: 'error',
        text1: 'Enter Pincode',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isGSTIN && isGSTIN.trim() && !isGSTIN) {
      Toast.show({
        type: 'error',
        text1: 'Enter GSTIn',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      setspinner(true);
      let Data = new FormData();
      Data.append('user_id', userdetails[0].id);
      Data.append('mobile_no', userdetails[0].mobile_no);
      Data.append('name', isName);
      Data.append('email', isEmailId);
      Data.append('gender', IsGender);
      Data.append('city', iscity);
      Data.append('state', isState);
      Data.append('pincode', isPincode);
      Data.append('hsn', isHSN);
      Data.append('gst', isGSTIN);
      Data.append('street', isStreetName);
      dispatch(ProfileAction.UpdateProfile(Data)).then(async data => {
        if (data) {
          if (data.success) {
            dispatch(
              AuthAction.LoginAction(
                userdetails[0].mobile_no,
                moment().format('DD-MM-YYYY'),
              ),
              Toast.show({
                type: 'success',
                text1: data.message,
                position: 'bottom',
                visibilityTime: 2000,
                autoHide: true,
              }),
              setspinner(false),
              props.navigation.pop(),
            );
          }
        }
      });
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('MobileNumber');
      if (value !== null) {
        // value previously stored
        dispatch(AuthAction.LoginAction(value, moment().format('DD-MM-YYYY')));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <SafeAreaView style={[styles.Container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          rounded
          size={80}
          source={require('../../Assets/Photos/user_icon.png')}
          containerStyle={[styles.avatarconatner]}
        />
        <Text style={[styles.addpictxt]}>ADD PICTURE</Text>

        {/* Full Name */}
        <View>
          <TextInput
            label="Full Name"
            placeholder="Full Name"
            value={isName}
            onChangeText={text => setname(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>
        {/* Phone  Number */}
        <View>
          <TextInput
            label="Phone"
            placeholder="Phone"
            value={isphone}
            onChangeText={text => setphone(text)}
            selectionColor={colors.black}
            style={[styles.txtinpute, {backgroundColor: colors.lightygrey}]}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
            editable={false}
          />
        </View>
        {/* Email  Id */}
        <View>
          <TextInput
            label="Email ID"
            placeholder="Email Id"
            value={isEmailId}
            onChangeText={text => setEmailId(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>
        {/* Gender  */}
        <View style={[styles.genderview]}>
          <GenderDropdownComponent
            GetValue={v => SetGender(v)}
            SelectedValue={IsGender}
          />
        </View>

        {/* Street  Name */}
        <View>
          <TextInput
            label="Street Name"
            placeholder="Street Name"
            value={isStreetName}
            onChangeText={text => setisStreetName(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>
        {/* City  Name */}
        <View>
          <TextInput
            label="City"
            placeholder="City"
            value={iscity}
            onChangeText={text => setcity(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>

        {/* State  */}
        <View
          style={[
            styles.genderview,
            {
              borderBottomWidth: 1,
              width: width - 10,
              alignSelf: 'center',
              borderBottomColor: colors.AppDefaultColor,
            },
          ]}>
          <CustomDropdownComponent
            data={states}
            label="State"
            placeholder="State"
            height={height / 2}
            SelectedValue={isState}
            Getvalue={v => setState(v)}
          />
        </View>

        {/* Pincode */}
        <View>
          <TextInput
            label="Pincode"
            placeholder="Pincode"
            value={isPincode}
            onChangeText={text => setPincode(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>

        {/* GST */}
        <View>
          <TextInput
            label="GSTIN"
            placeholder="GST"
            value={isGSTIN}
            onChangeText={text => setisGSTIN(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>
        {/* HSN */}
        <View>
          <TextInput
            label="HSN"
            placeholder="HSN Code"
            value={isHSN}
            onChangeText={text => setisHSN(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            // placeholderTextColor={colors.AppDefaultColor}
          />
        </View>

        <View style={[styles.btnstyle]}>
          <TouchComponent
            title="Save"
            backgroundColor={colors.AppDefaultColor}
            titlecolor={colors.white}
            fontSize={fontSize.lable}
            paddingVertical={'3%'}
            press={() => UpdateProfile()}
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

export default UserProfileScreen;

import React from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import {Avatar, BottomSheet, Divider} from '@rneui/base';
import PhoneInput from 'react-native-phone-number-input';
import Shimmer from 'react-native-shimmer';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import TouchComponent from './TouchComponent';
import {AuthAction} from '../Action/AuthAction';
import {colors} from '../Utils/Colors';
import {height, width} from '../Helper/Constant';
import {fontSize, radious} from '../Utils/Size';
function LoginCompoent(props) {
  const [isPhoneNumber, setPhoneNumber] = useState('');
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(
    props.isLogin,
  );
  const [isSignUp, setSignUp] = useState(true);
  const [formattedValue, setFormattedValue] = useState('');
  const dispatch = useDispatch();
  const Bottomsheetback = () => {
    setSignUp(true);
    setIsBottomSheetVisible(false);
    props.GetisLogin(false);
  };

  const SignUpFunction = (mobile, date) => {
    dispatch(AuthAction.LoginAction(mobile, date)).then(async data => {
      if (data) {
        if (data.length > 0) {
          try {
            await AsyncStorage.setItem('MobileNumber', data[0].mobile_no);
            setSignUp(false);
          } catch (e) {
            // saving error
            Toast.show({
              type: 'error',
              text1: 'Something Went Wrong',
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            });
          }
        }
      }
    });
  };
  return (
    <SafeAreaView>
      <BottomSheet
        onBackdropPress={() => Bottomsheetback()}
        modalProps={{}}
        isVisible={isBottomSheetVisible}
        containerStyle={styles.bottomsheetstyle}>
        <Shimmer style={[styles.logoview]}>
          <Text style={[styles.logotxt]}> Daily Housing </Text>
        </Shimmer>

        {isSignUp ? (
          <View style={[styles.BottomSheetView]}>
            <View>
              <PhoneInput
                //  ref={phoneInput}
                defaultValue={isPhoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
                containerStyle={[styles.PhoneContner]}
                textContainerStyle={[styles.textinputecontner]}
              />

              <TouchComponent
                title="Signup"
                backgroundColor={colors.AppDefaultColor}
                titlecolor={colors.white}
                marginTop={'10%'}
                paddingVertical={'5%'}
                paddingHorizontal={'41%'}
                alignSelf="center"
                borderRadius={radious.borderradious}
                press={() =>
                  SignUpFunction(isPhoneNumber, moment().format('DD-MM-YYYY'))
                }
              />
            </View>
          </View>
        ) : (
          <View style={[styles.BottomSheetView]}>
            <Text style={[styles.sublogo]}>OTP</Text>
            <OTPInputView
              style={styles.optstyle}
              pinCount={6}
              placeholderCharacter="*"
              codeInputFieldStyle={[styles.optinputestyle]}
              codeInputHighlightStyle={[styles.otpinputehilight]}
            />
            <TouchComponent
              title="Verify"
              backgroundColor={colors.AppDefaultColor}
              titlecolor={colors.white}
              marginTop={'25%'}
              paddingVertical={'5%'}
              paddingHorizontal={'44%'}
              alignSelf="center"
              borderRadius={radious.borderradious}
              press={() => Bottomsheetback()}
            />
          </View>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
}

export default LoginCompoent;

const styles = StyleSheet.create({
  bottomsheetstyle: {
    backgroundColor: colors.AppDefaultColor,
    height: height,
  },

  BottomSheetView: {
    width: width,
    height: height / 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: radious.borderradious,
    borderTopRightRadius: radious.borderradious,
  },
  PhoneContner: {
    alignSelf: 'center',
    marginTop: '5%',
    width: width - 20,
    borderRadius: radious.borderradious,
  },
  textinputecontner: {
    borderRadius: radious.borderradious,
    backgroundColor: colors.white,
  },

  logotxt: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.Splash,
    marginBottom: '50%',
    fontWeight: '600',
  },
  optstyle: {
    position: 'absolute',
    top: 40,
    alignSelf: 'center',
    width: width - 10,
  },
  sublogo: {
    textAlign: 'center',
    color: colors.AppDefaultColor,
    fontSize: fontSize.lable,
    paddingVertical: '2%',
  },
  optinputestyle: {
    borderColor: colors.txtgrey,
    borderRadius: radious.borderradious,
    color: colors.AppDefaultColor,
  },
  otpinputehilight: {
    borderColor: colors.AppDefaultColor,
    borderWidth: 2,
  },
});

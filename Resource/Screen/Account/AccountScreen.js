import {Avatar, BottomSheet, Divider} from '@rneui/base';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Linking,
} from 'react-native';
import {colors} from '../../Utils/Colors';
import {styles} from './AccountStyle';
import PhoneInput from 'react-native-phone-number-input';
import Shimmer from 'react-native-shimmer';
import TouchComponent from '../../Component/TouchComponent';
import {radious} from '../../Utils/Size';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SearchOverlayComponent from '../../Component/SearchOverlayCompoent';
import {useDispatch, useSelector} from 'react-redux';
import {AuthAction} from '../../Action/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
function AccountScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isearch, setsearch] = useState(false);
  const dispatch = useDispatch();
  const [isPhoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [isSignUp, setSignUp] = useState(true);
  const [spinner, setspinner] = useState(false);
  const RateDailyHouseing = () => {
    Linking.openURL(
      'http://play.google.com/store/apps/details?id=<package_name>',
    );
  };

  const isLogin = () => {
    if (userdetails) {
      if (userdetails.length > 0) {
        if (userdetails[0].mobile_no) {
          props.navigation.push('UserProfileScreen');
        } else {
          setIsBottomSheetVisible(true);
        }
      } else {
        setIsBottomSheetVisible(true);
      }
    } else {
      setIsBottomSheetVisible(true);
    }
  };
  const Bottomsheetback = () => {
    setIsBottomSheetVisible(false);
    setSignUp(true);
  };
  const toggleOverlay = () => {
    setsearch(!props.isOpen);
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

  //------------------------Sign out ---------------------------//

  const SignOut = async () => {
    try {
      setspinner(true);
      await AsyncStorage.setItem('MobileNumber', '');
      dispatch(AuthAction.LoginAction('', moment().format('DD-MM-YYYY'))).then(
        async data => {
          setspinner(false);
        },
      );
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Something Went Wrong',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    }
  };

  useEffect(() => {
    const Data = {
      password: '12@Salakutta',
      username: 'gaurav.ojha.mcs@gmail.com',
    };
  });

  return (
    <SafeAreaView style={[styles.Container]}>
      {/* status bar */}
      <StatusBar
        backgroundColor={colors.AppDefaultColor}
        barStyle={colors.AppDefaultColor}
      />

      {!isearch ? (
        <>
          {/* ------------------------------header ---------------------*/}
          <View
            style={[
              styles.HeaderView,
              styles.FlexDirectionWithJustify,
              styles.SplacepingHorizontalkfive,
            ]}>
            <Text style={[styles.headertxt]}>ACCOUNT</Text>
            <View style={[styles.FlexDirectionWithoutJustify]}>
              <Avatar
                onPress={() => setsearch(!isearch)}
                icon={{
                  name: 'search1',
                  type: 'antdesign',
                  color: colors.white,
                  size: 25,
                }}
              />
              <Avatar
                onPress={() => props.navigation.push('CartScreen')}
                icon={{
                  name: 'shoppingcart',
                  type: 'antdesign',
                  color: colors.white,
                  size: 25,
                }}
              />
            </View>
          </View>
          {/* List */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* -------------------Account top View----------------------- */}
            <Divider width={4} />
            <Pressable
              onPress={() => isLogin()}
              style={[
                styles.FlexDirectionWithJustify,
                styles.spacingtopmargin,
              ]}>
              <View
                style={[
                  styles.FlexDirectionWithoutJustify,
                  styles.spacingvertical,
                ]}>
                <Avatar
                  size={60}
                  rounded
                  source={require('../../Assets/Photos/user_icon.png')}
                  containerStyle={styles.useravtarconatner}
                  avatarStyle={{resizeMode: 'cover'}}
                />
                <Text style={[styles.usernametxt]}>
                  {userdetails
                    ? userdetails.length > 0
                      ? userdetails[0].name
                        ? userdetails[0].name
                        : userdetails[0].mobile_no
                        ? userdetails[0].mobile_no
                        : 'User Name'
                      : 'User Name'
                    : 'User Name'}
                </Text>
              </View>
              <Avatar
                icon={{
                  name: 'right',
                  type: 'antdesign',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={[styles.rightarrowiconcontaner]}
              />
            </Pressable>
            {/*---------------------------------- help Center Botton --------------------------*/}
            <Divider width={4} />
            <Pressable
              onPress={() => props.navigation.push('HelpCenterScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'customerservice',
                  type: 'antdesign',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Help Center</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />
            {/* My Bank Detail */}
            <Pressable
              onPress={() => props.navigation.push('BankDetailsScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'bank',
                  type: 'font-awesome',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Bank Details</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />
            {/* My Payments */}
            <Pressable
              onPress={() => props.navigation.push('MyPayments')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'credit-card',
                  type: 'font-awesome',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>My Payments</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />
            {/* Refer and erarn  */}
            <Pressable
              onPress={() => props.navigation.push('ReferAndEarnScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'gift',
                  type: 'antdesign',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Refer & Earn</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />
            {/* Become A supplier */}
            <Pressable
              onPress={() => props.navigation.push('BecomeSupplierScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'shop',
                  type: 'entypo',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Become a Supplier</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />
            {/* Setting */}
            <Pressable
              onPress={() => props.navigation.push('SettingScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'setting',
                  type: 'antdesign',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Settings</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />

            {/* Rate US */}
            <Pressable
              onPress={() => RateDailyHouseing()}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'staro',
                  type: 'antdesign',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Rate Daily Housing</Text>
            </Pressable>
            <Divider width={1} style={styles.Dividerstyle} />

            {/* Legal Polices */}
            <Pressable
              onPress={() => props.navigation.navigate('LegalPoliciesScreen')}
              style={[
                styles.FlexDirectionWithoutJustify,
                styles.topAccountstyle,
                styles.spacingtopmargin,
              ]}>
              <Avatar
                icon={{
                  name: 'clipboard-pencil',
                  type: 'foundation',
                  color: colors.black,
                  size: 25,
                }}
                containerStyle={styles.useravtarconatner}
              />
              <Text style={[styles.helpcentertxt]}>Legal Policies</Text>
            </Pressable>

            {/* ----------------------------------logout--------------------------------- */}
            {userdetails && userdetails.length > 0 && (
              <>
                <Divider width={1} style={styles.Dividerstyle} />
                <Pressable
                  onPress={() => SignOut()}
                  style={[
                    styles.FlexDirectionWithoutJustify,
                    styles.topAccountstyle,
                    styles.spacingtopmargin,
                  ]}>
                  <Avatar
                    icon={{
                      name: 'logout',
                      type: 'antdesign',
                      color: colors.black,
                      size: 25,
                    }}
                    containerStyle={styles.useravtarconatner}
                  />
                  <Text style={[styles.helpcentertxt]}>Sign out</Text>
                </Pressable>
              </>
            )}

            <Divider width={1} style={styles.Dividerstyle} />
            {/* Bottom */}
            <View style={[styles.Bottom]}>
              <Text style={[styles.dailytxt]}>Daily Housing</Text>
              <Text style={[styles.versiontxt]}>Version 00.001</Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <SearchOverlayComponent
            isOpen={isearch}
            Getbackpress={c => setsearch(c)}
            navigation={props.navigation}
          />
        </>
      )}

      {/* BottomSheet */}
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
export default AccountScreen;

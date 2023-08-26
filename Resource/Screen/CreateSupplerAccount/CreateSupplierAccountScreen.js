import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import GenderDropdownComponent from '../../Component/GenderDropDown';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {radious} from '../../Utils/Size';
import {styles} from './CreateSupplierAccountStyle';
const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {ProfileAction} from '../../Action/ProfileAction';
import moment from 'moment';
import {AuthAction} from '../../Action/AuthAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {SellerAction} from '../../Action/SellerAction';

function CraeteSupplierScreen(props) {
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [isName, setname] = useState(userdetails[0].name);
  const [isphone, setphone] = useState(userdetails[0].mobile_no);
  const [isEmailId, setEmailId] = useState(userdetails[0].email);
  const [IsGender, SetGender] = useState(userdetails[0].gender);
  const [Store, SetStore] = useState('');
  const [ispassword, setpassword] = useState('');
  const dispatch = useDispatch();
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

  //-------------------------Create Seller Account --------------------------------//
  //props.navigation.push('GSTScreen')
  const CreateSellerAccount = () => {
    if (!Store) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please Enter Store name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isName) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please Enter Seller name',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isphone) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please Enter Phone Number',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isEmailId) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please Enter Email Id ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!IsGender) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please , Select Your Gender',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!ispassword) {
      Toast.show({
        type: 'error',
        text1: 'Oops !',
        text2: 'please , Enter Password',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      let Data = new FormData();
      Data.append(
        'ref_no',
        Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      );
      Data.append('user_id', userdetails[0].id);
      Data.append('email', isEmailId);
      Data.append('mobile', isphone);
      Data.append('name', isName);
      Data.append('store_name', Store);
      Data.append('gender', IsGender);
      Data.append('password', ispassword);
      dispatch(AuthAction.CreateSellerAccountAction(Data)).then(async data => {
        console.log(data);
        if (data) {
          if (data.success) {
            GetSellerId(userdetails[0].id);
            Toast.show({
              type: 'success',
              text1: data.message,
              position: 'bottom',
              visibilityTime: 2000,
              autoHide: true,
            }),
              setspinner(false),
              props.navigation.push('GSTScreen');
            dispatch(
              AuthAction.LoginAction(
                userdetails[0].mobile_no,
                moment().format('DD-MM-YYYY'),
              ),
            );
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

  const GetSellerId = id => {
    setspinner(true);
    dispatch(SellerAction.GetSellerId(id)).then(async data => {
      if (data) {
        console.log(data);
      }
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={colors.AppDefaultColor} />
      <Text style={[styles.subheadertxt]}>
        Sell your products to croes of buyers
      </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={106}>
        {/* text inpute main view */}
        <ScrollView style={[styles.main]}>
          {/* Store Name */}
          <TextInput
            label="Store Name"
            placeholder="Enter Store Name"
            value={Store}
            onChangeText={text => SetStore(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
          />

          <TextInput
            label="Seller Name"
            placeholder="Seller Name"
            value={isName}
            onChangeText={text => setname(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
          />
          <TextInput
            label="Mobile Number"
            placeholder="Mobile Number"
            value={isphone}
            onChangeText={text => setphone(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
          />

          <TextInput
            label="Email id"
            placeholder="Email Id"
            value={isEmailId}
            onChangeText={text => setEmailId(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
          />
          {/* Gender  */}
          <View style={[styles.genderview]}>
            <GenderDropdownComponent
              GetValue={v => SetGender(v)}
              SelectedValue={IsGender}
            />
          </View>
          <TextInput
            label="Password"
            placeholder="Choose Password"
            value={ispassword}
            onChangeText={text => setpassword(text)}
            selectionColor={colors.black}
            style={styles.txtinpute}
            underlineColor={colors.Brikcolor}
            activeUnderlineColor={colors.AppDefaultColor}
            placeholderTextColor={colors.grey}
            secureTextEntry={true}
          />

          {/* password hints */}
          <View style={[styles.flexWithJustify, {paddingHorizontal: '1%'}]}>
            <View style={[styles.flexWithoutJustify]}>
              <Avatar
                icon={{
                  name: 'dot-single',
                  type: 'entypo',
                  color: colors.txtgrey,
                  size: 25,
                }}
              />
              <Text style={[styles.passtxt]}>Minimum 8 charaters</Text>
            </View>
            <View style={[styles.flexWithoutJustify]}>
              <Avatar
                icon={{
                  name: 'dot-single',
                  type: 'entypo',
                  color: colors.txtgrey,
                  size: 25,
                }}
              />
              <Text style={[styles.passtxt]}>1 Capital latter(A-Z)</Text>
            </View>
          </View>
          <TouchComponent
            title="Next"
            titlecolor={colors.white}
            backgroundColor={colors.AppDefaultColor}
            width={width - 10}
            alignSelf="center"
            paddingVertical="3.5%"
            borderRadius={radious.borderradious}
            marginTop={'5%'}
            press={() => CreateSellerAccount()}
          />
          {/* Term  */}
          <View
            style={[
              styles.flexWithoutJustify,
              {alignSelf: 'center', marginTop: '5%'},
            ]}>
            <Text style={[styles.txtterm]}>By click you agree to our </Text>
            <Text style={[styles.txtterm, {color: colors.Brikcolor}]}>
              Term & Conditions
            </Text>
            <Text style={[styles.txtterm]}> and</Text>
            <Text style={[styles.txtterm, {color: colors.Brikcolor}]}>
              {' '}
              Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default CraeteSupplierScreen;

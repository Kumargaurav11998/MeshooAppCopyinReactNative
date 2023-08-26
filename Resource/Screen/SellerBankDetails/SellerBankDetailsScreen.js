import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {Pressable, SafeAreaView, Text, View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {styles} from './SellerBankDetailsStyles';
const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {BankAction} from '../../Action/BankAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
export default SellerBankDetailsScreen = props => {
  const [text, setText] = useState('');
  const SellerID = useSelector(state => state.SellerReducer.SellerId[0]);
  const [isAccountholdername, setisAccountholdername] = useState('');
  const [isBankname, setBankname] = useState('');
  const [isBankAccountNumber, setisBankAccountNumber] = useState('');
  const [isCNFBankAccountNumber, SetisCNFBankAccountNumber] = useState('');
  const [isIFCScode, setisIFCScode] = useState('');
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

  const dispatch = useDispatch();

  const SaveBankDetails = () => {
    if (!isAccountholdername) {
      Toast.show({
        type: 'error',
        text1: 'Enter Account Holder Name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isBankname) {
      Toast.show({
        type: 'error',
        text1: 'Enter Bank Name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isBankAccountNumber) {
      Toast.show({
        type: 'error',
        text1: 'Enter Account name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isCNFBankAccountNumber) {
      Toast.show({
        type: 'error',
        text1: 'Reenter Bank Name ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (isBankAccountNumber != isCNFBankAccountNumber) {
      Toast.show({
        type: 'error',
        text1: 'Account number is matching ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else if (!isIFCScode) {
      Toast.show({
        type: 'error',
        text1: 'Enetr IFCS code ',
        position: 'bottom',
        visibilityTime: 2000,
        autoHide: true,
      });
    } else {
      setspinner(true);
      let Data = new FormData();
      Data.append('seller_id', SellerID[0].seller_id);
      Data.append('bank_name', isAccountholdername);
      Data.append('holder_name', isBankname);
      Data.append('account_no', isCNFBankAccountNumber);
      Data.append('IFSC', isIFCScode);

      dispatch(BankAction.SaveSellerBankDetailsAction(Data)).then(
        async data => {
          console.log(data);
          setspinner(false);
          props.navigation.push('SellerHomeScreen');
        },
      );
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      {/* Account name */}
      <TextInput
        label="Account holder name"
        placeholder="Account holder name"
        value={isAccountholdername}
        onChangeText={text => setisAccountholdername(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />

      <TextInput
        label="Bank Name"
        placeholder="Bank Name"
        value={isBankname}
        onChangeText={text => setBankname(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />

      {/* Bank account number  */}
      <TextInput
        label="Bank account number"
        placeholder="Bank account number"
        value={isBankAccountNumber}
        onChangeText={text => setisBankAccountNumber(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />

      {/* confirm account  number  */}
      <TextInput
        label="Confirm account number"
        placeholder=" Confirm account  number"
        value={isCNFBankAccountNumber}
        onChangeText={text => SetisCNFBankAccountNumber(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />
      {/* confirm account  number  */}
      <TextInput
        label="IFSC Code"
        placeholder="IFSC Code"
        value={isIFCScode}
        onChangeText={text => setisIFCScode(text)}
        selectionColor={colors.black}
        style={styles.txtinpute}
        underlineColor={colors.Brikcolor}
        activeUnderlineColor={colors.AppDefaultColor}
        placeholderTextColor={colors.grey}
        autoCapitalize={true}
      />
      <View style={[styles.btn]}>
        <TouchComponent
          title="Submit"
          titlecolor={colors.white}
          backgroundColor={colors.AppDefaultColor}
          width={width}
          alignSelf="center"
          paddingVertical="3.5%"
          // borderRadius={radious.borderradious}
          marginTop={'15%'}
          press={() => SaveBankDetails()}
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

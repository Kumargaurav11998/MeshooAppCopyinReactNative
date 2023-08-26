import {Avatar} from '@rneui/base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {styles} from './BankDetailsStyle';
import {useDispatch, useSelector} from 'react-redux';
import {BankAction} from '../../Action/BankAction';
import LoginCompoent from '../../Component/LoginComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import {useEffect} from 'react';
function BankDetailsScreen(props) {
  const [Bankdetails, setBankDetails] = useState();
  const [isbankAccount, setbankAccount] = useState('');
  const [isbankNoCNF, setbankNoCNF] = useState('');
  const [isbankName, setbankname] = useState('');
  const [IFCSCode, SetIFCSCode] = useState('');
  const [spinner, setspinner] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [isActiveIndicator, setActiveindicator] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userdetails) {
      if (userdetails.length > 0) {
        setActiveindicator(true);
        GetBankDetails(userdetails[0].id);
      }
    }
  }, []);

  //-----------------------Submit Botton  press ----------------------//
  const SubmitBotton = () => {
    if (userdetails) {
      if (userdetails.length > 0) {
        AddBankDetails();
      } else {
        setIsBottomSheetVisible(true);
      }
    } else {
      setIsBottomSheetVisible(true);
    }
  };

  //-----------------------Add bank Details ----------------------//

  const AddBankDetails = () => {
    if (!isbankAccount) {
      ToastAndroid.show('Enter Account No', ToastAndroid.SHORT);
    } else if (!isbankNoCNF) {
      ToastAndroid.show('Enter Confirm Account No', ToastAndroid.SHORT);
    } else if (isbankAccount != isbankNoCNF) {
      ToastAndroid.show('Account No is not same', ToastAndroid.SHORT);
    } else if (!isbankName) {
      ToastAndroid.show('Enter Bank name No', ToastAndroid.SHORT);
    } else if (!IFCSCode) {
      ToastAndroid.show('Enter Bank IFCS No', ToastAndroid.SHORT);
    } else {
      setspinner(true);
      const Data = new FormData();
      Data.append('user_id', userdetails[0].id);
      Data.append('account_no', isbankNoCNF);
      Data.append('bank_name', isbankName);
      Data.append('IFSC', IFCSCode);
      dispatch(BankAction.AddBankAction(Data)).then(async data => {
        setspinner(false);
        props.navigation.goBack();
      });
    }
  };

  //---------------------------------- get bak details -----------------------------//

  const GetBankDetails = id => {
    dispatch(BankAction.GeTBankDetailsAction(id)).then(async data => {
      if (data) {
        if (data.length > 0) {
          setBankDetails(data[0]);
          setbankAccount(data[0].account_no);
          setbankNoCNF(data[0].account_no);
          setbankname(data[0].bank_name);
          SetIFCSCode(data[0].IFSC);
          setActiveindicator(false);
        }
        setActiveindicator(false);
      }
    });
  };

  return (
    <>
      {isActiveIndicator ? (
        <ActivityIndicator
          size={'large'}
          color={colors.AppDefaultColor}
          style={{marginTop: '50%'}}
        />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={50}
          style={styles.Container}>
          <SafeAreaView style={[styles.Container]}>
            <StatusBar backgroundColor={colors.AppDefaultColor} />
            {/* Header View */}
            <Pressable
              onPress={() => props.navigation.goBack()}
              style={[styles.FlexDirectionWithoutJustify, styles.HeaderView]}>
              <Avatar
                icon={{name: 'left', type: 'antdesign', color: colors.white}}
              />
              <Text style={[styles.headertxt]}>My Bank Details</Text>
            </Pressable>

            {/* bank details */}

            <ScrollView>
              <TextInput
                label="Account Number"
                value={isbankAccount}
                onChangeText={text => setbankAccount(text)}
                selectionColor={colors.black}
                style={styles.txtinpute}
                underlineColor={colors.Brikcolor}
                activeUnderlineColor={colors.AppDefaultColor}
                placeholderTextColor={colors.AppDefaultColor}
                keyboardType="number-pad"
                secureTextEntry={true}
              />
              <TextInput
                label="Confirm Account Number"
                value={isbankNoCNF}
                onChangeText={text => setbankNoCNF(text)}
                selectionColor={colors.black}
                style={styles.txtinpute}
                underlineColor={colors.Brikcolor}
                activeUnderlineColor={colors.AppDefaultColor}
                placeholderTextColor={colors.AppDefaultColor}
                keyboardType="number-pad"
              />
              <TextInput
                label="Account Holder Name"
                value={isbankName}
                onChangeText={text => setbankname(text)}
                selectionColor={colors.black}
                style={styles.txtinpute}
                underlineColor={colors.Brikcolor}
                activeUnderlineColor={colors.AppDefaultColor}
                placeholderTextColor={colors.AppDefaultColor}
                autoCapitalize={'characters'}
              />
              <TextInput
                label="IFSC Code"
                value={IFCSCode}
                onChangeText={text => SetIFCSCode(text)}
                selectionColor={colors.black}
                style={styles.txtinpute}
                underlineColor={colors.Brikcolor}
                activeUnderlineColor={colors.AppDefaultColor}
                placeholderTextColor={colors.AppDefaultColor}
                autoCapitalize="characters"
                keyboardType="default"
              />

              <View
                style={[
                  styles.FlexDirectionWithoutJustify,
                  styles.notes,
                  styles.spacingtopmargin,
                ]}>
                <Avatar
                  icon={{
                    name: 'exclamationcircle',
                    type: 'antdesign',
                    color: colors.grey,
                  }}
                />
                <Text style={[styles.notestxtx]}>
                  Please enter your correct bank details carefully. They will be
                  used for all refunds, margin and bonus payments
                </Text>
              </View>

              <TouchComponent
                backgroundColor={colors.AppDefaultColor}
                title="Submit"
                marginTop="10%"
                paddingVertical="4%"
                width="90%"
                alignSelf="center"
                borderRadius={radious.borderradious}
                titlecolor={colors.white}
                fontSize={fontSize.lable}
                press={() => SubmitBotton()}
              />
            </ScrollView>
          </SafeAreaView>

          {isBottomSheetVisible && (
            <LoginCompoent
              isLogin={true}
              GetisLogin={c => setIsBottomSheetVisible(c)}
            />
          )}

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
        </KeyboardAvoidingView>
      )}
    </>
  );
}

export default BankDetailsScreen;

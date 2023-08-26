import {Avatar} from '@rneui/base';
import React, {useLayoutEffect, useState} from 'react';
import {Dimensions, Pressable, SafeAreaView, Text, View} from 'react-native';
import TouchComponent from '../../Component/TouchComponent';
import {colors} from '../../Utils/Colors';
import {styles} from './BecomeSupplierStyle';
import LoginCompoent from '../../Component/LoginComponent';
import {useDispatch, useSelector} from 'react-redux';
import {SellerAction} from '../../Action/SellerAction';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {AddressAction} from '../../Action/AddressAction';
import {BankAction} from '../../Action/BankAction';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
function BecomeSupplierScreen(props) {
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
  const [BottomLogin, SetBottomLogin] = useState(false);
  const [spinner, setspinner] = useState(false);
  const dispatch = useDispatch();
  //------------------------------Check Login , Start Selling Botton -----------------------------//

  const StartSelling = () => {
    dispatch(Go_Swift_Action.GetAccessTokenAction()).then(async data => {
      console.log(data, '------------------');
    });
    if (userdetails) {
      if (userdetails.length > 0) {
        if (userdetails[0].is_seller == 1) {
          GetSellerId(userdetails[0].id);
        } else {
          props.navigation.push('CraeteSupplierScreen');
        }
      } else {
        SetBottomLogin(true);
      }
    } else {
      SetBottomLogin(true);
    }
  };

  //------------------------------------ Get Seller IDs ------------------------------------------------//

  const GetSellerId = id => {
    setspinner(true);
    dispatch(SellerAction.GetSellerId(id)).then(async data => {
      if (data) {
        if (data.length > 0) {
          GetSellerAddress(data[0].seller_id);
        } else {
          props.navigation.push('CraeteSupplierScreen');
        }
      } else {
        setspinner(false);
        Toast.show({
          type: 'error',
          text1: 'Some thing went wrong ',
          text2: 'please try again latter ',
          position: 'bottom',
          visibilityTime: 2000,
          autoHide: true,
        });
      }
    });
  };

  //------------------------ get seller ----------------------------//

  const GetSellerAddress = id => {
    dispatch(AddressAction.GetSelleraddressAction(id)).then(async data => {
      if (data) {
        if (data.length > 0) {
          GetSellerBankDetails(id);
        } else {
          props.navigation.push('PickUpAddressScreen');
        }
      } else {
        setspinner(false);
        Toast.show({
          type: 'error',
          text1: 'Some thing went wrong ',
          text2: 'please try again latter ',
          position: 'bottom',
          visibilityTime: 2000,
          autoHide: true,
        });
      }
    });
  };

  //---------------- get Seller bank details ---------------------//

  const GetSellerBankDetails = id => {
    dispatch(BankAction.GetSellerBankDetailsAction(id)).then(async data => {
      setspinner(false);
      if (data) {
        if (data.length > 0) {
          props.navigation.push('SellerHomeScreen');
        } else {
          props.navigation.push('SellerBankDetailsScreen');
        }
      } else {
        setspinner(false);
        Toast.show({
          type: 'error',
          text1: 'Some thing went wrong ',
          text2: 'please try again latter ',
          position: 'bottom',
          visibilityTime: 2000,
          autoHide: true,
        });
      }
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.btn]}>
        <TouchComponent
          title="Start Selling"
          titlecolor={colors.white}
          backgroundColor={colors.AppDefaultColor}
          marginTop={'80%'}
          width={Dimensions.get('window').width}
          alignSelf="center"
          paddingVertical={'5%'}
          // borderRadius={radious.borderradious}
          press={() => StartSelling()}
        />
      </View>

      {BottomLogin && (
        <LoginCompoent isLogin={true} GetisLogin={v => SetBottomLogin(v)} />
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
    </SafeAreaView>
  );
}

export default BecomeSupplierScreen;

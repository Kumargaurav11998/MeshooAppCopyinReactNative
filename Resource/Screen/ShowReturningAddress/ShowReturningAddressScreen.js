import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, labels, Retunlabels} from '../../Helper/Constant';
import {AddressAction} from '../../Action/AddressAction';
import {colors} from '../../Utils/Colors';
import {fontSize, radious} from '../../Utils/Size';
import {RadioButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import Shimmer from 'react-native-shimmer';
import Toast from 'react-native-toast-message';
import {styles} from './ShowReturningAddressStyle';
function ShowReturnAddressScreen(props) {
  const [checked, setChecked] = useState('0');
  const [AddressData, setAddress] = useState(props.route.params.data);
  const [ReturnAddressData, setReturnAddress] = useState(
    props.route.params.returnAddress,
  );
  const userdetails = useSelector(state => state.Authreducer.Login[0]);
  const [spinner, setspinner] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    GetAddress();
  }, []);

  //-------------------------------get address----------------------//
  const GetAddress = id => {
    dispatch(AddressAction.GetAdressAction(userdetails[0].id, 'Return')).then(
      async data => {
        if (data) {
          if (data.length > 0) {
            setReturnAddress(data);
            setspinner(false);
          } else {
            setReturnAddress([]);
          }
        }
      },
    );
  };

  //--------------------------------delete address ----------------------------//

  const DeleteAddress = id => {
    setspinner(true);
    dispatch(AddressAction.DELETEAdressAction(id)).then(async data => {
      if (data) {
        if (data.success) {
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
        } else {
          Toast.show({
            type: 'success',
            text1: data.message,
            position: 'bottom',
            visibilityTime: 2000,
            autoHide: true,
          });
        }
        GetAddress();
        setspinner(false);
      }
      setspinner(false);
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={[styles.topindicator]}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={1}
            labels={Retunlabels}
          />
        </View>

        {/* Add new address */}
        <TouchComponent
          title="+ ADD NEW RETURN ADDRESS"
          titlecolor={colors.AppDefaultColor}
          fontSize={fontSize.lable}
          fontWeight={'600'}
          alignSelf={'flex-start'}
          marginLeft="7%"
          marginTop="5%"
          press={() => props.navigation.push('ReturnAddressScreen', {data: ''})}
          marginBottom={'5%'}
        />
        {ReturnAddressData.length > 0 &&
          ReturnAddressData.map((item, index) => {
            return (
              <Pressable style={[styles.cardstyle]}>
                <View style={[styles.flexjustify]}>
                  <Text style={[styles.titletxt]}>{item.name}</Text>
                  <RadioButton
                    value={index.toString()}
                    status={
                      checked === index.toString() ? 'checked' : 'unchecked'
                    }
                    color={colors.AppDefaultColor}
                    onPress={() => setChecked(index.toString())}
                  />
                </View>
                <Text style={[styles.txt]}>
                  {item.house_no} , {item.road_name}
                </Text>
                <Text style={[styles.txt]}>
                  {item.landmark} , {item.city} {item.State} {item.pin}
                </Text>
                <Text style={[styles.txt]}>{item.phone}</Text>
                {checked == index && (
                  <>
                    <View style={[styles.flexjustify]}>
                      <Text
                        onPress={() =>
                          props.navigation.replace('ReturnAddressScreen', {
                            data: item,
                          })
                        }
                        style={[styles.edtTxt]}>
                        Edit
                      </Text>
                      <Text
                        onPress={() => DeleteAddress(item.id)}
                        style={[styles.edtTxt]}>
                        Delete
                      </Text>
                    </View>

                    <TouchComponent
                      title="Return to this address"
                      titlecolor={colors.white}
                      backgroundColor={colors.AppDefaultColor}
                      fontSize={fontSize.lable}
                      paddingVertical={'3%'}
                      borderRadius={radious.borderradious}
                      press={() =>
                        props.navigation.push('OrderSummaryScreen', {
                          Address: AddressData,
                          alias: item.name,
                        })
                      }
                    />
                  </>
                )}
              </Pressable>
            );
          })}
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

export default ShowReturnAddressScreen;

import React, {useRef, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Animated, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {CategoryAction} from '../../Action/CategoryAction';
import {ProdcutAction} from '../../Action/ProductsAction';
import {colors} from '../../Utils/Colors';
import {styles} from './SplashStyle';
import {useNetInfo} from '@react-native-community/netinfo';
import {Modal, Portal, Provider} from 'react-native-paper';
import {AuthAction} from '../../Action/AuthAction';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Go_Swift_Action} from '../../Action/Go_Swift_Action';
function SplashScreen(props) {
  const netInfo = useNetInfo();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  useEffect(() => {
    isConnected();
  });
  const move = () => {
    setTimeout(() => {
      props.navigation.replace('TabNavigation');
    }, 3000);
  };

  const ApiFetch = () => {
    getData();
    dispatch(CategoryAction.GetCategoryAction());
    dispatch(ProdcutAction.GetAllProductsAction());
    dispatch(Go_Swift_Action.GetAccessTokenAction());
  };

  const isConnected = () => {
    hideModal();
    if (netInfo.isConnected !== false) {
      hideModal();
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start();
      ApiFetch();
      move();
    } else {
      showModal();
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

  //-------------------- get  token for swift ---------------------------//

  return (
    <Provider>
      <SafeAreaView style={[styles.Container]}>
        <StatusBar
          backgroundColor={colors.AppDefaultColor}
          barStyle={colors.AppDefaultColor}
        />
        <Animated.Text style={[styles.txt, {opacity: fadeAnim}]}>
          DAILY HOUSING
        </Animated.Text>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalcontaner}>
            <Text style={[styles.modaltxt]}>
              Opps 😞{'\n'} No Internet Connection
            </Text>
          </Modal>
        </Portal>
      </SafeAreaView>
    </Provider>
  );
}
export default SplashScreen;

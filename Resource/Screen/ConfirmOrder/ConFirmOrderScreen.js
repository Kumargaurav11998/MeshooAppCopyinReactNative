import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './ConFirmOrdersStyle';
import StepIndicator from 'react-native-step-indicator';
import TouchComponent from '../../Component/TouchComponent';
import {customStyles, data, labels, width} from '../../Helper/Constant';
import {Avatar, Divider} from '@rneui/base';
function ConfirmOrderScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('OrderScreen');
    }, 3000);
  });
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.header]}>Order Confirm </Text>

      <View style={[styles.topindicator]}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={4}
          labels={labels}
        />
        <Divider width={1} style={styles.Dividersub} />
      </View>

      <Avatar
        rounded
        size={100}
        source={require('../../Assets/Photos/tick.png')}
        containerStyle={styles.contanerimg}
      />
      <Text style={[styles.titletxt, styles.mainview]}>
        YOUR ORDER HAS BEEN SUCCESSFULLY PLACED AND SHALL BE DISPATCHED
        IMMEDIATELY. KINDLY CHECK YOUR EMAIL INBOX FOR DETAILS. TRACKING DETAILS
        SHALL BE SENT TO YOU VIA SMS / EMAIL LATER. THANK YOU
      </Text>
    </SafeAreaView>
  );
}

export default ConfirmOrderScreen;

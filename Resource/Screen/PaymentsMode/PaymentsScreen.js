import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './PaymentsStyle';

function PaymentsScreen() {
  return (
    <SafeAreaView style={[styles.conatner]}>
      <Text style={[styles.NopaymentMessage]}>No payment mode saved yet</Text>
    </SafeAreaView>
  );
}

export default PaymentsScreen;

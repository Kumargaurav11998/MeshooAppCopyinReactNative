import {Avatar} from '@rneui/base';
import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {colors} from '../../Utils/Colors';
import {styles} from './TransactionStyle';
function TransactionScreen() {
  return (
    <SafeAreaView style={[styles.conatner]}>
      <StatusBar backgroundColor={colors.AppDefaultColor} />
      <Avatar
        size={150}
        source={require('../../Assets/Photos/wallet.png')}
        containerStyle={[styles.avatarconatner]}
      />
      <Text style={[styles.NopaymentMessage]}>
        Sorry! We couldn't find any payment messages for you
      </Text>
    </SafeAreaView>
  );
}

export default TransactionScreen;

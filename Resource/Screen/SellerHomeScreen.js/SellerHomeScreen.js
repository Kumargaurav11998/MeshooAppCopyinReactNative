import {Avatar} from '@rneui/base';
import React, {useLayoutEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import {colors} from '../../Utils/Colors';
function SellerHomeScreen(props) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => props.navigation.popToTop()}>
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://mettlecrowsolutions.com/Daily-HOusing/seller/seller.html',
        }}
      />
    </SafeAreaView>
  );
}
export default SellerHomeScreen;

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TransactionScreen from '../../Screen/Transations/TransactionScreen';
import PaymentsScreen from '../../Screen/PaymentsMode/PaymentsScreen';
import {Avatar, Icon} from '@rneui/base';
import {Pressable} from 'react-native';
import {colors} from '../../Utils/Colors';
const Tab = createMaterialTopTabNavigator();
function MyPayments({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
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
  }, [navigation]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: colors.AppDefaultColor,
        tabBarActiveTintColor: colors.AppDefaultColor,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transactions',
          tabBarLabelStyle: {fontSize: 12},
          tabBarIndicatorStyle: {
            backgroundColor: colors.AppDefaultColor,
          },
          tabBarBounces: true,
          tabBarAllowFontScaling: false,
        }}
      />
      <Tab.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          tabBarLabel: 'Payment Modes',
          tabBarLabelStyle: {fontSize: 12},
          tabBarIndicatorStyle: {
            backgroundColor: colors.AppDefaultColor,
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MyPayments;
